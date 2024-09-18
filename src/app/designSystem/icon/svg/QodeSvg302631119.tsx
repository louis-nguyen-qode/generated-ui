// id='3026:31119'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg302631119: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "59",
    height: "10",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 61 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 5V2C1 1.44772 1.44772 1 2 1H5" stroke="#1597F4" />
      <path d="M56 1L59 1C59.5523 1 60 1.44772 60 2L60 5" stroke="#1597F4" />
      <path d="M56 1L59 1C59.5523 1 60 1.44772 60 2L60 5" stroke="#1597F4" />
      <path d="M5 11L2 11C1.44772 11 1 10.5523 1 10L1 7" stroke="#1597F4" />
      <path
        d="M60 7L60 10C60 10.5523 59.5523 11 59 11L56 11"
        stroke="#1597F4"
      />
    </svg>
  )
}

export default QodeSvg302631119
