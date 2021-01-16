import jquery from "jquery";
const baseUrl = "http://localhost:4300/users/";
const roleUrl = "http://localhost:4300/roles/";

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

     static getUsersByName(name,successCallback){
        return jquery.ajax(baseUrl+'?fname='+name,{
            type:'get',
            success:successCallback
        });
     }

     static getRoles(successCallback){
        return jquery.ajax(roleUrl,{
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
