// id='426:21384'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg42621384: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "111",
    height: "100",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 128 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4V0ZM111.586 103.414C112.367 104.195 113.633 104.195 114.414 103.414L127.142 90.6863C127.923 89.9052 127.923 88.6389 127.142 87.8579C126.361 87.0768 125.095 87.0768 124.314 87.8579L113 99.1716L101.686 87.8579C100.905 87.0768 99.6389 87.0768 98.8579 87.8579C98.0768 88.6389 98.0768 89.9052 98.8579 90.6863L111.586 103.414ZM2 4H101V0H2V4ZM111 14V102H115V14H111ZM101 4C106.523 4 111 8.47715 111 14H115C115 6.26801 108.732 0 101 0V4Z"
        fill="white"
      />
    </svg>
  )
}

export default QodeSvg42621384
