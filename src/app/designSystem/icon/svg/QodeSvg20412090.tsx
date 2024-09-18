// id='204:12090'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg20412090: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "12",
    height: "12",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_204_12090)">
        <path
          d="M6 0.75C3.10078 0.75 0.75 3.10078 0.75 6C0.75 8.89922 3.10078 11.25 6 11.25C8.89922 11.25 11.25 8.89922 11.25 6C11.25 3.10078 8.89922 0.75 6 0.75ZM8.26758 4.28555L5.79961 7.70742C5.76512 7.75557 5.71964 7.7948 5.66696 7.82186C5.61428 7.84892 5.55591 7.86304 5.49668 7.86304C5.43745 7.86304 5.37908 7.84892 5.3264 7.82186C5.27372 7.7948 5.22824 7.75557 5.19375 7.70742L3.73242 5.68242C3.68789 5.62031 3.73242 5.53359 3.80859 5.53359H4.3582C4.47773 5.53359 4.59141 5.59102 4.66172 5.68945L5.49609 6.84727L7.33828 4.29258C7.40859 4.19531 7.52109 4.13672 7.6418 4.13672H8.19141C8.26758 4.13672 8.31211 4.22344 8.26758 4.28555Z"
          fill="#11A620"
        />
      </g>
      <defs>
        <clipPath id="clip0_204_12090">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvg20412090