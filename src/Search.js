import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        }
    }

    // handleChange(event) {
    //     this.setState({
    //       query: event.target.value;
    //     })
    //   }

        // this.handleChange = this.handleChange.bind(this);

    render() {
        return (
        <div>
            <input type='text' placeholder='Search...' ref=""/>
            <button>CLICK ME!</button>
        </div>
        )
    };
}

export default Search;