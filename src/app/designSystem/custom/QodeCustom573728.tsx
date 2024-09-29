// id="57:3728"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom66174 } from "@designSystem/custom/QodeCustom66174"
import { QodeCustom573726 } from "@designSystem/custom/QodeCustom573726"

export interface QodeCustom573728Props {
  icon?: React.ReactNode
  showIcon?: boolean
  showSelect?: boolean
  title?: string
  showTitle?: boolean
  tab?: "pre" | "post"
  size?: "default" | "large" | "small"
}

export const QodeCustom573728: React.FC<
  QodeCustom573728Props & { style?: CSSProperties }
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
      {/* name=".input__prepostTab" id="57:3728" type="COMPONENT_SET" */}
      {/* id="57:3729" */}
      {`${tab}` === `pre` && `${size}` === `default` && (
        <>
          {/* name="tab=pre, size=default" id="57:3729" type="COMPONENT" */}
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
                  "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
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
            {/* name="Select" id="57:3736" type="INSTANCE" */}
            <QodeCustom66174
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
            {/* name="🎰 icon" id="57:3737" type="INSTANCE" */}
            <QodeCustom573726
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
      {/* id="57:3730" */}
      {`${tab}` === `post` && `${size}` === `default` && (
        <>
          {/* name="tab=post, size=default" id="57:3730" type="COMPONENT" */}
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
                  "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
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
            {/* name="Select" id="57:3739" type="INSTANCE" */}
            <QodeCustom66174
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
            {/* name="Icon" id="57:3740" type="INSTANCE" */}
            <QodeCustom573726
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
      {/* id="57:3731" */}
      {`${tab}` === `pre` && `${size}` === `large` && (
        <>
          {/* name="tab=pre, size=large" id="57:3731" type="COMPONENT" */}
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
                  "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
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
            {/* name="Select" id="57:3742" type="INSTANCE" */}
            <QodeCustom66174
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
            {/* name="Icon" id="57:3743" type="INSTANCE" */}
            <QodeCustom573726
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
      {/* id="57:3732" */}
      {`${tab}` === `post` && `${size}` === `large` && (
        <>
          {/* name="tab=post, size=large" id="57:3732" type="COMPONENT" */}
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
                  "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
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
            {/* name="Select" id="57:3745" type="INSTANCE" */}
            <QodeCustom66174
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
            {/* name="Icon" id="57:3746" type="INSTANCE" */}
            <QodeCustom573726
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
      {/* id="57:3733" */}
      {`${tab}` === `pre` && `${size}` === `small` && (
        <>
          {/* name="tab=pre, size=small" id="57:3733" type="COMPONENT" */}
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
                  "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
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
            {/* name="Select" id="57:3748" type="INSTANCE" */}
            <QodeCustom66174
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
            {/* name="Icon" id="57:3749" type="INSTANCE" */}
            <QodeCustom573726
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
      {/* id="57:3734" */}
      {`${tab}` === `post` && `${size}` === `small` && (
        <>
          {/* name="tab=post, size=small" id="57:3734" type="COMPONENT" */}
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
                  "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
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
            {/* name="Select" id="57:3751" type="INSTANCE" */}
            <QodeCustom66174
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
            {/* name="Icon" id="57:3752" type="INSTANCE" */}
            <QodeCustom573726
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
