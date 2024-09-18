// id='3459:979'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg3459979: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "46",
    height: "46",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={width}
        height={height}
        fill="white"
        fillOpacity="0.01"
        style={{ mixBlendMode: "multiply" }}
      />
      <g filter="url(#filter0_dd_3459_979)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.0326 25.2999H29.1333L15.3333 11.4999V30.4749L19.6493 26.1589L23.6099 35.4895L26.7856 34.1415L23.0326 25.2999Z"
          fill="black"
        />
        <path
          d="M23.788 25.7999H29.1333H30.3404L29.4868 24.9463L15.6868 11.1463L14.8333 10.2928V11.4999V30.4749V31.682L15.6868 30.8284L19.4787 27.0366L23.1496 35.6848L23.345 36.1451L23.8052 35.9497L26.981 34.6017L27.4412 34.4063L27.2459 33.9461L23.788 25.7999Z"
          stroke="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_3459_979"
          x="12.8333"
          y="8.58569"
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
          <feOffset dy="0.75" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3459_979"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.75" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_3459_979"
            result="effect2_dropShadow_3459_979"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_3459_979"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default QodeSvg3459979
