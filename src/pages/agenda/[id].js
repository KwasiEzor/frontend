import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
const DetailsAgenda = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <Container>
      <h1>Détails Agenda N° {id}</h1>
    </Container>
  );
};

export default DetailsAgenda;
