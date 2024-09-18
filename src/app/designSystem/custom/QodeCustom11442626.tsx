// id="114:42626"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom11442626Props {
  title?: string
  type?:
    | "default"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "disabled"
    | "mark"
  _style?: "default" | "delete" | "italic" | "strong" | "underline"
  size?: "default" | "large" | "small" | "extra large"
}

export const QodeCustom11442626: React.FC<
  QodeCustom11442626Props & { style?: CSSProperties }
> = ({
  title = "Label",
  type = "default",
  _style = "default",
  size = "default",
  ...rest
}) => {
  return (
    <>
      {/* name="Text" id="114:42626" type="COMPONENT_SET" */}
      {/* id="114:42625" */}
      {`${type}` === `default` &&
        `${_style}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="type=default, style=default, size=default" id="114:42625" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42668" */}
      {`${type}` === `default` &&
        `${_style}` === `underline` &&
        `${size}` === `default` && (
          <>
            {/* name="type=default, style=underline, size=default" id="114:42668" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42670" */}
      {`${type}` === `default` &&
        `${_style}` === `delete` &&
        `${size}` === `default` && (
          <>
            {/* name="type=default, style=delete, size=default" id="114:42670" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42672" */}
      {`${type}` === `default` &&
        `${_style}` === `italic` &&
        `${size}` === `default` && (
          <>
            {/* name="type=default, style=italic, size=default" id="114:42672" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42674" */}
      {`${type}` === `default` &&
        `${_style}` === `strong` &&
        `${size}` === `default` && (
          <>
            {/* name="type=default, style=strong, size=default" id="114:42674" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42676" */}
      {`${type}` === `secondary` &&
        `${_style}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="type=secondary, style=default, size=default" id="114:42676" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42678" */}
      {`${type}` === `secondary` &&
        `${_style}` === `underline` &&
        `${size}` === `default` && (
          <>
            {/* name="type=secondary, style=underline, size=default" id="114:42678" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42680" */}
      {`${type}` === `secondary` &&
        `${_style}` === `delete` &&
        `${size}` === `default` && (
          <>
            {/* name="type=secondary, style=delete, size=default" id="114:42680" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42682" */}
      {`${type}` === `secondary` &&
        `${_style}` === `italic` &&
        `${size}` === `default` && (
          <>
            {/* name="type=secondary, style=italic, size=default" id="114:42682" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42684" */}
      {`${type}` === `secondary` &&
        `${_style}` === `strong` &&
        `${size}` === `default` && (
          <>
            {/* name="type=secondary, style=strong, size=default" id="114:42684" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42686" */}
      {`${type}` === `success` &&
        `${_style}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="type=success, style=default, size=default" id="114:42686" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-success-colorsuccesstext, #11a620)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42688" */}
      {`${type}` === `success` &&
        `${_style}` === `underline` &&
        `${size}` === `default` && (
          <>
            {/* name="type=success, style=underline, size=default" id="114:42688" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-success-colorsuccesstext, #11a620)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42690" */}
      {`${type}` === `success` &&
        `${_style}` === `delete` &&
        `${size}` === `default` && (
          <>
            {/* name="type=success, style=delete, size=default" id="114:42690" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-success-colorsuccesstext, #11a620)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42692" */}
      {`${type}` === `success` &&
        `${_style}` === `italic` &&
        `${size}` === `default` && (
          <>
            {/* name="type=success, style=italic, size=default" id="114:42692" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-success-colorsuccesstext, #11a620)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42694" */}
      {`${type}` === `success` &&
        `${_style}` === `strong` &&
        `${size}` === `default` && (
          <>
            {/* name="type=success, style=strong, size=default" id="114:42694" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-success-colorsuccesstext, #11a620)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42696" */}
      {`${type}` === `warning` &&
        `${_style}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="type=warning, style=default, size=default" id="114:42696" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-warning-colorwarningtext, #f5a60c)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42698" */}
      {`${type}` === `warning` &&
        `${_style}` === `underline` &&
        `${size}` === `default` && (
          <>
            {/* name="type=warning, style=underline, size=default" id="114:42698" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-warning-colorwarningtext, #f5a60c)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42700" */}
      {`${type}` === `warning` &&
        `${_style}` === `delete` &&
        `${size}` === `default` && (
          <>
            {/* name="type=warning, style=delete, size=default" id="114:42700" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-warning-colorwarningtext, #f5a60c)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42702" */}
      {`${type}` === `warning` &&
        `${_style}` === `italic` &&
        `${size}` === `default` && (
          <>
            {/* name="type=warning, style=italic, size=default" id="114:42702" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-warning-colorwarningtext, #f5a60c)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42704" */}
      {`${type}` === `warning` &&
        `${_style}` === `strong` &&
        `${size}` === `default` && (
          <>
            {/* name="type=warning, style=strong, size=default" id="114:42704" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-warning-colorwarningtext, #f5a60c)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42706" */}
      {`${type}` === `error` &&
        `${_style}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="type=error, style=default, size=default" id="114:42706" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42708" */}
      {`${type}` === `error` &&
        `${_style}` === `underline` &&
        `${size}` === `default` && (
          <>
            {/* name="type=error, style=underline, size=default" id="114:42708" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42710" */}
      {`${type}` === `error` &&
        `${_style}` === `delete` &&
        `${size}` === `default` && (
          <>
            {/* name="type=error, style=delete, size=default" id="114:42710" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42712" */}
      {`${type}` === `error` &&
        `${_style}` === `italic` &&
        `${size}` === `default` && (
          <>
            {/* name="type=error, style=italic, size=default" id="114:42712" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42714" */}
      {`${type}` === `error` &&
        `${_style}` === `strong` &&
        `${size}` === `default` && (
          <>
            {/* name="type=error, style=strong, size=default" id="114:42714" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42716" */}
      {`${type}` === `disabled` &&
        `${_style}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="type=disabled, style=default, size=default" id="114:42716" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42718" */}
      {`${type}` === `disabled` &&
        `${_style}` === `underline` &&
        `${size}` === `default` && (
          <>
            {/* name="type=disabled, style=underline, size=default" id="114:42718" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42720" */}
      {`${type}` === `disabled` &&
        `${_style}` === `delete` &&
        `${size}` === `default` && (
          <>
            {/* name="type=disabled, style=delete, size=default" id="114:42720" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42722" */}
      {`${type}` === `disabled` &&
        `${_style}` === `italic` &&
        `${size}` === `default` && (
          <>
            {/* name="type=disabled, style=italic, size=default" id="114:42722" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42724" */}
      {`${type}` === `disabled` &&
        `${_style}` === `strong` &&
        `${size}` === `default` && (
          <>
            {/* name="type=disabled, style=strong, size=default" id="114:42724" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42726" */}
      {`${type}` === `mark` &&
        `${_style}` === `default` &&
        `${size}` === `default` && (
          <>
            {/* name="type=mark, style=default, size=default" id="114:42726" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
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
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42728" */}
      {`${type}` === `mark` &&
        `${_style}` === `underline` &&
        `${size}` === `default` && (
          <>
            {/* name="type=mark, style=underline, size=default" id="114:42728" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42730" */}
      {`${type}` === `mark` &&
        `${_style}` === `delete` &&
        `${size}` === `default` && (
          <>
            {/* name="type=mark, style=delete, size=default" id="114:42730" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42732" */}
      {`${type}` === `mark` &&
        `${_style}` === `italic` &&
        `${size}` === `default` && (
          <>
            {/* name="type=mark, style=italic, size=default" id="114:42732" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42734" */}
      {`${type}` === `mark` &&
        `${_style}` === `strong` &&
        `${size}` === `default` && (
          <>
            {/* name="type=mark, style=strong, size=default" id="114:42734" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42736" */}
      {`${type}` === `default` &&
        `${_style}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="type=default, style=default, size=large" id="114:42736" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42738" */}
      {`${type}` === `default` &&
        `${_style}` === `underline` &&
        `${size}` === `large` && (
          <>
            {/* name="type=default, style=underline, size=large" id="114:42738" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42740" */}
      {`${type}` === `default` &&
        `${_style}` === `delete` &&
        `${size}` === `large` && (
          <>
            {/* name="type=default, style=delete, size=large" id="114:42740" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42742" */}
      {`${type}` === `default` &&
        `${_style}` === `italic` &&
        `${size}` === `large` && (
          <>
            {/* name="type=default, style=italic, size=large" id="114:42742" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-fontfamilycode, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42744" */}
      {`${type}` === `default` &&
        `${_style}` === `strong` &&
        `${size}` === `large` && (
          <>
            {/* name="type=default, style=strong, size=large" id="114:42744" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42746" */}
      {`${type}` === `secondary` &&
        `${_style}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="type=secondary, style=default, size=large" id="114:42746" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42748" */}
      {`${type}` === `secondary` &&
        `${_style}` === `underline` &&
        `${size}` === `large` && (
          <>
            {/* name="type=secondary, style=underline, size=large" id="114:42748" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42750" */}
      {`${type}` === `secondary` &&
        `${_style}` === `delete` &&
        `${size}` === `large` && (
          <>
            {/* name="type=secondary, style=delete, size=large" id="114:42750" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42752" */}
      {`${type}` === `secondary` &&
        `${_style}` === `italic` &&
        `${size}` === `large` && (
          <>
            {/* name="type=secondary, style=italic, size=large" id="114:42752" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-fontfamilycode, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42754" */}
      {`${type}` === `secondary` &&
        `${_style}` === `strong` &&
        `${size}` === `large` && (
          <>
            {/* name="type=secondary, style=strong, size=large" id="114:42754" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42756" */}
      {`${type}` === `success` &&
        `${_style}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="type=success, style=default, size=large" id="114:42756" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-success-colorsuccesstext, #11a620)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42758" */}
      {`${type}` === `success` &&
        `${_style}` === `underline` &&
        `${size}` === `large` && (
          <>
            {/* name="type=success, style=underline, size=large" id="114:42758" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-success-colorsuccesstext, #11a620)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42760" */}
      {`${type}` === `success` &&
        `${_style}` === `delete` &&
        `${size}` === `large` && (
          <>
            {/* name="type=success, style=delete, size=large" id="114:42760" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-success-colorsuccesstext, #11a620)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42762" */}
      {`${type}` === `success` &&
        `${_style}` === `italic` &&
        `${size}` === `large` && (
          <>
            {/* name="type=success, style=italic, size=large" id="114:42762" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-success-colorsuccesstext, #11a620)",
                  fontFamily: 'var(--family-fontfamilycode, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42764" */}
      {`${type}` === `success` &&
        `${_style}` === `strong` &&
        `${size}` === `large` && (
          <>
            {/* name="type=success, style=strong, size=large" id="114:42764" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-success-colorsuccesstext, #11a620)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42766" */}
      {`${type}` === `warning` &&
        `${_style}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="type=warning, style=default, size=large" id="114:42766" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-warning-colorwarningtext, #f5a60c)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42768" */}
      {`${type}` === `warning` &&
        `${_style}` === `underline` &&
        `${size}` === `large` && (
          <>
            {/* name="type=warning, style=underline, size=large" id="114:42768" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-warning-colorwarningtext, #f5a60c)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42770" */}
      {`${type}` === `warning` &&
        `${_style}` === `delete` &&
        `${size}` === `large` && (
          <>
            {/* name="type=warning, style=delete, size=large" id="114:42770" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-warning-colorwarningtext, #f5a60c)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42772" */}
      {`${type}` === `warning` &&
        `${_style}` === `italic` &&
        `${size}` === `large` && (
          <>
            {/* name="type=warning, style=italic, size=large" id="114:42772" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-warning-colorwarningtext, #f5a60c)",
                  fontFamily: 'var(--family-fontfamilycode, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42774" */}
      {`${type}` === `warning` &&
        `${_style}` === `strong` &&
        `${size}` === `large` && (
          <>
            {/* name="type=warning, style=strong, size=large" id="114:42774" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-warning-colorwarningtext, #f5a60c)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42776" */}
      {`${type}` === `error` &&
        `${_style}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="type=error, style=default, size=large" id="114:42776" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42778" */}
      {`${type}` === `error` &&
        `${_style}` === `underline` &&
        `${size}` === `large` && (
          <>
            {/* name="type=error, style=underline, size=large" id="114:42778" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42780" */}
      {`${type}` === `error` &&
        `${_style}` === `delete` &&
        `${size}` === `large` && (
          <>
            {/* name="type=error, style=delete, size=large" id="114:42780" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42782" */}
      {`${type}` === `error` &&
        `${_style}` === `italic` &&
        `${size}` === `large` && (
          <>
            {/* name="type=error, style=italic, size=large" id="114:42782" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-fontfamilycode, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42784" */}
      {`${type}` === `error` &&
        `${_style}` === `strong` &&
        `${size}` === `large` && (
          <>
            {/* name="type=error, style=strong, size=large" id="114:42784" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42786" */}
      {`${type}` === `disabled` &&
        `${_style}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="type=disabled, style=default, size=large" id="114:42786" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42788" */}
      {`${type}` === `disabled` &&
        `${_style}` === `underline` &&
        `${size}` === `large` && (
          <>
            {/* name="type=disabled, style=underline, size=large" id="114:42788" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42790" */}
      {`${type}` === `disabled` &&
        `${_style}` === `delete` &&
        `${size}` === `large` && (
          <>
            {/* name="type=disabled, style=delete, size=large" id="114:42790" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42792" */}
      {`${type}` === `disabled` &&
        `${_style}` === `italic` &&
        `${size}` === `large` && (
          <>
            {/* name="type=disabled, style=italic, size=large" id="114:42792" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-fontfamilycode, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42794" */}
      {`${type}` === `disabled` &&
        `${_style}` === `strong` &&
        `${size}` === `large` && (
          <>
            {/* name="type=disabled, style=strong, size=large" id="114:42794" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42796" */}
      {`${type}` === `mark` &&
        `${_style}` === `default` &&
        `${size}` === `large` && (
          <>
            {/* name="type=mark, style=default, size=large" id="114:42796" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42798" */}
      {`${type}` === `mark` &&
        `${_style}` === `underline` &&
        `${size}` === `large` && (
          <>
            {/* name="type=mark, style=underline, size=large" id="114:42798" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42800" */}
      {`${type}` === `mark` &&
        `${_style}` === `delete` &&
        `${size}` === `large` && (
          <>
            {/* name="type=mark, style=delete, size=large" id="114:42800" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42802" */}
      {`${type}` === `mark` &&
        `${_style}` === `italic` &&
        `${size}` === `large` && (
          <>
            {/* name="type=mark, style=italic, size=large" id="114:42802" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-fontfamilycode, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42804" */}
      {`${type}` === `mark` &&
        `${_style}` === `strong` &&
        `${size}` === `large` && (
          <>
            {/* name="type=mark, style=strong, size=large" id="114:42804" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42806" */}
      {`${type}` === `default` &&
        `${_style}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="type=default, style=default, size=small" id="114:42806" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42808" */}
      {`${type}` === `default` &&
        `${_style}` === `underline` &&
        `${size}` === `small` && (
          <>
            {/* name="type=default, style=underline, size=small" id="114:42808" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42810" */}
      {`${type}` === `default` &&
        `${_style}` === `delete` &&
        `${size}` === `small` && (
          <>
            {/* name="type=default, style=delete, size=small" id="114:42810" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42812" */}
      {`${type}` === `default` &&
        `${_style}` === `italic` &&
        `${size}` === `small` && (
          <>
            {/* name="type=default, style=italic, size=small" id="114:42812" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42814" */}
      {`${type}` === `default` &&
        `${_style}` === `strong` &&
        `${size}` === `small` && (
          <>
            {/* name="type=default, style=strong, size=small" id="114:42814" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42816" */}
      {`${type}` === `secondary` &&
        `${_style}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="type=secondary, style=default, size=small" id="114:42816" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42818" */}
      {`${type}` === `secondary` &&
        `${_style}` === `underline` &&
        `${size}` === `small` && (
          <>
            {/* name="type=secondary, style=underline, size=small" id="114:42818" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42820" */}
      {`${type}` === `secondary` &&
        `${_style}` === `delete` &&
        `${size}` === `small` && (
          <>
            {/* name="type=secondary, style=delete, size=small" id="114:42820" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42822" */}
      {`${type}` === `secondary` &&
        `${_style}` === `italic` &&
        `${size}` === `small` && (
          <>
            {/* name="type=secondary, style=italic, size=small" id="114:42822" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42824" */}
      {`${type}` === `secondary` &&
        `${_style}` === `strong` &&
        `${size}` === `small` && (
          <>
            {/* name="type=secondary, style=strong, size=small" id="114:42824" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42826" */}
      {`${type}` === `success` &&
        `${_style}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="type=success, style=default, size=small" id="114:42826" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-success-colorsuccesstext, #11a620)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42828" */}
      {`${type}` === `success` &&
        `${_style}` === `underline` &&
        `${size}` === `small` && (
          <>
            {/* name="type=success, style=underline, size=small" id="114:42828" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-success-colorsuccesstext, #11a620)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42830" */}
      {`${type}` === `success` &&
        `${_style}` === `delete` &&
        `${size}` === `small` && (
          <>
            {/* name="type=success, style=delete, size=small" id="114:42830" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-success-colorsuccesstext, #11a620)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42832" */}
      {`${type}` === `success` &&
        `${_style}` === `italic` &&
        `${size}` === `small` && (
          <>
            {/* name="type=success, style=italic, size=small" id="114:42832" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-success-colorsuccesstext, #11a620)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42834" */}
      {`${type}` === `success` &&
        `${_style}` === `strong` &&
        `${size}` === `small` && (
          <>
            {/* name="type=success, style=strong, size=small" id="114:42834" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-success-colorsuccesstext, #11a620)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42836" */}
      {`${type}` === `warning` &&
        `${_style}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="type=warning, style=default, size=small" id="114:42836" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-warning-colorwarningtext, #f5a60c)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42838" */}
      {`${type}` === `warning` &&
        `${_style}` === `underline` &&
        `${size}` === `small` && (
          <>
            {/* name="type=warning, style=underline, size=small" id="114:42838" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-warning-colorwarningtext, #f5a60c)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42840" */}
      {`${type}` === `warning` &&
        `${_style}` === `delete` &&
        `${size}` === `small` && (
          <>
            {/* name="type=warning, style=delete, size=small" id="114:42840" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-warning-colorwarningtext, #f5a60c)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42842" */}
      {`${type}` === `warning` &&
        `${_style}` === `italic` &&
        `${size}` === `small` && (
          <>
            {/* name="type=warning, style=italic, size=small" id="114:42842" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-warning-colorwarningtext, #f5a60c)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42844" */}
      {`${type}` === `warning` &&
        `${_style}` === `strong` &&
        `${size}` === `small` && (
          <>
            {/* name="type=warning, style=strong, size=small" id="114:42844" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-warning-colorwarningtext, #f5a60c)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42846" */}
      {`${type}` === `error` &&
        `${_style}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="type=error, style=default, size=small" id="114:42846" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42848" */}
      {`${type}` === `error` &&
        `${_style}` === `underline` &&
        `${size}` === `small` && (
          <>
            {/* name="type=error, style=underline, size=small" id="114:42848" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42850" */}
      {`${type}` === `error` &&
        `${_style}` === `delete` &&
        `${size}` === `small` && (
          <>
            {/* name="type=error, style=delete, size=small" id="114:42850" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42852" */}
      {`${type}` === `error` &&
        `${_style}` === `italic` &&
        `${size}` === `small` && (
          <>
            {/* name="type=error, style=italic, size=small" id="114:42852" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42854" */}
      {`${type}` === `error` &&
        `${_style}` === `strong` &&
        `${size}` === `small` && (
          <>
            {/* name="type=error, style=strong, size=small" id="114:42854" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42856" */}
      {`${type}` === `disabled` &&
        `${_style}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="type=disabled, style=default, size=small" id="114:42856" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42858" */}
      {`${type}` === `disabled` &&
        `${_style}` === `underline` &&
        `${size}` === `small` && (
          <>
            {/* name="type=disabled, style=underline, size=small" id="114:42858" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42860" */}
      {`${type}` === `disabled` &&
        `${_style}` === `delete` &&
        `${size}` === `small` && (
          <>
            {/* name="type=disabled, style=delete, size=small" id="114:42860" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42862" */}
      {`${type}` === `disabled` &&
        `${_style}` === `italic` &&
        `${size}` === `small` && (
          <>
            {/* name="type=disabled, style=italic, size=small" id="114:42862" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42864" */}
      {`${type}` === `disabled` &&
        `${_style}` === `strong` &&
        `${size}` === `small` && (
          <>
            {/* name="type=disabled, style=strong, size=small" id="114:42864" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42866" */}
      {`${type}` === `mark` &&
        `${_style}` === `default` &&
        `${size}` === `small` && (
          <>
            {/* name="type=mark, style=default, size=small" id="114:42866" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42868" */}
      {`${type}` === `mark` &&
        `${_style}` === `underline` &&
        `${size}` === `small` && (
          <>
            {/* name="type=mark, style=underline, size=small" id="114:42868" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42870" */}
      {`${type}` === `mark` &&
        `${_style}` === `delete` &&
        `${size}` === `small` && (
          <>
            {/* name="type=mark, style=delete, size=small" id="114:42870" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42872" */}
      {`${type}` === `mark` &&
        `${_style}` === `italic` &&
        `${size}` === `small` && (
          <>
            {/* name="type=mark, style=italic, size=small" id="114:42872" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42874" */}
      {`${type}` === `mark` &&
        `${_style}` === `strong` &&
        `${size}` === `small` && (
          <>
            {/* name="type=mark, style=strong, size=small" id="114:42874" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42876" */}
      {`${type}` === `default` &&
        `${_style}` === `default` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=default, style=default, size=extra large" id="114:42876" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42878" */}
      {`${type}` === `default` &&
        `${_style}` === `underline` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=default, style=underline, size=extra large" id="114:42878" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42880" */}
      {`${type}` === `default` &&
        `${_style}` === `delete` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=default, style=delete, size=extra large" id="114:42880" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42882" */}
      {`${type}` === `default` &&
        `${_style}` === `italic` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=default, style=italic, size=extra large" id="114:42882" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42884" */}
      {`${type}` === `default` &&
        `${_style}` === `strong` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=default, style=strong, size=extra large" id="114:42884" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42886" */}
      {`${type}` === `secondary` &&
        `${_style}` === `default` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=secondary, style=default, size=extra large" id="114:42886" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42888" */}
      {`${type}` === `secondary` &&
        `${_style}` === `underline` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=secondary, style=underline, size=extra large" id="114:42888" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42890" */}
      {`${type}` === `secondary` &&
        `${_style}` === `delete` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=secondary, style=delete, size=extra large" id="114:42890" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42892" */}
      {`${type}` === `secondary` &&
        `${_style}` === `italic` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=secondary, style=italic, size=extra large" id="114:42892" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42894" */}
      {`${type}` === `secondary` &&
        `${_style}` === `strong` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=secondary, style=strong, size=extra large" id="114:42894" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42896" */}
      {`${type}` === `success` &&
        `${_style}` === `default` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=success, style=default, size=extra large" id="114:42896" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-success-colorsuccesstext, #11a620)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42898" */}
      {`${type}` === `success` &&
        `${_style}` === `underline` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=success, style=underline, size=extra large" id="114:42898" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-success-colorsuccesstext, #11a620)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42900" */}
      {`${type}` === `success` &&
        `${_style}` === `delete` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=success, style=delete, size=extra large" id="114:42900" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-success-colorsuccesstext, #11a620)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42902" */}
      {`${type}` === `success` &&
        `${_style}` === `italic` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=success, style=italic, size=extra large" id="114:42902" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-success-colorsuccesstext, #11a620)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42904" */}
      {`${type}` === `success` &&
        `${_style}` === `strong` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=success, style=strong, size=extra large" id="114:42904" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-success-colorsuccesstext, #11a620)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42906" */}
      {`${type}` === `warning` &&
        `${_style}` === `default` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=warning, style=default, size=extra large" id="114:42906" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-warning-colorwarningtext, #f5a60c)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42908" */}
      {`${type}` === `warning` &&
        `${_style}` === `underline` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=warning, style=underline, size=extra large" id="114:42908" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-warning-colorwarningtext, #f5a60c)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42910" */}
      {`${type}` === `warning` &&
        `${_style}` === `delete` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=warning, style=delete, size=extra large" id="114:42910" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-warning-colorwarningtext, #f5a60c)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42912" */}
      {`${type}` === `warning` &&
        `${_style}` === `italic` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=warning, style=italic, size=extra large" id="114:42912" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-warning-colorwarningtext, #f5a60c)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42914" */}
      {`${type}` === `warning` &&
        `${_style}` === `strong` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=warning, style=strong, size=extra large" id="114:42914" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-warning-colorwarningtext, #f5a60c)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42916" */}
      {`${type}` === `error` &&
        `${_style}` === `default` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=error, style=default, size=extra large" id="114:42916" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42918" */}
      {`${type}` === `error` &&
        `${_style}` === `underline` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=error, style=underline, size=extra large" id="114:42918" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42920" */}
      {`${type}` === `error` &&
        `${_style}` === `delete` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=error, style=delete, size=extra large" id="114:42920" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42922" */}
      {`${type}` === `error` &&
        `${_style}` === `italic` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=error, style=italic, size=extra large" id="114:42922" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42924" */}
      {`${type}` === `error` &&
        `${_style}` === `strong` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=error, style=strong, size=extra large" id="114:42924" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42926" */}
      {`${type}` === `disabled` &&
        `${_style}` === `default` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=disabled, style=default, size=extra large" id="114:42926" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42928" */}
      {`${type}` === `disabled` &&
        `${_style}` === `underline` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=disabled, style=underline, size=extra large" id="114:42928" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42930" */}
      {`${type}` === `disabled` &&
        `${_style}` === `delete` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=disabled, style=delete, size=extra large" id="114:42930" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42932" */}
      {`${type}` === `disabled` &&
        `${_style}` === `italic` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=disabled, style=italic, size=extra large" id="114:42932" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42934" */}
      {`${type}` === `disabled` &&
        `${_style}` === `strong` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=disabled, style=strong, size=extra large" id="114:42934" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42936" */}
      {`${type}` === `mark` &&
        `${_style}` === `default` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=mark, style=default, size=extra large" id="114:42936" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42938" */}
      {`${type}` === `mark` &&
        `${_style}` === `underline` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=mark, style=underline, size=extra large" id="114:42938" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  textDecorationLine: "underline",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42940" */}
      {`${type}` === `mark` &&
        `${_style}` === `delete` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=mark, style=delete, size=extra large" id="114:42940" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  textDecorationLine: "strikethrough",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42942" */}
      {`${type}` === `mark` &&
        `${_style}` === `italic` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=mark, style=italic, size=extra large" id="114:42942" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
      {/* id="114:42944" */}
      {`${type}` === `mark` &&
        `${_style}` === `strong` &&
        `${size}` === `extra large` && (
          <>
            {/* name="type=mark, style=strong, size=extra large" id="114:42944" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Label`}</span>
            </div>
          </>
        )}
    </>
  )
}
