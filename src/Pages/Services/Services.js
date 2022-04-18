import React from "react";
import useDatas from "../../Hooks/useData";
import Service from "../Service/Service";

const Services = () => {
  const [services] = useDatas([])
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="text-5xl font-extrabold text-center mb-6"> Services</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
     {
       services.map(service => <Service service={service} key={service.id}></Service> )
     }
     </div>
    </div>
  );
};

export default Services;
