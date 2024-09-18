// id='I3026:31495;35:13236'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI3026314953513236: React.FC<IconProps> = ({
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
      <g clip-path="url(#clip0_6381_57001)">
        <path
          d="M2 6.50313L8 2.05938L14 6.50313V7.98438L9.04688 11.6562C8.74375 11.8812 8.37813 12 8 12C7.62187 12 7.25625 11.8781 6.95312 11.6562L2 7.98438V6.50313ZM8 0C7.62187 0 7.25625 0.121875 6.95312 0.34375L0.809375 4.89687C0.3 5.275 0 5.86875 0 6.50313V14C0 15.1031 0.896875 16 2 16H14C15.1031 16 16 15.1031 16 14V6.50313C16 5.86875 15.7 5.27187 15.1906 4.89687L9.04688 0.34375C8.74375 0.121875 8.37813 0 8 0Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_6381_57001">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvgI3026314953513236
