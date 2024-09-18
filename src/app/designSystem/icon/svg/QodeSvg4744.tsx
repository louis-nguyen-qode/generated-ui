// id='4:744'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg4744: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "11.999063491821289",
    height: "12.002813339233398",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1.2C12 0.53625 11.4638 0 10.8 0H2.4C1.73625 0 1.2 0.53625 1.2 1.2C1.2 1.86375 1.73625 2.4 2.4 2.4H7.90125L0.3525 9.9525C-0.11625 10.4213 -0.11625 11.1825 0.3525 11.6513C0.82125 12.12 1.5825 12.12 2.05125 11.6513L9.6 4.09875V9.6C9.6 10.2638 10.1363 10.8 10.8 10.8C11.4638 10.8 12 10.2638 12 9.6V1.2Z"
        fill="black"
        fillOpacity="0.88"
      />
    </svg>
  )
}

export default QodeSvg4744
