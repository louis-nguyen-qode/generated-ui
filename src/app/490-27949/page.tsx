// id="490:27949"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom4323425 } from "@designSystem/custom/QodeCustom4323425"
import { QodeCustom228149014 } from "@designSystem/custom/QodeCustom228149014"
import { QodeCustom112036931 } from "@designSystem/custom/QodeCustom112036931"
import { QodeCustom945729 } from "@designSystem/custom/QodeCustom945729"

export interface Qode49027949PageProps {
  style?: CSSProperties
}

export const Qode49027949Page: React.FC<Qode49027949PageProps> = ({
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="states" id="490:27949" type="SECTION" */}
      <div style={{ ...{}, ...style }}>
        {/* name="Shortlisted/List item" id="490:27809" type="INSTANCE" */}
        <QodeCustom4323425
          style={{
            ...{
              display: "flex",
              width: "354px",
              padding: "12px 16px",
              alignItems: "flex-start",
              gap: "24px",
              borderRadius: "var(--border-radius-base, 8px)",
              border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
              background: "#FFF",
            },
            ...{},
          }}
          {...{ showDelete: true, property_1: "default", verified: false }}
        />
        {/* name="Shortlisted/List item" id="490:27810" type="INSTANCE" */}
        <QodeCustom4323425
          style={{
            ...{
              display: "flex",
              width: "352px",
              padding: "12px 16px",
              alignItems: "flex-start",
              gap: "24px",
              borderRadius: "var(--border-radius-base, 8px)",
              border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
              background: "var(--neutral-white, #fff)",
            },
            ...{},
          }}
          {...{ showDelete: true, property_1: "hover", verified: false }}
        />
        {/* name="Shortlisted/List item" id="490:27811" type="INSTANCE" */}
        <QodeCustom4323425
          style={{
            ...{
              display: "flex",
              width: "352px",
              padding: "12px 16px",
              alignItems: "flex-start",
              gap: "24px",
              borderRadius: "var(--border-radius-base, 8px)",
              border: "2px solid var(--border-border-primary-20, #158de2)",
              background: "var(--blue-techblue-5, #f8fcff)",
            },
            ...{},
          }}
          {...{ showDelete: true, property_1: "active", verified: false }}
        />
        <span
          style={{
            ...{
              color: "var(--text-text-white, #fff)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-heading3, 28px)",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight:
                "var(--lineheight-lineheight-h3, 36px) /* 128.571% */",
            },
            ...{},
          }}
        >{`Default`}</span>
        <span
          style={{
            ...{
              color: "var(--text-text-white, #fff)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-heading3, 28px)",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight:
                "var(--lineheight-lineheight-h3, 36px) /* 128.571% */",
            },
            ...{},
          }}
        >{`Hover`}</span>
        <span
          style={{
            ...{
              color: "var(--text-text-white, #fff)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-heading3, 28px)",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight:
                "var(--lineheight-lineheight-h3, 36px) /* 128.571% */",
            },
            ...{},
          }}
        >{`Active`}</span>
        <span
          style={{
            ...{
              color: "var(--text-text-white, #fff)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-heading3, 28px)",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight:
                "var(--lineheight-lineheight-h3, 36px) /* 128.571% */",
            },
            ...{},
          }}
        >{`Long`}</span>
        {/* name="Shortlisted/List item" id="490:29063" type="INSTANCE" */}
        <QodeCustom4323425
          style={{
            ...{
              display: "flex",
              width: "352px",
              padding: "12px 16px",
              alignItems: "flex-start",
              gap: "24px",
              borderRadius: "var(--border-radius-base, 8px)",
              border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
              background: "#FFF",
            },
            ...{},
          }}
          {...{ showDelete: true, property_1: "default", verified: false }}
        />
        {/* name="Modal/Unshortlist" id="233:17181" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "440px",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--background-bg-white, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            },
            ...{},
          }}
        >
          {/* name="PopUp" id="233:17182" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                padding: "20px 20px 40px 20px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
                alignSelf: "stretch",
                background: "var(--background-bg-white, #fff)",
              },
              ...{},
            }}
          >
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px /* 150% */",
                },
                ...{},
              }}
            >{`You are currently in a conversation with this candidate. Removing them will delete all messages. Are you sure you want to continue?`}</span>
          </div>
          {/* name="Modal/Action" id="233:17202" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                padding: "var(--size-padding-paddingsm, 12px) 20px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                gap: "10px",
                alignSelf: "stretch",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--background-bg-neutral-5, #f8f6f6)",
              },
              ...{},
            }}
          >
            {/* name="Frame 50" id="233:17203" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  height: "32px",
                  alignItems: "center",
                  gap: "12px",
                },
                ...{},
              }}
            >
              {/* name="Button" id="233:17204" type="INSTANCE" */}
              <QodeCustom228149014
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Cancel",
                  type: "default",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="233:17205" type="INSTANCE" */}
              <QodeCustom228149014
                style={{
                  ...{
                    display: "flex",
                    width: "96px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--background-bg-primary, #1597f4)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Remove",
                  type: "primary",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </div>
        {/* name="Flow description" id="434:38005" type="INSTANCE" */}
        <QodeCustom112036931
          style={{
            ...{
              display: "flex",
              width: "528px",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--4, 4px)",
              background: "var(--text-text-dark-400, #2a2a2a)",
              boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
            },
            ...{},
          }}
          {...{
            flowName: "End of result",
            content: "Description",
            type: "Only title",
            size: "Default",
          }}
        />
        {/* name="Flow description" id="500:26974" type="INSTANCE" */}
        <QodeCustom112036931
          style={{
            ...{
              display: "flex",
              width: "541px",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--4, 4px)",
              background: "var(--text-text-dark-400, #2a2a2a)",
              boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
            },
            ...{},
          }}
          {...{
            flowName: "States",
            content: "Description",
            type: "Only title",
            size: "Default",
          }}
        />
        {/* name="Flow description" id="233:23604" type="INSTANCE" */}
        <QodeCustom112036931
          style={{
            ...{
              display: "flex",
              width: "528px",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--4, 4px)",
              background: "var(--text-text-dark-400, #2a2a2a)",
              boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
            },
            ...{},
          }}
          {...{
            flowName: "Remove from shortlist",
            content: "Description",
            type: "Only title",
            size: "Default",
          }}
        />
        {/* name="List | Shortlisted" id="434:37679" type="INSTANCE" */}
        <QodeCustom945729
          style={{
            ...{
              display: "flex",
              width: "370px",
              height: "583px",
              padding: "var(--size-size-sizexxs-6px, 6px)",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--size-size-sizexxs-6px, 6px)",
              background: "var(--neutral-gray-10, #e3e3e3)",
            },
            ...{},
          }}
          {...{ property_1: "End" }}
        />
        {/* name="Flow description" id="500:26966" type="INSTANCE" */}
        <QodeCustom112036931
          style={{
            ...{
              display: "flex",
              width: "541px",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--4, 4px)",
              background: "var(--gray-neutrals-80, #4a4a4a)",
              boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
            },
            ...{},
          }}
          {...{
            flowName: "Pagination",
            content: "15 / page\nPagination is always fixed at bottom",
            type: "Default",
            size: "Default",
          }}
        />
        {/* name="List | Shortlisted" id="500:27568" type="INSTANCE" */}
        <QodeCustom945729
          style={{
            ...{
              display: "flex",
              width: "370px",
              height: "838px",
              padding: "var(--size-size-sizexxs-6px, 6px)",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--size-size-sizexxs-6px, 6px)",
              background: "var(--neutral-gray-10, #e3e3e3)",
            },
            ...{},
          }}
          {...{ property_1: "End" }}
        />
        {/* name="List | Shortlisted" id="500:33715" type="INSTANCE" */}
        <QodeCustom945729
          style={{
            ...{
              display: "flex",
              width: "370px",
              height: "838px",
              padding: "var(--size-size-sizexxs-6px, 6px)",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--size-size-sizexxs-6px, 6px)",
              background: "var(--neutral-gray-10, #e3e3e3)",
            },
            ...{},
          }}
          {...{ property_1: "End" }}
        />
        {/* name="Flow description" id="500:27560" type="INSTANCE" */}
        <QodeCustom112036931
          style={{
            ...{
              display: "flex",
              width: "664px",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--4, 4px)",
              background: "var(--gray-neutrals-80, #4a4a4a)",
              boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
            },
            ...{},
          }}
          {...{
            flowName: "Search in shortlist",
            content:
              "Still show pagination if search result has more than 15 items\n\nStart search when user stops typing (500 ms)",
            type: "Default",
            size: "Default",
          }}
        />
      </div>
    </>
  )
}

export default Qode49027949Page
