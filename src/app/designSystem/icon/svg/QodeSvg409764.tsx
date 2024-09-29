// id='40:9764'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg409764: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "16",
    height: "16",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.79001 9.11001L7.30751 13.3275C7.49501 13.5025 7.74251 13.6 8.00001 13.6C8.25751 13.6 8.50501 13.5025 8.69251 13.3275L13.21 9.11001C13.97 8.40251 14.4 7.41001 14.4 6.37251V6.22751C14.4 4.48001 13.1375 2.99001 11.415 2.70251C10.275 2.51251 9.11501 2.88501 8.30001 3.70001L8.00001 4.00001L7.70001 3.70001C6.88501 2.88501 5.72501 2.51251 4.58501 2.70251C2.86251 2.99001 1.60001 4.48001 1.60001 6.22751V6.37251C1.60001 7.41001 2.03001 8.40251 2.79001 9.11001Z"
        fill="#464646"
      />
    </svg>
  )
}

export default QodeSvg409764
