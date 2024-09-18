// id='166:9202'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg1669202: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "12",
    height: "12",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_166_9202)">
        <path
          d="M0.704102 3.60137C0.704102 2.93949 1.24223 2.40137 1.9041 2.40137H6.7041C7.36598 2.40137 7.9041 2.93949 7.9041 3.60137V8.40137C7.9041 9.06324 7.36598 9.60137 6.7041 9.60137H1.9041C1.24223 9.60137 0.704102 9.06324 0.704102 8.40137V3.60137ZM11.1872 3.07262C11.3822 3.17762 11.5041 3.38012 11.5041 3.60137V8.40137C11.5041 8.62262 11.3822 8.82512 11.1872 8.93012C10.9922 9.03512 10.756 9.02387 10.5704 8.90012L8.77035 7.70012L8.5041 7.52199V7.20137V4.80137V4.48074L8.77035 4.30262L10.5704 3.10262C10.7541 2.98074 10.9904 2.96762 11.1872 3.07262Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_166_9202">
          <rect
            width={width}
            height={height}
            fill="white"
            transform="translate(0.104004 0.00146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvg1669202
