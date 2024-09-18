// id='3026:28602'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg302628602: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "32",
    height: "38.000003814697266",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.56406 9.29633C6.56406 4.16133 10.7872 0 15.9984 0C21.2096 0 25.4359 4.16133 25.4359 9.29633C25.4359 14.4344 21.2096 18.5958 15.9984 18.5958C10.7872 18.5958 6.56406 14.4344 6.56406 9.29633ZM16.0672 38C22.2976 38 27.936 35.5421 32 31.588V28.783C32 25.3911 29.136 22.6383 25.6 22.6383H6.4C2.864 22.6383 0 25.3911 0 28.783V31.4467C4.0736 35.4807 9.7664 38 16.0672 38Z"
        fill="white"
      />
    </svg>
  )
}

export default QodeSvg302628602
