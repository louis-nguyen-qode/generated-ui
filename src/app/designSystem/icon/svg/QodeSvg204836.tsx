// id='204:836'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg204836: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "72.4118423461914",
    height: "117.20667266845703",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 74 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.698997 0.51391V0.510909L16.6217 0.503906C15.3942 0.504437 14.2172 0.98587 13.3496 1.84229C12.482 2.69872 11.9949 3.85998 11.9954 5.07061C11.996 6.28125 12.4841 7.44209 13.3525 8.29777C14.2208 9.15344 15.3983 9.63385 16.6258 9.63332L0.703053 9.64032V9.63832C1.91324 9.61281 3.06511 9.12062 3.91165 8.26731C4.7582 7.41399 5.23201 6.26749 5.23147 5.07366C5.23094 3.87983 4.75611 2.73374 3.90881 1.88115C3.06151 1.02857 1.90921 0.537377 0.698997 0.51291V0.51391ZM73.0593 108.774C72.5014 114.231 67.5637 118.21 62.0306 117.66C56.4965 117.11 52.4636 112.24 53.0215 106.783C53.5793 101.326 58.517 97.3471 64.0501 97.8973C69.5832 98.4475 73.6172 103.317 73.0593 108.774Z"
        fill="white"
      />
    </svg>
  )
}

export default QodeSvg204836
