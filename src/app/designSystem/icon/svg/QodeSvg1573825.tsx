// id='157:3825'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg1573825: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "10",
    height: "10",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_157_3825)">
        <path
          d="M10.1484 5.35156C9.9541 5.35156 9.79688 5.19434 9.79688 5C9.79688 4.41992 9.68359 3.85742 9.45898 3.32715C9.24292 2.81666 8.93022 2.35275 8.53809 1.96094C8.14671 1.56828 7.68269 1.2555 7.17188 1.04004C6.64258 0.816406 6.08008 0.703125 5.5 0.703125C5.30566 0.703125 5.14844 0.545898 5.14844 0.351562C5.14844 0.157227 5.30566 0 5.5 0C6.1748 0 6.83008 0.131836 7.44629 0.393555C8.04199 0.644531 8.57617 1.00586 9.03516 1.46484C9.49414 1.92383 9.85449 2.45898 10.1064 3.05371C10.3672 3.66992 10.499 4.3252 10.499 5C10.5 5.19434 10.3428 5.35156 10.1484 5.35156Z"
          fill="#1597F4"
        />
      </g>
      <defs>
        <clipPath id="clip0_157_3825">
          <rect
            width={width}
            height={height}
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvg1573825
