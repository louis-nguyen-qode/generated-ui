// id='833:40683'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
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
      viewBox="0 0 1920 840"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_833_40683)">
        <path
          d="M1393.18 1362.47C1642.27 1251.97 1705.32 990.61 1534 778.699C1362.69 566.788 1021.88 484.576 772.792 595.073L641.016 653.529C391.927 764.026 328.879 1025.39 500.194 1237.3C671.509 1449.21 1012.31 1531.42 1261.4 1420.93L1393.18 1362.47Z"
          fill="url(#paint0_radial_833_40683)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_833_40683"
          x="-141.383"
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
          gradientTransform="translate(949.769 1090.06) rotate(-153.268) scale(582.925 504.711)"
        >
          <stop stop-color="#00E29A" />
          <stop offset="1" stop-color="#00E29A" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg83340683
