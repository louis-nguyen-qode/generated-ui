// id='2653:50901'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg265350901: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "9",
    height: "10",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 3L4.5 0L9 3V10H0V3Z" fill="#0091DA" />
    </svg>
  )
}

export default QodeSvg265350901
