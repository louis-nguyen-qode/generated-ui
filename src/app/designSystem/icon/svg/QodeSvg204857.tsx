// id='204:857'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg204857: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "23.776657104492188",
    height: "24.16590118408203",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.69193 18.2372C4.69193 18.2372 7.41537 24.4415 16.46 24.7616C24.392 25.0417 25.5615 17.751 24.0005 7.25007L23.0784 1.76501C16.8729 -1.13307 7.37885 2.30522 7.37885 2.30522C7.37885 2.30522 6.79461 4.34998 7.18613 7.81127C4.87755 9.87805 5.33602 13.4314 5.33602 13.4314C5.33602 13.4314 4.41806 11.5087 3.32767 11.1095C2.45536 10.7894 1.40352 11.1985 0.972432 13.0902C-0.0824571 17.724 4.69193 18.2372 4.69193 18.2372Z"
        fill="#FFC6A0"
      />
    </svg>
  )
}

export default QodeSvg204857
