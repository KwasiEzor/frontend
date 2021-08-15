import styles from "../../styles/parties.module.css";
import { Container } from "react-bootstrap";
import BigTitle from "../../components/utils/BigTitle";
const Index = () => {
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
    </Container>
  );
};

export default Index;
