// id="307:17676"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom266995 } from "@designSystem/custom/QodeCustom266995"
import { QodeCustom31123052 } from "@designSystem/custom/QodeCustom31123052"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom4310802 } from "@designSystem/custom/QodeCustom4310802"

export interface QodeCustom30717676Props {
  showDelete?: boolean
  state?: "active" | "default" | "hover"
}

export const QodeCustom30717676: React.FC<
  QodeCustom30717676Props & { style?: CSSProperties }
> = ({ showDelete = true, state = "default", style, ...rest }) => {
  return (
    <>
      {/* name="Interviewed/List item" id="307:17676" type="COMPONENT_SET" */}
      {/* id="307:17677" */}
      {`${state}` === `default` && (
        <>
          {/* name="state=default" id="307:17677" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "352px",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Header" id="307:17678" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="avatar" id="307:17679" type="INSTANCE" */}
              <QodeCustom266995
                style={{
                  ...{
                    display: "flex",
                    width: "48px",
                    height: "48px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "666px",
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
                  },
                  ...{},
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
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                {/* name="wrap" id="307:17681" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  <span
                    style={{
                      ...{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--line-height-lineheighheading5, 24px) /* 150% */",
                      },
                      ...{},
                    }}
                  >{`Nguyen Quoc Thai`}</span>
                </div>
                {/* name="Interviewed/Status" id="311:23056" type="INSTANCE" */}
                <QodeCustom31123052
                  style={{
                    ...{ display: "flex", alignItems: "center", gap: "8px" },
                    ...{},
                  }}
                  {...{ status: "upcoming" }}
                />
              </div>
            </div>
            {/* name="Frame 37201" id="307:17689" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Button" id="307:17690" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  },
                  ...{},
                }}
                {...{
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
              <QodeCustom4310802
                style={{
                  ...{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                  },
                  ...{},
                }}
                {...{ property_1: "Default" }}
              />
            </div>
            {/* name="Indicator" id="307:17692" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "-7px",
                  borderRadius: "8px",
                  background: "#FF7878",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
          </div>
        </>
      )}
      {/* id="307:17694" */}
      {`${state}` === `hover` && (
        <>
          {/* name="state=hover" id="307:17694" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "352px",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Header" id="307:17820" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="avatar" id="307:17821" type="INSTANCE" */}
              <QodeCustom266995
                style={{
                  ...{
                    display: "flex",
                    width: "48px",
                    height: "48px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "666px",
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
                  },
                  ...{},
                }}
                {...{
                  opentowork: true,
                  img: true,
                  type: "Round",
                  state: "Default",
                }}
              />
              {/* name="R" id="307:17907" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                {/* name="wrap" id="307:17908" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  <span
                    style={{
                      ...{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--line-height-lineheighheading5, 24px) /* 150% */",
                      },
                      ...{},
                    }}
                  >{`Nguyen Quoc Thai`}</span>
                </div>
                {/* name="Interviewed/Status" id="311:23091" type="INSTANCE" */}
                <QodeCustom31123052
                  style={{
                    ...{ display: "flex", alignItems: "center", gap: "8px" },
                    ...{},
                  }}
                  {...{ status: "upcoming" }}
                />
              </div>
            </div>
            {/* name="Frame 37201" id="307:17706" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Button" id="307:17707" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  },
                  ...{},
                }}
                {...{
                  title: "Add notes",
                  type: "primary",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Upload CV" id="307:17708" type="INSTANCE" */}
              <QodeCustom4310802
                style={{
                  ...{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                  },
                  ...{},
                }}
                {...{ property_1: "Default" }}
              />
            </div>
            {/* name="Indicator" id="307:17709" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "-7px",
                  borderRadius: "8px",
                  background: "#FF7878",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
          </div>
        </>
      )}
      {/* id="307:17711" */}
      {`${state}` === `active` && (
        <>
          {/* name="state=active" id="307:17711" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "352px",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "2px solid var(--border-border-primary-20, #158de2)",
                background: "var(--blue-techblue-5, #f8fcff)",
              },
              ...style,
            }}
          >
            {/* name="Header" id="307:17837" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="avatar" id="307:17838" type="INSTANCE" */}
              <QodeCustom266995
                style={{
                  ...{
                    display: "flex",
                    width: "48px",
                    height: "48px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "666px",
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
                  },
                  ...{},
                }}
                {...{
                  opentowork: true,
                  img: true,
                  type: "Round",
                  state: "Default",
                }}
              />
              {/* name="R" id="307:17912" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                {/* name="wrap" id="307:17913" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  <span
                    style={{
                      ...{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--line-height-lineheighheading5, 24px) /* 150% */",
                      },
                      ...{},
                    }}
                  >{`Nguyen Quoc Thai`}</span>
                </div>
                {/* name="Interviewed/Status" id="336:19561" type="INSTANCE" */}
                <QodeCustom31123052
                  style={{
                    ...{ display: "flex", alignItems: "center", gap: "8px" },
                    ...{},
                  }}
                  {...{ status: "upcoming" }}
                />
              </div>
            </div>
            {/* name="Frame 37201" id="307:17723" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "794px",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                },
                ...{},
              }}
            >
              {/* name="Button" id="307:17724" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  },
                  ...{},
                }}
                {...{
                  title: "Add notes",
                  type: "primary",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Upload CV" id="307:17725" type="INSTANCE" */}
              <QodeCustom4310802
                style={{
                  ...{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{ property_1: "Default" }}
              />
            </div>
            {/* name="Indicator" id="307:17726" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "-7px",
                  borderRadius: "8px",
                  background: "#FF7878",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
          </div>
        </>
      )}
    </>
  )
}
