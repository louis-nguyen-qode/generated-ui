// id="6:6098"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom66098Props {
  direction?: "left" | "right"
  size?: "default" | "small"
  state?: "default" | "hover" | "disabled"
  text?: "false" | "true"
}

export const QodeCustom66098: React.FC<
  QodeCustom66098Props & { style?: CSSProperties }
> = ({
  direction = "left",
  size = "default",
  state = "default",
  text = "false",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name=".pagination__arrow" id="6:6098" type="COMPONENT_SET" */}
      {/* id="6:6099" */}
      {`${direction}` === `left` &&
        `${size}` === `default` &&
        `${state}` === `default` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=left, size=default, state=default, text=false" id="6:6099" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "32px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                },
                ...style,
              }}
            >
              {/* name="chevron-left" id="6:6123" type="INSTANCE" */}
              <Icon.QodeChevronLeft
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
      {/* id="6:6100" */}
      {`${direction}` === `right` &&
        `${size}` === `default` &&
        `${state}` === `default` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=right, size=default, state=default, text=false" id="6:6100" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "32px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                },
                ...style,
              }}
            >
              {/* name="chevron-right" id="6:6124" type="INSTANCE" */}
              <Icon.QodeChevronRight
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
      {/* id="6:6101" */}
      {`${direction}` === `left` &&
        `${size}` === `small` &&
        `${state}` === `default` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=left, size=small, state=default, text=false" id="6:6101" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                },
                ...style,
              }}
            >
              {/* name="chevron-left" id="6:6125" type="INSTANCE" */}
              <Icon.QodeChevronLeft
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
      {/* id="6:6102" */}
      {`${direction}` === `right` &&
        `${size}` === `small` &&
        `${state}` === `default` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=right, size=small, state=default, text=false" id="6:6102" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                },
                ...style,
              }}
            >
              {/* name="chevron-right" id="6:6126" type="INSTANCE" */}
              <Icon.QodeChevronRight
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
      {/* id="6:6103" */}
      {`${direction}` === `left` &&
        `${size}` === `default` &&
        `${state}` === `hover` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=left, size=default, state=hover, text=false" id="6:6103" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "32px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                },
                ...style,
              }}
            >
              {/* name="chevron-left" id="6:6127" type="INSTANCE" */}
              <Icon.QodeChevronLeft
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
      {/* id="6:6104" */}
      {`${direction}` === `right` &&
        `${size}` === `default` &&
        `${state}` === `hover` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=right, size=default, state=hover, text=false" id="6:6104" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "32px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                },
                ...style,
              }}
            >
              {/* name="chevron-right" id="6:6128" type="INSTANCE" */}
              <Icon.QodeChevronRight
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
      {/* id="6:6105" */}
      {`${direction}` === `left` &&
        `${size}` === `small` &&
        `${state}` === `hover` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=left, size=small, state=hover, text=false" id="6:6105" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                },
                ...style,
              }}
            >
              {/* name="chevron-left" id="6:6129" type="INSTANCE" */}
              <Icon.QodeChevronLeft
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
      {/* id="6:6106" */}
      {`${direction}` === `right` &&
        `${size}` === `small` &&
        `${state}` === `hover` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=right, size=small, state=hover, text=false" id="6:6106" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                },
                ...style,
              }}
            >
              {/* name="chevron-right" id="6:6130" type="INSTANCE" */}
              <Icon.QodeChevronRight
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
      {/* id="6:6107" */}
      {`${direction}` === `left` &&
        `${size}` === `default` &&
        `${state}` === `disabled` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=left, size=default, state=disabled, text=false" id="6:6107" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "32px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                },
                ...style,
              }}
            >
              {/* name="chevron-left" id="6:6131" type="INSTANCE" */}
              <Icon.QodeChevronLeft
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
      {/* id="6:6108" */}
      {`${direction}` === `right` &&
        `${size}` === `default` &&
        `${state}` === `disabled` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=right, size=default, state=disabled, text=false" id="6:6108" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "32px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                },
                ...style,
              }}
            >
              {/* name="chevron-right" id="6:6132" type="INSTANCE" */}
              <Icon.QodeChevronRight
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
      {/* id="6:6109" */}
      {`${direction}` === `left` &&
        `${size}` === `small` &&
        `${state}` === `disabled` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=left, size=small, state=disabled, text=false" id="6:6109" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                },
                ...style,
              }}
            >
              {/* name="chevron-left" id="6:6133" type="INSTANCE" */}
              <Icon.QodeChevronLeft
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
      {/* id="6:6110" */}
      {`${direction}` === `right` &&
        `${size}` === `small` &&
        `${state}` === `disabled` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=right, size=small, state=disabled, text=false" id="6:6110" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                },
                ...style,
              }}
            >
              {/* name="chevron-right" id="6:6134" type="INSTANCE" */}
              <Icon.QodeChevronRight
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
      {/* id="6:6111" */}
      {`${direction}` === `left` &&
        `${size}` === `default` &&
        `${state}` === `default` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=left, size=default, state=default, text=true" id="6:6111" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                },
                ...style,
              }}
            >
              {/* name="chevron-left" id="6:6135" type="INSTANCE" */}
              <Icon.QodeChevronLeft
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Previous`}</span>
            </div>
          </>
        )}
      {/* id="6:6112" */}
      {`${direction}` === `right` &&
        `${size}` === `default` &&
        `${state}` === `default` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=right, size=default, state=default, text=true" id="6:6112" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Next`}</span>
              {/* name="chevron-right" id="6:6138" type="INSTANCE" */}
              <Icon.QodeChevronRight
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="6:6113" */}
      {`${direction}` === `left` &&
        `${size}` === `small` &&
        `${state}` === `default` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=left, size=small, state=default, text=true" id="6:6113" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                },
                ...style,
              }}
            >
              {/* name="chevron-left" id="6:6139" type="INSTANCE" */}
              <Icon.QodeChevronLeft
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Previous`}</span>
            </div>
          </>
        )}
      {/* id="6:6114" */}
      {`${direction}` === `right` &&
        `${size}` === `small` &&
        `${state}` === `default` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=right, size=small, state=default, text=true" id="6:6114" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Next`}</span>
              {/* name="chevron-right" id="6:6142" type="INSTANCE" */}
              <Icon.QodeChevronRight
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="6:6115" */}
      {`${direction}` === `left` &&
        `${size}` === `default` &&
        `${state}` === `hover` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=left, size=default, state=hover, text=true" id="6:6115" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                },
                ...style,
              }}
            >
              {/* name="chevron-left" id="6:6143" type="INSTANCE" */}
              <Icon.QodeChevronLeft
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Previous`}</span>
            </div>
          </>
        )}
      {/* id="6:6116" */}
      {`${direction}` === `right` &&
        `${size}` === `default` &&
        `${state}` === `hover` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=right, size=default, state=hover, text=true" id="6:6116" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Next`}</span>
              {/* name="chevron-right" id="6:6146" type="INSTANCE" */}
              <Icon.QodeChevronRight
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="6:6117" */}
      {`${direction}` === `left` &&
        `${size}` === `small` &&
        `${state}` === `hover` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=left, size=small, state=hover, text=true" id="6:6117" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                },
                ...style,
              }}
            >
              {/* name="chevron-left" id="6:6147" type="INSTANCE" */}
              <Icon.QodeChevronLeft
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Previous`}</span>
            </div>
          </>
        )}
      {/* id="6:6118" */}
      {`${direction}` === `right` &&
        `${size}` === `small` &&
        `${state}` === `hover` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=right, size=small, state=hover, text=true" id="6:6118" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Next`}</span>
              {/* name="chevron-right" id="6:6150" type="INSTANCE" */}
              <Icon.QodeChevronRight
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="6:6119" */}
      {`${direction}` === `left` &&
        `${size}` === `default` &&
        `${state}` === `disabled` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=left, size=default, state=disabled, text=true" id="6:6119" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                },
                ...style,
              }}
            >
              {/* name="chevron-left" id="6:6151" type="INSTANCE" */}
              <Icon.QodeChevronLeft
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color:
                      "var(--color-neutral-text-colortextdisabled, rgba(0, 0, 0, 0.25))",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Previous`}</span>
            </div>
          </>
        )}
      {/* id="6:6120" */}
      {`${direction}` === `right` &&
        `${size}` === `default` &&
        `${state}` === `disabled` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=right, size=default, state=disabled, text=true" id="6:6120" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color:
                      "var(--color-neutral-text-colortextdisabled, rgba(0, 0, 0, 0.25))",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Next`}</span>
              {/* name="chevron-right" id="6:6154" type="INSTANCE" */}
              <Icon.QodeChevronRight
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="6:6121" */}
      {`${direction}` === `left` &&
        `${size}` === `small` &&
        `${state}` === `disabled` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=left, size=small, state=disabled, text=true" id="6:6121" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                },
                ...style,
              }}
            >
              {/* name="chevron-left" id="6:6155" type="INSTANCE" */}
              <Icon.QodeChevronLeft
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color:
                      "var(--color-neutral-text-colortextdisabled, rgba(0, 0, 0, 0.25))",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Previous`}</span>
            </div>
          </>
        )}
      {/* id="6:6122" */}
      {`${direction}` === `right` &&
        `${size}` === `small` &&
        `${state}` === `disabled` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=right, size=small, state=disabled, text=true" id="6:6122" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color:
                      "var(--color-neutral-text-colortextdisabled, rgba(0, 0, 0, 0.25))",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Next`}</span>
              {/* name="chevron-right" id="6:6158" type="INSTANCE" */}
              <Icon.QodeChevronRight
                style={{
                  ...{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
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
