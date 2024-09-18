// id='47:6988'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg476988: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "20",
    height: "20",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_47_6988)">
        <path
          d="M2.5 4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H15.5C16.6046 2.5 17.5 3.39543 17.5 4.5V15.5C17.5 16.6046 16.6046 17.5 15.5 17.5H4.5C3.39543 17.5 2.5 16.6046 2.5 15.5V4.5Z"
          fill="#E5E9E5"
        />
        <path
          d="M3.5 4.5C3.5 3.94772 3.94772 3.5 4.5 3.5H15.5C16.0523 3.5 16.5 3.94772 16.5 4.5V15.5C16.5 16.0523 16.0523 16.5 15.5 16.5H4.5C3.94772 16.5 3.5 16.0523 3.5 15.5V4.5Z"
          stroke="#2A2A2A"
          stroke-width="2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_47_6988"
          x="0.5"
          y="0.5"
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
            radius="2"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_47_6988"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.739787 0 0 0 0 0.775858 0 0 0 0 0.809155 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_47_6988"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_47_6988"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default QodeSvg476988
