import { Container, Tabs, Tab, Row, Col, Card } from "react-bootstrap";
import BigTitle from "../components/utils/BigTitle";
import {
  articles,
  gameArticles,
  odsArticles,
  duplicateArticles,
  classicArticles,
  astucesClassicArticles,
  scrabbleAppsArticles,
} from "../data/articles";

const scrabble = () => {
  return (
    <Container
      className="page__scrabble "
      style={{ minHeight: "100vh", padding: " 3rem 0", width: "100%" }}
    >
      <BigTitle
        imgUrl="/assets/images/letterS.png"
        title="crabble"
        marginBottom="3rem"
      />
      <Container className="page__scrabble__container glassMorphic py-3">
        <Tabs defaultActiveKey="scrabble" id="scrabble-tabs" className="mb-3">
          <Tab eventKey="scrabble" title="Scrabble">
            <Container
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {/* <h3 className="text-white textShadow">Le Scrabble ?</h3> */}
              <div
                className="tabImgBox"
                style={{ margin: "0 auto", width: "100%", maxWidth: "30rem" }}
              ></div>
              <Row
                className=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {articles.map((article) => (
                  <Card
                    key={article.id}
                    className="p-4 m-4"
                    style={{
                      width: "100%",
                      maxWidth: "80%",
                    }}
                  >
                    <Card.Header>
                      <h5>{article.title}</h5>
                    </Card.Header>
                    {article.imgSrc && <Card.Img src={article.imgSrc} />}
                    <Card.Body>
                      <Card.Text
                        style={{ color: "gray", textAlign: "justify" }}
                      >
                        {article.content}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <p>
                        Source :{" "}
                        <a href={article.source} target="_blank">
                          Wikipédia
                        </a>
                      </p>
                    </Card.Footer>
                  </Card>
                ))}
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="jeu" title="Le Jeu" className="text-white">
            <Row
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {gameArticles.map((article) => (
                <Card
                  key={article.id}
                  className="p-4 m-4"
                  style={{
                    width: "100%",
                    maxWidth: "80%",
                  }}
                >
                  <Card.Header>
                    <h5 className="text-dark">{article.title}</h5>
                  </Card.Header>

                  <Card.Body>
                    <Card.Text style={{ color: "gray", textAlign: "justify" }}>
                      {article.content}
                    </Card.Text>
                    {article.imgSrc && (
                      <img
                        src={article.imgSrc}
                        width="150rem"
                        height="120rem"
                      />
                    )}
                  </Card.Body>
                  <Card.Footer>
                    <p className="text-dark">
                      Source :{" "}
                      <a href={article.source} target="_blank">
                        Wikipédia
                      </a>
                    </p>
                  </Card.Footer>
                </Card>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="ods" title="ODS" className="text-white">
            <Row
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {odsArticles.map((article) => (
                <Card
                  key={article.id}
                  className="p-4 m-4"
                  style={{
                    width: "100%",
                    maxWidth: "80%",
                  }}
                >
                  <Card.Header>
                    <h5 className="text-dark">{article.title}</h5>
                  </Card.Header>

                  <Card.Body>
                    <Card.Text style={{ color: "gray", textAlign: "justify" }}>
                      {article.content}
                    </Card.Text>
                    {article.historic &&
                      article.historic.map((histo) => (
                        <>
                          <p key={histo.id} className="text-muted">
                            {" "}
                            <span className="text-dark bold">
                              {histo.year}
                            </span>{" "}
                            : {histo.details}
                          </p>
                        </>
                      ))}
                    {article.imgSrc && (
                      <img
                        src={article.imgSrc}
                        width="200rem"
                        height="280rem"
                      />
                    )}
                  </Card.Body>
                  <Card.Footer>
                    <p className="text-dark">
                      Source :{" "}
                      <a href={article.source} target="_blank">
                        Wikipédia
                      </a>
                    </p>
                  </Card.Footer>
                </Card>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="duplicate" title="Duplicate" className="text-white">
            <Row
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {duplicateArticles.map((article) => (
                <Card
                  key={article.id}
                  className="p-4 m-4"
                  style={{
                    width: "100%",
                    maxWidth: "80%",
                  }}
                >
                  <Card.Header>
                    <h5 className="text-dark">{article.title}</h5>
                  </Card.Header>

                  <Card.Body>
                    <Card.Text style={{ color: "gray", textAlign: "justify" }}>
                      {article.content}
                    </Card.Text>
                    {article.rulesOrDetails &&
                      article.rulesOrDetails.map((rd) => (
                        <>
                          <p key={rd.id} className="text-muted">
                            {" "}
                            <span className="text-dark bold">
                              Règle N° {rd.id}
                            </span>{" "}
                            : {rd.rule}
                          </p>
                        </>
                      ))}
                    {article.imgSrc && (
                      <img
                        src={article.imgSrc}
                        width="150rem"
                        height="120rem"
                      />
                    )}
                  </Card.Body>
                  <Card.Footer>
                    <p className="text-dark">
                      Source :{" "}
                      <a href={article.source} target="_blank">
                        Wikipédia
                      </a>
                    </p>
                  </Card.Footer>
                </Card>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="classique" title="Classique">
            <Row
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {classicArticles.map((article) => (
                <Card
                  key={article.id}
                  className="p-4 m-4"
                  style={{
                    width: "100%",
                    maxWidth: "80%",
                  }}
                >
                  <Card.Header>
                    <h5>{article.title}</h5>
                  </Card.Header>
                  {article.imgSrc && <Card.Img src={article.imgSrc} />}
                  <Card.Body>
                    <Card.Text style={{ color: "gray", textAlign: "justify" }}>
                      {article.content}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <p>
                      Source :{" "}
                      <a href={article.source} target="_blank">
                        Wikipédia
                      </a>
                    </p>
                  </Card.Footer>
                </Card>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="astuces" title="Astuces">
            <Row
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {astucesClassicArticles.map((article) => (
                <Card
                  key={article.id}
                  className="p-4 m-4"
                  style={{
                    width: "100%",
                    maxWidth: "80%",
                  }}
                >
                  <Card.Header>
                    <h5 className="text-dark">{article.title}</h5>
                  </Card.Header>
                  {article.imgSrc && <Card.Img src={article.imgSrc} />}
                  <Card.Body>
                    <Card.Text style={{ color: "gray", textAlign: "justify" }}>
                      {article.content}
                    </Card.Text>
                    {article.rulesOrDetails &&
                      article.rulesOrDetails.map((rod) => (
                        <>
                          <div key={rod.id} className="text-muted">
                            {" "}
                            <span className="text-dark bold">
                              {rod.rule}
                            </span> : <p className="text-muted">{rod.detail}</p>
                          </div>
                        </>
                      ))}
                  </Card.Body>
                  <Card.Footer>
                    <p className="text-dark">
                      Source :{" "}
                      <a href={article.source} target="_blank">
                        Notretemps.com
                      </a>
                    </p>
                  </Card.Footer>
                </Card>
              ))}
            </Row>
            <Row
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {scrabbleAppsArticles.map((article) => (
                <Card
                  key={article.id}
                  className="p-4 m-4"
                  style={{
                    width: "100%",
                    maxWidth: "80%",
                  }}
                >
                  <Card.Header>
                    <h5 className="text-primary">{article.title}</h5>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text className="text-muted">
                      {article.content}
                    </Card.Text>
                    {article.imgSrc && (
                      <img
                        src={article.imgSrc}
                        width="150rem"
                        height="140rem"
                      />
                    )}
                  </Card.Body>
                  <Card.Footer>
                    <p className="text-dark">
                      Source :{" "}
                      <a href={article.source} target="_blank">
                        Lien site web
                      </a>
                    </p>
                  </Card.Footer>
                </Card>
              ))}
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Container>
  );
};

export default scrabble;
