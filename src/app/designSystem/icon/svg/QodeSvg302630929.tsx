// id='3026:30929'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg302630929: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "48",
    height: "19",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 5V2C1 1.44772 1.44772 1 2 1H5" stroke="black" />
      <path d="M45 1L48 1C48.5523 1 49 1.44772 49 2L49 5" stroke="black" />
      <path d="M5 20L2 20C1.44772 20 1 19.5523 1 19L1 16" stroke="black" />
      <path d="M49 16L49 19C49 19.5523 48.5523 20 48 20L45 20" stroke="black" />
    </svg>
  )
}

export default QodeSvg302630929
