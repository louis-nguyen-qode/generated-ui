// id='35:11359'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg3511359: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "17.250198364257812",
    height: "6.375",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4633 5.97344L13.6195 1.09844C13.5494 1.00944 13.4601 0.937482 13.3582 0.887959C13.2563 0.838436 13.1445 0.812637 13.0312 0.8125H11.5125C11.3555 0.8125 11.2688 0.992969 11.3648 1.11719L14.7469 5.40625H0.5625C0.459375 5.40625 0.375 5.49062 0.375 5.59375V7C0.375 7.10313 0.459375 7.1875 0.5625 7.1875H16.8727C17.5008 7.1875 17.85 6.46563 17.4633 5.97344Z"
        fill="black"
        fillOpacity="0.45"
      />
    </svg>
  )
}

export default QodeSvg3511359
