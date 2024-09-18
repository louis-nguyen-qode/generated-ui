// id="307:17677"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom562954 } from "@designSystem/custom/QodeCustom562954"
import { QodeCustom31123052 } from "@designSystem/custom/QodeCustom31123052"
import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom30717677Props {}

export const QodeCustom30717677: React.FC<
  QodeCustom30717677Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="state=default" id="307:17677" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "352px",
          padding: "12px 16px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "24px",
          borderRadius: "var(--border-radius-base, 8px)",
          border:
            "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
          background: "var(--neutral-white, #fff)",
        }}
      >
        {/* name="Header" id="307:17678" type="FRAME" */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "var(--font-size-base, 14px)",
            alignSelf: "stretch",
          }}
        >
          {/* name="avatar" id="307:17679" type="INSTANCE" */}
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
          {/* name="R" id="307:17680" type="FRAME" */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
              flex: "1 0 0",
            }}
          >
            {/* name="wrap" id="307:17681" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                alignSelf: "stretch",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-heading6, 16px)",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight:
                    "var(--line-height-lineheighheading5, 24px) /* 150% */",
                }}
              >{`Nguyen Quoc Thai`}</span>
            </div>
            {/* name="Interviewed/Status" id="311:23056" type="INSTANCE" */}
            <QodeCustom31123052
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
              {...{ status: "upcoming" }}
            />
          </div>
        </div>
        {/* name="Frame 37201" id="307:17689" type="FRAME" */}
        <div
          style={{
            display: "flex",
            padding: "12px 20px",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "8px",
            alignSelf: "stretch",
          }}
        >
          {/* name="Button" id="307:17690" type="INSTANCE" */}
          <QodeButton
            style={{
              display: "flex",
              height: "var(--size-height-controlheight, 32px)",
              padding:
                "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              borderRadius: "var(--style-radius-borderround, 999px)",
              background: "var(--color-info-colorinfo, #2e2e2e)",
            }}
            {...{
              icononly: <Icon.QodeMagnifyingGlass />,
              iconL: <Icon.QodePlus />,
              iconR: <Icon.QodeMagnifyingGlass />,
              title: "Add notes",
              type: "primary",
              size: "default",
              state: "default",
              content: "default",
              danger: false,
              ghost: false,
            }}
          />
          {/* name="Upload CV" id="307:17691" type="INSTANCE" */}
          <div
            style={{
              display: "flex",
              width: "124px",
              alignItems: "flex-start",
            }}
            {...{ property_1: "Default" }}
          />
        </div>
        {/* name="Indicator" id="307:17692" type="ELLIPSE" */}
        <Flex
          style={{
            width: "8px",
            height: "8px",
            position: "absolute",
            left: "40px",
            bottom: "-7px",
            borderRadius: "8px",
            background: "#FF7878",
          }}
        >
          {/* name="Indicator" id=307:17692 type=ELLIPSE */}
          <></>
        </Flex>
      </div>
    </>
  )
}
