// id='2653:50945'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg265350945: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "18",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7884 20.218C14.2635 22.3965 11.9649 24 9.2002 24C6.43545 24 4.13693 22.3965 2.61198 20.218C1.08262 18.0332 0.200195 15.1214 0.200195 12C0.200195 8.87855 1.08262 5.96681 2.61198 3.78201C4.13693 1.60352 6.43545 0 9.2002 0C11.9649 0 14.2635 1.60352 15.7884 3.78201C17.3178 5.96681 18.2002 8.87855 18.2002 12C18.2002 15.1214 17.3178 18.0332 15.7884 20.218Z"
        fill="#0091DA"
      />
    </svg>
  )
}

export default QodeSvg265350945
