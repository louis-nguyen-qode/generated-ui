// id='78:5125'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg785125: React.FC<IconProps> = ({
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
        d="M12 6.80001C12 7.94751 11.6275 9.00751 11 9.86751L14.165 13.035C14.4775 13.3475 14.4775 13.855 14.165 14.1675C13.8525 14.48 13.345 14.48 13.0325 14.1675L9.86751 11C9.00751 11.63 7.94751 12 6.80001 12C3.92751 12 1.60001 9.67251 1.60001 6.80001C1.60001 3.92751 3.92751 1.60001 6.80001 1.60001C9.67251 1.60001 12 3.92751 12 6.80001ZM6.80001 10.4C7.27276 10.4 7.74089 10.3069 8.17767 10.126C8.61444 9.94506 9.0113 9.67988 9.34559 9.34559C9.67988 9.0113 9.94506 8.61444 10.126 8.17767C10.3069 7.74089 10.4 7.27277 10.4 6.80001C10.4 6.32725 10.3069 5.85912 10.126 5.42235C9.94506 4.98557 9.67988 4.58871 9.34559 4.25442C9.0113 3.92013 8.61444 3.65496 8.17767 3.47404C7.74089 3.29312 7.27276 3.20001 6.80001 3.20001C6.32725 3.20001 5.85912 3.29312 5.42235 3.47404C4.98557 3.65496 4.58871 3.92013 4.25442 4.25442C3.92013 4.58871 3.65496 4.98557 3.47404 5.42235C3.29312 5.85912 3.20001 6.32725 3.20001 6.80001C3.20001 7.27277 3.29312 7.74089 3.47404 8.17767C3.65496 8.61444 3.92013 9.0113 4.25442 9.34559C4.58871 9.67988 4.98557 9.94506 5.42235 10.126C5.85912 10.3069 6.32725 10.4 6.80001 10.4Z"
        fill="#107ECC"
      />
    </svg>
  )
}

export default QodeSvg785125
