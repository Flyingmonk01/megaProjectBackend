// require('dotenv').config({path: './env'});

import { config } from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";


config({
    path: './env'
})

const port = process.env.PORT || 8000;

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log('Error in express', error);
        throw error;
    })

    app.listen(port, ()=>{
        console.log(`App is listening on port ${port}`);
    })
})
.catch((err)=>{
    console.log("Monogodb connection failed!!!", err);
});
















// const app = express();

// ( async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//         app.on("error", (error) => {
//             console.log('Error in express', error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.error("Error: ", error);
//         throw error;
//     }
// })();
