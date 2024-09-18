// id='234:5073'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345073: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "150",
    height: "94",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 151 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5" clip-path="url(#clip0_234_5073)">
        <path d="M149.75 1H0.75V93H149.75V1Z" stroke="#D9D9D9" />
        <path d="M75.25 7.5H11.25V17.5H75.25V7.5Z" fill="#EBEBEB" />
        <path d="M139.25 33.5H11.25V39.5H139.25V33.5Z" fill="#F5F5F5" />
        <path d="M113.25 56.5H11.25V62.5H113.25V56.5Z" fill="#F5F5F5" />
        <path d="M91.25 79.5H11.25V85.5H91.25V79.5Z" fill="#F5F5F5" />
        <path d="M150.25 24.5H0.25V25.5H150.25V24.5Z" fill="#E0E0E0" />
        <path d="M150.25 47.5H0.25V48.5H150.25V47.5Z" fill="#E0E0E0" />
        <path d="M150.25 70.5H0.25V71.5H150.25V70.5Z" fill="#E0E0E0" />
      </g>
      <defs>
        <clipPath id="clip0_234_5073">
          <rect
            width={width}
            height={height}
            fill="white"
            transform="translate(0.25)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvg2345073
