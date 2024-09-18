// id='204:965'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg204965: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "13.555892944335938",
    height: "9.51041030883789",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.06217 9.71256H5.07621C3.80839 9.70912 2.59349 9.20711 1.69691 8.3162C0.800337 7.4253 0.294972 6.21792 0.291245 4.95786C0.294706 3.69762 0.799954 2.48999 1.69656 1.59886C2.59317 0.70774 3.80822 0.205588 5.07621 0.202148H9.06217C10.3302 0.205588 11.5452 0.70774 12.4418 1.59886C13.3384 2.48999 13.8437 3.69762 13.8471 4.95786C13.8434 6.21792 13.3381 7.4253 12.4415 8.3162C11.5449 9.20711 10.33 9.70912 9.06217 9.71256Z"
        fill="white"
      />
    </svg>
  )
}

export default QodeSvg204965
