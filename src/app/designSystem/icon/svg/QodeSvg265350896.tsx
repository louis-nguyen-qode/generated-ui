// id='2653:50896'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg265350896: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "28.000001907348633",
    height: "30",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2653_50896"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <path
          d="M0 0H28V16C28 23.732 21.732 30 14 30C6.26801 30 0 23.732 0 16V0Z"
          fill="#F5F7F8"
        />
      </mask>
      <g mask="url(#mask0_2653_50896)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 0H0V7H7V14H0V21H7V28H0V35H7V28H14V35H21V28H28V21H21V14H28V7L21 7V0H14V7L7 7V0ZM14 14H21V7L14 7V14ZM14 21H7V14H14V21ZM14 21H21V28H14V21Z"
          fill="#DD2033"
        />
      </g>
    </svg>
  )
}

export default QodeSvg265350896
