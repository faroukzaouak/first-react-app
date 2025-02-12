import React from 'react';
import Cardlist from './Cardlist';
import { robots } from './robots';
import Searchbox from './Searchbox';

class App extends React.Component {
    render() {
        return (
            <div className="tc">
                
                <h1>RoboFriends</h1>
                <Searchbox />
                <Cardlist robots={robots} />
            </div>
        );
    }
    
}

export default App;