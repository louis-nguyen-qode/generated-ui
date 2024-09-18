// id="71:11803"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom7111803Props {
  number?: string
  state?: "default" | "hover" | "active" | "disabled" | "active disabled"
  size?: "default" | "small"
}

export const QodeCustom7111803: React.FC<
  QodeCustom7111803Props & { style?: CSSProperties }
> = ({ number = "1", state = "default", size = "default", style, ...rest }) => {
  return (
    <>
      {/* name=".pagination__number" id="71:11803" type="COMPONENT_SET" */}
      {/* id="71:11804" */}
      {`${state}` === `default` && `${size}` === `default` && (
        <>
          {/* name="state=default, size=default" id="71:11804" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "32px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
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
            >{`1`}</span>
          </div>
        </>
      )}
      {/* id="71:11806" */}
      {`${state}` === `hover` && `${size}` === `default` && (
        <>
          {/* name="state=hover, size=default" id="71:11806" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "32px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                background:
                  "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
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
            >{`1`}</span>
          </div>
        </>
      )}
      {/* id="71:11808" */}
      {`${state}` === `active` && `${size}` === `default` && (
        <>
          {/* name="state=active, size=default" id="71:11808" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "32px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                background:
                  "var(--color-neutral-background-colorbgspotlight, rgba(0, 0, 0, 0.88))",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-white, #fff)",
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
            >{`1`}</span>
          </div>
        </>
      )}
      {/* id="71:11810" */}
      {`${state}` === `disabled` && `${size}` === `default` && (
        <>
          {/* name="state=disabled, size=default" id="71:11810" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "32px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
            >{`1`}</span>
          </div>
        </>
      )}
      {/* id="71:11812" */}
      {`${state}` === `active disabled` && `${size}` === `default` && (
        <>
          {/* name="state=active disabled, size=default" id="71:11812" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "32px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                background:
                  "var(--color-neutral-fill-colorfill, rgba(0, 0, 0, 0.15))",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
            >{`1`}</span>
          </div>
        </>
      )}
      {/* id="71:11814" */}
      {`${state}` === `default` && `${size}` === `small` && (
        <>
          {/* name="state=default, size=small" id="71:11814" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
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
            >{`1`}</span>
          </div>
        </>
      )}
      {/* id="71:11816" */}
      {`${state}` === `hover` && `${size}` === `small` && (
        <>
          {/* name="state=hover, size=small" id="71:11816" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                background:
                  "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
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
            >{`1`}</span>
          </div>
        </>
      )}
      {/* id="71:11818" */}
      {`${state}` === `active` && `${size}` === `small` && (
        <>
          {/* name="state=active, size=small" id="71:11818" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                background:
                  "var(--color-neutral-background-colorbgspotlight, rgba(0, 0, 0, 0.88))",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-white, #fff)",
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
            >{`1`}</span>
          </div>
        </>
      )}
      {/* id="71:11820" */}
      {`${state}` === `disabled` && `${size}` === `small` && (
        <>
          {/* name="state=disabled, size=small" id="71:11820" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
            >{`1`}</span>
          </div>
        </>
      )}
      {/* id="71:11822" */}
      {`${state}` === `active disabled` && `${size}` === `small` && (
        <>
          {/* name="state=active disabled, size=small" id="71:11822" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                background:
                  "var(--color-neutral-fill-colorfill, rgba(0, 0, 0, 0.15))",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
            >{`1`}</span>
          </div>
        </>
      )}
    </>
  )
}
