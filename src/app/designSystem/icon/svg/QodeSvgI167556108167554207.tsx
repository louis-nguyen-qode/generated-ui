// id='I1675:56108;1675:54207'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI167556108167554207: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "55.1298828125",
    height: "54.96684646606445",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M55.1595 27.6065C55.1595 42.5601 43.0009 54.6845 28 54.6845C12.9991 54.6845 0.840464 42.5601 0.840464 27.6065C0.840464 12.6528 12.9991 0.528452 28 0.528452C43.0009 0.528452 55.1595 12.6528 55.1595 27.6065Z"
        fill="url(#paint0_radial_2297_14167)"
        stroke="#D5D5D5"
        stroke-width="0.810811"
      />
      <defs>
        <radialGradient
          id="paint0_radial_2297_14167"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(28 27.6065) rotate(90) scale(27.4834 27.5649)"
        >
          <stop offset="0.47" stop-color="white" />
          <stop offset="1" stop-color="#F9F9F9" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default QodeSvgI167556108167554207
