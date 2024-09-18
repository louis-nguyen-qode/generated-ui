// id='833:40685'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg83340685: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "719.3536987304688",
    height: "897.5361938476562",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1550 539"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        style={{ mixBlendMode: "multiply" }}
        filter="url(#filter0_f_833_40685)"
      >
        <path
          d="M879.295 1190.75C1070.71 1243.84 1298.53 1143.16 1388.13 965.874C1477.74 788.588 1395.2 601.833 1203.79 548.745L1032.08 501.125C840.665 448.036 612.851 548.718 523.245 726.004C433.639 903.29 516.175 1090.05 707.593 1143.13L879.295 1190.75Z"
          fill="url(#paint0_radial_833_40685)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_833_40685"
          x="0.31543"
          y="0.209961"
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
            stdDeviation="243.372"
            result="effect1_foregroundBlur_833_40685"
          />
        </filter>
        <radialGradient
          id="paint0_radial_833_40685"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(830.754 956.348) rotate(-143.165) scale(384.214 369.507)"
        >
          <stop stop-color="#FF8B8B" />
          <stop offset="1" stop-color="#FF8B8B" stop-opacity="0.7" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg83340685
