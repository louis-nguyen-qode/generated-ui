// id='234:5468'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345468: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "9.600000381469727",
    height: "9.600000381469727",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.458865">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.53562 5.1998L7.99656 2.26637C8.03781 2.21762 8.00312 2.14355 7.93937 2.14355H7.19125C7.14719 2.14355 7.105 2.16324 7.07594 2.19699L5.04625 4.61668L3.01656 2.19699C2.98844 2.16324 2.94625 2.14355 2.90125 2.14355H2.15312C2.08937 2.14355 2.05469 2.21762 2.09594 2.26637L4.55687 5.1998L2.09594 8.13324C2.05469 8.18199 2.08937 8.25605 2.15312 8.25605H2.90125C2.94531 8.25605 2.9875 8.23637 3.01656 8.20262L5.04625 5.78293L7.07594 8.20262C7.10406 8.23637 7.14625 8.25605 7.19125 8.25605H7.93937C8.00312 8.25605 8.03781 8.18199 7.99656 8.13324L5.53562 5.1998Z"
          fill="black"
        />
      </g>
    </svg>
  )
}

export default QodeSvg2345468
