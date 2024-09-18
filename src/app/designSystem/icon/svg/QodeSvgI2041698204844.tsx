// id='I204:1698;204:844'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI2041698204844: React.FC<IconProps> = ({
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
        d="M7.62218 79.9312C5.8439 79.9309 4.13855 79.234 2.88122 77.9938C1.62388 76.7535 0.917541 75.0715 0.917542 73.3177V7.18497C0.939238 5.44519 1.65521 3.78392 2.91031 2.5612C4.16541 1.33848 5.85851 0.652832 7.62267 0.652832C9.38684 0.652832 11.0799 1.33848 12.335 2.5612C13.5901 3.78392 14.3061 5.44519 14.3278 7.18497V73.3177C14.3276 75.0714 13.6211 76.7531 12.3638 77.9931C11.1065 79.2331 9.40128 79.9299 7.62318 79.9302"
        fill="#5BA02E"
      />
    </svg>
  )
}

export default QodeSvgI2041698204844
