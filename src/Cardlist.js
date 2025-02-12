import React from "react";
import Card from "./card";


const Cardlist = ({ robots }) => {

    const cardComponent = robots.map((user, i) => {
        return (
            <Card 
            key={i} 
            id={user.id} 
            name={user.name} 
            email={user.email} />
        );
    })


    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default Cardlist;