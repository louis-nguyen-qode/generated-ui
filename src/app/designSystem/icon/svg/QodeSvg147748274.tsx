// id='1477:48274'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg147748274: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "62",
    height: "62",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 86 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_1477_48274)">
        <circle cx="43" cy="43" r="31" fill="url(#paint0_linear_1477_48274)" />
      </g>
      <defs>
        <filter
          id="filter0_f_1477_48274"
          x="0"
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
            result="effect1_foregroundBlur_1477_48274"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1477_48274"
          x1="20.8571"
          y1="19.1538"
          x2="57.3077"
          y2="69.9121"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#66A3FF" />
          <stop offset="1" stop-color="#3CE8FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg147748274
