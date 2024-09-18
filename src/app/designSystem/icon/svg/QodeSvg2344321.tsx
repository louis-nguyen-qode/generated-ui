// id='234:4321'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2344321: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "60",
    height: "18.11320686340332",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 61 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.31604 0.443329H60.316V18.5565H0.31604V4.44333C0.31604 2.23419 2.1069 0.443329 4.31604 0.443329Z"
        fill="black"
        fillOpacity="0.04"
      />
    </svg>
  )
}

export default QodeSvg2344321
