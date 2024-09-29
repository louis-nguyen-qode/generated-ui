// id='I2009:51001;4:95;4:79'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI200951001495479: React.FC<IconProps> = ({
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
        d="M1.19922 7.2C1.19922 5.87625 2.27547 4.8 3.59922 4.8H13.1992C14.523 4.8 15.5992 5.87625 15.5992 7.2V16.8C15.5992 18.1238 14.523 19.2 13.1992 19.2H3.59922C2.27547 19.2 1.19922 18.1238 1.19922 16.8V7.2ZM22.1655 6.1425C22.5555 6.3525 22.7992 6.7575 22.7992 7.2V16.8C22.7992 17.2425 22.5555 17.6475 22.1655 17.8575C21.7755 18.0675 21.303 18.045 20.9317 17.7975L17.3317 15.3975L16.7992 15.0413V14.4V9.6V8.95875L17.3317 8.6025L20.9317 6.2025C21.2992 5.95875 21.7717 5.9325 22.1655 6.1425Z"
        fill="#565656"
      />
    </svg>
  )
}

export default QodeSvgI200951001495479
