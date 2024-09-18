// id="485:36879"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom48536879Props {
  property_1?: "full" | "not specified" | "location" | "yoe"
}

export const QodeCustom48536879: React.FC<
  QodeCustom48536879Props & { style?: CSSProperties }
> = ({ property_1 = "full", ...rest }) => {
  return (
    <>
      {/* name="Job/Attributes" id="485:36879" type="COMPONENT_SET" */}
      {/* id="485:36870" */}
      {`${property_1}` === `full` && (
        <>
          {/* name="Property 1=full" id="485:36870" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "4px 12px",
              alignItems: "center",
              gap: "12px",
              borderRadius: "99px",
              background: "var(--neutral-gray-5, #f8f6f6)",
            }}
          >
            {/* name="Urgent" id="485:36863" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "2px var(--size-size-sizexxs-6px, 6px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "12px",
                background: "var(--neutral-gray-90, #464646)",
              }}
            >
              <span
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "10px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >{`URGENT`}</span>
            </div>
            {/* name="Yoe" id="485:36865" type="FRAME" */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`3 yoe`}</span>
              {/* name="Line 3" id="485:36867" type="LINE" */}
              <Flex
                style={{
                  width: "1px",
                  height: "8px",
                  background: "var(--border-border-neutral-50, #6f6f6f)",
                }}
              >
                {/* name="Line 3" id=485:36867 type=LINE */}
                <></>
              </Flex>
            </div>
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Vietnam`}</span>
          </div>
        </>
      )}
      {/* id="485:38634" */}
      {`${property_1}` === `yoe` && (
        <>
          {/* name="Property 1=yoe" id="485:38634" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "4px 12px",
              alignItems: "center",
              gap: "12px",
              borderRadius: "99px",
              background: "var(--neutral-gray-5, #f8f6f6)",
            }}
          >
            {/* name="Urgent" id="485:38635" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "2px var(--size-size-sizexxs-6px, 6px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "12px",
                background: "var(--neutral-gray-90, #464646)",
              }}
            >
              <span
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "10px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >{`URGENT`}</span>
            </div>
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`3 yoe`}</span>
          </div>
        </>
      )}
      {/* id="485:38627" */}
      {`${property_1}` === `location` && (
        <>
          {/* name="Property 1=location" id="485:38627" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "4px 12px",
              alignItems: "center",
              gap: "12px",
              borderRadius: "99px",
              background: "var(--neutral-gray-5, #f8f6f6)",
            }}
          >
            {/* name="Urgent" id="485:38628" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "2px var(--size-size-sizexxs-6px, 6px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "12px",
                background: "var(--neutral-gray-90, #464646)",
              }}
            >
              <span
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "10px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >{`URGENT`}</span>
            </div>
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Vietnam`}</span>
          </div>
        </>
      )}
      {/* id="485:36880" */}
      {`${property_1}` === `not specified` && (
        <>
          {/* name="Property 1=not specified" id="485:36880" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "4px 12px",
              alignItems: "center",
              gap: "12px",
              borderRadius: "99px",
              background: "var(--neutral-gray-5, #f8f6f6)",
            }}
          >
            {/* name="Urgent" id="485:36881" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "2px var(--size-size-sizexxs-6px, 6px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "12px",
                background: "var(--neutral-gray-90, #464646)",
              }}
            >
              <span
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "10px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >{`URGENT`}</span>
            </div>
            <span
              style={{
                color: "var(--text-text-neutral-20, #878787)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`YoE & Location: Any`}</span>
          </div>
        </>
      )}
    </>
  )
}
