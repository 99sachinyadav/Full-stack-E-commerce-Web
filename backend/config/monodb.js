import mongoose from 'mongoose'

 export const connectdb = async()=>{
      try {
         await mongoose.connect(`${process.env.MONGOURI}`)
         console.log('database connected')
      } catch (error) {
         console.log(error)
         process.exit(1);
      }
}