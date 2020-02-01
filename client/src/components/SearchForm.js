import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'


const Main =    () => {
  return (
    <Form>
        <div className="row justify-content-center">
        <Form.Group controlId="searchForm col-sm">
            <Form.Control type="email" placeholder="Enter area, town or city.." />
            <Form.Text className="">
            </Form.Text>
        </Form.Group>
        {/* <Form.Group controlId="searchForm.noOfBedrooms">
            <Form.Row>
                <Col>
                    <Form.Label>No. of Bedrooms</Form.Label>
                </Col>
                <Col>
                    <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                    </Form.Control>
                </Col>
            </Form.Row>
        </Form.Group>
        <Form.Group controlId="searchForm.noOfBedrooms">
            <Form.Row>
                <Col>
                    <Form.Label>No. of Bathrooms</Form.Label>
                </Col>
                <Col>
                    <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                    </Form.Control>
                </Col>
            </Form.Row>
        </Form.Group> */}
        <Form.Group controlId="searchForm.minPrice">
            <Form.Row>
                <Col>
                    <Form.Label className="" >Minimum Price</Form.Label>
                </Col>
                <Col>
                    <Form.Control as="select">
                        <option value="" defaultValue>Please Select...</option>
                        <option>50,000</option>
                        <option>60,000</option>
                        <option>70,000</option>
                        <option>80,000</option>
                        <option>100,000</option>
                        <option>120,000</option>
                        <option>140,000</option>
                        <option>160,000</option>
                        <option>180,000</option>
                        <option>200,000</option>
                        <option>240,000</option>
                        <option>260,000</option>
                        <option>280,000</option>
                        <option>300,000</option>
                        <option>340,000</option>
                        <option>380,000</option>
                    </Form.Control>
                </Col>
            </Form.Row>
        </Form.Group>
        <Form.Group controlId="searchForm.maxPrice">
            <Form.Row>
                <Col>
                    <Form.Label>Maximum Price</Form.Label>
                </Col>
                <Col>
                    <Form.Control as="select">
                        <option value="" defaultValue>Please Select...</option>
                        <option>60,000</option>
                        <option>70,000</option>
                        <option>80,000</option>
                        <option>100,000</option>
                        <option>120,000</option>
                        <option>140,000</option>
                        <option>160,000</option>
                        <option>180,000</option>
                        <option>200,000</option>
                        <option>240,000</option>
                        <option>260,000</option>
                        <option>280,000</option>
                        <option>300,000</option>
                        <option>340,000</option>
                        <option>380,000</option>
                        <option>400,000</option>
                    </Form.Control>
                </Col>
            </Form.Row>
        </Form.Group>
        </div>
        <Button variant="primary btn-large" type="submit">
            Search
        </Button>
    </Form>
  );
}

export default Main;