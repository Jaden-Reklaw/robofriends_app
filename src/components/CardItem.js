import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import Bootstrap components
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class CardItem extends Component {
    //Create state to change individual cards after they click edit

    state = {
        isEdit: false,
        newData: {
            name: this.props.name,
            email: this.props.email
        }
    }

    handleDelete = () => {
        console.log('handleDelete pressed!');
        this.props.dispatch({type: 'DELETE_KITTEN', payload: {id: this.props.id}});
    }

    handleEdit = () => {
        console.log('handleEdit pressed!', this.props.id);
    }

    render() {
        const {id, name, email} = this.props;

        if(this.state.isEdit === false) {
            return (
                <Card 
                    style={{ width: '18rem', display:'inline-block', margin:'12px'}} 
                    className="text-center shadow p-3 mb-5 bg-white rounded"
                >
                    <Card.Img variant="top" src={`https://robohash.org/${id}?set=set4`} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                        {email}
                        </Card.Text>
    
                        {/* Edit Button */}
                        <Button 
                            variant="primary" 
                            block="true"
                            onClick={this.handleEdit}
                        >Edit</Button>
    
                        {/* Delete Button */}
                        <Button 
                            variant="danger" 
                            block="true"
                            onClick={this.handleDelete}
                        >Delete</Button>
    
                    </Card.Body>
                </Card>
            );
        } else {
            
        }  
    }
}

export default connect()(CardItem);