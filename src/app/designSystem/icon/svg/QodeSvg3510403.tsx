// id='35:10403'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg3510403: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "21",
    height: "21",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 0.5C5.20156 0.5 0.5 5.20156 0.5 11C0.5 16.7984 5.20156 21.5 11 21.5C16.7984 21.5 21.5 16.7984 21.5 11C21.5 5.20156 16.7984 0.5 11 0.5ZM14.8766 14.9891L13.3297 14.982L11 12.2047L8.67266 14.9797L7.12344 14.9867C7.02031 14.9867 6.93594 14.9047 6.93594 14.7992C6.93594 14.7547 6.95234 14.7125 6.98047 14.6773L10.0297 11.0445L6.98047 7.41406C6.95215 7.37971 6.93643 7.3367 6.93594 7.29219C6.93594 7.18906 7.02031 7.10469 7.12344 7.10469L8.67266 7.11172L11 9.88906L13.3273 7.11406L14.8742 7.10703C14.9773 7.10703 15.0617 7.18906 15.0617 7.29453C15.0617 7.33906 15.0453 7.38125 15.0172 7.41641L11.9727 11.0469L15.0195 14.6797C15.0477 14.7148 15.0641 14.757 15.0641 14.8016C15.0641 14.9047 14.9797 14.9891 14.8766 14.9891Z"
        fill="black"
        fillOpacity="0.45"
      />
    </svg>
  )
}

export default QodeSvg3510403
