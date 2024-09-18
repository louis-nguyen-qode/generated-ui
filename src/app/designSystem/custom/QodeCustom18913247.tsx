// id="189:13247"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom1377436 } from "@designSystem/custom/QodeCustom1377436"

export interface QodeCustom18913247Props {
  lIcon?: boolean
  label?: string
  rIcon?: boolean
  number?: boolean
  type?: "basic inline" | "button basic" | "button twofold"
  state?: "active" | "default" | "disabled" | "focused" | "hover"
}

export const QodeCustom18913247: React.FC<
  QodeCustom18913247Props & { style?: CSSProperties }
> = ({
  lIcon = false,
  label = "Dropdown",
  rIcon = true,
  number = false,
  type = "basic inline",
  state = "default",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name=".dropdown__trigger" id="189:13247" type="COMPONENT_SET" */}
      {/* id="189:13246" */}
      {`${type}` === `basic inline` && `${state}` === `default` && (
        <>
          {/* name="type=basic inline, state=default" id="189:13246" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                borderRadius: "var(--border-radius-base, 8px)",
              },
              ...style,
            }}
          >
            {/* name="icon" id="2812:9366" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "5.598px 2.398px 4.001px 2.398px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Dropdown`}</span>
            {/* name="Tag_Transparent" id="2759:30813" type="INSTANCE" */}
            <QodeCustom1377436
              style={{
                ...{
                  display: "flex",
                  height: "24px",
                  padding:
                    "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                },
                ...{},
              }}
              {...{ title: "1", type: "default", border: true }}
            />
            {/* name="icon" id="189:13242" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{ ...{ width: "16px", height: "16px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="189:13253" */}
      {`${type}` === `basic inline` && `${state}` === `hover` && (
        <>
          {/* name="type=basic inline, state=hover" id="189:13253" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                borderRadius: "var(--border-radius-base, 8px)",
              },
              ...style,
            }}
          >
            {/* name="icon" id="2812:9380" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "5.598px 2.398px 4.001px 2.398px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-30, #656565)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Dropdown`}</span>
            {/* name="Tag_Transparent" id="2759:30814" type="INSTANCE" */}
            <QodeCustom1377436
              style={{
                ...{
                  display: "flex",
                  height: "24px",
                  padding:
                    "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                },
                ...{},
              }}
              {...{ title: "1", type: "default", border: true }}
            />
            {/* name="icon" id="189:13255" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{ ...{ width: "16px", height: "16px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="189:13257" */}
      {`${type}` === `basic inline` && `${state}` === `focused` && (
        <>
          {/* name="type=basic inline, state=focused" id="189:13257" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                borderRadius: "var(--border-radius-base, 8px)",
              },
              ...style,
            }}
          >
            {/* name="icon" id="2812:9368" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "5.598px 2.398px 4.001px 2.398px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Dropdown`}</span>
            {/* name="Tag_Transparent" id="2759:30815" type="INSTANCE" */}
            <QodeCustom1377436
              style={{
                ...{
                  display: "flex",
                  height: "24px",
                  padding:
                    "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                },
                ...{},
              }}
              {...{ title: "1", type: "default", border: true }}
            />
            {/* name="icon" id="189:13259" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{ ...{ width: "16px", height: "16px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="189:13261" */}
      {`${type}` === `basic inline` && `${state}` === `active` && (
        <>
          {/* name="type=basic inline, state=active" id="189:13261" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                borderRadius: "var(--border-radius-base, 8px)",
              },
              ...style,
            }}
          >
            {/* name="icon" id="2812:9375" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "5.598px 2.398px 4.001px 2.398px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--text-text-primary-20, #1597f4)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Dropdown`}</span>
            {/* name="Tag_Transparent" id="2759:30816" type="INSTANCE" */}
            <QodeCustom1377436
              style={{
                ...{
                  display: "flex",
                  height: "24px",
                  padding:
                    "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                },
                ...{},
              }}
              {...{ title: "1", type: "default", border: true }}
            />
            {/* name="icon" id="189:13263" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{ ...{ width: "16px", height: "16px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="189:13265" */}
      {`${type}` === `basic inline` && `${state}` === `disabled` && (
        <>
          {/* name="type=basic inline, state=disabled" id="189:13265" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                borderRadius: "var(--border-radius-base, 8px)",
              },
              ...style,
            }}
          >
            {/* name="icon" id="2812:9379" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "5.598px 2.398px 4.001px 2.398px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--text-text-disabled, #bfbfbf)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Dropdown`}</span>
            {/* name="Tag_Transparent" id="2759:30817" type="INSTANCE" */}
            <QodeCustom1377436
              style={{
                ...{
                  display: "flex",
                  height: "24px",
                  padding:
                    "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                },
                ...{},
              }}
              {...{ title: "1", type: "default", border: true }}
            />
            {/* name="icon" id="189:13267" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{ ...{ width: "16px", height: "16px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="189:13269" */}
      {`${type}` === `button basic` && `${state}` === `default` && (
        <>
          {/* name="type=button basic, state=default" id="189:13269" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="icon" id="2812:9376" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "5.598px 2.398px 4.001px 2.398px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Dropdown`}</span>
            {/* name="Tag_Transparent" id="2759:30818" type="INSTANCE" */}
            <QodeCustom1377436
              style={{
                ...{
                  display: "flex",
                  height: "24px",
                  padding:
                    "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                },
                ...{},
              }}
              {...{ title: "1", type: "default", border: true }}
            />
            {/* name="icon" id="189:13271" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{ ...{ width: "16px", height: "16px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="189:13272" */}
      {`${type}` === `button basic` && `${state}` === `hover` && (
        <>
          {/* name="type=button basic, state=hover" id="189:13272" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="icon" id="2812:9373" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "5.598px 2.398px 4.001px 2.398px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Dropdown`}</span>
            {/* name="Tag_Transparent" id="2759:30819" type="INSTANCE" */}
            <QodeCustom1377436
              style={{
                ...{
                  display: "flex",
                  height: "24px",
                  padding:
                    "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                },
                ...{},
              }}
              {...{ title: "1", type: "default", border: true }}
            />
            {/* name="icon" id="189:13274" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{ ...{ width: "16px", height: "16px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="189:13275" */}
      {`${type}` === `button basic` && `${state}` === `focused` && (
        <>
          {/* name="type=button basic, state=focused" id="189:13275" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Dropdown`}</span>
            {/* name="icon" id="2812:9374" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "5.598px 2.398px 4.001px 2.398px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="icon" id="189:13277" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{ ...{ width: "16px", height: "16px" }, ...{} }}
              {...{}}
            />
            {/* name="Tag_Transparent" id="2759:30820" type="INSTANCE" */}
            <QodeCustom1377436
              style={{
                ...{
                  display: "flex",
                  height: "24px",
                  padding:
                    "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                },
                ...{},
              }}
              {...{ title: "1", type: "default", border: true }}
            />
            {/* name="Focus Ring" id="189:13289" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  width: "123px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "2px solid var(--border-border-focused-primary, #82c8fa)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
          </div>
        </>
      )}
      {/* id="189:13278" */}
      {`${type}` === `button basic` && `${state}` === `active` && (
        <>
          {/* name="type=button basic, state=active" id="189:13278" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                background: "var(--primary-primary-50, #1597f4)",
              },
              ...style,
            }}
          >
            {/* name="icon" id="2812:9371" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "5.598px 2.398px 4.001px 2.398px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--neutral-white, #fff)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Dropdown`}</span>
            {/* name="Tag_Transparent" id="2759:30821" type="INSTANCE" */}
            <QodeCustom1377436
              style={{
                ...{
                  display: "flex",
                  height: "24px",
                  padding:
                    "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                },
                ...{},
              }}
              {...{ title: "1", type: "default", border: true }}
            />
            {/* name="icon" id="189:13280" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{ ...{ width: "16px", height: "16px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="189:13281" */}
      {`${type}` === `button basic` && `${state}` === `disabled` && (
        <>
          {/* name="type=button basic, state=disabled" id="189:13281" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                opacity: "0.4",
                background: "rgba(0, 0, 0, 0.04)",
              },
              ...style,
            }}
          >
            {/* name="icon" id="2812:9377" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "5.598px 2.398px 4.001px 2.398px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Dropdown`}</span>
            {/* name="Tag_Transparent" id="2759:30822" type="INSTANCE" */}
            <QodeCustom1377436
              style={{
                ...{
                  display: "flex",
                  height: "24px",
                  padding:
                    "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                },
                ...{},
              }}
              {...{ title: "1", type: "default", border: true }}
            />
            {/* name="icon" id="189:13283" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{ ...{ width: "16px", height: "16px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="189:13290" */}
      {`${type}` === `button twofold` && `${state}` === `default` && (
        <>
          {/* name="type=button twofold, state=default" id="189:13290" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Text Wrapper" id="189:13311" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                },
                ...{},
              }}
            >
              {/* name="icon" id="2812:9926" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "5.598px 2.398px 4.001px 2.398px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Dropdown`}</span>
              {/* name="Tag_Transparent" id="2759:31138" type="INSTANCE" */}
              <QodeCustom1377436
                style={{
                  ...{
                    display: "flex",
                    height: "24px",
                    padding:
                      "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background:
                      "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                  },
                  ...{},
                }}
                {...{ title: "1", type: "default", border: true }}
              />
            </div>
            {/* name="Icon Wrapper" id="189:13312" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--size-height-controlheight, 32px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderLeft:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                },
                ...{},
              }}
            >
              {/* name="icon" id="189:13292" type="INSTANCE" */}
              <Icon.QodeEllipsisVertical
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </div>
        </>
      )}
      {/* id="189:13325" */}
      {`${type}` === `button twofold` && `${state}` === `hover` && (
        <>
          {/* name="type=button twofold, state=hover" id="189:13325" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Text Wrapper" id="189:13326" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                },
                ...{},
              }}
            >
              {/* name="icon" id="2812:9927" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "5.598px 2.398px 4.001px 2.398px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Dropdown`}</span>
              {/* name="Tag_Transparent" id="2759:31139" type="INSTANCE" */}
              <QodeCustom1377436
                style={{
                  ...{
                    display: "flex",
                    height: "24px",
                    padding:
                      "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background:
                      "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                  },
                  ...{},
                }}
                {...{ title: "1", type: "default", border: true }}
              />
            </div>
            {/* name="Icon Wrapper" id="189:13328" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--size-height-controlheight, 32px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderLeft:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                },
                ...{},
              }}
            >
              {/* name="icon" id="189:13329" type="INSTANCE" */}
              <Icon.QodeEllipsisVertical
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </div>
        </>
      )}
      {/* id="189:13331" */}
      {`${type}` === `button twofold` && `${state}` === `focused` && (
        <>
          {/* name="type=button twofold, state=focused" id="189:13331" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Text Wrapper" id="189:13332" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                },
                ...{},
              }}
            >
              {/* name="icon" id="2812:9928" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "5.598px 2.398px 4.001px 2.398px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Dropdown`}</span>
              {/* name="Tag_Transparent" id="2759:31140" type="INSTANCE" */}
              <QodeCustom1377436
                style={{
                  ...{
                    display: "flex",
                    height: "24px",
                    padding:
                      "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background:
                      "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                  },
                  ...{},
                }}
                {...{ title: "1", type: "default", border: true }}
              />
            </div>
            {/* name="Icon Wrapper" id="189:13334" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--size-height-controlheight, 32px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderLeft:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                },
                ...{},
              }}
            >
              {/* name="icon" id="5878:1842" type="INSTANCE" */}
              <Icon.QodeEllipsisVertical
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
            {/* name="Focus Ring" id="189:13337" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  width: "131px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "2px solid var(--border-border-focused-primary, #82c8fa)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
          </div>
        </>
      )}
      {/* id="189:13338" */}
      {`${type}` === `button twofold` && `${state}` === `active` && (
        <>
          {/* name="type=button twofold, state=active" id="189:13338" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                background: "var(--primary-primary-50, #1597f4)",
              },
              ...style,
            }}
          >
            {/* name="Text Wrapper" id="189:13339" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                },
                ...{},
              }}
            >
              {/* name="icon" id="2812:9929" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "5.598px 2.398px 4.001px 2.398px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--neutral-white, #fff)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Dropdown`}</span>
              {/* name="Tag_Transparent" id="2759:31141" type="INSTANCE" */}
              <QodeCustom1377436
                style={{
                  ...{
                    display: "flex",
                    height: "24px",
                    padding:
                      "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background:
                      "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                  },
                  ...{},
                }}
                {...{ title: "1", type: "default", border: true }}
              />
            </div>
            {/* name="Icon Wrapper" id="189:13341" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--size-height-controlheight, 32px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderLeft:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                },
                ...{},
              }}
            >
              {/* name="icon" id="189:13342" type="INSTANCE" */}
              <Icon.QodeEllipsisVertical
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </div>
        </>
      )}
      {/* id="189:13344" */}
      {`${type}` === `button twofold` && `${state}` === `disabled` && (
        <>
          {/* name="type=button twofold, state=disabled" id="189:13344" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                opacity: "0.4",
                background: "rgba(0, 0, 0, 0.04)",
              },
              ...style,
            }}
          >
            {/* name="Text Wrapper" id="189:13345" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                },
                ...{},
              }}
            >
              {/* name="icon" id="2812:9930" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "5.598px 2.398px 4.001px 2.398px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Dropdown`}</span>
              {/* name="Tag_Transparent" id="2759:31142" type="INSTANCE" */}
              <QodeCustom1377436
                style={{
                  ...{
                    display: "flex",
                    height: "24px",
                    padding:
                      "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background:
                      "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                  },
                  ...{},
                }}
                {...{ title: "1", type: "default", border: true }}
              />
            </div>
            {/* name="Icon Wrapper" id="189:13347" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--size-height-controlheight, 32px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderLeft:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                },
                ...{},
              }}
            >
              {/* name="icon" id="189:13348" type="INSTANCE" */}
              <Icon.QodeEllipsisVertical
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}
