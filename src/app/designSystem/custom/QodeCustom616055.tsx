// id="6160:55"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg616056 from "@designSystem/icon/svg/QodeSvg616056"
import QodeSvg616075 from "@designSystem/icon/svg/QodeSvg616075"
import QodeSvg616058 from "@designSystem/icon/svg/QodeSvg616058"
import QodeSvg616060 from "@designSystem/icon/svg/QodeSvg616060"

export interface QodeCustom616055Props {
  color?: "color" | "black" | "white" | "blue"
}

export const QodeCustom616055: React.FC<
  QodeCustom616055Props & { style?: CSSProperties }
> = ({ color = "color", style, ...rest }) => {
  return (
    <>
      {/* name="favicon" id="6160:55" type="COMPONENT_SET" */}
      {/* id="6160:56" */}
      {`${color}` === `color` && (
        <>
          {/* name="color=color" id="6160:56" type="COMPONENT" */}
          <QodeSvg616056
            style={{
              ...{
                width: "var(--line-height-lineheighheading3, 32px)",
                height: "var(--line-height-lineheighheading3, 32px)",
                flexShrink: "0",
              },
              ...style,
            }}
            {...{}}
          />
        </>
      )}
      {/* id="6160:75" */}
      {`${color}` === `blue` && (
        <>
          {/* name="color=blue" id="6160:75" type="COMPONENT" */}
          <QodeSvg616075
            style={{
              ...{
                width: "var(--line-height-lineheighheading3, 32px)",
                height: "var(--line-height-lineheighheading3, 32px)",
                flexShrink: "0",
              },
              ...style,
            }}
            {...{}}
          />
        </>
      )}
      {/* id="6160:58" */}
      {`${color}` === `black` && (
        <>
          {/* name="color=black" id="6160:58" type="COMPONENT" */}
          <QodeSvg616058
            style={{
              ...{
                width: "var(--line-height-lineheighheading3, 32px)",
                height: "var(--line-height-lineheighheading3, 32px)",
                flexShrink: "0",
              },
              ...style,
            }}
            {...{}}
          />
        </>
      )}
      {/* id="6160:60" */}
      {`${color}` === `white` && (
        <>
          {/* name="color=white" id="6160:60" type="COMPONENT" */}
          <QodeSvg616060
            style={{
              ...{
                width: "var(--line-height-lineheighheading3, 32px)",
                height: "var(--line-height-lineheighheading3, 32px)",
                flexShrink: "0",
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
