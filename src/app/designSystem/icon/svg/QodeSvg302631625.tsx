// id='3026:31625'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg302631625: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "4",
    height: "4",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 5 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 5V2C1 1.44772 1.44772 1 2 1H5" stroke="#464646" />
    </svg>
  )
}

export default QodeSvg302631625
