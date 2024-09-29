// id='26:7007'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg267007: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "16",
    height: "16",
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
        d="M8 8.8C8.95478 8.8 9.87045 8.42072 10.5456 7.74558C11.2207 7.07045 11.6 6.15478 11.6 5.2C11.6 4.24522 11.2207 3.32955 10.5456 2.65442C9.87045 1.97928 8.95478 1.6 8 1.6C7.04522 1.6 6.12955 1.97928 5.45442 2.65442C4.77928 3.32955 4.4 4.24522 4.4 5.2C4.4 6.15478 4.77928 7.07045 5.45442 7.74558C6.12955 8.42072 7.04522 8.8 8 8.8ZM5.6325 9.6C3.405 9.6 1.6 11.405 1.6 13.6325C1.6 14.0575 1.945 14.4 2.3675 14.4H13.6325C14.0575 14.4 14.4 14.055 14.4 13.6325C14.4 11.405 12.595 9.6 10.3675 9.6H5.6325Z"
        fill="white"
      />
    </svg>
  )
}

export default QodeSvg267007
