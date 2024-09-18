// id="4:33"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom433Props {
  icon?: React.ReactNode
  state?: "Active" | "Default" | "Hovered"
}

export const QodeCustom433: React.FC<
  QodeCustom433Props & { style?: CSSProperties }
> = ({ icon = undefined, state = "Default", ...rest }) => {
  return (
    <>
      {/* name="Navbar/Menu" id="4:33" type="COMPONENT_SET" */}
      {/* id="4:34" */}
      {`${state}` === `Default` && (
        <>
          {/* name="State=Default" id="4:34" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "84px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-size-sizexxs-6px, 6px)",
            }}
          >
            {/* name="Icon" id="4:78" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "40px",
                height: "40px",
                padding: "8px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "var(--size-size-sizexs-8px, 8px)",
                border: "1px solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--background-bg-neutral-5, #f8f6f6)",
              }}
            >
              {/* name="briefcase" id="4:79" type="INSTANCE" */}
              <Icon.QodeBriefcase
                style={{ width: "24px", height: "24px", flexShrink: "0" }}
                {...{}}
              />
            </div>
            <span
              style={{
                alignSelf: "stretch",
                color: "var(--text-text-neutral-30, #656565)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
              }}
            >{`Jobs`}</span>
          </div>
        </>
      )}
      {/* id="4:37" */}
      {`${state}` === `Hovered` && (
        <>
          {/* name="State=Hovered" id="4:37" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "84px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-size-sizexxs-6px, 6px)",
            }}
          >
            {/* name="Icon" id="4:89" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "40px",
                height: "40px",
                padding: "8px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "var(--size-size-sizexs-8px, 8px)",
                border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-white-hover, #f8f6f6)",
              }}
            >
              {/* name="briefcase" id="4:90" type="INSTANCE" */}
              <Icon.QodeBriefcase
                style={{ width: "24px", height: "24px", flexShrink: "0" }}
                {...{}}
              />
            </div>
            <span
              style={{
                alignSelf: "stretch",
                color: "var(--text-text-neutral-30, #656565)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
              }}
            >{`Jobs`}</span>
          </div>
        </>
      )}
      {/* id="4:40" */}
      {`${state}` === `Active` && (
        <>
          {/* name="State=Active" id="4:40" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "84px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-size-sizexxs-6px, 6px)",
            }}
          >
            {/* name="Icon" id="4:92" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "40px",
                height: "40px",
                padding: "8px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "var(--size-size-sizexs-8px, 8px)",
                border: "1px solid var(--border-border-primary-30, #107ecc)",
                background: "var(--background-bg-primary, #1597f4)",
              }}
            >
              {/* name="briefcase" id="4:93" type="INSTANCE" */}
              <Icon.QodeBriefcase
                style={{ width: "24px", height: "24px", flexShrink: "0" }}
                {...{}}
              />
            </div>
            <span
              style={{
                alignSelf: "stretch",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
              }}
            >{`Jobs`}</span>
          </div>
        </>
      )}
    </>
  )
}
