// id='2263:49609'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg226349609: React.FC<IconProps> = ({
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
        d="M10 10C11.0609 10 12.0783 9.57857 12.8284 8.82843C13.5786 8.07828 14 7.06087 14 6C14 4.93913 13.5786 3.92172 12.8284 3.17157C12.0783 2.42143 11.0609 2 10 2C8.93913 2 7.92172 2.42143 7.17157 3.17157C6.42143 3.92172 6 4.93913 6 6C6 7.06087 6.42143 8.07828 7.17157 8.82843C7.92172 9.57857 8.93913 10 10 10ZM8.57188 11.5C5.49375 11.5 3 13.9937 3 17.0719C3 17.5844 3.41563 18 3.92813 18H16.0719C16.5844 18 17 17.5844 17 17.0719C17 13.9937 14.5063 11.5 11.4281 11.5H8.57188Z"
        fill="#464646"
      />
    </svg>
  )
}

export default QodeSvg226349609
