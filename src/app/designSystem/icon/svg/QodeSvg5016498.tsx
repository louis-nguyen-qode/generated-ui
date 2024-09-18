// id='50:16498'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg5016498: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "19.200000762939453",
    height: "14.399999618530273",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.2 0.8C1.20625 0.8 0.4 1.60625 0.4 2.6C0.4 3.16625 0.66625 3.69875 1.12 4.04L9.28 10.16C9.7075 10.4788 10.2925 10.4788 10.72 10.16L18.88 4.04C19.3338 3.69875 19.6 3.16625 19.6 2.6C19.6 1.60625 18.7938 0.8 17.8 0.8H2.2ZM0.4 5V12.8C0.4 14.1237 1.47625 15.2 2.8 15.2H17.2C18.5238 15.2 19.6 14.1237 19.6 12.8V5L11.44 11.12C10.585 11.7612 9.415 11.7612 8.56 11.12L0.4 5Z"
        fill="#464646"
      />
    </svg>
  )
}

export default QodeSvg5016498
