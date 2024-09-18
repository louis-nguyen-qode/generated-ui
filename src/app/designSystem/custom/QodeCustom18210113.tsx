// id="182:10113"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom18210113Props {
  showIconRight?: boolean
  suffix?: string
  showSuffix?: boolean
  title?: string
  prefix?: string
  iconRight?: React.ReactNode
  showPrefix?: boolean
  showClear?: boolean
  iconLeft?: React.ReactNode
  showIconLeft?: boolean
  state?: "default" | "hover" | "focused" | "typing" | "filled" | "disabled"
  status?: "default" | "error" | "warning"
  size?: "default" | "large" | "small"
}

export const QodeCustom18210113: React.FC<
  QodeCustom18210113Props & { style?: CSSProperties }
> = ({
  showIconRight = false,
  suffix = "SUF",
  showSuffix = false,
  title = "Input",
  prefix = "PRE",
  iconRight = undefined,
  showPrefix = false,
  showClear = true,
  iconLeft = undefined,
  showIconLeft = true,
  state = "default",
  status = "default",
  size = "default",
  ...rest
}) => {
  return (
    <>
      {/* name="Input/Text" id="182:10113" type="COMPONENT_SET" */}
      {/* id="182:10112" */}
      {`${state}` === `default` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=default, status=default, size=default" id="182:10112" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10116" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10118" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10131" */}
      {`${state}` === `hover` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=hover, status=default, size=default" id="182:10131" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10132" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10136" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10139" */}
      {`${state}` === `focused` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=focused, status=default, size=default" id="182:10139" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10140" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10144" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Focus ring" id="182:10172" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=182:10172 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="182:10147" */}
      {`${state}` === `typing` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=typing, status=default, size=default" id="182:10147" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10148" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10152" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Focus ring" id="182:10173" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=182:10173 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="182:10155" */}
      {`${state}` === `filled` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=filled, status=default, size=default" id="182:10155" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10156" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10160" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10163" */}
      {`${state}` === `disabled` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=disabled, status=default, size=default" id="182:10163" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-disabled, #d5d5d5)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="🎰 icon left" id="182:10164" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-disabled, #bfbfbf)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10168" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10174" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=default, status=error, size=default" id="182:10174" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10175" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10179" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Error" id="182:10224" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10180" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=hover, status=error, size=default" id="182:10180" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10181" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10185" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Error" id="182:10226" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10186" */}
      {`${state}` === `focused` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=focused, status=error, size=default" id="182:10186" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10187" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10191" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Focus ring" id="182:10192" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-10, #fa866c)",
                }}
              >
                {/* name="Focus ring" id=182:10192 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Error" id="182:10228" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10193" */}
      {`${state}` === `typing` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=typing, status=error, size=default" id="182:10193" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10194" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10198" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Focus ring" id="182:10199" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-10, #fa866c)",
                }}
              >
                {/* name="Focus ring" id=182:10199 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Error" id="182:10230" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10200" */}
      {`${state}` === `filled` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=filled, status=error, size=default" id="182:10200" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10201" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10205" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Error" id="182:10232" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10206" */}
      {`${state}` === `disabled` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=disabled, status=error, size=default" id="182:10206" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-disabled, #d5d5d5)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="🎰 icon left" id="182:10207" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10211" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Error" id="182:10234" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10236" */}
      {`${state}` === `default` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=default, status=warning, size=default" id="182:10236" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10237" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10241" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Warning" id="182:10242" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10243" */}
      {`${state}` === `hover` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=hover, status=warning, size=default" id="182:10243" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10244" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10248" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Warning" id="182:10249" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10250" */}
      {`${state}` === `focused` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=focused, status=warning, size=default" id="182:10250" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10251" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10255" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Focus ring" id="182:10256" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=182:10256 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Warning" id="182:10257" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10258" */}
      {`${state}` === `typing` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=typing, status=warning, size=default" id="182:10258" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10259" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10263" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Focus ring" id="182:10264" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=182:10264 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Warning" id="182:10265" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10266" */}
      {`${state}` === `filled` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=filled, status=warning, size=default" id="182:10266" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10267" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10271" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Warning" id="182:10272" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10273" */}
      {`${state}` === `disabled` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=disabled, status=warning, size=default" id="182:10273" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-disabled, #d5d5d5)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="🎰 icon left" id="182:10274" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10278" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Warning" id="182:10279" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10367" */}
      {`${state}` === `default` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=default, status=default, size=large" id="182:10367" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10368" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10372" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10373" */}
      {`${state}` === `hover` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=hover, status=default, size=large" id="182:10373" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10374" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10378" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10379" */}
      {`${state}` === `focused` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=focused, status=default, size=large" id="182:10379" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10380" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10384" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Focus ring" id="182:10385" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=182:10385 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="182:10386" */}
      {`${state}` === `typing` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=typing, status=default, size=large" id="182:10386" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10387" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10391" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Focus ring" id="182:10392" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=182:10392 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="182:10393" */}
      {`${state}` === `filled` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=filled, status=default, size=large" id="182:10393" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10394" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10398" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10399" */}
      {`${state}` === `disabled` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=disabled, status=default, size=large" id="182:10399" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-disabled, #d5d5d5)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="🎰 icon left" id="182:10400" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-disabled, #bfbfbf)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10404" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10405" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=default, status=error, size=large" id="182:10405" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10406" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10410" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Error" id="182:10411" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10412" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=hover, status=error, size=large" id="182:10412" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10413" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10417" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Error" id="182:10418" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10419" */}
      {`${state}` === `focused` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=focused, status=error, size=large" id="182:10419" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10420" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10424" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Focus ring" id="182:10425" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=182:10425 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Error" id="182:10426" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10427" */}
      {`${state}` === `typing` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=typing, status=error, size=large" id="182:10427" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10428" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10432" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Focus ring" id="182:10433" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=182:10433 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Error" id="182:10434" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10435" */}
      {`${state}` === `filled` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=filled, status=error, size=large" id="182:10435" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10436" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10440" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Error" id="182:10441" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10442" */}
      {`${state}` === `disabled` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=disabled, status=error, size=large" id="182:10442" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-disabled, #d5d5d5)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="🎰 icon left" id="182:10443" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10447" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Error" id="182:10448" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10449" */}
      {`${state}` === `default` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=default, status=warning, size=large" id="182:10449" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10450" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10454" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Warning" id="182:10455" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10456" */}
      {`${state}` === `hover` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=hover, status=warning, size=large" id="182:10456" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10457" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10461" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Warning" id="182:10462" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10463" */}
      {`${state}` === `focused` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=focused, status=warning, size=large" id="182:10463" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10464" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10468" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Focus ring" id="182:10469" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=182:10469 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Warning" id="182:10470" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10471" */}
      {`${state}` === `typing` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=typing, status=warning, size=large" id="182:10471" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10472" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10476" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Focus ring" id="182:10477" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=182:10477 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Warning" id="182:10478" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10479" */}
      {`${state}` === `filled` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=filled, status=warning, size=large" id="182:10479" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10480" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10484" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Warning" id="182:10485" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10486" */}
      {`${state}` === `disabled` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=disabled, status=warning, size=large" id="182:10486" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-disabled, #d5d5d5)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="🎰 icon left" id="182:10487" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10491" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Warning" id="182:10492" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10839" */}
      {`${state}` === `default` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=default, size=small" id="182:10839" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10840" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10844" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10845" */}
      {`${state}` === `hover` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=default, size=small" id="182:10845" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10846" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10850" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10851" */}
      {`${state}` === `focused` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=focused, status=default, size=small" id="182:10851" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10852" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10856" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Focus ring" id="182:10857" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=182:10857 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="182:10858" */}
      {`${state}` === `typing` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=typing, status=default, size=small" id="182:10858" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10859" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10863" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Focus ring" id="182:10864" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=182:10864 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="182:10865" */}
      {`${state}` === `filled` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=filled, status=default, size=small" id="182:10865" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10866" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10870" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10871" */}
      {`${state}` === `disabled` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=disabled, status=default, size=small" id="182:10871" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-disabled, #d5d5d5)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="🎰 icon left" id="182:10872" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-disabled, #bfbfbf)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10876" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10877" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=error, size=small" id="182:10877" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10878" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10882" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Error" id="182:10883" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10884" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=error, size=small" id="182:10884" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10885" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10889" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Error" id="182:10890" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10891" */}
      {`${state}` === `focused` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=focused, status=error, size=small" id="182:10891" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10892" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10896" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Focus ring" id="182:10897" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=182:10897 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Error" id="182:10898" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10899" */}
      {`${state}` === `typing` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=typing, status=error, size=small" id="182:10899" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10900" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10904" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Focus ring" id="182:10905" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=182:10905 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Error" id="182:10906" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10907" */}
      {`${state}` === `filled` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=filled, status=error, size=small" id="182:10907" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10908" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10912" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Error" id="182:10913" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10914" */}
      {`${state}` === `disabled` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=disabled, status=error, size=small" id="182:10914" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-disabled, #d5d5d5)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="🎰 icon left" id="182:10915" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10919" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Error" id="182:10920" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10921" */}
      {`${state}` === `default` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=warning, size=small" id="182:10921" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10922" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10926" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Warning" id="182:10927" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10928" */}
      {`${state}` === `hover` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=warning, size=small" id="182:10928" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10929" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10933" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Warning" id="182:10934" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10935" */}
      {`${state}` === `focused` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=focused, status=warning, size=small" id="182:10935" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10936" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10940" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Focus ring" id="182:10941" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=182:10941 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Warning" id="182:10942" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10943" */}
      {`${state}` === `typing` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=typing, status=warning, size=small" id="182:10943" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10944" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10948" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Focus ring" id="182:10949" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=182:10949 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Warning" id="182:10950" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10951" */}
      {`${state}` === `filled` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=filled, status=warning, size=small" id="182:10951" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="182:10952" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10956" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Warning" id="182:10957" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="182:10958" */}
      {`${state}` === `disabled` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=disabled, status=warning, size=small" id="182:10958" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-disabled, #d5d5d5)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="🎰 icon left" id="182:10959" type="INSTANCE" */}
              <Icon.QodeUser
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="182:10963" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Warning" id="182:10964" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
    </>
  )
}
