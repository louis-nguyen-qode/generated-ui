// id="202:42576"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom20242576Props {
  showTitle?: boolean
  icon?: React.ReactNode
  title?: string
  showIcon?: boolean
  size?: "default" | "large" | "small"
  active?: "false" | "true"
  disabled?: "false" | "true"
}

export const QodeCustom20242576: React.FC<
  QodeCustom20242576Props & { style?: CSSProperties }
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
      {/* name=".segmented__item" id="202:42576" type="COMPONENT_SET" */}
      {/* id="202:42575" */}
      {`${size}` === `default` &&
        `${active}` === `true` &&
        `${disabled}` === `false` && (
          <>
            {/* name="size=default, active=true, disabled=false" id="202:42575" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="202:42572" type="INSTANCE" */}
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
      {/* id="202:42595" */}
      {`${size}` === `default` &&
        `${active}` === `false` &&
        `${disabled}` === `false` && (
          <>
            {/* name="size=default, active=false, disabled=false" id="202:42595" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="202:42596" type="INSTANCE" */}
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
      {/* id="202:42599" */}
      {`${size}` === `default` &&
        `${active}` === `true` &&
        `${disabled}` === `true` && (
          <>
            {/* name="size=default, active=true, disabled=true" id="202:42599" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="202:42600" type="INSTANCE" */}
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
      {/* id="202:42602" */}
      {`${size}` === `default` &&
        `${active}` === `false` &&
        `${disabled}` === `true` && (
          <>
            {/* name="size=default, active=false, disabled=true" id="202:42602" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="202:42603" type="INSTANCE" */}
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
      {/* id="202:42607" */}
      {`${size}` === `large` &&
        `${active}` === `true` &&
        `${disabled}` === `false` && (
          <>
            {/* name="size=large, active=true, disabled=false" id="202:42607" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="202:42608" type="INSTANCE" */}
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
      {/* id="202:42610" */}
      {`${size}` === `large` &&
        `${active}` === `false` &&
        `${disabled}` === `false` && (
          <>
            {/* name="size=large, active=false, disabled=false" id="202:42610" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="202:42611" type="INSTANCE" */}
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
      {/* id="202:42613" */}
      {`${size}` === `large` &&
        `${active}` === `true` &&
        `${disabled}` === `true` && (
          <>
            {/* name="size=large, active=true, disabled=true" id="202:42613" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="202:42614" type="INSTANCE" */}
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
      {/* id="202:42616" */}
      {`${size}` === `large` &&
        `${active}` === `false` &&
        `${disabled}` === `true` && (
          <>
            {/* name="size=large, active=false, disabled=true" id="202:42616" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="202:42617" type="INSTANCE" */}
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
      {/* id="202:42623" */}
      {`${size}` === `small` &&
        `${active}` === `true` &&
        `${disabled}` === `false` && (
          <>
            {/* name="size=small, active=true, disabled=false" id="202:42623" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "22px",
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
              {/* name="🎰 icon" id="202:42624" type="INSTANCE" */}
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
      {/* id="202:42626" */}
      {`${size}` === `small` &&
        `${active}` === `false` &&
        `${disabled}` === `false` && (
          <>
            {/* name="size=small, active=false, disabled=false" id="202:42626" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "22px",
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
              {/* name="🎰 icon" id="202:42627" type="INSTANCE" */}
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
      {/* id="202:42629" */}
      {`${size}` === `small` &&
        `${active}` === `true` &&
        `${disabled}` === `true` && (
          <>
            {/* name="size=small, active=true, disabled=true" id="202:42629" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "22px",
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
              {/* name="🎰 icon" id="202:42630" type="INSTANCE" */}
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
      {/* id="202:42632" */}
      {`${size}` === `small` &&
        `${active}` === `false` &&
        `${disabled}` === `true` && (
          <>
            {/* name="size=small, active=false, disabled=true" id="202:42632" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "22px",
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
              {/* name="🎰 icon" id="202:42633" type="INSTANCE" */}
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
