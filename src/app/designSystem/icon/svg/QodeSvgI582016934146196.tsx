// id='I5820:16934;146:196'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvgI582016934146196: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4.5"
        y="4.5"
        width={width}
        height={height}
        rx="3.5"
        fill="#1597F4"
      />
      <rect
        x="4.5"
        y="4.5"
        width={width}
        height={height}
        rx="3.5"
        stroke="#158DE2"
      />
      <path
        d="M15.1055 20.1041L15.0878 20.1217L10.688 15.7218L12.1207 14.2892L15.1055 17.274L19.8795 12.5L21.3122 13.9327L15.1231 20.1218L15.1055 20.1041Z"
        fill="white"
      />
      <rect
        x="2"
        y="2"
        width={width}
        height={height}
        rx="6"
        stroke="#82C8FA"
        stroke-width="4"
      />
    </svg>
  )
}

export default QodeSvgI582016934146196
