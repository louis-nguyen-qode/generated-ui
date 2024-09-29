// id='1384:40519'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg138440519: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "90",
    height: "90",
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
      <g filter="url(#filter0_i_1384_40519)">
        <circle cx="45" cy="45" r="45" fill="white" />
      </g>
      <circle
        cx="45"
        cy="45"
        r="44.5588"
        stroke="#75FF9B"
        stroke-width="0.882353"
      />
      <defs>
        <filter
          id="filter0_i_1384_40519"
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
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1.76471"
            operator="erode"
            in="SourceAlpha"
            result="effect1_innerShadow_1384_40519"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3.52941" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.229392 0 0 0 0 0.754167 0 0 0 0 0.376329 0 0 0 0.35 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1384_40519"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default QodeSvg138440519
