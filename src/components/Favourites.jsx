/** @format */
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { removeFromFav } from "../redux/actions";

const mapDispatchToProps = (dispatch) => ({
  removeFromFav: (f) => {
    dispatch(removeFromFav(f));
  },
});

const Favourites = ({ favourites, removeFromFav }) => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <ListGroup>
            {favourites &&
              favourites.map((f, i) => (
                <ListGroupItem key={i}>
                  <StarFill onClick={() => removeFromFav(f)} />
                  <span>{f}</span>
                </ListGroupItem>
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default connect((s) => s, mapDispatchToProps)(Favourites);
