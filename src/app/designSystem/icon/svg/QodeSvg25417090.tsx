// id='254:17090'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg25417090: React.FC<IconProps> = ({
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
        d="M11.1937 2.61377C11.7149 2.42627 12.2849 2.42627 12.8099 2.61377L20.0099 5.18627C20.9624 5.52752 21.5999 6.43127 21.5999 7.44752V16.5525C21.5999 17.565 20.9624 18.4725 20.0062 18.8138L12.8062 21.3863C12.2849 21.5738 11.7149 21.5738 11.1899 21.3863L3.9899 18.8138C3.0374 18.4725 2.3999 17.5688 2.3999 16.5525V7.44752C2.3999 6.43502 3.0374 5.52752 3.99365 5.18627L11.1937 2.61377ZM11.9999 4.87502L5.48615 7.20002L11.9999 9.52502L18.5137 7.20002L11.9999 4.87502ZM13.1999 18.6975L19.1999 16.5563V9.50627L13.1999 11.6475V18.6975Z"
        fill="url(#paint0_linear_254_17090)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_254_17090"
          x1="11.9999"
          y1="2.47314"
          x2="11.9999"
          y2="21.5269"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0095FF" />
          <stop offset="1" stop-color="#2512FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg25417090
