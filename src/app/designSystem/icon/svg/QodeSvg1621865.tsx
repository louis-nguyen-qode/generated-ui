// id='162:1865'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg1621865: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "16",
    height: "3",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.3">
        <path
          d="M0 1.5C0 0.671573 0.671573 0 1.5 0H14.5C15.3284 0 16 0.671573 16 1.5C16 2.32843 15.3284 3 14.5 3H1.5C0.671573 3 0 2.32843 0 1.5Z"
          fill="white"
        />
      </g>
    </svg>
  )
}

export default QodeSvg1621865
