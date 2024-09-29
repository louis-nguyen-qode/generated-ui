// id='1329:38003'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg132938003: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "48",
    height: "48",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.3">
        <g filter="url(#filter0_dd_1329_38003)">
          <rect
            x="8.80669"
            y="8.80645"
            width={width}
            height={height}
            rx="23.1936"
            stroke="white"
            stroke-opacity="0.01"
            stroke-width="1.6129"
            shape-rendering="crispEdges"
          />
        </g>
        <g filter="url(#filter1_dd_1329_38003)">
          <rect
            x="10.8228"
            y="10.8226"
            width={width}
            height={height}
            rx="21.1774"
            stroke="white"
            stroke-opacity="0.01"
            stroke-width="5.64515"
            shape-rendering="crispEdges"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_dd_1329_38003"
          x="4.00024"
          y="4"
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
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.690202 0 0 0 0 1 0 0 0 0 0.776945 0 0 0 0.8 0"
          />
          <feBlend
            mode="hard-light"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1329_38003"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.26709 0 0 0 0 1 0 0 0 0 0.824102 0 0 0 0.7 0"
          />
          <feBlend
            mode="color-dodge"
            in2="effect1_dropShadow_1329_38003"
            result="effect2_dropShadow_1329_38003"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1329_38003"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_dd_1329_38003"
          x="0.000244141"
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
          <feOffset dx="1.6129" dy="1.6129" />
          <feGaussianBlur stdDeviation="0.806451" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.187158 0 0 0 0 0.804918 0 0 0 0 1 0 0 0 0.7 0"
          />
          <feBlend
            mode="hard-light"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1329_38003"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="dilate"
            in="SourceAlpha"
            result="effect2_dropShadow_1329_38003"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.187158 0 0 0 0 1 0 0 0 0 0.804918 0 0 0 0.65 0"
          />
          <feBlend
            mode="hard-light"
            in2="effect1_dropShadow_1329_38003"
            result="effect2_dropShadow_1329_38003"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1329_38003"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default QodeSvg132938003
