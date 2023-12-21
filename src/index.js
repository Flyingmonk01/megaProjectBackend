// require('dotenv').config({path: './env'});

import { config } from "dotenv";
import connectDB from "./db/index.js";


config({
    path: './env'
})
connectDB();
















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
