// id='I4:124;4:79'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvgI4124479: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1937 2.61374C11.715 2.42624 12.285 2.42624 12.81 2.61374L20.01 5.18624C20.9625 5.52749 21.6 6.43124 21.6 7.44749V16.5525C21.6 17.565 20.9625 18.4725 20.0062 18.8137L12.8062 21.3862C12.285 21.5737 11.715 21.5737 11.19 21.3862L3.98999 18.8137C3.03749 18.4725 2.39999 17.5687 2.39999 16.5525V7.44749C2.39999 6.43499 3.03749 5.52749 3.99374 5.18624L11.1937 2.61374ZM12 4.87499L5.48624 7.19999L12 9.52499L18.5137 7.19999L12 4.87499ZM13.2 18.6975L19.2 16.5562V9.50624L13.2 11.6475V18.6975Z"
        fill="#565656"
      />
    </svg>
  )
}

export default QodeSvgI4124479
