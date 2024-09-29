// id='I715:35867;221:18420;219:23826'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI715358672211842021923826: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.509766" width={width} height={height} rx="2" fill="#464646" />
      <circle cx="12" cy="12.5098" r="8" stroke="white" />
      <circle cx="12" cy="12.5098" r="5.5" stroke="white" />
      <circle cx="12" cy="12.5098" r="3" fill="white" />
    </svg>
  )
}

export default QodeSvgI715358672211842021923826
