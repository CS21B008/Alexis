const asyncHandler = require("express-async-handler");
const {medicineDataModel,permitDataModel} = require("../models/MedicineModel");

const postMediData = asyncHandler(async (req, res) => {
    const { medicineName, components } = req.body;

    try {
        if (!medicineName || !components || components.length === 0) {
            return res.status(400).json({ error: 'MedicineName and Components are required' });
        }

        const transformedData = {
            medicineName,
            components: components.map(item => ({
                componentName: item.componentName,
                amountInMg: item.amountInMg,
            })),
        };
        const existingMedicine = await medicineDataModel.findOne({ medicineName });

        if (existingMedicine) {
          // If it exists, update the existing medicine
          existingMedicine.components = components;
          const updatedMedicine = await existingMedicine.save();
          res.status(200).json(updatedMedicine);
        } else {
        const newMedicineData = await medicineDataModel.create(transformedData);
        return res.status(201).json(newMedicineData);
        }
    } catch (error) {
        res.status(500).json({
            message: "Failed to save medicine data",
        });
       
    }
});
const postPermit = asyncHandler(async (req, res) => {
    const { medicineName, organName, Pdata } = req.body;
    // const [limits, setlimits] = useState([
    //     {Good:'', Mild:'', Moderate:'', Severe:''},
    //     {Good:'', Mild:'', Moderate:'', Severe:''},
    //     {Good:'', Mild:'', Moderate:'', Severe:''},
    //   ]);
    try {
        if (!medicineName || !organName || !Pdata ) {//Pdata.length !== 3
            return res.status(400).json({ error: 'MedicineName, OrganName, and Limits are required with three entries' });
        }
        // Pdata.map(item => {
        //    console.log(item[0]),
        //     console.log(item[1]) })
       
        const transformedData = {
            medicineName,
            organName,
            limits: Pdata.map(item => ({
                Good: item[0],
                Mild: item[1],
                Moderate:item[2],
                Severe:item[3]
              })),
        };
        console.log(transformedData.medicineName)

        const existingPermit = await permitDataModel.findOne({ medicineName, organName });

        if (existingPermit) {
            // If it exists, update the existing permit
            existingPermit.limits = transformedData.limits;
            const updatedPermit = await existingPermit.save();
            res.status(200).json(updatedPermit);
        } else {
            const newPermitData = await permitDataModel.create({
                ...transformedData
            });
            console.log(newPermitData)
            return res.status(201).json(newPermitData);
        }
    } catch (error) {
        res.status(500).json({
            message: "Failed to save permit data",
        });
    }
});

module.exports = { postMediData,postPermit};