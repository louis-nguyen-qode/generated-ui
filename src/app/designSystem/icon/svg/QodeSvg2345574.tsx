// id='234:5574'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345574: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "50",
    height: "3",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 51 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48.75 0.962646H1.75C0.921573 0.962646 0.25 1.63422 0.25 2.46265C0.25 3.29107 0.921573 3.96265 1.75 3.96265H48.75C49.5784 3.96265 50.25 3.29107 50.25 2.46265C50.25 1.63422 49.5784 0.962646 48.75 0.962646Z"
        fill="black"
        fillOpacity="0.04"
      />
      <path
        d="M33.75 0.962646H1.75C0.921573 0.962646 0.25 1.63422 0.25 2.46265C0.25 3.29107 0.921573 3.96265 1.75 3.96265H33.75C34.5784 3.96265 35.25 3.29107 35.25 2.46265C35.25 1.63422 34.5784 0.962646 33.75 0.962646Z"
        fill="#91CAFF"
      />
      <path
        d="M25.75 0.962646H1.75C0.921573 0.962646 0.25 1.63422 0.25 2.46265C0.25 3.29107 0.921573 3.96265 1.75 3.96265H25.75C26.5784 3.96265 27.25 3.29107 27.25 2.46265C27.25 1.63422 26.5784 0.962646 25.75 0.962646Z"
        fill="#1677FF"
      />
    </svg>
  )
}

export default QodeSvg2345574
