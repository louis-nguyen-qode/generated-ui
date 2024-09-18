// id='162:1889'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg1621889: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "16",
    height: "3",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.3">
        <path
          d="M0 2C0 1.17157 0.671573 0.5 1.5 0.5H14.5C15.3284 0.5 16 1.17157 16 2C16 2.82843 15.3284 3.5 14.5 3.5H1.5C0.671573 3.5 0 2.82843 0 2Z"
          fill="white"
        />
      </g>
    </svg>
  )
}

export default QodeSvg1621889
