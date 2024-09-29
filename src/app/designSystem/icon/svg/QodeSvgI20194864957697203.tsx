// id='I2019:48649;5769:7203'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI20194864957697203: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "16",
    height: "16",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.1396 3.90244C13.2621 3.60494 13.1921 3.26244 12.9646 3.03494C12.7371 2.80744 12.3946 2.73744 12.0971 2.85994L3.29706 6.45994C2.94206 6.60494 2.74206 6.97994 2.81456 7.35494C2.88706 7.72994 3.21706 7.99994 3.59956 7.99994H7.99956V12.3999C7.99956 12.7824 8.26956 13.1099 8.64456 13.1849C9.01956 13.2599 9.39456 13.0574 9.53956 12.7024L13.1396 3.90244Z"
        fill="#464646"
      />
    </svg>
  )
}

export default QodeSvgI20194864957697203
