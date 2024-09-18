// id='2653:51520'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg265351520: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "33",
    height: "36",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2653_51520"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <path
          d="M0.800049 0H33.8V29.4545L17.3 36L0.800049 29.4545V0Z"
          fill="#DD2033"
        />
      </mask>
      <g mask="url(#mask0_2653_51520)">
        <path
          d="M16 3H19V6L23 6V9H19V12H26V15H19V21H16V15H9V12H16V9H12L12 6L16 6V3Z"
          fill="#F5F7F8"
        />
        <path
          d="M22.9332 44.4844C21.4334 46.6719 19.4609 48 17.3 48C15.1392 48 13.1667 46.6719 11.6669 44.4844C10.4073 46.6607 8.69124 48 6.80005 48C2.93406 48 -0.199951 42.4036 -0.199951 35.5C-0.199951 28.5964 2.93406 23 6.80005 23C8.25174 23 9.60022 23.7891 10.7183 25.1402C12.2771 22.0026 14.6466 20 17.3 20C19.9535 20 22.323 22.0026 23.8818 25.1402C24.9999 23.7891 26.3484 23 27.8 23C31.666 23 34.8 28.5964 34.8 35.5C34.8 42.4036 31.666 48 27.8 48C25.9089 48 24.1928 46.6607 22.9332 44.4844Z"
          fill="#005EB8"
        />
      </g>
    </svg>
  )
}

export default QodeSvg265351520
