// id='148:9377'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg1489377: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "42",
    height: "42",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 59 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.7" filter="url(#filter0_f_148_9377)">
        <circle
          cx="29.2749"
          cy="29.2749"
          r="21"
          fill="url(#paint0_angular_148_9377)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_148_9377"
          x="0.0249023"
          y="0.0249023"
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
            stdDeviation="4.125"
            result="effect1_foregroundBlur_148_9377"
          />
        </filter>
        <radialGradient
          id="paint0_angular_148_9377"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(29.2749 29.2749) rotate(90) scale(21)"
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

export default QodeSvg1489377
