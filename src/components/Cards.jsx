import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

const Cards = ({ cardImg, cardTitle, cardText }) => {
  return (
    <Card className="mt-5" style={{ width: "18rem" }}>
      <Card.Img className="img" variant="top" src={cardImg} />
      <Card.Body className="text">
        <Card.Title className="text-center">{cardTitle}</Card.Title>
        <Card.Text className="body">{cardText}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Cards;
