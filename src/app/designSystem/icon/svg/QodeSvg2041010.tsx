// id='204:1010'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2041010: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "34.19795227050781",
    height: "52.648681640625",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.0929 52.9998H3.32633C2.4736 52.9998 1.65581 52.6631 1.05285 52.0638C0.449879 51.4645 0.11113 50.6517 0.11113 49.8042V3.54662C0.11113 2.69911 0.449879 1.88631 1.05285 1.28703C1.65581 0.687752 2.4736 0.351074 3.32633 0.351074H31.0939C31.9466 0.351074 32.7644 0.687752 33.3674 1.28703C33.9703 1.88631 34.3091 2.69911 34.3091 3.54662V49.8042C34.3091 50.6517 33.9703 51.4645 33.3674 52.0638C32.7644 52.6631 31.9466 52.9998 31.0939 52.9998"
        fill="#F2D7AD"
      />
    </svg>
  )
}

export default QodeSvg2041010
