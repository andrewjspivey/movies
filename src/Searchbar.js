import React, { Component } from 'react';




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
            <form onSubmit={this.handleSubmit}>
            <label htmlFor='searchText'>
                Title
                <input type="text" id="searchText" name="searchText" placeholder="Search Title"
                value={this.state.searchTerm} onChange={this.handleChange}/>
            </label>
            <label htmlFor='search-type'>
                Type
                <select id='search-type' name='search-type' value={this.state.type} onChange={this.handleTypeChange}>
                    <option value='movie'>Movie</option>
                    <option value='series'>Series</option>
                    <option value='episode'>Episode</option>
                </select>
            </label>
            <button>Search</button>
            </form>
        </div>
        );
    }
}



export default Searchbar;