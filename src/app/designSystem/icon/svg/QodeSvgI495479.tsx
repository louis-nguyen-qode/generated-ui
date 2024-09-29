// id='I4:95;4:79'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI495479: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.2002 7.1998C1.2002 5.87605 2.27645 4.7998 3.6002 4.7998H13.2002C14.5239 4.7998 15.6002 5.87605 15.6002 7.1998V16.7998C15.6002 18.1236 14.5239 19.1998 13.2002 19.1998H3.6002C2.27645 19.1998 1.2002 18.1236 1.2002 16.7998V7.1998ZM22.1664 6.1423C22.5564 6.3523 22.8002 6.7573 22.8002 7.1998V16.7998C22.8002 17.2423 22.5564 17.6473 22.1664 17.8573C21.7764 18.0673 21.3039 18.0448 20.9327 17.7973L17.3327 15.3973L16.8002 15.0411V14.3998V9.5998V8.95855L17.3327 8.6023L20.9327 6.2023C21.3002 5.95855 21.7727 5.9323 22.1664 6.1423Z"
        fill="#565656"
      />
    </svg>
  )
}

export default QodeSvgI495479
