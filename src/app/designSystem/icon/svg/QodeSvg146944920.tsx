// id='1469:44920'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg146944920: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "18.299999237060547",
    height: "18.600000381469727",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.15 10.2175C19.15 15.5238 15.5162 19.3 10.15 19.3C5.005 19.3 0.85 15.145 0.85 10C0.85 4.855 5.005 0.7 10.15 0.7C12.655 0.7 14.7625 1.61875 16.3862 3.13375L13.855 5.5675C10.5437 2.3725 4.38625 4.7725 4.38625 10C4.38625 13.2438 6.9775 15.8725 10.15 15.8725C13.8325 15.8725 15.2125 13.2325 15.43 11.8638H10.15V8.665H19.0037C19.09 9.14125 19.15 9.59875 19.15 10.2175Z"
        fill="#464646"
      />
    </svg>
  )
}

export default QodeSvg146944920
