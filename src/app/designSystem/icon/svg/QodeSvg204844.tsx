// id='204:844'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg204844: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "13.4102783203125",
    height: "79.27833557128906",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.62219 79.9312C5.84392 79.9309 4.13857 79.234 2.88123 77.9938C1.6239 76.7535 0.917557 75.0715 0.917557 73.3177V7.18497C0.939254 5.44519 1.65523 3.78392 2.91033 2.5612C4.16543 1.33848 5.85852 0.652832 7.62269 0.652832C9.38685 0.652832 11.08 1.33848 12.3351 2.5612C13.5902 3.78392 14.3061 5.44519 14.3278 7.18497V73.3177C14.3276 75.0714 13.6211 76.7531 12.3638 77.9931C11.1065 79.2331 9.4013 79.9299 7.6232 79.9302"
        fill="#5BA02E"
      />
    </svg>
  )
}

export default QodeSvg204844
