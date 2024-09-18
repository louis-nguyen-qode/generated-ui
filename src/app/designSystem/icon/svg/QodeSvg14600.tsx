// id='14:600'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg14600: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "21.600000381469727",
    height: "14.399999618530273",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.2 3.2C0.2 1.87625 1.27625 0.8 2.6 0.8H12.2C13.5238 0.8 14.6 1.87625 14.6 3.2V12.8C14.6 14.1237 13.5238 15.2 12.2 15.2H2.6C1.27625 15.2 0.2 14.1237 0.2 12.8V3.2ZM21.1662 2.1425C21.5563 2.3525 21.8 2.7575 21.8 3.2V12.8C21.8 13.2425 21.5563 13.6475 21.1662 13.8575C20.7763 14.0675 20.3038 14.045 19.9325 13.7975L16.3325 11.3975L15.8 11.0413V10.4V5.6V4.95875L16.3325 4.6025L19.9325 2.2025C20.3 1.95875 20.7725 1.9325 21.1662 2.1425Z"
        fill="#464646"
      />
    </svg>
  )
}

export default QodeSvg14600
