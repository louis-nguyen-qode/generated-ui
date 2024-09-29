// id='1675:53443'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg167553443: React.FC<IconProps> = ({
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
        d="M0.799988 4.80001C0.799988 3.91751 1.51749 3.20001 2.39999 3.20001H8.79999C9.68249 3.20001 10.4 3.91751 10.4 4.80001V11.2C10.4 12.0825 9.68249 12.8 8.79999 12.8H2.39999C1.51749 12.8 0.799988 12.0825 0.799988 11.2V4.80001ZM14.7775 4.09501C15.0375 4.23501 15.2 4.50501 15.2 4.80001V11.2C15.2 11.495 15.0375 11.765 14.7775 11.905C14.5175 12.045 14.2025 12.03 13.955 11.865L11.555 10.265L11.2 10.0275V9.60001V6.40001V5.97251L11.555 5.73501L13.955 4.13501C14.2 3.97251 14.515 3.95501 14.7775 4.09501Z"
        fill="#464646"
      />
    </svg>
  )
}

export default QodeSvg167553443
