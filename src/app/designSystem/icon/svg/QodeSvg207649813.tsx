// id='2076:49813'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg207649813: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "48",
    height: "50.587791442871094",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 22L25.3032 0.952926C25.1226 0.38541 24.5956 0 24 0C23.4044 0 22.8774 0.38541 22.6968 0.952926L16 22L0.585786 37.4142C0.210714 37.7893 0 38.298 0 38.8284L0 49.5858C0 50.4767 1.07714 50.9229 1.7071 50.2929L16 36L21.4472 46.8944C21.786 47.572 22.4785 48 23.2361 48H24.7639C25.5215 48 26.214 47.572 26.5528 46.8944L32 36L46.2929 50.2929C46.9229 50.9229 48 50.4767 48 49.5858V38.8284C48 38.298 47.7893 37.7893 47.4142 37.4142L32 22Z"
        fill="url(#paint0_linear_2076_49813)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2076_49813"
          x1="24"
          y1="0"
          x2="24"
          y2="50.5878"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#E2E5E9" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg207649813
