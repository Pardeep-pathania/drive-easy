import React, { useState } from "react";
import Title from "../../components/owner/Title";
import { assets } from "../../assets/assets";

const AddCar = () => {
  const [image, setImage] = useState(null);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: 0,
    pricePerDay: 0,
    category: "",
    transmission: "",
    fuel_type: "",
    seating_capacity: 0,
    location: "",
    description: "",
  });
  const currency =import.meta.env.VITE_CURRENCY

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="px-4 py-10 md:px-10 flex-1">
      <Title
        title="Add new Car"
        subTitle="Fill in details to list a new car for booking, including pricing, availability, and car specification."
      />

      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl"
      >
        {/* Car Image */}
        <div>
          <label htmlFor="car-image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" className="h-14 rounded cursor-pointer" />
            <input type="file" id="car-image" accept="image/*" hidden onChange={e=>setImage(e.target.files[0])}/>
          </label>
          <p>Upload a picture of your car</p>
        </div>

    {/* Car Brand & Model */}
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col w-full">
          <label>Brand</label>
          <input type="text" placeholder="e.g BMW, Mercedes, Audi..." required className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none" value={car.brand} onChange={e=>setCar({...car, brand:e.target.value})} />
        </div>
     
        <div className="flex flex-col w-full">
          <label>Model</label>
          <input type="text" placeholder="e.g X5, E-Class, M4..." required className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none" value={car.model} onChange={e=>setCar({...car, model:e.target.value})} />
        </div>     
      </div>

      {/* Car year, Price, category */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         <div className="flex flex-col w-full">
          <label>Year</label>
          <input type="number" placeholder="e.g 2025" required className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none" value={car.year} onChange={e=>setCar({...car, year:e.target.value})} />
        </div>  

         <div className="flex flex-col w-full">
          <label>Daily Price ({currency})</label>
          <input type="number" placeholder="e.g 1000" required className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none" value={car.pricePerDay} onChange={e=>setCar({...car, pricePerDay:e.target.value})} />
        </div>  

         <div className="flex flex-col w-full">
          <label>Category</label>
          <select onChange={e=> setCar({...car, category:e.target.value})} value={car.category} className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none">
            <option value="">Select a Category</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Van">Van</option>
          </select>
        </div>    
      </div>

      {/* Car Transmission, fuel type, Seating Capacity */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         <div className="flex flex-col w-full">
          <label>Transmission</label>
          <select onChange={e=> setCar({...car, transmission:e.target.value})} value={car.transmission} className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none">
            <option value="">Select a transmission</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
            <option value="Semi-Automatic">Semi-Automatic</option>
          </select>
        </div> 

           <div className="flex flex-col w-full">
          <label>Fuel Type</label>
          <select onChange={e=> setCar({...car, fuel_type:e.target.value})} value={car.fuel_type} className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none">
            <option value="">Select a Fuel type</option>
            <option value="Gas">Gas</option>
            <option value="Diesel">Diesel</option>
            <option value="Petrol">Petrol</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div> 

        <div className="flex flex-col w-full">
          <label>Seating Capacity</label>
          <input type="number" placeholder="e.g 4" required className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none" value={car.seating_capacity} onChange={e=>setCar({...car, seating_capacity:e.target.value})} />
        </div> 
      </div>

      {/* Car location */}
      <div className="flex flex-col w-full">
          <label>Location</label>
          <select onChange={e=> setCar({...car, location:e.target.value})} value={car.location} className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none">
            <option value="">Select a Location</option>
            <option value="Gas">Gas</option>
            <option value="Diesel">Jammu</option>
            <option value="Petrol">Punjab</option>
            <option value="Electric">Chandigarh</option>
            <option value="Hybrid">Delhi</option>
          </select>
        </div> 

        {/* Car Description */}
         <div className="flex flex-col w-full">
          <label>Description</label>
          <textarea rows={5} placeholder="e.g A luxurious SUV with a spacious interior and a powerful engine." required className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none" value={car.description} onChange={e=>setCar({...car, description:e.target.value})} />
        </div> 
    
      <button className="flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer ">
        <img src={assets.tick_icon} alt="" />
        List your Car
      </button>

      </form>
    </div>
  );
};

export default AddCar;
