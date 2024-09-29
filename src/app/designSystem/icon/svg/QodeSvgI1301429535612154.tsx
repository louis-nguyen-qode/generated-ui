// id='I1301:42953;5612:154'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI1301429535612154: React.FC<IconProps> = ({
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
      <g clip-path="url(#clip0_2297_59795)">
        <path
          d="M0.833344 9.16683C5.43572 9.16683 9.16668 5.43587 9.16668 0.833496H10.8333C10.8333 5.43587 14.5643 9.16683 19.1667 9.16683V10.8335C14.5643 10.8335 10.8333 14.5645 10.8333 19.1668H9.16668C9.16668 14.5645 5.43572 10.8335 0.833344 10.8335V9.16683Z"
          fill="#2A2A2A"
        />
      </g>
      <defs>
        <clipPath id="clip0_2297_59795">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvgI1301429535612154
