import {
  Container,
  Tabs,
  Tab,
  Row,
  Col,
  Card,
  Button,
  Modal,
} from "react-bootstrap";
import BigTitle from "../../components/utils/BigTitle";
import { membersData } from "../../data/membersData";
import { useState } from "react";
import client from "./../../../graphql/apolloClient";
import { GET_ALL_ORGANIGRAMS } from "../../../graphql/queries";
import { NextSeo } from "next-seo";

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/organigrams");
  const data = await res.json();
  return {
    props: {
      organigrams: data,
    },
  };
}

const Index = ({ organigrams }) => {
  const DOMAIN_URL = `http://localhost:1337`;
  const committee = [];
  const executive = [];
  console.log(organigrams[0].branch);
  organigrams[0].branch.map((br) => {
    // console.log(br.committee, br.office);
    committee.push(br.committee);
    executive.push(br.office);
  });

  console.log(committee, executive);
  const committeeMembers = committee.map((mb) => {
    return mb;
  });
  committeeMembers.map((mbr, i) => {
    console.log(mbr);
  });
  const executiveMembers = executive.map((mb) => {
    return mb;
  });
  executiveMembers.map((mbr, i) => {
    console.log(mbr);
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // currentExecutiveMember();
  // Configuration SEO
  const SEO = {
    title: "Braine Trust | Organigramme",
    description: "La page de l'organigramme pour le site Braine Trust",
  };
  return (
    <>
      <NextSeo {...SEO} />
      <Container
        className="page__scrabble "
        style={{ minHeight: "100vh", padding: " 3rem 0", width: "100%" }}
      >
        <BigTitle
          imgUrl="/assets/images/letterO.png"
          title="rganigramme"
          marginBottom="3rem"
        />
        <Container className="page__organigram__container glassMorphic mt-4">
          <Tabs defaultActiveKey="Bureau" id="organigram-tabs" className="mb-3">
            <Tab eventKey="Bureau" title="Bureau Exécutif">
              <Container style={{ display: "grid", placeItems: "center" }}>
                <Row className="p-4 " style={{ display: "flex" }}>
                  {executiveMembers &&
                    executiveMembers.map((item, index) => (
                      <>
                        {item.map((mber, i) => (
                          <Col lg="4" md="6" sm="12" key={i}>
                            <Card
                              style={{
                                width: "calc(100% - 2rem)",
                                marginBottom: "2rem",
                                height: "500px",
                              }}
                              className="organ__card__item  "
                              key={i}
                            >
                              <Card.Img
                                variant="top"
                                src={`${DOMAIN_URL}${mber.member.profile_img.url}`}
                                alt={`${mber.member.firstname}${" "}${
                                  mber.member.lastname
                                }`}
                                style={{
                                  minHeight: "200px",
                                  height: "330px",
                                  objectFit: "cover",
                                }}
                              />
                              <Card.Body style={{ flexGrow: "1" }}>
                                <Card.Title>
                                  {mber.member.firstname &&
                                  mber.member.firstname === "Splingard"
                                    ? `${mber.member_role.role}e`
                                    : `${mber.member_role.role}`}
                                </Card.Title>
                                <Card.Text>
                                  <h5>{mber.member.firstname}</h5>
                                  <h6>{mber.member.lastname}</h6>
                                </Card.Text>
                                <Button variant="primary">Voir profil</Button>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </>
                    ))}
                </Row>
                {/* Row  */}
              </Container>
            </Tab>
            <Tab eventKey="Directeur" title="Comité directeur">
              <Container>
                <Row className="p-4 " style={{ display: "flex" }}>
                  {committeeMembers &&
                    committeeMembers.map((item, index) => (
                      <>
                        {item.map((mber, i) => (
                          <Col lg="4" md="6" sm="12" key={index}>
                            <Card
                              style={{
                                width: "calc(100% - 2rem)",
                                marginBottom: "2rem",
                                height: "500px",
                              }}
                              className="organ__card__item  "
                              key={i}
                            >
                              <Card.Img
                                variant="top"
                                src={`${DOMAIN_URL}${mber.member.profile_img.url}`}
                                alt={`${mber.member.firstname}${" "}${
                                  mber.member.lastname
                                }`}
                                style={{
                                  minHeight: "200px",
                                  height: "330px",
                                  objectFit: "cover",
                                }}
                              />
                              <Card.Body style={{ flexGrow: "1" }}>
                                <Card.Title>
                                  {mber.member.firstname &&
                                  mber.member.firstname === "Splingard"
                                    ? `${mber.member_role.role}e`
                                    : `${mber.member_role.role}`}
                                </Card.Title>
                                <Card.Text>
                                  <h5>{mber.member.firstname}</h5>
                                  <h6>{mber.member.lastname}</h6>
                                </Card.Text>
                                <Button variant="primary">Voir profil</Button>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </>
                    ))}
                </Row>
                {/* Row  */}
              </Container>
            </Tab>
          </Tabs>
        </Container>
      </Container>
    </>
  );
};

export default Index;
