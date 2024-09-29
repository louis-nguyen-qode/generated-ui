// id='1113:37542'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg111337542: React.FC<IconProps> = ({
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
        d="M7.75 3.5H12.25C12.3875 3.5 12.5 3.6125 12.5 3.75V5H7.5V3.75C7.5 3.6125 7.6125 3.5 7.75 3.5ZM6 3.75V5H4C2.89688 5 2 5.89687 2 7V10H8H12H18V7C18 5.89687 17.1031 5 16 5H14V3.75C14 2.78438 13.2156 2 12.25 2H7.75C6.78438 2 6 2.78438 6 3.75ZM18 11H12V12C12 12.5531 11.5531 13 11 13H9C8.44688 13 8 12.5531 8 12V11H2V15C2 16.1031 2.89688 17 4 17H16C17.1031 17 18 16.1031 18 15V11Z"
        fill="#464646"
      />
    </svg>
  )
}

export default QodeSvg111337542
