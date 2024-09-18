// id='833:40877'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg83340877: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "793.8863525390625",
    height: "609.6514282226562",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1331 329"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        style={{ mixBlendMode: "multiply" }}
        filter="url(#filter0_f_833_40877)"
      >
        <path
          d="M1044.1 639.767C943.487 774.745 731.615 843.61 570.87 793.58L394.959 738.829C234.214 688.799 185.466 538.82 286.078 403.842C386.689 268.863 598.561 199.998 759.306 250.028L935.217 304.779C1095.96 354.809 1144.71 504.788 1044.1 639.767Z"
          fill="url(#paint0_radial_833_40877)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_833_40877"
          x="0.101852"
          y="0.0901337"
          width={width}
          height={height}
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="116.81"
            result="effect1_foregroundBlur_833_40877"
          />
        </filter>
        <radialGradient
          id="paint0_radial_833_40877"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(840.844 534.29) rotate(-88.569) scale(256.966 398.352)"
        >
          <stop stop-color="#9207FF" />
          <stop offset="1" stop-color="#FF9898" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg83340877
