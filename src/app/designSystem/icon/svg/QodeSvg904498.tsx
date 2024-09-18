// id='90:4498'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg904498: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "506",
    height: "198",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 506 198"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M52.468 198L0 0H42.9908L74.3067 141.879H75.1308L111.666 0H148.064L184.599 141.879H185.423L216.877 0H259.868L207.262 198H166.744L130.346 65.3139H129.522L92.9864 198H52.468Z"
        fill="#A7A7A7"
      />
      <path d="M282.256 198V0H323.736V198H282.256Z" fill="#A7A7A7" />
      <path
        d="M356.7 198V0H436.363C478.118 0 506 26.894 506 67.6466V67.921C506 108.674 478.118 135.568 436.363 135.568H398.18V198H356.7ZM426.199 32.7942H398.18V103.185H426.199C449.961 103.185 463.971 90.5613 463.971 68.0582V67.7838C463.971 45.2807 449.961 32.7942 426.199 32.7942Z"
        fill="#A7A7A7"
      />
    </svg>
  )
}

export default QodeSvg904498
