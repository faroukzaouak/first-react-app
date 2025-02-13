import React from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
import './app.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    searchchange = (event) => {

        this.setState({ searchfield: event.target.value });

    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
        
    }


    render() {
        const filteredrobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
                || robot.email.toLowerCase().includes(this.state.searchfield.toLowerCase())
                || robot.id.toString().includes(this.state.searchfield.toLowerCase());
        });
        if (this.state.robots.length === 0) {
            return <h1 className='tc loading-animation'>Loading...</h1>;
        }
        
        else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <Searchbox searchchange={this.searchchange} />
                    <Scroll>
                        <Cardlist robots={filteredrobots} />
                    </Scroll>
                </div>
            );
        }
        
    }

}

export default App;