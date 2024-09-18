// id='166:9192'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg1669192: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "82.00000762939453",
    height: "164",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 164 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="163.5"
        y1="41.5"
        x2="0.5"
        y2="41.5"
        stroke="#6F6F6F"
        stroke-linecap="round"
        stroke-dasharray="1 2"
      />
      <line
        x1="163.5"
        y1="0.5"
        x2="0.5"
        y2="0.499985"
        stroke="#E2E2E2"
        stroke-linecap="round"
        stroke-dasharray="1 2"
      />
      <line
        x1="163.5"
        y1="82.5"
        x2="0.5"
        y2="82.5"
        stroke="#E2E2E2"
        stroke-linecap="round"
        stroke-dasharray="1 2"
      />
    </svg>
  )
}

export default QodeSvg1669192
