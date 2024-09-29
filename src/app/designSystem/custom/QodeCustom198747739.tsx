// id="1987:47739"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom266995 } from "@designSystem/custom/QodeCustom266995"
import QodeSvg198759261 from "@designSystem/icon/svg/QodeSvg198759261"
import QodeSvg198759264 from "@designSystem/icon/svg/QodeSvg198759264"
import { QodeCustom182845848 } from "@designSystem/custom/QodeCustom182845848"

export interface QodeCustom198747739Props {}

export const QodeCustom198747739: React.FC<
  QodeCustom198747739Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="verified=true, size=38" id="1987:47739" type="COMPONENT" */}
      <div
        style={{
          ...{ width: "38px", height: "38px", flexShrink: "0" },
          ...style,
        }}
      >
        {/* name="avatar" id="1987:47740" type="INSTANCE" */}
        <QodeCustom266995
          style={{
            ...{
              display: "flex",
              width: "38px",
              height: "38px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--font-size-large, 16px)",
              flexShrink: "0",
              borderRadius: "499.5px",
              background: "var(--color-success-colorsuccesshover, #a3c73e)",
            },
            ...{},
          }}
          {...{ opentowork: true, img: true, type: "Round", state: "Default" }}
        />
        {/* name="Verified ring" id="1987:59260" type="GROUP" */}
        <Flex
          style={{
            ...{ width: "46px", height: "55px", flexShrink: "0" },
            ...{},
          }}
        >
          {/* name="Group 57" id="1987:59261" type="GROUP" */}
          <QodeSvg198759261
            style={{
              ...{ width: "46px", height: "46px", flexShrink: "0" },
              ...{},
            }}
            {...{}}
          />
          {/* name="Icon" id="1987:59263" type="GROUP" */}
          <Flex
            style={{
              ...{ width: "18px", height: "18px", flexShrink: "0" },
              ...{},
            }}
          >
            {/* name="Ellipse 103" id="1987:59264" type="ELLIPSE" */}
            <QodeSvg198759264
              style={{
                ...{
                  width: "18px",
                  height: "18px",
                  flexShrink: "0",
                  fill: "var(--blue-techblue-50, #1597f4)",
                  strokeWidth: "1px",
                  stroke: "#FFF",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="shield-check" id="1987:59265" type="INSTANCE" */}
            <QodeCustom182845848
              style={{
                ...{ width: "14px", height: "14px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
          </Flex>
        </Flex>
      </div>
    </>
  )
}
