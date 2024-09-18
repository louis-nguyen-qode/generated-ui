// id="139:8559"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom1398559Props {
  showTitle?: boolean
  icon?: React.ReactNode
  title?: string
  showIcon?: boolean
  size?: "default" | "large" | "small"
  active?: "false" | "true"
  disabled?: "false" | "true"
}

export const QodeCustom1398559: React.FC<
  QodeCustom1398559Props & { style?: CSSProperties }
> = ({
  showTitle = true,
  icon = undefined,
  title = "Item",
  showIcon = true,
  size = "default",
  active = "true",
  disabled = "false",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name=".segmented__item" id="139:8559" type="COMPONENT_SET" */}
      {/* id="139:8560" */}
      {`${size}` === `default` &&
        `${active}` === `true` &&
        `${disabled}` === `false` && (
          <>
            {/* name="size=default, active=true, disabled=false" id="139:8560" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="139:8572" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Item`}</span>
            </div>
          </>
        )}
      {/* id="139:8561" */}
      {`${size}` === `default` &&
        `${active}` === `false` &&
        `${disabled}` === `false` && (
          <>
            {/* name="size=default, active=false, disabled=false" id="139:8561" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-small, 4px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="139:8574" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Item`}</span>
            </div>
          </>
        )}
      {/* id="139:8562" */}
      {`${size}` === `default` &&
        `${active}` === `true` &&
        `${disabled}` === `true` && (
          <>
            {/* name="size=default, active=true, disabled=true" id="139:8562" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-neutral-5, #f8f6f6)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="139:8576" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-placeholder, #a7a7a7)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Item`}</span>
            </div>
          </>
        )}
      {/* id="139:8563" */}
      {`${size}` === `default` &&
        `${active}` === `false` &&
        `${disabled}` === `true` && (
          <>
            {/* name="size=default, active=false, disabled=true" id="139:8563" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-small, 4px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="139:8578" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-disabled, #bfbfbf)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Item`}</span>
            </div>
          </>
        )}
      {/* id="139:8564" */}
      {`${size}` === `large` &&
        `${active}` === `true` &&
        `${disabled}` === `false` && (
          <>
            {/* name="size=large, active=true, disabled=false" id="139:8564" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "36px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="139:8580" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: '"SF Pro Display"',
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Item`}</span>
            </div>
          </>
        )}
      {/* id="139:8565" */}
      {`${size}` === `large` &&
        `${active}` === `false` &&
        `${disabled}` === `false` && (
          <>
            {/* name="size=large, active=false, disabled=false" id="139:8565" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "36px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-small, 4px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="139:8582" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Item`}</span>
            </div>
          </>
        )}
      {/* id="139:8566" */}
      {`${size}` === `large` &&
        `${active}` === `true` &&
        `${disabled}` === `true` && (
          <>
            {/* name="size=large, active=true, disabled=true" id="139:8566" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "36px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-neutral-5, #f8f6f6)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="139:8584" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-placeholder, #a7a7a7)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Item`}</span>
            </div>
          </>
        )}
      {/* id="139:8567" */}
      {`${size}` === `large` &&
        `${active}` === `false` &&
        `${disabled}` === `true` && (
          <>
            {/* name="size=large, active=false, disabled=true" id="139:8567" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "36px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-small, 4px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="139:8586" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-disabled, #bfbfbf)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Item`}</span>
            </div>
          </>
        )}
      {/* id="139:8568" */}
      {`${size}` === `small` &&
        `${active}` === `true` &&
        `${disabled}` === `false` && (
          <>
            {/* name="size=small, active=true, disabled=false" id="139:8568" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheight, 22px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="139:8588" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Item`}</span>
            </div>
          </>
        )}
      {/* id="139:8569" */}
      {`${size}` === `small` &&
        `${active}` === `false` &&
        `${disabled}` === `false` && (
          <>
            {/* name="size=small, active=false, disabled=false" id="139:8569" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheight, 22px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-small, 4px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="139:8590" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Item`}</span>
            </div>
          </>
        )}
      {/* id="139:8570" */}
      {`${size}` === `small` &&
        `${active}` === `true` &&
        `${disabled}` === `true` && (
          <>
            {/* name="size=small, active=true, disabled=true" id="139:8570" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheight, 22px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-neutral-5, #f8f6f6)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="139:8592" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-placeholder, #a7a7a7)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Item`}</span>
            </div>
          </>
        )}
      {/* id="139:8571" */}
      {`${size}` === `small` &&
        `${active}` === `false` &&
        `${disabled}` === `true` && (
          <>
            {/* name="size=small, active=false, disabled=true" id="139:8571" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheight, 22px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-small, 4px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="139:8594" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-disabled, #bfbfbf)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Item`}</span>
            </div>
          </>
        )}
    </>
  )
}
