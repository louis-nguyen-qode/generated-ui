// id='3026:28992'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg302628992: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0C5.241 0 0 4.95286 0 11.6397C0 15.1376 1.434 18.1615 3.768 20.2494C3.963 20.4234 4.083 20.6694 4.089 20.9334L4.155 23.0694C4.15981 23.2265 4.20314 23.3801 4.2812 23.5166C4.35926 23.6531 4.46965 23.7683 4.60267 23.8521C4.73569 23.936 4.88726 23.9859 5.04408 23.9974C5.20089 24.009 5.35814 23.9818 5.502 23.9183L7.884 22.8684C8.085 22.7784 8.313 22.7634 8.526 22.8204C9.621 23.1204 10.785 23.2824 12 23.2824C18.759 23.2824 24 18.3295 24 11.6427C24 4.95586 18.759 0 12 0Z"
        fill="url(#paint0_radial_3026_28992)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_3026_28992"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(4.02 23.9993) scale(26.4 26.3993)"
        >
          <stop stop-color="#0099FF" />
          <stop offset="0.6" stop-color="#A033FF" />
          <stop offset="0.9" stop-color="#FF5280" />
          <stop offset="1" stop-color="#FF7061" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg302628992
