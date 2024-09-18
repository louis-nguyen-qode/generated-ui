// id='677:40270'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg67740270: React.FC<IconProps> = ({
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
      <g filter="url(#filter0_f_677_40270)">
        <circle
          cx="45.0001"
          cy="44.9998"
          r="38.3333"
          fill="#9C9C9C"
          fillOpacity="0.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_677_40270"
          x="8.05855e-05"
          y="-0.000163555"
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
            result="effect1_foregroundBlur_677_40270"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default QodeSvg67740270
