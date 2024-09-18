// id='3026:30909'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg302630909: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "12",
    height: "12",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3026_30909)">
        <path
          d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
          fill="url(#paint0_linear_3026_30909)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.71601 5.93672C4.46513 5.17466 5.63148 4.67226 6.21507 4.42953C7.88134 3.73647 8.22757 3.61608 8.45324 3.6121C8.50288 3.61123 8.61386 3.62353 8.68574 3.68186C8.74644 3.73111 8.76315 3.79765 8.77114 3.84435C8.77913 3.89105 8.78908 3.99743 8.78117 4.08055C8.69087 5.02929 8.30017 7.33163 8.1014 8.39424C8.01729 8.84387 7.85168 8.99462 7.69135 9.00938C7.34292 9.04144 7.07834 8.77911 6.74087 8.55789C6.21279 8.21173 5.91446 7.99624 5.40187 7.65846C4.80948 7.26808 5.1935 7.05352 5.5311 6.70288C5.61945 6.61111 7.15465 5.21474 7.18436 5.08806C7.18808 5.07222 7.19153 5.01317 7.15644 4.98198C7.12136 4.9508 7.06958 4.96146 7.03222 4.96995C6.97925 4.98197 6.13564 5.53956 4.50138 6.64273C4.26192 6.80716 4.04503 6.88727 3.85071 6.88308C3.63647 6.87845 3.22438 6.76195 2.91803 6.66236C2.54228 6.54022 2.24364 6.47565 2.26964 6.26821C2.28319 6.16017 2.43198 6.04967 2.71601 5.93672Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_3026_30909"
          x1="6"
          y1="0"
          x2="6"
          y2="11.911"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2AABEE" />
          <stop offset="1" stop-color="#229ED9" />
        </linearGradient>
        <clipPath id="clip0_3026_30909">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvg302630909
