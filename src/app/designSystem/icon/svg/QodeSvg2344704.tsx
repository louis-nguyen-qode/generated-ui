// id='234:4704'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2344704: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "12",
    height: "12",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5006 0H2.50064C1.39607 0 0.500641 0.89543 0.500641 2V10C0.500641 11.1046 1.39607 12 2.50064 12H10.5006C11.6052 12 12.5006 11.1046 12.5006 10V2C12.5006 0.89543 11.6052 0 10.5006 0Z"
        fill="#1677FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.48267 5.80313L4.9608 3.05235C4.91939 3.02032 4.86002 3.04922 4.86002 3.10157V3.70547C4.86002 3.74375 4.87798 3.78047 4.90767 3.80391L7.72017 6L4.90767 8.1961C4.8772 8.21954 4.86002 8.25625 4.86002 8.29454V8.89844C4.86002 8.95079 4.92017 8.97969 4.9608 8.94766L8.48267 6.19688C8.6108 6.09688 8.6108 5.90313 8.48267 5.80313Z"
        fill="white"
      />
    </svg>
  )
}

export default QodeSvg2344704
