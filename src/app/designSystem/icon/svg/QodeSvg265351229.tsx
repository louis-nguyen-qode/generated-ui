// id='2653:51229'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg265351229: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "14.000000953674316",
    height: "20",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2653_51229"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <ellipse cx="7" cy="10" rx="7" ry="10" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2653_51229)">
        <path
          d="M13.5882 18.218C12.0633 20.3965 9.76475 22 7 22C4.23525 22 1.93673 20.3965 0.411789 18.218C-1.11758 16.0332 -2 13.1214 -2 10C-2 6.87855 -1.11758 3.96681 0.411789 1.78201C1.93673 -0.396482 4.23525 -2 7 -2C9.76475 -2 12.0633 -0.396482 13.5882 1.78201C15.1176 3.96681 16 6.87855 16 10C16 13.1214 15.1176 16.0332 13.5882 18.218Z"
          fill="#FBD381"
        />
        <path
          d="M4.80986 9.43307C6.14021 8.56259 7.85979 8.56258 9.19013 9.43307L15.6901 13.6862C19.0167 15.8629 17.4754 21.0333 13.5 21.0333H0.500034C-3.47538 21.0333 -5.01667 15.8629 -1.6901 13.6862L4.80986 9.43307Z"
          fill="#008259"
        />
      </g>
    </svg>
  )
}

export default QodeSvg265351229
