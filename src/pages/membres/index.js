import { Container, Col, Row } from "react-bootstrap";
import BigTitle from "../../components/utils/BigTitle";
const index = () => {
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
    </Container>
  );
};

export default index;
