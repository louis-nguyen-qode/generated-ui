// id='234:4489'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2344489: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "8",
    height: "23",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.45">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.70703 5.90078L4.95234 2.10313C4.85234 1.96563 4.64766 1.96563 4.54844 2.10313L1.79297 5.90078C1.76328 5.94219 1.79219 6 1.84375 6H2.42969C2.46953 6 2.50703 5.98047 2.53047 5.94844L4.75 2.88906L6.96953 5.94844C6.99297 5.98047 7.03047 6 7.07031 6H7.65625C7.70703 6 7.73672 5.94219 7.70703 5.90078Z"
          fill="black"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.6251 17H7.03916C6.99932 17 6.96182 17.0195 6.93838 17.0516L4.71885 20.1109L2.49932 17.0516C2.47588 17.0195 2.43838 17 2.39854 17H1.8126C1.76182 17 1.73213 17.0578 1.76182 17.0992L4.51651 20.8969C4.61651 21.0344 4.82119 21.0344 4.92041 20.8969L7.6751 17.0992C7.70557 17.0578 7.67588 17 7.6251 17Z"
        fill="black"
        fillOpacity="0.45"
      />
    </svg>
  )
}

export default QodeSvg2344489
