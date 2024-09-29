// id='1596:48889'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg159648889: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "16",
    height: "16",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.59251 14.0796C9.87501 12.4746 12.8 8.58461 12.8 6.39961C12.8 3.74961 10.65 1.59961 8.00001 1.59961C5.35001 1.59961 3.20001 3.74961 3.20001 6.39961C3.20001 8.58461 6.12501 12.4746 7.40751 14.0796C7.71501 14.4621 8.28501 14.4621 8.59251 14.0796ZM8.00001 4.79961C8.42436 4.79961 8.83133 4.96818 9.13138 5.26824C9.43144 5.5683 9.60001 5.97526 9.60001 6.39961C9.60001 6.82396 9.43144 7.23092 9.13138 7.53098C8.83133 7.83104 8.42436 7.99961 8.00001 7.99961C7.57567 7.99961 7.1687 7.83104 6.86864 7.53098C6.56858 7.23092 6.40001 6.82396 6.40001 6.39961C6.40001 5.97526 6.56858 5.5683 6.86864 5.26824C7.1687 4.96818 7.57567 4.79961 8.00001 4.79961Z"
        fill="#565656"
      />
    </svg>
  )
}

export default QodeSvg159648889
