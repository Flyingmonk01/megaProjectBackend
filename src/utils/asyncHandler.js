const asyncHandler = (func) => {
    return async (req, res, next) => {
        try {
            await func(req, res, next);
        } catch (error) {
            res.status(error.status || 500).json({
                success: "False",
                message: error.message,
            })
        }
    }
}

export default asyncHandler;


// const asuncHandler = (func) => {
//     (req, res, next) => {
//         Promise.resolve(func(req, res, next))
//         .catch(err => next(err));
//     }
// }