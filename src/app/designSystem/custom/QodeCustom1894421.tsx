// id="189:4421"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg1894419 from "@designSystem/icon/svg/QodeSvg1894419"
import QodeSvg1894422 from "@designSystem/icon/svg/QodeSvg1894422"

export interface QodeCustom1894421Props {
  type?: "palette" | "alpha"
}

export const QodeCustom1894421: React.FC<
  QodeCustom1894421Props & { style?: CSSProperties }
> = ({ type = "palette", style, ...rest }) => {
  return (
    <>
      {/* name=".colorPicker__slider" id="189:4421" type="COMPONENT_SET" */}
      {/* id="189:4419" */}
      {`${type}` === `palette` && (
        <>
          {/* name="type=palette" id="189:4419" type="COMPONENT" */}
          <QodeSvg1894419
            style={{
              ...{
                width: "204px",
                height: "8px",
                flexShrink: "0",
                fill: "linear-gradient(90deg, #F00 0%, #FFA800 10.42%, #FAFF00 23.44%, #06FF01 35.42%, #01FFD1 48.96%, #0185FF 60.94%, #2501FF 72.92%, #BD01FF 83.33%, #FF01C7 90.1%, #FF0101 97.92%)",
              },
              ...style,
            }}
            {...{}}
          />
        </>
      )}
      {/* id="189:4422" */}
      {`${type}` === `alpha` && (
        <>
          {/* name="type=alpha" id="189:4422" type="COMPONENT" */}
          <QodeSvg1894422
            style={{
              ...{
                width: "204px",
                height: "8px",
                flexShrink: "0",
                fill: "linear-gradient(270deg, #1677FF 0%, rgba(22, 119, 255, 0.00) 100%)",
              },
              ...style,
            }}
            {...{}}
          />
        </>
      )}
    </>
  )
}
