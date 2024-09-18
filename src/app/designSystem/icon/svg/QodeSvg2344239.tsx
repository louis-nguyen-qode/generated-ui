// id='234:4239'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2344239: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "16",
    height: "16",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.88">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.0625 3.41095V2.20313C9.0625 2.09845 8.94219 2.04063 8.86094 2.1047L1.81719 7.60626C1.56094 7.80626 1.56094 8.1922 1.81719 8.3922L8.86094 13.8938C8.94375 13.9578 9.0625 13.9 9.0625 13.7953V12.5875C9.0625 12.5109 9.02656 12.4375 8.96719 12.3906L3.34219 8.00001L8.96719 3.60782C9.02656 3.56095 9.0625 3.48751 9.0625 3.41095Z"
          fill="black"
        />
      </g>
    </svg>
  )
}

export default QodeSvg2344239
