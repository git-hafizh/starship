import React from "react";
import axios from "axios";
import "./DetailShip.css";
import {
  Button,
  Card,
  CardBody,
  CardDeck,
  CardHeader,
  Col,
  Row,
} from "reactstrap";

const DetailShip = (props) => {
  const [detail, setDetail] = React.useState([]);
  const [film, setFilm] = React.useState([]);
  const [pilot, setPilot] = React.useState([]);

  React.useEffect(() => {
    idShipAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const idShipAPI = () => {
    const id = props.match.params.id;
    axios.get(`https://swapi.dev/api/starships/${id}/`).then((result) => {
      setDetail(result.data);
      fncGetResult(result.data.films).then((result) => {
        setFilm(result)
      })
      fncGetResult(result.data.pilots).then((result) => {
        setPilot(result)
      })
    });
  };
  
  const goBack = () => {
    props.history.goBack();
  };

  async function fncGetResult(arr) {
    let val = [];
    for (let i = 0; i < arr.length; i++) {
      const res = await fetch(arr[i]).then(d => d.json()).then(d =>d);
      val.push(res)
    };
    return val;
  }
  
  return (
    <div className="detail-ship">
      <span className="title">{detail.name}</span>
        <Row>
          <Col>
            <CardDeck>
              <Card outline color="primary">
                <CardHeader>Name</CardHeader>
                <CardBody>
                  <p> {detail.name} </p>
                </CardBody>
              </Card>
              <Card outline color="warning">
                <CardHeader>Model</CardHeader>
                <CardBody>
                  <p>{detail.model} </p>
                </CardBody>
              </Card>
              <Card outline color="success">
                <CardHeader>Manufacturer</CardHeader>
                <CardBody>
                  <p>{detail.manufacturer} </p>
                </CardBody>
              </Card>
              <Card outline color="danger">
                <CardHeader>Cost in credits</CardHeader>
                <CardBody>
                  <p>{detail.cost_in_credits} </p>
                </CardBody>
              </Card>
              <Card outline color="success">
                <CardHeader>Length</CardHeader>
                <CardBody>
                  <p>{detail.length} </p>
                </CardBody>
              </Card>
              <Card outline color="primary">
                <CardHeader>Max atmosphering speed</CardHeader>
                <CardBody>
                  <p>{detail.max_atmosphering_speed} </p>
                </CardBody>
              </Card>
              <Card outline color="warning">
                <CardHeader>Crew</CardHeader>
                <CardBody>
                  <p>{detail.crew} </p>
                </CardBody>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardDeck>
              <Card outline color="primary">
                <CardHeader>Passengers</CardHeader>
                <CardBody>
                  <p>{detail.passengers} </p>
                </CardBody>
              </Card>
              <Card outline color="success">
                <CardHeader>Cargo capacity</CardHeader>
                <CardBody>
                  <p>{detail.cargo_capacity} </p>
                </CardBody>
              </Card>
              <Card outline color="danger">
                <CardHeader>Consumables</CardHeader>
                <CardBody>
                  <p>{detail.consumables} </p>
                </CardBody>
              </Card>
              <Card outline color="primary">
                <CardHeader>Hyperdrive rating</CardHeader>
                <CardBody>
                  <p>{detail.hyperdrive_rating} </p>
                </CardBody>
              </Card>
              <Card outline color="info">
                <CardHeader>MGLT</CardHeader>
                <CardBody>
                  <p>{detail.MGLT} </p>
                </CardBody>
              </Card>
              <Card outline color="warning">
                <CardHeader>Starship class</CardHeader>
                <CardBody>
                  <p>{detail.starship_class} </p>
                </CardBody>
              </Card>
              <Card outline color="success">
                <CardHeader>Pilots</CardHeader>
                <CardBody>
                  <p className="list">{pilot.map((item, index) => (
                    <li key={index}>{item ? item.name : "-"}</li>
                  ))} </p>
                </CardBody>
              </Card>
              <Card outline color="warning">
                <CardHeader>Films</CardHeader>
                <CardBody>
                  <p className="list">{film.map((item, index) => (
                    <li key={index}>{item.title}</li>
                  ))}</p>
                </CardBody>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <Button className="back" onClick={goBack}>Back to home</Button>
    </div>
  );
};

export default DetailShip;
