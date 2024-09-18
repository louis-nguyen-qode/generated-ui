// id='I5820:16938;146:835'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvgI582016938146835: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4.5"
        y="4.5"
        width={width}
        height={height}
        rx="3.5"
        fill="white"
      />
      <rect
        x="4.5"
        y="4.5"
        width={width}
        height={height}
        rx="3.5"
        stroke="#158DE2"
      />
      <rect
        x="2"
        y="2"
        width={width}
        height={height}
        rx="6"
        stroke="#82C8FA"
        stroke-width="4"
      />
    </svg>
  )
}

export default QodeSvgI582016938146835
