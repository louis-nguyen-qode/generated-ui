// id='4:1667'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg41667: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "21.00703239440918",
    height: "12.00234317779541",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.94062 12.0594C10.5266 12.6453 11.4781 12.6453 12.0641 12.0594L21.0641 3.05938C21.65 2.47344 21.65 1.52188 21.0641 0.935938C20.4781 0.35 19.5266 0.35 18.9406 0.935938L11 8.87656L3.05937 0.940625C2.47344 0.354687 1.52187 0.354687 0.935937 0.940625C0.35 1.52656 0.35 2.47813 0.935937 3.06406L9.93594 12.0641L9.94062 12.0594Z"
        fill="black"
      />
    </svg>
  )
}

export default QodeSvg41667
