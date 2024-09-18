// id='204:868'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg204868: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "37.04188537597656",
    height: "25.841049194335938",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 38 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.974659 0.933617L0.830627 6.25561C0.830627 6.25561 6.90942 10.7293 12.9466 15.4611C17.4928 19.0244 21.9619 22.9188 24.0889 24.1263C28.9617 26.8933 33.1163 27.4826 35.3235 25.935C39.4527 23.0399 39.7591 16.0533 27.071 10.6663C22.7388 8.82757 10.6959 4.30388 0.974659 0.932617"
        fill="#FFC6A0"
      />
    </svg>
  )
}

export default QodeSvg204868
