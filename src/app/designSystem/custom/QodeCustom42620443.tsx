// id="426:20443"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom42620443Props {
  title?: string
  state?: "default" | "hover" | "selected" | "selected multiple" | "disabled"
}

export const QodeCustom42620443: React.FC<
  QodeCustom42620443Props & { style?: CSSProperties }
> = ({ title = "Select menu item", state = "default", style, ...rest }) => {
  return (
    <>
      {/* name="Select/Item" id="426:20443" type="COMPONENT_SET" */}
      {/* id="426:20444" */}
      {`${state}` === `default` && (
        <>
          {/* name="state=default" id="426:20444" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "139px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Select menu item`}</span>
          </div>
        </>
      )}
      {/* id="426:20445" */}
      {`${state}` === `hover` && (
        <>
          {/* name="state=hover" id="426:20445" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "139px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Select menu item`}</span>
          </div>
        </>
      )}
      {/* id="426:20446" */}
      {`${state}` === `selected` && (
        <>
          {/* name="state=selected" id="426:20446" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "144px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background: "var(--primary-primary-10, #d6eeff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
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
            >{`Select menu item`}</span>
          </div>
        </>
      )}
      {/* id="426:20447" */}
      {`${state}` === `selected multiple` && (
        <>
          {/* name="state=selected multiple" id="426:20447" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "172px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background: "var(--primary-primary-10, #d6eeff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
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
            >{`Select menu item`}</span>
            {/* name="check" id="426:20453" type="INSTANCE" */}
            <Icon.QodeCheck
              style={{
                ...{ width: "20px", height: "20px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="426:20448" */}
      {`${state}` === `disabled` && (
        <>
          {/* name="state=disabled" id="426:20448" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "139px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Select menu item`}</span>
          </div>
        </>
      )}
    </>
  )
}
