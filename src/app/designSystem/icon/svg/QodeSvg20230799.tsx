// id='202:30799'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg20230799: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "16",
    height: "16",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.6422 9.31563L11.0797 6.06563C11.033 6.00629 10.9734 5.95832 10.9055 5.92531C10.8375 5.89229 10.763 5.87509 10.6875 5.875H9.675C9.57031 5.875 9.5125 5.99531 9.57656 6.07812L11.8313 8.9375H2.375C2.30625 8.9375 2.25 8.99375 2.25 9.0625V10C2.25 10.0687 2.30625 10.125 2.375 10.125H13.2484C13.6672 10.125 13.9 9.64375 13.6422 9.31563Z"
        fill="#A7A7A7"
      />
    </svg>
  )
}

export default QodeSvg20230799
