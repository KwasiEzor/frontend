import { Container } from "react-bootstrap";
import BigTitle from "../../components/utils/BigTitle";
import { useRouter } from "next/router";
const DetailsMembreOrg = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Container
      className="page__scrabble "
      style={{ minHeight: "100vh", padding: " 3rem 0", width: "100%" }}
    >
      <BigTitle
        imgUrl="/assets/images/letterO.png"
        title="rganigramme"
        marginBottom="3rem"
      />
      <Container className="glassMorphic mt-4">
        <h1>Détails du membre N° {id}</h1>
      </Container>
    </Container>
  );
};

export default DetailsMembreOrg;
