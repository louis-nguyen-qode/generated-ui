// id='234:5360'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2345360: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "8",
    height: "8",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.75 1.00012H1.75C1.47386 1.00012 1.25 1.22398 1.25 1.50012V8.50012C1.25 8.77626 1.47386 9.00012 1.75 9.00012H8.75C9.02614 9.00012 9.25 8.77626 9.25 8.50012V1.50012C9.25 1.22398 9.02614 1.00012 8.75 1.00012Z"
        fill="#F4F4F4"
        stroke="#DEDEDE"
      />
      <path
        d="M7.75902 3.00012H7.36895C7.31426 3.00012 7.26237 3.02523 7.22888 3.0682L4.9281 5.98282L3.82487 4.58494C3.79083 4.54197 3.73949 4.51686 3.6848 4.51686H3.29473C3.25734 4.51686 3.2367 4.55983 3.25958 4.58885L4.78804 6.52523C4.85947 6.61564 4.99674 6.61564 5.06873 6.52523L7.79418 3.07155C7.81705 3.04309 7.79641 3.00012 7.75902 3.00012Z"
        fill="#BABABA"
        stroke="#B8B8B8"
      />
    </svg>
  )
}

export default QodeSvg2345360
