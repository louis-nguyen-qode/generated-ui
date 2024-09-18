// id='204:1004'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2041004: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "13.895126342773438",
    height: "14.539749145507812",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.6816 2.84513L7.54003 0.879883L7.57838 4.40329L6.52615 4.49553C4.82926 4.61084 2.85999 4.72616 1.69477 4.72616C-0.224067 4.72616 -1.02207 6.9902 3.9445 7.38125L1.27608 6.78366C1.27608 6.78366 -0.911105 8.10418 1.78454 9.08981C1.78454 9.08981 0.190564 10.3101 2.35051 11.6767C1.76134 15.1901 7.64394 15.7456 9.53553 15.2763C11.4281 14.8051 13.806 12.911 14.0623 10.1025C14.3447 7.00926 13.1644 4.65597 10.6826 2.84513"
        fill="#FFC6A0"
      />
    </svg>
  )
}

export default QodeSvg2041004
