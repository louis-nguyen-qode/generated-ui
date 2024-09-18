// id='I204:2019;204:1001'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI20420192041001: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "28.250289916992188",
    height: "10.399795532226562",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.6988 10.8387H9.86462C9.53978 10.8387 9.21941 10.7635 8.92889 10.6191C8.63838 10.4746 8.38573 10.2649 8.19095 10.0065L0.971619 0.439941H21.1133C21.6076 0.439941 22.0717 0.670559 22.3683 1.06361L29.1175 10.0075C29.1757 10.0848 29.2111 10.1767 29.2198 10.2729C29.2285 10.369 29.2101 10.4657 29.1666 10.5521C29.1232 10.6384 29.0564 10.7111 28.9738 10.7619C28.8912 10.8127 28.796 10.8396 28.6988 10.8397"
        fill="#F4D19D"
      />
    </svg>
  )
}

export default QodeSvgI20420192041001
