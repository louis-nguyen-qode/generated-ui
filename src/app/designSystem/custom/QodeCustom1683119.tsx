// id="168:3119"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom1672922 } from "@designSystem/custom/QodeCustom1672922"
import { QodeCustom1686027 } from "@designSystem/custom/QodeCustom1686027"
import { QodeCustom1672907 } from "@designSystem/custom/QodeCustom1672907"
import { QodeCustom1684828 } from "@designSystem/custom/QodeCustom1684828"

export interface QodeCustom1683119Props {
  mode?: "inline" | "vertical"
  theme?: "light"
  open?: "true" | "false"
}

export const QodeCustom1683119: React.FC<
  QodeCustom1683119Props & { style?: CSSProperties }
> = ({ mode = "inline", theme = "light", open = "true", style, ...rest }) => {
  return (
    <>
      {/* name=".menu__submenu" id="168:3119" type="COMPONENT_SET" */}
      {/* id="168:3118" */}
      {`${mode}` === `inline` &&
        `${theme}` === `light` &&
        `${open}` === `true` && (
          <>
            {/* name="mode=inline, theme=light, open=true" id="168:3118" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                },
                ...style,
              }}
            >
              {/* name="🧬 menu item" id="168:3093" type="INSTANCE" */}
              <QodeCustom1672922
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheightlg, 40px)",
                    padding: "0px var(--size-padding-padding, 16px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradiusxl, 16px)",
                    background:
                      "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
                  },
                  ...{},
                }}
                {...{
                  showTitle: true,
                  showAction: true,
                  title: "Navigation Item",
                  showIcon: true,
                  state: "hover",
                }}
              />
              {/* name="🧬 submenu" id="168:7071" type="INSTANCE" */}
              <QodeCustom1686027
                style={{
                  ...{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddinglg, 24px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradiuslg, 0px)",
                    background:
                      "var(--color-neutral-fill-colorfillquaternary, rgba(0, 0, 0, 0.02))",
                  },
                  ...{},
                }}
                {...{ items: "3" }}
              />
            </div>
          </>
        )}
      {/* id="168:7137" */}
      {`${mode}` === `inline` &&
        `${theme}` === `light` &&
        `${open}` === `false` && (
          <>
            {/* name="mode=inline, theme=light, open=false" id="168:7137" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                },
                ...style,
              }}
            >
              {/* name="🧬 menu item" id="168:7138" type="INSTANCE" */}
              <QodeCustom1672907
                style={{
                  ...{
                    display: "flex",
                    width: "240px",
                    height: "var(--size-height-controlheightlg, 40px)",
                    padding: "0px var(--size-padding-paddinglg, 24px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                  },
                  ...{},
                }}
                {...{
                  title: "Navigation Item",
                  showAction: true,
                  showIcon: true,
                  showTitle: true,
                  state: "default",
                }}
              />
            </div>
          </>
        )}
      {/* id="168:7235" */}
      {`${mode}` === `vertical` &&
        `${theme}` === `light` &&
        `${open}` === `true` && (
          <>
            {/* name="mode=vertical, theme=light, open=true" id="168:7235" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                },
                ...style,
              }}
            >
              {/* name="🧬 menu item" id="168:7236" type="INSTANCE" */}
              <QodeCustom1672922
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheightlg, 40px)",
                    padding: "0px var(--size-padding-paddinglg, 24px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background:
                      "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
                  },
                  ...{},
                }}
                {...{
                  showTitle: true,
                  showAction: true,
                  title: "Navigation Item",
                  showIcon: true,
                  state: "hover",
                }}
              />
              {/* name="🧬 submenu dropdown" id="168:7237" type="INSTANCE" */}
              <QodeCustom1684828
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    position: "absolute",
                    right: "-208px",
                    bottom: "-92px",
                    borderRadius: "var(--style-radius-borderradius2x, 20px)",
                    background:
                      "var(--color-neutral-background-colorbgcontainer, #fff)",
                    boxShadow:
                      "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
                  },
                  ...{},
                }}
                {...{ items: "3" }}
              />
            </div>
          </>
        )}
      {/* id="168:7238" */}
      {`${mode}` === `vertical` &&
        `${theme}` === `light` &&
        `${open}` === `false` && (
          <>
            {/* name="mode=vertical, theme=light, open=false" id="168:7238" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                },
                ...style,
              }}
            >
              {/* name="🧬 menu item" id="168:7239" type="INSTANCE" */}
              <QodeCustom1672907
                style={{
                  ...{
                    display: "flex",
                    width: "240px",
                    height: "var(--size-height-controlheightlg, 40px)",
                    padding: "0px var(--size-padding-paddinglg, 24px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                  },
                  ...{},
                }}
                {...{
                  showTitle: true,
                  showIcon: true,
                  title: "Navigation Item",
                  showAction: true,
                  state: "default",
                }}
              />
            </div>
          </>
        )}
    </>
  )
}
