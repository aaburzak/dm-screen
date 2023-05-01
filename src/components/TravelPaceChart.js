import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Table from "react-bootstrap/Table";

function TravelPaceChart() {
  return (
    <Container>
      <Row>
        <h4 className="cover-title">Travel Pace</h4>
      </Row>

      <Row>
        <Col>
          <Table striped bordered size="sm" variant="dark">
            <thead>
              <tr>
                <th>Pace</th>
                <th>Per minute</th>
                <th>Per hour</th>
                <th>Per day</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fast</td>
                <td>400 feet</td>
                <td>4 miles</td>
                <td>30 miles</td>
                <td colSpan={2}>
                  -5 penalty to passive Wisdom (Perception) scores{" "}
                </td>
              </tr>
              <tr>
                <td>Normal</td>
                <td>300 feet</td>
                <td>3 miles</td>
                <td>24 miles</td>
                <td colSpan={2}>____ </td>
              </tr>
              <tr>
                <td>Slow</td>
                <td>200 feet</td>
                <td>2 miles</td>
                <td>18 miles</td>
                <td colSpan={2}>Able to use stealth </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default TravelPaceChart;
