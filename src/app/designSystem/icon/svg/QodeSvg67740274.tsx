// id='677:40274'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg67740274: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "56.36363220214844",
    height: "56.36363220214844",
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
        fill="url(#paint0_radial_677_40274)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_677_40274"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(28.8486 28.8483) rotate(90) scale(28.1818)"
        >
          <stop stop-color="#646464" />
          <stop offset="1" stop-color="#272727" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg67740274
