// id='140:8521'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg1408521: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "19.200000762939453",
    height: "19.200000762939453",
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
        d="M10 0.4C12.5461 0.4 14.9879 1.41143 16.7882 3.21178C18.5886 5.01212 19.6 7.45392 19.6 10C19.6 12.5461 18.5886 14.9879 16.7882 16.7882C14.9879 18.5886 12.5461 19.6 10 19.6C7.45392 19.6 5.01212 18.5886 3.21178 16.7882C1.41143 14.9879 0.4 12.5461 0.4 10C0.4 7.45392 1.41143 5.01212 3.21178 3.21178C5.01212 1.41143 7.45392 0.4 10 0.4ZM9.1 4.9V10C9.1 10.4988 9.50125 10.9 10 10.9H13.9C14.3988 10.9 14.8 10.4988 14.8 10C14.8 9.50125 14.3988 9.1 13.9 9.1H10.9V4.9C10.9 4.40125 10.4988 4 10 4C9.50125 4 9.1 4.40125 9.1 4.9Z"
        fill="#464646"
      />
    </svg>
  )
}

export default QodeSvg1408521
