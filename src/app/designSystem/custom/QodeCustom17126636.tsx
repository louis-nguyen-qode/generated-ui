// id="171:26636"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom17126636Props {
  direction?: "left" | "right"
  size?: "default" | "small"
  state?: "default" | "hover" | "disabled"
  text?: "false" | "true"
}

export const QodeCustom17126636: React.FC<
  QodeCustom17126636Props & { style?: CSSProperties }
> = ({
  direction = "left",
  size = "default",
  state = "default",
  text = "false",
  ...rest
}) => {
  return (
    <>
      {/* name=".pagination__arrow" id="171:26636" type="COMPONENT_SET" */}
      {/* id="171:26635" */}
      {`${direction}` === `left` &&
        `${size}` === `default` &&
        `${state}` === `default` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=left, size=default, state=default, text=false" id="171:26635" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "var(--line-height-lineheighheading3, 32px)",
                height: "var(--size-height-controlheight, 32px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              {/* name="chevron-left" id="171:26630" type="INSTANCE" */}
              <Icon.QodeChevronLeft
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="171:26640" */}
      {`${direction}` === `right` &&
        `${size}` === `default` &&
        `${state}` === `default` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=right, size=default, state=default, text=false" id="171:26640" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "var(--line-height-lineheighheading3, 32px)",
                height: "var(--size-height-controlheight, 32px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              {/* name="chevron-right" id="171:26641" type="INSTANCE" */}
              <Icon.QodeChevronRight
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="171:26644" */}
      {`${direction}` === `left` &&
        `${size}` === `small` &&
        `${state}` === `default` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=left, size=small, state=default, text=false" id="171:26644" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              {/* name="chevron-left" id="171:26645" type="INSTANCE" */}
              <Icon.QodeChevronLeft
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="171:26646" */}
      {`${direction}` === `right` &&
        `${size}` === `small` &&
        `${state}` === `default` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=right, size=small, state=default, text=false" id="171:26646" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              {/* name="chevron-right" id="171:26647" type="INSTANCE" */}
              <Icon.QodeChevronRight
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="171:26650" */}
      {`${direction}` === `left` &&
        `${size}` === `default` &&
        `${state}` === `hover` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=left, size=default, state=hover, text=false" id="171:26650" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "var(--line-height-lineheighheading3, 32px)",
                height: "var(--size-height-controlheight, 32px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background:
                  "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
              }}
            >
              {/* name="chevron-left" id="171:26651" type="INSTANCE" */}
              <Icon.QodeChevronLeft
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="171:26652" */}
      {`${direction}` === `right` &&
        `${size}` === `default` &&
        `${state}` === `hover` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=right, size=default, state=hover, text=false" id="171:26652" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "var(--line-height-lineheighheading3, 32px)",
                height: "var(--size-height-controlheight, 32px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background:
                  "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
              }}
            >
              {/* name="chevron-right" id="171:26653" type="INSTANCE" */}
              <Icon.QodeChevronRight
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="171:26654" */}
      {`${direction}` === `left` &&
        `${size}` === `small` &&
        `${state}` === `hover` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=left, size=small, state=hover, text=false" id="171:26654" type="COMPONENT" */}
            <div
              style={{
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
              }}
            >
              {/* name="chevron-left" id="171:26655" type="INSTANCE" */}
              <Icon.QodeChevronLeft
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="171:26656" */}
      {`${direction}` === `right` &&
        `${size}` === `small` &&
        `${state}` === `hover` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=right, size=small, state=hover, text=false" id="171:26656" type="COMPONENT" */}
            <div
              style={{
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
              }}
            >
              {/* name="chevron-right" id="171:26657" type="INSTANCE" */}
              <Icon.QodeChevronRight
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="171:26662" */}
      {`${direction}` === `left` &&
        `${size}` === `default` &&
        `${state}` === `disabled` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=left, size=default, state=disabled, text=false" id="171:26662" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "var(--line-height-lineheighheading3, 32px)",
                height: "var(--size-height-controlheight, 32px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              {/* name="chevron-left" id="171:26663" type="INSTANCE" */}
              <Icon.QodeChevronLeft
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="171:26664" */}
      {`${direction}` === `right` &&
        `${size}` === `default` &&
        `${state}` === `disabled` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=right, size=default, state=disabled, text=false" id="171:26664" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "var(--line-height-lineheighheading3, 32px)",
                height: "var(--size-height-controlheight, 32px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              {/* name="chevron-right" id="171:26665" type="INSTANCE" */}
              <Icon.QodeChevronRight
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="171:26666" */}
      {`${direction}` === `left` &&
        `${size}` === `small` &&
        `${state}` === `disabled` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=left, size=small, state=disabled, text=false" id="171:26666" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              {/* name="chevron-left" id="171:26667" type="INSTANCE" */}
              <Icon.QodeChevronLeft
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="171:26668" */}
      {`${direction}` === `right` &&
        `${size}` === `small` &&
        `${state}` === `disabled` &&
        `${text}` === `false` && (
          <>
            {/* name="direction=right, size=small, state=disabled, text=false" id="171:26668" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              {/* name="chevron-right" id="171:26669" type="INSTANCE" */}
              <Icon.QodeChevronRight
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="171:26674" */}
      {`${direction}` === `left` &&
        `${size}` === `default` &&
        `${state}` === `default` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=left, size=default, state=default, text=true" id="171:26674" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              {/* name="chevron-left" id="2747:15320" type="INSTANCE" */}
              <Icon.QodeChevronLeft
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Previous`}</span>
            </div>
          </>
        )}
      {/* id="171:26676" */}
      {`${direction}` === `right` &&
        `${size}` === `default` &&
        `${state}` === `default` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=right, size=default, state=default, text=true" id="171:26676" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Next`}</span>
              {/* name="chevron-right" id="2747:15352" type="INSTANCE" */}
              <Icon.QodeChevronRight
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="171:26678" */}
      {`${direction}` === `left` &&
        `${size}` === `small` &&
        `${state}` === `default` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=left, size=small, state=default, text=true" id="171:26678" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              {/* name="chevron-left" id="2747:15321" type="INSTANCE" */}
              <Icon.QodeChevronLeft
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Previous`}</span>
            </div>
          </>
        )}
      {/* id="171:26680" */}
      {`${direction}` === `right` &&
        `${size}` === `small` &&
        `${state}` === `default` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=right, size=small, state=default, text=true" id="171:26680" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Next`}</span>
              {/* name="chevron-right" id="2747:15353" type="INSTANCE" */}
              <Icon.QodeChevronRight
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="171:26715" */}
      {`${direction}` === `left` &&
        `${size}` === `default` &&
        `${state}` === `hover` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=left, size=default, state=hover, text=true" id="171:26715" type="COMPONENT" */}
            <div
              style={{
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
              }}
            >
              {/* name="chevron-left" id="2747:15324" type="INSTANCE" */}
              <Icon.QodeChevronLeft
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Previous`}</span>
            </div>
          </>
        )}
      {/* id="171:26717" */}
      {`${direction}` === `right` &&
        `${size}` === `default` &&
        `${state}` === `hover` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=right, size=default, state=hover, text=true" id="171:26717" type="COMPONENT" */}
            <div
              style={{
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
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Next`}</span>
              {/* name="chevron-right" id="2747:15344" type="INSTANCE" */}
              <Icon.QodeChevronRight
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="171:26719" */}
      {`${direction}` === `left` &&
        `${size}` === `small` &&
        `${state}` === `hover` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=left, size=small, state=hover, text=true" id="171:26719" type="COMPONENT" */}
            <div
              style={{
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
              }}
            >
              {/* name="chevron-left" id="2747:15325" type="INSTANCE" */}
              <Icon.QodeChevronLeft
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Previous`}</span>
            </div>
          </>
        )}
      {/* id="171:26721" */}
      {`${direction}` === `right` &&
        `${size}` === `small` &&
        `${state}` === `hover` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=right, size=small, state=hover, text=true" id="171:26721" type="COMPONENT" */}
            <div
              style={{
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
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Next`}</span>
              {/* name="chevron-right" id="2747:15345" type="INSTANCE" */}
              <Icon.QodeChevronRight
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="171:26723" */}
      {`${direction}` === `left` &&
        `${size}` === `default` &&
        `${state}` === `disabled` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=left, size=default, state=disabled, text=true" id="171:26723" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              {/* name="chevron-left" id="2747:15332" type="INSTANCE" */}
              <Icon.QodeChevronLeft
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                }}
                {...{}}
              />
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextdisabled, rgba(0, 0, 0, 0.25))",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Previous`}</span>
            </div>
          </>
        )}
      {/* id="171:26725" */}
      {`${direction}` === `right` &&
        `${size}` === `default` &&
        `${state}` === `disabled` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=right, size=default, state=disabled, text=true" id="171:26725" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextdisabled, rgba(0, 0, 0, 0.25))",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Next`}</span>
              {/* name="chevron-right" id="2747:15336" type="INSTANCE" */}
              <Icon.QodeChevronRight
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="171:26727" */}
      {`${direction}` === `left` &&
        `${size}` === `small` &&
        `${state}` === `disabled` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=left, size=small, state=disabled, text=true" id="171:26727" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              {/* name="chevron-left" id="2747:15333" type="INSTANCE" */}
              <Icon.QodeChevronLeft
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                }}
                {...{}}
              />
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextdisabled, rgba(0, 0, 0, 0.25))",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Previous`}</span>
            </div>
          </>
        )}
      {/* id="171:26729" */}
      {`${direction}` === `right` &&
        `${size}` === `small` &&
        `${state}` === `disabled` &&
        `${text}` === `true` && (
          <>
            {/* name="direction=right, size=small, state=disabled, text=true" id="171:26729" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextdisabled, rgba(0, 0, 0, 0.25))",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Next`}</span>
              {/* name="chevron-right" id="2747:15337" type="INSTANCE" */}
              <Icon.QodeChevronRight
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                }}
                {...{}}
              />
            </div>
          </>
        )}
    </>
  )
}
