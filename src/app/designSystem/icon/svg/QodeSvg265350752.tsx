// id='2653:50752'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg265350752: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "36",
    height: "36",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2653_50752"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <path
          d="M0 36C-8.69081e-07 16.1178 16.1177 -7.04529e-07 36 -1.57361e-06L36 36L0 36Z"
          fill="#002F6C"
        />
      </mask>
      <g mask="url(#mask0_2653_50752)">
        <rect x="-0.000244141" width={width} height={height} fill="#004692" />
        <path
          d="M12.5223 3.1339L10.401 5.25522L39.927 34.7812L42.0483 32.6599L12.5223 3.1339Z"
          fill="#F5F7F8"
        />
        <path
          d="M6.86549 8.79076L3.32996 12.3263L32.856 41.8523L36.3915 38.3168L6.86549 8.79076Z"
          fill="#F5F7F8"
        />
        <path
          d="M6.86549 8.79076L10.401 5.25522L39.927 34.7812L36.3915 38.3168L6.86549 8.79076Z"
          fill="#DD2033"
        />
        <path d="M36 12V17L17 17L17 36H12V12H36Z" fill="#F5F7F8" />
        <path d="M36 -2V3L5 3L5 36H0V-2H36Z" fill="#F5F7F8" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 36H12L12 12L36 12V3H12H3L3 12L3 36Z"
          fill="#DD2033"
        />
      </g>
    </svg>
  )
}

export default QodeSvg265350752
