// id='204:9534'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2049534: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "120",
    height: "120",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_204_9534)">
        <mask id="path-1-inside-1_204_9534" fill="white">
          <path d="M120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60C0 26.8629 26.8629 0 60 0C93.1371 0 120 26.8629 120 60ZM6 60C6 89.8234 30.1766 114 60 114C89.8234 114 114 89.8234 114 60C114 30.1766 89.8234 6 60 6C30.1766 6 6 30.1766 6 60Z" />
        </mask>
        <path
          d="M120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60C0 26.8629 26.8629 0 60 0C93.1371 0 120 26.8629 120 60ZM6 60C6 89.8234 30.1766 114 60 114C89.8234 114 114 89.8234 114 60C114 30.1766 89.8234 6 60 6C30.1766 6 6 30.1766 6 60Z"
          stroke="black"
          stroke-opacity="0.06"
          stroke-width="12"
          mask="url(#path-1-inside-1_204_9534)"
        />
        <path
          d="M120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60C0 26.8629 26.8629 0 60 0C93.1371 0 120 26.8629 120 60ZM6 60C6 89.8234 30.1766 114 60 114C89.8234 114 114 89.8234 114 60C114 30.1766 89.8234 6 60 6C30.1766 6 6 30.1766 6 60Z"
          fill="#11A620"
        />
      </g>
      <defs>
        <clipPath id="clip0_204_9534">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvg2049534
