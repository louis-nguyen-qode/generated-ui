// id='289:26246'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg28926246: React.FC<IconProps> = ({
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
        d="M15.1054 20.1041L15.0877 20.1217L10.6879 15.7218L12.1206 14.2892L15.1054 17.274L19.8794 12.5L21.3121 13.9327L15.123 20.1218L15.1054 20.1041Z"
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

export default QodeSvg28926246
