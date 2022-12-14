import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import Gallery from './Gallery';

class Global extends Component {
    constructor(props){
        super(props);
        this.state={
            query:'',
            items: []
        }
    }
    search(){

        const BASE_URL ='https://www.googleapis.com/books/v1/volumes?q=%27';
        fetch(`${BASE_URL}${this.state.query}`, {method :'GET'})
        .then(response => response.json())
        .then(json => {
            let { items } =json;
            this.setState({items})
        }
        );
        
    }
    render() { 
        return (
           <div className='Global'>
            <h2>Book Explorer!</h2>
            <FormGroup>
                <InputGroup>
                {/* <label for="SearchBar">Enter Book Name </label> */}
                    <FormControl 
                        id="searchBar"
                        type="text"
                        placeholder="Search for a Book"
                        onChange ={event =>this.setState({query: event.target.value})}
                        onKeyPress={event => {
                            if(event.key=== 'Enter'){
                                this.search();
                            }
                        }}
                    />
                    <button type="submit" onClick={this.search()}>Search</button>
                </InputGroup>                
            </FormGroup>
            <Gallery items={this.state.items}/>
           </div> 
        );
    }
}
 
export default Global;