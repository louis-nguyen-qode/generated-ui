// id='234:5394'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345394: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "8",
    height: "8",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.75 0.5C2.81719 0.5 1.25 2.06719 1.25 4C1.25 5.93281 2.81719 7.5 4.75 7.5C6.68281 7.5 8.25 5.93281 8.25 4C8.25 2.06719 6.68281 0.5 4.75 0.5ZM6.26172 2.85703L4.61641 5.13828C4.51719 5.27656 4.31172 5.27656 4.2125 5.13828L3.23828 3.78828C3.20859 3.74688 3.23828 3.68906 3.28906 3.68906H3.65547C3.73516 3.68906 3.81094 3.72734 3.85781 3.79297L4.41406 4.56484L5.64219 2.86172C5.68906 2.79688 5.76406 2.75781 5.84453 2.75781H6.21094C6.26172 2.75781 6.29141 2.81563 6.26172 2.85703Z"
        fill="#52C41A"
      />
    </svg>
  )
}

export default QodeSvg2345394
