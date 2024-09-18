// id='234:5451'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2345451: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "16",
    height: "16",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75 1C4.88438 1 1.75 4.13438 1.75 8C1.75 11.8656 4.88438 15 8.75 15C12.6156 15 15.75 11.8656 15.75 8C15.75 4.13438 12.6156 1 8.75 1ZM11.7734 5.71406L8.48281 10.2766C8.28437 10.5531 7.87344 10.5531 7.675 10.2766L5.72656 7.57656C5.66719 7.49375 5.72656 7.37813 5.82812 7.37813H6.56094C6.72031 7.37813 6.87187 7.45469 6.96562 7.58594L8.07812 9.12969L10.5344 5.72344C10.6281 5.59375 10.7781 5.51562 10.9391 5.51562H11.6719C11.7734 5.51562 11.8328 5.63125 11.7734 5.71406Z"
        fill="#52C41A"
      />
    </svg>
  )
}

export default QodeSvg2345451
