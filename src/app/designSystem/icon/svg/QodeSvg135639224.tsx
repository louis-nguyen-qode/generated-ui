// id='1356:39224'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg135639224: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "103",
    height: "103",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 103 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_1356_39224)">
        <circle cx="51.5" cy="52" r="51.5" fill="#DEFFE7" />
      </g>
      <circle cx="51.5" cy="52" r="51" stroke="#8DF9AA" />
      <defs>
        <filter
          id="filter0_i_1356_39224"
          x="0"
          y="0.5"
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
            radius="2"
            operator="erode"
            in="SourceAlpha"
            result="effect1_innerShadow_1356_39224"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.229392 0 0 0 0 0.754167 0 0 0 0 0.376329 0 0 0 0.35 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1356_39224"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default QodeSvg135639224
