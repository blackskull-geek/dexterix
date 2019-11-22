const initState={
    products:[
        {id:'1',title:'Product1',content:'Lorem Ipsum Dolor Sit Amet'},
        {id:'2',title:'Product2',content:'Lorem Ipsum Dolor Sit Amet'},
        {id:'3',title:'Product3',content:'Lorem Ipsum Dolor Sit Amet'}
    ]
}

const productReducer=(state=initState,action)=>{
    switch(action.type){
        case 'ADD_PRODUCT':
            //console.log("created project",action.product)
            return state;
        case 'ADD_PRODUCT_ERROR':
            console.log('create product error',action.err);
            return state;
        default:
            return state;
    }
    
}

export default productReducer