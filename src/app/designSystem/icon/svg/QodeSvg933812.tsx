// id='93:3812'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg933812: React.FC<IconProps> = ({
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
        d="M4.20002 5.52051C3.20627 5.52051 2.40002 6.32676 2.40002 7.32051C2.40002 7.88676 2.66627 8.41926 3.12002 8.76051L11.28 14.8805C11.7075 15.1993 12.2925 15.1993 12.72 14.8805L20.88 8.76051C21.3338 8.41926 21.6 7.88676 21.6 7.32051C21.6 6.32676 20.7938 5.52051 19.8 5.52051H4.20002ZM2.40002 9.72051V17.5205C2.40002 18.8443 3.47627 19.9205 4.80002 19.9205H19.2C20.5238 19.9205 21.6 18.8443 21.6 17.5205V9.72051L13.44 15.8405C12.585 16.4818 11.415 16.4818 10.56 15.8405L2.40002 9.72051Z"
        fill="#464646"
      />
    </svg>
  )
}

export default QodeSvg933812
