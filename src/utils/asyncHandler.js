const asyncHandler =()=>{
    (res,req,next)=>{
   Promise.resolve(asyncHandler(res,req,next))

   .catch((err)=>next(err))
}
}
export{asyncHandler}

// const asynHandler =(fn) =>{}   
// const asynHandler =(fn)=>() =>{}      

// const asynHandler =(fn)=>async() =>{}   that's mean 




// const asynHandler =(fn) =>async(res,req,next) =>{
//     try{
//         await fn(res,req,next)
//     }catch(error){
//         res.status(500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }


