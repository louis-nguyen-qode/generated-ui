// id='20:3440'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg203440: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "20",
    height: "20",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.9296 2.8125H17.3693C17.1506 2.8125 16.943 2.91295 16.8091 3.08482L7.60594 14.7433L3.19299 9.15179C3.12624 9.06703 3.04115 8.9985 2.94411 8.95133C2.84707 8.90417 2.74061 8.8796 2.63272 8.87946H1.07246C0.922903 8.87946 0.840314 9.05134 0.931832 9.16741L7.04567 16.9129C7.33139 17.2746 7.88049 17.2746 8.16844 16.9129L19.0702 3.09821C19.1617 2.98438 19.0792 2.8125 18.9296 2.8125Z"
        fill="#2D64BC"
      />
    </svg>
  )
}

export default QodeSvg203440
