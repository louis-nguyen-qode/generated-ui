// id="124:630"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom124630Props {
  icon?: React.ReactNode
  count?: string
  type?: "dot" | "default" | "small" | "icon"
}

export const QodeCustom124630: React.FC<
  QodeCustom124630Props & { style?: CSSProperties }
> = ({ icon = undefined, count = "21", type = "dot", style, ...rest }) => {
  return (
    <>
      {/* name="Badge" id="124:630" type="COMPONENT_SET" */}
      {/* id="124:629" */}
      {`${type}` === `dot` && (
        <>
          {/* name="type=dot" id="124:629" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                width: "6px",
                height: "6px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                background: "var(--color-error-colorerror, #dc3812)",
              },
              ...style,
            }}
          >
            <></>
          </div>
        </>
      )}
      {/* id="124:631" */}
      {`${type}` === `default` && (
        <>
          {/* name="type=default" id="124:631" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "20px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "999px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                background: "var(--color-error-colorerror, #dc3812)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
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
            >{`21`}</span>
          </div>
        </>
      )}
      {/* id="124:632" */}
      {`${type}` === `small` && (
        <>
          {/* name="type=small" id="124:632" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "16px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "900px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                background: "var(--color-error-colorerror, #dc3812)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
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
            >{`21`}</span>
          </div>
        </>
      )}
      {/* id="2820:1244" */}
      {`${type}` === `icon` && (
        <>
          {/* name="type=icon" id="2820:1244" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding: "var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "900px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                background: "var(--color-error-colorerror, #dc3812)",
              },
              ...style,
            }}
          >
            {/* name="linkedin" id="2820:1254" type="INSTANCE" */}
            <Icon.QodeLinkedin
              style={{ ...{ width: "16px", height: "16px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
