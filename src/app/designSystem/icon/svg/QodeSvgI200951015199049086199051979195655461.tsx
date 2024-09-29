// id='I2009:51015;1990:49086;1990:51979;1956:55461'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI200951015199049086199051979195655461: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "65",
    height: "65",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M65.3994 32.5C65.3994 50.4493 50.8487 65 32.8994 65C14.9502 65 0.399414 50.4493 0.399414 32.5C0.399414 14.5507 14.9502 0 32.8994 0C50.8487 0 65.3994 14.5507 65.3994 32.5ZM6.89941 32.5C6.89941 46.8594 18.54 58.5 32.8994 58.5C47.2588 58.5 58.8994 46.8594 58.8994 32.5C58.8994 18.1406 47.2588 6.5 32.8994 6.5C18.54 6.5 6.89941 18.1406 6.89941 32.5Z"
        fill="#E3E3E3"
      />
    </svg>
  )
}

export default QodeSvgI200951015199049086199051979195655461
