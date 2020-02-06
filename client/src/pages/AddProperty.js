import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class AddProperty extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '',
        district: 'Paphos',
        price: '',
        buildingType: 'Villa',
        selectedFile: ''
      };
    }

    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

    encodeImageFileAsURL = (file) => {
        var reader = new FileReader();
        return new Promise(function (resolve, reject) {
            reader.onloadend = function() {
                resolve(reader.result);
              }
              reader.readAsDataURL(file);
        }).then(function(result) {
            return result;
        })
      }

    onChangeFileHandler=event=>{
        var filePromise = this.encodeImageFileAsURL(event.target.files[0]);
        filePromise.then(data => {this.setState({selectedFile: data.substring(23)})});
      }
    
    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/addProperty', {
          method: 'POST',
          body: JSON.stringify(this.state),
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          if (res.status === 200) {
            alert('Sucess!!');
            this.props.history.push('/addProperty');
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          alert('Error logging in please try again');
        });
      }



render(){
    const { title, district, price, buildingType } = this.state;
    return(
    <Form onSubmit={this.handleSubmit}>
        <div className="row justify-content-center">
        <Form.Group controlId="addPropertyForm.title">
            <Row>
                <Col>
                    <Form.Control type="text" placeholder="Enter title.." name="title" value={title} onChange={this.onChange}/>
                    <Form.Text className=""></Form.Text>
                </Col>
            </Row>
        </Form.Group>
        <Form.Group controlId="addPropertyForm.price">
            <Row>
                <Col>
                    <Form.Control type="text" placeholder="Enter price.." name="price" value={price} onChange={this.onChange}/>
                    <Form.Text className=""></Form.Text>
                </Col>
            </Row>
        </Form.Group>
        <Form.Group controlId="addPropertyForm.buildingTypeSelect">
            <Row>
                <Col>
                    <Form.Control as="select" name="buildingType" value={buildingType} onChange={this.onChange}>
                    <option>Villa</option>
                    <option>Apartment</option>
                    </Form.Control>
                </Col>
            </Row>
        </Form.Group>
        <Form.Group controlId="addPropertyForm col-sm">
            <Form.Control as="select" name="district" value={district} onChange={this.onChange}>
                        <option>Paphos</option>
                        <option>Limassol</option>
                        <option>Nicosia</option>
                        <option>Famagusta</option>
                        <option>Larnaca</option>
            </Form.Control>
        </Form.Group>
        <Row>
        <Col>
        <div className="input-group">
            <input type="file" name="file" onChange={this.onChangeFileHandler}/>
        </div>
        </Col>
        </Row>
        </div>
        <Button variant="primary btn-large" type="submit">
            Search
        </Button>
    </Form>
    );
}
}


export default AddProperty;