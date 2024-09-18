// id='3459:986'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg3459986: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "46",
    height: "46",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={width}
        height={height}
        fill="white"
        fillOpacity="0.01"
        style={{ mixBlendMode: "multiply" }}
      />
      <path
        d="M16.1241 17.7117H20.617V28.252H16.1202H14.9129L15.7667 29.1056L22.6418 35.9787L22.9954 36.3322L23.3489 35.9787L30.222 29.1055L31.0756 28.252H29.8685H25.4102L25.4119 17.7117H29.8685H31.0806L30.221 16.8571L23.3478 10.0242L22.9953 9.6737L22.6428 10.0242L15.7715 16.8572L14.9122 17.7117H16.1241Z"
        fill="black"
        stroke="white"
      />
    </svg>
  )
}

export default QodeSvg3459986
