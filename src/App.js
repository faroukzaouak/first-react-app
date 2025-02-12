import React from 'react';
import Cardlist from './Cardlist';
import { robots } from './robots';
import Searchbox from './Searchbox';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    searchchange=(event)=>{
        
        this.setState({searchfield: event.target.value});
        
    }


    render() {
        const filteredrobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) 
            || robot.email.toLowerCase().includes(this.state.searchfield.toLowerCase()) 
            || robot.id.toString().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className="tc">
                
                <h1>RoboFriends</h1>
                <Searchbox searchchange={this.searchchange} />
                <Cardlist robots={filteredrobots} />
            </div>
        );
    }
    
}

export default App;