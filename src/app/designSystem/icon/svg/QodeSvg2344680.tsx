// id='234:4680'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2344680: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "8",
    height: "8",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.26535 0H2.26535C1.16078 0 0.26535 0.89543 0.26535 2V6C0.26535 7.10457 1.16078 8 2.26535 8H6.26535C7.36992 8 8.26535 7.10457 8.26535 6V2C8.26535 0.89543 7.36992 0 6.26535 0Z"
        fill="#1677FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.15048 2.627L4.04448 5.547C3.91748 5.724 3.65448 5.724 3.52748 5.547L2.28048 3.819C2.24248 3.766 2.28048 3.692 2.34548 3.692H2.81448C2.91648 3.692 3.01348 3.741 3.07348 3.825L3.78548 4.813L5.35748 2.633C5.41748 2.55 5.51348 2.5 5.61648 2.5H6.08548C6.15048 2.5 6.18848 2.574 6.15048 2.627Z"
        fill="white"
      />
    </svg>
  )
}

export default QodeSvg2344680
