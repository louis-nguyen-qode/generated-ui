// id="531:30111"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom53130111Props {
  title?: string
  state?: "editable" | "view"
}

export const QodeCustom53130111: React.FC<
  QodeCustom53130111Props & { style?: CSSProperties }
> = ({ title = "Section header", state = "editable", ...rest }) => {
  return (
    <>
      {/* name="Profile/Section header" id="531:30111" type="COMPONENT_SET" */}
      {/* id="531:30088" */}
      {`${state}` === `editable` && (
        <>
          {/* name="state=editable" id="531:30088" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "720px",
              padding: "12px 0px",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
          >
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-heading6, 16px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight:
                  "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
              }}
            >{`Section header`}</span>
            <span
              style={{
                color:
                  "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--line-height-lineheighsm, 16px) /* 133.333% */",
              }}
            >{`Accessibility`}</span>
            {/* name="Button" id="531:30083" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                width: "48px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "4px 8px",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-white, #fff)",
              }}
              {...{
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                iconRight: false,
                buttonname: "Edit",
                selectIconLeft: <Icon.QodeIcons />,
                iconLeft: false,
                type: "default",
                size: "small",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="531:30112" */}
      {`${state}` === `view` && (
        <>
          {/* name="state=view" id="531:30112" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "720px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "var(--border-radius-small, 4px)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-size-sizemd-20px, 20px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "var(--lineheight-lineheight-xl, 28px) /* 140% */",
              }}
            >{`Section header`}</span>
          </div>
        </>
      )}
    </>
  )
}
