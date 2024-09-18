// id='2653:51303'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg265351303: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "21",
    height: "23",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2653_51303"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <path
          d="M0 0H21V8.74322C21 14.8265 17.2916 20.2951 11.6401 22.546L10.5 23L9.35995 22.546C3.70843 20.2951 0 14.8265 0 8.74322V0Z"
          fill="#86C5FA"
        />
      </mask>
      <g mask="url(#mask0_2653_51303)">
        <path d="M10.5 0L21 23H0L10.5 0Z" fill="#FBD381" />
        <path d="M10.5 5.17676L21 28.1768H0L10.5 5.17676Z" fill="#008259" />
      </g>
    </svg>
  )
}

export default QodeSvg265351303
