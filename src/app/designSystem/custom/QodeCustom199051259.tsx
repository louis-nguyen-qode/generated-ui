// id="1990:51259"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom108651005 } from "@designSystem/custom/QodeCustom108651005"
import { QodeCustom228149026 } from "@designSystem/custom/QodeCustom228149026"
import { QodeCustom32828485 } from "@designSystem/custom/QodeCustom32828485"
import { QodeCustom32828505 } from "@designSystem/custom/QodeCustom32828505"

export interface QodeCustom199051259Props {
  state?: "default" | "show"
}

export const QodeCustom199051259: React.FC<
  QodeCustom199051259Props & { style?: CSSProperties }
> = ({ state = "default", style, ...rest }) => {
  return (
    <>
      {/* name="Verified profile" id="1990:51259" type="COMPONENT_SET" */}
      {/* id="1990:52718" */}
      {`${state}` === `default` && (
        <>
          {/* name="state=default" id="1990:52718" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "723px",
                justifyContent: "space-between",
                alignItems: "center",
              },
              ...style,
            }}
          >
            {/* name="Left" id="1990:52910" type="FRAME" */}
            <div
              style={{
                ...{ display: "flex", alignItems: "center", gap: "8px" },
                ...{},
              }}
            >
              {/* name="sparkles" id="1990:52911" type="INSTANCE" */}
              <QodeCustom108651005
                style={{ ...{ width: "24px", height: "24px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-size-sizemd-20px, 20px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  },
                  ...{},
                }}
              >{`Expertise`}</span>
            </div>
            {/* name="Button" id="1990:52722" type="INSTANCE" */}
            <QodeCustom228149026
              style={{
                ...{
                  display: "flex",
                  width: "100px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                buttonname: "Show skills",
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
      {/* id="1990:52729" */}
      {`${state}` === `show` && (
        <>
          {/* name="state=show" id="1990:52729" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "723px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
              },
              ...style,
            }}
          >
            {/* name="Frame 37485" id="1990:52747" type="FRAME" */}
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
              {/* name="Left" id="1990:52730" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "center", gap: "8px" },
                  ...{},
                }}
              >
                {/* name="sparkles" id="1990:52731" type="INSTANCE" */}
                <QodeCustom108651005
                  style={{ ...{ width: "24px", height: "24px" }, ...{} }}
                  {...{}}
                />
                <span
                  style={{
                    ...{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-size-sizemd-20px, 20px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                    },
                    ...{},
                  }}
                >{`Expertise`}</span>
              </div>
              {/* name="Button hide" id="1990:52740" type="INSTANCE" */}
              <QodeCustom228149026
                style={{
                  ...{
                    display: "flex",
                    width: "61px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "4px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Hide",
                  type: "default",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
            {/* name="Skils" id="1990:52748" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "683px",
                  flexDirection: "column",
                  alignItems: "flex-end",
                },
                ...{},
              }}
            >
              {/* name="skills" id="1990:52749" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    gap: "8px",
                    alignSelf: "stretch",
                    flexWrap: "wrap",
                  },
                  ...{},
                }}
              >
                {/* name="Tag" id="1990:52750" type="INSTANCE" */}
                <QodeCustom32828485
                  style={{
                    ...{
                      display: "flex",
                      height: "30px",
                      padding: "0px 12px",
                      alignItems: "center",
                      gap: "var(--size-size-sizexxs-6px, 6px)",
                      borderRadius: "4px",
                      border: "1px solid var(--primary-primary-40, #64b9f5)",
                      background: "var(--primary-primary-10, #d6eeff)",
                    },
                    ...{},
                  }}
                  {...{
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="Tag" id="1990:52751" type="INSTANCE" */}
                <QodeCustom32828485
                  style={{
                    ...{
                      display: "flex",
                      height: "30px",
                      padding: "0px 12px",
                      alignItems: "center",
                      gap: "var(--size-size-sizexxs-6px, 6px)",
                      borderRadius: "4px",
                      border: "1px solid var(--primary-primary-40, #64b9f5)",
                      background: "var(--primary-primary-10, #d6eeff)",
                    },
                    ...{},
                  }}
                  {...{
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="Tag" id="1990:52752" type="INSTANCE" */}
                <QodeCustom32828485
                  style={{
                    ...{
                      display: "flex",
                      height: "30px",
                      padding: "0px 12px",
                      alignItems: "center",
                      gap: "var(--size-size-sizexxs-6px, 6px)",
                      borderRadius: "4px",
                      border: "1px solid var(--primary-primary-40, #64b9f5)",
                      background: "var(--primary-primary-10, #d6eeff)",
                    },
                    ...{},
                  }}
                  {...{
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="Tag" id="1990:52753" type="INSTANCE" */}
                <QodeCustom32828485
                  style={{
                    ...{
                      display: "flex",
                      height: "30px",
                      padding: "0px 12px",
                      alignItems: "center",
                      gap: "var(--size-size-sizexxs-6px, 6px)",
                      borderRadius: "4px",
                      border: "1px solid var(--primary-primary-40, #64b9f5)",
                      background: "var(--primary-primary-10, #d6eeff)",
                    },
                    ...{},
                  }}
                  {...{
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="Tag" id="1990:52754" type="INSTANCE" */}
                <QodeCustom32828505
                  style={{
                    ...{
                      display: "flex",
                      height: "30px",
                      padding: "0px 12px",
                      alignItems: "center",
                      gap: "var(--size-size-sizexxs-6px, 6px)",
                      borderRadius: "4px",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                      background: "var(--neutral-gray-5, #f8f6f6)",
                    },
                    ...{},
                  }}
                  {...{
                    color: "neutral",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="Tag" id="1990:52755" type="INSTANCE" */}
                <QodeCustom32828505
                  style={{
                    ...{
                      display: "flex",
                      height: "30px",
                      padding: "0px 12px",
                      alignItems: "center",
                      gap: "var(--size-size-sizexxs-6px, 6px)",
                      borderRadius: "4px",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                      background: "var(--neutral-gray-5, #f8f6f6)",
                    },
                    ...{},
                  }}
                  {...{
                    color: "neutral",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="Tag" id="1990:52756" type="INSTANCE" */}
                <QodeCustom32828505
                  style={{
                    ...{
                      display: "flex",
                      height: "30px",
                      padding: "0px 12px",
                      alignItems: "center",
                      gap: "var(--size-size-sizexxs-6px, 6px)",
                      borderRadius: "4px",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                      background: "var(--neutral-gray-5, #f8f6f6)",
                    },
                    ...{},
                  }}
                  {...{
                    color: "neutral",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="Tag" id="1990:52757" type="INSTANCE" */}
                <QodeCustom32828505
                  style={{
                    ...{
                      display: "flex",
                      height: "30px",
                      padding: "0px 12px",
                      alignItems: "center",
                      gap: "var(--size-size-sizexxs-6px, 6px)",
                      borderRadius: "4px",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                      background: "var(--neutral-gray-5, #f8f6f6)",
                    },
                    ...{},
                  }}
                  {...{
                    color: "neutral",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="Tag" id="1990:52758" type="INSTANCE" */}
                <QodeCustom32828505
                  style={{
                    ...{
                      display: "flex",
                      height: "30px",
                      padding: "0px 12px",
                      alignItems: "center",
                      gap: "var(--size-size-sizexxs-6px, 6px)",
                      borderRadius: "4px",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                      background: "var(--neutral-gray-5, #f8f6f6)",
                    },
                    ...{},
                  }}
                  {...{
                    color: "neutral",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="Tag" id="1990:52759" type="INSTANCE" */}
                <QodeCustom32828505
                  style={{
                    ...{
                      display: "flex",
                      height: "30px",
                      padding: "0px 12px",
                      alignItems: "center",
                      gap: "var(--size-size-sizexxs-6px, 6px)",
                      borderRadius: "4px",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                      background: "var(--neutral-gray-5, #f8f6f6)",
                    },
                    ...{},
                  }}
                  {...{
                    color: "neutral",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="Tag" id="1990:52760" type="INSTANCE" */}
                <QodeCustom32828505
                  style={{
                    ...{
                      display: "flex",
                      height: "30px",
                      padding: "0px 12px",
                      alignItems: "center",
                      gap: "var(--size-size-sizexxs-6px, 6px)",
                      borderRadius: "4px",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                      background: "var(--neutral-gray-5, #f8f6f6)",
                    },
                    ...{},
                  }}
                  {...{
                    color: "neutral",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="Tag" id="1990:52761" type="INSTANCE" */}
                <QodeCustom32828505
                  style={{
                    ...{
                      display: "flex",
                      height: "30px",
                      padding: "0px 12px",
                      alignItems: "center",
                      gap: "var(--size-size-sizexxs-6px, 6px)",
                      borderRadius: "4px",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                      background: "var(--neutral-gray-5, #f8f6f6)",
                    },
                    ...{},
                  }}
                  {...{
                    color: "neutral",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="Tag" id="1990:52762" type="INSTANCE" */}
                <QodeCustom32828505
                  style={{
                    ...{
                      display: "flex",
                      height: "30px",
                      padding: "0px 12px",
                      alignItems: "center",
                      gap: "var(--size-size-sizexxs-6px, 6px)",
                      borderRadius: "4px",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                      background: "var(--neutral-gray-5, #f8f6f6)",
                    },
                    ...{},
                  }}
                  {...{
                    color: "neutral",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="Tag" id="1990:52763" type="INSTANCE" */}
                <QodeCustom32828505
                  style={{
                    ...{
                      display: "flex",
                      height: "30px",
                      padding: "0px 12px",
                      alignItems: "center",
                      gap: "var(--size-size-sizexxs-6px, 6px)",
                      borderRadius: "4px",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                      background: "var(--neutral-gray-5, #f8f6f6)",
                    },
                    ...{},
                  }}
                  {...{
                    color: "neutral",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="Tag" id="1990:52764" type="INSTANCE" */}
                <QodeCustom32828505
                  style={{
                    ...{
                      display: "flex",
                      height: "30px",
                      padding: "0px 12px",
                      alignItems: "center",
                      gap: "var(--size-size-sizexxs-6px, 6px)",
                      borderRadius: "4px",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                      background: "var(--neutral-gray-5, #f8f6f6)",
                    },
                    ...{},
                  }}
                  {...{
                    color: "neutral",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
