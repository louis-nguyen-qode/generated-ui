// id='1331:41641'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg133141641: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "16.799999237060547",
    height: "19.200000762939453",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 5.8V7.6H12V5.8C12 4.1425 10.6575 2.8 9 2.8C7.3425 2.8 6 4.1425 6 5.8ZM3.6 7.6V5.8C3.6 2.81875 6.01875 0.4 9 0.4C11.9812 0.4 14.4 2.81875 14.4 5.8V7.6H15C16.3237 7.6 17.4 8.67625 17.4 10V17.2C17.4 18.5238 16.3237 19.6 15 19.6H3C1.67625 19.6 0.6 18.5238 0.6 17.2V10C0.6 8.67625 1.67625 7.6 3 7.6H3.6Z"
        fill="#464646"
      />
    </svg>
  )
}

export default QodeSvg133141641
