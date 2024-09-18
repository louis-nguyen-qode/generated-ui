// id='I677:40866;224:22361;677:40270'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI677408662242236167740270: React.FC<IconProps> = ({
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
      <g filter="url(#filter0_f_936_2112)">
        <circle
          cx="45.0001"
          cy="45.0003"
          r="38.3333"
          fill="#9C9C9C"
          fillOpacity="0.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_936_2112"
          x="8.05855e-05"
          y="0.000324726"
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
            result="effect1_foregroundBlur_936_2112"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default QodeSvgI677408662242236167740270
