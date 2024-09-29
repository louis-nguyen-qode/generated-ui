// id='1384:40540'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg138440540: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "29.41176414489746",
    height: "29.411760330200195",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.7128 4.68494C30.3731 10.1647 30.5193 19.1954 25.0396 24.8556C19.5598 30.5158 10.5291 30.6621 4.86889 25.1824C-0.791319 19.7026 -0.937606 10.6719 4.54215 5.01168C10.0219 -0.648529 19.0526 -0.794817 24.7128 4.68494Z"
        fill="url(#paint0_linear_1384_40540)"
        stroke="url(#paint1_linear_1384_40540)"
        stroke-width="0.882353"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1384_40540"
          x1="-1.53512"
          y1="15.8899"
          x2="30.5874"
          y2="21.5854"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5ED680" />
          <stop offset="0.795319" stop-color="#31AE54" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1384_40540"
          x1="-1.53512"
          y1="15.8899"
          x2="30.5874"
          y2="21.5854"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.187037" stop-color="#7EF76B" />
          <stop offset="1" stop-color="#19690C" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg138440540
