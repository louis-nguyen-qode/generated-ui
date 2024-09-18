// id='2653:50115'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg265350115: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "36",
    height: "36",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 37 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2653_50115"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <path
          d="M0.51416 36C0.514159 16.1178 16.6319 -7.04529e-07 36.5142 -1.57361e-06L36.5142 36L0.51416 36Z"
          fill="#002F6C"
        />
      </mask>
      <g mask="url(#mask0_2653_50115)">
        <path
          d="M13.0365 3.1339L10.9152 5.25522L40.4412 34.7812L42.5625 32.6599L13.0365 3.1339Z"
          fill="#F5F7F8"
        />
        <path
          d="M7.37965 8.79076L3.84412 12.3263L33.3701 41.8523L36.9056 38.3168L7.37965 8.79076Z"
          fill="#F5F7F8"
        />
        <path
          d="M7.37965 8.79076L10.9152 5.25522L40.4412 34.7812L36.9056 38.3168L7.37965 8.79076Z"
          fill="#DD2033"
        />
        <path
          d="M36.5142 12V17L17.5142 17L17.5142 36H12.5142V12H36.5142Z"
          fill="#F5F7F8"
        />
        <path
          d="M36.5142 -2V3L5.51416 3L5.51416 36H0.51416V-2H36.5142Z"
          fill="#F5F7F8"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.51416 36H12.5142L12.5142 12L36.5142 12V3H12.5142H3.51416L3.51416 12L3.51416 36Z"
          fill="#DD2033"
        />
      </g>
    </svg>
  )
}

export default QodeSvg265350115
