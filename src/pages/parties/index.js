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

const Index = () => {
  const router = useRouter();
  const { id } = router.query;
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
                />
                <Button variant="warning" id="btnSearch">
                  <i className="fas fa-search"></i>
                </Button>
              </InputGroup>
            </Form>
          </Card>
        </div>
        <Row>
          {partiesGroupData &&
            partiesGroupData.map((data) => (
              <Col lg="3" md="6" sm="12" key={data.id}>
                <Card className="mb-5">
                  <Card.Header>
                    <h6>{data.competition}</h6>
                  </Card.Header>
                  {data.imgSrc && <Card.Img src={data.imgSrc} />}
                  <Card.Body>
                    <Card.Text>{data.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-end">
                    <ul className="list-group list-unstyled d-inline-flex">
                      <li className="list-item mb-2">
                        <i className="fas fa-calendar-alt text-primary"></i>{" "}
                        {data.date}{" "}
                      </li>
                      <li className="list-item mb-2">
                        <span className="text-primary">Série</span> :{" "}
                        {data.series}{" "}
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
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </Container>
    </Container>
  );
};

export default Index;
