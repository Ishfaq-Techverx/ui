import Register from "./Register";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RoboLeft = () => {
  return (
    <Row className="mb-fixed">
      <Col sm={12} md={6} xl={6} className="features-lists">
        <svg
          className="invest"
          width="505"
          height="576"
          viewBox="0 0 505 576"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="489"
            height="489"
            transform="matrix(-1 0 0 1 499 46.0687)"
            fill="url(#pattern0_1_117)"
          />
          <circle cx="162" cy="53.0687" r="15" fill="#F89D21" />
          <circle cx="57" cy="397.069" r="15" fill="#46B0E6" />
          <circle cx="301" cy="427.069" r="15" fill="#F89D21" />
          <circle cx="10" cy="131.069" r="10" fill="#F0B80D" />
          <circle cx="316" cy="565.069" r="10" fill="#5380EA" />
          <circle cx="152" cy="348.069" r="10" fill="#E49192" />
          <circle cx="495" cy="63.0687" r="10" fill="#F0B80D" />
          <circle cx="345" cy="10.0687" r="10" fill="#E49192" />
          <defs>
            <pattern
              id="pattern0_1_117"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use transform="scale(0.00109649)" />
            </pattern>
            <image id="image0_1_117" width="912" height="912" />
          </defs>
        </svg>

        <div>
          <img
            className="right-widget"
            src={window.location.origin + "/oppositeimg.png"}
            alt="no"
            style={{ width: "60%" }}
          />
        </div>
      </Col>
      <Col sm={12} md={6} xl={6} className="features-lists">
        <Register />
      </Col>
    </Row>
  );
};

export default RoboLeft;
