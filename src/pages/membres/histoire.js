import { Container, Tabs, Tab, Row, Col, Card } from "react-bootstrap";
import BigTitle from "../../components/utils/BigTitle";
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
    </Container>
  );
};

export default histoire;
