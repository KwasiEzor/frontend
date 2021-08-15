import { Container, Tabs, Tab, Row, Col, Card } from "react-bootstrap";
import BigTitle from "../../components/utils/BigTitle";
import { historyData } from "../../data/braineData";
const histoire = () => {
  return (
    <Container
      className="page__scrabble "
      style={{ minHeight: "100vh", padding: " 3rem 0", width: "100%" }}
    >
      <BigTitle
        imgUrl="/assets/images/letterH.png"
        title="istoire du Club"
        marginBottom="3rem"
      />
      <Container className="p-4 glassMorphic">
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Col md="8">
            <Card className="mb-4">
              <Card.Header>
                <img src="/assets/images/letterB.png" alt="letter B" />
              </Card.Header>
              <Card.Body>
                <Card.Text>{historyData[0].letterB}</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Header>
                <img src="/assets/images/letterR.png" alt="letter R" />
              </Card.Header>
              <Card.Body>
                <Card.Text>{historyData[1].letterR}</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Header>
                <img src="/assets/images/letterA.png" alt="letter A" />
              </Card.Header>
              <Card.Body>
                <Card.Text>{historyData[2].letterA}</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Header>
                <img src="/assets/images/letterI.png" alt="letter I" />
              </Card.Header>
              <Card.Body>
                <Card.Text>{historyData[3].letterI}</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Header>
                <img src="/assets/images/letterN.png" alt="letter N" />
              </Card.Header>
              <Card.Body>
                <Card.Text>{historyData[4].letterN}</Card.Text>
              </Card.Body>
              <Card className="mb-4">
                <Card.Header>
                  <img src="/assets/images/letterE.png" alt="letter E" />
                </Card.Header>
                <Card.Body>
                  <Card.Text>{historyData[5].letterE}</Card.Text>
                </Card.Body>
              </Card>
            </Card>
            <Card className="mb-4">
              <Card.Header>
                <img src="/assets/images/letterT.png" alt="letter T" />
              </Card.Header>
              <Card.Body>
                <Card.Text>{historyData[6].letterT}</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Header>
                <img src="/assets/images/letterR.png" alt="letter R" />
              </Card.Header>
              <Card.Body>
                <Card.Text>{historyData[7].letterRR}</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Header>
                <img src="/assets/images/letterU.png" alt="letter U" />
              </Card.Header>
              <Card.Body>
                <Card.Text>{historyData[8].letterU}</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Header>
                <img src="/assets/images/letterS.png" alt="letter S" />
              </Card.Header>
              <Card.Body>
                <Card.Text>{historyData[9].letterS}</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Header>
                <img src="/assets/images/letterT.png" alt="letter T" />
              </Card.Header>
              <Card.Body>
                <Card.Text>{historyData[10].letterTT}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default histoire;
