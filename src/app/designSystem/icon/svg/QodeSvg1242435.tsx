// id='124:2435'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg1242435: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "64",
    height: "13.896074295043945",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 14.7031C49.6731 14.7031 64 11.5923 64 7.75504C64 3.91775 49.6731 0.807007 32 0.807007C14.3269 0.807007 0 3.91775 0 7.75504C0 11.5923 14.3269 14.7031 32 14.7031Z"
        fill="#F5F5F5"
      />
    </svg>
  )
}

export default QodeSvg1242435
