// id="24:4922"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom277832 } from "@designSystem/custom/QodeCustom277832"

export interface QodeCustom244922Props {
  edit?: boolean
  description?: boolean
  award?: string
  company?: boolean
  state?: "Default" | "Hover"
}

export const QodeCustom244922: React.FC<
  QodeCustom244922Props & { style?: CSSProperties }
> = ({
  edit = true,
  description = true,
  award = "Staff of the year",
  company = true,
  state = "Default",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="awardItem" id="24:4922" type="COMPONENT_SET" */}
      {/* id="24:4923" */}
      {`${state}` === `Default` && (
        <>
          {/* name="State=Default" id="24:4923" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "496px",
                paddingBottom: "var(--size-padding-paddingsm, 12px)",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-margin-marginxxs, 4px)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  width: "496px",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-heading6, 16px)",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight:
                    "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                },
                ...{},
              }}
            >{`Staff of the year`}</span>
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color:
                    "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Timeframe - Total Time`}</span>
            {/* name="company" id="24:4926" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="avatar" id="24:4927" type="INSTANCE" */}
              <QodeCustom277832
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                    background:
                      "var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{
                  opentowork: true,
                  img: true,
                  type: "Square",
                  state: "Default",
                }}
              />
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`3 Experiences across Google & 2 other companies`}</span>
            </div>
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Description`}</span>
          </div>
        </>
      )}
      {/* id="24:4930" */}
      {`${state}` === `Hover` && (
        <>
          {/* name="State=Hover" id="24:4930" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "496px",
                paddingBottom: "var(--size-padding-paddingsm, 12px)",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-margin-marginxxs, 4px)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  width: "496px",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-heading6, 16px)",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight:
                    "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                },
                ...{},
              }}
            >{`Staff of the year`}</span>
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color:
                    "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Timeframe - Total Time`}</span>
            {/* name="company" id="24:4933" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="avatar" id="24:4934" type="INSTANCE" */}
              <QodeCustom277832
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                    background:
                      "var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{
                  opentowork: true,
                  img: true,
                  type: "Square",
                  state: "Default",
                }}
              />
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`3 Experiences across Google & 2 other companies`}</span>
            </div>
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Description`}</span>
          </div>
        </>
      )}
    </>
  )
}
