// id='2653:50900'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg265350900: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "10",
    height: "10",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 3L5 0L10 3V10H0V3Z" fill="#004692" />
    </svg>
  )
}

export default QodeSvg265350900
