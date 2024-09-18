// id='3026:28612'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg302628612: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "64",
    height: "76.00000762939453",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1281 18.5927C13.1281 8.32266 21.5743 0 31.9968 0C42.4192 0 50.8717 8.32266 50.8717 18.5927C50.8717 28.8688 42.4192 37.1915 31.9968 37.1915C21.5743 37.1915 13.1281 28.8688 13.1281 18.5927ZM32.1344 76C44.5952 76 55.872 71.0843 64 63.1761V57.566C64 50.7822 58.272 45.2766 51.2 45.2766H12.8C5.728 45.2766 0 50.7822 0 57.566V62.8934C8.1472 70.9614 19.5328 76 32.1344 76Z"
        fill="white"
      />
    </svg>
  )
}

export default QodeSvg302628612
