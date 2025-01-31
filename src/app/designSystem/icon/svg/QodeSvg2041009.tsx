// id='204:1009'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2041009: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "13.411651611328125",
    height: "46.73240661621094",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.10527 46.9165C5.32694 46.9162 3.62155 46.2139 2.36418 44.9641C1.10681 43.7142 0.400453 42.0191 0.400453 40.2517V6.93064C0.389567 6.04859 0.554961 5.17316 0.887052 4.35512C1.21914 3.53709 1.71131 2.79271 2.33504 2.16514C2.95877 1.53758 3.70164 1.03934 4.52058 0.699268C5.33952 0.3592 6.21823 0.184082 7.10577 0.184082C7.99332 0.184082 8.87203 0.3592 9.69097 0.699268C10.5099 1.03934 11.2528 1.53758 11.8765 2.16514C12.5002 2.79271 12.9924 3.53709 13.3245 4.35512C13.6566 5.17316 13.822 6.04859 13.8111 6.93064V40.2517C13.8111 42.0193 13.1046 43.7145 11.847 44.9644C10.5894 46.2143 8.88376 46.9165 7.10527 46.9165Z"
        fill="#92C110"
      />
    </svg>
  )
}

export default QodeSvg2041009
