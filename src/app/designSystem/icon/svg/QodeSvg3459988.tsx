// id='3459:988'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg3459988: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "46",
    height: "46",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={width}
        height={height}
        fill="white"
        fillOpacity="0.01"
        style={{ mixBlendMode: "multiply" }}
      />
      <path
        d="M26.5846 22.8415L26.5847 22.8414L30.9826 18.4416L34.1435 21.6004L34.9969 22.4533V21.2467V11.5037V11.0037H34.4969H24.7542H23.547L24.4007 11.8572L27.5886 15.0448L23.1909 19.4463L23.1906 19.4466L15.0404 27.5892L11.8562 24.4054L10.9993 23.5486L11.0027 24.7603L11.0296 34.4707L11.031 34.9678L11.528 34.9694L21.2381 35.0001L22.4502 35.0039L21.5933 34.1466L18.436 30.988L26.5846 22.8415Z"
        fill="black"
        stroke="white"
      />
    </svg>
  )
}

export default QodeSvg3459988
