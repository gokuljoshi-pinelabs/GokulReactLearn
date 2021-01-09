// export function Userform(props){
//     return (
//         <input placeholder={props.label} style={{backgroundColor:props.color}}
//         ></input>
//     )
// }

import React from "react";
import './userform.css'

export class Userform extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    constructor() {  //only one
        super();
        this.state = {
            user :{
            fname: 'john',
            age: '30'
         },
         users:[{fname:'Ravi',age:20},{fname:'JOhn',age:60}]
        }
    }

    clkBtn = (event) =>{
        this.setState({
            users:[...this.state.users,Object.assign({},this.state.user)]
        }
        )
    }

    print = (event)=>{
        console.log(this.state.user.fname);
        this.setState({   //to rerender , call setstate
            user:{age: this.state.user.fname}
        })
    }

    handleEvent = (event) => {
        this.setState({   //to rerender , call setstate
          user:Object.assign(this.state.user,{[event.target.name]: event.target.value})
          // user:{...this.state.user,[event.target.name]: event.target.value}
        })
    }

    render() {
        return (
            //only 1 root element
            //either add onChange or make textbox readOnly

            //Text box not taking input but state is changing
            // <input value={this.state.fname} onChange={(event) => {
            // console.log(this.state.fname);
            // this.state.fname = event.target.value}}
            // placeholder={this.props.label} style={{ backgroundColor: this.props.color }}></input>
            <div>
                <input value={this.state.user.fname} 
                // onChange={(event) => {   //no need to write it on every textbox
                //     //console.log(this.state.fname);
                //     //this.state.fname = event.target.value}
                //     this.setState({   //to rerender , call setstate
                //         fname: event.target.value
                //     })
                // }}
                onChange={this.handleEvent} name='fname'
                    placeholder={this.props.label} style={{ backgroundColor: this.props.color }}></input>

                <input value={this.state.user.age} name='age'  onChange={this.handleEvent}
                placeholder='Age' style={{ backgroundColor: this.props.color }}></input>
                
                <button style={{ backgroundColor: this.props.color }} onClick={(event) => { console.log('inline click');console.log(this.state.fname); }}>Inline Save</button>
                <button style={{ backgroundColor: this.props.color }} onClick={this.clkBtn}>Save to List</button>
                <button onClick={this.print}>Print</button>
                <table>
                    <thead>
                        <th>FirstName</th>
                        <th>Age</th>
                    </thead>
                    <tbody>
                        {this.state.users.map((user)=>{
                            return <tr><td>{user.fname}</td><td>{user.age}</td></tr>
                        })}
                    </tbody>
                    
                </table>
            </div>
        )

    }
}    