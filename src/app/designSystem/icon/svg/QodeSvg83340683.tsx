// id='833:40683'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg83340683: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "986.8032836914062",
    height: "1130.962890625",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1792 783"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_833_40683)">
        <path
          d="M1329.18 1362.47C1578.27 1251.97 1641.32 990.61 1470 778.699C1298.69 566.788 957.882 484.576 708.792 595.073L577.016 653.529C327.927 764.026 264.879 1025.39 436.194 1237.3C607.509 1449.21 948.315 1531.42 1197.4 1420.93L1329.18 1362.47Z"
          fill="url(#paint0_radial_833_40683)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_833_40683"
          x="-205.383"
          y="0.802002"
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
            stdDeviation="272.576"
            result="effect1_foregroundBlur_833_40683"
          />
        </filter>
        <radialGradient
          id="paint0_radial_833_40683"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(885.769 1090.06) rotate(-153.268) scale(582.925 504.711)"
        >
          <stop stop-color="#00E29A" />
          <stop offset="1" stop-color="#00E29A" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg83340683
