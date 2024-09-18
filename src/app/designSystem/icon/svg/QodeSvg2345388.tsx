// id='234:5388'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2345388: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "8",
    height: "8",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.45">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.15469 4L7.20547 1.55547C7.23985 1.51484 7.21094 1.45312 7.15781 1.45312H6.53438C6.49766 1.45312 6.4625 1.46953 6.43828 1.49766L4.74688 3.51406L3.05547 1.49766C3.03203 1.46953 2.99688 1.45312 2.95938 1.45312H2.33594C2.28281 1.45312 2.25391 1.51484 2.28828 1.55547L4.33906 4L2.28828 6.44453C2.25391 6.48516 2.28281 6.54688 2.33594 6.54688H2.95938C2.9961 6.54688 3.03125 6.53047 3.05547 6.50234L4.74688 4.48594L6.43828 6.50234C6.46172 6.53047 6.49688 6.54688 6.53438 6.54688H7.15781C7.21094 6.54688 7.23985 6.48516 7.20547 6.44453L5.15469 4Z"
          fill="black"
        />
      </g>
    </svg>
  )
}

export default QodeSvg2345388
