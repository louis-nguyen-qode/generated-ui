// id='16:1271'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg161271: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "16.799999237060547",
    height: "19.200000762939453",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 10C10.273 10 11.4939 9.49429 12.3941 8.59411C13.2943 7.69394 13.8 6.47304 13.8 5.2C13.8 3.92696 13.2943 2.70606 12.3941 1.80589C11.4939 0.905713 10.273 0.4 9 0.4C7.72696 0.4 6.50606 0.905713 5.60589 1.80589C4.70571 2.70606 4.2 3.92696 4.2 5.2C4.2 6.47304 4.70571 7.69394 5.60589 8.59411C6.50606 9.49429 7.72696 10 9 10ZM7.28625 11.8C3.5925 11.8 0.6 14.7925 0.6 18.4863C0.6 19.1013 1.09875 19.6 1.71375 19.6H16.2862C16.9012 19.6 17.4 19.1013 17.4 18.4863C17.4 14.7925 14.4075 11.8 10.7137 11.8H7.28625Z"
        fill="#464646"
      />
    </svg>
  )
}

export default QodeSvg161271
