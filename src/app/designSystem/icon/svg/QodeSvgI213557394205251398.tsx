// id='I2135:57394;2052:51398'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI213557394205251398: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "40",
    height: "40",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2297_65420)">
        <circle cx="24" cy="24" r="20" fill="#F8F6F6" />
        <circle cx="24" cy="24" r="19.5" stroke="#BFBFBF" />
      </g>
      <defs>
        <filter
          id="filter0_d_2297_65420"
          x="0"
          y="0"
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
            radius="4"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_2297_65420"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.895833 0 0 0 0 0.895833 0 0 0 0 0.895833 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2297_65420"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2297_65420"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default QodeSvgI213557394205251398
