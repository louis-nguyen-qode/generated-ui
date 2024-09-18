// id='224:22164'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg22422164: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "56.3636360168457",
    height: "56.3636360168457",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="28.8486"
        cy="28.8483"
        r="28.1818"
        fill="url(#paint0_radial_224_22164)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_224_22164"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(28.8486 28.8483) rotate(90) scale(28.1818)"
        >
          <stop stop-color="#4A4A4A" />
          <stop offset="1" stop-color="#141414" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg22422164
