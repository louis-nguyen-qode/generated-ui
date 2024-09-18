// id='2653:51115'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg265351115: React.FC<IconProps> = ({
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
        id="mask0_2653_51115"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <path
          d="M0.399902 0H21.3999V8.74322C21.3999 14.8265 17.6915 20.2951 12.04 22.546L10.8999 23L9.75985 22.546C4.10833 20.2951 0.399902 14.8265 0.399902 8.74321V0Z"
          fill="#DD2033"
        />
      </mask>
      <g mask="url(#mask0_2653_51115)">
        <rect
          x="0.399902"
          y="10"
          width={width}
          height={height}
          fill="#005EB8"
        />
        <path
          d="M10.8992 14C8.2744 14 8.2744 16.1819 5.64957 16.1819C3.02474 16.1819 3.02473 14 0.399902 14V17.8181C3.02473 17.8181 3.02474 20 5.64957 20C8.2744 20 8.2744 17.8181 10.8992 17.8181C13.5243 17.8181 13.5243 20 16.1496 20C18.7748 20 18.7747 17.8181 21.3999 17.8181V14C18.7748 14 18.7748 16.1819 16.1496 16.1819C13.5243 16.1819 13.5243 14 10.8992 14Z"
          fill="#F5F7F8"
        />
        <path
          d="M10.8992 7C8.2744 7 8.2744 9.18185 5.64957 9.18185C3.02474 9.18185 3.02473 7 0.399902 7V10.8181C3.02473 10.8181 3.02474 13 5.64957 13C8.2744 13 8.2744 10.8181 10.8992 10.8181C13.5243 10.8181 13.5243 13 16.1496 13C18.7748 13 18.7747 10.8181 21.3999 10.8181V7C18.7748 7 18.7748 9.18185 16.1496 9.18185C13.5243 9.18185 13.5243 7 10.8992 7Z"
          fill="#F5F7F8"
        />
        <rect x="3.3999" y="2" width={width} height={height} fill="#F1B434" />
      </g>
    </svg>
  )
}

export default QodeSvg265351115
