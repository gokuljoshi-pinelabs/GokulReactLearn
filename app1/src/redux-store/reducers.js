const reducers  = function (state={count:0,user :{
    fname: 'john',
    age: '30',
    salary:10000,
    gender:'FeMale',
    role:'Programmer',
    sortOrder:true,
    skills:[]
 }},action) {

    switch (action.type) {
        case "UPDATE_COUNT":
            state = {...state,count:action.payload};
            break;
        case "UPDATE_USER":
        state =  {...state,user:action.payload};
        break;
    
        default:
            break;
    }

    return state;   
}

export default reducers;