// id="171:27011"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodePagination } from "@designSystem/ant/QodePagination"
import QodeSvgI171271321702636317024281 from "@designSystem/icon/svg/QodeSvgI171271321702636317024281"
import QodeSvgI171271581702636317024281 from "@designSystem/icon/svg/QodeSvgI171271581702636317024281"
import QodeSvgI171270341702636317024281 from "@designSystem/icon/svg/QodeSvgI171270341702636317024281"
import QodeSvgI1712709517024281 from "@designSystem/icon/svg/QodeSvgI1712709517024281"
import QodeSvgI171271901702636317024281 from "@designSystem/icon/svg/QodeSvgI171271901702636317024281"
import QodeSvgI171272201702636317024281 from "@designSystem/icon/svg/QodeSvgI171272201702636317024281"
import QodeSvgI1712722217024281 from "@designSystem/icon/svg/QodeSvgI1712722217024281"
import QodeSvgI171272631702636917024287 from "@designSystem/icon/svg/QodeSvgI171272631702636917024287"
import QodeSvgI171272761702636917024287 from "@designSystem/icon/svg/QodeSvgI171272761702636917024287"
import QodeSvgI171272871702636917024287 from "@designSystem/icon/svg/QodeSvgI171272871702636917024287"
import QodeSvgI1712728917024287 from "@designSystem/icon/svg/QodeSvgI1712728917024287"
import QodeSvgI171273021702636917024287 from "@designSystem/icon/svg/QodeSvgI171273021702636917024287"
import QodeSvgI171273141702636917024287 from "@designSystem/icon/svg/QodeSvgI171273141702636917024287"
import QodeSvgI1712731617024287 from "@designSystem/icon/svg/QodeSvgI1712731617024287"

export interface QodeCustom17127011Props {
  total?: string
  type?: "basic" | "jumper" | "more" | "changer" | "total" | "all"
  mini?: "false" | "true"
}

export const QodeCustom17127011: React.FC<
  QodeCustom17127011Props & { style?: CSSProperties }
> = ({ total = "Total 85 items", type = "basic", mini = "false", ...rest }) => {
  return (
    <>
      {/* name="Pagination" id="171:27011" type="COMPONENT_SET" */}
      {/* id="171:27010" */}
      {`${type}` === `basic` && `${mini}` === `false` && (
        <>
          {/* name="type=basic, mini=false" id="171:27010" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "272px",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
            }}
          >
            {/* name="🧬 left" id="171:27001" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "var(--line-height-lineheighheading3, 32px)",
                height: "var(--size-height-controlheight, 32px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              {/* name="chevron-left" id="I171:27001;171:26630" type="INSTANCE" */}
              <Icon.QodeChevronLeft
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </Flex>
            {/* name="pages" id="2747:12252" type="FRAME" */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flex: "1 0 0",
              }}
            >
              {/* name=".pagination__number" id="171:27024" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background: "var(--neutral-gray-100, #1d1d1d)",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`1`}</span>
              </Flex>
              {/* name="🧬 item 2" id="171:27003" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`2`}</span>
              </Flex>
              {/* name="🧬 item 3" id="171:27005" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`3`}</span>
              </Flex>
              {/* name="🧬 item 4" id="171:27007" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`4`}</span>
              </Flex>
              {/* name="🧬 item 5" id="171:27021" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`5`}</span>
              </Flex>
            </div>
            {/* name="🧬 right" id="171:27028" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "var(--line-height-lineheighheading3, 32px)",
                height: "var(--size-height-controlheight, 32px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              {/* name="chevron-right" id="I171:27028;171:26641" type="INSTANCE" */}
              <Icon.QodeChevronRight
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="171:27100" */}
      {`${type}` === `more` && `${mini}` === `false` && (
        <>
          {/* name="type=more, mini=false" id="171:27100" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "556px",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-padding, 16px)",
            }}
          >
            {/* name="Pagination Wrapper" id="171:27143" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flex: "1 0 0",
              }}
            >
              {/* name="🧬 left" id="171:27101" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                {/* name="chevron-left" id="I171:27101;171:26630" type="INSTANCE" */}
                <Icon.QodeChevronLeft
                  style={{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="pages" id="2747:12254" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name="🧬 item 1" id="171:27102" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`1`}</span>
                </Flex>
                {/* name="🧬 item 2" id="171:27117" type="INSTANCE" */}
                <QodePagination
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                  {...{ state: "default", direction: "left" }}
                />
                {/* name="🧬 item 3" id="171:27103" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`4`}</span>
                </Flex>
                {/* name="🧬 item 4" id="171:27104" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`5`}</span>
                </Flex>
                {/* name=".pagination__number" id="171:27105" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--neutral-gray-100, #1d1d1d)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "#FFF",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`6`}</span>
                </Flex>
                {/* name="🧬 item 6" id="171:27106" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`7`}</span>
                </Flex>
                {/* name="🧬 item 7" id="171:27123" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`8`}</span>
                </Flex>
                {/* name="🧬 item 8" id="171:27125" type="INSTANCE" */}
                <QodePagination
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                  {...{ state: "default", direction: "left" }}
                />
                {/* name="🧬 item 9" id="171:27129" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`50`}</span>
                </Flex>
              </div>
              {/* name="🧬 right" id="171:27107" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                {/* name="chevron-right" id="I171:27107;171:26641" type="INSTANCE" */}
                <Icon.QodeChevronRight
                  style={{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
            </div>
            {/* name="Jumper Wrapper" id="171:27131" type="FRAME" */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* name="🧬 select 1" id="171:27132" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "108px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="Input/Select" id="I171:27132;170:26363" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid rgba(0, 0, 0, 0.15)",
                    background: "#FFF",
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
                  >{`10 / page`}</span>
                  {/* name="Icon" id="I171:27132;170:26363;170:24281" type="INSTANCE" */}
                  <QodeSvgI171271321702636317024281
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                </Flex>
              </Flex>
            </div>
          </div>
        </>
      )}
      {/* id="171:27144" */}
      {`${type}` === `changer` && `${mini}` === `false` && (
        <>
          {/* name="type=changer, mini=false" id="171:27144" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "476px",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-padding, 16px)",
            }}
          >
            {/* name="Pagination Wrapper" id="171:27145" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flex: "1 0 0",
              }}
            >
              {/* name="🧬 left" id="171:27146" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                {/* name="chevron-left" id="I171:27146;171:26630" type="INSTANCE" */}
                <Icon.QodeChevronLeft
                  style={{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="pages" id="2747:12309" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name="🧬 item 1" id="171:27147" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`1`}</span>
                </Flex>
                {/* name="🧬 item 2" id="171:27149" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`2`}</span>
                </Flex>
                {/* name=".pagination__number" id="171:27151" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--neutral-gray-100, #1d1d1d)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "#FFF",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`3`}</span>
                </Flex>
                {/* name="🧬 item 4" id="171:27152" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`4`}</span>
                </Flex>
                {/* name="🧬 item 5" id="171:27153" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`5`}</span>
                </Flex>
                {/* name="🧬 item 6" id="171:27154" type="INSTANCE" */}
                <QodePagination
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                  {...{ state: "default", direction: "left" }}
                />
                {/* name="🧬 item 7" id="171:27155" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`50`}</span>
                </Flex>
              </div>
              {/* name="🧬 right" id="171:27156" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                {/* name="chevron-right" id="I171:27156;171:26641" type="INSTANCE" */}
                <Icon.QodeChevronRight
                  style={{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
            </div>
            {/* name="Jumper Wrapper" id="171:27157" type="FRAME" */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* name="🧬 select 1" id="171:27158" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "108px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="Input/Select" id="I171:27158;170:26363" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid rgba(0, 0, 0, 0.15)",
                    background: "#FFF",
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
                  >{`10 / page`}</span>
                  {/* name="Icon" id="I171:27158;170:26363;170:24281" type="INSTANCE" */}
                  <QodeSvgI171271581702636317024281
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                </Flex>
              </Flex>
            </div>
          </div>
        </>
      )}
      {/* id="171:27033" */}
      {`${type}` === `jumper` && `${mini}` === `false` && (
        <>
          {/* name="type=jumper, mini=false" id="171:27033" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "596px",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-padding, 16px)",
            }}
          >
            {/* name="Pagination Wrapper" id="171:27068" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                flex: "1 0 0",
              }}
            >
              {/* name="🧬 left" id="171:27069" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                {/* name="chevron-left" id="I171:27069;171:26630" type="INSTANCE" */}
                <Icon.QodeChevronLeft
                  style={{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="pages" id="2747:12253" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name=".pagination__number" id="171:27070" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--neutral-gray-100, #1d1d1d)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "#FFF",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`1`}</span>
                </Flex>
                {/* name="🧬 item 2" id="171:27071" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`2`}</span>
                </Flex>
                {/* name="🧬 item 3" id="171:27072" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`3`}</span>
                </Flex>
                {/* name="🧬 item 4" id="171:27073" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`4`}</span>
                </Flex>
                {/* name="🧬 item 5" id="171:27074" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`5`}</span>
                </Flex>
              </div>
              {/* name="🧬 right" id="171:27075" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                {/* name="chevron-right" id="I171:27075;171:26641" type="INSTANCE" */}
                <Icon.QodeChevronRight
                  style={{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
            </div>
            {/* name="Jumper Wrapper" id="171:27050" type="FRAME" */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* name="🧬 select 1" id="171:27034" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "108px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="Input/Select" id="I171:27034;170:26363" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid rgba(0, 0, 0, 0.15)",
                    background: "#FFF",
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
                  >{`10 / page`}</span>
                  {/* name="Icon" id="I171:27034;170:26363;170:24281" type="INSTANCE" */}
                  <QodeSvgI171270341702636317024281
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                </Flex>
              </Flex>
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
              >{`Go to`}</span>
              {/* name="🧬 select 2" id="171:27095" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "108px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid rgba(0, 0, 0, 0.15)",
                  background: "#FFF",
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
                >{`10 / page`}</span>
                {/* name="Icon" id="I171:27095;170:24281" type="INSTANCE" */}
                <QodeSvgI1712709517024281
                  style={{ width: "16px", height: "16px", flexShrink: "0" }}
                  {...{}}
                />
              </Flex>
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
              >{`Page`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="171:27178" */}
      {`${type}` === `total` && `${mini}` === `false` && (
        <>
          {/* name="type=total, mini=false" id="171:27178" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "499px",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-padding, 16px)",
            }}
          >
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
            >{`Total 85 items`}</span>
            {/* name="Pagination Wrapper" id="171:27179" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flex: "1 0 0",
              }}
            >
              {/* name="🧬 left" id="171:27180" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                {/* name="chevron-left" id="I171:27180;171:26630" type="INSTANCE" */}
                <Icon.QodeChevronLeft
                  style={{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="pages" id="2747:12310" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name=".pagination__number" id="171:27181" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--neutral-gray-100, #1d1d1d)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "#FFF",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`1`}</span>
                </Flex>
                {/* name="🧬 item 2" id="171:27182" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`2`}</span>
                </Flex>
                {/* name="🧬 item 3" id="171:27183" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`3`}</span>
                </Flex>
                {/* name="🧬 item 4" id="171:27184" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`4`}</span>
                </Flex>
                {/* name="🧬 item 5" id="171:27185" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`5`}</span>
                </Flex>
              </div>
              {/* name="🧬 right" id="171:27188" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                {/* name="chevron-right" id="I171:27188;171:26641" type="INSTANCE" */}
                <Icon.QodeChevronRight
                  style={{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
            </div>
            {/* name="Jumper Wrapper" id="171:27189" type="FRAME" */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* name="🧬 select 1" id="171:27190" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "108px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="Input/Select" id="I171:27190;170:26363" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid rgba(0, 0, 0, 0.15)",
                    background: "#FFF",
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
                  >{`20 / page`}</span>
                  {/* name="Icon" id="I171:27190;170:26363;170:24281" type="INSTANCE" */}
                  <QodeSvgI171271901702636317024281
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                </Flex>
              </Flex>
            </div>
          </div>
        </>
      )}
      {/* id="171:27210" */}
      {`${type}` === `all` && `${mini}` === `false` && (
        <>
          {/* name="type=all, mini=false" id="171:27210" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "699px",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-padding, 16px)",
            }}
          >
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
            >{`Total 85 items`}</span>
            {/* name="Pagination Wrapper" id="171:27211" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                flex: "1 0 0",
              }}
            >
              {/* name="🧬 left" id="171:27212" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                {/* name="chevron-left" id="I171:27212;171:26630" type="INSTANCE" */}
                <Icon.QodeChevronLeft
                  style={{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="pages" id="2747:12311" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name=".pagination__number" id="171:27213" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--neutral-gray-100, #1d1d1d)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "#FFF",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`1`}</span>
                </Flex>
                {/* name="🧬 item 2" id="171:27214" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`2`}</span>
                </Flex>
                {/* name="🧬 item 3" id="171:27215" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`3`}</span>
                </Flex>
                {/* name="🧬 item 4" id="171:27216" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`4`}</span>
                </Flex>
                {/* name="🧬 item 5" id="171:27217" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`5`}</span>
                </Flex>
              </div>
              {/* name="🧬 right" id="171:27218" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                {/* name="chevron-right" id="I171:27218;171:26641" type="INSTANCE" */}
                <Icon.QodeChevronRight
                  style={{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
            </div>
            {/* name="Jumper Wrapper" id="171:27219" type="FRAME" */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* name="🧬 select 1" id="171:27220" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "108px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="Input/Select" id="I171:27220;170:26363" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid rgba(0, 0, 0, 0.15)",
                    background: "#FFF",
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
                  >{`10 / page`}</span>
                  {/* name="Icon" id="I171:27220;170:26363;170:24281" type="INSTANCE" */}
                  <QodeSvgI171272201702636317024281
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                </Flex>
              </Flex>
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
              >{`Go to`}</span>
              {/* name="🧬 select 2" id="171:27222" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "108px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid rgba(0, 0, 0, 0.15)",
                  background: "#FFF",
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
                >{`10 / page`}</span>
                {/* name="Icon" id="I171:27222;170:24281" type="INSTANCE" */}
                <QodeSvgI1712722217024281
                  style={{ width: "16px", height: "16px", flexShrink: "0" }}
                  {...{}}
                />
              </Flex>
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
              >{`Page`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="171:27241" */}
      {`${type}` === `basic` && `${mini}` === `true` && (
        <>
          {/* name="type=basic, mini=true" id="171:27241" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "208px",
              height: "var(--size-height-controlheightsm, 24px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
              flexShrink: "0",
            }}
          >
            {/* name="🧬 left" id="171:27242" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              {/* name="chevron-left" id="I171:27242;171:26645" type="INSTANCE" */}
              <Icon.QodeChevronLeft
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </Flex>
            {/* name="pages" id="2747:12312" type="FRAME" */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flex: "1 0 0",
              }}
            >
              {/* name=".pagination__number" id="171:27243" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background: "var(--neutral-gray-100, #1d1d1d)",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`1`}</span>
              </Flex>
              {/* name="🧬 item 2" id="171:27244" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`2`}</span>
              </Flex>
              {/* name="🧬 item 3" id="171:27245" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`3`}</span>
              </Flex>
              {/* name="🧬 item 4" id="171:27246" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`4`}</span>
              </Flex>
              {/* name="🧬 item 5" id="171:27247" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`5`}</span>
              </Flex>
            </div>
            {/* name="🧬 right" id="171:27248" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              {/* name="chevron-right" id="I171:27248;171:26647" type="INSTANCE" */}
              <Icon.QodeChevronRight
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="171:27249" */}
      {`${type}` === `more` && `${mini}` === `true` && (
        <>
          {/* name="type=more, mini=true" id="171:27249" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "452px",
              height: "var(--size-height-controlheightsm, 24px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
            }}
          >
            {/* name="Pagination Wrapper" id="171:27250" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flex: "1 0 0",
              }}
            >
              {/* name="🧬 left" id="171:27251" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                {/* name="chevron-left" id="I171:27251;171:26645" type="INSTANCE" */}
                <Icon.QodeChevronLeft
                  style={{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="pages" id="2747:12314" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name="🧬 item 1" id="171:27252" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`1`}</span>
                </Flex>
                {/* name="🧬 item 2" id="171:27253" type="INSTANCE" */}
                <QodePagination
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                  {...{ state: "default", direction: "left" }}
                />
                {/* name="🧬 item 3" id="171:27254" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`4`}</span>
                </Flex>
                {/* name="🧬 item 4" id="171:27255" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`5`}</span>
                </Flex>
                {/* name=".pagination__number" id="171:27256" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--neutral-gray-100, #1d1d1d)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "#FFF",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`6`}</span>
                </Flex>
                {/* name="🧬 item 6" id="171:27257" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`7`}</span>
                </Flex>
                {/* name="🧬 item 7" id="171:27258" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`8`}</span>
                </Flex>
                {/* name="🧬 item 8" id="171:27259" type="INSTANCE" */}
                <QodePagination
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                  {...{ state: "default", direction: "left" }}
                />
                {/* name="🧬 item 9" id="171:27260" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`10`}</span>
                </Flex>
              </div>
              {/* name="🧬 right" id="171:27261" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                {/* name="chevron-right" id="I171:27261;171:26647" type="INSTANCE" */}
                <Icon.QodeChevronRight
                  style={{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
            </div>
            {/* name="Jumper Wrapper" id="171:27262" type="FRAME" */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* name="🧬 select 1" id="171:27263" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "108px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="Input/Select" id="I171:27263;170:26369" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid rgba(0, 0, 0, 0.15)",
                    background: "#FFF",
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
                  >{`10 / page`}</span>
                  {/* name="Icon" id="I171:27263;170:26369;170:24287" type="INSTANCE" */}
                  <QodeSvgI171272631702636917024287
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                </Flex>
              </Flex>
            </div>
          </div>
        </>
      )}
      {/* id="171:27264" */}
      {`${type}` === `changer` && `${mini}` === `true` && (
        <>
          {/* name="type=changer, mini=true" id="171:27264" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "388px",
              height: "var(--size-height-controlheightsm, 24px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
            }}
          >
            {/* name="Pagination Wrapper" id="171:27265" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flex: "1 0 0",
              }}
            >
              {/* name="🧬 left" id="171:27266" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                {/* name="chevron-left" id="I171:27266;171:26645" type="INSTANCE" */}
                <Icon.QodeChevronLeft
                  style={{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="pages" id="2747:12315" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name="🧬 item 1" id="171:27267" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`1`}</span>
                </Flex>
                {/* name="🧬 item 2" id="171:27268" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`2`}</span>
                </Flex>
                {/* name=".pagination__number" id="171:27269" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--neutral-gray-100, #1d1d1d)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "#FFF",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`3`}</span>
                </Flex>
                {/* name="🧬 item 4" id="171:27270" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`4`}</span>
                </Flex>
                {/* name="🧬 item 5" id="171:27271" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`5`}</span>
                </Flex>
                {/* name="🧬 item 6" id="171:27272" type="INSTANCE" */}
                <QodePagination
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                  {...{ state: "default", direction: "left" }}
                />
                {/* name="🧬 item 7" id="171:27273" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`10`}</span>
                </Flex>
              </div>
              {/* name="🧬 right" id="171:27274" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                {/* name="chevron-right" id="I171:27274;171:26647" type="INSTANCE" */}
                <Icon.QodeChevronRight
                  style={{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
            </div>
            {/* name="Jumper Wrapper" id="171:27275" type="FRAME" */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* name="🧬 select 1" id="171:27276" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "108px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="Input/Select" id="I171:27276;170:26369" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid rgba(0, 0, 0, 0.15)",
                    background: "#FFF",
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
                  >{`10 / page`}</span>
                  {/* name="Icon" id="I171:27276;170:26369;170:24287" type="INSTANCE" */}
                  <QodeSvgI171272761702636917024287
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                </Flex>
              </Flex>
            </div>
          </div>
        </>
      )}
      {/* id="171:27277" */}
      {`${type}` === `jumper` && `${mini}` === `true` && (
        <>
          {/* name="type=jumper, mini=true" id="171:27277" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "512px",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
            }}
          >
            {/* name="Pagination Wrapper" id="171:27278" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flex: "1 0 0",
              }}
            >
              {/* name="🧬 left" id="171:27279" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                {/* name="chevron-left" id="I171:27279;171:26645" type="INSTANCE" */}
                <Icon.QodeChevronLeft
                  style={{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="pages" id="2747:12313" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name=".pagination__number" id="171:27280" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--neutral-gray-100, #1d1d1d)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "#FFF",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`1`}</span>
                </Flex>
                {/* name="🧬 item 2" id="171:27281" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`2`}</span>
                </Flex>
                {/* name="🧬 item 3" id="171:27282" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`3`}</span>
                </Flex>
                {/* name="🧬 item 4" id="171:27283" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`4`}</span>
                </Flex>
                {/* name="🧬 item 5" id="171:27284" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`5`}</span>
                </Flex>
              </div>
              {/* name="🧬 right" id="171:27285" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                {/* name="chevron-right" id="I171:27285;171:26647" type="INSTANCE" */}
                <Icon.QodeChevronRight
                  style={{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
            </div>
            {/* name="Jumper Wrapper" id="171:27286" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
              }}
            >
              {/* name="🧬 select 1" id="171:27287" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "108px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="Input/Select" id="I171:27287;170:26369" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid rgba(0, 0, 0, 0.15)",
                    background: "#FFF",
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
                  >{`10 / page`}</span>
                  {/* name="Icon" id="I171:27287;170:26369;170:24287" type="INSTANCE" */}
                  <QodeSvgI171272871702636917024287
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                </Flex>
              </Flex>
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
              >{`Go to`}</span>
              {/* name="🧬 select 2" id="171:27289" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "108px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid rgba(0, 0, 0, 0.15)",
                  background: "#FFF",
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
                >{`10 / page`}</span>
                {/* name="Icon" id="I171:27289;170:24287" type="INSTANCE" */}
                <QodeSvgI1712728917024287
                  style={{ width: "16px", height: "16px", flexShrink: "0" }}
                  {...{}}
                />
              </Flex>
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
              >{`Page`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="171:27291" */}
      {`${type}` === `total` && `${mini}` === `true` && (
        <>
          {/* name="type=total, mini=true" id="171:27291" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "419px",
              height: "var(--size-height-controlheightsm, 24px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
            }}
          >
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
            >{`Total 85 items`}</span>
            {/* name="Pagination Wrapper" id="171:27293" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flex: "1 0 0",
              }}
            >
              {/* name="🧬 left" id="171:27294" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                {/* name="chevron-left" id="I171:27294;171:26645" type="INSTANCE" */}
                <Icon.QodeChevronLeft
                  style={{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="pages" id="2747:12316" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name=".pagination__number" id="171:27295" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--neutral-gray-100, #1d1d1d)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "#FFF",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`1`}</span>
                </Flex>
                {/* name="🧬 item 2" id="171:27296" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`2`}</span>
                </Flex>
                {/* name="🧬 item 3" id="171:27297" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`3`}</span>
                </Flex>
                {/* name="🧬 item 4" id="171:27298" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`4`}</span>
                </Flex>
                {/* name="🧬 item 5" id="171:27299" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`5`}</span>
                </Flex>
              </div>
              {/* name="🧬 right" id="171:27300" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                {/* name="chevron-right" id="I171:27300;171:26647" type="INSTANCE" */}
                <Icon.QodeChevronRight
                  style={{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
            </div>
            {/* name="Jumper Wrapper" id="171:27301" type="FRAME" */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* name="🧬 select 1" id="171:27302" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "108px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="Input/Select" id="I171:27302;170:26369" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid rgba(0, 0, 0, 0.15)",
                    background: "#FFF",
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
                  >{`20 / page`}</span>
                  {/* name="Icon" id="I171:27302;170:26369;170:24287" type="INSTANCE" */}
                  <QodeSvgI171273021702636917024287
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                </Flex>
              </Flex>
            </div>
          </div>
        </>
      )}
      {/* id="171:27303" */}
      {`${type}` === `all` && `${mini}` === `true` && (
        <>
          {/* name="type=all, mini=true" id="171:27303" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "607px",
              height: "var(--size-height-controlheightsm, 24px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
            }}
          >
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
            >{`Total 85 items`}</span>
            {/* name="Pagination Wrapper" id="171:27305" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flex: "1 0 0",
              }}
            >
              {/* name="🧬 left" id="171:27306" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                {/* name="chevron-left" id="I171:27306;171:26645" type="INSTANCE" */}
                <Icon.QodeChevronLeft
                  style={{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="pages" id="2747:12317" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name=".pagination__number" id="171:27307" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--neutral-gray-100, #1d1d1d)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "#FFF",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`1`}</span>
                </Flex>
                {/* name="🧬 item 2" id="171:27308" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`2`}</span>
                </Flex>
                {/* name="🧬 item 3" id="171:27309" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`3`}</span>
                </Flex>
                {/* name="🧬 item 4" id="171:27310" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`4`}</span>
                </Flex>
                {/* name="🧬 item 5" id="171:27311" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`5`}</span>
                </Flex>
              </div>
              {/* name="🧬 right" id="171:27312" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
              >
                {/* name="chevron-right" id="I171:27312;171:26647" type="INSTANCE" */}
                <Icon.QodeChevronRight
                  style={{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
            </div>
            {/* name="Jumper Wrapper" id="171:27313" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
              }}
            >
              {/* name="🧬 select 1" id="171:27314" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "108px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="Input/Select" id="I171:27314;170:26369" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid rgba(0, 0, 0, 0.15)",
                    background: "#FFF",
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
                  >{`10 / page`}</span>
                  {/* name="Icon" id="I171:27314;170:26369;170:24287" type="INSTANCE" */}
                  <QodeSvgI171273141702636917024287
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                </Flex>
              </Flex>
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
              >{`Go to`}</span>
              {/* name="🧬 select 2" id="171:27316" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "108px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid rgba(0, 0, 0, 0.15)",
                  background: "#FFF",
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
                >{`10 / page`}</span>
                {/* name="Icon" id="I171:27316;170:24287" type="INSTANCE" */}
                <QodeSvgI1712731617024287
                  style={{ width: "16px", height: "16px", flexShrink: "0" }}
                  {...{}}
                />
              </Flex>
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
              >{`Page`}</span>
            </div>
          </div>
        </>
      )}
    </>
  )
}
