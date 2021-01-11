import jquery from "jquery";

export class BackendService{
    static saveUser(user,success){
       return jquery.post("http://localhost:4300/users/",user,success);
    }
}
