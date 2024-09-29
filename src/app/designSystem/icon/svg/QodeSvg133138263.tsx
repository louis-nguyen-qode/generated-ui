// id='1331:38263'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg133138263: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "12",
    height: "18",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0C4.34315 0 3 1.34315 3 3V9C3 10.6569 4.34315 12 6 12C7.65685 12 9 10.6569 9 9V3C9 1.34315 7.65685 0 6 0ZM1.5 9C1.5 8.58579 1.16421 8.25 0.75 8.25C0.335786 8.25 0 8.58579 0 9C0 10.9175 0.621577 12.4436 1.73826 13.4858C2.67527 14.3603 3.90114 14.8386 5.25 14.9654V17.25C5.25 17.6642 5.58579 18 6 18C6.41421 18 6.75 17.6642 6.75 17.25V14.9654C8.09886 14.8386 9.32473 14.3603 10.2617 13.4858C11.3784 12.4436 12 10.9175 12 9C12 8.58579 11.6642 8.25 11.25 8.25C10.8358 8.25 10.5 8.58579 10.5 9C10.5 10.5825 9.99658 11.6814 9.23826 12.3892C8.47133 13.105 7.35833 13.5 6 13.5C4.64167 13.5 3.52867 13.105 2.76174 12.3892C2.00342 11.6814 1.5 10.5825 1.5 9Z"
        fill="#121A24"
      />
    </svg>
  )
}

export default QodeSvg133138263
