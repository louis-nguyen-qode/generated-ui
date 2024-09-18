// id='234:5549'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2345549: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "16",
    height: "16",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.25 1.5C4.38438 1.5 1.25 4.63438 1.25 8.5C1.25 12.3656 4.38438 15.5 8.25 15.5C12.1156 15.5 15.25 12.3656 15.25 8.5C15.25 4.63438 12.1156 1.5 8.25 1.5ZM7.75 5.125C7.75 5.05625 7.80625 5 7.875 5H8.625C8.69375 5 8.75 5.05625 8.75 5.125V9.375C8.75 9.44375 8.69375 9.5 8.625 9.5H7.875C7.80625 9.5 7.75 9.44375 7.75 9.375V5.125ZM8.25 12C7.83594 12 7.5 11.6641 7.5 11.25C7.5 10.8359 7.83594 10.5 8.25 10.5C8.66406 10.5 9 10.8359 9 11.25C9 11.6641 8.66406 12 8.25 12Z"
        fill="#FAAD14"
      />
    </svg>
  )
}

export default QodeSvg2345549
