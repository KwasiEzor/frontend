import Head from "next/head";

import { Container, Row, Col } from "react-bootstrap";
import Agenda from "../components/utils/Agenda";
import BigTitle from "../components/utils/BigTitle";
import CustomCarousel from "../components/utils/CustomCarousel";
import Hero from "../components/utils/Hero";
import Partners from "../components/utils/Partners";
import RecentPost from "../components/utils/RecentPost";
import SocialLinksArea from "../components/utils/SocialLinksArea";
import styles from "../styles/Home.module.css";
import { posts } from "./../data/posts";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Braine Trust | Site Officiel</title>
        <meta
          name="description"
          content="Site officiel du club de scrabble de Braine Trust"
        />
        <link rel="icon" href="/assets/images/braine-favicon.svg" />
      </Head>

      <main className={styles.main}>
        <Hero />
        {/* home carousel  */}
        <Container className="home__carousel">
          <CustomCarousel />
        </Container>
        {/* Discover area  */}
        <Container
          className=" container text-center discover__section"
          style={{
            zIndex: "999",
            height: "100%",
            maxHeight: "fit-content",
            margin: "3rem auto",
          }}
        >
          <BigTitle
            imgUrl="/assets/images/letterA.png"
            className="home__heading"
            marginTop="22rem"
            marginBottom="5rem"
          />
          {/* Discover row  */}

          <Row className="showCaseBox">
            <Col sm={12} md={6} className="text-center">
              <img
                src="/assets/images/scrabble-jetons.png"
                alt=" jetons de scrabble"
                style={{ objectFit: "contain" }}
              />
            </Col>
            <Col
              sm={12}
              md={6}
              className=""
              style={{
                textAlign: "center",
                color: "#fff",
                display: "grid",
                placeItems: "center",
                textShadow: "0 0 6px rgba(0,0,0,0.25)",
              }}
            >
              <div className="content">
                <h1 style={{ fontSize: "4rem" }}>Le Scrabble</h1>
                <h5>dans toutes ses variantes</h5>
              </div>
            </Col>
          </Row>
          {/* End Discover row  */}
          {/* Discover row  */}

          <Row className="showCaseBox">
            <Col
              sm={12}
              md={6}
              className=""
              style={{
                textAlign: "center",
                color: "#fff",
                display: "grid",
                placeItems: "center",
                textShadow: "0 0 6px rgba(0,0,0,0.25)",
              }}
            >
              <div className="content">
                <h1 style={{ fontSize: "4rem" }}>Le Duplicate</h1>
                <h5>pour tester vos connaissances</h5>
              </div>
            </Col>
            <Col sm={12} md={6} className="text-center">
              <img
                src="/assets/images/scrabble-duplicate.png"
                alt=" jetons de scrabble"
                style={{ objectFit: "contain" }}
              />
            </Col>
          </Row>
          {/* End Discover row  */}
          {/* Discover row  */}

          <Row className="showCaseBox">
            <Col sm={12} md={6} className="text-center">
              <img
                src="/assets/images/scrabble-classique.png"
                alt=" jetons de scrabble"
                style={{ objectFit: "contain" }}
              />
            </Col>
            <Col
              sm={12}
              md={6}
              className=""
              style={{
                textAlign: "center",
                color: "#fff",
                display: "grid",
                placeItems: "center",
                textShadow: "0 0 6px rgba(0,0,0,0.25)",
              }}
            >
              <div className="content">
                <h1 style={{ fontSize: "4rem" }}>Le Classique</h1>
                <h5>pour quelques parties en duel</h5>
              </div>
            </Col>
          </Row>
          {/* End Discover row  */}
        </Container>
        {/* End discover area  */}
        {/* Agenda area  */}
        <Container className="text center">
          <BigTitle
            title="genda"
            imgUrl="/assets/images/letterA.png"
            marginBottom="3rem"
          />
          <Agenda />
        </Container>
        {/* End Agenda area  */}
        <Container className="text-center">
          <Partners />
        </Container>
        {/* Recent posts area  */}
        <Container className="text-center">
          <BigTitle
            imgUrl="/assets/images/letterD.png"
            title="ernières publications"
            width="40%"
            marginBottom="5rem"
          />
          <div className="container cardBox">
            <RecentPost posts={posts} />
          </div>
        </Container>
        {/* End Recent posts area  */}
        {/* Social links  area  */}
        <Container>
          <SocialLinksArea />
        </Container>
        {/* End Social links  area  */}
      </main>
    </div>
  );
}
