// id='206:13097'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
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
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.29365 14.216C9.68428 14.6066 10.3187 14.6066 10.7093 14.216L15.7093 9.21601C16.0999 8.82538 16.0999 8.19101 15.7093 7.80038C15.3187 7.40976 14.6843 7.40976 14.2937 7.80038L9.9999 12.0941L5.70615 7.80351C5.31553 7.41288 4.68115 7.41288 4.29053 7.80351C3.8999 8.19413 3.8999 8.82851 4.29053 9.21913L9.29053 14.2191L9.29365 14.216Z"
        fill="black"
        fillOpacity="0.88"
      />
    </svg>
  )
}

export default QodeSvg20613097
