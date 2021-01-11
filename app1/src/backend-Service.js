import jquery from "jquery";
const baseUrl = "http://localhost:4300/users/";

export class BackendService{
    

    static saveUser(user,success){
       return jquery.post(baseUrl,user,success);
    }

    static getUsers(successCallback){
        return jquery.ajax(baseUrl,{
            type:'get',
            success:successCallback
        });
     }

    static deleteUser(id,successCallback){
        return jquery.ajax(baseUrl+id,{
        type:'delete',
        success:successCallback
    }
        );
     }
}
