import { useRouter } from "next/router";
import { Container, Table, Card } from "react-bootstrap";
import BigTitle from "../../components/utils/BigTitle";
import { partiesData } from "../../data/partiesData";
const DetailsPartie = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <Container>
      <BigTitle
        imgUrl="/assets/images/letterD.png"
        title="étails partie"
        marginBottom="3rem"
      />
      <Container className="glassMorphic p-5">
        <Card>
          <Card.Header className="text-center bg-primary text-white textShadow">
            <h3>Partie {id} de 17h - Simultanés de Belgique</h3>
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
                {partiesData &&
                  partiesData.map((data) => (
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
      </Container>
    </Container>
  );
};

export default DetailsPartie;
