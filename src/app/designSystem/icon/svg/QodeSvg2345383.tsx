// id='234:5383'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345383: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "159.5",
    height: "19.5",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 161 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.87777 0.25H155.622C157.334 0.25 157.959 0.419443 158.586 0.754719C159.193 1.07969 159.67 1.55657 159.995 2.16421C160.331 2.79112 160.5 3.41553 160.5 5.12777V14.8722C160.5 16.5845 160.331 17.2089 159.995 17.8358C159.67 18.4434 159.193 18.9203 158.586 19.2453C157.959 19.5806 157.334 19.75 155.622 19.75H5.87777C4.16553 19.75 3.54112 19.5806 2.91421 19.2453C2.30657 18.9203 1.82969 18.4434 1.50472 17.8358C1.16944 17.2089 1 16.5845 1 14.8722V5.12777C1 3.41553 1.16944 2.79112 1.50472 2.16421C1.82969 1.55657 2.30657 1.07969 2.91421 0.754719C3.54112 0.419443 4.16553 0.25 5.87777 0.25Z"
        fill="#FFF1F0"
        stroke="#FFCCC7"
        stroke-width="0.5"
      />
    </svg>
  )
}

export default QodeSvg2345383
