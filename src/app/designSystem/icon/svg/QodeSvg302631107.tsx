// id='3026:31107'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg302631107: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "52",
    height: "10",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 54 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 5V2C1 1.44772 1.44772 1 2 1H5" stroke="#1597F4" />
      <path d="M49 1L52 1C52.5523 1 53 1.44772 53 2L53 5" stroke="#1597F4" />
      <path d="M49 1L52 1C52.5523 1 53 1.44772 53 2L53 5" stroke="#1597F4" />
      <path d="M5 11L2 11C1.44772 11 1 10.5523 1 10L1 7" stroke="#1597F4" />
      <path
        d="M53 7L53 10C53 10.5523 52.5523 11 52 11L49 11"
        stroke="#1597F4"
      />
    </svg>
  )
}

export default QodeSvg302631107
