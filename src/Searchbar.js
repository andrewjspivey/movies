import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'; 
import Form from 'react-bootstrap/Form'



class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            type: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.searchTerm);
        this.props.onTypeSubmit(this.state.type)
        this.setState({
            searchTerm: '',
        })
    }


    handleChange(e) {
        this.setState({
            searchTerm: e.target.value,
        });
    }

    handleTypeChange = (e) => {
        this.setState({
            type: e.target.value
        })
    }

    render() {
    return (
        <div className="search-form">
        <Form inline onSubmit={this.handleSubmit}>
            <Form.Row>
                <Form.Control placeholder="Search Title"
                value={this.state.searchTerm} onChange={this.handleChange}/>
                <Form.Control
                as="select"
                className="mr-sm-2"
                id="search-type"
                custom
                name='search-type' value={this.state.type} onChange={this.handleTypeChange}
                >
                    <option value='movie'>Movie</option>
                    <option value='series'>Series</option>
                    <option value='episode'>Episode</option>
                </Form.Control>
                <Button onClick={this.handleSubmit} variant="primary" className="btn-primary">Search</Button>
            </Form.Row>
        </Form >
        </div>
        );
    }
}



export default Searchbar;