// id="2940:1601"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom29401601Props {
  items?: "2" | "3" | "4" | "5" | "6"
  size?: "default" | "large" | "small"
  style?: "outlined" | "solid"
}

export const QodeCustom29401601: React.FC<
  QodeCustom29401601Props & { style?: CSSProperties }
> = ({ items = "2", size = "default", style = "outlined", ...rest }) => {
  return (
    <>
      {/* name="Radio Group__buttonGreen" id="2940:1601" type="COMPONENT_SET" */}
      {/* id="2940:1602" */}
      {`${items}` === `2` &&
        `${size}` === `default` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=2, size=default, style=outlined" id="2940:1602" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1603" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--color-success-colorsuccesstext, #11a620)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1604" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1605" */}
      {`${items}` === `3` &&
        `${size}` === `default` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=3, size=default, style=outlined" id="2940:1605" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1606" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--color-success-colorsuccesstext, #11a620)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1607" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1608" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1609" */}
      {`${items}` === `4` &&
        `${size}` === `default` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=4, size=default, style=outlined" id="2940:1609" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1610" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--color-success-colorsuccesstext, #11a620)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1611" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1612" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1613" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1614" */}
      {`${items}` === `5` &&
        `${size}` === `default` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=5, size=default, style=outlined" id="2940:1614" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1615" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--color-success-colorsuccesstext, #11a620)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1616" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1617" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1618" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1619" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1620" */}
      {`${items}` === `6` &&
        `${size}` === `default` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=6, size=default, style=outlined" id="2940:1620" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1621" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--color-success-colorsuccesstext, #11a620)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1622" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1623" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1624" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1625" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1626" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1627" */}
      {`${items}` === `2` &&
        `${size}` === `large` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=2, size=large, style=outlined" id="2940:1627" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1628" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--color-success-colorsuccesstext, #11a620)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1629" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1630" */}
      {`${items}` === `3` &&
        `${size}` === `large` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=3, size=large, style=outlined" id="2940:1630" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1631" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--color-success-colorsuccesstext, #11a620)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1632" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1633" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1634" */}
      {`${items}` === `4` &&
        `${size}` === `large` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=4, size=large, style=outlined" id="2940:1634" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1635" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--color-success-colorsuccesstext, #11a620)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1636" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1637" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1638" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1639" */}
      {`${items}` === `5` &&
        `${size}` === `large` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=5, size=large, style=outlined" id="2940:1639" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1640" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--color-success-colorsuccesstext, #11a620)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1641" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1642" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1643" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1644" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1645" */}
      {`${items}` === `6` &&
        `${size}` === `large` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=6, size=large, style=outlined" id="2940:1645" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1646" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--color-success-colorsuccesstext, #11a620)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1647" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1648" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1649" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1650" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1651" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1652" */}
      {`${items}` === `2` &&
        `${size}` === `small` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=2, size=small, style=outlined" id="2940:1652" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1653" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--color-success-colorsuccesstext, #11a620)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1654" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1655" */}
      {`${items}` === `3` &&
        `${size}` === `small` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=3, size=small, style=outlined" id="2940:1655" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1656" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--color-success-colorsuccesstext, #11a620)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1657" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1658" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1659" */}
      {`${items}` === `4` &&
        `${size}` === `small` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=4, size=small, style=outlined" id="2940:1659" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1660" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--color-success-colorsuccesstext, #11a620)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1661" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1662" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1663" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1664" */}
      {`${items}` === `5` &&
        `${size}` === `small` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=5, size=small, style=outlined" id="2940:1664" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1665" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--color-success-colorsuccesstext, #11a620)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1666" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1667" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1668" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1669" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1670" */}
      {`${items}` === `6` &&
        `${size}` === `small` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=6, size=small, style=outlined" id="2940:1670" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1671" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--color-success-colorsuccesstext, #11a620)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1672" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1673" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1674" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1675" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1676" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1677" */}
      {`${items}` === `2` &&
        `${size}` === `default` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=2, size=default, style=solid" id="2940:1677" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1678" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--color-success-colorsuccess, #11a620)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-white, #fff)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1679" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1680" */}
      {`${items}` === `3` &&
        `${size}` === `default` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=3, size=default, style=solid" id="2940:1680" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1681" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--color-success-colorsuccess, #11a620)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-white, #fff)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1682" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1683" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1684" */}
      {`${items}` === `4` &&
        `${size}` === `default` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=4, size=default, style=solid" id="2940:1684" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1685" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--color-success-colorsuccess, #11a620)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-white, #fff)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1686" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1687" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1688" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1689" */}
      {`${items}` === `5` &&
        `${size}` === `default` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=5, size=default, style=solid" id="2940:1689" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1690" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--color-success-colorsuccess, #11a620)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-white, #fff)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1691" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1692" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1693" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1694" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1695" */}
      {`${items}` === `6` &&
        `${size}` === `default` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=6, size=default, style=solid" id="2940:1695" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1696" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--color-success-colorsuccess, #11a620)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-white, #fff)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1697" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1698" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1699" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1700" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1701" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1702" */}
      {`${items}` === `2` &&
        `${size}` === `large` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=2, size=large, style=solid" id="2940:1702" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1703" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--color-success-colorsuccess, #11a620)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-white, #fff)",
                    fontFamily: '"SF Pro Display"',
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1704" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1705" */}
      {`${items}` === `3` &&
        `${size}` === `large` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=3, size=large, style=solid" id="2940:1705" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1706" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--color-success-colorsuccess, #11a620)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-white, #fff)",
                    fontFamily: '"SF Pro Display"',
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1707" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1708" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1709" */}
      {`${items}` === `4` &&
        `${size}` === `large` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=4, size=large, style=solid" id="2940:1709" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1710" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--color-success-colorsuccess, #11a620)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-white, #fff)",
                    fontFamily: '"SF Pro Display"',
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1711" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1712" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1713" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1714" */}
      {`${items}` === `5` &&
        `${size}` === `large` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=5, size=large, style=solid" id="2940:1714" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1715" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--color-success-colorsuccess, #11a620)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-white, #fff)",
                    fontFamily: '"SF Pro Display"',
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1716" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1717" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1718" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1719" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1720" */}
      {`${items}` === `6` &&
        `${size}` === `large` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=6, size=large, style=solid" id="2940:1720" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1721" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--color-success-colorsuccess, #11a620)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-white, #fff)",
                    fontFamily: '"SF Pro Display"',
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1722" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1723" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1724" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1725" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1726" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1727" */}
      {`${items}` === `2` &&
        `${size}` === `small` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=2, size=small, style=solid" id="2940:1727" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1728" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--color-success-colorsuccess, #11a620)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-white, #fff)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1729" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1730" */}
      {`${items}` === `3` &&
        `${size}` === `small` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=3, size=small, style=solid" id="2940:1730" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1731" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--color-success-colorsuccess, #11a620)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-white, #fff)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1732" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1733" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1734" */}
      {`${items}` === `4` &&
        `${size}` === `small` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=4, size=small, style=solid" id="2940:1734" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1735" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--color-success-colorsuccess, #11a620)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-white, #fff)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1736" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1737" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1738" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1739" */}
      {`${items}` === `5` &&
        `${size}` === `small` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=5, size=small, style=solid" id="2940:1739" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1740" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--color-success-colorsuccess, #11a620)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-white, #fff)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1741" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1742" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1743" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1744" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2940:1745" */}
      {`${items}` === `6` &&
        `${size}` === `small` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=6, size=small, style=solid" id="2940:1745" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="2940:1746" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-success-colorsuccess, #11a620)",
                  background: "var(--color-success-colorsuccess, #11a620)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-white, #fff)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1747" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1748" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1749" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1750" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
              {/* name=".radioButton__item" id="2940:1751" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Radio`}</span>
              </Flex>
            </div>
          </>
        )}
    </>
  )
}
