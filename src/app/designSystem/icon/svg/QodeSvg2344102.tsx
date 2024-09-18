// id='234:4102'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2344102: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "156",
    height: "104",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 157 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_234_4102)">
        <path d="M21.4166 0H11.0833V104H21.4166V0Z" fill="#F5F5F5" />
        <path d="M62.75 0H52.4167V104H62.75V0Z" fill="#F5F5F5" />
        <path d="M104.083 0H93.75V104H104.083V0Z" fill="#F5F5F5" />
        <path d="M42.0833 0H31.75V104H42.0833V0Z" fill="#F5F5F5" />
        <path d="M83.4166 0H73.0833V104H83.4166V0Z" fill="#F5F5F5" />
        <path d="M124.75 0H114.417V104H124.75V0Z" fill="#F5F5F5" />
        <path d="M145.417 0H135.083V104H145.417V0Z" fill="#F5F5F5" />
        <path
          d="M153.25 0.5H3.25C2.14543 0.5 1.25 1.39543 1.25 2.5V101.5C1.25 102.605 2.14543 103.5 3.25 103.5H153.25C154.355 103.5 155.25 102.605 155.25 101.5V2.5C155.25 1.39543 154.355 0.5 153.25 0.5Z"
          stroke="#D9D9D9"
        />
        <g style={{ mixBlendMode: "multiply" }}>
          <path d="M104.083 16H11.0833V88H104.083V16Z" fill="#E6F4FF" />
        </g>
        <g style={{ mixBlendMode: "multiply" }}>
          <path d="M145.417 16H114.417V88H145.417V16Z" fill="#E6F4FF" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_234_4102">
          <rect
            width={width}
            height={height}
            fill="white"
            transform="translate(0.25)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvg2344102
