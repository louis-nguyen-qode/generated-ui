// id='635:30792'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg63530792: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "100",
    height: "100",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 104 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_635_30792)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M87.6152 42.5263L98.5903 52.96L86.5165 65.7061L100 78.5238L89.5848 89.5192L65.1943 66.3326L66.2737 65.1924L87.6152 42.5263ZM73.8745 80.2366C66.451 87.1436 56.5099 91.3684 45.592 91.3684C22.6364 91.3684 4 72.6905 4 49.6842C4 26.6779 22.6364 8 45.592 8C64.8144 8 81.0088 21.0981 85.7667 38.8665C85.359 39.0737 72.0672 52.9827 72.0672 52.9827C72.2 51.9023 72.2689 50.8008 72.2689 49.6842C72.2689 34.928 60.3154 22.9482 45.592 22.9482C30.8686 22.9482 18.915 34.928 18.915 49.6842C18.915 64.4404 30.8686 76.4202 45.592 76.4202C52.2513 76.4202 58.3441 73.9688 63.0205 69.9192L73.8745 80.2366Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_635_30792"
          x="0"
          y="8"
          width={width}
          height={height}
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_635_30792"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_635_30792"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default QodeSvg63530792
