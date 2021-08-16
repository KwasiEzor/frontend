import {
  Container,
  Card,
  Col,
  Row,
  Form,
  FormControl,
  InputGroup,
  Button,
  Table,
} from "react-bootstrap";
import BigTitle from "../../components/utils/BigTitle";
import ReactPagination from "react-paginate";
import React, { useState, useEffect } from "react";
export async function getServerSideProps(context) {
  const res = await fetch("https://randomuser.me/api/?results=50");
  const data = await res.json();
  return {
    props: {
      members: data,
    },
  };
}
const index = ({ members }) => {
  const { results } = members;
  console.log(results);
  const [filteredData, setFilteredData] = useState(results.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  // search function to filter data

  const handleFilter = (event) => {
    const seachWord = event.target.value;
    const newFilterData = results.filter((value) => {
      return (
        value.name.first.toLowerCase().includes(seachWord.toLowerCase()) ||
        value.name.last.toLowerCase().includes(seachWord.toLowerCase()) ||
        value.name.title.toLowerCase().includes(seachWord.toLowerCase()) ||
        value.gender.toLowerCase().includes(seachWord.toLowerCase())
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
        <Col lg="3" md="6" sm="12" key={mb.login.uuid}>
          <Card className="my-4">
            <Card.Header></Card.Header>
            <Card.Img src={mb.picture.medium} />
            <Card.Footer>
              <h6 className="">
                {mb.name.title} {mb.name.first}
              </h6>
              <Card.Text>{mb.name.last}</Card.Text>
            </Card.Footer>
          </Card>
        </Col>
      );
    });
  console.log(pageTotalNumber);
  const showMembersData = (results) => {
    results.slice(pagesVisited, pagesVisited + membersPerPage).map((mb) => (
      <Col lg="3" md="6" sm="12" key={mb.login.uuid}>
        <Card>
          <Card.Header>
            {mb.name.title} {mb.name.first} {mb.name.last}
          </Card.Header>
          <Card.Img src={mb.picture.medium} />
          <Card.Footer></Card.Footer>
        </Card>
      </Col>
    ));
  };

  return (
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
        <Row className="p-4" styel={{ display: "grid", placeItems: "center" }}>
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
  );
};

export default index;
