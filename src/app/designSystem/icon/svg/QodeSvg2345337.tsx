// id='234:5337'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2345337: React.FC<IconProps> = ({
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
        d="M7.10714 0.00012207H1.39286C0.761675 0.00012207 0.25 0.511797 0.25 1.14298V6.85726C0.25 7.48845 0.761675 8.00012 1.39286 8.00012H7.10714C7.73833 8.00012 8.25 7.48845 8.25 6.85726V1.14298C8.25 0.511797 7.73833 0.00012207 7.10714 0.00012207Z"
        fill="#1677FF"
      />
      <path
        d="M6.48216 2.20325H6.0921C6.03741 2.20325 5.98551 2.22836 5.95203 2.27133L3.65125 5.18595L2.54801 3.78807C2.51397 3.7451 2.46263 3.71999 2.40794 3.71999H2.01788C1.98049 3.71999 1.95984 3.76296 1.98272 3.79197L3.51118 5.72836C3.58261 5.81876 3.71989 5.81876 3.79187 5.72836L6.51732 2.27468C6.5402 2.24622 6.51955 2.20325 6.48216 2.20325Z"
        fill="white"
        stroke="white"
        stroke-width="0.5"
      />
    </svg>
  )
}

export default QodeSvg2345337
