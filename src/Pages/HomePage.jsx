import React, { useState, useEffect } from 'react';
import Forms from '../components/Forms'
import ServicesList from'../components/ServicesList'
import './HomePage.css'
const HomePage = () => {
  const [services, setServices] = useState([]); 

  useEffect(() => {
    
    const initialServices = [
      { id: 1, name: 'Doctor Consultation', description: 'consulltation about disease', price: 50 },
      { id: 2, name: 'Sonagraphy', description: 'Diagnostic  imaging', price: 400 },
      { id: 3, name: 'MRI', description: 'Diagnostic Magnetic imaging', price: 1000 },

    ];
    setServices(initialServices);
  }, []);

  const addService = (newService) => {
    setServices([...services, { ...newService, id: services.length + 1 }]);
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };
  return (
    <div className='main_container'>
      <div className="left">
        <Forms onAddService={addService}/>

      </div>
      <div className="right">
        <ServicesList  services={services}  onDelete={deleteService} />

      </div>

    </div>
  )
}

export default HomePage
