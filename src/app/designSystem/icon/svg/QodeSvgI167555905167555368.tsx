// id='I1675:55905;1675:55368'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI167555905167555368: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "44",
    height: "44",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2297_24097)">
        <circle cx="25.7695" cy="25.3135" r="22" fill="#DCFFDF" />
        <circle cx="25.7695" cy="25.3135" r="21.5" stroke="#4AB457" />
      </g>
      <defs>
        <filter
          id="filter0_d_2297_24097"
          x="0.769531"
          y="0.313477"
          width={width}
          height={height}
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="3"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_2297_24097"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.963525 0 0 0 0 0.963525 0 0 0 0 0.963525 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2297_24097"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2297_24097"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default QodeSvgI167555905167555368
