// id='234:5061'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345061: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "133",
    height: "96",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 134 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_234_5061)">
        <path
          d="M132.25 1H1.25V95H132.25V1Z"
          stroke="black"
          stroke-opacity="0.15"
        />
        <path
          d="M1.25 95L63.9925 43.1147L83.0976 66.0194L132.25 16V94.9518L1.25 95Z"
          fill="black"
          fillOpacity="0.15"
        />
        <path
          d="M29.25 40C34.7728 40 39.25 35.299 39.25 29.5C39.25 23.701 34.7728 19 29.25 19C23.7272 19 19.25 23.701 19.25 29.5C19.25 35.299 23.7272 40 29.25 40Z"
          fill="black"
          fillOpacity="0.15"
        />
      </g>
      <defs>
        <clipPath id="clip0_234_5061">
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

export default QodeSvg2345061
