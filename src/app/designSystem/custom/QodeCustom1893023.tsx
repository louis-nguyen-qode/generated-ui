// id="189:3023"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom3511250 } from "@designSystem/custom/QodeCustom3511250"
import { QodeCustom18210865 } from "@designSystem/custom/QodeCustom18210865"
import { QodeInputNumber } from "@designSystem/ant/QodeInputNumber"

export interface QodeCustom1893023Props {}

export const QodeCustom1893023: React.FC<
  QodeCustom1893023Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="color space=HEX" id="189:3023" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "281px",
          alignItems: "center",
          gap: "var(--size-padding-paddingxxs, 4px)",
        }}
      >
        {/* name="Select" id="189:3021" type="FRAME" */}
        <div
          style={{
            display: "flex",
            paddingRight: "var(--size-padding-paddingxxs, 4px)",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
          }}
        >
          <span
            style={{
              color: "var(--color-neutral-text-colortext, #000)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-small, 12px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
            }}
          >{`HEX`}</span>
          {/* name="Down" id="189:3019" type="INSTANCE" */}
          <QodeCustom3511250
            style={{ width: "12px", height: "12px" }}
            {...{}}
          />
        </div>
        {/* name="🧬 input" id="189:2998" type="INSTANCE" */}
        <QodeCustom18210865
          style={{
            display: "flex",
            width: "174px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "10px var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-base, 8px)",
            border:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            background: "var(--background-bg-white, #fff)",
          }}
          {...{
            showClear: true,
            suffix: "SUF",
            title: "1677FF",
            prefix: "#",
            showPrefix: true,
            state: "filled",
            status: "default",
            size: "small",
          }}
        />
        {/* name="🧬 input number" id="189:3005" type="INSTANCE" */}
        <QodeInputNumber
          style={{
            display: "flex",
            width: "56px",
            height: "var(--size-height-controlheightsm, 24px)",
            alignItems: "center",
            flexShrink: "0",
            borderRadius: "var(--border-radius-base, 8px)",
            border:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            background: "var(--background-bg-white, #fff)",
          }}
          {...{
            number: "100%",
            prefix: "PRE",
            state: "filled",
            status: "default",
            size: "small",
          }}
        />
      </div>
    </>
  )
}
