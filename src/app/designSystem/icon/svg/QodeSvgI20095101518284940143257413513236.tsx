// id='I2009:51015;1828:49401;43:25741;35:13236'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI20095101518284940143257413513236: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "16",
    height: "16",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.78961 9.11L7.30711 13.3275C7.49461 13.5025 7.74211 13.6 7.99961 13.6C8.25711 13.6 8.50461 13.5025 8.69211 13.3275L13.2096 9.11C13.9696 8.4025 14.3996 7.41 14.3996 6.3725V6.2275C14.3996 4.48 13.1371 2.99 11.4146 2.7025C10.2746 2.5125 9.11461 2.885 8.29961 3.7L7.99961 4L7.69961 3.7C6.88461 2.885 5.72461 2.5125 4.58461 2.7025C2.86211 2.99 1.59961 4.48 1.59961 6.2275V6.3725C1.59961 7.41 2.02961 8.4025 2.78961 9.11Z"
        fill="white"
      />
    </svg>
  )
}

export default QodeSvgI20095101518284940143257413513236
