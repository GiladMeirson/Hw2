import { Component } from "react";





export default class Card extends Component{

constructor(props){
    super(props);
    this.id=props.id;
    this.img=props.img;
    this.name=props.name;
    this.p=props.p;
    this.Switch=props.Switch;
   
    
    this.state={
        
    }
}


FromRecipesToEat =() =>{
        this.props.sendData(this.id);
}

FromEatToRecipes=()=>{
    this.props.sendDatachange(this.id);
}


 SwitchBtn=()=>{
    if (this.Switch===true) {
        
        return <button onClick={this.FromRecipesToEat}>Dish Prepare</button>
    }
    else{
        
        return <button className="btnEat" onClick={this.FromEatToRecipes}>Eat!</button>
    }
    
}



render(){
  
    return(<div className="card">
        <img style={{width:200, borderRadius:30}} src={this.img} alt="pic"></img><br/>
        <h3>{this.name}</h3><br/>
        <p>{this.p}</p><br/>
        {this.SwitchBtn()}


    </div>);
}

}