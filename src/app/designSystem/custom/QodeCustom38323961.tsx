// id="383:23961"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom38323961Props {
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

export const QodeCustom38323961: React.FC<
  QodeCustom38323961Props & { style?: CSSProperties }
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
      {/* name="Input/Text" id="383:23961" type="COMPONENT_SET" */}
      {/* id="383:23962" */}
      {`${state}` === `default` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=default, status=default, size=default" id="383:23962" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24016" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24020" type="INSTANCE" */}
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
      {/* id="383:23963" */}
      {`${state}` === `hover` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=hover, status=default, size=default" id="383:23963" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24021" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24025" type="INSTANCE" */}
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
      {/* id="383:23964" */}
      {`${state}` === `focused` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=focused, status=default, size=default" id="383:23964" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24026" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24030" type="INSTANCE" */}
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
              {/* name="Focus ring" id="383:24031" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=383:24031 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="383:23965" */}
      {`${state}` === `typing` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=typing, status=default, size=default" id="383:23965" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24032" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24036" type="INSTANCE" */}
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
              {/* name="Focus ring" id="383:24037" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=383:24037 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="383:23966" */}
      {`${state}` === `filled` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=filled, status=default, size=default" id="383:23966" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24038" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24042" type="INSTANCE" */}
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
      {/* id="383:23967" */}
      {`${state}` === `disabled` &&
        `${status}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="state=disabled, status=default, size=default" id="383:23967" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24043" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24047" type="INSTANCE" */}
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
      {/* id="383:23968" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=default, status=error, size=default" id="383:23968" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24048" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24052" type="INSTANCE" */}
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
              {/* name="Error" id="383:24053" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23969" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=hover, status=error, size=default" id="383:23969" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24054" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24058" type="INSTANCE" */}
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
              {/* name="Error" id="383:24059" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23970" */}
      {`${state}` === `focused` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=focused, status=error, size=default" id="383:23970" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24060" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24064" type="INSTANCE" */}
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
              {/* name="Focus ring" id="383:24065" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-10, #fa866c)",
                }}
              >
                {/* name="Focus ring" id=383:24065 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Error" id="383:24066" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23971" */}
      {`${state}` === `typing` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=typing, status=error, size=default" id="383:23971" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24067" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24071" type="INSTANCE" */}
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
              {/* name="Focus ring" id="383:24072" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-10, #fa866c)",
                }}
              >
                {/* name="Focus ring" id=383:24072 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Error" id="383:24073" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23972" */}
      {`${state}` === `filled` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=filled, status=error, size=default" id="383:23972" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24074" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24078" type="INSTANCE" */}
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
              {/* name="Error" id="383:24079" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23973" */}
      {`${state}` === `disabled` &&
        `${status}` === `error` &&
        `${size}` === `default` && (
          <>
            {/* name="state=disabled, status=error, size=default" id="383:23973" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24080" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24084" type="INSTANCE" */}
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
              {/* name="Error" id="383:24085" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23974" */}
      {`${state}` === `default` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=default, status=warning, size=default" id="383:23974" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24086" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24090" type="INSTANCE" */}
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
              {/* name="Warning" id="383:24091" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23975" */}
      {`${state}` === `hover` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=hover, status=warning, size=default" id="383:23975" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24092" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24096" type="INSTANCE" */}
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
              {/* name="Warning" id="383:24097" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23976" */}
      {`${state}` === `focused` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=focused, status=warning, size=default" id="383:23976" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24098" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24102" type="INSTANCE" */}
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
              {/* name="Focus ring" id="383:24103" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=383:24103 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Warning" id="383:24104" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23977" */}
      {`${state}` === `typing` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=typing, status=warning, size=default" id="383:23977" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24105" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24109" type="INSTANCE" */}
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
              {/* name="Focus ring" id="383:24110" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=383:24110 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Warning" id="383:24111" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23978" */}
      {`${state}` === `filled` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=filled, status=warning, size=default" id="383:23978" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24112" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24116" type="INSTANCE" */}
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
              {/* name="Warning" id="383:24117" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23979" */}
      {`${state}` === `disabled` &&
        `${status}` === `warning` &&
        `${size}` === `default` && (
          <>
            {/* name="state=disabled, status=warning, size=default" id="383:23979" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24118" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24122" type="INSTANCE" */}
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
              {/* name="Warning" id="383:24123" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23980" */}
      {`${state}` === `default` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=default, status=default, size=large" id="383:23980" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24124" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24128" type="INSTANCE" */}
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
      {/* id="383:23981" */}
      {`${state}` === `hover` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=hover, status=default, size=large" id="383:23981" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24129" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24133" type="INSTANCE" */}
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
      {/* id="383:23982" */}
      {`${state}` === `focused` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=focused, status=default, size=large" id="383:23982" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24134" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24138" type="INSTANCE" */}
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
              {/* name="Focus ring" id="383:24139" type="RECTANGLE" */}
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
                {/* name="Focus ring" id=383:24139 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="383:23983" */}
      {`${state}` === `typing` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=typing, status=default, size=large" id="383:23983" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24140" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24144" type="INSTANCE" */}
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
              {/* name="Focus ring" id="383:24145" type="RECTANGLE" */}
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
                {/* name="Focus ring" id=383:24145 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="383:23984" */}
      {`${state}` === `filled` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=filled, status=default, size=large" id="383:23984" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24146" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24150" type="INSTANCE" */}
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
      {/* id="383:23985" */}
      {`${state}` === `disabled` &&
        `${status}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="state=disabled, status=default, size=large" id="383:23985" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24151" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24155" type="INSTANCE" */}
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
      {/* id="383:23986" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=default, status=error, size=large" id="383:23986" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24156" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24160" type="INSTANCE" */}
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
              {/* name="Error" id="383:24161" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23987" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=hover, status=error, size=large" id="383:23987" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24162" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24166" type="INSTANCE" */}
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
              {/* name="Error" id="383:24167" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23988" */}
      {`${state}` === `focused` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=focused, status=error, size=large" id="383:23988" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24168" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24172" type="INSTANCE" */}
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
              {/* name="Focus ring" id="383:24173" type="RECTANGLE" */}
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
                {/* name="Focus ring" id=383:24173 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Error" id="383:24174" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23989" */}
      {`${state}` === `typing` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=typing, status=error, size=large" id="383:23989" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24175" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24179" type="INSTANCE" */}
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
              {/* name="Focus ring" id="383:24180" type="RECTANGLE" */}
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
                {/* name="Focus ring" id=383:24180 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Error" id="383:24181" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23990" */}
      {`${state}` === `filled` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=filled, status=error, size=large" id="383:23990" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24182" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24186" type="INSTANCE" */}
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
              {/* name="Error" id="383:24187" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23991" */}
      {`${state}` === `disabled` &&
        `${status}` === `error` &&
        `${size}` === `large` && (
          <>
            {/* name="state=disabled, status=error, size=large" id="383:23991" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24188" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24192" type="INSTANCE" */}
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
              {/* name="Error" id="383:24193" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23992" */}
      {`${state}` === `default` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=default, status=warning, size=large" id="383:23992" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24194" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24198" type="INSTANCE" */}
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
              {/* name="Warning" id="383:24199" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23993" */}
      {`${state}` === `hover` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=hover, status=warning, size=large" id="383:23993" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24200" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24204" type="INSTANCE" */}
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
              {/* name="Warning" id="383:24205" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23994" */}
      {`${state}` === `focused` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=focused, status=warning, size=large" id="383:23994" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24206" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24210" type="INSTANCE" */}
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
              {/* name="Focus ring" id="383:24211" type="RECTANGLE" */}
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
                {/* name="Focus ring" id=383:24211 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Warning" id="383:24212" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23995" */}
      {`${state}` === `typing` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=typing, status=warning, size=large" id="383:23995" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24213" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24217" type="INSTANCE" */}
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
              {/* name="Focus ring" id="383:24218" type="RECTANGLE" */}
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
                {/* name="Focus ring" id=383:24218 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Warning" id="383:24219" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23996" */}
      {`${state}` === `filled` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=filled, status=warning, size=large" id="383:23996" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24220" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24224" type="INSTANCE" */}
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
              {/* name="Warning" id="383:24225" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23997" */}
      {`${state}` === `disabled` &&
        `${status}` === `warning` &&
        `${size}` === `large` && (
          <>
            {/* name="state=disabled, status=warning, size=large" id="383:23997" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24226" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24230" type="INSTANCE" */}
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
              {/* name="Warning" id="383:24231" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:23998" */}
      {`${state}` === `default` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=default, size=small" id="383:23998" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24232" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24236" type="INSTANCE" */}
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
      {/* id="383:23999" */}
      {`${state}` === `hover` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=default, size=small" id="383:23999" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24237" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24241" type="INSTANCE" */}
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
      {/* id="383:24000" */}
      {`${state}` === `focused` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=focused, status=default, size=small" id="383:24000" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24242" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24246" type="INSTANCE" */}
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
              {/* name="Focus ring" id="383:24247" type="RECTANGLE" */}
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
                {/* name="Focus ring" id=383:24247 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="383:24001" */}
      {`${state}` === `typing` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=typing, status=default, size=small" id="383:24001" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24248" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24252" type="INSTANCE" */}
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
              {/* name="Focus ring" id="383:24253" type="RECTANGLE" */}
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
                {/* name="Focus ring" id=383:24253 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="383:24002" */}
      {`${state}` === `filled` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=filled, status=default, size=small" id="383:24002" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24254" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24258" type="INSTANCE" */}
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
      {/* id="383:24003" */}
      {`${state}` === `disabled` &&
        `${status}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="state=disabled, status=default, size=small" id="383:24003" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24259" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24263" type="INSTANCE" */}
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
      {/* id="383:24004" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=error, size=small" id="383:24004" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24264" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24268" type="INSTANCE" */}
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
              {/* name="Error" id="383:24269" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:24005" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=error, size=small" id="383:24005" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24270" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24274" type="INSTANCE" */}
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
              {/* name="Error" id="383:24275" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:24006" */}
      {`${state}` === `focused` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=focused, status=error, size=small" id="383:24006" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24276" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24280" type="INSTANCE" */}
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
              {/* name="Focus ring" id="383:24281" type="RECTANGLE" */}
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
                {/* name="Focus ring" id=383:24281 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Error" id="383:24282" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:24007" */}
      {`${state}` === `typing` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=typing, status=error, size=small" id="383:24007" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24283" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24287" type="INSTANCE" */}
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
              {/* name="Focus ring" id="383:24288" type="RECTANGLE" */}
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
                {/* name="Focus ring" id=383:24288 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Error" id="383:24289" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:24008" */}
      {`${state}` === `filled` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=filled, status=error, size=small" id="383:24008" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24290" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24294" type="INSTANCE" */}
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
              {/* name="Error" id="383:24295" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:24009" */}
      {`${state}` === `disabled` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=disabled, status=error, size=small" id="383:24009" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24296" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24300" type="INSTANCE" */}
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
              {/* name="Error" id="383:24301" type="INSTANCE" */}
              <Icon.QodeCircleX
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:24010" */}
      {`${state}` === `default` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=warning, size=small" id="383:24010" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24302" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24306" type="INSTANCE" */}
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
              {/* name="Warning" id="383:24307" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:24011" */}
      {`${state}` === `hover` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=warning, size=small" id="383:24011" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24308" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24312" type="INSTANCE" */}
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
              {/* name="Warning" id="383:24313" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:24012" */}
      {`${state}` === `focused` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=focused, status=warning, size=small" id="383:24012" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24314" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24318" type="INSTANCE" */}
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
              {/* name="Focus ring" id="383:24319" type="RECTANGLE" */}
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
                {/* name="Focus ring" id=383:24319 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Warning" id="383:24320" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:24013" */}
      {`${state}` === `typing` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=typing, status=warning, size=small" id="383:24013" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24321" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24325" type="INSTANCE" */}
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
              {/* name="Focus ring" id="383:24326" type="RECTANGLE" */}
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
                {/* name="Focus ring" id=383:24326 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Warning" id="383:24327" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:24014" */}
      {`${state}` === `filled` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=filled, status=warning, size=small" id="383:24014" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24328" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24332" type="INSTANCE" */}
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
              {/* name="Warning" id="383:24333" type="INSTANCE" */}
              <Icon.QodeCircleExclamation
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="383:24015" */}
      {`${state}` === `disabled` &&
        `${status}` === `warning` &&
        `${size}` === `small` && (
          <>
            {/* name="state=disabled, status=warning, size=small" id="383:24015" type="COMPONENT" */}
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
              {/* name="🎰 icon left" id="383:24334" type="INSTANCE" */}
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
              {/* name="🎰 icon right" id="383:24338" type="INSTANCE" */}
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
              {/* name="Warning" id="383:24339" type="INSTANCE" */}
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
