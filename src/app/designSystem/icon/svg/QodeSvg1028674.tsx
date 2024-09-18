// id='102:8674'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg1028674: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.1999 5.52051C3.20615 5.52051 2.3999 6.32676 2.3999 7.32051C2.3999 7.88676 2.66615 8.41926 3.1199 8.76051L11.2799 14.8805C11.7074 15.1993 12.2924 15.1993 12.7199 14.8805L20.8799 8.76051C21.3337 8.41926 21.5999 7.88676 21.5999 7.32051C21.5999 6.32676 20.7937 5.52051 19.7999 5.52051H4.1999ZM2.3999 9.72051V17.5205C2.3999 18.8443 3.47615 19.9205 4.7999 19.9205H19.1999C20.5237 19.9205 21.5999 18.8443 21.5999 17.5205V9.72051L13.4399 15.8405C12.5849 16.4818 11.4149 16.4818 10.5599 15.8405L2.3999 9.72051Z"
        fill="#464646"
      />
    </svg>
  )
}

export default QodeSvg1028674
