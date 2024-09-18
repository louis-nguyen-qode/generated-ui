// id="47:5527"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom48536870 } from "@designSystem/custom/QodeCustom48536870"
import { QodeCustom475443 } from "@designSystem/custom/QodeCustom475443"

export interface QodeCustom475527Props {}

export const QodeCustom475527: React.FC<
  QodeCustom475527Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="State=default, Style=Simple" id="47:5527" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "365px",
          maxWidth: "440px",
          flexDirection: "column",
          alignItems: "flex-start",
          borderRadius: "var(--border-radius-large, 12px)",
          border:
            "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
          background: "var(--background-bg-white, #fff)",
        }}
      >
        {/* name="Wrap" id="47:5566" type="FRAME" */}
        <div
          style={{
            display: "flex",
            padding: "16px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
            alignSelf: "stretch",
            borderBottom:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
          }}
        >
          {/* name="Job title" id="47:5567" type="FRAME" */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              alignSelf: "stretch",
            }}
          >
            <span
              style={{
                maxHeight: "56px",
                flex: "1 0 0",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-size-sizemd-20px, 20px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "var(--lineheight-lineheight-xl, 28px) /* 140% */",
              }}
            >{`Sales Consultant`}</span>
            {/* name="arrow-up-right" id="47:5569" type="INSTANCE" */}
            <Icon.QodeArrowUpRight
              style={{ width: "24px", height: "24px" }}
              {...{}}
            />
          </div>
          {/* name="Wrap" id="485:35083" type="FRAME" */}
          <div
            style={{
              display: "flex",
              paddingRight: "16px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
              alignSelf: "stretch",
            }}
          >
            {/* name="Job/Attributes" id="485:36887" type="INSTANCE" */}
            <QodeCustom48536870
              style={{
                display: "flex",
                padding: "4px 12px",
                alignItems: "center",
                gap: "12px",
                borderRadius: "99px",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
              {...{ property_1: "full" }}
            />
            {/* name="Skills" id="47:5576" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Skills:`}</span>
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
            </div>
          </div>
        </div>
        {/* name="Action" id="47:5554" type="FRAME" */}
        <div
          style={{
            display: "flex",
            padding: "16px",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch",
            background: "var(--neutral-gray-5, #f8f6f6)",
          }}
        >
          {/* name="Status" id="47:5555" type="FRAME" */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* name="Job/Quick access" id="47:5556" type="INSTANCE" */}
            <QodeCustom475443
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-size-sizexxs-6px, 6px)",
                borderRadius: "99px",
              }}
              {...{
                text: "12 shortlisted",
                icon: <Icon.QodeHeart />,
                state: "Default",
                _style: "Text",
              }}
            />
            {/* name="divider" id="47:5557" type="LINE" */}
            <Flex
              style={{
                width: "1px",
                height: "15px",
                background: "var(--border-border-neutral-30, #d5d5d5)",
              }}
            >
              {/* name="divider" id=47:5557 type=LINE */}
              <></>
            </Flex>
            {/* name="Job/Quick access" id="47:5558" type="INSTANCE" */}
            <QodeCustom475443
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-size-sizexxs-6px, 6px)",
                borderRadius: "99px",
              }}
              {...{
                text: "4 interviewed",
                icon: <Icon.QodeVideo />,
                state: "Default",
                _style: "Text",
              }}
            />
          </div>
          <span
            style={{
              color: "var(--text-text-primary-20, #1597f4)",
              textAlign: "center",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              textDecorationLine: "underline",
            }}
          >{`JD`}</span>
        </div>
      </div>
    </>
  )
}
