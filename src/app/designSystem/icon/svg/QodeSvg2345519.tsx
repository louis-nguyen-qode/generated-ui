// id='234:5519'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345519: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "180",
    height: "89.17156982421875",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 182 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.5637 82.5C34.442 82.5 32.4071 83.3429 30.9069 84.8431L26.6642 89.0858C25.8832 89.8668 24.6168 89.8668 23.8358 89.0858L19.5931 84.8431C18.0929 83.3429 16.058 82.5 13.9363 82.5H11.5055C7.93947 82.5 6.64632 82.1287 5.34262 81.4315C4.03891 80.7342 3.01576 79.7111 2.31853 78.4074C1.6213 77.1037 1.25 75.8105 1.25 72.2445V10.7555C1.25 7.18947 1.6213 5.89632 2.31853 4.59262C3.01576 3.28891 4.03891 2.26576 5.34262 1.56853C6.64632 0.871302 7.93947 0.5 11.5055 0.5L170.994 0.5C174.561 0.5 175.854 0.871302 177.157 1.56853C178.461 2.26576 179.484 3.28891 180.181 4.59262C180.879 5.89632 181.25 7.18947 181.25 10.7555V72.2445C181.25 75.8105 180.879 77.1037 180.181 78.4074C179.484 79.7111 178.461 80.7342 177.157 81.4315C175.854 82.1287 174.561 82.5 170.994 82.5H36.5637Z"
        fill="white"
        stroke="#F0F0F0"
      />
    </svg>
  )
}

export default QodeSvg2345519
