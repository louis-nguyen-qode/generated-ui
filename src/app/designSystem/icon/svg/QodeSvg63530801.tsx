// id='635:30801'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg63530801: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "114",
    height: "99",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 122 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_635_30801)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M103.293 41L116.326 53.39L101.988 68.526L118 83.747L105.632 96.804L76.6682 69.27L77.95 67.916L103.293 41ZM86.976 85.781C78.1606 93.983 66.3555 99 53.3905 99C26.1308 99 4 76.82 4 49.5C4 22.18 26.1308 0 53.3905 0C76.217 0 95.448 15.554 101.098 36.654C100.614 36.9 84.8298 53.417 84.8298 53.417C84.9875 52.134 85.0693 50.826 85.0693 49.5C85.0693 31.977 70.8745 17.751 53.3905 17.751C35.9065 17.751 21.7116 31.977 21.7116 49.5C21.7116 67.023 35.9065 81.249 53.3905 81.249C61.2985 81.249 68.5337 78.338 74.0868 73.529L86.976 85.781Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_635_30801"
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
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_635_30801"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_635_30801"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default QodeSvg63530801
