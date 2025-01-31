// id='234:5238'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345238: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "12",
    height: "12",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.357 6L10.4332 2.3332C10.4847 2.27227 10.4414 2.17969 10.3617 2.17969H9.42653C9.37146 2.17969 9.31872 2.2043 9.28239 2.24648L6.74528 5.27109L4.20817 2.24648C4.17302 2.2043 4.12028 2.17969 4.06403 2.17969H3.12888C3.04919 2.17969 3.00583 2.27227 3.05739 2.3332L6.13357 6L3.05739 9.6668C3.00583 9.72773 3.04919 9.82031 3.12888 9.82031H4.06403C4.11911 9.82031 4.17185 9.7957 4.20817 9.75352L6.74528 6.72891L9.28239 9.75352C9.31755 9.7957 9.37028 9.82031 9.42653 9.82031H10.3617C10.4414 9.82031 10.4847 9.72773 10.4332 9.6668L7.357 6Z"
        fill="#898989"
      />
    </svg>
  )
}

export default QodeSvg2345238
