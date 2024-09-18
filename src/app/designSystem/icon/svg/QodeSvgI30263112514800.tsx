// id='I3026:31125;14:800'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI30263112514800: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "8",
    height: "8",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 8C1.79086 8 -2.7141e-07 6.20914 -1.74846e-07 4C-7.8281e-08 1.79086 1.79086 -2.7141e-07 4 -1.74846e-07C6.20914 -7.8281e-08 8 1.79086 8 4C8 6.20914 6.20914 8 4 8Z"
        fill="white"
      />
      <path
        d="M4 6.5C2.61929 6.5 1.5 5.38071 1.5 4C1.5 2.61929 2.61929 1.5 4 1.5C5.38071 1.5 6.5 2.61929 6.5 4C6.5 5.38071 5.38071 6.5 4 6.5Z"
        stroke="black"
        stroke-opacity="0.15"
        stroke-width="3"
      />
    </svg>
  )
}

export default QodeSvgI30263112514800
