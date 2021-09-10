import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
  FloatingLabel,
  Badge,
} from "react-bootstrap";
import BigTitle from "../../components/utils/BigTitle";
// import { articleItems } from "../../data/articles";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";
import { NextSeo } from "next-seo";

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:1337/posts/${params.id}`);
  const data = await res.json();
  const response = await fetch("http://localhost:1337/posts");
  const posts = await response.json();
  return {
    props: {
      post: data,
      blogPosts: posts,
    },
  };
}
const DetailsArticle = ({ post, blogPosts }) => {
  console.log(blogPosts);
  const DOMAIN_URL = `http://localhost:1337`;
  console.log(post);
  const router = useRouter();
  const id = router.query.id;
  const [commentState, setCommentState] = useState(false);
  const [addComment, setAddComment] = useState(false);
  let nbComment = 1;
  const likesInitialState = post.likes.length;
  const [like, setLike] = useState(0);
  // const handlePostLikes = (post)=>{
  //   setLike(post.likes.length + 1)
  // }
  //Configuration SEO
  const SEO = {
    title: "Braine Trust | Détails Article Blog",
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
          <Col lg md="9" sm="12" className="glassMorphic p-3">
            <div className="articlesBox">
              <Row
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Single article  */}
                <Col lg md="10">
                  <Card style={{ width: "100%", margin: "2rem auto " }}>
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
                      <Card.Title className="text-primary">
                        {post.title}
                      </Card.Title>
                      <Card.Body className="text-justify text-muted">
                        {post.content}
                        {post.contentLayout &&
                          post.contentLayout.map((item, i) => (
                            <div key={i}>
                              <h6 className="fw-bold mt-3 mb-3">
                                {item.subtitle}
                              </h6>
                              <Card.Text>{item.paragraph}</Card.Text>
                            </div>
                          ))}
                      </Card.Body>
                      <Card.Footer className="text-end mb-3">
                        <ul className="d-inline-flex list-unstyled ">
                          <li className="mx-2">
                            <span>
                              <i className="far fa-calendar-alt"></i>{" "}
                              {post.released_date &&
                                post.released_date.substring(0, 10)}
                            </span>
                          </li>

                          <li
                            className="mx-2 "
                            style={{ cursor: "pointer" }}
                            onClick={() => setCommentState(!commentState)}
                          >
                            <span>
                              <i className="far fa-comments"></i>{" "}
                              <span>{post.p_comments.length}</span>
                            </span>
                          </li>
                          <li className="mx-2" style={{ cursor: "pointer" }}>
                            <span>
                              <i
                                className="far fa-thumbs-up"
                                onClick={() => null}
                              ></i>{" "}
                              <span className="likes">{post.likes.length}</span>
                            </span>
                          </li>
                          <li className="mx-2">
                            <span>
                              <i className="fas fa-share-square"></i> Partager
                            </span>
                          </li>
                        </ul>
                      </Card.Footer>
                      <Button
                        variant="primary"
                        onClick={() => setAddComment(!addComment)}
                      >
                        Ajouter un commentaire
                      </Button>
                      <Card.Body className={addComment ? "" : "d-none"}>
                        <Form>
                          <FloatingLabel
                            controlId="floatingTextarea2"
                            label="Votre commentaire"
                          >
                            <Form.Control
                              as="textarea"
                              placeholder="..."
                              style={{ height: "100px" }}
                            />
                          </FloatingLabel>

                          <Button
                            type="button"
                            className="btn btn-warning mt-3 float-right"
                          >
                            Ajouter
                          </Button>
                        </Form>
                      </Card.Body>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* Commentaires recents  */}

              <Row
                className={commentState ? "" : "d-none"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Col md="10" sm="12">
                  <Card style={{ width: "100%", margin: "2rem auto " }}>
                    <Card.Header>
                      <span>Commentaires Récents</span>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <ul className="list-group">
                          <li className="list-item list-unstyled">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex  align-items-center ">
                                <span
                                  style={{
                                    marginRight: "1rem",
                                  }}
                                >
                                  <img
                                    src="/assets/images/user-4.jpg"
                                    className="img"
                                    alt="image"
                                    style={{
                                      width: "60px",
                                      height: "60px",
                                      borderRadius: "2%",
                                      objectFit: "contain",
                                    }}
                                  />
                                </span>
                                <h6>John Doe</h6>
                              </div>
                              <span>19.11.2021</span>
                            </div>
                            <p className="text-muted">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Cupiditate laboriosam sapiente corporis
                              animi voluptatibus, fuga error minima nihil
                              ratione...
                            </p>
                            <div></div>
                          </li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
          {/* Side bar  */}
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
                      <i className="fas fa-search"></i>
                    </InputGroup.Text>
                  </InputGroup>
                </Form>
              </Card.Body>
            </Card>
            {/* Categories  */}
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

export default DetailsArticle;
