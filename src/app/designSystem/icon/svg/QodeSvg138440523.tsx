// id='1384:40523'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg138440523: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "31.512605667114258",
    height: "31.512601852416992",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.2096 15.79C31.2096 24.2483 24.3528 31.1051 15.8945 31.1051C7.43618 31.1051 0.57936 24.2483 0.57936 15.79C0.57936 7.33168 7.43618 0.474868 15.8945 0.474868C24.3528 0.474868 31.2096 7.33168 31.2096 15.79Z"
        fill="url(#paint0_linear_1384_40523)"
        stroke="url(#paint1_linear_1384_40523)"
        stroke-width="0.882353"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1384_40523"
          x1="2.99157"
          y1="3.93507"
          x2="22.5464"
          y2="32.9072"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5ED680" />
          <stop offset="0.795319" stop-color="#31AE54" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1384_40523"
          x1="2.99157"
          y1="3.93507"
          x2="22.5464"
          y2="32.9072"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.187037" stop-color="#7EF76B" />
          <stop offset="1" stop-color="#19690C" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg138440523
