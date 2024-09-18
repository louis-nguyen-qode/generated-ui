// id="58:8051"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeInput } from "@designSystem/ant/QodeInput"
import { QodeCustom17024242 } from "@designSystem/custom/QodeCustom17024242"

export interface QodeCustom588051Props {}

export const QodeCustom588051: React.FC<
  QodeCustom588051Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="Property 1=Default" id="58:8051" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "1124px",
          padding: "8px 12px",
          alignItems: "center",
          gap: "8px",
          borderRadius:
            "var(--border-radius-large, 12px) var(--border-radius-large, 12px) 0px 0px",
          border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
          background: "var(--neutral-gray-10, #e3e3e3)",
        }}
      >
        {/* name="Search bar" id="58:8034" type="INSTANCE" */}
        <QodeInput
          style={{
            display: "flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "10px 12px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flex: "1 0 0",
            borderRadius: "var(--border-radius-base, 8px)",
            border:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            background: "var(--background-bg-white, #fff)",
          }}
          {...{
            suffix: "SUF",
            title:
              "“Senior Software Developer” AND “Java, Python, Go, Spring, PHP” AND “Ho Chi Minh”",
            prefix: "PRE",
            iconRight: <Icon.QodeUser />,
            iconLeft: <Icon.QodeMagnifyingGlass />,
            showIconLeft: true,
            state: "filled",
            status: "default",
            size: "default",
          }}
        />
        {/* name="Input/Select" id="58:8253" type="INSTANCE" */}
        <QodeCustom17024242
          style={{
            display: "flex",
            width: "240px",
            height: "var(--size-height-controlheight, 32px)",
            padding: "0px var(--size-padding-paddingsm, 12px)",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-base, 8px)",
            border:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            background: "var(--neutral-white, #fff)",
          }}
          {...{
            iconr: true,
            title: "Ho Chi Minh city, Vietnam",
            state: "filled",
            size: "default",
            type: "basic",
            status: "default",
          }}
        />
        {/* name="Input/Select" id="58:8290" type="INSTANCE" */}
        <QodeCustom17024242
          style={{
            display: "flex",
            width: "170px",
            height: "var(--size-height-controlheight, 32px)",
            padding: "0px var(--size-padding-paddingsm, 12px)",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-base, 8px)",
            border:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            background: "var(--neutral-white, #fff)",
          }}
          {...{
            iconr: true,
            title: "Years of Experience",
            state: "default",
            size: "default",
            type: "basic",
            status: "default",
          }}
        />
      </div>
    </>
  )
}
