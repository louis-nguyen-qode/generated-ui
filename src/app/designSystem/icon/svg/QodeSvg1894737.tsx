// id='189:4737'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg1894737: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "12",
    height: "12",
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
        d="M11.3578 1.6875H10.4216C10.2904 1.6875 10.1658 1.74777 10.0855 1.85089L4.56358 8.84598L1.91581 5.49107C1.87576 5.44022 1.82471 5.3991 1.76648 5.3708C1.70826 5.3425 1.64439 5.32776 1.57965 5.32768H0.643492C0.55376 5.32768 0.504207 5.4308 0.559117 5.50045L4.22742 10.1478C4.39885 10.3647 4.72831 10.3647 4.90108 10.1478L11.4422 1.85893C11.4971 1.79063 11.4475 1.6875 11.3578 1.6875Z"
        fill="white"
      />
    </svg>
  )
}

export default QodeSvg1894737
