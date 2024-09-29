// id='43:8733'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg438733: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "20",
    height: "20",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.29414 13.7063C9.68477 14.0969 10.3191 14.0969 10.7098 13.7063L15.7098 8.70627C16.1004 8.31565 16.1004 7.68127 15.7098 7.29065C15.3191 6.90002 14.6848 6.90002 14.2941 7.29065L10.0004 11.5844L5.70664 7.29377C5.31602 6.90315 4.68164 6.90315 4.29102 7.29377C3.90039 7.6844 3.90039 8.31877 4.29102 8.7094L9.29102 13.7094L9.29414 13.7063Z"
        fill="black"
        fillOpacity="0.88"
      />
    </svg>
  )
}

export default QodeSvg438733
