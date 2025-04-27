import React from "react";

type PropertyCardProps = {
  title: string;
  location: string;
  price: number;
  image: string;
};

function PropertyCard({ title, location, price, image }: PropertyCardProps) {
  return (
    <div className="align-center">
      <p className="text-3xl font-bold text-purple-500">{title}</p>
      <p className="text-black text-2xl">{location}</p>
      <p className="text-black">{price.toLocaleString()}</p>
      <img
        src={image}
        alt={title}
        className="m-auto w-full h-64 object-cover rounded-lg"
      />
    </div>
  );
}

export default PropertyCard;
