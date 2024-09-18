// id='204:971'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg204971: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "26.377456665039062",
    height: "17.279754638671875",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.984566 15.3747C0.984566 15.3747 5.31758 17.4212 8.40365 16.3985C11.2496 15.456 12.9737 17.0683 15.5463 17.5796C18.1189 18.091 22.4811 18.6826 27.3357 16.3163C27.2318 10.7915 20.3857 12.3256 15.2699 9.58528C12.6842 8.20158 11.4524 4.85062 11.64 0.762695H2.15483C2.15483 0.762695 0.750513 11.3109 0.984566 15.3747Z"
        fill="#CBD1D1"
      />
    </svg>
  )
}

export default QodeSvg204971
