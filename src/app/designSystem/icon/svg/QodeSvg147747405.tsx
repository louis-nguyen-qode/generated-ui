// id='1477:47405'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg147747405: React.FC<IconProps> = ({
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
        d="M1 6C1 4.89688 1.89688 4 3 4H11C12.1031 4 13 4.89688 13 6V14C13 15.1031 12.1031 16 11 16H3C1.89688 16 1 15.1031 1 14V6ZM18.4719 5.11875C18.7969 5.29375 19 5.63125 19 6V14C19 14.3687 18.7969 14.7063 18.4719 14.8813C18.1469 15.0563 17.7531 15.0375 17.4438 14.8313L14.4438 12.8313L14 12.5344V12V8V7.46562L14.4438 7.16875L17.4438 5.16875C17.75 4.96563 18.1437 4.94375 18.4719 5.11875Z"
        fill="#565656"
      />
    </svg>
  )
}

export default QodeSvg147747405
