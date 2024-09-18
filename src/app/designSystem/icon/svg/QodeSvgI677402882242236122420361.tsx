// id='I677:40288;224:22361;224:20361'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvgI677402882242236122420361: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "76.66667175292969",
    height: "76.66667175292969",
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
      <g filter="url(#filter0_f_756_32020)">
        <circle
          cx="44.9998"
          cy="45.0003"
          r="38.3333"
          fill="url(#paint0_angular_756_32020)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_756_32020"
          x="-0.000163555"
          y="0.000324726"
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
            stdDeviation="3.33333"
            result="effect1_foregroundBlur_756_32020"
          />
        </filter>
        <radialGradient
          id="paint0_angular_756_32020"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(44.9998 45.0003) rotate(90) scale(38.3333)"
        >
          <stop offset="0.135" stop-color="#49CBFF" />
          <stop offset="0.39" stop-color="#86F0FF" />
          <stop offset="0.695" stop-color="#50FFA0" />
          <stop offset="1" stop-color="#7EA2FF" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default QodeSvgI677402882242236122420361
