// id='16:6458'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg166458: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "16.805625915527344",
    height: "9.601874351501465",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.1525 9.6475C8.62125 10.1163 9.3825 10.1163 9.85125 9.6475L17.0513 2.4475C17.52 1.97875 17.52 1.2175 17.0513 0.748751C16.5825 0.280001 15.8213 0.280001 15.3525 0.748751L9 7.10125L2.6475 0.7525C2.17875 0.28375 1.4175 0.28375 0.94875 0.7525C0.48 1.22125 0.48 1.9825 0.94875 2.45125L8.14875 9.65125L8.1525 9.6475Z"
        fill="black"
        fillOpacity="0.88"
      />
    </svg>
  )
}

export default QodeSvg166458
