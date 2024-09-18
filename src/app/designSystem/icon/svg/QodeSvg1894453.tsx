// id='189:4453'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg1894453: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "18",
    height: "18",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 6C0 2.68629 2.68629 0 6 0H12C15.3137 0 18 2.68629 18 6V12C18 15.3137 15.3137 18 12 18H6C2.68629 18 0 15.3137 0 12V6Z"
        fill="white"
      />
      <path
        d="M0.5 6C0.5 2.96243 2.96243 0.5 6 0.5H12C15.0376 0.5 17.5 2.96243 17.5 6V12C17.5 15.0376 15.0376 17.5 12 17.5H6C2.96243 17.5 0.5 15.0376 0.5 12V6Z"
        stroke="black"
        stroke-opacity="0.06"
      />
      <line
        x1="15.4541"
        y1="2.25309"
        x2="2.45414"
        y2="15.2531"
        stroke="#DC3812"
      />
    </svg>
  )
}

export default QodeSvg1894453
