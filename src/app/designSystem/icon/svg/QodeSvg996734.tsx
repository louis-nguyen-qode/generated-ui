// id='99:6734'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg996734: React.FC<IconProps> = ({
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
        d="M8 4C8 3.44687 8.44688 3 9 3H15C15.5531 3 16 3.44687 16 4C16 4.55313 15.5531 5 15 5H13.1656L9 15H11C11.5531 15 12 15.4469 12 16C12 16.5531 11.5531 17 11 17H5C4.44687 17 4 16.5531 4 16C4 15.4469 4.44687 15 5 15H6.83437L11 5H9C8.44688 5 8 4.55313 8 4Z"
        fill="#6F6F6F"
      />
    </svg>
  )
}

export default QodeSvg996734
