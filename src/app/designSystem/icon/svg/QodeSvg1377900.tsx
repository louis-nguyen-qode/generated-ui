// id='137:7900'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg1377900: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "12",
    height: "12",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_137_7900)">
        <path
          d="M8.46418 5.5708H3.53561C3.47668 5.5708 3.42847 5.61902 3.42847 5.67794V6.3208C3.42847 6.37973 3.47668 6.42794 3.53561 6.42794H8.46418C8.52311 6.42794 8.57133 6.37973 8.57133 6.3208V5.67794C8.57133 5.61902 8.52311 5.5708 8.46418 5.5708Z"
          fill="black"
        />
        <path
          d="M6 0C2.68661 0 0 2.68661 0 6C0 9.31339 2.68661 12 6 12C9.31339 12 12 9.31339 12 6C12 2.68661 9.31339 0 6 0ZM6 10.9821C3.24911 10.9821 1.01786 8.75089 1.01786 6C1.01786 3.24911 3.24911 1.01786 6 1.01786C8.75089 1.01786 10.9821 3.24911 10.9821 6C10.9821 8.75089 8.75089 10.9821 6 10.9821Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_137_7900">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvg1377900
