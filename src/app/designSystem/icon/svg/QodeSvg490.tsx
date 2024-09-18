// id='4:90'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg490: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.3 4.19999H14.7C14.865 4.19999 15 4.33499 15 4.49999V5.99999H9V4.49999C9 4.33499 9.135 4.19999 9.3 4.19999ZM7.2 4.49999V5.99999H4.8C3.47625 5.99999 2.4 7.07624 2.4 8.39999V12H9.6H14.4H21.6V8.39999C21.6 7.07624 20.5238 5.99999 19.2 5.99999H16.8V4.49999C16.8 3.34124 15.8588 2.39999 14.7 2.39999H9.3C8.14125 2.39999 7.2 3.34124 7.2 4.49999ZM21.6 13.2H14.4V14.4C14.4 15.0637 13.8638 15.6 13.2 15.6H10.8C10.1363 15.6 9.6 15.0637 9.6 14.4V13.2H2.4V18C2.4 19.3237 3.47625 20.4 4.8 20.4H19.2C20.5238 20.4 21.6 19.3237 21.6 18V13.2Z"
        fill="#464646"
      />
    </svg>
  )
}

export default QodeSvg490
