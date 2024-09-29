// id='40:9761'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg409761: React.FC<IconProps> = ({
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
        d="M9.29374 13.7062C9.68437 14.0969 10.3187 14.0969 10.7094 13.7062L15.7094 8.70624C16.1 8.31562 16.1 7.68124 15.7094 7.29062C15.3187 6.89999 14.6844 6.89999 14.2937 7.29062L9.99999 11.5844L5.70624 7.29374C5.31562 6.90312 4.68124 6.90312 4.29062 7.29374C3.89999 7.68437 3.89999 8.31874 4.29062 8.70937L9.29062 13.7094L9.29374 13.7062Z"
        fill="black"
        fillOpacity="0.88"
      />
    </svg>
  )
}

export default QodeSvg409761
