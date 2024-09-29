// id='1828:54012'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg182854012: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "20",
    height: "20",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.29365 13.7062C9.68428 14.0968 10.3187 14.0968 10.7093 13.7062L15.7093 8.70615C16.0999 8.31553 16.0999 7.68115 15.7093 7.29053C15.3187 6.8999 14.6843 6.8999 14.2937 7.29053L9.9999 11.5843L5.70615 7.29365C5.31553 6.90303 4.68115 6.90303 4.29053 7.29365C3.8999 7.68428 3.8999 8.31865 4.29053 8.70928L9.29053 13.7093L9.29365 13.7062Z"
        fill="black"
        fillOpacity="0.88"
      />
    </svg>
  )
}

export default QodeSvg182854012
