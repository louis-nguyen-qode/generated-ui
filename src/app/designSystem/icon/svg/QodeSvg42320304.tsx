// id='423:20304'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg42320304: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "90.00873565673828",
    height: "88.86442565917969",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 90 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M87.1552 80.0326L55.074 48.3206C53.5029 46.7675 50.9707 46.7826 49.4183 48.3543L49.0941 48.6825C47.5416 50.2542 47.5567 52.7873 49.1278 54.3403L81.209 86.0524C82.7801 87.6054 85.3123 87.5903 86.8647 86.0186L87.189 85.6904C88.7414 84.1187 88.7263 81.5857 87.1552 80.0326Z"
        fill="#A5A5A5"
      />
      <path
        d="M60.5969 31.3142C60.5969 47.5047 47.4769 60.6285 31.2941 60.6285C15.1112 60.6285 1.99121 47.5047 1.99121 31.3142C1.99121 15.1237 15.1112 2 31.2941 2C47.4769 2 60.5969 15.1237 60.5969 31.3142Z"
        fill="#F8F8F8"
        stroke="#9A9A9A"
        stroke-width="4"
      />
    </svg>
  )
}

export default QodeSvg42320304
