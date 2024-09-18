// id="233:16645"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom63010804 } from "@designSystem/custom/QodeCustom63010804"

export interface QodeCustom23316645Props {
  size?: "md" | "lg"
}

export const QodeCustom23316645: React.FC<
  QodeCustom23316645Props & { style?: CSSProperties }
> = ({ size = "lg", style, ...rest }) => {
  return (
    <>
      {/* name="Modal/Header" id="233:16645" type="COMPONENT_SET" */}
      {/* id="233:16646" */}
      {`${size}` === `lg` && (
        <>
          {/* name="size=lg" id="233:16646" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                
                height: "52px",
                padding: "12px 20px",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "16px",
                flexShrink: "0",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              },
              ...style,
            }}
          >
            {/* name="Symbol" id="233:16648" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "24px",
                  height: "24px",
                  padding: "3px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-controlitembgactive, #eaeff8)",
                },
                ...{},
              }}
            >
              {/* name="icons" id="233:16649" type="INSTANCE" */}
              <QodeCustom63010804
                style={{
                  ...{
                    display: "flex",
                    padding: "1.5px 1.498px 1.5px 1.5px",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
            {/* name="content" id="233:16650" type="FRAME" */}
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
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-size-sizemd-20px, 20px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  },
                  ...{},
                }}
              >{`Modal header`}</span>
              <span
                style={{
                  ...{
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
                  },
                  ...{},
                }}
              >{`Accessibility`}</span>
            </div>
            {/* name="xmark" id="233:16653" type="INSTANCE" */}
            <Icon.QodeXmark
              style={{
                ...{ width: "24px", height: "24px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="233:16647" */}
      {`${size}` === `md` && (
        <>
          {/* name="size=md" id="233:16647" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                
                height: "42px",
                padding: "12px 20px",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "16px",
                flexShrink: "0",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              },
              ...style,
            }}
          >
            {/* name="Symbol" id="233:16654" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "24px",
                  height: "24px",
                  padding: "3px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-controlitembgactive, #eaeff8)",
                },
                ...{},
              }}
            >
              {/* name="icons" id="233:16655" type="INSTANCE" */}
              <QodeCustom63010804
                style={{
                  ...{
                    display: "flex",
                    padding: "1.5px 1.498px 1.5px 1.5px",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
            {/* name="content" id="233:16656" type="FRAME" */}
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
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-heading6, 16px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                  },
                  ...{},
                }}
              >{`Modal header`}</span>
              <span
                style={{
                  ...{
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
                  },
                  ...{},
                }}
              >{`Accessibility`}</span>
            </div>
            {/* name="xmark" id="233:16659" type="INSTANCE" */}
            <Icon.QodeXmark
              style={{
                ...{ width: "24px", height: "24px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
