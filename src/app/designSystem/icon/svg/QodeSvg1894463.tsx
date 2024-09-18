// id='189:4463'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg1894463: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "256",
    height: "160",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 256 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_189_4463)">
        <path
          d="M0 6C0 2.6863 2.68629 0 6 0H250C253.314 0 256 2.68629 256 6V154C256 157.314 253.314 160 250 160H6C2.68629 160 0 157.314 0 154V6Z"
          fill="#1597F4"
        />
        <path
          d="M0 6C0 2.6863 2.68629 0 6 0H250C253.314 0 256 2.68629 256 6V154C256 157.314 253.314 160 250 160H6C2.68629 160 0 157.314 0 154V6Z"
          fill="url(#paint0_linear_189_4463)"
        />
        <path
          d="M0 6C0 2.6863 2.68629 0 6 0H250C253.314 0 256 2.68629 256 6V154C256 157.314 253.314 160 250 160H6C2.68629 160 0 157.314 0 154V6Z"
          fill="url(#paint1_linear_189_4463)"
        />
        <circle cx="232" r="5" stroke="white" stroke-width="2" />
      </g>
      <path
        d="M0.5 6C0.5 2.96244 2.96243 0.5 6 0.5H250C253.038 0.5 255.5 2.96243 255.5 6V154C255.5 157.038 253.038 159.5 250 159.5H6C2.96243 159.5 0.5 157.038 0.5 154V6Z"
        stroke="black"
        stroke-opacity="0.06"
      />
      <defs>
        <linearGradient
          id="paint0_linear_189_4463"
          x1="1.90735e-06"
          y1="80"
          x2="256"
          y2="80"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_189_4463"
          x1="128"
          y1="0"
          x2="128"
          y2="160"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0" />
          <stop offset="1" />
        </linearGradient>
        <clipPath id="clip0_189_4463">
          <path
            d="M0 6C0 2.6863 2.68629 0 6 0H250C253.314 0 256 2.68629 256 6V154C256 157.314 253.314 160 250 160H6C2.68629 160 0 157.314 0 154V6Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvg1894463
