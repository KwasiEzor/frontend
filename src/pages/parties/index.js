import styles from "../../styles/parties.module.css";
import {
  Container,
  Col,
  Card,
  Row,
  Button,
  Pagination,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import BigTitle from "../../components/utils/BigTitle";
import { partiesGroupData } from "../../data/partiesGroupData";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactPagination from "react-paginate";
import React, { useState, useEffect } from "react";
import client from "./../../../graphql/apolloClient";
import { GET_SCRABBLE_GAMES_WITH_RESULTS } from "../../../graphql/queries";
import ScrabbleGamesController from "../../../controllers/scrabbleGamesController";

export async function getStaticProps() {
  const { data, loading } = await client.query({
    query: GET_SCRABBLE_GAMES_WITH_RESULTS,
  });
  return {
    props: {
      scrabbleGames: data.scGames,
      loading: loading,
    },
    revalidate: 1,
  };
}
const scrabbleGameResults = [];
const scrabbleGameRounds = [];
const Index = ({ scrabbleGames }) => {
  const scGamesController = new ScrabbleGamesController();

  const gamesDetails = scrabbleGames.map((games) => {
    // console.log(games.sc_gm_result);
    // console.log(games.sc_gm_round);
    scrabbleGameResults.push(games.sc_gm_result);
    scrabbleGameRounds.push(games.sc_gm_round);
    return {
      games,
    };
  });
  console.log(scrabbleGames);
  console.log(scrabbleGameResults);
  console.log(scrabbleGameRounds);
  const router = useRouter();
  const { id } = router.query;
  const DOMAIN_URL = `http://localhost:1337`;

  const [filteredData, setFilteredData] = useState(scrabbleGames.slice(0, 10));
  const [pageNumber, setPageNumber] = useState(0);

  // games per page

  const gamesPerPage = 10;
  // pages visited

  const pagesVisited = pageNumber * gamesPerPage;
  // total page number

  const pageTotalNumber = Math.ceil(filteredData.length / gamesPerPage);

  // Handle page change function

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  // search filter function

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilteredData = scrabbleGames.filter((value) => {
      return (
        value.sc_gm_result.gameReferee
          .toLowerCase()
          .includes(searchWord.toLowerCase()) ||
        value.sc_gm_result.competition.name
          .toLowerCase()
          .includes(searchWord.toLowerCase())
      );
    });
    setFilteredData(newFilteredData);
  };
  return (
    <Container
      className="page__scrabble "
      style={{ minHeight: "100vh", padding: " 3rem 0", width: "100%" }}
    >
      <BigTitle
        imgUrl="/assets/images/letterP.png"
        title="arties"
        marginBottom="3rem"
      />
      <Container className="glassMorphic p-5">
        <div>
          <Card
            bg="primary"
            className="mb-5"
            style={{ display: "grid", placeItems: "center" }}
          >
            <Form
              style={{
                width: "calc(100% - 20rem)",
              }}
            >
              <InputGroup className="m-4">
                <FormControl
                  placeholder="Entrez un mot clé..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={handleFilter}
                />
                <Button variant="warning" id="btnSearch">
                  <i className="fas fa-search"></i>
                </Button>
              </InputGroup>
            </Form>
          </Card>
        </div>
        <Row>
          {filteredData
            .slice(pagesVisited, pagesVisited + gamesPerPage)
            .map((data, index) => (
              <Col lg="3" md="6" sm="12" key={index}>
                <Card className="mb-5">
                  <Card.Header>
                    <h6>{data.sc_gm_result.competition.name}</h6>
                  </Card.Header>
                  <Card.Img src="/assets/images/scrabble-duplicate.png" />
                  <Card.Body>
                    <Card.Text>
                      <h6>Description :</h6>
                      <p>
                        TOP :{" "}
                        <span className="fw-bold">
                          {data.sc_gm_result.totalScore}
                        </span>
                      </p>
                      <p>
                        Nombre de joueurs :{" "}
                        <span className="fw-bold">
                          {data.sc_gm_result.nbPlayers}
                        </span>
                      </p>
                      <p>
                        Coups :{" "}
                        <span className="fw-bold">
                          {data.sc_gm_result.nbScRounds}
                        </span>
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-end">
                    <ul className="list-group list-unstyled d-inline-flex">
                      <li className="list-item mb-2">
                        <i className="fas fa-calendar-alt text-primary"></i>{" "}
                        {data.date}{" "}
                      </li>
                      <li className="list-item mb-2">
                        <span className="text-primary">Arbitre</span> :{" "}
                        {data.sc_gm_result.gameReferee}{" "}
                      </li>
                    </ul>
                    <div>
                      <Link href={`/parties/${data.id}`}>
                        <Button variant="primary">Détails</Button>
                      </Link>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
        </Row>
        <div className="d-flex align-items-center  justify-content-end">
          <ReactPagination
            containerClassName={"paginationBttns"}
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageTotalNumber}
            onPageChange={handlePageChange}
            previousClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </Container>
    </Container>
  );
};

export default Index;
