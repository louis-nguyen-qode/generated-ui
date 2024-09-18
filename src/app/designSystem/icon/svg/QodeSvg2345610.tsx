// id='234:5610'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2345610: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "150",
    height: "62",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 151 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_234_5610)">
        <path d="M150.75 28H0.75V34H150.75V28Z" fill="#F5F5F5" />
        <path d="M150.75 14H0.75V20H150.75V14Z" fill="#F5F5F5" />
        <path d="M150.75 0H0.75V6H150.75V0Z" fill="#F5F5F5" />
        <path d="M150.75 42H0.75V48H150.75V42Z" fill="#F5F5F5" />
        <path d="M80.75 56H0.75V62H80.75V56Z" fill="#F5F5F5" />
      </g>
      <defs>
        <clipPath id="clip0_234_5610">
          <rect
            width={width}
            height={height}
            fill="white"
            transform="translate(0.75)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvg2345610
