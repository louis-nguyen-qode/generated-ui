// id='833:40878'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg83340878: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "442.41278076171875",
    height: "459.30316162109375",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1510 576"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_833_40878)">
        <path
          d="M961.009 769.344C887.997 867.295 734.246 917.269 617.596 880.963C500.947 844.658 465.571 735.821 538.583 637.869L548.677 624.327C621.689 526.375 775.441 476.402 892.09 512.707C1008.74 549.013 1044.12 657.85 971.103 755.802L961.009 769.344Z"
          fill="url(#paint0_radial_833_40878)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_833_40878"
          x="0.588867"
          y="0.865234"
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
            stdDeviation="250"
            result="effect1_foregroundBlur_833_40878"
          />
        </filter>
        <radialGradient
          id="paint0_radial_833_40878"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(845.287 729.291) rotate(-53.8447) scale(996.499 911.386)"
        >
          <stop stop-color="#5AE9FD" />
          <stop offset="1" stop-color="#5AE9FD" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg83340878
