import React from 'react';
import './services.css';
import Image1 from "../../assets/service-1.svg"
import Image2 from "../../assets/service-2.svg"
import Image3 from "../../assets/service-3.svg"
import Image4 from "../../assets/service-4.svg"



const data = [
  {
    id: 1,
    image: Image1,
    title: "Software Engineering",
    description:
      "Leverages software engineering principles to design and develop applications that solve real-world problems, ensuring clean code, efficiency, and scalability.",
  },
  {
    id: 2,
    image: Image2,
    title: "Cloud \n Management", // Inserts a non-breaking space (Unicode)
    description: "Manages cloud infrastructures by deploying, optimizing, and maintaining scalable solutions, enabling seamless operations for businesses.",
  },
  {
    id: 3,
    image: Image3,
    title: "Database Management",
    description:"Handles database systems by organizing and securing data, implementing efficient queries, and ensuring high availability for critical information.",
  },
  {
    "id": 4,
    "image": Image4,
    "title": "UI/UX Design",
    "description": "Builds user interfaces by implementing designs, ensuring responsiveness, and optimizing performance for a seamless user experience."
  }
,  
  
];


const services = () => {
  return <section className="services container section" id="services">
    <h2 className="section__title">Services</h2>

    <div className="services__container grid">
      {data.map(({id,image,title,description}) => {

        return (
          <div className="services__card" key={id}>
            <img src={image} alt="" className="services__img" />

            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
            
          </div>
        )
      })}
    </div>
  </section>
}

export default services
