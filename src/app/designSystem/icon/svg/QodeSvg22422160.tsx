// id='224:22160'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg22422160: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "76.66667175292969",
    height: "76.66667175292969",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_224_22160)">
        <circle
          cx="45.0001"
          cy="44.9998"
          r="38.3333"
          fill="url(#paint0_angular_224_22160)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_224_22160"
          x="8.01086e-05"
          y="-0.000164032"
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
            stdDeviation="3.33333"
            result="effect1_foregroundBlur_224_22160"
          />
        </filter>
        <radialGradient
          id="paint0_angular_224_22160"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(45.0001 44.9998) rotate(90) scale(38.3333)"
        >
          <stop offset="0.135" stop-color="#49CBFF" />
          <stop offset="0.39" stop-color="#86F0FF" />
          <stop offset="0.695" stop-color="#50FFA0" />
          <stop offset="1" stop-color="#7EA2FF" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg22422160
