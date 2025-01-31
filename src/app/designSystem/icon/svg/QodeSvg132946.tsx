// id='132:946'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg132946: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "20",
    height: "20",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_132_946)">
        <circle opacity="0.6" cx="16.5" cy="16" r="4" fill="#1597F4" />
        <circle cx="4.5" cy="16" r="4" fill="#1597F4" />
        <circle opacity="0.5" cx="4.5" cy="4" r="4" fill="#1597F4" />
        <circle opacity="0.3" cx="15.9286" cy="4" r="4" fill="#1597F4" />
      </g>
      <defs>
        <clipPath id="clip0_132_946">
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

export default QodeSvg132946
