// id="27:6213"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom276213Props {
  location?: string
  time?: boolean
  button?: boolean
  company?: string
  description?: string
  title?: boolean
  expand?: "No" | "Yes"
}

export const QodeCustom276213: React.FC<
  QodeCustom276213Props & { style?: CSSProperties }
> = ({
  location = "Location",
  time = true,
  button = true,
  company = "Company",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  title = true,
  expand = "No",
  ...rest
}) => {
  return (
    <>
      {/* name="jobItem" id="27:6213" type="COMPONENT_SET" */}
      {/* id="27:6214" */}
      {`${expand}` === `No` && (
        <>
          {/* name="❓ Expand=No" id="27:6214" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "496px",
              paddingBottom: "var(--size-padding-paddingsm, 12px)",
              alignItems: "flex-start",
              gap: "var(--size-margin-marginsm, 12px)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
          >
            {/* name="avatar" id="27:6215" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "42px",
                height: "42px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--font-size-large, 16px)",
                flexShrink: "0",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                }}
              >{`AW`}</span>
              {/* name="user-large" id="I27:6215;2785:8296" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "21px",
                  height: "21px",
                  padding: "2.1px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "10.5px",
                  top: "10.5px",
                }}
              >
                {/* name="Vector" id="I27:6215;2785:8296;2828:6334" type="VECTOR" */}
                <Flex
                  style={{
                    width: "16.8px",
                    height: "16.8px",
                    flexShrink: "0",
                    fill: "var(--color-neutral-background-colorbgcontainer, #fff)",
                  }}
                >
                  {/* name="Vector" id=I27:6215;2785:8296;2828:6334 type=VECTOR */}
                  <></>
                </Flex>
              </Flex>
              {/* name="img" id="I27:6215;2785:8297" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "42px",
                  height: "42px",
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
                {/* name="img" id=I27:6215;2785:8297 type=FRAME */}
                <></>
              </div>
              {/* name="Badge" id="I27:6215;2820:1281" type="INSTANCE" */}
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
                {/* name="Badge" id=I27:6215;2820:1281 type=INSTANCE */}
                <></>
              </Flex>
            </Flex>
            {/* name="content" id="27:6216" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                flex: "1 0 0",
              }}
            >
              {/* name="Title" id="27:6217" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  }}
                >{`Job Title`}</span>
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
              >{`Company`}</span>
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-20, #878787)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Timeframe - Total Time`}</span>
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-20, #878787)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Location`}</span>
              {/* name="experienceDescription" id="27:6222" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "var(--size-margin-marginxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "2",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}</span>
                {/* name="Button" id="27:6224" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                  }}
                >
                  {/* name="🎰 icon" id="I27:6224;114:1873" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.599px 1.599px 1.599px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I27:6224;114:1873;2828:3516" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.801px",
                        height: "12.803px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I27:6224;114:1873;2828:3516 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  <span
                    style={{
                      color: "var(--text-text-neutral-20, #878787)",
                      textAlign: "center",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                    }}
                  >{`See More`}</span>
                  {/* name="🎰 icon" id="I27:6224;2906:15870" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.6px 1.601px 1.598px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I27:6224;2906:15870;2828:3908" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.799px",
                        height: "12.802px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I27:6224;2906:15870;2828:3908 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="27:6225" */}
      {`${expand}` === `Yes` && (
        <>
          {/* name="❓ Expand=Yes" id="27:6225" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "496px",
              paddingBottom: "var(--size-padding-paddingsm, 12px)",
              alignItems: "flex-start",
              gap: "var(--size-margin-marginsm, 12px)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
          >
            {/* name="avatar" id="27:6226" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "42px",
                height: "42px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--font-size-large, 16px)",
                flexShrink: "0",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                }}
              >{`AW`}</span>
              {/* name="user-large" id="I27:6226;2785:8296" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "21px",
                  height: "21px",
                  padding: "2.1px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "10.5px",
                  top: "10.5px",
                }}
              >
                {/* name="Vector" id="I27:6226;2785:8296;2828:6334" type="VECTOR" */}
                <Flex
                  style={{
                    width: "16.8px",
                    height: "16.8px",
                    flexShrink: "0",
                    fill: "var(--color-neutral-background-colorbgcontainer, #fff)",
                  }}
                >
                  {/* name="Vector" id=I27:6226;2785:8296;2828:6334 type=VECTOR */}
                  <></>
                </Flex>
              </Flex>
              {/* name="img" id="I27:6226;2785:8297" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "42px",
                  height: "42px",
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
                {/* name="img" id=I27:6226;2785:8297 type=FRAME */}
                <></>
              </div>
              {/* name="Badge" id="I27:6226;2820:1281" type="INSTANCE" */}
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
                {/* name="Badge" id=I27:6226;2820:1281 type=INSTANCE */}
                <></>
              </Flex>
            </Flex>
            {/* name="content" id="27:6227" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                flex: "1 0 0",
              }}
            >
              {/* name="Title" id="27:6228" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  }}
                >{`Job Title`}</span>
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
              >{`Company`}</span>
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-20, #878787)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Timeframe - Total Time`}</span>
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-20, #878787)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Location`}</span>
              {/* name="experienceDescription" id="27:6233" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "var(--size-margin-marginxs, 8px)",
                  alignSelf: "stretch",
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
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}</span>
                {/* name="Button" id="27:6235" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                  }}
                >
                  {/* name="🎰 icon" id="I27:6235;114:1873" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.599px 1.599px 1.599px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I27:6235;114:1873;2828:3516" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.801px",
                        height: "12.803px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I27:6235;114:1873;2828:3516 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  <span
                    style={{
                      color: "var(--text-text-neutral-20, #878787)",
                      textAlign: "center",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                    }}
                  >{`See Less`}</span>
                  {/* name="🎰 icon" id="I27:6235;2906:15870" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.6px 1.601px 1.598px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I27:6235;2906:15870;2828:3908" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.799px",
                        height: "12.802px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I27:6235;2906:15870;2828:3908 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
