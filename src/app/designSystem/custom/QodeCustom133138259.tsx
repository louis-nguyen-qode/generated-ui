// id="1331:38259"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg133138260 from "@designSystem/icon/svg/QodeSvg133138260"
import QodeSvg133138263 from "@designSystem/icon/svg/QodeSvg133138263"

export interface QodeCustom133138259Props {}

export const QodeCustom133138259: React.FC<
  QodeCustom133138259Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Microphone" id="1331:38259" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "3px 6px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "4px",
          },
          ...style,
        }}
      >
        {/* name="Working Vector" id="1331:38260" type="BOOLEAN_OPERATION" */}
        <QodeSvg133138260
          style={{
            ...{
              width: "12px",
              height: "18px",
              flexShrink: "0",
              fill: "var(--blue-dark, #121a24)",
            },
            ...{},
          }}
          {...{}}
        />
        {/* name="Flattened" id="1331:38263" type="BOOLEAN_OPERATION" */}
        <QodeSvg133138263
          style={{
            ...{
              width: "12px",
              height: "18px",
              flexShrink: "0",
              fill: "var(--light-basetext, #121a24)",
            },
            ...{},
          }}
          {...{}}
        />
        {/* name="iconMicrophoneOn" id="1331:38266" type="SLICE" */}
        <Flex style={{ ...{}, ...{} }}>
          <></>
        </Flex>
      </div>
    </>
  )
}
