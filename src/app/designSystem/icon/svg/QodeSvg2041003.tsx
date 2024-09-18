// id='204:1003'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2041003: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "25.495628356933594",
    height: "22.753799438476562",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.6659 21.7576L25.5852 0.286192L26.1088 0.28418L26.1895 21.7556L25.6659 21.7576ZM6.86602 22.9096L6.36361 22.7663L7.8557 17.5854L8.35811 17.7288L6.86602 22.9096ZM3.39659 23.038L0.693886 20.0951L3.38246 16.6519L3.79609 16.9708L1.37788 20.0681L3.78298 22.6871L3.39659 23.038ZM11.6389 23.038L11.2525 22.6871L13.6566 20.0681L11.2384 16.9708L11.652 16.6519L14.3406 20.0951L11.6389 23.038Z"
        fill="#CC9B6E"
      />
    </svg>
  )
}

export default QodeSvg2041003
