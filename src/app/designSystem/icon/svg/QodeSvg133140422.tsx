// id='1331:40422'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg133140422: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "830.5394287109375",
    height: "828.5739135742188",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1451 318"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_1331_40422)">
        <path
          d="M348.554 741.309C178.697 588.013 210.231 385.445 417.887 289.371C625.543 193.296 932.471 239.272 1102.33 392.568C1272.19 545.865 1240.65 748.433 1033 844.507C825.339 940.581 518.412 894.606 348.554 741.309Z"
          fill="url(#paint0_radial_1331_40422)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1331_40422"
          x="0.448883"
          y="0.517242"
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
            stdDeviation="119.342"
            result="effect1_foregroundBlur_1331_40422"
          />
        </filter>
        <radialGradient
          id="paint0_radial_1331_40422"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(562.678 510.63) rotate(35.3709) scale(576.777 481.852)"
        >
          <stop stop-color="#FFD84B" />
          <stop offset="1" stop-color="#FFD84B" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg133140422
