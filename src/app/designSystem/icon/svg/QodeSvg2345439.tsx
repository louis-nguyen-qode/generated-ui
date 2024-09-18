// id='234:5439'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345439: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "16",
    height: "8",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.176 0.5H2.17603C1.07146 0.5 0.176025 1.39543 0.176025 2.5V6.5C0.176025 7.60457 1.07146 8.5 2.17603 8.5H14.176C15.2806 8.5 16.176 7.60457 16.176 6.5V2.5C16.176 1.39543 15.2806 0.5 14.176 0.5Z"
        fill="#1791FF"
      />
    </svg>
  )
}

export default QodeSvg2345439
