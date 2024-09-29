// id='1186:38155'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg118638155: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "53.40659713745117",
    height: "53.40659713745117",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_1186_38155)">
        <circle cx="26.7033" cy="26.7033" r="26.7033" fill="white" />
      </g>
      <circle cx="26.7033" cy="26.7033" r="26.2033" stroke="#D5D5D5" />
      <defs>
        <filter
          id="filter0_i_1186_38155"
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
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect1_innerShadow_1186_38155"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1186_38155"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default QodeSvg118638155
