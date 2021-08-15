import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
  Badge,
} from "react-bootstrap";
import Link from "next/link";
import BigTitle from "../../components/utils/BigTitle";
import { useRouter } from "next/router";
import { articleItems } from "../../data/articles";
const index = () => {
  const router = useRouter();
  return (
    <Container
      className="page__blog"
      style={{ width: "100%", minHeight: "100vh", padding: " 3rem 0" }}
    >
      <BigTitle imgUrl="/assets/images/letterB.png" title="log" />
      <Row className="mt-5 gx-2">
        {/* Articles content  */}
        <Col lg md="9" sm="12" className="glassMorphic p-3">
          <div className="articleBox">
            <Row className="gx-2 articleRow">
              {articleItems &&
                articleItems.map((item) => (
                  <Col lg md="4">
                    <Card
                      style={{ width: "18rem", margin: "2rem 0 " }}
                      key={item.id}
                      className="articleItem"
                    >
                      <Card.Img
                        variant="top"
                        src={item.imgUrl}
                        alt={item.title}
                      />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.content}</Card.Text>
                        <Link href={`/blog/${item.id}`}>
                          <Button variant="primary">En savoir plus</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        </Col>
        {/* end Articles content  */}
        {/* Side menu  */}
        <Col lg md="3" className="glassMorphic p-3">
          {" "}
          {/* zone recherche  */}
          <Card bg="primary" className="border border-light mb-3">
            <Card.Header className="text-white textShadow">
              Recherche
            </Card.Header>
            <Card.Body>
              <Form>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Entrez un mot clé..."
                  />
                  <InputGroup.Text className="btn btn-warning">
                    <i class="fas fa-search"></i>
                  </InputGroup.Text>
                </InputGroup>
              </Form>
            </Card.Body>
          </Card>
          {/* Cetagories  */}
          <Card bg="primary" className="border border-light mb-3">
            <Card.Header className="text-white">Catégories</Card.Header>
            <Card.Body className="blogCategoryMenu">
              <ul className="list-group list-unstyled">
                <li className="list-item  text-white mb-3 textShadow">
                  Braine Trust
                </li>
                <li className="list-item  text-white mb-3 textShadow">
                  Duplicate
                </li>
                <li className="list-item  text-white mb-3 textShadow">
                  Classique
                </li>
                <li className="list-item  text-white mb-3 textShadow">
                  Compétitions
                </li>
                <li className="list-item  text-white mb-3 textShadow">
                  Fédération Belge
                </li>
                <li className="list-item  text-white mb-3 textShadow">
                  Fédération Internationale
                </li>
              </ul>
            </Card.Body>
          </Card>
          {/* articles recents  */}
          <Card bg="primary" className="border border-light mb-3">
            <Card.Header className="text-white">Articles récents</Card.Header>
            <Card.Body className="blogArticleMenu">
              <ul className="list-group list-unstyled">
                {articleItems &&
                  articleItems.map((article) => (
                    <Link href={`/blog/${article.id}`}>
                      <li
                        key={article.id}
                        className="list-item mb-2 d-flex align-items-center justify-content-around text-white textShadow"
                        style={{ cursor: "pointer" }}
                        key={article.id}
                      >
                        <span style={{ width: "50px", height: "50px" }}>
                          <img
                            src={article.imgUrl}
                            alt=""
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "contain",
                            }}
                          />
                        </span>
                        <span className="textShadow">{article.title}</span>
                        <span className="textShadow">{article.published}</span>
                      </li>
                    </Link>
                  ))}
              </ul>
            </Card.Body>
          </Card>
          {/* tags  */}
          <Card bg="primary" className="border border-light mb-3">
            <Card.Header className="text-white textShadow">
              Mots clé
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <Badge pill bg="info" className="m-2 p-2 textShadow">
                  club
                </Badge>
                <Badge pill bg="warning" className="m-2 p-2 textShadow">
                  fbsc
                </Badge>
                <Badge pill bg="success" className="m-2 p-2 textShadow">
                  fisf
                </Badge>
                <Badge pill bg="danger" className="m-2 p-2 textShadow">
                  interclub
                </Badge>
                <Badge pill bg="secondary" className="m-2 p-2 textShadow">
                  amicale
                </Badge>
                <Badge pill bg="dark" className="m-2 p-2 textShadow">
                  coupe
                </Badge>
                <Badge pill bg="white" className="m-2 p-2 text-dark shadow-md">
                  tournoi
                </Badge>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default index;
