// id='1:31'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg131: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "19.200000762939453",
    height: "18",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.3 2.2H12.7C12.865 2.2 13 2.335 13 2.5V4H7V2.5C7 2.335 7.135 2.2 7.3 2.2ZM5.2 2.5V4H2.8C1.47625 4 0.4 5.07625 0.4 6.4V10H7.6H12.4H19.6V6.4C19.6 5.07625 18.5238 4 17.2 4H14.8V2.5C14.8 1.34125 13.8588 0.4 12.7 0.4H7.3C6.14125 0.4 5.2 1.34125 5.2 2.5ZM19.6 11.2H12.4V12.4C12.4 13.0638 11.8638 13.6 11.2 13.6H8.8C8.13625 13.6 7.6 13.0638 7.6 12.4V11.2H0.4V16C0.4 17.3238 1.47625 18.4 2.8 18.4H17.2C18.5238 18.4 19.6 17.3238 19.6 16V11.2Z"
        fill="black"
        fillOpacity="0.88"
      />
    </svg>
  )
}

export default QodeSvg131
