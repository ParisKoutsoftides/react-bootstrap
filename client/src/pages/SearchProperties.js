import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import '../App.css';

class PropertiesViewSingle extends Component {

constructor(props) {
  super(props);
  this.state = {
    properties: [],
  };
}


componentDidMount() {
  console.log(this.props);
  if(isNaN(this.props.match.params.minPrice)) {
    console.log("MIN PRICE IS NAN:::::")
    this.props.match.params.minPrice = "minPrice=0";
  }
  if(isNaN(this.props.match.params.maxPrice)) {
    console.log("MAX PRICE IS NAN:::::" + 2147483647)
    this.props.match.params.maxPrice = "maxPrice=2147483646";
  }
  fetch('http://localhost:5000/searchProperties?'+ this.props.match.params.district + '&'+ this.props.match.params.minPrice + '&' + this.props.match.params.maxPrice + '&' + this.props.match.params.buildingType)
    .then(response => response.json())
    .then(data => this.setState({properties: data}));
} 

  render() {
            console.log(this.state.properties);
            const { properties } = this.state;
            return (
              <div>
              <h1>Properties</h1> 
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
                              <p>{x.county}</p>
                          </Col>
                      </Row>
                  </Container>
                  )}
              </div>
            </div>
            );
        }
}
export default PropertiesViewSingle;