// id='204:883'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg204883: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "9.489959716796875",
    height: "6.5811004638671875",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0502 6.40911L10.0542 1.5223C10.0552 1.31327 9.9739 1.11201 9.82747 0.960887C9.68105 0.80976 9.4809 0.720546 9.26913 0.712C6.80637 0.619966 4.15698 0.603952 1.36253 0.697987C1.14957 0.705731 0.947897 0.794389 0.799687 0.945409C0.651476 1.09643 0.568214 1.29811 0.567311 1.50829L0.564262 6.39011C0.564262 6.84628 0.940577 7.21041 1.40311 7.19841C4.00213 7.13406 6.60246 7.13972 9.20118 7.21542C9.31101 7.21903 9.42046 7.20088 9.52306 7.16204C9.62565 7.12319 9.7193 7.06442 9.79846 6.98924C9.87762 6.91406 9.94068 6.82399 9.98392 6.72434C10.0271 6.6247 10.0497 6.5175 10.0502 6.40911Z"
        fill="white"
      />
    </svg>
  )
}

export default QodeSvg204883
