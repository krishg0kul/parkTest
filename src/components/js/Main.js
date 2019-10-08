import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slot: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      car_but_state: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      bike_but_state: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
  }
  bik = 0;
  car = 0;
  parkSlot(ind, val) {
    let i = ind;
    let { slot } = this.state;
    let { car_but_state } = this.state;
    let { bike_but_state } = this.state;
    if (slot[ind] !== 0) {
      slot[ind] = slot[ind] - val;
      this.setState({ slot });
      if (val === 1) {
        car_but_state[ind] = true;
        this.setState({ car_but_state });
        this.bik = this.bik + 1;
      } else if (val === 2) {
        this.car = this.car + 1;
      }
      if (slot === 0) alert("Parking Slot full.");
      if (slot[ind] === 1)
        alert("Parking Slot " + ++i + " is have one space for bike.");
      if (slot[ind] === 0) {
        bike_but_state[ind] = true;
        car_but_state[ind] = true;
        this.setState({ bike_but_state });
        this.setState({ car_but_state });
        alert("Parking Slot " + ++ind + " is Full.Try Next Slots.");
      }
    } else {
      bike_but_state[ind] = true;
      car_but_state[ind] = true;
      this.setState({ bike_but_state });
      this.setState({ car_but_state });
    }
  }

  render() {
    return (
      <div className='container-fluid'>
        <Container>
          <br />
          <br />
          <p>
            <h6 id='instruct'>Instruction !</h6>
            one parking slot space:- 1 Car || 2 Bikes.
          </p>
          <Row id='row'>
            <Col md={{ span: 2, offset: 1 }} id='aa'>
              <br />
              <button
                onClick={() => this.parkSlot(0, 1)}
                disabled={this.state.bike_but_state[0]}
              >
                Bike
              </button>{" "}
              ||{" "}
              <button
                onClick={() => this.parkSlot(0, 2)}
                disabled={this.state.car_but_state[0]}
              >
                Car
              </button>
              <br />
              Slot 1
            </Col>
            <Col md={2} id='aa'>
              <br />
              <button
                onClick={() => this.parkSlot(1, 1)}
                disabled={this.state.bike_but_state[1]}
              >
                Bike
              </button>{" "}
              ||{" "}
              <button
                onClick={() => this.parkSlot(1, 2)}
                disabled={this.state.car_but_state[1]}
              >
                Car
              </button>
              <br />
              Slot 2
            </Col>
            <Col md={2} id='aa'>
              <br />
              <button
                onClick={() => this.parkSlot(2, 1)}
                disabled={this.state.bike_but_state[2]}
              >
                Bike
              </button>{" "}
              ||{" "}
              <button
                onClick={() => this.parkSlot(2, 2)}
                disabled={this.state.car_but_state[2]}
              >
                Car
              </button>
              <br />
              Slot 3
            </Col>
            <Col md={2} id='aa'>
              <br />
              <button
                onClick={() => this.parkSlot(3, 1)}
                disabled={this.state.bike_but_state[3]}
              >
                Bike
              </button>{" "}
              ||{" "}
              <button
                onClick={() => this.parkSlot(3, 2)}
                disabled={this.state.car_but_state[3]}
              >
                Car
              </button>
              <br />
              Slot 4
            </Col>
            <Col md={2} id='aa'>
              <br />
              <button
                onClick={() => this.parkSlot(4, 1)}
                disabled={this.state.bike_but_state[4]}
              >
                Bike
              </button>{" "}
              ||{" "}
              <button
                onClick={() => this.parkSlot(4, 2)}
                disabled={this.state.car_but_state[4]}
              >
                Car
              </button>
              <br />
              Slot 5
            </Col>
          </Row>
          <br />
          <br />
          <Row id='row'>
            <Col md={{ span: 2, offset: 1 }} id='aa'>
              <br />
              <button
                onClick={() => this.parkSlot(5, 1)}
                disabled={this.state.bike_but_state[5]}
              >
                Bike
              </button>{" "}
              ||{" "}
              <button
                onClick={() => this.parkSlot(5, 2)}
                disabled={this.state.car_but_state[5]}
              >
                Car
              </button>
              <br />
              Slot 6
            </Col>
            <Col md={2} id='aa'>
              <br />
              <button
                onClick={() => this.parkSlot(6, 1)}
                disabled={this.state.bike_but_state[6]}
              >
                Bike
              </button>{" "}
              ||{" "}
              <button
                onClick={() => this.parkSlot(6, 2)}
                disabled={this.state.car_but_state[6]}
              >
                Car
              </button>
              <br />
              Slot 7
            </Col>
            <Col md={2} id='aa'>
              <br />
              <button
                onClick={() => this.parkSlot(7, 1)}
                disabled={this.state.bike_but_state[7]}
              >
                Bike
              </button>{" "}
              ||{" "}
              <button
                onClick={() => this.parkSlot(7, 2)}
                disabled={this.state.car_but_state[7]}
              >
                Car
              </button>
              <br />
              Slot 8
            </Col>
            <Col md={2} id='aa'>
              <br />
              <button
                onClick={() => this.parkSlot(8, 1)}
                disabled={this.state.bike_but_state[8]}
              >
                Bike
              </button>{" "}
              ||{" "}
              <button
                onClick={() => this.parkSlot(8, 2)}
                disabled={this.state.car_but_state[8]}
              >
                Car
              </button>
              <br />
              Slot 9
            </Col>
            <Col md={2} id='aa'>
              <br />
              <button
                onClick={() => this.parkSlot(9, 1)}
                disabled={this.state.bike_but_state[9]}
              >
                Bike
              </button>{" "}
              ||{" "}
              <button
                onClick={() => this.parkSlot(9, 2)}
                disabled={this.state.car_but_state[9]}
              >
                Car
              </button>
              <br />
              Slot 10
            </Col>
          </Row>
          <br />
          <p id='detil'>
            parking Car-{this.car} Bike-{this.bik}
          </p>
        </Container>
      </div>
    );
  }
}
