// export function Userform(props){
//     return (
//         <input placeholder={props.label} style={{backgroundColor:props.color}}
//         ></input>
//     )
// }

import React from "react";
export class Userform extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    clkBtn(params) {
        console.log('Cons Save');
    }
    render(){
        return(
            //only 1 root element
            <div>
             <input placeholder={this.props.label} style={{backgroundColor:this.props.color}}></input>
             <input placeholder='Last Name' style={{backgroundColor:this.props.color}}></input>
             <button style={{backgroundColor:this.props.color}} onClick={(event)=>{console.log('inline click');}}>Inline Save</button>
             <button style={{backgroundColor:this.props.color}} onClick={this.clkBtn}>Cons Save</button>
             
             </div>
        )
        
    }
}    