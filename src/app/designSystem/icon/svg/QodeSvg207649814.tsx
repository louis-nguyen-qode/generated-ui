// id='2076:49814'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg207649814: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "8",
    height: "14",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.78885 5.57771C7.92771 5.85542 8 6.16165 8 6.47214V12C8 13.1046 7.10457 14 6 14H2C0.895431 14 0 13.1046 0 12L0 6.47214C0 6.16165 0.0722902 5.85542 0.211146 5.57771L2.55279 0.894427C2.82687 0.346263 3.38713 0 4 0C4.61287 0 5.17313 0.346263 5.44721 0.894427L7.78885 5.57771Z"
        fill="#3B7DF7"
      />
    </svg>
  )
}

export default QodeSvg207649814
