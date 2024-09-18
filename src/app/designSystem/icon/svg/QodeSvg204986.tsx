// id='204:986'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg204986: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "23.48272705078125",
    height: "23.07854461669922",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.77332 14.1994C3.77332 14.1994 -0.799793 11.3388 1.3198 7.32608C2.95716 4.2278 5.87274 8.46212 5.87274 8.46212C5.87274 8.46212 6.39733 4.81036 9.02135 4.81036C9.54595 3.76757 10.5962 0.637207 10.5962 0.637207C10.5962 0.637207 22.1424 3.24518 24.2419 3.76657C24.2419 8.98351 21.9175 23.2426 16.3325 23.6808C7.36179 24.3857 3.77332 14.1994 3.77332 14.1994Z"
        fill="#FFC6A0"
      />
    </svg>
  )
}

export default QodeSvg204986
