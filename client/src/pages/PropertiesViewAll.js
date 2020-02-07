import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner'
import '../App.css';

class PropertiesViewAll extends Component {

constructor(props) {
  super(props);
  this.state = {
    properties: [],
    loading: true
  };
}


componentDidMount() {
  fetch('http://localhost:5000/properties')
    .then(response => response.json())
    .then(data => this.setState({properties: data, loading: false}));
}

  render() {
            const { properties, loading } = this.state;
            let loadingGreet;
            if (loading) {
              loadingGreet =<Container fluid={true} className="grayContainer testHeight">
                              <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                                </Spinner>
                            </Container> 
            }
            return (
              <div>
              <h1>Properties</h1> 
                {loadingGreet}
                <div>
                  {properties.map(x =>
                  <Container className="grayContainer marginBottom" key={x.property_id}>
                      <Row className="justify-content-md-center" >
                          <Col lg={true}>
                              <Image thumbnail={true} src={`data:image/jpeg;base64,${x.image}`}/>
                          </Col>
                          <Col lg={true}>
                              <p>{x.title}</p>
                              <p>€{x.price}</p>
                              <p>{x.district}</p>
                          </Col>
                      </Row>
                  </Container>
                  )}
              </div>
            </div>
            );
        }
}
export default PropertiesViewAll;