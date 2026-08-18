// two ways to this 
// how we will do it
// we will use promises
const asynchandler = (requestHandler) => {
    (req, res, next) => {
        Promises.
        resolve(requestHandler(req, res, next)).
        catch((err) => next(err));
    }
}


// another way to do it
// use of HOF
// const asyncHandler = (fn) => async(req, res, next) => {
//     try{
//         await fn(req, res, next)
//     }
//     catch(error){
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message,
//         })
//     }
// }