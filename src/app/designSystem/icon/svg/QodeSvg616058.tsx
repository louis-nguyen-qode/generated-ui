// id='6160:58'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg616058: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "32",
    height: "32",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.3878 14.0702L29.5888 17.1133L26.0673 20.8309L30 24.5694L26.9622 27.7764L19.8483 21.0137L20.1631 20.6811L26.3878 14.0702ZM22.3801 25.069C20.2149 27.0835 17.3154 28.3158 14.131 28.3158C7.43563 28.3158 2 22.8681 2 16.1579C2 9.44772 7.43563 4 14.131 4C19.7375 4 24.4609 7.82028 25.8486 13.0027C25.7297 13.0632 21.8529 17.12 21.8529 17.12C21.8917 16.8048 21.9118 16.4836 21.9118 16.1579C21.9118 11.854 18.4253 8.35989 14.131 8.35989C9.83668 8.35989 6.35022 11.854 6.35022 16.1579C6.35022 20.4618 9.83668 23.9559 14.131 23.9559C16.0733 23.9559 17.8504 23.2409 19.2143 22.0598L22.3801 25.069Z"
        fill="black"
      />
    </svg>
  )
}

export default QodeSvg616058
