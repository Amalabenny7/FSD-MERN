const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://amalachinnu25:amala1234@cluster0.itcbgxg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB Connected")
})
.catch(err=>console.log(err))
let mongoSchema=mongoose.Schema
const EmployeeSchema =  new mongoSchema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number
})
var employeeModel = mongoose.model("employee",EmployeeSchema)
module.exports=employeeModel