// id='204:859'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg204859: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "9.939041137695312",
    height: "2.841644287109375",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.057 2.11961C10.0347 2.83288 9.59855 3.39909 9.08328 3.38309C8.56598 3.36708 8.16634 2.77586 8.18866 2.06259C8.20996 1.34933 8.64713 0.784115 9.1624 0.79912C9.6797 0.815126 10.0793 1.40635 10.057 2.11961ZM1.98915 2.37671C1.96684 3.08997 1.53067 3.65519 1.01439 3.64018C0.498099 3.62417 0.0974473 3.03295 0.119762 2.31969C0.142077 1.60642 0.578232 1.04021 1.09452 1.05621C1.61182 1.07222 2.01147 1.66244 1.98915 2.37671Z"
        fill="#552950"
      />
    </svg>
  )
}

export default QodeSvg204859
