// id='2009:51008'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg200951008: React.FC<IconProps> = ({
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
        d="M9.29414 13.7063C9.68477 14.0969 10.3191 14.0969 10.7098 13.7063L15.7098 8.70625C16.1004 8.31563 16.1004 7.68125 15.7098 7.29063C15.3191 6.9 14.6848 6.9 14.2941 7.29063L10.0004 11.5844L5.70664 7.29375C5.31602 6.90313 4.68164 6.90313 4.29102 7.29375C3.90039 7.68438 3.90039 8.31875 4.29102 8.70938L9.29102 13.7094L9.29414 13.7063Z"
        fill="black"
        fillOpacity="0.88"
      />
    </svg>
  )
}

export default QodeSvg200951008
