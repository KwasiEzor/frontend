import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
  Badge,
  Pagination,
} from "react-bootstrap";
import Link from "next/link";
import BigTitle from "../../components/utils/BigTitle";
import { useRouter } from "next/router";
import { articleItems } from "../../data/articles";
import client from "./../../../graphql/apolloClient";
// import { GET_BLOG_POSTS } from "../../../graphql/queries";
import { NextSeo } from "next-seo";

export async function getStaticProps() {
  // const { data } = await client.query({
  //   query: GET_BLOG_POSTS,
  // });
  const res = await fetch("http://localhost:1337/posts");
  const data = await res.json();
  return {
    props: {
      blogPosts: data,
    },
  };
}
const index = ({ blogPosts }) => {
  const DOMAIN_URL = `http://localhost:1337`;
  console.log(blogPosts);
  const router = useRouter();
  // Configuration SEO
  const SEO = {
    title: "Braine Trust | Blog",
    description: "La page blog du club pour le site Braine Trust",
  };
  return (
    <>
      <NextSeo {...SEO} />
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
                {blogPosts &&
                  blogPosts.map((post, index) => (
                    <Col lg="4" md="12" sm="12">
                      <Card
                        style={{ width: "100%", margin: "2rem 0 " }}
                        key={index}
                        className="articlepost"
                        key={index}
                        style={{
                          width: "auto",
                          marginBottom: "2rem",
                          height: "500px",
                        }}
                      >
                        {post.post_image.map((item, i) => (
                          <Card.Img
                            key={i}
                            variant="top"
                            src={`${DOMAIN_URL}${item.url}`}
                            alt={post.title}
                            style={{
                              minHeight: "200px",
                              height: "330px",
                              objectFit: "cover",
                            }}
                          />
                        ))}
                        <Card.Body>
                          <Card.Title>{post.title}</Card.Title>
                          <Card.Subtitle>
                            Author : <span>{post.author}</span>
                          </Card.Subtitle>
                          <Card.Text>
                            {post.content.substring(0, 150)}
                          </Card.Text>
                          <Link href={`/blog/${post.id}`}>
                            <Button variant="primary">En savoir plus</Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </div>
            <div className="d-flex align-items-center  justify-content-end m-4">
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
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
                      placeholder="Entrez un mot cl??..."
                    />
                    <InputGroup.Text className="btn btn-warning">
                      <i className="fas fa-search"></i>
                    </InputGroup.Text>
                  </InputGroup>
                </Form>
              </Card.Body>
            </Card>
            {/* Cetagories  */}
            <Card bg="primary" className="border border-light mb-3">
              <Card.Header className="text-white">Cat??gories</Card.Header>
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
                    Comp??titions
                  </li>
                  <li className="list-item  text-white mb-3 textShadow">
                    F??d??ration Belge
                  </li>
                  <li className="list-item  text-white mb-3 textShadow">
                    F??d??ration Internationale
                  </li>
                </ul>
              </Card.Body>
            </Card>
            {/* articles recents  */}
            <Card bg="primary" className="border border-light mb-3">
              <Card.Header className="text-white">Articles r??cents</Card.Header>
              <Card.Body className="blogArticleMenu">
                <ul className="list-group list-unstyled">
                  {blogPosts &&
                    blogPosts.map((article) => (
                      <Link href={`/blog/${article.id}`}>
                        <li
                          key={article.id}
                          className="list-item mb-2 d-flex align-items-center justify-content-around text-white textShadow"
                          style={{ cursor: "pointer" }}
                        >
                          {article.post_image.map((item, i) => (
                            <span style={{ width: "50px", height: "50px" }}>
                              <img
                                key={i}
                                src={`${DOMAIN_URL}${item.url}`}
                                alt={article.title}
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  objectFit: "contain",
                                }}
                              />
                            </span>
                          ))}
                          <span className="textShadow">
                            {article.title.substring(0, 10)}...
                          </span>
                          <span className="textShadow">
                            {article.published_at.substring(0, 10)}
                          </span>
                        </li>
                      </Link>
                    ))}
                </ul>
              </Card.Body>
            </Card>
            {/* tags  */}
            <Card bg="primary" className="border border-light mb-3">
              <Card.Header className="text-white textShadow">
                Mots cl??
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
                  <Badge
                    pill
                    bg="white"
                    className="m-2 p-2 text-dark shadow-md"
                  >
                    tournoi
                  </Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default index;
