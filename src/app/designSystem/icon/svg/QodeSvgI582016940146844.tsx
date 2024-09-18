// id='I5820:16940;146:844'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI582016940146844: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width={width}
        height={height}
        rx="3.5"
        fill="white"
      />
      <rect
        x="0.5"
        y="0.5"
        width={width}
        height={height}
        rx="3.5"
        stroke="#D5D5D5"
      />
      <path
        d="M6.5 10C6.5 8.067 8.067 6.5 10 6.5H14C15.933 6.5 17.5 8.067 17.5 10V14C17.5 15.933 15.933 17.5 14 17.5H10C8.067 17.5 6.5 15.933 6.5 14V10Z"
        fill="#1597F4"
        stroke="#158DE2"
      />
    </svg>
  )
}

export default QodeSvgI582016940146844
