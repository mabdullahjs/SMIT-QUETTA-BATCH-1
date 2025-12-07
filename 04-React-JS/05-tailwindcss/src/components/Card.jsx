import React from "react";
import { FaStar } from "react-icons/fa";

const CarCard = ({car}) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={car.imageUrl}
          alt={car.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800">{car.title}</h2>

        {/* Rating + Trips */}
        <div className="flex items-center text-sm text-gray-600">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="font-medium">{car.rating}</span>
          <span className="mx-1">•</span>
          <span>{car.trips} trips</span>
        </div>

        {/* Price */}
        <div className="flex justify-between items-center mt-3">
          <div>
            <p className="text-xl font-bold text-gray-900">
              ${car.pricePerDay}
              <span className="text-sm font-medium text-gray-500"> /day</span>
            </p>
          </div>

          {/* Discount Label */}
          {car.discountPercentage > 0 && (
            <p className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded-lg font-semibold">
              {car.discountPercentage}% off
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarCard;
