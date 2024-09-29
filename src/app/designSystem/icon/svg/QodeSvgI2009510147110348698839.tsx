// id='I2009:51014;71:10348;69:8839'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI2009510147110348698839: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "16",
    height: "16",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.59172 14.08C9.87422 12.475 12.7992 8.58501 12.7992 6.40001C12.7992 3.75001 10.6492 1.60001 7.99922 1.60001C5.34922 1.60001 3.19922 3.75001 3.19922 6.40001C3.19922 8.58501 6.12422 12.475 7.40672 14.08C7.71422 14.4625 8.28422 14.4625 8.59172 14.08ZM7.99922 4.80001C8.42357 4.80001 8.83053 4.96858 9.13059 5.26864C9.43065 5.56869 9.59922 5.97566 9.59922 6.40001C9.59922 6.82435 9.43065 7.23132 9.13059 7.53138C8.83053 7.83143 8.42357 8.00001 7.99922 8.00001C7.57487 8.00001 7.16791 7.83143 6.86785 7.53138C6.56779 7.23132 6.39922 6.82435 6.39922 6.40001C6.39922 5.97566 6.56779 5.56869 6.86785 5.26864C7.16791 4.96858 7.57487 4.80001 7.99922 4.80001Z"
        fill="#464646"
      />
    </svg>
  )
}

export default QodeSvgI2009510147110348698839
