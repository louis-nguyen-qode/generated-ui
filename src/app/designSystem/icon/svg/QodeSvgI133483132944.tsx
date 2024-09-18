// id='I133:483;132:944'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvgI133483132944: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "14",
    height: "14",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_6381_56554)">
        <circle opacity="0.6" cx="11.7" cy="11.2" r="2.8" fill="#1597F4" />
        <circle cx="3.3" cy="11.2" r="2.8" fill="#1597F4" />
        <circle opacity="0.5" cx="3.3" cy="2.8" r="2.8" fill="#1597F4" />
        <circle opacity="0.3" cx="11.3" cy="2.8" r="2.8" fill="#1597F4" />
      </g>
      <defs>
        <clipPath id="clip0_6381_56554">
          <rect
            width={width}
            height={height}
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvgI133483132944
