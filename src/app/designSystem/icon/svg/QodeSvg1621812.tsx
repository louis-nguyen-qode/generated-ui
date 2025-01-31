// id='162:1812'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg1621812: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "3",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 1.5C0 0.671573 0.671573 0 1.5 0H22.5C23.3284 0 24 0.671573 24 1.5C24 2.32843 23.3284 3 22.5 3H1.5C0.671573 3 0 2.32843 0 1.5Z"
        fill="white"
      />
    </svg>
  )
}

export default QodeSvg1621812
