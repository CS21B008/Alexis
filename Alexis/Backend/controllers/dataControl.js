const asyncHandler = require("express-async-handler");
const {dataModel,patientModel} = require("../models/dataModel");
const {medicineDataModel,permitDataModel} = require("../models/MedicineModel");
const postData = asyncHandler(async (req, res) => {
    const { inputList } = req.body;
    try {
        if (!inputList || inputList.length === 0) {
            return res.status(400).json({ error: 'InputList is required' });
        }
        const transformedData = {
            attr: inputList.map(item => ({
                componentName: item.componentName,
                amountInMg: item.amountInMg,
            })),
        };
        const simulateData = await dataModel.create(transformedData);
        return res.status(201).json(simulateData);
    } catch (error) {
        res.status(500).json({
            message: "missed data push",
        });
    }
});
const postPatient=asyncHandler(async(req,res)=>{
    const { Age,
        Gender,
        Height,
        Weight,
        occupation,receivedData } = req.body;
    if ( !Height || !Weight || !Age || !Gender ||!occupation) {
        res.status(400);
        throw new Error("Please fill in all required fields");
    }
    try {
        console.log()
       console.log(Age)
        const NP = {
            
           
            Height:Height,
            Weight:Weight,
            Gender: Gender,
            Age: Age,
            occupation:occupation,
            attr: receivedData.map(item => ({
                componentName: item.componentName,
                amountInMg: item.amountInMg,
              })),


        };
        const newPatient = await patientModel.create(NP);
        const BMI = (Weight / Math.pow(Height, 2)) ;
        
        const organs = ["brain", "heart", "lungs","intestines","kidneys","stomach"];
        const indices=[-1,-1,-1,-1,-1,-1];
        const quality=["Good","Mild","Moderate","Severe"];
        let maxIndex = 0;

    var ind=0;
    var hiInd=0;
    // <p>Age-group 1:1-10</p>
    //       <p>Age-group 2:11-28</p>
    //       <p>Age-group 3:28-60</p>
    if(Age>=1 && Age<=10)
    {
        ind=0;
    }
    else if(Age>=11 && Age<=28)
    {
        ind=1;
    }
    else{
        ind=2;
    }
    for (const organName of organs) {
        let maxIndex = 0;
      for(medicine in receivedData)
      {
      const permitData = await permitDataModel.findOne({ medicineName:medicine.componentName , organName:organName});
      if(permitData)
      {
      for (let i = 4; i >-1; i--) {
        var res=(medicine.amountInMg)/BMI;
        if(permitData[ind][quality[i]]<res)
        {
            maxIndex = Math.max(maxIndex, i);
        }
      }
    }
      }
      indices[hiInd]=maxIndex;
      hiInd=hiInd+1;



    }
       res.status(200).json({
            indices

        });
        res.status(200).json(Age);
    }
    catch (error) {
        res.status(500).json({
            
            message: "trash"
            
        });
       
    }

});
module.exports = { postData,postPatient };