// id='3026:30872'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg302630872: React.FC<IconProps> = ({
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
      <g clip-path="url(#clip0_3026_30872)">
        <path
          d="M12 6C12 2.68632 9.31368 0 6 0C2.68632 0 0 2.68632 0 6C0 8.81376 1.93728 11.1749 4.55064 11.8234V7.8336H3.31344V6H4.55064V5.20992C4.55064 3.16776 5.47488 2.2212 7.47984 2.2212C7.86 2.2212 8.51592 2.29584 8.78424 2.37024V4.03224C8.64264 4.01736 8.39664 4.00992 8.09112 4.00992C7.10736 4.00992 6.7272 4.38264 6.7272 5.35152V6H8.68704L8.35032 7.8336H6.7272V11.9561C9.69816 11.5973 12.0002 9.06768 12.0002 6H12Z"
          fill="#0866FF"
        />
        <path
          d="M8.35011 7.83359L8.68683 5.99999H6.72699V5.35151C6.72699 4.38263 7.10715 4.00991 8.09091 4.00991C8.39643 4.00991 8.64243 4.01735 8.78403 4.03223V2.37023C8.51571 2.29559 7.85979 2.22119 7.47963 2.22119C5.47467 2.22119 4.55043 3.16775 4.55043 5.20991V5.99999H3.31323V7.83359H4.55043V11.8234C5.01459 11.9386 5.50011 12 5.99979 12C6.24579 12 6.48843 11.9849 6.72675 11.9561V7.83359H8.34987H8.35011Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_3026_30872">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvg302630872
