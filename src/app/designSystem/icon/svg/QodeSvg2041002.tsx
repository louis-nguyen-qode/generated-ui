// id='204:1002'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2041002: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "27.566787719726562",
    height: "33.07939147949219",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 29 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.2438 11.4233H8.68829L0.761775 0.920203L1.18044 0.609375L8.94857 10.9029H28.2438V11.4233ZM0.709313 33.6888L0.677032 25.4899L1.20062 25.4879L1.2329 33.6868L0.709313 33.6888Z"
        fill="#CC9B6E"
      />
    </svg>
  )
}

export default QodeSvg2041002
