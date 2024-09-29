// id='1491:45527'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg149145527: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "62.6953125",
    height: "62.6953125",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 87 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_1491_45527)">
        <circle
          cx="43.5"
          cy="43.3477"
          r="31.3477"
          fill="url(#paint0_linear_1491_45527)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1491_45527"
          x="0.152344"
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
            result="effect1_foregroundBlur_1491_45527"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1491_45527"
          x1="21.1088"
          y1="19.2341"
          x2="57.9682"
          y2="70.5616"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#66A3FF" />
          <stop offset="1" stop-color="#3CE8FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg149145527
