const mongoose = require("mongoose");
//Write missing code 
mongoose.connect('mongodb+srv://muhammedmusharafkb21ec1135:Muhammed2001@cluster0.fprxqqo.mongodb.net/empdb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
  console.log('DB is connected')
}).catch((res)=>{
  console.log('DB not connected')
})
