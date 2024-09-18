// id='I485:39718;221:18421;219:23844'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI485397182211842121923844: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} rx="2" fill="#464646" />
      <rect x="4" y="16" width={width} height={height} fill="white" />
      <mask id="path-3-inside-1_936_2236" fill="white">
        <path d="M4 12H20V16H4V12Z" />
      </mask>
      <path
        d="M4 12V11H3V12H4ZM20 12H21V11H20V12ZM4 13H20V11H4V13ZM19 12V16H21V12H19ZM5 16V12H3V16H5Z"
        fill="white"
        mask="url(#path-3-inside-1_936_2236)"
      />
      <mask id="path-5-inside-2_936_2236" fill="white">
        <path d="M4 8H20V12H4V8Z" />
      </mask>
      <path
        d="M4 8V7H3V8H4ZM20 8H21V7H20V8ZM4 9H20V7H4V9ZM19 8V12H21V8H19ZM5 12V8H3V12H5Z"
        fill="white"
        mask="url(#path-5-inside-2_936_2236)"
      />
      <mask id="path-7-inside-3_936_2236" fill="white">
        <path d="M4 4H20V8H4V4Z" />
      </mask>
      <path
        d="M4 4V3H3V4H4ZM20 4H21V3H20V4ZM4 5H20V3H4V5ZM19 4V8H21V4H19ZM5 8V4H3V8H5Z"
        fill="white"
        mask="url(#path-7-inside-3_936_2236)"
      />
    </svg>
  )
}

export default QodeSvgI485397182211842121923844
