import React from 'react';
import Card from '../classComp/Card';

export default function CardList(props){

    const FromRecipesToEatid =(id)=>{
        props.Sendupdate(id);
    }
    const FromEatToRecipesid=(id)=>{
        props.SendupdateID(id);
    }

let cardstr= props.RecipesArray.map((C) =>
<Card id={C.id} 
    img={C.img} 
    name={C.name} 
    p={C.des}
    Switch={props.Switch} 
    sendDatachange={FromEatToRecipesid}
     sendData={FromRecipesToEatid} key={C.id}  />);




return (

<div>
    {cardstr}
</div>

);


}


