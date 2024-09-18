// id='20:3429'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg203429: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "21.85801124572754",
    height: "17.24598503112793",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.7155 0.375H19.8432C19.5807 0.375 19.3316 0.495536 19.1709 0.701786L8.12713 14.692L2.83159 7.98214C2.75148 7.88043 2.64938 7.79819 2.53293 7.7416C2.41649 7.685 2.28874 7.65551 2.15927 7.65536H0.286949C0.107485 7.65536 0.00837788 7.86161 0.118199 8.00089L7.45481 17.2955C7.79766 17.7295 8.45659 17.7295 8.80213 17.2955L21.8843 0.717857C21.9941 0.58125 21.895 0.375 21.7155 0.375Z"
        fill="black"
        fillOpacity="0.45"
      />
    </svg>
  )
}

export default QodeSvg203429
