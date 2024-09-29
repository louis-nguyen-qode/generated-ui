// id="1186:48988"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom12049 } from "@designSystem/custom/QodeCustom12049"
import { QodeCustom41707 } from "@designSystem/custom/QodeCustom41707"
import { QodeCustom118649367 } from "@designSystem/custom/QodeCustom118649367"

export interface QodeCustom118648988Props {
  showIconRight?: boolean
  suffix?: string
  showSuffix?: boolean
  title?: string
  prefix?: string
  iconRight?: React.ReactNode
  showPrefix?: boolean
  iconLeft?: React.ReactNode
  showIconLeft?: boolean
  state?: "default" | "hover" | "focused" | "typing" | "filled" | "disabled"
  status?: "default" | "error" | "warning"
  size?: "default" | "large" | "small"
}

export const QodeCustom118648988: React.FC<
  QodeCustom118648988Props & { style?: CSSProperties }
> = ({
  showIconRight = false,
  suffix = "SUF",
  showSuffix = false,
  title = "Input",
  prefix = "PRE",
  iconRight = undefined,
  showPrefix = false,
  iconLeft = undefined,
  showIconLeft = true,
  state = "default",
  status = "default",
  size = "default",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Input" id="1186:48988" type="COMPONENT_SET" */}
      {/* id="1186:48989" */}
      {`${state}` === `default` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=default, status=default, size=default" id="1186:48989" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:48990" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:48994" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:48995" */}
      {`${state}` === `hover` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=hover, status=default, size=default" id="1186:48995" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-primary-colorprimary, #2d64bc)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:48996" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49000" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49001" */}
      {`${state}` === `focused` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=focused, status=default, size=default" id="1186:49001" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-primary-colorprimary, #2d64bc)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49002" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49006" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Focus Ring" id="1186:49007" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "240px",
                    height: "32px",
                    position: "absolute",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "1px solid var(--color-primary-colorprimaryborder, #abc1e4)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="1186:49008" */}
      {`${state}` === `typing` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=typing, status=default, size=default" id="1186:49008" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-primary-colorprimary, #2d64bc)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49009" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49013" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Focus Ring" id="1186:49014" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "240px",
                    height: "32px",
                    position: "absolute",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "1px solid var(--color-primary-colorprimaryborder, #abc1e4)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="1186:49015" */}
      {`${state}` === `filled` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=filled, status=default, size=default" id="1186:49015" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49016" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49020" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49021" */}
      {`${state}` === `disabled` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=disabled, status=default, size=default" id="1186:49021" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49022" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49026" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49027" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=default, status=error, size=default" id="1186:49027" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border: "1px solid var(--color-error-colorerror, #ff6542)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49028" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49032" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Error" id="1186:49033" type="INSTANCE" */}
              <QodeCustom41707
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49034" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=hover, status=error, size=default" id="1186:49034" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border: "1px solid var(--color-error-colorerror, #ff6542)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49035" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49039" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Error" id="1186:49040" type="INSTANCE" */}
              <QodeCustom41707
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49041" */}
      {`${state}` === `focused` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=focused, status=error, size=default" id="1186:49041" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border: "1px solid var(--color-error-colorerror, #ff6542)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49042" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49046" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Focus Ring" id="1186:49047" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "240px",
                    height: "32px",
                    position: "absolute",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "1px solid var(--color-error-colorerrorborder, #ffc1b3)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Error" id="1186:49048" type="INSTANCE" */}
              <QodeCustom41707
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49049" */}
      {`${state}` === `typing` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=typing, status=error, size=default" id="1186:49049" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border: "1px solid var(--color-error-colorerror, #ff6542)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49050" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49054" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Focus Ring" id="1186:49055" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "240px",
                    height: "32px",
                    position: "absolute",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "1px solid var(--color-error-colorerrorborder, #ffc1b3)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Error" id="1186:49056" type="INSTANCE" */}
              <QodeCustom41707
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49057" */}
      {`${state}` === `filled` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=filled, status=error, size=default" id="1186:49057" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border: "1px solid var(--color-error-colorerror, #ff6542)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49058" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49062" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Error" id="1186:49063" type="INSTANCE" */}
              <QodeCustom41707
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49064" */}
      {`${state}` === `disabled` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=disabled, status=error, size=default" id="1186:49064" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49065" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49069" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Error" id="1186:49070" type="INSTANCE" */}
              <QodeCustom41707
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49071" */}
      {`${state}` === `default` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=default, status=warning, size=default" id="1186:49071" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-warning-colorwarning, #fa9f42)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49072" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49076" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Warning" id="1186:49077" type="INSTANCE" */}
              <QodeCustom118649367
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49078" */}
      {`${state}` === `hover` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=hover, status=warning, size=default" id="1186:49078" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-warning-colorwarning, #fa9f42)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49079" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49083" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Warning" id="1186:49084" type="INSTANCE" */}
              <QodeCustom118649367
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49085" */}
      {`${state}` === `focused` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=focused, status=warning, size=default" id="1186:49085" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-warning-colorwarning, #fa9f42)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49086" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49090" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Focus Ring" id="1186:49091" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "240px",
                    height: "32px",
                    position: "absolute",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "1px solid var(--color-warning-colorwarningborder, #fdd9b3)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Warning" id="1186:49092" type="INSTANCE" */}
              <QodeCustom118649367
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49093" */}
      {`${state}` === `typing` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=typing, status=warning, size=default" id="1186:49093" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-warning-colorwarning, #fa9f42)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49094" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49098" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Focus Ring" id="1186:49099" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "240px",
                    height: "32px",
                    position: "absolute",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "1px solid var(--color-warning-colorwarningborder, #fdd9b3)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Warning" id="1186:49100" type="INSTANCE" */}
              <QodeCustom118649367
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49101" */}
      {`${state}` === `filled` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=filled, status=warning, size=default" id="1186:49101" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-warning-colorwarning, #fa9f42)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49102" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49106" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Warning" id="1186:49107" type="INSTANCE" */}
              <QodeCustom118649367
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49108" */}
      {`${state}` === `disabled` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=disabled, status=warning, size=default" id="1186:49108" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49109" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49113" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Warning" id="1186:49114" type="INSTANCE" */}
              <QodeCustom118649367
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49115" */}
      {`${state}` === `default` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=default, status=default, size=large" id="1186:49115" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49116" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49120" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49121" */}
      {`${state}` === `hover` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=hover, status=default, size=large" id="1186:49121" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-primary-colorprimary, #2d64bc)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49122" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49126" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49127" */}
      {`${state}` === `focused` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=focused, status=default, size=large" id="1186:49127" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-primary-colorprimary, #2d64bc)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49128" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49132" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Focus Ring" id="1186:49133" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "240px",
                    height: "40px",
                    position: "absolute",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "1px solid var(--color-primary-colorprimaryborder, #abc1e4)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="1186:49134" */}
      {`${state}` === `typing` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=typing, status=default, size=large" id="1186:49134" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-primary-colorprimary, #2d64bc)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49135" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49139" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Focus Ring" id="1186:49140" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "240px",
                    height: "40px",
                    position: "absolute",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "1px solid var(--color-primary-colorprimaryborder, #abc1e4)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="1186:49141" */}
      {`${state}` === `filled` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=filled, status=default, size=large" id="1186:49141" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49142" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49146" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49147" */}
      {`${state}` === `disabled` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=disabled, status=default, size=large" id="1186:49147" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49148" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49152" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49153" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=default, status=error, size=large" id="1186:49153" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border: "1px solid var(--color-error-colorerror, #ff6542)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49154" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49158" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Error" id="1186:49159" type="INSTANCE" */}
              <QodeCustom41707
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49160" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=hover, status=error, size=large" id="1186:49160" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border: "1px solid var(--color-error-colorerror, #ff6542)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49161" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49165" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Error" id="1186:49166" type="INSTANCE" */}
              <QodeCustom41707
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49167" */}
      {`${state}` === `focused` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=focused, status=error, size=large" id="1186:49167" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border: "1px solid var(--color-error-colorerror, #ff6542)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49168" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49172" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Focus Ring" id="1186:49173" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "240px",
                    height: "40px",
                    position: "absolute",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "1px solid var(--color-error-colorerrorborder, #ffc1b3)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Error" id="1186:49174" type="INSTANCE" */}
              <QodeCustom41707
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49175" */}
      {`${state}` === `typing` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=typing, status=error, size=large" id="1186:49175" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border: "1px solid var(--color-error-colorerror, #ff6542)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49176" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49180" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Focus Ring" id="1186:49181" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "240px",
                    height: "40px",
                    position: "absolute",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "1px solid var(--color-error-colorerrorborder, #ffc1b3)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Error" id="1186:49182" type="INSTANCE" */}
              <QodeCustom41707
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49183" */}
      {`${state}` === `filled` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=filled, status=error, size=large" id="1186:49183" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border: "1px solid var(--color-error-colorerror, #ff6542)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49184" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49188" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Error" id="1186:49189" type="INSTANCE" */}
              <QodeCustom41707
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49190" */}
      {`${state}` === `disabled` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=disabled, status=error, size=large" id="1186:49190" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49191" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49195" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Error" id="1186:49196" type="INSTANCE" */}
              <QodeCustom41707
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49197" */}
      {`${state}` === `default` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=default, status=warning, size=large" id="1186:49197" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-warning-colorwarning, #fa9f42)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49198" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49202" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Warning" id="1186:49203" type="INSTANCE" */}
              <QodeCustom118649367
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49204" */}
      {`${state}` === `hover` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=hover, status=warning, size=large" id="1186:49204" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-warning-colorwarning, #fa9f42)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49205" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49209" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Warning" id="1186:49210" type="INSTANCE" */}
              <QodeCustom118649367
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49211" */}
      {`${state}` === `focused` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=focused, status=warning, size=large" id="1186:49211" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-warning-colorwarning, #fa9f42)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49212" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49216" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Focus Ring" id="1186:49217" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "240px",
                    height: "40px",
                    position: "absolute",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "1px solid var(--color-warning-colorwarningborder, #fdd9b3)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Warning" id="1186:49218" type="INSTANCE" */}
              <QodeCustom118649367
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49219" */}
      {`${state}` === `typing` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=typing, status=warning, size=large" id="1186:49219" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-warning-colorwarning, #fa9f42)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49220" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49224" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Focus Ring" id="1186:49225" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "240px",
                    height: "40px",
                    position: "absolute",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "1px solid var(--color-warning-colorwarningborder, #fdd9b3)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Warning" id="1186:49226" type="INSTANCE" */}
              <QodeCustom118649367
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49227" */}
      {`${state}` === `filled` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=filled, status=warning, size=large" id="1186:49227" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-warning-colorwarning, #fa9f42)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49228" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49232" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Warning" id="1186:49233" type="INSTANCE" */}
              <QodeCustom118649367
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49234" */}
      {`${state}` === `disabled` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=disabled, status=warning, size=large" id="1186:49234" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49235" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49239" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Warning" id="1186:49240" type="INSTANCE" */}
              <QodeCustom118649367
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49241" */}
      {`${state}` === `default` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=default, size=small" id="1186:49241" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49242" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49246" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49247" */}
      {`${state}` === `hover` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=default, size=small" id="1186:49247" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-primary-colorprimary, #2d64bc)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49248" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49252" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49253" */}
      {`${state}` === `focused` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=focused, status=default, size=small" id="1186:49253" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-primary-colorprimary, #2d64bc)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49254" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49258" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Focus Ring" id="1186:49259" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "240px",
                    height: "24px",
                    position: "absolute",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "1px solid var(--color-primary-colorprimaryborder, #abc1e4)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="1186:49260" */}
      {`${state}` === `typing` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=typing, status=default, size=small" id="1186:49260" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-primary-colorprimary, #2d64bc)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49261" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49265" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Focus Ring" id="1186:49266" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "240px",
                    height: "24px",
                    position: "absolute",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "1px solid var(--color-primary-colorprimaryborder, #abc1e4)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="1186:49267" */}
      {`${state}` === `filled` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=filled, status=default, size=small" id="1186:49267" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49268" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49272" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49273" */}
      {`${state}` === `disabled` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=disabled, status=default, size=small" id="1186:49273" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49274" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49278" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49279" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=error, size=small" id="1186:49279" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border: "1px solid var(--color-error-colorerror, #ff6542)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49280" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49284" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Error" id="1186:49285" type="INSTANCE" */}
              <QodeCustom41707
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49286" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=error, size=small" id="1186:49286" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border: "1px solid var(--color-error-colorerror, #ff6542)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49287" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49291" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Error" id="1186:49292" type="INSTANCE" */}
              <QodeCustom41707
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49293" */}
      {`${state}` === `focused` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=focused, status=error, size=small" id="1186:49293" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border: "1px solid var(--color-error-colorerror, #ff6542)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49294" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49298" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Focus Ring" id="1186:49299" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "240px",
                    height: "24px",
                    position: "absolute",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "1px solid var(--color-error-colorerrorborder, #ffc1b3)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Error" id="1186:49300" type="INSTANCE" */}
              <QodeCustom41707
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49301" */}
      {`${state}` === `typing` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=typing, status=error, size=small" id="1186:49301" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border: "1px solid var(--color-error-colorerror, #ff6542)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49302" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49306" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Focus Ring" id="1186:49307" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "240px",
                    height: "24px",
                    position: "absolute",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "1px solid var(--color-error-colorerrorborder, #ffc1b3)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Error" id="1186:49308" type="INSTANCE" */}
              <QodeCustom41707
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49309" */}
      {`${state}` === `filled` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=filled, status=error, size=small" id="1186:49309" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border: "1px solid var(--color-error-colorerror, #ff6542)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49310" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49314" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Error" id="1186:49315" type="INSTANCE" */}
              <QodeCustom41707
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49316" */}
      {`${state}` === `disabled` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=disabled, status=error, size=small" id="1186:49316" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49317" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49321" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Error" id="1186:49322" type="INSTANCE" */}
              <QodeCustom41707
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49323" */}
      {`${state}` === `default` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=warning, size=small" id="1186:49323" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-warning-colorwarning, #fa9f42)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49324" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49328" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Warning" id="1186:49329" type="INSTANCE" */}
              <QodeCustom118649367
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49330" */}
      {`${state}` === `hover` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=warning, size=small" id="1186:49330" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-warning-colorwarning, #fa9f42)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49331" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49335" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Warning" id="1186:49336" type="INSTANCE" */}
              <QodeCustom118649367
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49337" */}
      {`${state}` === `focused` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=focused, status=warning, size=small" id="1186:49337" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-warning-colorwarning, #fa9f42)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49338" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49342" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Focus Ring" id="1186:49343" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "240px",
                    height: "24px",
                    position: "absolute",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "1px solid var(--color-warning-colorwarningborder, #fdd9b3)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Warning" id="1186:49344" type="INSTANCE" */}
              <QodeCustom118649367
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49345" */}
      {`${state}` === `typing` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=typing, status=warning, size=small" id="1186:49345" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-warning-colorwarning, #fa9f42)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49346" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49350" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Focus Ring" id="1186:49351" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "240px",
                    height: "24px",
                    position: "absolute",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "1px solid var(--color-warning-colorwarningborder, #fdd9b3)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Warning" id="1186:49352" type="INSTANCE" */}
              <QodeCustom118649367
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49353" */}
      {`${state}` === `filled` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=filled, status=warning, size=small" id="1186:49353" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-warning-colorwarning, #fa9f42)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49354" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49358" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Warning" id="1186:49359" type="INSTANCE" */}
              <QodeCustom118649367
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="1186:49360" */}
      {`${state}` === `disabled` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=disabled, status=warning, size=small" id="1186:49360" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon left" id="1186:49361" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`PRE`}</span>
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Input`}</span>
              <span
                style={{
                  ...{
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="1186:49365" type="INSTANCE" */}
              <QodeCustom12049
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Warning" id="1186:49366" type="INSTANCE" */}
              <QodeCustom118649367
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
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
