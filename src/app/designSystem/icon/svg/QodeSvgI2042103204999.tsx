// id='I204:2103;204:999'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI2042103204999: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "38.75624084472656",
    height: "10.398796081542969",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 39 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.6473 10.8387H0.739227C0.643421 10.839 0.549392 10.813 0.467418 10.7637C0.385445 10.7145 0.318682 10.6437 0.274426 10.5593C0.23017 10.4748 0.210127 10.3799 0.216484 10.2849C0.22284 10.1899 0.255346 10.0984 0.310463 10.0205L6.74692 0.883127C6.94163 0.605385 7.26144 0.439941 7.60444 0.439941H38.9716L31.6473 10.8387Z"
        fill="#F2D7AD"
      />
    </svg>
  )
}

export default QodeSvgI2042103204999
