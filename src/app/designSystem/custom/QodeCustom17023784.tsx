// id="170:23784"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom17023784Props {
  title?: string
  state?: "default" | "hover" | "selected" | "selected multiple" | "disabled"
}

export const QodeCustom17023784: React.FC<
  QodeCustom17023784Props & { style?: CSSProperties }
> = ({ title = "Select menu item", state = "default", ...rest }) => {
  return (
    <>
      {/* name="Select/Item" id="170:23784" type="COMPONENT_SET" */}
      {/* id="170:23783" */}
      {`${state}` === `default` && (
        <>
          {/* name="state=default" id="170:23783" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "139px",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px var(--size-padding-paddingsm, 12px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradius, 8px)",
            }}
          >
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
            >{`Select menu item`}</span>
          </div>
        </>
      )}
      {/* id="170:23787" */}
      {`${state}` === `hover` && (
        <>
          {/* name="state=hover" id="170:23787" type="COMPONENT" */}
          <div
            style={{
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
            }}
          >
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
            >{`Select menu item`}</span>
          </div>
        </>
      )}
      {/* id="170:23789" */}
      {`${state}` === `selected` && (
        <>
          {/* name="state=selected" id="170:23789" type="COMPONENT" */}
          <div
            style={{
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
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Select menu item`}</span>
          </div>
        </>
      )}
      {/* id="170:23791" */}
      {`${state}` === `selected multiple` && (
        <>
          {/* name="state=selected multiple" id="170:23791" type="COMPONENT" */}
          <div
            style={{
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
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Select menu item`}</span>
            {/* name="check" id="170:23793" type="INSTANCE" */}
            <Icon.QodeCheck
              style={{ width: "20px", height: "20px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="170:23795" */}
      {`${state}` === `disabled` && (
        <>
          {/* name="state=disabled" id="170:23795" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "139px",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px var(--size-padding-paddingsm, 12px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradius, 8px)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color:
                  "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Select menu item`}</span>
          </div>
        </>
      )}
    </>
  )
}
