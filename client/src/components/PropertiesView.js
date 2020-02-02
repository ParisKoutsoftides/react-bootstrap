import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

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
      .then(data => this.setState({properties: data}));
  }

  render() {
            const { properties } = this.state;
            return (
            <div>        
                {properties.map(x =>
                <Container className="grayContainer marginBottom" key={x.property_id}>
                    <Row className="justify-content-md-center" >
                        <Col lg={true}>
                            <Image thumbnail={true} src={`data:image/jpeg;base64,${x.image}`}/>
                        </Col>
                        <Col lg={true}>
                            <p>{x.title}</p>
                            <p>{x.price}</p>
                            <p>{x.county}</p>
                        </Col>
                    </Row>
                </Container>
                )}
            </div>
            );
        }
}

export default PropertiesView;