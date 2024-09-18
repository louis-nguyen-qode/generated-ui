// id='I204:2019;204:955'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI2042019204955: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "254",
    height: "252.4465789794922",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 254 253"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 127.273V125.172C0 56.0418 56.3866 0 125.943 0H128.057C197.613 0 254 56.0418 254 125.172V127.274C254 196.405 197.613 252.447 128.057 252.447H125.943C56.3866 252.448 0 196.405 0 127.274"
        fill="#E4EBF7"
      />
    </svg>
  )
}

export default QodeSvgI2042019204955
