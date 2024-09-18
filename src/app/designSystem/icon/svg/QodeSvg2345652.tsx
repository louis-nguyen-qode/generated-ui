// id='234:5652'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345652: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "196",
    height: "118",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 197 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M190.284 0H7.21592C3.64486 0 0.749939 2.91478 0.749939 6.51034V111.49C0.749939 115.085 3.64486 118 7.21592 118H190.284C193.855 118 196.75 115.085 196.75 111.49V6.51034C196.75 2.91478 193.855 0 190.284 0Z"
        fill="white"
        stroke="#F0F0F0"
        stroke-width="0.8"
      />
    </svg>
  )
}

export default QodeSvg2345652
