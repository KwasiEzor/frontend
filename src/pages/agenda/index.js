import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  FormControl,
  InputGroup,
  Pagination,
} from "react-bootstrap";
import AgendaRow from "../../components/utils/AgendaRow";
import BigTitle from "../../components/utils/BigTitle";
// import { agendaData } from "./../../data/agendaData";
import client from "../../../graphql/apolloClient";
import { GET_ALL_AGENDAS } from "../../../graphql/queries";
import { useState } from "react";
import ReactPagination from "react-paginate";
import { NextSeo } from "next-seo";

// Fetching agendas data

export async function getStaticProps() {
  const { data, loading } = await client.query({
    query: GET_ALL_AGENDAS,
  });
  return {
    props: {
      agendaData: data.agendas,
      loading: loading,
    },
    revalidate: 1,
  };
}
const index = ({ agendaData }) => {
  const [filteredData, setFilteredData] = useState(agendaData.slice(0, 45));
  const [pageNumber, setPageNumber] = useState(0);
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilteredData = agendaData.filter((value) => {
      return (
        value.event.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.event_place.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.event_time.toLowerCase().includes(searchWord.toLowerCase())
      );
    });
    setFilteredData(newFilteredData);
  };

  // agendas per page
  const agendasPerPage = 10;
  // pages visited
  const pageVisited = pageNumber * agendasPerPage;
  // total page number
  const pageTotalNumber = Math.ceil(filteredData.length / agendasPerPage);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  // Configuration de SEO
  const SEO = {
    title: "Braine Trust | Agendas",
    description: "La page des Agendas du club  pour le site Braine Trust",
  };
  return (
    <>
      <NextSeo {...SEO} />
      <Container
        className="page__scrabble "
        style={{ minHeight: "100vh", padding: " 3rem 0", width: "100%" }}
      >
        <BigTitle
          imgUrl="/assets/images/letterA.png"
          title="genda du Club"
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
          <div className="mb-5">
            {filteredData
              .slice(pageVisited, pageVisited + agendasPerPage)
              .map((agenda) => (
                <AgendaRow agenda={agenda} key={agenda.id} />
              ))}
          </div>
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
    </>
  );
};

export default index;
