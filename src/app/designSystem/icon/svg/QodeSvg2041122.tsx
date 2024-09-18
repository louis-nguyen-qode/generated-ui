// id='204:1122'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2041122: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "7.393019676208496",
    height: "4.587106227874756",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.494 4.89543L7.496 1.70042C7.49742 1.52674 7.43103 1.35936 7.31095 1.23387C7.19087 1.10837 7.02658 1.03467 6.853 1.02842C4.953 0.967423 2.912 0.955429 0.759003 1.01843C0.584164 1.02387 0.418264 1.09696 0.296265 1.22232C0.174265 1.34767 0.105696 1.5155 0.105003 1.69043L0.103004 4.88243C0.103004 5.25843 0.408005 5.55942 0.783005 5.55142C2.642 5.50942 4.657 5.50843 6.803 5.56343C7.179 5.57343 7.493 5.27243 7.494 4.89543Z"
        fill="#192064"
      />
    </svg>
  )
}

export default QodeSvg2041122
