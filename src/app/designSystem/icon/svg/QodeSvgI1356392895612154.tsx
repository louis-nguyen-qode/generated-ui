// id='I1356:39289;5612:154'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI1356392895612154: React.FC<IconProps> = ({
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
      <g clip-path="url(#clip0_2297_29112)">
        <path
          d="M0.833252 9.16634C5.43563 9.16634 9.16659 5.43538 9.16659 0.833008H10.8333C10.8333 5.43538 14.5643 9.16634 19.1666 9.16634V10.833C14.5643 10.833 10.8333 14.564 10.8333 19.1663H9.16659C9.16659 14.564 5.43563 10.833 0.833252 10.833V9.16634Z"
          fill="#2A2A2A"
        />
      </g>
      <defs>
        <clipPath id="clip0_2297_29112">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvgI1356392895612154
