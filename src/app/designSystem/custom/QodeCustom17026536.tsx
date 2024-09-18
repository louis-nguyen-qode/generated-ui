// id="170:26536"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom17026536Props {
  number?: string
  state?: "default" | "hover" | "active" | "disabled" | "active disabled"
  size?: "default" | "small"
}

export const QodeCustom17026536: React.FC<
  QodeCustom17026536Props & { style?: CSSProperties }
> = ({ number = "1", state = "default", size = "default", ...rest }) => {
  return (
    <>
      {/* name=".pagination__number" id="170:26536" type="COMPONENT_SET" */}
      {/* id="170:26535" */}
      {`${state}` === `default` && `${size}` === `default` && (
        <>
          {/* name="state=default, size=default" id="170:26535" type="COMPONENT" */}
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
              borderRadius: "var(--style-radius-borderround, 999px)",
            }}
          >
            <span
              style={{
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
              }}
            >{`1`}</span>
          </div>
        </>
      )}
      {/* id="170:26539" */}
      {`${state}` === `hover` && `${size}` === `default` && (
        <>
          {/* name="state=hover, size=default" id="170:26539" type="COMPONENT" */}
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
              borderRadius: "var(--style-radius-borderround, 999px)",
              background:
                "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
            }}
          >
            <span
              style={{
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
              }}
            >{`1`}</span>
          </div>
        </>
      )}
      {/* id="170:26541" */}
      {`${state}` === `active` && `${size}` === `default` && (
        <>
          {/* name="state=active, size=default" id="170:26541" type="COMPONENT" */}
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
              borderRadius: "var(--style-radius-borderround, 999px)",
              background:
                "var(--color-neutral-background-colorbgspotlight, rgba(0, 0, 0, 0.88))",
            }}
          >
            <span
              style={{
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
              }}
            >{`1`}</span>
          </div>
        </>
      )}
      {/* id="170:26543" */}
      {`${state}` === `disabled` && `${size}` === `default` && (
        <>
          {/* name="state=disabled, size=default" id="170:26543" type="COMPONENT" */}
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
              borderRadius: "var(--style-radius-borderround, 999px)",
            }}
          >
            <span
              style={{
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
              }}
            >{`1`}</span>
          </div>
        </>
      )}
      {/* id="170:26545" */}
      {`${state}` === `active disabled` && `${size}` === `default` && (
        <>
          {/* name="state=active disabled, size=default" id="170:26545" type="COMPONENT" */}
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
              borderRadius: "var(--style-radius-borderround, 999px)",
              background:
                "var(--color-neutral-fill-colorfill, rgba(0, 0, 0, 0.15))",
            }}
          >
            <span
              style={{
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
              }}
            >{`1`}</span>
          </div>
        </>
      )}
      {/* id="170:26547" */}
      {`${state}` === `default` && `${size}` === `small` && (
        <>
          {/* name="state=default, size=small" id="170:26547" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "24px",
              height: "var(--size-height-controlheightsm, 24px)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderround, 999px)",
            }}
          >
            <span
              style={{
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
              }}
            >{`1`}</span>
          </div>
        </>
      )}
      {/* id="170:26549" */}
      {`${state}` === `hover` && `${size}` === `small` && (
        <>
          {/* name="state=hover, size=small" id="170:26549" type="COMPONENT" */}
          <div
            style={{
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
            }}
          >
            <span
              style={{
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
              }}
            >{`1`}</span>
          </div>
        </>
      )}
      {/* id="170:26551" */}
      {`${state}` === `active` && `${size}` === `small` && (
        <>
          {/* name="state=active, size=small" id="170:26551" type="COMPONENT" */}
          <div
            style={{
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
            }}
          >
            <span
              style={{
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
              }}
            >{`1`}</span>
          </div>
        </>
      )}
      {/* id="170:26553" */}
      {`${state}` === `disabled` && `${size}` === `small` && (
        <>
          {/* name="state=disabled, size=small" id="170:26553" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "24px",
              height: "var(--size-height-controlheightsm, 24px)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderround, 999px)",
            }}
          >
            <span
              style={{
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
              }}
            >{`1`}</span>
          </div>
        </>
      )}
      {/* id="170:26555" */}
      {`${state}` === `active disabled` && `${size}` === `small` && (
        <>
          {/* name="state=active disabled, size=small" id="170:26555" type="COMPONENT" */}
          <div
            style={{
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
            }}
          >
            <span
              style={{
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
              }}
            >{`1`}</span>
          </div>
        </>
      )}
    </>
  )
}
