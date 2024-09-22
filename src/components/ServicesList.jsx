import React from 'react'
import './ServicesList.css'
const ServicesList = ({ services,  onDelete }) => {
  return (
    <div  className='ser'>
        <h2>All Services List</h2>
    <div className="list add flex-col">
     
      
      <div className="list-table-formate title">
        <b>Name </b>
        <b>Description</b>
        <b>Price</b>
        <b>Action</b>
      </div>
      {services.map((service) => (
         <li key={service.id}>
          <div className="list-table-formate"  >
           
            <p>{service.name} </p>
            <p>{service.description}</p>
            <p>Rs. {service.price} </p>
            <p className='cursor'onClick={() => onDelete(service.id)}>X</p>
         </div>
         </li>
        
          
         
        

      ))}

    </div>
      
  </div>
  )
}

export default ServicesList
