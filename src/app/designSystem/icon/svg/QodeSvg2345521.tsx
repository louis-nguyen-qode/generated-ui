// id='234:5521'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345521: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "40",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.25 0.5H4.25C2.04086 0.5 0.25 2.29086 0.25 4.5V20.5C0.25 22.7091 2.04086 24.5 4.25 24.5H36.25C38.4591 24.5 40.25 22.7091 40.25 20.5V4.5C40.25 2.29086 38.4591 0.5 36.25 0.5Z"
        fill="#1677FF"
      />
    </svg>
  )
}

export default QodeSvg2345521
