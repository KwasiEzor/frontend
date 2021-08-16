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
import { agendaData } from "./../../data/agendaData";
const index = () => {
  return (
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
                />
                <Button variant="warning" id="btnSearch">
                  <i className="fas fa-search"></i>
                </Button>
              </InputGroup>
            </Form>
          </Card>
        </div>
        <div className="mb-5">
          {agendaData &&
            agendaData.map((agenda) => <AgendaRow agenda={agenda} />)}
        </div>
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

export default index;
