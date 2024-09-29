// id='2076:49812'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg207649812: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "36",
    height: "18",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 0C0.895431 0 0 0.89543 0 2L0 18H6V2C6 0.895431 5.10457 0 4 0L2 0Z"
        fill="#F74339"
      />
      <path
        d="M32 0C30.8954 0 30 0.89543 30 2V18H36V2C36 0.895431 35.1046 0 34 0L32 0Z"
        fill="#F74339"
      />
    </svg>
  )
}

export default QodeSvg207649812
