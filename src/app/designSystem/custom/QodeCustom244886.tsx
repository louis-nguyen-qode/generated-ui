// id="24:4886"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom277831 } from "@designSystem/custom/QodeCustom277831"

export interface QodeCustom244886Props {
  location?: string
  companyName?: string
  logo?: "No" | "Yes"
}

export const QodeCustom244886: React.FC<
  QodeCustom244886Props & { style?: CSSProperties }
> = ({
  location = "Location & Total Time",
  companyName = "Company Name",
  logo = "Yes",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="companyItem" id="24:4886" type="COMPONENT_SET" */}
      {/* id="24:4887" */}
      {`${logo}` === `Yes` && (
        <>
          {/* name="❓Logo=Yes" id="24:4887" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "496px",
                alignItems: "flex-start",
                gap: "var(--size-margin-marginsm, 12px)",
              },
              ...style,
            }}
          >
            {/* name="avatar" id="24:4888" type="INSTANCE" */}
            <QodeCustom277831
              style={{
                ...{
                  display: "flex",
                  width: "42px",
                  height: "42px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--font-size-large, 16px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                  background: "var(--neutral-white, #fff)",
                },
                ...{},
              }}
              {...{ img: true, type: "Round", state: "Default" }}
            />
            {/* name="content" id="24:4889" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  flex: "1 0 0",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`Company Name`}</span>
              <span
                style={{
                  ...{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Location & Total Time`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="24:4892" */}
      {`${logo}` === `No` && (
        <>
          {/* name="❓Logo=No" id="24:4892" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "496px",
                alignItems: "flex-start",
                gap: "var(--size-margin-marginsm, 12px)",
              },
              ...style,
            }}
          >
            {/* name="avatar" id="24:4893" type="INSTANCE" */}
            <QodeCustom277831
              style={{
                ...{
                  display: "flex",
                  width: "42px",
                  height: "42px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--font-size-large, 16px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background:
                    "linear-gradient(159deg, rgba(141, 185, 17, 0.00) 30.23%, #8DB911 113.12%), var(--color-primary-colorprimarybghover, #abc1e4)",
                },
                ...{},
              }}
              {...{ icon: true, type: "Round", state: "Default" }}
            />
            {/* name="content" id="24:4894" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  flex: "1 0 0",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`Company Name`}</span>
              <span
                style={{
                  ...{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Location & Total Time`}</span>
            </div>
          </div>
        </>
      )}
    </>
  )
}
