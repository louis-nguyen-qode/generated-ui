// id="2720:38011"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom272038011Props {
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

export const QodeCustom272038011: React.FC<
  QodeCustom272038011Props & { style?: CSSProperties }
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
  ...rest
}) => {
  return (
    <>
      {/* name="Search bar" id="2720:38011" type="COMPONENT_SET" */}
      {/* id="2720:38012" */}
      {`${state}` === `default` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=default, status=default, size=default" id="2720:38012" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="2720:38013" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38017" type="INSTANCE" */}
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
      {/* id="2720:38018" */}
      {`${state}` === `hover` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=hover, status=default, size=default" id="2720:38018" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="2720:38019" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38023" type="INSTANCE" */}
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
      {/* id="2720:38024" */}
      {`${state}` === `focused` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=focused, status=default, size=default" id="2720:38024" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="2720:38025" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38029" type="INSTANCE" */}
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
              {/* name="Focus Ring" id="2720:38030" type="RECTANGLE" */}
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
                {/* name="Focus Ring" id=2720:38030 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="2720:38031" */}
      {`${state}` === `typing` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=typing, status=default, size=default" id="2720:38031" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="2720:38032" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38036" type="INSTANCE" */}
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
              {/* name="Focus Ring" id="2720:38037" type="RECTANGLE" */}
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
                {/* name="Focus Ring" id=2720:38037 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="2720:38038" */}
      {`${state}` === `filled` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=filled, status=default, size=default" id="2720:38038" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="2720:38039" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38043" type="INSTANCE" */}
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
      {/* id="2720:38044" */}
      {`${state}` === `disabled` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=disabled, status=default, size=default" id="2720:38044" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="2720:38045" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
              {/* name="🎰 icon right" id="2720:38049" type="INSTANCE" */}
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
      {/* id="2720:38050" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=default, status=error, size=default" id="2720:38050" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--color-error-colorerrorbg, #fff7f4)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38051" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38055" type="INSTANCE" */}
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
              {/* name="Error" id="2720:38056" type="INSTANCE" */}
              <Icon.QodeCircleX
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
      {/* id="2720:38057" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=hover, status=error, size=default" id="2720:38057" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--color-error-colorerrorbg, #fff7f4)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38058" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38062" type="INSTANCE" */}
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
              {/* name="Error" id="2720:38063" type="INSTANCE" */}
              <Icon.QodeCircleX
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
      {/* id="2720:38064" */}
      {`${state}` === `focused` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=focused, status=error, size=default" id="2720:38064" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--color-error-colorerrorbg, #fff7f4)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38065" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38069" type="INSTANCE" */}
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
              {/* name="Focus Ring" id="2720:38070" type="RECTANGLE" */}
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
                {/* name="Focus Ring" id=2720:38070 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Error" id="2720:38071" type="INSTANCE" */}
              <Icon.QodeCircleX
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
      {/* id="2720:38072" */}
      {`${state}` === `typing` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=typing, status=error, size=default" id="2720:38072" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--color-error-colorerrorbg, #fff7f4)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38073" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38077" type="INSTANCE" */}
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
              {/* name="Focus Ring" id="2720:38078" type="RECTANGLE" */}
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
                {/* name="Focus Ring" id=2720:38078 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Error" id="2720:38079" type="INSTANCE" */}
              <Icon.QodeCircleX
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
      {/* id="2720:38080" */}
      {`${state}` === `filled` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=filled, status=error, size=default" id="2720:38080" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--color-error-colorerrorbg, #fff7f4)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38081" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38085" type="INSTANCE" */}
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
              {/* name="Error" id="2720:38086" type="INSTANCE" */}
              <Icon.QodeCircleX
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
      {/* id="2720:38087" */}
      {`${state}` === `disabled` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=disabled, status=error, size=default" id="2720:38087" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
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
              {/* name="🎰 icon left" id="2720:38088" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
              {/* name="🎰 icon right" id="2720:38092" type="INSTANCE" */}
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
              {/* name="Error" id="2720:38093" type="INSTANCE" */}
              <Icon.QodeCircleX
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
      {/* id="2720:38094" */}
      {`${state}` === `default` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=default, status=warning, size=default" id="2720:38094" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--gold-gold-50, #f5a60c)",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38095" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38099" type="INSTANCE" */}
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
              {/* name="Warning" id="2720:38100" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
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
      {/* id="2720:38101" */}
      {`${state}` === `hover` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=hover, status=warning, size=default" id="2720:38101" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--gold-gold-50, #f5a60c)",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38102" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38106" type="INSTANCE" */}
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
              {/* name="Warning" id="2720:38107" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
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
      {/* id="2720:38108" */}
      {`${state}` === `focused` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=focused, status=warning, size=default" id="2720:38108" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--gold-gold-50, #f5a60c)",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38109" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38113" type="INSTANCE" */}
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
              {/* name="Focus Ring" id="2720:38114" type="RECTANGLE" */}
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
                {/* name="Focus Ring" id=2720:38114 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Warning" id="2720:38115" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
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
      {/* id="2720:38116" */}
      {`${state}` === `typing` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=typing, status=warning, size=default" id="2720:38116" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--gold-gold-50, #f5a60c)",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38117" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38121" type="INSTANCE" */}
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
              {/* name="Focus Ring" id="2720:38122" type="RECTANGLE" */}
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
                {/* name="Focus Ring" id=2720:38122 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Warning" id="2720:38123" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
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
      {/* id="2720:38124" */}
      {`${state}` === `filled` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=filled, status=warning, size=default" id="2720:38124" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--gold-gold-50, #f5a60c)",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38125" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38129" type="INSTANCE" */}
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
              {/* name="Warning" id="2720:38130" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
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
      {/* id="2720:38131" */}
      {`${state}` === `disabled` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=disabled, status=warning, size=default" id="2720:38131" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
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
              {/* name="🎰 icon left" id="2720:38132" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
              {/* name="🎰 icon right" id="2720:38136" type="INSTANCE" */}
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
              {/* name="Warning" id="2720:38137" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
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
      {/* id="2720:38138" */}
      {`${state}` === `default` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=default, status=default, size=large" id="2720:38138" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38139" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38143" type="INSTANCE" */}
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
      {/* id="2720:38144" */}
      {`${state}` === `hover` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=hover, status=default, size=large" id="2720:38144" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38145" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38149" type="INSTANCE" */}
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
      {/* id="2720:38150" */}
      {`${state}` === `focused` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=focused, status=default, size=large" id="2720:38150" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38151" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38155" type="INSTANCE" */}
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
              {/* name="Focus Ring" id="2720:38156" type="RECTANGLE" */}
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
                {/* name="Focus Ring" id=2720:38156 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="2720:38157" */}
      {`${state}` === `typing` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=typing, status=default, size=large" id="2720:38157" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38158" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38162" type="INSTANCE" */}
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
              {/* name="Focus Ring" id="2720:38163" type="RECTANGLE" */}
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
                {/* name="Focus Ring" id=2720:38163 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="2720:38164" */}
      {`${state}` === `filled` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=filled, status=default, size=large" id="2720:38164" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38165" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38169" type="INSTANCE" */}
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
      {/* id="2720:38170" */}
      {`${state}` === `disabled` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=disabled, status=default, size=large" id="2720:38170" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-disabled, #d5d5d5)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38171" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
              {/* name="🎰 icon right" id="2720:38175" type="INSTANCE" */}
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
      {/* id="2720:38176" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=default, status=error, size=large" id="2720:38176" type="COMPONENT" */}
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
                background: "var(--color-error-colorerrorbg, #fff7f4)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38177" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38181" type="INSTANCE" */}
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
              {/* name="Error" id="2720:38182" type="INSTANCE" */}
              <Icon.QodeCircleX
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
      {/* id="2720:38183" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=hover, status=error, size=large" id="2720:38183" type="COMPONENT" */}
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
                background: "var(--color-error-colorerrorbg, #fff7f4)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38184" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38188" type="INSTANCE" */}
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
              {/* name="Error" id="2720:38189" type="INSTANCE" */}
              <Icon.QodeCircleX
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
      {/* id="2720:38190" */}
      {`${state}` === `focused` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=focused, status=error, size=large" id="2720:38190" type="COMPONENT" */}
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
                background: "var(--color-error-colorerrorbg, #fff7f4)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38191" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38195" type="INSTANCE" */}
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
              {/* name="Focus Ring" id="2720:38196" type="RECTANGLE" */}
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
                {/* name="Focus Ring" id=2720:38196 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Error" id="2720:38197" type="INSTANCE" */}
              <Icon.QodeCircleX
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
      {/* id="2720:38198" */}
      {`${state}` === `typing` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=typing, status=error, size=large" id="2720:38198" type="COMPONENT" */}
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
                background: "var(--color-error-colorerrorbg, #fff7f4)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38199" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38203" type="INSTANCE" */}
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
              {/* name="Focus Ring" id="2720:38204" type="RECTANGLE" */}
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
                {/* name="Focus Ring" id=2720:38204 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Error" id="2720:38205" type="INSTANCE" */}
              <Icon.QodeCircleX
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
      {/* id="2720:38206" */}
      {`${state}` === `filled` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=filled, status=error, size=large" id="2720:38206" type="COMPONENT" */}
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
                background: "var(--color-error-colorerrorbg, #fff7f4)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38207" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38211" type="INSTANCE" */}
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
              {/* name="Error" id="2720:38212" type="INSTANCE" */}
              <Icon.QodeCircleX
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
      {/* id="2720:38213" */}
      {`${state}` === `disabled` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=disabled, status=error, size=large" id="2720:38213" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="2720:38214" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
              {/* name="🎰 icon right" id="2720:38218" type="INSTANCE" */}
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
              {/* name="Error" id="2720:38219" type="INSTANCE" */}
              <Icon.QodeCircleX
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
      {/* id="2720:38220" */}
      {`${state}` === `default` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=default, status=warning, size=large" id="2720:38220" type="COMPONENT" */}
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
                  "var(--style-line-width-linewidth, 1px) solid var(--gold-gold-50, #f5a60c)",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38221" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38225" type="INSTANCE" */}
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
              {/* name="Warning" id="2720:38226" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
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
      {/* id="2720:38227" */}
      {`${state}` === `hover` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=hover, status=warning, size=large" id="2720:38227" type="COMPONENT" */}
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
                  "var(--style-line-width-linewidth, 1px) solid var(--gold-gold-50, #f5a60c)",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38228" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38232" type="INSTANCE" */}
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
              {/* name="Warning" id="2720:38233" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
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
      {/* id="2720:38234" */}
      {`${state}` === `focused` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=focused, status=warning, size=large" id="2720:38234" type="COMPONENT" */}
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
                  "var(--style-line-width-linewidth, 1px) solid var(--gold-gold-50, #f5a60c)",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38235" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38239" type="INSTANCE" */}
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
              {/* name="Focus Ring" id="2720:38240" type="RECTANGLE" */}
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
                {/* name="Focus Ring" id=2720:38240 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Warning" id="2720:38241" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
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
      {/* id="2720:38242" */}
      {`${state}` === `typing` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=typing, status=warning, size=large" id="2720:38242" type="COMPONENT" */}
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
                  "var(--style-line-width-linewidth, 1px) solid var(--gold-gold-50, #f5a60c)",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38243" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38247" type="INSTANCE" */}
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
              {/* name="Focus Ring" id="2720:38248" type="RECTANGLE" */}
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
                {/* name="Focus Ring" id=2720:38248 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Warning" id="2720:38249" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
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
      {/* id="2720:38250" */}
      {`${state}` === `filled` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=filled, status=warning, size=large" id="2720:38250" type="COMPONENT" */}
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
                  "var(--style-line-width-linewidth, 1px) solid var(--gold-gold-50, #f5a60c)",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38251" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38255" type="INSTANCE" */}
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
              {/* name="Warning" id="2720:38256" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
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
      {/* id="2720:38257" */}
      {`${state}` === `disabled` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=disabled, status=warning, size=large" id="2720:38257" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="2720:38258" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
              {/* name="🎰 icon right" id="2720:38262" type="INSTANCE" */}
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
              {/* name="Warning" id="2720:38263" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
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
      {/* id="2720:38264" */}
      {`${state}` === `default` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=default, size=small" id="2720:38264" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="2720:38265" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38269" type="INSTANCE" */}
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
      {/* id="2720:38270" */}
      {`${state}` === `hover` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=default, size=small" id="2720:38270" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="2720:38271" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38275" type="INSTANCE" */}
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
      {/* id="2720:38276" */}
      {`${state}` === `focused` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=focused, status=default, size=small" id="2720:38276" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="2720:38277" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38281" type="INSTANCE" */}
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
              {/* name="Focus Ring" id="2720:38282" type="RECTANGLE" */}
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
                {/* name="Focus Ring" id=2720:38282 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="2720:38283" */}
      {`${state}` === `typing` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=typing, status=default, size=small" id="2720:38283" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="2720:38284" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38288" type="INSTANCE" */}
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
              {/* name="Focus Ring" id="2720:38289" type="RECTANGLE" */}
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
                {/* name="Focus Ring" id=2720:38289 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="2720:38290" */}
      {`${state}` === `filled` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=filled, status=default, size=small" id="2720:38290" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="2720:38291" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38295" type="INSTANCE" */}
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
      {/* id="2720:38296" */}
      {`${state}` === `disabled` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=disabled, status=default, size=small" id="2720:38296" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="2720:38297" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
              {/* name="🎰 icon right" id="2720:38301" type="INSTANCE" */}
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
      {/* id="2720:38302" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=error, size=small" id="2720:38302" type="COMPONENT" */}
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
                background: "var(--color-error-colorerrorbg, #fff7f4)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38303" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38307" type="INSTANCE" */}
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
              {/* name="Error" id="2720:38308" type="INSTANCE" */}
              <Icon.QodeCircleX
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
      {/* id="2720:38309" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=error, size=small" id="2720:38309" type="COMPONENT" */}
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
                background: "var(--color-error-colorerrorbg, #fff7f4)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38310" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38314" type="INSTANCE" */}
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
              {/* name="Error" id="2720:38315" type="INSTANCE" */}
              <Icon.QodeCircleX
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
      {/* id="2720:38316" */}
      {`${state}` === `focused` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=focused, status=error, size=small" id="2720:38316" type="COMPONENT" */}
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
                background: "var(--color-error-colorerrorbg, #fff7f4)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38317" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38321" type="INSTANCE" */}
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
              {/* name="Focus Ring" id="2720:38322" type="RECTANGLE" */}
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
                {/* name="Focus Ring" id=2720:38322 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Error" id="2720:38323" type="INSTANCE" */}
              <Icon.QodeCircleX
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
      {/* id="2720:38324" */}
      {`${state}` === `typing` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=typing, status=error, size=small" id="2720:38324" type="COMPONENT" */}
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
                background: "var(--color-error-colorerrorbg, #fff7f4)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38325" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38329" type="INSTANCE" */}
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
              {/* name="Focus Ring" id="2720:38330" type="RECTANGLE" */}
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
                {/* name="Focus Ring" id=2720:38330 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Error" id="2720:38331" type="INSTANCE" */}
              <Icon.QodeCircleX
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
      {/* id="2720:38332" */}
      {`${state}` === `filled` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=filled, status=error, size=small" id="2720:38332" type="COMPONENT" */}
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
                background: "var(--color-error-colorerrorbg, #fff7f4)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38333" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38337" type="INSTANCE" */}
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
              {/* name="Error" id="2720:38338" type="INSTANCE" */}
              <Icon.QodeCircleX
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
      {/* id="2720:38339" */}
      {`${state}` === `disabled` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=disabled, status=error, size=small" id="2720:38339" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="2720:38340" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
              {/* name="🎰 icon right" id="2720:38344" type="INSTANCE" */}
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
              {/* name="Error" id="2720:38345" type="INSTANCE" */}
              <Icon.QodeCircleX
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
      {/* id="2720:38346" */}
      {`${state}` === `default` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=warning, size=small" id="2720:38346" type="COMPONENT" */}
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
                  "var(--style-line-width-linewidth, 1px) solid var(--gold-gold-50, #f5a60c)",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38347" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38351" type="INSTANCE" */}
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
              {/* name="Warning" id="2720:38352" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
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
      {/* id="2720:38353" */}
      {`${state}` === `hover` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=warning, size=small" id="2720:38353" type="COMPONENT" */}
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
                  "var(--style-line-width-linewidth, 1px) solid var(--gold-gold-50, #f5a60c)",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38354" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38358" type="INSTANCE" */}
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
              {/* name="Warning" id="2720:38359" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
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
      {/* id="2720:38360" */}
      {`${state}` === `focused` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=focused, status=warning, size=small" id="2720:38360" type="COMPONENT" */}
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
                  "var(--style-line-width-linewidth, 1px) solid var(--gold-gold-50, #f5a60c)",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38361" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38365" type="INSTANCE" */}
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
              {/* name="Focus Ring" id="2720:38366" type="RECTANGLE" */}
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
                {/* name="Focus Ring" id=2720:38366 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Warning" id="2720:38367" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
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
      {/* id="2720:38368" */}
      {`${state}` === `typing` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=typing, status=warning, size=small" id="2720:38368" type="COMPONENT" */}
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
                  "var(--style-line-width-linewidth, 1px) solid var(--gold-gold-50, #f5a60c)",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38369" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38373" type="INSTANCE" */}
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
              {/* name="Focus Ring" id="2720:38374" type="RECTANGLE" */}
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
                {/* name="Focus Ring" id=2720:38374 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Warning" id="2720:38375" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
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
      {/* id="2720:38376" */}
      {`${state}` === `filled` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=filled, status=warning, size=small" id="2720:38376" type="COMPONENT" */}
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
                  "var(--style-line-width-linewidth, 1px) solid var(--gold-gold-50, #f5a60c)",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              {/* name="🎰 icon left" id="2720:38377" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
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
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="2720:38381" type="INSTANCE" */}
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
              {/* name="Warning" id="2720:38382" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
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
      {/* id="2720:38383" */}
      {`${state}` === `disabled` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=disabled, status=warning, size=small" id="2720:38383" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="2720:38384" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
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
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
              {/* name="🎰 icon right" id="2720:38388" type="INSTANCE" */}
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
              {/* name="Warning" id="2720:38389" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
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
    </>
  )
}
