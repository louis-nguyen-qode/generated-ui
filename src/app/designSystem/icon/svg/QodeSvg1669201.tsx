// id='166:9201'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg1669201: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "31",
    height: "31",
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
      <circle
        cx="16.1616"
        cy="16.1323"
        r="15.5"
        fill="url(#paint0_radial_166_9201)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_166_9201"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(16.1616 16.1323) rotate(90) scale(15.5)"
        >
          <stop offset="0.204375" stop-color="#545454" />
          <stop offset="1" stop-color="#393939" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg1669201
