// id='30:6009'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg306009: React.FC<IconProps> = ({
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
        d="M8.72248 2.05C8.58998 1.775 8.30998 1.6 8.00248 1.6C7.69498 1.6 7.41748 1.775 7.28248 2.05L5.67498 5.3575L2.08498 5.8875C1.78498 5.9325 1.53498 6.1425 1.44248 6.43C1.34998 6.7175 1.42498 7.035 1.63998 7.2475L4.24498 9.825L3.62998 13.4675C3.57998 13.7675 3.70498 14.0725 3.95248 14.25C4.19998 14.4275 4.52748 14.45 4.79748 14.3075L8.00498 12.595L11.2125 14.3075C11.4825 14.45 11.81 14.43 12.0575 14.25C12.305 14.07 12.43 13.7675 12.38 13.4675L11.7625 9.825L14.3675 7.2475C14.5825 7.035 14.66 6.7175 14.565 6.43C14.47 6.1425 14.2225 5.9325 13.9225 5.8875L10.33 5.3575L8.72248 2.05Z"
        fill="#B3DFFF"
      />
    </svg>
  )
}

export default QodeSvg306009
