// id='234:5432'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345432: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "67.99999237060547",
    height: "8",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 69 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M67.176 0.5H1.17603C0.623741 0.5 0.176025 0.947715 0.176025 1.5V7.5C0.176025 8.05228 0.623741 8.5 1.17603 8.5H67.176C67.7283 8.5 68.176 8.05228 68.176 7.5V1.5C68.176 0.947715 67.7283 0.5 67.176 0.5Z"
        fill="black"
        fillOpacity="0.06"
      />
    </svg>
  )
}

export default QodeSvg2345432
