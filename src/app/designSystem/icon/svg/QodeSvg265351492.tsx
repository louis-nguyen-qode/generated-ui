// id='2653:51492'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg265351492: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "21",
    height: "23",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2653_51492"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <path
          d="M0.399902 0H21.3999V8.74322C21.3999 14.8265 17.6915 20.2951 12.04 22.546L10.8999 23L9.75985 22.546C4.10833 20.2951 0.399902 14.8265 0.399902 8.74322V0Z"
          fill="#F1B434"
        />
      </mask>
      <g mask="url(#mask0_2653_51492)">
        <path
          d="M10.8992 15C8.2744 15 8.2744 17.1819 5.64957 17.1819C3.02474 17.1819 3.02473 15 0.399902 15V18.8181C3.02473 18.8181 3.02474 21 5.64957 21C8.2744 21 8.2744 18.8181 10.8992 18.8181C13.5243 18.8181 13.5243 21 16.1496 21C18.7748 21 18.7747 18.8181 21.3999 18.8181V15C18.7748 15 18.7748 17.1819 16.1496 17.1819C13.5243 17.1819 13.5243 15 10.8992 15Z"
          fill="#F5F7F8"
        />
      </g>
    </svg>
  )
}

export default QodeSvg265351492
