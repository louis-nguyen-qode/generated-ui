// id='2653:51412'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg265351412: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "22",
    height: "20.000001907348633",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2653_51412"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <path
          d="M0.199829 0.00012207H20.1998V7.94135C20.1998 14.0165 16.5011 19.4796 10.8605 21.7359L10.1998 22.0001L9.53917 21.7359C3.89853 19.4796 0.199829 14.0165 0.199829 7.94135V0.00012207Z"
          fill="#005EB8"
        />
      </mask>
      <g mask="url(#mask0_2653_51412)">
        <rect
          x="0.199829"
          y="10.0001"
          width={width}
          height={height}
          fill="#DD2033"
        />
        <rect
          x="0.199829"
          y="0.00012207"
          width={width}
          height={height}
          fill="#0091DA"
        />
      </g>
    </svg>
  )
}

export default QodeSvg265351412
