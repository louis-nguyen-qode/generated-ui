// id='16:5847'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg165847: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "19.200000762939453",
    height: "19.053749084472656",
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
        d="M9.19375 0.61375C9.715 0.42625 10.285 0.42625 10.81 0.61375L18.01 3.18625C18.9625 3.5275 19.6 4.43125 19.6 5.4475V14.5525C19.6 15.565 18.9625 16.4725 18.0063 16.8138L10.8063 19.3862C10.285 19.5737 9.715 19.5737 9.19 19.3862L1.99 16.8138C1.0375 16.4725 0.4 15.5687 0.4 14.5525V5.4475C0.4 4.435 1.0375 3.5275 1.99375 3.18625L9.19375 0.61375ZM10 2.875L3.48625 5.2L10 7.525L16.5138 5.2L10 2.875ZM11.2 16.6975L17.2 14.5563V7.50625L11.2 9.6475V16.6975Z"
        fill="black"
        fillOpacity="0.88"
      />
    </svg>
  )
}

export default QodeSvg165847
