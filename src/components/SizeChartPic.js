import React from "react";
import pic from "../images/sizechart.png";
import { Container, Row } from "react-bootstrap";

function SizeChartPic() {
  return (
    <Container>
      <Row>
        <h4 className="cover-title">Creature Sizes</h4>
      </Row>

      <img
        className="size-pic"
        alt="a chart of various creature sizes"
        src={pic}
      />
    </Container>
  );
}

export default SizeChartPic;
