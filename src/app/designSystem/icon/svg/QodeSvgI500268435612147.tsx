// id='I500:26843;5612:147'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI500268435612147: React.FC<IconProps> = ({
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
      <g clip-path="url(#clip0_2297_25889)">
        <path
          d="M0.833008 9.16659C5.43538 9.16659 9.16634 5.43563 9.16634 0.833252H10.833C10.833 5.43563 14.564 9.16659 19.1663 9.16659V10.8333C14.564 10.8333 10.833 14.5643 10.833 19.1666H9.16634C9.16634 14.5643 5.43538 10.8333 0.833008 10.8333V9.16659Z"
          fill="#2A2A2A"
        />
      </g>
      <defs>
        <clipPath id="clip0_2297_25889">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvgI500268435612147
