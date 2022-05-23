import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const Blog = (props) => {
  return (
    <Card>
      {/* <CardImg alt="" src={props.image} /> */}
      <CardBody className="p-4">
        <CardTitle tag="h5">{props.title}</CardTitle>
        <Button color={props.color}>Saiba Mais</Button>
      </CardBody>
    </Card>
  );
};

export default Blog;
