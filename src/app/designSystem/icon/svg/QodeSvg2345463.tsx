// id='234:5463'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345463: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "206",
    height: "96",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 208 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.40332 1H201.097C203.236 1 204.012 1.22278 204.794 1.64112C205.577 2.05946 206.191 2.67335 206.609 3.45557C207.027 4.23779 207.25 5.01368 207.25 7.15332V90.8467C207.25 92.9863 207.027 93.7622 206.609 94.5444C206.191 95.3266 205.577 95.9405 204.794 96.3589C204.012 96.7772 203.236 97 201.097 97H7.40332C5.26368 97 4.48779 96.7772 3.70557 96.3589C2.92335 95.9405 2.30946 95.3266 1.89112 94.5444C1.47278 93.7622 1.25 92.9863 1.25 90.8467L1.25 7.15332C1.25 5.01368 1.47278 4.23779 1.89112 3.45557C2.30946 2.67335 2.92335 2.05946 3.70557 1.64112C4.48779 1.22278 5.26368 1 7.40332 1Z"
        fill="white"
        stroke="#F0F0F0"
      />
    </svg>
  )
}

export default QodeSvg2345463
