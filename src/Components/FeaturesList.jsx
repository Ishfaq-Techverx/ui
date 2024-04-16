import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const featuresList = [
  {
    url: window.location.origin + "/lock.png",
    name: "24/7 Support",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
  },
  {
    url: window.location.origin + "/chart.png",
    name: "1000+ of reviews",
    description: `Donec pulvinar magna non nisi tincidunt, quis 
    Proin `,
  },
  {
    url: window.location.origin + "/trophy.png",
    name: "And more!",
    description: `Curabitur aliquet quam id dui posuere, vel.`,
  },
];

function FeaturesList() {
  return (
    <Container>
      <Row>
        {featuresList?.map(({ url, name, description }) => (
          <Col sm={12} md={6} xl={4} className="features-list">
            <div>
              <img src={url} alt="fixed" width={64} height={64} />
            </div>
            <div>
              <div className="features-title">{name}</div>
              <div className="features-description">{description} </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FeaturesList;
