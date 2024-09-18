// id='3026:30670'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg302630670: React.FC<IconProps> = ({
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
        d="M3 9.75469L12 3.08906L21 9.75469V11.9766L13.5703 17.4844C13.1156 17.8219 12.5672 18 12 18C11.4328 18 10.8844 17.8172 10.4297 17.4844L3 11.9766V9.75469ZM12 0C11.4328 0 10.8844 0.182813 10.4297 0.515625L1.21406 7.34531C0.45 7.9125 0 8.80313 0 9.75469V21C0 22.6547 1.34531 24 3 24H21C22.6547 24 24 22.6547 24 21V9.75469C24 8.80313 23.55 7.90781 22.7859 7.34531L13.5703 0.515625C13.1156 0.182813 12.5672 0 12 0Z"
        fill="black"
        fillOpacity="0.88"
      />
    </svg>
  )
}

export default QodeSvg302630670
