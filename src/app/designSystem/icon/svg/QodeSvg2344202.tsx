// id='234:4202'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2344202: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "14",
    height: "14",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8359 3.5H11.8105C11.7408 3.5 11.6752 3.53418 11.6342 3.59023L7.74999 8.94414L3.86581 3.59023C3.82479 3.53418 3.75917 3.5 3.68944 3.5H2.66405C2.57519 3.5 2.52323 3.60117 2.57519 3.67363L7.39589 10.3195C7.57089 10.5602 7.92909 10.5602 8.10272 10.3195L12.9234 3.67363C12.9767 3.60117 12.9248 3.5 12.8359 3.5Z"
        fill="#1677FF"
      />
    </svg>
  )
}

export default QodeSvg2344202
