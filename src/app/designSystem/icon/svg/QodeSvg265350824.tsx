// id='2653:50824'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg265350824: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "22.888933181762695",
    height: "36.5",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2653_50824"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <path
          d="M11.7999 0C37.3001 20.5001 11.7999 36.5 11.7999 36.5C11.7999 36.5 -14.2 21.0001 11.7999 0Z"
          fill="#FBD381"
        />
      </mask>
      <g mask="url(#mask0_2653_50824)">
        <rect
          x="-2.19995"
          y="27"
          width={width}
          height={height}
          fill="#FBD381"
        />
        <rect
          x="-2.19995"
          y="21"
          width={width}
          height={height}
          fill="#0091DA"
        />
        <rect x="-2.19995" width={width} height={height} fill="#86C5FA" />
        <rect x="9.80005" y="12" width={width} height={height} fill="#936846" />
        <path
          d="M11.3 5L12.8998 8.43139L16.5128 7.57491L14.8947 10.9972L17.8 13.3605L14.1828 14.1966L14.1928 18L11.3 15.6205L8.4072 18L8.41733 14.1966L4.80005 13.3605L7.70531 10.9972L6.08745 7.57491L9.70019 8.43139L11.3 5Z"
          fill="#009B77"
        />
      </g>
    </svg>
  )
}

export default QodeSvg265350824
