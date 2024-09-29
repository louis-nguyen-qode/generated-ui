// id='I1484:44550;1186:38151'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI148444550118638151: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "60",
    height: "60",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 85 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_2297_33271)">
        <circle
          cx="42.5"
          cy="42"
          r="30"
          fill="url(#paint0_linear_2297_33271)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_2297_33271"
          x="0.5"
          y="0"
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
            stdDeviation="6"
            result="effect1_foregroundBlur_2297_33271"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2297_33271"
          x1="21.0714"
          y1="18.9231"
          x2="56.3462"
          y2="68.044"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#66A3FF" />
          <stop offset="1" stop-color="#3CE8FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default QodeSvgI148444550118638151
