// id='143:10024'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg14310024: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "171",
    height: "171.49996948242188",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 172 172"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 168L168 168" stroke="#444444" stroke-linecap="round" />
      <path
        d="M164.5 165.5C164.5 164.948 164.948 164.5 165.5 164.5H170.5C171.052 164.5 171.5 164.948 171.5 165.5V170.5C171.5 171.052 171.052 171.5 170.5 171.5H165.5C164.948 171.5 164.5 171.052 164.5 170.5V165.5Z"
        fill="#00B3FF"
      />
      <path d="M4 168L4.00001 4" stroke="#444444" stroke-linecap="round" />
      <rect x="0.5" width={width} height={height} rx="1" fill="#FF7E06" />
      <path
        d="M0.5 165.5C0.5 164.948 0.947715 164.5 1.5 164.5H6.5C7.05228 164.5 7.5 164.948 7.5 165.5V170.5C7.5 171.052 7.05228 171.5 6.5 171.5H1.5C0.947715 171.5 0.5 171.052 0.5 170.5V165.5Z"
        fill="#373737"
      />
    </svg>
  )
}

export default QodeSvg14310024
