// id='204:873'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg204873: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "26.69855499267578",
    height: "3.817596435546875",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.949043 0.181641C0.949043 0.181641 3.43107 1.46311 7.85552 0.839878C10.9806 0.399712 11.6491 1.32506 15.4416 1.87927C19.2341 2.43348 26.3982 1.80925 27.5221 0.978938C27.943 2.08735 27.1701 3.05672 27.1701 3.05672C27.1701 3.05672 25.6253 3.66497 22.2537 3.88805C20.1795 4.0251 16.3271 4.18114 14.481 3.38084C12.6553 1.99532 9.11936 1.46314 8.62843 3.13777C4.62492 4.09613 1.11234 2.84964 1.11234 2.84964L0.950057 0.181641H0.949043Z"
        fill="#2B0849"
      />
    </svg>
  )
}

export default QodeSvg204873
