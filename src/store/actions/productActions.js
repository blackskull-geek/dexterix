export const createProduct=(product)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore=getFirestore();
        firestore.collection('products').add({
            ...product

        }).then(()=>{
            dispatch({
                type: 'ADD_PRODUCT',
                product: product
            })

        }).catch((err)=>{
            dispatch({type:'ADD_PRODUCT_ERROR',err})
        })
    }
}