// id="119:7234"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom565626441 } from "@designSystem/custom/QodeCustom565626441"

export interface QodeCustom1197234Props {}

export const QodeCustom1197234: React.FC<
  QodeCustom1197234Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="Modal/View JD/Modal/View JD/View JD" id="119:7234" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "900px",
          height: "680px",
          flexDirection: "column",
          alignItems: "flex-start",
          borderRadius: "var(--style-radius-borderradius, 8px)",
          background: "var(--background-bg-white, #fff)",
          boxShadow:
            "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
        }}
      >
        {/* name="Modal/Header" id="119:7203" type="INSTANCE" */}
        <QodeCustom565626441
          style={{
            display: "flex",
            height: "52px",
            padding: "12px 20px",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "16px",
            flexShrink: "0",
            alignSelf: "stretch",
            borderBottom:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
          }}
          {...{ size: "lg" }}
        />
        {/* name="body" id="119:7204" type="FRAME" */}
        <div
          style={{
            display: "flex",
            padding: "20px",
            justifyContent: "center",
            alignItems: "center",
            flex: "1 0 0",
            alignSelf: "stretch",
          }}
        >
          {/* name="🎰 slot" id="119:10199" type="FRAME" */}
          <div
            style={{
              display: "flex",
              width: "860px",
              height: "588px",
              padding: "var(--size-padding-padding, 16px)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "4px",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--neutral-gray-5, #f8f6f6)",
            }}
          >
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-size-sizemd-20px, 20px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "var(--lineheight-lineheight-xl, 28px) /* 140% */",
              }}
            >{`File view area`}</span>
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
            >{`(docx, pdf...)`}</span>
          </div>
        </div>
      </div>
    </>
  )
}
