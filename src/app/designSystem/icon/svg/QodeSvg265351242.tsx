// id='2653:51242'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg265351242: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "48.000003814697266",
    height: "48.000003814697266",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2653_51242"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <circle cx="24.6001" cy="24" r="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2653_51242)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53 45L-4 45L-4 48L53 48L53 45ZM54.6001 39L-2.3999 39L-2.3999 42L54.6001 42L54.6001 39Z"
          fill="#F5F7F8"
        />
      </g>
    </svg>
  )
}

export default QodeSvg265351242
