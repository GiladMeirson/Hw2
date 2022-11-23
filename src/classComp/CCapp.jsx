import React, { Component } from 'react';
import CardList from '../FC/CardList';


const RecipesArray=[

{id:0,name:'Pad-Thai',des:'Pad-Thai Pad-Thai Pad-Thai Pad-Thai Pad-Thai Pad-Thai Pad-Thai',img:'https://static.onecms.io/wp-content/uploads/sites/44/2020/09/16/greek-salmon-bowl.jpeg'},
{id:1,name:'Pasta',des:'Pasta Pasta Pasta Pasta Pasta Pasta Pasta Pasta Pasta Pasta Pasta',img:'https://static.onecms.io/wp-content/uploads/sites/44/2020/09/16/greek-salmon-bowl.jpeg'},
{id:2,name:'fish&chips',des:'fish&chips fish&chips fish&chips fish&chips fish&chips fish&chips',img:'https://static.onecms.io/wp-content/uploads/sites/44/2020/09/16/greek-salmon-bowl.jpeg'}
];
const ReadyToEatArray=[];

const header=<div className='header'><h1>Recipes</h1>

<h4>Recipes made:
</h4></div>;

const Ready=<div className='header'>
<h1>Ready to EAT!</h1>
<h4>Recipes made:</h4>
</div>;



export default class CCapp extends Component {

constructor(props){
    super(props);
    this.RecipesArray=RecipesArray;
    this.ReadyToEatArray=ReadyToEatArray
    this.RecipesLEN=this.RecipesArray.length;
    this.ReadyLEN=this.ReadyToEatArray.length;
    
    this.state={
        RecipesLEN:this.RecipesLEN,
        ReadyLEN:this.ReadyLEN,
        Recipes:this.RecipesArray,
        Ready:this.ReadyToEatArray

    };

}

Getupdate2=(id)=>{
    let stam;
    this.state.Recipes.map((Recipe) => {

        if (Recipe.id===id) {
            stam=Recipe;
            
        }
    } )

let newRecipesArray=this.state.Recipes.filter(card=>card.id!==id);
let newcounter=this.state.RecipesLEN -1;
let newEatArray=[...this.state.Ready,stam]
let newcounter2=this.state.ReadyLEN +1;
console.log(newEatArray)
console.log(stam)
this.setState({

    RecipesLEN:newcounter,
    ReadyLEN:newcounter2,
    Recipes:newRecipesArray,
    Ready:newEatArray
    
})
}
GetupdateUPSIDE=(id)=>{
    let stam;
    this.state.Ready.map((Ready) => {

        if (Ready.id===id) {
            stam=Ready;
            
        }
    } )

let newEatArray=this.state.Ready.filter(card=>card.id!==id);
let newcounter=this.state.RecipesLEN +1;
let newRecipesArray=[...this.state.Recipes,stam]
let newcounter2=this.state.ReadyLEN -1;
console.log(newEatArray)
console.log(stam)
this.setState({

    RecipesLEN:newcounter2,
    ReadyLEN:newcounter,
    Recipes:newRecipesArray,
    Ready:newEatArray
    
})
}







    render() {
        return (
            <div>
              {header}
              <div className='row'>
              <CardList RecipesArray={this.state.Recipes}  Sendupdate={this.Getupdate2} Switch={true} />
              </div>
              {Ready}
              <div className='row'>
              <CardList RecipesArray={this.state.Ready} Switch={false}  SendupdateID={this.GetupdateUPSIDE}  />
              </div>
            </div>
          
        );
    }
}

