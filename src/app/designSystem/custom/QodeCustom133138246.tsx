// id="1331:38246"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom133138259 } from "@designSystem/custom/QodeCustom133138259"

export interface QodeCustom133138246Props {}

export const QodeCustom133138246: React.FC<
  QodeCustom133138246Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="State=On" id="1331:38246" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            alignItems: "center",
            gap: "1px",
            background: "rgba(0, 0, 0, 0.60)",
          },
          ...style,
        }}
      >
        {/* name="Icon" id="1331:38247" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "24px",
              height: "24px",
              padding: "4px",
              justifyContent: "center",
              alignItems: "center",
            },
            ...{},
          }}
        >
          {/* name="Microphone" id="1331:38248" type="INSTANCE" */}
          <QodeCustom133138259
            style={{
              ...{ width: "16px", height: "16px", flexShrink: "0" },
              ...{},
            }}
            {...{}}
          />
        </div>
        {/* name="Name" id="1331:38249" type="FRAME" */}
        <div
          style={{
            ...{ display: "flex", padding: "4px", alignItems: "center" },
            ...{},
          }}
        >
          <span
            style={{
              ...{
                color: "var(--system-white, #fff)",
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: "Graphik",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "16px /* 133.333% */",
              },
              ...{},
            }}
          >{`You`}</span>
        </div>
      </div>
    </>
  )
}
