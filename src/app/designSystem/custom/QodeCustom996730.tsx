// id="99:6730"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom996394 } from "@designSystem/custom/QodeCustom996394"
import { QodeCustom996396 } from "@designSystem/custom/QodeCustom996396"
import { QodeCustom996398 } from "@designSystem/custom/QodeCustom996398"
import { QodeCustom996400 } from "@designSystem/custom/QodeCustom996400"
import { QodeCustom996402 } from "@designSystem/custom/QodeCustom996402"
import { QodeCustom814181 } from "@designSystem/custom/QodeCustom814181"

export interface QodeCustom996730Props {}

export const QodeCustom996730: React.FC<
  QodeCustom996730Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=Formatter" id="99:6730" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "180px",
            padding: "8px 0px",
            alignItems: "center",
            gap: "12px",
          },
          ...style,
        }}
      >
        {/* name="w" id="99:6732" type="FRAME" */}
        <div
          style={{
            ...{ display: "flex", alignItems: "center", gap: "4px" },
            ...{},
          }}
        >
          {/* name="bold" id="99:6733" type="INSTANCE" */}
          <QodeCustom996394
            style={{ ...{ width: "20px", height: "20px" }, ...{} }}
            {...{}}
          />
          {/* name="italic" id="99:6734" type="INSTANCE" */}
          <QodeCustom996396
            style={{ ...{ width: "20px", height: "20px" }, ...{} }}
            {...{}}
          />
          {/* name="underline" id="99:6735" type="INSTANCE" */}
          <QodeCustom996398
            style={{ ...{ width: "20px", height: "20px" }, ...{} }}
            {...{}}
          />
        </div>
        {/* name="divider" id="99:6736" type="LINE" */}
        <Flex
          style={{
            ...{
              width: "1px",
              height: "12px",
              background: "var(--border-border-neutral-30, #d5d5d5)",
            },
            ...{},
          }}
        >
          <></>
        </Flex>
        {/* name="Frame 2" id="99:6737" type="FRAME" */}
        <div
          style={{
            ...{ display: "flex", alignItems: "center", gap: "4px" },
            ...{},
          }}
        >
          {/* name="list-ul" id="99:6738" type="INSTANCE" */}
          <QodeCustom996400
            style={{ ...{ width: "20px", height: "20px" }, ...{} }}
            {...{}}
          />
          {/* name="list-ol" id="99:6739" type="INSTANCE" */}
          <QodeCustom996402
            style={{ ...{ width: "20px", height: "20px" }, ...{} }}
            {...{}}
          />
        </div>
        {/* name="divider" id="99:6740" type="LINE" */}
        <Flex
          style={{
            ...{
              width: "1px",
              height: "12px",
              background: "var(--border-border-neutral-30, #d5d5d5)",
            },
            ...{},
          }}
        >
          <></>
        </Flex>
        {/* name="font" id="99:6741" type="GROUP" */}
        <Flex
          style={{
            ...{ width: "20px", height: "20px", flexShrink: "0" },
            ...{},
          }}
        >
          {/* name="link" id="99:6742" type="INSTANCE" */}
          <QodeCustom814181
            style={{
              ...{ width: "20px", height: "20px", flexShrink: "0" },
              ...{},
            }}
            {...{}}
          />
        </Flex>
      </div>
    </>
  )
}
