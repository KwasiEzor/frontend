import {
  Container,
  Card,
  Col,
  Row,
  Form,
  FormControl,
  InputGroup,
  Button,
} from "react-bootstrap";
import BigTitle from "../../components/utils/BigTitle";
import ReactPagination from "react-paginate";
import React, { useState } from "react";
import { GET_ALL_SCRABBLE_MEMBERS } from "../../../graphql/queries";
import client from "./../../../graphql/apolloClient";
import { NextSeo } from "next-seo";

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_ALL_SCRABBLE_MEMBERS,
  });

  return {
    props: {
      members: data.members,
    },
    revalidate: 1,
  };
}

const index = ({ members }) => {
  const DOMAIN_URL = `http://localhost:1337`;
  const [filteredData, setFilteredData] = useState(members.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  // search function to filter data

  const handleFilter = (event) => {
    const seachWord = event.target.value;
    const newFilterData = members.filter((value) => {
      return (
        value.firstname.toLowerCase().includes(seachWord.toLowerCase()) ||
        value.lastname.toLowerCase().includes(seachWord.toLowerCase())
      );
    });
    setFilteredData(newFilterData);
  };
  // members per page
  const membersPerPage = 10;
  // pages visited total members
  const pagesVisited = pageNumber * membersPerPage;
  const pageTotalNumber = Math.ceil(filteredData.length / membersPerPage);
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayedMbrs = filteredData
    .slice(pagesVisited, pagesVisited + membersPerPage)
    .map((mb) => {
      return (
        <Col lg="3" md="6" sm="12" key={mb.id}>
          <Card className="my-4" style={{ height: "400px" }}>
            <Card.Img
              src={`${DOMAIN_URL}${mb.profile_img.url}`}
              style={{
                minHeight: "200px",
                height: "330px",
                objectFit: "cover",
              }}
            />
            <Card.Footer>
              <h6 className="">{mb.firstname}</h6>
              <Card.Text>{mb.lastname}</Card.Text>
            </Card.Footer>
          </Card>
        </Col>
      );
    });
  // console.log(pageTotalNumber);
  // configuration du SEO

  const SEO = {
    title: "Braine Trust | Membres",
    description: "La page des membres pour le site Braine Trust",
  };

  return (
    <>
      <NextSeo {...SEO} />
      <Container
        className="page__scrabble "
        style={{ minHeight: "100vh", padding: " 3rem 0", width: "100%" }}
      >
        <BigTitle
          imgUrl="/assets/images/letterM.png"
          title="embres du Club"
          marginBottom="3rem"
        />
        <Container className="glassMorphic p-5">
          <div>
            <Card
              bg="primary"
              className="mt-5 mb-5"
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
          <Row
            className="p-4"
            styel={{ display: "grid", placeItems: "center" }}
          >
            {displayedMbrs}
          </Row>
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
        </Container>
      </Container>
    </>
  );
};

export default index;
