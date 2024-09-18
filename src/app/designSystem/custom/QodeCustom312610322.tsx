// id="3126:10322"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg312610382 from "@designSystem/icon/svg/QodeSvg312610382"
import { QodeButton } from "@designSystem/ant/QodeButton"
import QodeSvg312610392 from "@designSystem/icon/svg/QodeSvg312610392"
import QodeSvg312610403 from "@designSystem/icon/svg/QodeSvg312610403"
import QodeSvg312610414 from "@designSystem/icon/svg/QodeSvg312610414"
import { QodeTag } from "@designSystem/ant/QodeTag"
import QodeSvg312610424 from "@designSystem/icon/svg/QodeSvg312610424"
import QodeSvg312610434 from "@designSystem/icon/svg/QodeSvg312610434"

export interface QodeCustom312610322Props {
  actions?: boolean
  title?: string
  state?: "default" | "hover" | "focussed" | "typing" | "filled" | "disabled"
}

export const QodeCustom312610322: React.FC<
  QodeCustom312610322Props & { style?: CSSProperties }
> = ({
  actions = false,
  title = "Typing",
  state = "default",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Input__Tag" id="3126:10322" type="COMPONENT_SET" */}
      {/* id="3126:10380" */}
      {`${state}` === `default` && (
        <>
          {/* name="state=default" id="3126:10380" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "138px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "8px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                },
                ...{},
              }}
            >{`Typing`}</span>
            {/* name="Resizer" id="3126:10382" type="BOOLEAN_OPERATION" */}
            <QodeSvg312610382
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "221px",
                  top: "119px",
                  fill: "var(--color-neutral-text-colortext, #000)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3126:10385" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "206px",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  position: "absolute",
                  left: "8px",
                  bottom: "4px",
                },
                ...{},
              }}
            >
              {/* name="Button" id="3126:10386" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "4px 0px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Rewrite",
                  iconLeft: true,
                  type: "link",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="vote" id="3126:10387" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3126:10388" type="INSTANCE" */}
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
                    },
                    ...{},
                  }}
                  {...{
                    buttonname: "Rewrite",
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="3126:10389" type="INSTANCE" */}
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
                    },
                    ...{},
                  }}
                  {...{
                    buttonname: "Rewrite",
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="3126:10390" */}
      {`${state}` === `hover` && (
        <>
          {/* name="state=hover" id="3126:10390" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "138px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "8px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                },
                ...{},
              }}
            >{`Typing`}</span>
            {/* name="Resizer" id="3126:10392" type="BOOLEAN_OPERATION" */}
            <QodeSvg312610392
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "221px",
                  top: "119px",
                  fill: "var(--color-neutral-text-colortext, #000)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3126:10395" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "206px",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  position: "absolute",
                  left: "8px",
                  bottom: "4px",
                },
                ...{},
              }}
            >
              {/* name="Button" id="3126:10396" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "4px 0px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Rewrite",
                  iconLeft: true,
                  type: "link",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="vote" id="3126:10397" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3126:10398" type="INSTANCE" */}
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
                    },
                    ...{},
                  }}
                  {...{
                    buttonname: "Rewrite",
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="3126:10399" type="INSTANCE" */}
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
                    },
                    ...{},
                  }}
                  {...{
                    buttonname: "Rewrite",
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="3126:10400" */}
      {`${state}` === `focussed` && (
        <>
          {/* name="state=focussed" id="3126:10400" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "138px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "8px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                },
                ...{},
              }}
            >{`Typing`}</span>
            {/* name="Focus Ring" id="3126:10402" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  width: "240px",
                  height: "138px",
                  position: "absolute",
                  borderRadius: "8px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Resizer" id="3126:10403" type="BOOLEAN_OPERATION" */}
            <QodeSvg312610403
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "221px",
                  top: "119px",
                  fill: "var(--color-neutral-text-colortext, #000)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3126:10406" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "206px",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  position: "absolute",
                  left: "8px",
                  bottom: "4px",
                },
                ...{},
              }}
            >
              {/* name="Button" id="3126:10407" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "4px 0px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Rewrite",
                  iconLeft: true,
                  type: "link",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="vote" id="3126:10408" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3126:10409" type="INSTANCE" */}
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
                    },
                    ...{},
                  }}
                  {...{
                    buttonname: "Rewrite",
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="3126:10410" type="INSTANCE" */}
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
                    },
                    ...{},
                  }}
                  {...{
                    buttonname: "Rewrite",
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="3126:10411" */}
      {`${state}` === `typing` && (
        <>
          {/* name="state=typing" id="3126:10411" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "138px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "8px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Focus Ring" id="3126:10413" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  width: "240px",
                  height: "138px",
                  position: "absolute",
                  borderRadius: "8px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Resizer" id="3126:10414" type="BOOLEAN_OPERATION" */}
            <QodeSvg312610414
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "221px",
                  top: "119px",
                  fill: "var(--color-neutral-text-colortext, #000)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3126:10417" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "206px",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  position: "absolute",
                  left: "8px",
                  bottom: "4px",
                },
                ...{},
              }}
            >
              {/* name="Button" id="3126:10418" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "4px 0px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Rewrite",
                  iconLeft: true,
                  type: "link",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="vote" id="3126:10419" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3126:10420" type="INSTANCE" */}
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
                    },
                    ...{},
                  }}
                  {...{
                    buttonname: "Rewrite",
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="3126:10421" type="INSTANCE" */}
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
                    },
                    ...{},
                  }}
                  {...{
                    buttonname: "Rewrite",
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </div>
            {/* name="tags" id="3126:10738" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  alignContent: "flex-start",
                  gap: "8px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  flexWrap: "wrap",
                },
                ...{},
              }}
            >
              {/* name="Tag" id="3126:10739" type="INSTANCE" */}
              <QodeTag
                style={{
                  ...{
                    display: "flex",
                    height: "30px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  },
                  ...{},
                }}
                {...{
                  showRIcon: true,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              {/* name="Tag" id="3126:10740" type="INSTANCE" */}
              <QodeTag
                style={{
                  ...{
                    display: "flex",
                    height: "30px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  },
                  ...{},
                }}
                {...{
                  showRIcon: true,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              {/* name="Tag" id="3126:10833" type="INSTANCE" */}
              <QodeTag
                style={{
                  ...{
                    display: "flex",
                    height: "30px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  },
                  ...{},
                }}
                {...{
                  showRIcon: true,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              {/* name="Tag" id="3126:10839" type="INSTANCE" */}
              <QodeTag
                style={{
                  ...{
                    display: "flex",
                    height: "30px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  },
                  ...{},
                }}
                {...{
                  showRIcon: true,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              {/* name="Tag" id="3126:10845" type="INSTANCE" */}
              <QodeTag
                style={{
                  ...{
                    display: "flex",
                    height: "30px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  },
                  ...{},
                }}
                {...{
                  showRIcon: true,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              {/* name="Tag" id="3126:10851" type="INSTANCE" */}
              <QodeTag
                style={{
                  ...{
                    display: "flex",
                    height: "30px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  },
                  ...{},
                }}
                {...{
                  showRIcon: true,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Typing`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="3126:10422" */}
      {`${state}` === `filled` && (
        <>
          {/* name="state=filled" id="3126:10422" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "138px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "8px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Resizer" id="3126:10424" type="BOOLEAN_OPERATION" */}
            <QodeSvg312610424
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "221px",
                  top: "119px",
                  fill: "var(--color-neutral-text-colortext, #000)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3126:10427" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "206px",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  position: "absolute",
                  left: "8px",
                  bottom: "4px",
                },
                ...{},
              }}
            >
              {/* name="Button" id="3126:10428" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "4px 0px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Rewrite",
                  iconLeft: true,
                  type: "link",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="vote" id="3126:10429" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3126:10430" type="INSTANCE" */}
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
                    },
                    ...{},
                  }}
                  {...{
                    buttonname: "Rewrite",
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="3126:10431" type="INSTANCE" */}
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
                    },
                    ...{},
                  }}
                  {...{
                    buttonname: "Rewrite",
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </div>
            {/* name="tags" id="3126:10780" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  alignContent: "flex-start",
                  gap: "8px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  flexWrap: "wrap",
                },
                ...{},
              }}
            >
              {/* name="Tag" id="3126:10781" type="INSTANCE" */}
              <QodeTag
                style={{
                  ...{
                    display: "flex",
                    height: "30px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  },
                  ...{},
                }}
                {...{
                  showRIcon: true,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              {/* name="Tag" id="3126:10782" type="INSTANCE" */}
              <QodeTag
                style={{
                  ...{
                    display: "flex",
                    height: "30px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  },
                  ...{},
                }}
                {...{
                  showRIcon: true,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              {/* name="Tag" id="3126:10857" type="INSTANCE" */}
              <QodeTag
                style={{
                  ...{
                    display: "flex",
                    height: "30px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  },
                  ...{},
                }}
                {...{
                  showRIcon: true,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              {/* name="Tag" id="3126:10863" type="INSTANCE" */}
              <QodeTag
                style={{
                  ...{
                    display: "flex",
                    height: "30px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  },
                  ...{},
                }}
                {...{
                  showRIcon: true,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              {/* name="Tag" id="3126:10869" type="INSTANCE" */}
              <QodeTag
                style={{
                  ...{
                    display: "flex",
                    height: "30px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  },
                  ...{},
                }}
                {...{
                  showRIcon: true,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              {/* name="Tag" id="3126:10875" type="INSTANCE" */}
              <QodeTag
                style={{
                  ...{
                    display: "flex",
                    height: "30px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  },
                  ...{},
                }}
                {...{
                  showRIcon: true,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
            </div>
          </div>
        </>
      )}
      {/* id="3126:10432" */}
      {`${state}` === `disabled` && (
        <>
          {/* name="state=disabled" id="3126:10432" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "138px",
                padding: "var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "8px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                },
                ...{},
              }}
            >{`Typing`}</span>
            {/* name="Resizer" id="3126:10434" type="BOOLEAN_OPERATION" */}
            <QodeSvg312610434
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "221px",
                  top: "119px",
                  fill: "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
