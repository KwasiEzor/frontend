import { Container, Row, Col, Card } from "react-bootstrap";
import BigTitle from "../components/utils/BigTitle";
import { NextSeo } from "next-seo";

const NotFound = () => {
  const SEO = {
    title: "Braine Trust | 404 Not Found",
    description: "La page non trouvée Erreur 404 pour le site Braine Trust",
  };
  return (
    <>
      <NextSeo />

      <Container
        className="page__scrabble "
        style={{ minHeight: "100vh", padding: " 3rem 0", width: "100%" }}
      >
        <BigTitle
          imgUrl="/assets/images/letterP.png"
          title="age non trouvée !!!"
          marginBottom="3rem"
        />
        <Container
          className="notFoundPage"
          style={{
            background: "#fff",
            minHeight: "80%",
            display: "grid",
            placeItems: "center",
          }}
        >
          <img src="/assets/gif/404Page.gif" alt="404Page" />
        </Container>
      </Container>
    </>
  );
};

export default NotFound;
