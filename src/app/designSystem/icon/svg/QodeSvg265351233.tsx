// id='2653:51233'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg265351233: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "18",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5882 20.218C14.0633 22.3965 11.7647 24 9 24C6.23525 24 3.93673 22.3965 2.41179 20.218C0.882425 18.0332 0 15.1214 0 12C0 8.87855 0.882425 5.96681 2.41179 3.78201C3.93673 1.60352 6.23525 0 9 0C11.7647 0 14.0633 1.60352 15.5882 3.78201C17.1176 5.96681 18 8.87855 18 12C18 15.1214 17.1176 18.0332 15.5882 20.218ZM9 22C12.866 22 16 17.5228 16 12C16 6.47715 12.866 2 9 2C5.13401 2 2 6.47715 2 12C2 17.5228 5.13401 22 9 22Z"
        fill="#005EB8"
      />
    </svg>
  )
}

export default QodeSvg265351233
