const mongoose = require('mongoose');

const componentSchema = mongoose.Schema({
    componentName: String,
    amountInMg: Number
});

const medicineDataSchema = mongoose.Schema({
  medicineName: String,
  components: [componentSchema]
});

const permitSchema=mongoose.Schema({
    Good: Number,
    Mild: Number,
    Moderate:Number,
    Severe:Number
});
const permitDataSchema=mongoose.Schema({
    medicineName: String,
    organName:String,
    limits: [permitSchema]//,permitSchema,permitSchema

  });

const medicineDataModel = mongoose.model('medicineDataModel', medicineDataSchema);
const permitDataModel = mongoose.model('permitDataModel', permitDataSchema);
module.exports = {medicineDataModel,permitDataModel};