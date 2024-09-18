// id='3026:31101'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg302631101: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "29",
    height: "10",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 31 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 5V2C1 1.44772 1.44772 1 2 1H5" stroke="#1597F4" />
      <path d="M26 1L29 1C29.5523 1 30 1.44772 30 2L30 5" stroke="#1597F4" />
      <path d="M26 1L29 1C29.5523 1 30 1.44772 30 2L30 5" stroke="#1597F4" />
      <path d="M5 11L2 11C1.44772 11 1 10.5523 1 10L1 7" stroke="#1597F4" />
      <path
        d="M30 7L30 10C30 10.5523 29.5523 11 29 11L26 11"
        stroke="#1597F4"
      />
    </svg>
  )
}

export default QodeSvg302631101
