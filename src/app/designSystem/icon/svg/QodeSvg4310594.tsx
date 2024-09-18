// id='43:10594'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg4310594: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "15.600000381469727",
    height: "15.600000381469727",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.2 1.4C9.2 0.73625 8.66375 0.2 8 0.2C7.33625 0.2 6.8 0.73625 6.8 1.4V6.8H1.4C0.73625 6.8 0.2 7.33625 0.2 8C0.2 8.66375 0.73625 9.2 1.4 9.2H6.8V14.6C6.8 15.2638 7.33625 15.8 8 15.8C8.66375 15.8 9.2 15.2638 9.2 14.6V9.2H14.6C15.2638 9.2 15.8 8.66375 15.8 8C15.8 7.33625 15.2638 6.8 14.6 6.8H9.2V1.4Z"
        fill="black"
        fillOpacity="0.88"
      />
    </svg>
  )
}

export default QodeSvg4310594
