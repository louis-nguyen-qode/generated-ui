// id='2653:51720'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg265351720: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "22",
    height: "20.000001907348633",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2653_51720"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <path
          d="M0.799805 0H20.7998V7.94123C20.7998 14.0164 17.1011 19.4795 11.4605 21.7357L10.7998 22L10.1391 21.7357C4.49851 19.4795 0.799805 14.0164 0.799805 7.94123V0Z"
          fill="#005EB8"
        />
      </mask>
      <g mask="url(#mask0_2653_51720)">
        <path d="M0.799805 7H20.7998V22H0.799805V7Z" fill="#F5F7F8" />
        <path
          d="M6.79981 7.00006L2.7998 7.00006L2.79981 22.0001L6.79981 22.0001L6.79981 7.00006Z"
          fill="#DD2033"
        />
        <path
          d="M10.7998 7.00006L14.7998 7.00006V22.0001H10.7998V7.00006Z"
          fill="#DD2033"
        />
        <path
          d="M18.7998 7.00006L21 7.00006V22.0001H18.7998V7.00006Z"
          fill="#DD2033"
        />
      </g>
    </svg>
  )
}

export default QodeSvg265351720
