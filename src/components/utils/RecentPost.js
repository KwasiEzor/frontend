import { Card, Container, Button } from "react-bootstrap";

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
      {posts.map((post) => (
        <Card
          style={{ width: "20rem", margin: " 1rem" }}
          key={post.id}
          className="col-md-4 col-sm-12"
        >
          <Card.Img variant="top" src={post.img} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.content}</Card.Text>
            <Button variant="outline-warning">En savoir plus</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default RecentPost;
