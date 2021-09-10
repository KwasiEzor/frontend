import { useRouter } from "next/router";
import { Container, Table, Card, Button, Row } from "react-bootstrap";

import BigTitle from "../../components/utils/BigTitle";
import { partiesData } from "../../data/partiesData";
import { useState } from "react";
import { NextSeo } from "next-seo";

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:1337/sc-games/${params.id}`);
  const data = await res.json();

  return {
    props: {
      scrabbleGame: data,
    },
  };
}

const DetailsPartie = ({ scrabbleGame }) => {
  const router = useRouter();
  const id = router.query.id;
  console.log(scrabbleGame.sc_gm_result);
  console.log(scrabbleGame.sc_gm_round);
  const [resultRanking, setResultRanking] = useState(false);

  // configuration SEO
  const SEO = {
    title: "Braine Trust | Détails partie",
    description:
      "La page des détails d'une partie avec les classements pour le site Braine Trust",
  };
  return (
    <>
      <NextSeo {...SEO} />
      <Container>
        <BigTitle
          imgUrl="/assets/images/letterD.png"
          title="étails partie"
          marginBottom="3rem"
        />
        <Container className="glassMorphic p-5">
          <Card>
            <Card.Header className="text-center bg-primary text-white textShadow">
              <h3>Partie N° {id} </h3>
            </Card.Header>
            <Card.Body>
              <Table
                striped
                bordered
                hover
                responsive="md"
                responsive="sm"
                className=""
              >
                <thead className="text-center bg-warning">
                  <tr>
                    <th>N°</th>
                    <th>Tirage</th>
                    <th>Solution</th>
                    <th>Place</th>
                    <th>Points</th>
                    <th>Commentaire</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {scrabbleGame.sc_gm_round &&
                    scrabbleGame.sc_gm_round.map((data) => (
                      <tr key={data.id}>
                        <td>{data.id}</td>
                        <td className="text-primary">{data.letterSelection}</td>
                        <td className="bgLightBlue">{data.wordSelected}</td>
                        <td>{data.wordSelectedRef}</td>
                        <td>{data.score}</td>
                        <td>{data.comments}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <Card className="text-right">
            <Card.Header className="text-white bg-primary text-center">
              Résultats de la partie
            </Card.Header>
            <Card.Body>
              <Card.Title>Détails du la partie jouée</Card.Title>
              <Card.Text>
                <ul className="list-group d-inline-flex list-unstyled ">
                  <li className="list-item ">
                    Nombre de joueurs :{" "}
                    <span className="fw-bold text-primary text-align-right">
                      {scrabbleGame.sc_gm_result.nbPlayers}
                    </span>
                  </li>
                  <li className="list-item ">
                    Nombre de coups :{" "}
                    <span className="fw-bold text-primary">
                      {scrabbleGame.sc_gm_result.nbScRounds}
                    </span>
                  </li>
                  <li className="list-item ">
                    Nombre de solos :{" "}
                    <span className="fw-bold text-primary">
                      {scrabbleGame.sc_gm_result.nbSolos}
                    </span>
                  </li>
                  <li className="list-item ">
                    TOP :{" "}
                    <span className="fw-bold text-primary">
                      {scrabbleGame.sc_gm_result.totalScore}
                    </span>
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                type="button"
                className="btn btn-info mt-3 float-left"
                onClick={() => setResultRanking(!resultRanking)}
              >
                Voir le classement
              </Button>
            </Card.Footer>
          </Card>

          <Card className={resultRanking ? " " : "d-none"}>
            <Card.Body>
              <Table
                striped
                bordered
                hover
                responsive="md"
                responsive="sm"
                className=""
              >
                <thead className="text-center bg-warning">
                  <tr>
                    <th>N° Rang</th>
                    <th>Score</th>
                    <th>Pourcentage</th>
                    <th>Nom et prénoms</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {scrabbleGame.sc_gm_result.gm_results &&
                    scrabbleGame.sc_gm_result.gm_results.map((result) => (
                      <tr key={result.id}>
                        <td>{result.plyRanking}</td>
                        <td>{result.plyScore}</td>
                        <td>{result.percentage} %</td>
                        <td>{result.plyName}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Container>
      </Container>
    </>
  );
};

export default DetailsPartie;
