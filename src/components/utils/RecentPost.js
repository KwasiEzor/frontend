import { Card, Container, Button, Row, Col } from "react-bootstrap";
const DOMAIN_URL = `http://localhost:1337`;
const RecentPost = ({ posts }) => {
  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        margin: " 3rem 0",
        // overflowX: "auto",
        // maxWidth: "1100px",
      }}
    >
      <Row>
        {posts.map((post, index) => (
          <Col lg="4" md="6" sm="12" key={index}>
            <Card
              style={{
                width: "auto",
                marginBottom: "2rem",
                height: "500px",
              }}
              key={index}
              className="col-md-4 col-sm-12"
            >
              <Card.Img
                variant="top"
                src={post.post_image.map((img) => `${DOMAIN_URL}${img.url}`)}
                style={{
                  minHeight: "200px",
                  height: "330px",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content.substring(0, 150)}</Card.Text>
                <Button variant="outline-warning">En savoir plus</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecentPost;
