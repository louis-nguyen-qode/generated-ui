// id='833:40684'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg83340684: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "894.830078125",
    height: "1116.47802734375",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1312 677"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        style={{ mixBlendMode: "multiply" }}
        filter="url(#filter0_f_833_40684)"
      >
        <path
          d="M146.726 1362.43C384.839 1428.46 668.226 1303.22 779.69 1082.69C891.154 862.158 788.485 629.847 550.372 563.808L336.786 504.572C98.6739 438.534 -184.714 563.776 -296.177 784.308C-407.641 1004.84 -304.972 1237.15 -66.8597 1303.19L146.726 1362.43Z"
          fill="url(#paint0_radial_833_40684)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_833_40684"
          x="-827.934"
          y="0.200684"
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
            stdDeviation="243.372"
            result="effect1_foregroundBlur_833_40684"
          />
        </filter>
        <radialGradient
          id="paint0_radial_833_40684"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(546.809 872.418) rotate(159.531) scale(509.075 415.891)"
        >
          <stop stop-color="#7C75FF" />
          <stop offset="1" stop-color="#484EB7" stop-opacity="0" />
          <stop offset="1" stop-color="#9FA7FF" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg83340684
