// id="182:9243"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom1829243Props {
  icon?: React.ReactNode
  showIcon?: boolean
  showSelect?: boolean
  title?: string
  showTitle?: boolean
  tab?: "pre" | "post"
  size?: "default" | "large" | "small"
}

export const QodeCustom1829243: React.FC<
  QodeCustom1829243Props & { style?: CSSProperties }
> = ({
  icon = undefined,
  showIcon = false,
  showSelect = false,
  title = "http://",
  showTitle = true,
  tab = "pre",
  size = "default",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name=".input__prepostTab" id="182:9243" type="COMPONENT_SET" */}
      {/* id="182:9242" */}
      {`${tab}` === `pre` && `${size}` === `default` && (
        <>
          {/* name="tab=pre, size=default" id="182:9242" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "5px 0px 0px 5px",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfillquaternary, rgba(0, 0, 0, 0.02))",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
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
            >{`http://`}</span>
            {/* name="Select" id="182:9239" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "4.199px 1.799px 3px 1.799px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="🎰 icon" id="182:9252" type="INSTANCE" */}
            <Icon.QodeGear
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 1.969px 1.603px 1.967px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="182:9244" */}
      {`${tab}` === `post` && `${size}` === `default` && (
        <>
          {/* name="tab=post, size=default" id="182:9244" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "0px 5px 5px 0px",
                borderLeft:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfillquaternary, rgba(0, 0, 0, 0.02))",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
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
            >{`http://`}</span>
            {/* name="Select" id="182:9246" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "4.199px 1.799px 3px 1.799px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="Icon" id="182:9254" type="INSTANCE" */}
            <Icon.QodeGear
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 1.969px 1.603px 1.967px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="182:9265" */}
      {`${tab}` === `pre` && `${size}` === `large` && (
        <>
          {/* name="tab=pre, size=large" id="182:9265" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "5px 0px 0px 5px",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfillquaternary, rgba(0, 0, 0, 0.02))",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
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
            >{`http://`}</span>
            {/* name="Select" id="182:9267" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "4.199px 1.799px 3px 1.799px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="Icon" id="182:9268" type="INSTANCE" */}
            <Icon.QodeGear
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 1.969px 1.603px 1.967px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="182:9269" */}
      {`${tab}` === `post` && `${size}` === `large` && (
        <>
          {/* name="tab=post, size=large" id="182:9269" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "0px 5px 5px 0px",
                borderLeft:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfillquaternary, rgba(0, 0, 0, 0.02))",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
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
            >{`http://`}</span>
            {/* name="Select" id="182:9271" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "4.199px 1.799px 3px 1.799px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="Icon" id="182:9272" type="INSTANCE" */}
            <Icon.QodeGear
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 1.969px 1.603px 1.967px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="182:9277" */}
      {`${tab}` === `pre` && `${size}` === `small` && (
        <>
          {/* name="tab=pre, size=small" id="182:9277" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "5px 0px 0px 5px",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfillquaternary, rgba(0, 0, 0, 0.02))",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
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
            >{`http://`}</span>
            {/* name="Select" id="182:9279" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "4.199px 1.799px 3px 1.799px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="Icon" id="182:9280" type="INSTANCE" */}
            <Icon.QodeGear
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 1.969px 1.603px 1.967px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="182:9281" */}
      {`${tab}` === `post` && `${size}` === `small` && (
        <>
          {/* name="tab=post, size=small" id="182:9281" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "0px 5px 5px 0px",
                borderLeft:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfillquaternary, rgba(0, 0, 0, 0.02))",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
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
            >{`http://`}</span>
            {/* name="Select" id="182:9283" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "4.199px 1.799px 3px 1.799px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="Icon" id="182:9284" type="INSTANCE" */}
            <Icon.QodeGear
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 1.969px 1.603px 1.967px",
                  justifyContent: "center",
                  alignItems: "center",
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
