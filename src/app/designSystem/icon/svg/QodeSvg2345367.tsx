// id='234:5367'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345367: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "8",
    height: "8",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.75 1.00012H0.75C0.473858 1.00012 0.25 1.22398 0.25 1.50012V8.50012C0.25 8.77626 0.473858 9.00012 0.75 9.00012H7.75C8.02614 9.00012 8.25 8.77626 8.25 8.50012V1.50012C8.25 1.22398 8.02614 1.00012 7.75 1.00012Z"
        fill="white"
        stroke="#DEDEDE"
        stroke-width="0.5"
      />
    </svg>
  )
}

export default QodeSvg2345367
