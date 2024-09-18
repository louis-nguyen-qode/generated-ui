// id='833:40476'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg83340476: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "40",
    height: "52",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 32L2.76687 30.3074C1.19169 30.1324 0 28.801 0 27.2161C0 26.4342 0.294499 25.681 0.824854 25.1064L23.6417 0.388167C23.8701 0.140728 24.1915 0 24.5283 0C25.2896 0 25.8607 0.696566 25.7114 1.44316L22 20L37.2331 21.6926C38.8083 21.8676 40 23.199 40 24.7839C40 25.5658 39.7055 26.319 39.1751 26.8936L16.3583 51.6118C16.1299 51.8593 15.8085 52 15.4717 52C14.7104 52 14.1393 51.3034 14.2886 50.5568L18 32Z"
        fill="url(#paint0_linear_833_40476)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_833_40476"
          x1="20"
          y1="0"
          x2="20"
          y2="52"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFE7B8" />
          <stop offset="1" stop-color="#FFD175" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg83340476
