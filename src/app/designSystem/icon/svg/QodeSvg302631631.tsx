// id='3026:31631'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg302631631: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 11.5C4 7.63401 7.13401 4.5 11 4.5C14.866 4.5 18 7.63401 18 11.5C18 13.3858 17.2543 15.0974 16.0417 16.3561C16.0073 16.3825 15.9743 16.4114 15.9428 16.4429C15.9113 16.4744 15.8824 16.5074 15.856 16.5418C14.5973 17.7543 12.8857 18.5 11 18.5C7.13401 18.5 4 15.366 4 11.5ZM16.6176 18.5319C15.078 19.7635 13.125 20.5 11 20.5C6.02944 20.5 2 16.4706 2 11.5C2 6.52944 6.02944 2.5 11 2.5C15.9706 2.5 20 6.52944 20 11.5C20 13.625 19.2635 15.5781 18.0319 17.1177L21.707 20.7929C22.0975 21.1834 22.0975 21.8166 21.707 22.2071C21.3165 22.5976 20.6833 22.5976 20.2928 22.2071L16.6176 18.5319Z"
        fill="#1597F4"
      />
    </svg>
  )
}

export default QodeSvg302631631
