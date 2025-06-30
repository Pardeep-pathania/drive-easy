
import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";


export default function Testimonials() {
  const testimonials = [
    {
      name: "Ananya Singh",
      location: "Mohali, Punjab",
      image: assets.testimonial_image_1,
      testimonial:
        "ChatGPT has improved my daily workflow – like having a personal assistant working round the clock!",
    },
    {
      name: "Rohan Kumar",
      location: "Bathinda, Punjab",
      image: assets.testimonial_image_2,
      testimonial:
        "Very helpful for brainstorming ideas. Great tool for students and professionals!",
    },
    {
      name: "Priya Patel",
      location: "Jalandhar, Indial",
      image: assets.testimonial_image_1,
      testimonial:
        "Love its accuracy and ease-of-use. Saved me hours during my project research.",
    },
  ];

  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
      <Title
        title="What Our Customers Say"
        subTitle="Discover why discerning travellers choose StayVenture for their luxury accomodations around the world"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:translate-y-1 transition-all duration-500"
          >
            <div className="flex items-center gap-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-playfair text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img key={index} src={assets.star_icon} alt="star-icon" />
                ))}
            </div>
            <p className="text-gray-500 max-w-90 mt-4 font-light">
              "{testimonial.testimonial}"
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
