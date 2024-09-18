// id='204:876'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg204876: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "15.814483642578125",
    height: "3.742279052734375",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.27786 1.14874C1.27786 1.14874 3.41908 2.32716 8.05552 2.32716C14.2713 2.32716 16.4845 0.664551 16.4845 0.664551C16.4845 0.664551 17.0981 1.78696 15.8516 2.84536C14.8372 3.70768 12.1757 4.44898 8.30099 4.40496C4.06419 4.35595 2.34086 3.83475 1.41784 3.22752C0.574939 2.67331 0.715929 1.63392 1.27786 1.14874Z"
        fill="#2B0849"
      />
    </svg>
  )
}

export default QodeSvg204876
