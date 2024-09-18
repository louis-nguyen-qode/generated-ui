// id="99:6900"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom18216941 } from "@designSystem/custom/QodeCustom18216941"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom57057359 } from "@designSystem/custom/QodeCustom57057359"

export interface QodeCustom996900Props {}

export const QodeCustom996900: React.FC<
  QodeCustom996900Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=Variant2" id="99:6900" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            
            height: "163px",
            padding: "16px 20px",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "12px",
            flexShrink: "0",
            borderTop:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            background: "var(--neutral-gray-5, #f8f6f6)",
          },
          ...style,
        }}
      >
        {/* name="Input__Text Area" id="99:6907" type="INSTANCE" */}
        <QodeCustom18216941
          style={{
            ...{
              display: "flex",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--size-padding-paddingxs, 8px)",
              flex: "1 0 0",
              alignSelf: "stretch",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
            },
            ...{},
          }}
          {...{
            title: "Write a message...",
            state: "default",
            size: "default",
          }}
        />
        {/* name="Btm" id="99:6908" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              alignSelf: "stretch",
            },
            ...{},
          }}
        >
          {/* name="Wrap" id="99:7310" type="FRAME" */}
          <div
            style={{
              ...{ display: "flex", alignItems: "center", gap: "12px" },
              ...{},
            }}
          >
            {/* name="Button" id="99:6909" type="INSTANCE" */}
            <QodeButton
              style={{
                ...{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                onlyIcon: <Icon.QodeAngleUp />,
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                selectIconLeft: <Icon.QodeIcons />,
                buttonname: "Button",
                type: "default",
                size: "small",
                state: "default",
                content: "icon",
                danger: false,
                ghost: false,
              }}
            />
            {/* name="Rich text action" id="99:6910" type="INSTANCE" */}
            <QodeCustom57057359
              style={{
                ...{
                  display: "flex",
                  padding: "8px 0px",
                  alignItems: "center",
                  gap: "12px",
                },
                ...{},
              }}
              {...{ property_1: "Formatter" }}
            />
          </div>
          {/* name="Action" id="99:6911" type="FRAME" */}
          <div
            style={{
              ...{ display: "flex", alignItems: "center", gap: "10px" },
              ...{},
            }}
          >
            {/* name="Button" id="99:6912" type="INSTANCE" */}
            <QodeButton
              style={{
                ...{
                  display: "flex",
                  width: "164px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                selectIconLeft: <Icon.QodeVideoPlus />,
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                buttonname: "Setup interview",
                iconLeft: true,
                type: "default",
                size: "default",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
            {/* name="Button" id="99:6913" type="INSTANCE" */}
            <QodeButton
              style={{
                ...{
                  display: "flex",
                  width: "164px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-primary-30, #107ecc)",
                  background: "var(--background-bg-primary, #1597f4)",
                },
                ...{},
              }}
              {...{
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                iconLeft: true,
                buttonname: "Send",
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                selectIconLeft: <Icon.QodePaperPlaneTop />,
                type: "primary",
                size: "default",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
