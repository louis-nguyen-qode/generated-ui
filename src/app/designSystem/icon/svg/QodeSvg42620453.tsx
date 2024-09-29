// id='426:20453'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg42620453: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "20",
    height: "20",
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
        d="M16.7062 5.29376C17.0969 5.68439 17.0969 6.31876 16.7062 6.70939L8.70624 14.7094C8.31562 15.1 7.68124 15.1 7.29062 14.7094L3.29062 10.7094C2.89999 10.3188 2.89999 9.68439 3.29062 9.29376C3.68124 8.90314 4.31562 8.90314 4.70624 9.29376L7.99999 12.5844L15.2937 5.29376C15.6844 4.90314 16.3187 4.90314 16.7094 5.29376H16.7062Z"
        fill="#1597F4"
      />
    </svg>
  )
}

export default QodeSvg42620453
