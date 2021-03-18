import React from 'react';

class SearchBar extends React.Component{
    state = {term: ''};

    onSearchChange = event => {
        this.setState({term: event.target.value});
    }

    onFormSubmit = event =>{
        event.preventDefault();

        this.props.onFormSubmit(this.state.term )
    }
    render(){
        return(
            <div>
                <form className={"ui form"} onSubmit={this.onFormSubmit}>
                    <div>
                        <label>Search for</label>
                        <input type="text" onChange={this.onSearchChange}/>
                    </div>
                </form>
            </div>
        )
    }
}


export default SearchBar;
