// id='204:1123'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2041123: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "12.819000244140625",
    height: "105.64900207519531",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.69501 1.00293L2.62701 47.3829C2.62701 47.3829 3.327 49.0139 2.394 50.1789C1.462 51.3449 4.958 50.8789 3.326 52.5089C1.696 54.1419 4.259 53.6749 3.326 56.0059C2.708 57.5519 2.295 77.9269 2.188 92.5189M1.357 104.121H14.176H1.357ZM2.47101 100.36C2.47701 103.879 2.39901 105.91 2.47101 106.652V100.36ZM2.178 94.0729C2.169 95.6719 2.162 96.6309 2.162 98.5779L2.178 94.0729Z"
        stroke="#648BD8"
        stroke-width="1.085"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default QodeSvg2041123
