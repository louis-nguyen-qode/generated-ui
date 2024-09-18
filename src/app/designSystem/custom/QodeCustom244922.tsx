// id="24:4922"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

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
              display: "flex",
              width: "496px",
              paddingBottom: "var(--size-padding-paddingsm, 12px)",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--size-margin-marginxxs, 4px)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
          >
            <span
              style={{
                width: "496px",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-heading6, 16px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight:
                  "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
              }}
            >{`Staff of the year`}</span>
            <span
              style={{
                alignSelf: "stretch",
                color:
                  "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--line-height-lineheight, 20px) /* 142.857% */",
              }}
            >{`Timeframe - Total Time`}</span>
            {/* name="company" id="24:4926" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                alignSelf: "stretch",
              }}
            >
              {/* name="avatar" id="24:4927" type="INSTANCE" */}
              <Flex
                style={{
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
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                  }}
                >{`AW`}</span>
                {/* name="user-large" id="I24:4927;2785:8296" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "1.2px",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    left: "6px",
                    top: "6px",
                  }}
                >
                  {/* name="Vector" id="I24:4927;2785:8296;2828:6334" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "9.6px",
                      height: "9.6px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I24:4927;2785:8296;2828:6334 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="img" id="I24:4927;2785:8297" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "24px",
                    padding: "var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    position: "absolute",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    background:
                      "url(<path-to-image>) lightgray 50% / contain no-repeat",
                  }}
                >
                  {/* name="img" id=I24:4927;2785:8297 type=FRAME */}
                  <></>
                </div>
                {/* name="Badge" id="I24:4927;2820:1281" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--size-size-sizexxs-6px, 6px)",
                    height: "var(--size-size-sizexxs-6px, 6px)",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    right: "1px",
                    bottom: "1px",
                    borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                    background: "var(--color-error-colorerror, #ff6542)",
                  }}
                >
                  {/* name="Badge" id=I24:4927;2820:1281 type=INSTANCE */}
                  <></>
                </Flex>
              </Flex>
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
              >{`3 Experiences across Google & 2 other companies`}</span>
            </div>
            <span
              style={{
                alignSelf: "stretch",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
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
              display: "flex",
              width: "496px",
              paddingBottom: "var(--size-padding-paddingsm, 12px)",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--size-margin-marginxxs, 4px)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
          >
            <span
              style={{
                width: "496px",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-heading6, 16px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight:
                  "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
              }}
            >{`Staff of the year`}</span>
            <span
              style={{
                alignSelf: "stretch",
                color:
                  "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--line-height-lineheight, 20px) /* 142.857% */",
              }}
            >{`Timeframe - Total Time`}</span>
            {/* name="company" id="24:4933" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                alignSelf: "stretch",
              }}
            >
              {/* name="avatar" id="24:4934" type="INSTANCE" */}
              <Flex
                style={{
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
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                  }}
                >{`AW`}</span>
                {/* name="user-large" id="I24:4934;2785:8296" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "1.2px",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    left: "6px",
                    top: "6px",
                  }}
                >
                  {/* name="Vector" id="I24:4934;2785:8296;2828:6334" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "9.6px",
                      height: "9.6px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I24:4934;2785:8296;2828:6334 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="img" id="I24:4934;2785:8297" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "24px",
                    padding: "var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    position: "absolute",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    background:
                      "url(<path-to-image>) lightgray 50% / contain no-repeat",
                  }}
                >
                  {/* name="img" id=I24:4934;2785:8297 type=FRAME */}
                  <></>
                </div>
                {/* name="Badge" id="I24:4934;2820:1281" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--size-size-sizexxs-6px, 6px)",
                    height: "var(--size-size-sizexxs-6px, 6px)",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    right: "1px",
                    bottom: "1px",
                    borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                    background: "var(--color-error-colorerror, #ff6542)",
                  }}
                >
                  {/* name="Badge" id=I24:4934;2820:1281 type=INSTANCE */}
                  <></>
                </Flex>
              </Flex>
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
              >{`3 Experiences across Google & 2 other companies`}</span>
            </div>
            <span
              style={{
                alignSelf: "stretch",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Description`}</span>
          </div>
        </>
      )}
    </>
  )
}
