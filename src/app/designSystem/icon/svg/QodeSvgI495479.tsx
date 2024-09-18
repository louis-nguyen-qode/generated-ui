// id='I4:95;4:79'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvgI495479: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.20001 7.2C1.20001 5.87625 2.27626 4.8 3.60001 4.8H13.2C14.5238 4.8 15.6 5.87625 15.6 7.2V16.8C15.6 18.1237 14.5238 19.2 13.2 19.2H3.60001C2.27626 19.2 1.20001 18.1237 1.20001 16.8V7.2ZM22.1663 6.1425C22.5563 6.3525 22.8 6.7575 22.8 7.2V16.8C22.8 17.2425 22.5563 17.6475 22.1663 17.8575C21.7763 18.0675 21.3038 18.045 20.9325 17.7975L17.3325 15.3975L16.8 15.0412V14.4V9.6V8.95875L17.3325 8.6025L20.9325 6.2025C21.3 5.95875 21.7725 5.9325 22.1663 6.1425Z"
        fill="#565656"
      />
    </svg>
  )
}

export default QodeSvgI495479
