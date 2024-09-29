// id='1259:41130'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg125941130: React.FC<IconProps> = ({
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
        d="M1.19995 7.1998C1.19995 5.87605 2.2762 4.7998 3.59995 4.7998H13.2C14.5237 4.7998 15.6 5.87605 15.6 7.1998V16.7998C15.6 18.1236 14.5237 19.1998 13.2 19.1998H3.59995C2.2762 19.1998 1.19995 18.1236 1.19995 16.7998V7.1998ZM22.1662 6.1423C22.5562 6.3523 22.8 6.7573 22.8 7.1998V16.7998C22.8 17.2423 22.5562 17.6473 22.1662 17.8573C21.7762 18.0673 21.3037 18.0448 20.9325 17.7973L17.3325 15.3973L16.8 15.0411V14.3998V9.5998V8.95855L17.3325 8.6023L20.9325 6.2023C21.3 5.95855 21.7725 5.9323 22.1662 6.1423Z"
        fill="white"
      />
    </svg>
  )
}

export default QodeSvg125941130
