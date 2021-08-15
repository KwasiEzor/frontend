import { Container } from "react-bootstrap";
import BigTitle from "../components/utils/BigTitle";

const profile = () => {
  return (
    <Container
      className="page__scrabble "
      style={{ minHeight: "100vh", padding: " 3rem 0", width: "100%" }}
    >
      <BigTitle
        imgUrl="/assets/images/letterP.png"
        title="rofile"
        marginBottom="3rem"
      />
    </Container>
  );
};

export default profile;
