// id='186:2983'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg1862983: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "8",
    height: "8",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.32133 1.96436H6.65169C6.60615 1.96436 6.5633 1.98668 6.53651 2.02328L3.9999 5.51971L1.4633 2.02328C1.43651 1.98668 1.39365 1.96436 1.34812 1.96436H0.678475C0.62044 1.96436 0.586511 2.03043 0.62044 2.07775L3.76865 6.41793C3.88294 6.57507 4.11687 6.57507 4.23026 6.41793L7.37848 2.07775C7.4133 2.03043 7.37937 1.96436 7.32133 1.96436Z"
        fill="black"
        fillOpacity="0.45"
      />
    </svg>
  )
}

export default QodeSvg1862983
