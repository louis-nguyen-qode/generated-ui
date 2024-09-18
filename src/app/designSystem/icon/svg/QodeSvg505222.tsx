// id='50:5222'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg505222: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "19.197751998901367",
    height: "16.79949188232422",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.54625 1.45875C0.79375 0.93375 1.31875 0.6 1.9 0.6H18.1C18.6812 0.6 19.2062 0.93375 19.4537 1.45875C19.7013 1.98375 19.6262 2.6025 19.2587 3.0525L12.4 11.4337V16.2C12.4 16.6538 12.145 17.07 11.7362 17.2725C11.3275 17.475 10.8437 17.4338 10.48 17.16L8.08 15.36C7.77625 15.135 7.6 14.7788 7.6 14.4V11.4337L0.7375 3.04875C0.37375 2.6025 0.295 1.98 0.54625 1.45875Z"
        fill="#464646"
      />
    </svg>
  )
}

export default QodeSvg505222
