// id='204:9572'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2049572: React.FC<IconProps> = ({
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
      <g clip-path="url(#clip0_204_9572)">
        <path
          d="M6 0.75C3.10078 0.75 0.75 3.10078 0.75 6C0.75 8.89922 3.10078 11.25 6 11.25C8.89922 11.25 11.25 8.89922 11.25 6C11.25 3.10078 8.89922 0.75 6 0.75ZM7.93828 7.99453L7.16484 7.99102L6 6.60234L4.83633 7.98984L4.06172 7.99336C4.01016 7.99336 3.96797 7.95234 3.96797 7.89961C3.96797 7.87734 3.97617 7.85625 3.99023 7.83867L5.51484 6.02227L3.99023 4.20703C3.97607 4.18986 3.96822 4.16835 3.96797 4.14609C3.96797 4.09453 4.01016 4.05234 4.06172 4.05234L4.83633 4.05586L6 5.44453L7.16367 4.05703L7.93711 4.05352C7.98867 4.05352 8.03086 4.09453 8.03086 4.14727C8.03086 4.16953 8.02266 4.19063 8.00859 4.2082L6.48633 6.02344L8.00977 7.83984C8.02383 7.85742 8.03203 7.87852 8.03203 7.90078C8.03203 7.95234 7.98984 7.99453 7.93828 7.99453Z"
          fill="#DC3812"
        />
      </g>
      <defs>
        <clipPath id="clip0_204_9572">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvg2049572
