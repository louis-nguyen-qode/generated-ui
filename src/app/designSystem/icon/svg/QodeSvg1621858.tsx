// id='162:1858'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg1621858: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "3",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 2C0 1.17157 0.671573 0.5 1.5 0.5H22.5C23.3284 0.5 24 1.17157 24 2C24 2.82843 23.3284 3.5 22.5 3.5H1.5C0.671573 3.5 0 2.82843 0 2Z"
        fill="white"
      />
    </svg>
  )
}

export default QodeSvg1621858
