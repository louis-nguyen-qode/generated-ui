// id='204:997'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg204997: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "52.315895080566406",
    height: "33.798301696777344",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 53 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.3556 34.2373H1.07762C0.807379 34.2373 0.548206 34.1306 0.357118 33.9407C0.16603 33.7507 0.0586777 33.4932 0.0586777 33.2246V1.45167C0.0586777 0.893173 0.51468 0.438965 1.07762 0.438965H51.3556C51.9186 0.438965 52.3746 0.893173 52.3746 1.45167V33.2246C52.3746 33.4932 52.2672 33.7507 52.0761 33.9407C51.885 34.1306 51.6259 34.2373 51.3556 34.2373Z"
        fill="#F2D7AD"
      />
    </svg>
  )
}

export default QodeSvg204997
