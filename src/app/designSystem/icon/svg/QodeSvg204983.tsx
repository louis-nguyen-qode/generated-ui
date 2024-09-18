// id='204:983'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg204983: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "7.1779937744140625",
    height: "4.42681884765625",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.13812 4.23549L8.14014 1.15125C8.14129 0.98375 8.07672 0.822407 7.96012 0.701467C7.84352 0.580526 7.68408 0.509517 7.51566 0.50352C5.5436 0.439198 3.57001 0.43586 1.59774 0.493499C1.42787 0.498695 1.26666 0.569233 1.1481 0.690252C1.02953 0.811272 0.962876 0.973307 0.962172 1.14222V4.22245C0.961612 4.30825 0.978369 4.3933 1.01146 4.47256C1.04454 4.55181 1.09328 4.62365 1.15479 4.68386C1.21631 4.74406 1.28935 4.7914 1.36959 4.82305C1.44983 4.85471 1.53565 4.87005 1.62196 4.86817C3.57019 4.82552 5.51918 4.8292 7.46723 4.8792C7.83244 4.88923 8.13812 4.59846 8.13812 4.23549Z"
        fill="#192064"
      />
    </svg>
  )
}

export default QodeSvg204983
