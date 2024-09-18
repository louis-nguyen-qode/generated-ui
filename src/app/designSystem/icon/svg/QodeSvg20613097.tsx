// id='206:13097'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg20613097: React.FC<IconProps> = ({
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
        d="M9.29365 13.7062C9.68428 14.0969 10.3187 14.0969 10.7093 13.7062L15.7093 8.70624C16.0999 8.31562 16.0999 7.68124 15.7093 7.29062C15.3187 6.89999 14.6843 6.89999 14.2937 7.29062L9.9999 11.5844L5.70615 7.29374C5.31553 6.90312 4.68115 6.90312 4.29053 7.29374C3.8999 7.68437 3.8999 8.31874 4.29053 8.70937L9.29053 13.7094L9.29365 13.7062Z"
        fill="black"
        fillOpacity="0.88"
      />
    </svg>
  )
}

export default QodeSvg20613097
