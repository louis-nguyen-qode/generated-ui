// id='2653:50140'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg265350140: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "72",
    height: "72",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 72H42L42 42H72V30L42 30L42 0H30L30 30L0 30V42H30L30 72Z"
        fill="#DD2033"
      />
    </svg>
  )
}

export default QodeSvg265350140
