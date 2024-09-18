// id="168:3119"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvgI16830931672923 from "@designSystem/icon/svg/QodeSvgI16830931672923"
import QodeSvgI16830931672988 from "@designSystem/icon/svg/QodeSvgI16830931672988"
import QodeSvgI16871381672911 from "@designSystem/icon/svg/QodeSvgI16871381672911"
import QodeSvgI16871381672986 from "@designSystem/icon/svg/QodeSvgI16871381672986"
import QodeSvgI16872361672923 from "@designSystem/icon/svg/QodeSvgI16872361672923"
import QodeSvgI16872361672988 from "@designSystem/icon/svg/QodeSvgI16872361672988"
import QodeSvgI16872391672911 from "@designSystem/icon/svg/QodeSvgI16872391672911"
import QodeSvgI16872391672986 from "@designSystem/icon/svg/QodeSvgI16872391672986"

export interface QodeCustom1683119Props {
  mode?: "inline" | "vertical"
  theme?: "light"
  open?: "true" | "false"
}

export const QodeCustom1683119: React.FC<
  QodeCustom1683119Props & { style?: CSSProperties }
> = ({ mode = "inline", theme = "light", open = "true", ...rest }) => {
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
                display: "flex",
                width: "240px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxxs, 4px)",
              }}
            >
              {/* name="🧬 menu item" id="168:3093" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradiusxl, 16px)",
                  background:
                    "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
                }}
              >
                {/* name="🎰 icon" id="I168:3093;167:2923" type="INSTANCE" */}
                <QodeSvgI16830931672923
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Navigation Item`}</span>
                {/* name="🎰 action" id="I168:3093;167:2988" type="INSTANCE" */}
                <QodeSvgI16830931672988
                  style={{ width: "12px", height: "12px" }}
                  {...{}}
                />
              </Flex>
              {/* name="🧬 submenu" id="168:7071" type="INSTANCE" */}
              <Flex
                style={{
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
                }}
              >
                {/* name="Item 1" id="I168:7071;168:6028" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightlg, 40px)",
                    padding: "0px var(--size-padding-paddinglg, 24px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                  }}
                >
                  <span
                    style={{
                      flex: "1 0 0",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Navigation Item`}</span>
                </Flex>
                {/* name=".menu__item" id="I168:7071;168:6029" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightlg, 40px)",
                    padding: "0px var(--size-padding-padding, 16px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradiusxl, 16px)",
                  }}
                >
                  <span
                    style={{
                      flex: "1 0 0",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Navigation Item`}</span>
                </Flex>
                {/* name=".menu__item" id="I168:7071;168:6030" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightlg, 40px)",
                    padding: "0px var(--size-padding-padding, 16px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradiusxl, 16px)",
                  }}
                >
                  <span
                    style={{
                      flex: "1 0 0",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Navigation Item`}</span>
                </Flex>
              </Flex>
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
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxxs, 4px)",
              }}
            >
              {/* name="🧬 menu item" id="168:7138" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "0px var(--size-padding-paddinglg, 24px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                }}
              >
                {/* name="🎰 icon" id="I168:7138;167:2911" type="INSTANCE" */}
                <QodeSvgI16871381672911
                  style={{ width: "16px", height: "16px", flexShrink: "0" }}
                  {...{}}
                />
                <span
                  style={{
                    flex: "1 0 0",
                    color:
                      "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Navigation Item`}</span>
                {/* name="Chevron" id="I168:7138;167:2986" type="INSTANCE" */}
                <QodeSvgI16871381672986
                  style={{ width: "12px", height: "12px", flexShrink: "0" }}
                  {...{}}
                />
              </Flex>
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
                display: "flex",
                width: "240px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxxs, 4px)",
              }}
            >
              {/* name="🧬 menu item" id="168:7236" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "0px var(--size-padding-paddinglg, 24px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background:
                    "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
                }}
              >
                {/* name="🎰 icon" id="I168:7236;167:2923" type="INSTANCE" */}
                <QodeSvgI16872361672923
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Navigation Item`}</span>
                {/* name="Chevron" id="I168:7236;167:2988" type="INSTANCE" */}
                <QodeSvgI16872361672988
                  style={{ width: "12px", height: "12px" }}
                  {...{}}
                />
              </Flex>
              {/* name="🧬 submenu dropdown" id="168:7237" type="INSTANCE" */}
              <Flex
                style={{
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
                }}
              >
                {/* name=".menu__item" id="I168:7237;168:4829" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightlg, 40px)",
                    padding: "0px var(--size-padding-padding, 16px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradiusxl, 16px)",
                    background:
                      "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
                  }}
                >
                  <span
                    style={{
                      flex: "1 0 0",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Navigation Item`}</span>
                </Flex>
                {/* name=".menu__item" id="I168:7237;168:4830" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightlg, 40px)",
                    padding: "0px var(--size-padding-padding, 16px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradiusxl, 16px)",
                  }}
                >
                  <span
                    style={{
                      flex: "1 0 0",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Navigation Item`}</span>
                </Flex>
                {/* name=".menu__item" id="I168:7237;168:4841" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightlg, 40px)",
                    padding: "0px var(--size-padding-padding, 16px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradiusxl, 16px)",
                  }}
                >
                  <span
                    style={{
                      flex: "1 0 0",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Navigation Item`}</span>
                </Flex>
              </Flex>
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
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxxs, 4px)",
              }}
            >
              {/* name="🧬 menu item" id="168:7239" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "0px var(--size-padding-paddinglg, 24px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                }}
              >
                {/* name="🎰 icon" id="I168:7239;167:2911" type="INSTANCE" */}
                <QodeSvgI16872391672911
                  style={{ width: "16px", height: "16px", flexShrink: "0" }}
                  {...{}}
                />
                <span
                  style={{
                    flex: "1 0 0",
                    color:
                      "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Navigation Item`}</span>
                {/* name="Chevron" id="I168:7239;167:2986" type="INSTANCE" */}
                <QodeSvgI16872391672986
                  style={{ width: "12px", height: "12px", flexShrink: "0" }}
                  {...{}}
                />
              </Flex>
            </div>
          </>
        )}
    </>
  )
}
