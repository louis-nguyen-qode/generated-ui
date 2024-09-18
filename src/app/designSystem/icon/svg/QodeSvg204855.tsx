// id='204:855'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg204855: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "16.987709045410156",
    height: "14.129776000976562",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7892 11.349L17.488 0.40787L1.34211 0.380859L0.804524 10.8348C0.778152 11.2379 0.976957 11.6231 1.3269 11.8342C3.40523 13.0856 10.8483 16.9291 17.3521 12.2583C17.6432 12.0482 17.8014 11.7041 17.7892 11.348"
        fill="#FFB594"
      />
    </svg>
  )
}

export default QodeSvg204855
