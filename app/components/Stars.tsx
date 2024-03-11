import React from 'react'
import { FaStar } from "react-icons/fa";

interface StarProps {
  numberOfStars: number
}

const Stars: React.FC<StarProps> = ({ numberOfStars }) => {

  // Create an array of size `numberOfTimes` filled with `null` values
  const elements = Array.from({ length: numberOfStars }, (_, index) => index);

  return (
    <div className="flex gap-1 text-amber-500">
      {elements.map((_, index) => (
        <FaStar key={index} />
      ))}  
    </div>
  )
}

export default Stars
