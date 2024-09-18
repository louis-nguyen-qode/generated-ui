// id="378:21102"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom562954 } from "@designSystem/custom/QodeCustom562954"
import { QodeCustom39131653 } from "@designSystem/custom/QodeCustom39131653"

export interface QodeCustom37821102Props {}

export const QodeCustom37821102: React.FC<
  QodeCustom37821102Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="Property 1=Variant2" id="378:21102" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "620px",
          height: "82px",
          padding: "16px 20px",
          alignItems: "center",
          gap: "20px",
          flexShrink: "0",
          borderBottom:
            "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
          background: "var(--background-bg-white, #fff)",
        }}
      >
        {/* name="avatar" id="378:21103" type="FRAME" */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flex: "1 0 0",
          }}
        >
          {/* name="avatar" id="378:21104" type="INSTANCE" */}
          <QodeCustom562954
            style={{
              display: "flex",
              width: "48px",
              height: "48px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--font-size-large, 16px)",
              borderRadius: "666px",
              background: "var(--color-success-colorsuccesshover, #a3c73e)",
            }}
            {...{
              opentowork: true,
              img: true,
              type: "Round",
              state: "Default",
            }}
          />
          {/* name="Frame 37305" id="378:21105" type="FRAME" */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "2px",
              flex: "1 0 0",
            }}
          >
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-size-sizemd-20px, 20px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "var(--lineheight-lineheight-xl, 28px) /* 140% */",
              }}
            >{`Nguyen Quoc Thai`}</span>
            <span
              style={{
                color: "var(--text-text-neutral-40, #464646)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Senior Software Developer`}</span>
          </div>
        </div>
        {/* name="Finding" id="391:31684" type="INSTANCE" */}
        <QodeCustom39131653
          style={{
            display: "flex",
            width: "216px",
            height: "40px",
            padding: "8px 24px",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
            background: "var(--neutral-gray-10, #e3e3e3)",
          }}
          {...{ property_1: "Default" }}
        />
      </div>
    </>
  )
}
