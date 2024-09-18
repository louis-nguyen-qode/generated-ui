// id="391:31654"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom39131654Props {
  property_1?: "Default" | "Variant2" | "Variant3" | "Variant4"
}

export const QodeCustom39131654: React.FC<
  QodeCustom39131654Props & { style?: CSSProperties }
> = ({ property_1 = "Default", ...rest }) => {
  return (
    <>
      {/* name="Finding" id="391:31654" type="COMPONENT_SET" */}
      {/* id="391:31653" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="391:31653" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "216px",
              height: "40px",
              padding: "8px 24px",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "8px",
              flexShrink: "0",
              borderRadius: "var(--border-radius-rounded, 999px)",
              background: "var(--neutral-gray-10, #e3e3e3)",
            }}
          >
            {/* name="spinner" id="391:31664" type="INSTANCE" */}
            <Icon.QodeSpinner
              style={{ width: "24px", height: "24px", flexShrink: "0" }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: '"SF Pro Display"',
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "24px /* 150% */",
              }}
            >{`Finding contact info`}</span>
          </div>
        </>
      )}
      {/* id="391:31655" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="391:31655" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "216px",
              height: "40px",
              padding: "8px 24px",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "8px",
              flexShrink: "0",
              borderRadius: "var(--border-radius-rounded, 999px)",
              background: "var(--neutral-gray-10, #e3e3e3)",
            }}
          >
            {/* name="spinner" id="391:31671" type="INSTANCE" */}
            <Icon.QodeSpinner
              style={{
                width: "24px",
                height: "24px",
                transform: "rotate(-90deg)",
                flexShrink: "0",
              }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: '"SF Pro Display"',
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "24px /* 150% */",
              }}
            >{`Finding contact info`}</span>
          </div>
        </>
      )}
      {/* id="391:31667" */}
      {`${property_1}` === `Variant3` && (
        <>
          {/* name="Property 1=Variant3" id="391:31667" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "216px",
              height: "40px",
              padding: "8px 24px",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "8px",
              flexShrink: "0",
              borderRadius: "var(--border-radius-rounded, 999px)",
              background: "var(--neutral-gray-10, #e3e3e3)",
            }}
          >
            {/* name="spinner" id="391:31674" type="INSTANCE" */}
            <Icon.QodeSpinner
              style={{ width: "24px", height: "24px", flexShrink: "0" }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: '"SF Pro Display"',
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "24px /* 150% */",
              }}
            >{`Finding contact info`}</span>
          </div>
        </>
      )}
      {/* id="391:31677" */}
      {`${property_1}` === `Variant4` && (
        <>
          {/* name="Property 1=Variant4" id="391:31677" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "216px",
              height: "40px",
              padding: "8px 24px",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "8px",
              flexShrink: "0",
              borderRadius: "var(--border-radius-rounded, 999px)",
              background: "var(--neutral-gray-10, #e3e3e3)",
            }}
          >
            {/* name="spinner" id="391:31678" type="INSTANCE" */}
            <Icon.QodeSpinner
              style={{
                width: "24px",
                height: "24px",
                transform: "rotate(90deg)",
                flexShrink: "0",
              }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: '"SF Pro Display"',
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "24px /* 150% */",
              }}
            >{`Finding contact info`}</span>
          </div>
        </>
      )}
    </>
  )
}
