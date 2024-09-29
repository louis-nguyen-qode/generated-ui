// id='40:10275'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg4010275: React.FC<IconProps> = ({
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
        d="M9.29377 13.7062C9.6844 14.0969 10.3188 14.0969 10.7094 13.7062L15.7094 8.70624C16.1 8.31562 16.1 7.68124 15.7094 7.29062C15.3188 6.89999 14.6844 6.89999 14.2938 7.29062L10 11.5844L5.70627 7.29374C5.31565 6.90312 4.68127 6.90312 4.29065 7.29374C3.90002 7.68437 3.90002 8.31874 4.29065 8.70937L9.29065 13.7094L9.29377 13.7062Z"
        fill="black"
        fillOpacity="0.88"
      />
    </svg>
  )
}

export default QodeSvg4010275
