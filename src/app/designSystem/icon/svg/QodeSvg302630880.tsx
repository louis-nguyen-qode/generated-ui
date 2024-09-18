// id='3026:30880'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg302630880: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "12",
    height: "12",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.16314 0.951904H10.8499L7.16486 5.16365L11.5 10.8949H8.10562L5.44702 7.41892L2.40497 10.8949H0.717216L4.65872 6.38995L0.5 0.951904H3.98055L6.3837 4.12907L9.16314 0.951904ZM8.57115 9.88529H9.50579L3.4727 1.90847H2.46973L8.57115 9.88529Z"
        fill="black"
      />
    </svg>
  )
}

export default QodeSvg302630880
