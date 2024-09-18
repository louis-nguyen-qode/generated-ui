// id='204:969'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg204969: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "20.033058166503906",
    height: "12.804786682128906",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.28371 10.2848L7.83073 13.1855C7.07106 13.6769 3.04072 10.5154 3.04072 10.5154L1.38116 11.2654L0.0232468 5.56618C0.0232468 5.56618 6.89855 0.964885 9.01915 0.534735C11.4929 0.0323929 18.9906 1.47725 19.8138 2.81884C19.8138 2.81884 21.1455 3.30614 17.5671 3.51069C13.9877 3.71423 12.4795 3.95889 10.717 6.65108C8.95459 9.34428 8.28371 10.2848 8.28371 10.2848Z"
        fill="#FFC6A0"
      />
    </svg>
  )
}

export default QodeSvg204969
