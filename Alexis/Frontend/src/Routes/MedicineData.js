import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../Styles/MedicineData.css'

const MedicineData = () => {
  const [medicineName, setMedicineName] = useState('');
  const [numComponents, setNumComponents] = useState(0);
  const [componentsData, setComponentsData] = useState([{ componentName: '', amountInMg: '' }]);
  const navigate = useNavigate()
  const handleInputChange = (index, field, value) => {
   
    const updatedComponentsData = [...componentsData];
    if (!updatedComponentsData[index]) {
      updatedComponentsData[index] = { componentName: '', amountInMg: '' };
    }
    updatedComponentsData[index][field] = value;
    setComponentsData(updatedComponentsData);
  };

  const handleFormSubmit = async () => {
    if (!medicineName.trim() || numComponents < 0||(numComponents!=0 && numComponents!==componentsData.length)) {
      alert('Please fill in all the details');
      return;
    }

    try {
     
      const formData = {
        medicineName,
        components : componentsData.map(item => ({
          componentName: item.componentName,
          amountInMg: item.amountInMg,
        })),
      };

      // Make a POST request to the backend
      const { data } = await axios.post('http://localhost:5000/api/MedicineData/mediinfo', formData);

      // Handle the response as needed
      console.log('Data successfully submitted:', data);
      navigate('/editDB')
    } catch (error) {
      console.error('An error occurred:', error.message);
      // Handle errors as needed
    }
  };

  const generateComponentRows = () => {
    const rows = [];
    for (let i = 0; i < numComponents; i++) {
      rows.push(
        <div key={i} className="row">
          <input
            type="text"
            placeholder={`Component ${i + 1} Name`}
            name='componentName'
            onChange={e => handleInputChange(i, 'componentName', e.target.value)}
          />
          <input
            type="text"
            placeholder={`Component ${i + 1} Quantity in 1000mg`}
            name='amountInMg'
            onChange={e => handleInputChange(i, 'amountInMg', e.target.value)}
          />
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="medicine-container">
      <div className="Med-title">MEDICINE FORM</div>
      <div className="inputtext">
        <input type="text" onChange={(e) => setMedicineName(e.target.value)} placeholder="Medicine Name" />
      </div>
      <div className="inputtext">
        <input
          type="number"
          onChange={(e) => setNumComponents(parseInt(e.target.value, 10))}
          placeholder="Number of Components"
        />
      </div>
      <div className="components-container">{generateComponentRows()}</div>
      <div className="Med-button">
        <button onClick={handleFormSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default MedicineData;