const mongoose = require('mongoose')

const dataSchema = mongoose.Schema({
    componentName: String,
    amountInMg: Number,
})

const simulateData = mongoose.Schema({
    attr: [dataSchema]
})
const patientSchema = mongoose.Schema({
    Height:Number,
    Weight: Number,
    Gender: String,
    Age: Number,
    occupation:String,
    attr: [dataSchema]
})

const dataModel = mongoose.model("dataModel", simulateData)
const patientModel=mongoose.model("patientModel",patientSchema)
module.exports = {dataModel,patientModel};