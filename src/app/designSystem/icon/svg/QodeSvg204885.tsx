// id='204:885'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg204885: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "12.44769287109375",
    height: "101.55900573730469",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66718 1.08936L2.57297 45.508C2.57297 45.508 3.25155 47.0695 2.34576 48.186C1.44099 49.3024 4.8359 48.8562 3.25154 50.4178C1.66718 51.9804 4.15733 51.5342 3.25154 53.7661C2.65107 55.2466 2.2494 74.7609 2.14594 88.7351M0.937889 101.036H13.3856H0.937889ZM2.1216 96.1759C2.12768 99.5452 2.16217 101.937 2.23317 102.648L2.1216 96.1759ZM2.13681 90.2237C2.12768 91.7543 2.1216 93.2048 2.12058 94.5383L2.13681 90.2237Z"
        stroke="#648BD8"
        stroke-width="1.051"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default QodeSvg204885
