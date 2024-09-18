// id='132:944'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg132944: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "14",
    height: "14",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_132_944)">
        <circle opacity="0.6" cx="11.2" cy="11.2" r="2.8" fill="#1597F4" />
        <circle cx="2.8" cy="11.2" r="2.8" fill="#1597F4" />
        <circle opacity="0.5" cx="2.8" cy="2.8" r="2.8" fill="#1597F4" />
        <circle opacity="0.3" cx="10.8" cy="2.8" r="2.8" fill="#1597F4" />
      </g>
      <defs>
        <clipPath id="clip0_132_944">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvg132944
