import { Container } from "react-bootstrap";
import BigTitle from "../components/utils/BigTitle";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
const profile = () => {
  const router = useRouter();
  const SEO = {
    title: "Braine Trust | Profil",
    description: "La page de profil pour le site Braine Trust",
  };
  return (
    <>
      <NextSeo {...SEO} />

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
    </>
  );
};

export default profile;
