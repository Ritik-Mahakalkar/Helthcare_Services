import React, { useState } from 'react'
import './Forms.css'
const Forms = ({ onAddService }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddService({ name, description, price });
    setName('');
    setDescription('');
    setPrice(0);
  };
  return (
    <div className="cont">
    <div className='contact-form'>
    <form action="" onSubmit={handleSubmit}>
    <div className="contactfild">
         <h2>Service Form</h2>
         <div class=" input">
         <label > Name</label>
         <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
             
          </div>
          <div class=" input">
          <label > Price</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            
          </div>
          
          <div class=" input">
          <label > Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="4" cols="40"></textarea>
            
          </div>
         <button className="btn">Submit</button>
    </div>
    </form>

</div>
</div>
  )
}

export default Forms
