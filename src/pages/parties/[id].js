import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
const DetailsPartie = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <Container>
      <h1>Détails de la partie N°{id}</h1>
    </Container>
  );
};

export default DetailsPartie;
