import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class SearchForm extends Component {
    constructor() {
      super();
      this.state = {
        county: '',
        minPrice: '',
        maxPrice: '',
        buildingType: 'Villa',
        orderByOption: 'ASC'
      };
    }

    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        const { country, minPrice, maxPrice, buildingType} = this.state;

        window.location.assign("/searchProperties/minPrice=" + minPrice +"&maxPrice=" +maxPrice + "&buildingType="+buildingType);

      }



render(){
    const { county, minPrice, maxPrice, buildingType } = this.state;
    return(
    <Form onSubmit={this.handleSubmit}>
        <div className="row justify-content-center">
        <Form.Group controlId="searchForm col-sm">
            <Form.Control type="text" placeholder="Enter county.." name="county" value={county} onChange={this.onChange}/>
            <Form.Text className="">
            </Form.Text>
        </Form.Group>
        <Form.Group controlId="searchForm.minPrice">
            <Row>
                <Col>
                    <Form.Label>Minimum Price</Form.Label>
                </Col>
                <Col>
                    <Form.Control type="text" placeholder="Enter min price.." name="minPrice" value={minPrice} onChange={this.onChange}/>
                    <Form.Text className=""></Form.Text>
                </Col>
            </Row>
        </Form.Group>
        <Form.Group controlId="searchForm.maxPrice">
            <Row>
                <Col>
                    <Form.Label>Maximum Price</Form.Label>
                </Col>
                <Col>
                    <Form.Control type="text" placeholder="Enter max price.." name="maxPrice" value={maxPrice} onChange={this.onChange}/>
                    <Form.Text className=""></Form.Text>
                </Col>
            </Row>
        </Form.Group>
        <Form.Group controlId="exampleForm.buildingTypeSelect">
            <Form.Label>Select building type</Form.Label>
            <Form.Control as="select" name="buildingType" value={buildingType} onChange={this.onChange}>
            <option>Villa</option>
            <option>Apartment</option>
            </Form.Control>
        </Form.Group>
        </div>
        <Button variant="primary btn-large" type="submit">
            Search
        </Button>
    </Form>
    );
}
}


export default SearchForm;