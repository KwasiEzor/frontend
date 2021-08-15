import { Container, Tabs, Tab, Row, Col, Card } from "react-bootstrap";
import BigTitle from "../../components/utils/BigTitle";
import { useRouter } from "next/router";
const DetailsMembre = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Container>
      <BigTitle
        imgUrl="/assets/images/letterD.png"
        title="étails membre"
        marginBottom="3rem"
      />
      <Container>
        <h1 className="text-white"> Membre N° {id}</h1>
      </Container>
    </Container>
  );
};

export default DetailsMembre;
