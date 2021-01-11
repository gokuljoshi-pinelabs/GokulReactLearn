// export function Userform(props){
//     return (
//         <input placeholder={props.label} style={{backgroundColor:props.color}}
//         ></input>
//     )
// }

import React from "react";
import { BackendService } from "../../backend-Service";
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
            age: '30',
            salary:10000,
            gender:'Male'
         },
         users:[{fname:'Ravi',age:20,salary:100000},{fname:'JOhn',age:60,salary:200000}]
        }
                BackendService.getUsers(
                    (response)=>{  //response callback
                    this.setState({
                        users:response
                    }
                    )
            }
                    ).fail((error)=>{
                        alert("There is an issue in Get call");
                    });
    }

    saveUser = (event) =>{
        BackendService.saveUser(this.state.user,
                    (response)=>{  //response callback
                    this.setState({
                        users:[...this.state.users,Object.assign({},response)]
                    }
                    )
            }
        ).fail((error)=>{
            alert("There is an issue in save");
        });
    }

    getUsers = (event) =>{
        BackendService.getUsers(
            (response)=>{  //response callback
            this.setState({
                users:response
            }
            )
    }
            ).fail((error)=>{
                alert("There is an issue in Get call");
            });
    }

    print = (event)=>{
        console.log(this.state.user.fname);
        this.setState({   //to rerender , call setstate
            user:{age: this.state.user.fname}
        })
    }

    clkDelete = (index,userid)=>{

        console.log('Delete click');
        
        const isDelete= window.confirm('Are you sure');
        if(isDelete){
            console.log(this,index);
            BackendService.deleteUser(userid,()=>{
                 this.state.users.splice(index,1);
                this.setState(
                    {users:this.state.users}
                 )
            }).fail((error)=>{
                alert('delete error');
            });

            // this.state.users.splice(index,1);

            // this.setState(
            //     {users:this.state.users}
            // )
        }

        }

       
    handleEvent = (event) => {
        this.setState({   //to rerender , call setstate
          user:Object.assign(this.state.user,{[event.target.name]: event.target.value})
          // user:{...this.state.user,[event.target.name]: event.target.value}
        })
    }

    render() {
        const userModel = this.state.user;
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

                <input value={userModel.age} name='age'  onChange={this.handleEvent}
                placeholder='Age' style={{ backgroundColor: this.props.color }}></input>

                <input value={userModel.salary} name='salary'  onChange={this.handleEvent}
                placeholder='salary' style={{ backgroundColor: this.props.color }}></input>

                <input type="radio" value="Male" onChange={this.handleEvent} name="gender"/>Male
                <input type="radio" value="Female" onChange={this.handleEvent} name="gender"/>FeMale
                
                <button style={{ backgroundColor: this.props.color }} onClick={(event) => { console.log('inline click');console.log(userModel.fname); }}>Inline Save</button>
                <button style={{ backgroundColor: this.props.color }} onClick={this.saveUser}>Save User</button>
                <button onClick={this.print}>Print</button>
                <button onClick={this.getUsers}>Get Users</button>
                <table>
                    <thead>
                    <th>Index</th>
                    <th>ID</th>
                        <th>FirstName</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Gender</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {this.state.users.map((user,index)=>{
                            return <tr>
                                <td>{index}</td>
                                <td>{user.id}</td>
                                <td>{user.fname}</td>
                            <td>{user.age}</td>
                            <td>{user.salary}</td>
                            <td>{user.gender}</td>
                            <td><button onClick={this.clkDelete.bind(this,index,user.id)}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                    
                </table>
            </div>
        )

    }
}    