// id='2076:49815'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg207649815: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "8",
    height: "10",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 10H6C7.10457 10 8 9.10457 8 8V6.47214C8 6.16165 7.92771 5.85542 7.78885 5.57771L5.44721 0.894427C5.17313 0.346263 4.61287 0 4 0C3.38713 0 2.82687 0.346263 2.55279 0.894427L0.211146 5.57771C0.0722902 5.85542 0 6.16165 0 6.47214L0 8C0 9.10457 0.895431 10 2 10Z"
        fill="url(#paint0_linear_2076_49815)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2076_49815"
          x1="4"
          y1="0"
          x2="4"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C6DBFF" />
          <stop offset="1" stop-color="#73A5FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg207649815
