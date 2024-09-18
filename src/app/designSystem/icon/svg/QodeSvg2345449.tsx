// id='234:5449'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345449: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "152",
    height: "40",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 154 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0055 1L142.494 1C146.061 1 147.354 1.3713 148.657 2.06853C149.961 2.76576 150.984 3.78891 151.681 5.09262C152.379 6.39632 152.75 7.68947 152.75 11.2555V30.7445C152.75 34.3105 152.379 35.6037 151.681 36.9074C150.984 38.2111 149.961 39.2342 148.657 39.9315C147.354 40.6287 146.061 41 142.494 41H11.0055C7.43947 41 6.14632 40.6287 4.84262 39.9315C3.53891 39.2342 2.51576 38.2111 1.81853 36.9074C1.1213 35.6037 0.75 34.3105 0.75 30.7445L0.75 11.2555C0.75 7.68947 1.1213 6.39632 1.81853 5.09262C2.51576 3.78891 3.53891 2.76576 4.84262 2.06853C6.14632 1.3713 7.43947 1 11.0055 1Z"
        fill="white"
        stroke="#F0F0F0"
      />
    </svg>
  )
}

export default QodeSvg2345449
