// id='27:8074'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg278074: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "1",
    height: "72",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.25"
        y="0.25"
        width={width}
        height={height}
        stroke="#8DB911"
        stroke-width="0.5"
      />
    </svg>
  )
}

export default QodeSvg278074
