// id='234:4245'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2344245: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "16",
    height: "16",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.88">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.7141 7.60626L5.67031 2.1047C5.5875 2.04063 5.46875 2.09845 5.46875 2.20313V3.41095C5.46875 3.48751 5.50469 3.56095 5.56406 3.60782L11.1891 8.00001L5.56406 12.3922C5.50313 12.4391 5.46875 12.5125 5.46875 12.5891V13.7969C5.46875 13.9016 5.58906 13.9594 5.67031 13.8953L12.7141 8.39376C12.9703 8.19376 12.9703 7.80626 12.7141 7.60626Z"
          fill="black"
        />
      </g>
    </svg>
  )
}

export default QodeSvg2344245
