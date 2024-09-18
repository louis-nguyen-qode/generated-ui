// id='234:4290'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2344290: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "150",
    height: "93",
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
      <g clip-path="url(#clip0_234_4290)">
        <path
          d="M143.75 2H7.75C4.43629 2 1.75 4.68629 1.75 8V26C1.75 29.3137 4.43629 32 7.75 32H143.75C147.064 32 149.75 29.3137 149.75 26V8C149.75 4.68629 147.064 2 143.75 2Z"
          fill="white"
        />
        <path
          opacity="0.15"
          d="M148.25 1.5H3.25C2.14543 1.5 1.25 2.39543 1.25 3.5V30.5C1.25 31.6046 2.14543 32.5 3.25 32.5H148.25C149.355 32.5 150.25 31.6046 150.25 30.5V3.5C150.25 2.39543 149.355 1.5 148.25 1.5Z"
          stroke="black"
        />
        <path d="M65.75 12H9.75V22H65.75V12Z" fill="#F5F5F5" />
        <path
          d="M143.75 37H6.75C3.43629 37 0.75 39.6863 0.75 43V87C0.75 90.3137 3.43629 93 6.75 93H143.75C147.064 93 149.75 90.3137 149.75 87V43C149.75 39.6863 147.064 37 143.75 37Z"
          fill="#F5F5F5"
        />
        <g style={{ mixBlendMode: "multiply" }}>
          <path d="M65.75 49H9.75V57H65.75V49Z" fill="#F5F5F5" />
        </g>
        <path d="M149.75 65H0.75V89H149.75V65Z" fill="#BAE0FF" />
        <path d="M78.75 73H9.75V81H78.75V73Z" fill="#1677FF" />
      </g>
      <defs>
        <clipPath id="clip0_234_4290">
          <rect
            width={width}
            height={height}
            fill="white"
            transform="translate(0.75 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvg2344290
