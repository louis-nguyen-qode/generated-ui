// id='1331:40424'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg133140424: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "442.41278076171875",
    height: "459.30316162109375",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1505 576"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_1331_40424)">
        <path
          d="M956.009 769.344C882.997 867.295 729.246 917.269 612.596 880.963C495.947 844.657 460.571 735.82 533.583 637.869L543.677 624.327C616.689 526.375 770.441 476.401 887.09 512.707C1003.74 549.013 1039.12 657.85 966.103 755.802L956.009 769.344Z"
          fill="url(#paint0_radial_1331_40424)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1331_40424"
          x="-4.41113"
          y="0.864746"
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
            result="effect1_foregroundBlur_1331_40424"
          />
        </filter>
        <radialGradient
          id="paint0_radial_1331_40424"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(840.287 729.29) rotate(-53.8447) scale(996.499 911.386)"
        >
          <stop stop-color="#5AE9FD" />
          <stop offset="1" stop-color="#5AE9FD" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg133140424
