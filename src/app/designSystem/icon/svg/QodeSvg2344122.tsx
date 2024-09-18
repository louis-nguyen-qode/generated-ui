// id='234:4122'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2344122: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "155",
    height: "105",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 156 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_234_4122)">
        <path
          d="M0.25 8H21.25V105H2.25C1.14543 105 0.25 104.105 0.25 103V8Z"
          fill="#BAE0FF"
        />
        <path
          d="M0.75 13.5L0.75 3.5C0.75 2.39543 1.64543 1.5 2.75 1.5L152.75 1.5C153.855 1.5 154.75 2.39543 154.75 3.5V13.5L0.75 13.5Z"
          fill="#E6F4FF"
        />
        <path
          d="M152.75 1.5H2.75C1.64543 1.5 0.75 2.39543 0.75 3.5V102.5C0.75 103.605 1.64543 104.5 2.75 104.5H152.75C153.855 104.5 154.75 103.605 154.75 102.5V3.5C154.75 2.39543 153.855 1.5 152.75 1.5Z"
          stroke="#D9D9D9"
        />
        <path d="M145.25 35H31.25V95H145.25V35Z" fill="#F5F5F5" />
        <path d="M74.25 24H31.25V29H74.25V24Z" fill="#EBEBEB" />
      </g>
      <defs>
        <clipPath id="clip0_234_4122">
          <rect
            width={width}
            height={height}
            fill="white"
            transform="translate(0.25 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvg2344122
