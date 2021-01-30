import React from "react";
import Counter from "./counter";
import UserDetails from "./userDetails/userDetails";
import  Userform     from "./userform/userform";

export default function UserContainer(props){
    return(
           <div>
                 <Counter></Counter>
            <Userform></Userform>
           <UserDetails></UserDetails> 
          
            </div>
        )
}