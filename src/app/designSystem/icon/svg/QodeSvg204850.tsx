// id='204:850'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg204850: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "36.06355285644531",
    height: "28.3092041015625",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 37 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.2564 0.384766L36.3602 4.26721C36.3602 4.26721 33.5374 6.93822 29.9599 10.0164C22.7552 16.2137 16.9736 24.3177 13.7359 26.4625C9.71312 29.1255 3.84225 29.7778 1.38456 26.3445C-2.2193 21.3106 1.85521 11.711 33.2564 0.384766Z"
        fill="#FFC6A0"
      />
    </svg>
  )
}

export default QodeSvg204850
