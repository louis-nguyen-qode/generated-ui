// id="182:16941"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg18217652 from "@designSystem/icon/svg/QodeSvg18217652"
import { QodeButton } from "@designSystem/ant/QodeButton"
import QodeSvg18217655 from "@designSystem/icon/svg/QodeSvg18217655"
import QodeSvg18217658 from "@designSystem/icon/svg/QodeSvg18217658"
import QodeSvg35747262 from "@designSystem/icon/svg/QodeSvg35747262"
import QodeSvg18217661 from "@designSystem/icon/svg/QodeSvg18217661"
import QodeSvg18217664 from "@designSystem/icon/svg/QodeSvg18217664"
import QodeSvg18217667 from "@designSystem/icon/svg/QodeSvg18217667"
import QodeSvg18217681 from "@designSystem/icon/svg/QodeSvg18217681"
import QodeSvg18217684 from "@designSystem/icon/svg/QodeSvg18217684"
import QodeSvg18217687 from "@designSystem/icon/svg/QodeSvg18217687"
import QodeSvg35747273 from "@designSystem/icon/svg/QodeSvg35747273"
import QodeSvg18217690 from "@designSystem/icon/svg/QodeSvg18217690"
import QodeSvg18217712 from "@designSystem/icon/svg/QodeSvg18217712"
import QodeSvg18217696 from "@designSystem/icon/svg/QodeSvg18217696"
import QodeSvg18217709 from "@designSystem/icon/svg/QodeSvg18217709"
import QodeSvg18217715 from "@designSystem/icon/svg/QodeSvg18217715"
import QodeSvg18217718 from "@designSystem/icon/svg/QodeSvg18217718"
import QodeSvg35747284 from "@designSystem/icon/svg/QodeSvg35747284"
import QodeSvg18217721 from "@designSystem/icon/svg/QodeSvg18217721"
import QodeSvg18217724 from "@designSystem/icon/svg/QodeSvg18217724"
import QodeSvg18217727 from "@designSystem/icon/svg/QodeSvg18217727"

export interface QodeCustom18216941Props {
  showFormatter?: boolean
  actions?: boolean
  title?: string
  state?:
    | "default"
    | "hover"
    | "focussed"
    | "typing"
    | "filled"
    | "disabled"
    | "error"
  size?: "default" | "large" | "small"
}

export const QodeCustom18216941: React.FC<
  QodeCustom18216941Props & { style?: CSSProperties }
> = ({
  showFormatter = true,
  actions = false,
  title = "Text Area",
  state = "default",
  size = "default",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Input__Text Area" id="182:16941" type="COMPONENT_SET" */}
      {/* id="182:16942" */}
      {`${state}` === `default` && `${size}` === `default` && (
        <>
          {/* name="state=default, size=default" id="182:16942" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "52px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Text Area`}</span>
            {/* name="Resizer" id="182:17652" type="BOOLEAN_OPERATION" */}
            <QodeSvg18217652
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "229px",
                  top: "41px",
                  fill: "var(--neutral-gray-90, #464646)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3012:28019" type="FRAME" */}
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
              {/* name="Button" id="3012:28020" type="INSTANCE" */}
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
              {/* name="vote" id="3012:28021" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3012:28022" type="INSTANCE" */}
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
                {/* name="Button" id="3012:28023" type="INSTANCE" */}
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
      {/* id="182:16948" */}
      {`${state}` === `hover` && `${size}` === `default` && (
        <>
          {/* name="state=hover, size=default" id="182:16948" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "52px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Text Area`}</span>
            {/* name="Resizer" id="182:17655" type="BOOLEAN_OPERATION" */}
            <QodeSvg18217655
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "229px",
                  top: "41px",
                  fill: "var(--neutral-gray-90, #464646)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3012:28117" type="FRAME" */}
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
              {/* name="Button" id="3012:28118" type="INSTANCE" */}
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
              {/* name="vote" id="3012:28119" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3012:28120" type="INSTANCE" */}
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
                {/* name="Button" id="3012:28121" type="INSTANCE" */}
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
      {/* id="182:16954" */}
      {`${state}` === `focussed` && `${size}` === `default` && (
        <>
          {/* name="state=focussed, size=default" id="182:16954" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "52px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Text Area`}</span>
            {/* name="Focus Ring" id="182:16960" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  width: "240px",
                  height: "52px",
                  position: "absolute",
                  borderRadius: "8px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Resizer" id="182:17658" type="BOOLEAN_OPERATION" */}
            <QodeSvg18217658
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "229px",
                  top: "41px",
                  fill: "var(--neutral-gray-90, #464646)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3012:28122" type="FRAME" */}
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
              {/* name="Button" id="3012:28123" type="INSTANCE" */}
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
              {/* name="vote" id="3012:28124" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3012:28125" type="INSTANCE" */}
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
                {/* name="Button" id="3012:28126" type="INSTANCE" */}
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
      {/* id="3574:7259" */}
      {`${state}` === `error` && `${size}` === `default` && (
        <>
          {/* name="state=error, size=default" id="3574:7259" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "52px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Text Area`}</span>
            {/* name="Focus Ring" id="3574:7261" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  width: "240px",
                  height: "52px",
                  position: "absolute",
                  borderRadius: "8px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Resizer" id="3574:7262" type="BOOLEAN_OPERATION" */}
            <QodeSvg35747262
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "229px",
                  top: "41px",
                  fill: "var(--neutral-gray-90, #464646)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3574:7265" type="FRAME" */}
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
              {/* name="Button" id="3574:7266" type="INSTANCE" */}
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
              {/* name="vote" id="3574:7267" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3574:7268" type="INSTANCE" */}
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
                {/* name="Button" id="3574:7269" type="INSTANCE" */}
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
      {/* id="182:16961" */}
      {`${state}` === `typing` && `${size}` === `default` && (
        <>
          {/* name="state=typing, size=default" id="182:16961" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "52px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Text Area`}</span>
            {/* name="Focus Ring" id="182:16967" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  width: "240px",
                  height: "52px",
                  position: "absolute",
                  borderRadius: "8px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Resizer" id="182:17661" type="BOOLEAN_OPERATION" */}
            <QodeSvg18217661
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "229px",
                  top: "41px",
                  fill: "var(--neutral-gray-90, #464646)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3012:28127" type="FRAME" */}
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
              {/* name="Button" id="3012:28128" type="INSTANCE" */}
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
              {/* name="vote" id="3012:28129" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3012:28130" type="INSTANCE" */}
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
                {/* name="Button" id="3012:28131" type="INSTANCE" */}
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
      {/* id="182:16968" */}
      {`${state}` === `filled` && `${size}` === `default` && (
        <>
          {/* name="state=filled, size=default" id="182:16968" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "52px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Text Area`}</span>
            {/* name="Resizer" id="182:17664" type="BOOLEAN_OPERATION" */}
            <QodeSvg18217664
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "229px",
                  top: "41px",
                  fill: "var(--neutral-gray-90, #464646)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3012:28132" type="FRAME" */}
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
              {/* name="Button" id="3012:28133" type="INSTANCE" */}
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
              {/* name="vote" id="3012:28134" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3012:28135" type="INSTANCE" */}
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
                {/* name="Button" id="3012:28136" type="INSTANCE" */}
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
      {/* id="182:16974" */}
      {`${state}` === `disabled` && `${size}` === `default` && (
        <>
          {/* name="state=disabled, size=default" id="182:16974" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "52px",
                padding: "var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-disabled, #d5d5d5)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Text Area`}</span>
            {/* name="Resizer" id="182:17667" type="BOOLEAN_OPERATION" */}
            <QodeSvg18217667
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "229px",
                  top: "41px",
                  fill: "var(--neutral-gray-40, #a7a7a7)",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="182:17112" */}
      {`${state}` === `default` && `${size}` === `large` && (
        <>
          {/* name="state=default, size=large" id="182:17112" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "64px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                },
                ...{},
              }}
            >{`Text Area`}</span>
            {/* name="Resizer" id="182:17681" type="BOOLEAN_OPERATION" */}
            <QodeSvg18217681
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "229px",
                  top: "53px",
                  fill: "var(--neutral-gray-90, #464646)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3012:28033" type="FRAME" */}
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
              {/* name="Button" id="3012:28034" type="INSTANCE" */}
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
              {/* name="vote" id="3012:28035" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3012:28036" type="INSTANCE" */}
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
                {/* name="Button" id="3012:28037" type="INSTANCE" */}
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
      {/* id="182:17118" */}
      {`${state}` === `hover` && `${size}` === `large` && (
        <>
          {/* name="state=hover, size=large" id="182:17118" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "64px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                },
                ...{},
              }}
            >{`Text Area`}</span>
            {/* name="Resizer" id="182:17684" type="BOOLEAN_OPERATION" */}
            <QodeSvg18217684
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "229px",
                  top: "53px",
                  fill: "var(--neutral-gray-90, #464646)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3012:28061" type="FRAME" */}
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
              {/* name="Button" id="3012:28062" type="INSTANCE" */}
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
              {/* name="vote" id="3012:28063" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3012:28064" type="INSTANCE" */}
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
                {/* name="Button" id="3012:28065" type="INSTANCE" */}
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
      {/* id="182:17124" */}
      {`${state}` === `focussed` && `${size}` === `large` && (
        <>
          {/* name="state=focussed, size=large" id="182:17124" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "64px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                },
                ...{},
              }}
            >{`Text Area`}</span>
            {/* name="Focus Ring" id="182:17130" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  width: "240px",
                  height: "64px",
                  position: "absolute",
                  borderRadius: "8px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Resizer" id="182:17687" type="BOOLEAN_OPERATION" */}
            <QodeSvg18217687
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "229px",
                  top: "53px",
                  fill: "var(--neutral-gray-90, #464646)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3012:28075" type="FRAME" */}
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
              {/* name="Button" id="3012:28076" type="INSTANCE" */}
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
              {/* name="vote" id="3012:28077" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3012:28078" type="INSTANCE" */}
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
                {/* name="Button" id="3012:28079" type="INSTANCE" */}
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
      {/* id="3574:7270" */}
      {`${state}` === `error` && `${size}` === `large` && (
        <>
          {/* name="state=error, size=large" id="3574:7270" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "64px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                },
                ...{},
              }}
            >{`Text Area`}</span>
            {/* name="Focus Ring" id="3574:7272" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  width: "240px",
                  height: "64px",
                  position: "absolute",
                  borderRadius: "8px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Resizer" id="3574:7273" type="BOOLEAN_OPERATION" */}
            <QodeSvg35747273
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "229px",
                  top: "53px",
                  fill: "var(--neutral-gray-90, #464646)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3574:7276" type="FRAME" */}
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
              {/* name="Button" id="3574:7277" type="INSTANCE" */}
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
              {/* name="vote" id="3574:7278" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3574:7279" type="INSTANCE" */}
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
                {/* name="Button" id="3574:7280" type="INSTANCE" */}
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
      {/* id="182:17131" */}
      {`${state}` === `typing` && `${size}` === `large` && (
        <>
          {/* name="state=typing, size=large" id="182:17131" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "64px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                },
                ...{},
              }}
            >{`Text Area`}</span>
            {/* name="Focus Ring" id="182:17137" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  width: "240px",
                  height: "64px",
                  position: "absolute",
                  borderRadius: "8px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Resizer" id="182:17690" type="BOOLEAN_OPERATION" */}
            <QodeSvg18217690
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "229px",
                  top: "53px",
                  fill: "var(--neutral-gray-90, #464646)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3012:28089" type="FRAME" */}
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
              {/* name="Button" id="3012:28090" type="INSTANCE" */}
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
              {/* name="vote" id="3012:28091" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3012:28092" type="INSTANCE" */}
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
                {/* name="Button" id="3012:28093" type="INSTANCE" */}
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
      {/* id="182:17138" */}
      {`${state}` === `filled` && `${size}` === `large` && (
        <>
          {/* name="state=filled, size=large" id="182:17138" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "64px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                },
                ...{},
              }}
            >{`Text Area`}</span>
            {/* name="Resizer" id="182:17712" type="BOOLEAN_OPERATION" */}
            <QodeSvg18217712
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "229px",
                  top: "53px",
                  fill: "var(--neutral-gray-90, #464646)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3012:28103" type="FRAME" */}
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
              {/* name="Button" id="3012:28104" type="INSTANCE" */}
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
              {/* name="vote" id="3012:28105" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3012:28106" type="INSTANCE" */}
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
                {/* name="Button" id="3012:28107" type="INSTANCE" */}
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
      {/* id="182:17144" */}
      {`${state}` === `disabled` && `${size}` === `large` && (
        <>
          {/* name="state=disabled, size=large" id="182:17144" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "64px",
                padding: "var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-disabled, #d5d5d5)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                },
                ...{},
              }}
            >{`Text Area`}</span>
            {/* name="Resizer" id="182:17696" type="BOOLEAN_OPERATION" */}
            <QodeSvg18217696
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "229px",
                  top: "53px",
                  fill: "var(--neutral-gray-40, #a7a7a7)",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="182:17282" */}
      {`${state}` === `default` && `${size}` === `small` && (
        <>
          {/* name="state=default, size=small" id="182:17282" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "44px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Text Area`}</span>
            {/* name="Resizer" id="182:17709" type="BOOLEAN_OPERATION" */}
            <QodeSvg18217709
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "229px",
                  top: "33px",
                  fill: "var(--neutral-gray-90, #464646)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3012:28047" type="FRAME" */}
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
              {/* name="Button" id="3012:28048" type="INSTANCE" */}
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
              {/* name="vote" id="3012:28049" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3012:28050" type="INSTANCE" */}
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
                {/* name="Button" id="3012:28051" type="INSTANCE" */}
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
      {/* id="182:17288" */}
      {`${state}` === `hover` && `${size}` === `small` && (
        <>
          {/* name="state=hover, size=small" id="182:17288" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "44px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Text Area`}</span>
            {/* name="Resizer" id="182:17715" type="BOOLEAN_OPERATION" */}
            <QodeSvg18217715
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "229px",
                  top: "33px",
                  fill: "var(--neutral-gray-90, #464646)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3012:28173" type="FRAME" */}
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
              {/* name="Button" id="3012:28174" type="INSTANCE" */}
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
              {/* name="vote" id="3012:28175" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3012:28176" type="INSTANCE" */}
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
                {/* name="Button" id="3012:28177" type="INSTANCE" */}
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
      {/* id="182:17294" */}
      {`${state}` === `focussed` && `${size}` === `small` && (
        <>
          {/* name="state=focussed, size=small" id="182:17294" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "44px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Text Area`}</span>
            {/* name="Focus Ring" id="182:17300" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  width: "240px",
                  height: "44px",
                  position: "absolute",
                  borderRadius: "8px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Resizer" id="182:17718" type="BOOLEAN_OPERATION" */}
            <QodeSvg18217718
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "229px",
                  top: "33px",
                  fill: "var(--neutral-gray-90, #464646)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3012:28178" type="FRAME" */}
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
              {/* name="Button" id="3012:28179" type="INSTANCE" */}
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
              {/* name="vote" id="3012:28180" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3012:28181" type="INSTANCE" */}
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
                {/* name="Button" id="3012:28182" type="INSTANCE" */}
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
      {/* id="3574:7281" */}
      {`${state}` === `error` && `${size}` === `small` && (
        <>
          {/* name="state=error, size=small" id="3574:7281" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "44px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Text Area`}</span>
            {/* name="Focus Ring" id="3574:7283" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  width: "240px",
                  height: "44px",
                  position: "absolute",
                  borderRadius: "8px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Resizer" id="3574:7284" type="BOOLEAN_OPERATION" */}
            <QodeSvg35747284
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "229px",
                  top: "33px",
                  fill: "var(--neutral-gray-90, #464646)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3574:7287" type="FRAME" */}
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
              {/* name="Button" id="3574:7288" type="INSTANCE" */}
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
              {/* name="vote" id="3574:7289" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3574:7290" type="INSTANCE" */}
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
                {/* name="Button" id="3574:7291" type="INSTANCE" */}
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
      {/* id="182:17301" */}
      {`${state}` === `typing` && `${size}` === `small` && (
        <>
          {/* name="state=typing, size=small" id="182:17301" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "44px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Text Area`}</span>
            {/* name="Focus Ring" id="182:17307" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  width: "240px",
                  height: "44px",
                  position: "absolute",
                  borderRadius: "8px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Resizer" id="182:17721" type="BOOLEAN_OPERATION" */}
            <QodeSvg18217721
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "229px",
                  top: "33px",
                  fill: "var(--neutral-gray-90, #464646)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3012:28183" type="FRAME" */}
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
              {/* name="Button" id="3012:28184" type="INSTANCE" */}
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
              {/* name="vote" id="3012:28185" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3012:28186" type="INSTANCE" */}
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
                {/* name="Button" id="3012:28187" type="INSTANCE" */}
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
      {/* id="182:17308" */}
      {`${state}` === `filled` && `${size}` === `small` && (
        <>
          {/* name="state=filled, size=small" id="182:17308" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "44px",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Text Area`}</span>
            {/* name="Resizer" id="182:17724" type="BOOLEAN_OPERATION" */}
            <QodeSvg18217724
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "229px",
                  top: "33px",
                  fill: "var(--neutral-gray-90, #464646)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="button" id="3012:28188" type="FRAME" */}
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
              {/* name="Button" id="3012:28189" type="INSTANCE" */}
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
              {/* name="vote" id="3012:28190" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start" },
                  ...{},
                }}
              >
                {/* name="Button" id="3012:28191" type="INSTANCE" */}
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
                {/* name="Button" id="3012:28192" type="INSTANCE" */}
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
      {/* id="182:17314" */}
      {`${state}` === `disabled` && `${size}` === `small` && (
        <>
          {/* name="state=disabled, size=small" id="182:17314" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                height: "44px",
                padding: "var(--size-padding-paddingxs, 8px)",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-disabled, #d5d5d5)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Text Area`}</span>
            {/* name="Resizer" id="182:17727" type="BOOLEAN_OPERATION" */}
            <QodeSvg18217727
              style={{
                ...{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "229px",
                  top: "33px",
                  fill: "var(--neutral-gray-40, #a7a7a7)",
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
