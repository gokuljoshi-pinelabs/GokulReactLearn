// export function Userform(props){
//     return (
//         <input placeholder={props.label} style={{backgroundColor:props.color}}
//         ></input>
//     )
// }

import React from "react";
import { BackendService } from "../../backend-Service";
import updateCountAction,{updateUserAction} from "../../redux-store/action";
import './userform.css'
import { connect } from "react-redux";
import { event } from "jquery";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Userform extends React.Component {

    
    // constructor(props){
    //     super(props);
    // }
    constructor(props) {  //only one
        super(props);
        this.state = {
            user :{
            fname: 'john',
            age: '30',
            salary:10000,
            gender:'FeMale',
            role:'Programmer',
            sortOrder:true,
            dob:'',
            skills:[]
         },
         users:[{fname:'Ravi',age:20,salary:100000},{fname:'JOhn',age:60,salary:200000}],
         roles:[]
        }
              
    }
componentDidMount(){
    this.getUsers();
    this.getRoles();
      
}

    getRoles = (event) =>{
        BackendService.getRoles(
            (response)=>{  //response callback
               
                this.setState({
                    roles:response
                }
                )
                
            }                        
            ).fail((error)=>{
                alert("There is an issue in Get roles");
            });
    }

    saveUser = (event) =>{
        BackendService.saveUser(this.state.user,
                    (response)=>{  //response callback
                    this.setState({
                        users:[...this.state.users,Object.assign({},response)]
                    }
                    )
                    this.props.updateCount({ type:updateCountAction,payload:this.state.users.length});
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
                this.props.updateCount({ type:updateCountAction,payload:this.state.users.length});
              }
            ).fail((error)=>{
                alert("There is an issue in Get call");
            });
    }

    getUsersByName = (event) =>{
        console.log('getUsersByName');
        if(event.target.value.length==0){
            this.getUsers();
        }else{
            BackendService.getUsersByName(event.target.value,
                (response)=>{  //response callback
                this.setState({
                    users:response
                }
                )
            }
                    ).fail((error)=>{
                        alert("There is an issue in Get by name call");
                    });
        }
    }

     saveUsersToStore = (index,user)=>{

        console.log('saveUsersToStore click');
        this.props.updateUser({ type:updateUserAction,payload:user});

        }


    print = (event)=>{
        console.log(this.state.user.fname);
        this.setState({   //to rerender , call setstate
            user:{age: this.state.user.fname}
        })
    }

    clkDelete = (index,userid,event)=>{
       
        event.stopPropagation();
        console.log('Delete click');
        
        const isDelete= window.confirm('Are you sure');
        if(isDelete){
            console.log(this,index);
            BackendService.deleteUser(userid,()=>{
                 this.state.users.splice(index,1);
                this.setState(
                    {users:this.state.users}
                 )
                 this.props.updateCount({ type:updateCountAction,payload:this.state.users.length});
            }).fail((error)=>{
                alert('delete error');
            });

            // this.state.users.splice(index,1);

            // this.setState(
            //     {users:this.state.users}
            // )
        }
      

        }

        sortAge = (event) => {
             let order=this.state.sortOrder;
             order=!order;
             this.state.users.sort((user1,user2)=>{
                 if(order){
                    return user1.age-user2.age;
                 }else{
                    return user2.age-user1.age;
                 }
            });

            this.setState({   //to rerender , call setstate
                users: this.state.users,
                sortOrder:order
              })
        }

        handleDateChange= function(){
                console.log(arguments);
                this.setState({  
                         user:{...this.state.user,[this.state.user.dob]:arguments[0]}
                })
        }
       
    handleEvent = (event) => {
        if(event.target.type == 'checkbox'){            
            if(event.target.checked){
                //add values here
                this.state.user[event.target.name].push(event.target.value);
            }else{
                //remove basis value       
                let i = -1;
                this.state.user[event.target.name].map( (value, index)=> {
                    if(value == event.target.value){
                        i = index;
                    }
                });
                if(i>-1){
                    this.state.user[event.target.name].splice(i, 1);
                }                
            }
            this.setState({  
                user: this.state.user
            });   
        }       
        else{
            this.setState({   //to rerender , call setstate
            user:Object.assign(this.state.user,{[event.target.name]: event.target.value})
            // user:{...this.state.user,[event.target.name]: event.target.value}
            })
            }
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
            <span id="UserFromID">
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

                <input value={userModel.age} name='age' type='number' min='1' max='150' onChange={this.handleEvent}
                placeholder='Age' style={{ backgroundColor: this.props.color }}></input>

                <input value={userModel.salary} name='salary' min='100'  type='number' onChange={this.handleEvent}
                placeholder='salary' style={{ backgroundColor: this.props.color }}></input>

                <input type="radio" value="Male" onChange={this.handleEvent} name="gender"/>Male
                <input type="radio" checked={true} value="Female" onChange={this.handleEvent} name="gender"/>FeMale

                {this.state.roles.map((role,index)=>{
                            return <span><input type="radio" value={role} onChange={this.handleEvent} name="role"/>{role}</span>
                        })}
                <div>
                <input name='skills' type="checkbox" onChange={this.handleEvent} value="React" />React  
                <input name='skills'  type="checkbox" onChange={this.handleEvent} value="ReactNative" />React Native  
                <input name='skills' onChange={this.handleEvent} value="Javascript"  type="checkbox"/>Javascript      
                
                DOB:<DatePicker selected={this.state.user.dob} onChange={this.handleDateChange.bind(this)}></DatePicker>
                
                </div>
                <button style={{ backgroundColor: this.props.color }} onClick={(event) => { console.log('inline click');console.log(userModel.fname); }}>Inline Save</button>
                <button style={{ backgroundColor: this.props.color }} onClick={this.saveUser}>Save User</button>
                <button onClick={this.print}>Print</button>
                <button onClick={this.getUsers}>Get Users</button>
                <table>
                    <thead>
                        <tr>
                    <th>Index</th>
                    <th>ID</th>
                        <th>FirstName<div><input onBlur={this.getUsersByName}/></div></th>
                        <th onClick={this.sortAge}>Age</th>
                        <th>Salary</th>
                        <th>Gender</th>
                        <th>Role</th>
                        <th>skills</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user,index)=>{
                            let skills="";
                            skills= Array.isArray(user["skills[]"])? user['skills[]'].map((skill)=> skill+","): user['skills[]']
                            return <tr onClick={this.saveUsersToStore.bind(this,index,user)}>
                                <td>{index}</td>
                                <td>{user.id}</td>
                                <td>{user.fname}</td>
                            <td>{user.age}</td>
                            <td>{user.salary}</td>
                            <td>{user.gender}</td>
                            <td>{user.role}</td>
                            <td>{skills}</td>
                            <td><button onClick={this.clkDelete.bind(this,index,user.id)}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                    
                </table>
            </span>
        )

    }
}    


const MapDispatchToProps = function (dispatch) {
    return{
        updateCount : (action)=>{dispatch(action)},
        updateUser : (action)=>{dispatch(action)}
    }
}
export default connect(null,MapDispatchToProps)(Userform);