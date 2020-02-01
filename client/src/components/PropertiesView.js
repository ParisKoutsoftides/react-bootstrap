import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class PropertiesView extends Component {

constructor(props) {
    super(props);
    this.state = {
      properties: [],
    };
  }


componentDidMount() {
    fetch('http://localhost:5000/properties')
      .then(response => response.json())
      .then(data => this.setState({ properties: data}));
  };    


  render() {
            const { properties } = this.state;
            return (
            <div>
                {properties.map(x =>
                <Container className="grayContainer marginBottom">
                    <Row className="justify-content-md-center" key={x.property_id}>
                        <Col lg={true}>
                            <p> Image Here</p>
                        </Col>
                        <Col lg={true}>
                            <p>{x.name}</p>
                            <p>More Info here</p>
                        </Col>
                    </Row>
                </Container>
                )}
            </div>
            );
        }
}

export default PropertiesView;