// id='204:999'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg204999: React.FC<IconProps> = ({
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
        d="M31.6474 10.8387H0.739242C0.643436 10.839 0.549407 10.813 0.467434 10.7637C0.38546 10.7145 0.318698 10.6437 0.274441 10.5593C0.230185 10.4748 0.210143 10.3799 0.216499 10.2849C0.222855 10.1899 0.255362 10.0984 0.310478 10.0205L6.74694 0.883127C6.94165 0.605385 7.26145 0.439941 7.60446 0.439941H38.9716L31.6474 10.8387Z"
        fill="#F2D7AD"
      />
    </svg>
  )
}

export default QodeSvg204999
