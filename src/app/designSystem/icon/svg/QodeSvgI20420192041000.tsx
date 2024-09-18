// id='I204:2019;204:1000'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI20420192041000: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "32.05719757080078",
    height: "10.807891845703125",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.7834 11.3909H0.128174V10.8705H24.5111L31.7576 0.583008L32.1854 0.881811L24.7834 11.3909Z"
        fill="#CC9B6E"
      />
    </svg>
  )
}

export default QodeSvgI20420192041000
