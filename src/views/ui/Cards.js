import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Button,
  Row,
  Col,
} from "reactstrap";
import Blog from "../../components/dashboard/Blog";
import React, { useEffect, useState } from "react"

const Cards = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);
        setUsers(data.results)
      })
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
      <h5 className="mb-3">Conheça os Pokemóns!</h5>
      <Row>
        {users.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              title={blg.name}
              subtitle='exemplo'
              text='exemplo'
              color='blue'
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cards;
