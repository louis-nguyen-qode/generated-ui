// id="24:5031"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom245031Props {
  showedit?: boolean
  showMore?: "Yes" | "No"
}

export const QodeCustom245031: React.FC<
  QodeCustom245031Props & { style?: CSSProperties }
> = ({ showedit = false, showMore = "Yes", ...rest }) => {
  return (
    <>
      {/* name="sectionAbout" id="24:5031" type="COMPONENT_SET" */}
      {/* id="24:5032" */}
      {`${showMore}` === `Yes` && (
        <>
          {/* name="❓Show More=Yes" id="24:5032" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "640px",
              paddingBottom: "var(--size-padding-paddingsm, 12px)",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "var(--size-margin-margin, 16px)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
          >
            {/* name="body" id="24:5033" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                alignSelf: "stretch",
              }}
            >
              {/* name="sectionHeader" id="24:5034" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingxs, 8px)",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Symbol" id="24:5035" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "24px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    background:
                      "var(--color-neutral-background-controlitembgactive, #eaeff8)",
                  }}
                >
                  {/* name="icons" id="24:5036" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      padding: "1.5px 1.498px 1.5px 1.5px",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Vector" id="I24:5036;630:10668" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "15.002px",
                        height: "15px",
                        fill: "var(--color-primary-colorprimarytext, #2d64bc)",
                      }}
                    >
                      {/* name="Vector" id=I24:5036;630:10668 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </div>
                {/* name="content" id="24:5037" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    flex: "1 0 0",
                  }}
                >
                  <span
                    style={{
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-size-sizemd-20px, 20px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                    }}
                  >{`About`}</span>
                  <span
                    style={{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                    }}
                  >{`Accessibility`}</span>
                </div>
                {/* name="Button" id="24:5040" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                    background:
                      "var(--color-neutral-background-colorbgcontainer, #fff)",
                  }}
                >
                  {/* name="pencil" id="I24:5040;114:1808" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.599px 1.616px 1.614px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I24:5040;114:1808;2828:4448" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.784px",
                        height: "12.787px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I24:5040;114:1808;2828:4448 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  <span
                    style={{
                      color: "var(--color-neutral-text-colortext, #000)",
                      textAlign: "center",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheight, 20px) /* 142.857% */",
                    }}
                  >{`Edit`}</span>
                  {/* name="🎰 icon" id="I24:5040;2906:15520" type="INSTANCE" */}
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
                    {/* name="Vector" id="I24:5040;2906:15520;2828:3908" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.799px",
                        height: "12.802px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I24:5040;2906:15520;2828:3908 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
              </div>
              {/* name="body" id="24:5041" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Frame 37125" id="24:5042" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "8px",
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
                      color: "var(--text-text-neutral-40, #464646)",
                      textOverflow: "ellipsis",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea `}</span>
                  {/* name="Button" id="24:5044" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxxs, 4px)",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                    }}
                  >
                    {/* name="🎰 icon" id="I24:5044;114:1873" type="INSTANCE" */}
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
                      {/* name="Vector" id="I24:5044;114:1873;2828:3516" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "12.801px",
                          height: "12.803px",
                          flexShrink: "0",
                          fill: "var(--color-neutral-text-colortext, #000)",
                        }}
                      >
                        {/* name="Vector" id=I24:5044;114:1873;2828:3516 type=VECTOR */}
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
                    >{`See more`}</span>
                    {/* name="🎰 icon" id="I24:5044;2906:15870" type="INSTANCE" */}
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
                      {/* name="Vector" id="I24:5044;2906:15870;2828:3908" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "12.799px",
                          height: "12.802px",
                          flexShrink: "0",
                          fill: "var(--color-neutral-text-colortext, #000)",
                        }}
                      >
                        {/* name="Vector" id=I24:5044;2906:15870;2828:3908 type=VECTOR */}
                        <></>
                      </Flex>
                    </Flex>
                  </Flex>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="24:5045" */}
      {`${showMore}` === `No` && (
        <>
          {/* name="❓Show More=No" id="24:5045" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "640px",
              paddingBottom: "var(--size-padding-paddingsm, 12px)",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "var(--size-margin-margin, 16px)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
          >
            {/* name="body" id="24:5046" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                alignSelf: "stretch",
              }}
            >
              {/* name="sectionHeader" id="24:5047" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingxs, 8px)",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Symbol" id="24:5048" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "24px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    background:
                      "var(--color-neutral-background-controlitembgactive, #eaeff8)",
                  }}
                >
                  {/* name="icons" id="24:5049" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      padding: "1.5px 1.498px 1.5px 1.5px",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Vector" id="I24:5049;630:10668" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "15.002px",
                        height: "15px",
                        fill: "var(--color-primary-colorprimarytext, #2d64bc)",
                      }}
                    >
                      {/* name="Vector" id=I24:5049;630:10668 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </div>
                {/* name="content" id="24:5050" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    flex: "1 0 0",
                  }}
                >
                  <span
                    style={{
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-size-sizemd-20px, 20px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                    }}
                  >{`About`}</span>
                  <span
                    style={{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                    }}
                  >{`Accessibility`}</span>
                </div>
                {/* name="Button" id="24:5053" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                    background:
                      "var(--color-neutral-background-colorbgcontainer, #fff)",
                  }}
                >
                  {/* name="pencil" id="I24:5053;114:1808" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.599px 1.616px 1.614px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I24:5053;114:1808;2828:4448" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.784px",
                        height: "12.787px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I24:5053;114:1808;2828:4448 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  <span
                    style={{
                      color: "var(--color-neutral-text-colortext, #000)",
                      textAlign: "center",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheight, 20px) /* 142.857% */",
                    }}
                  >{`Edit`}</span>
                  {/* name="🎰 icon" id="I24:5053;2906:15520" type="INSTANCE" */}
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
                    {/* name="Vector" id="I24:5053;2906:15520;2828:3908" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.799px",
                        height: "12.802px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I24:5053;2906:15520;2828:3908 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
              </div>
              {/* name="body" id="24:5054" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}</span>
              </div>
              {/* name="Button" id="24:5056" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px) 0px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                }}
              >
                {/* name="🎰 icon" id="I24:5056;114:1873" type="INSTANCE" */}
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
                  {/* name="Vector" id="I24:5056;114:1873;2828:3516" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.801px",
                      height: "12.803px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortext, #000)",
                    }}
                  >
                    {/* name="Vector" id=I24:5056;114:1873;2828:3516 type=VECTOR */}
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
                {/* name="🎰 icon" id="I24:5056;2906:15870" type="INSTANCE" */}
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
                  {/* name="Vector" id="I24:5056;2906:15870;2828:3908" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.799px",
                      height: "12.802px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortext, #000)",
                    }}
                  >
                    {/* name="Vector" id=I24:5056;2906:15870;2828:3908 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
            </div>
          </div>
        </>
      )}
    </>
  )
}