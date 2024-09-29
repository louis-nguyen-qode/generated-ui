// id="1331:38251"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg133138253 from "@designSystem/icon/svg/QodeSvg133138253"
import QodeSvg133138256 from "@designSystem/icon/svg/QodeSvg133138256"
import QodeSvg133138257 from "@designSystem/icon/svg/QodeSvg133138257"

export interface QodeCustom133138251Props {}

export const QodeCustom133138251: React.FC<
  QodeCustom133138251Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Microphone Off" id="1331:38251" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "3px 3.25px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Working Vector" id="1331:38252" type="GROUP" */}
        <Flex
          style={{
            ...{ width: "16px", height: "18px", flexShrink: "0" },
            ...{},
          }}
        >
          {/* name="Microphone" id="1331:38253" type="BOOLEAN_OPERATION" */}
          <QodeSvg133138253
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
          {/* name="Positive Slash" id="1331:38256" type="VECTOR" */}
          <QodeSvg133138256
            style={{
              ...{
                width: "16px",
                height: "16px",
                flexShrink: "0",
                strokeWidth: "1.5px",
                stroke: "var(--blue-dark, #121a24)",
              },
              ...{},
            }}
            {...{}}
          />
        </Flex>
        {/* name="Flattened" id="1331:38257" type="VECTOR" */}
        <QodeSvg133138257
          style={{
            ...{
              width: "17.5px",
              height: "18px",
              flexShrink: "0",
              fill: "var(--light-basetext, #121a24)",
            },
            ...{},
          }}
          {...{}}
        />
        {/* name="iconMicrophoneOff" id="1331:38258" type="SLICE" */}
        <Flex style={{ ...{}, ...{} }}>
          <></>
        </Flex>
      </div>
    </>
  )
}
