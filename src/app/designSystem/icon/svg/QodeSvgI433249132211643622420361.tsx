// id='I433:24913;221:16436;224:20361'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI433249132211643622420361: React.FC<IconProps> = ({
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
      <g filter="url(#filter0_f_936_47596)">
        <circle
          cx="45"
          cy="44.9999"
          r="38.3333"
          fill="url(#paint0_angular_936_47596)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_936_47596"
          x="1.95503e-05"
          y="-0.00010252"
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
            result="effect1_foregroundBlur_936_47596"
          />
        </filter>
        <radialGradient
          id="paint0_angular_936_47596"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(45 44.9999) rotate(90) scale(38.3333)"
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

export default QodeSvgI433249132211643622420361
