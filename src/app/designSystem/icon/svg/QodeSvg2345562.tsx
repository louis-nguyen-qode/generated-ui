// id='234:5562'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2345562: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "50",
    height: "3",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 51 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48.75 0.540771H1.75C0.921573 0.540771 0.25 1.21234 0.25 2.04077C0.25 2.8692 0.921573 3.54077 1.75 3.54077H48.75C49.5784 3.54077 50.25 2.8692 50.25 2.04077C50.25 1.21234 49.5784 0.540771 48.75 0.540771Z"
        fill="black"
        fillOpacity="0.04"
      />
      <path
        d="M23.75 0.540771H1.75C0.921573 0.540771 0.25 1.21234 0.25 2.04077C0.25 2.8692 0.921573 3.54077 1.75 3.54077H23.75C24.5784 3.54077 25.25 2.8692 25.25 2.04077C25.25 1.21234 24.5784 0.540771 23.75 0.540771Z"
        fill="#1677FF"
      />
    </svg>
  )
}

export default QodeSvg2345562
