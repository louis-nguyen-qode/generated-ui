// id='234:4212'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2344212: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "80",
    height: "104",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 81 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_234_4212)">
        <path d="M80.25 0H0.25V104H80.25V0Z" fill="#F5F5F5" />
        <path
          d="M73.25 29H7.25C5.04086 29 3.25 30.7909 3.25 33V47C3.25 49.2091 5.04086 51 7.25 51H73.25C75.4591 51 77.25 49.2091 77.25 47V33C77.25 30.7909 75.4591 29 73.25 29Z"
          fill="#BAE0FF"
        />
        <g style={{ mixBlendMode: "multiply" }}>
          <path d="M44.25 12H10.25V20H44.25V12Z" fill="#EBEBEB" />
        </g>
        <g style={{ mixBlendMode: "multiply" }}>
          <path d="M44.25 60H10.25V68H44.25V60Z" fill="#EBEBEB" />
        </g>
        <g style={{ mixBlendMode: "multiply" }}>
          <path d="M44.25 84H10.25V92H44.25V84Z" fill="#EBEBEB" />
        </g>
        <g style={{ mixBlendMode: "multiply" }}>
          <path d="M44.25 36H10.25V44H44.25V36Z" fill="#EBEBEB" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_234_4212">
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

export default QodeSvg2344212
