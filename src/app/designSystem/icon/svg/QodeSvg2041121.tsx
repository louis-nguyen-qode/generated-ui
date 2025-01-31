// id='204:1121'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2041121: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "9.773015975952148",
    height: "6.872255802154541",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.653 6.86279L10.656 1.76079C10.6572 1.54229 10.5736 1.33185 10.4226 1.17384C10.2717 1.01583 10.0653 0.922594 9.84701 0.913785C7.13437 0.812283 4.41897 0.807605 1.706 0.899777C1.48633 0.907535 1.2782 1.00009 1.12531 1.15802C0.972411 1.31595 0.88664 1.52697 0.886002 1.74678L0.883003 6.84378C0.883003 7.31978 1.271 7.70078 1.747 7.68878C4.225 7.62478 6.91301 7.62178 9.77701 7.70578C9.89028 7.70952 10.0032 7.69052 10.109 7.6499C10.2148 7.60928 10.3114 7.54785 10.393 7.46927C10.4747 7.39068 10.5398 7.29652 10.5844 7.19235C10.6291 7.08818 10.6524 6.97613 10.653 6.86279Z"
        fill="white"
      />
    </svg>
  )
}

export default QodeSvg2041121
