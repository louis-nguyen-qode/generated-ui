// id='14:424'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg14424: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "19.200000762939453",
    height: "16.419342041015625",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.185 10.665L8.96125 16.9913C9.2425 17.2538 9.61375 17.4 10 17.4C10.3863 17.4 10.7575 17.2538 11.0388 16.9913L17.815 10.665C18.955 9.60375 19.6 8.115 19.6 6.55875V6.34125C19.6 3.72 17.7063 1.485 15.1225 1.05375C13.4125 0.76875 11.6725 1.3275 10.45 2.55L10 3L9.55 2.55C8.3275 1.3275 6.5875 0.76875 4.8775 1.05375C2.29375 1.485 0.4 3.72 0.4 6.34125V6.55875C0.4 8.115 1.045 9.60375 2.185 10.665Z"
        fill="#464646"
      />
    </svg>
  )
}

export default QodeSvg14424
