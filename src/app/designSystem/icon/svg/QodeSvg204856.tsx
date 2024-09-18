// id='204:856'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg204856: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "26.766448974609375",
    height: "26.83002471923828",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.113 14.2676C26.9417 13.1202 27.1091 5.14624 27.1426 2.33519C27.1457 2.0696 27.0463 1.81279 26.8645 1.6168C26.6828 1.42082 26.4323 1.30034 26.1638 1.27979L21.4776 0.914655C13.6572 -0.129735 4.16222 1.53889 2.9633 7.26303C-2.59718 13.0782 2.53628 20.512 2.53628 20.512C2.53628 20.512 4.52738 24.0793 6.90291 27.3055C7.66973 28.3469 7.3066 23.5731 9.98643 21.3743C15.5895 16.7786 26.113 14.2686 26.113 14.2686"
        fill="#5C2552"
      />
    </svg>
  )
}

export default QodeSvg204856
