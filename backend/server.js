import  express from "express"
import  cors from "cors"
import 'dotenv/config'
import { connectdb } from "./config/monodb.js";
import connectcloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRout.js";
import productRoute from "./routes/productRoute.js";
import CartRouter from "./routes/CartRout.js";
import OrderRouter from "./routes/OrderRoute.js";


const app =express();
const port =process.env.PORT || 4000

//middleware
app.use(express.json())
app.use(cors())
connectdb()
connectcloudinary();



// api end endpoint
app.use('/api/user',userRouter)
app.use('/api/product',productRoute)
app.use('/api/cart',CartRouter)
app.use('/api/order',OrderRouter)
app.get('/' ,(req,res)=>{
     res.send("Hello server");
})

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})














//Od91zSrz37NSgvdA