// id="531:35983"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom53135983Props {
  icon?: React.ReactNode
  showIcon?: boolean
  title?: string
  size?: "default" | "large" | "small"
  position?: "bottom" | "left" | "right" | "top"
  state?: "active" | "default" | "disabled"
}

export const QodeCustom53135983: React.FC<
  QodeCustom53135983Props & { style?: CSSProperties }
> = ({
  icon = undefined,
  showIcon = true,
  title = "Tab title",
  size = "default",
  position = "top",
  state = "active",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name=".tab__item" id="531:35983" type="COMPONENT_SET" */}
      {/* id="531:35984" */}
      {`${size}` === `default` &&
        `${position}` === `top` &&
        `${state}` === `active` && (
          <>
            {/* name="size=default, position=top, state=active" id="531:35984" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding: "12px 0px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderBottom:
                    "2px solid var(--border-border-primary-20, #158de2)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36020" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:35985" */}
      {`${size}` === `large` &&
        `${position}` === `top` &&
        `${state}` === `active` && (
          <>
            {/* name="size=large, position=top, state=active" id="531:35985" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding: "16px 0px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderBottom:
                    "2px solid var(--border-border-primary-20, #158de2)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36022" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:35986" */}
      {`${size}` === `small` &&
        `${position}` === `top` &&
        `${state}` === `active` && (
          <>
            {/* name="size=small, position=top, state=active" id="531:35986" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding: "8px 0px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderBottom:
                    "2px solid var(--border-border-primary-20, #158de2)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36024" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:35987" */}
      {`${size}` === `default` &&
        `${position}` === `top` &&
        `${state}` === `default` && (
          <>
            {/* name="size=default, position=top, state=default" id="531:35987" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding: "12px 0px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36026" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:35988" */}
      {`${size}` === `large` &&
        `${position}` === `top` &&
        `${state}` === `default` && (
          <>
            {/* name="size=large, position=top, state=default" id="531:35988" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding: "16px 0px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36028" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:35989" */}
      {`${size}` === `small` &&
        `${position}` === `top` &&
        `${state}` === `default` && (
          <>
            {/* name="size=small, position=top, state=default" id="531:35989" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding: "8px 0px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36030" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:35990" */}
      {`${size}` === `default` &&
        `${position}` === `top` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=default, position=top, state=disabled" id="531:35990" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36032" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-placeholder, #a7a7a7)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:35991" */}
      {`${size}` === `large` &&
        `${position}` === `top` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=large, position=top, state=disabled" id="531:35991" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding: "var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36034" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-placeholder, #a7a7a7)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:35992" */}
      {`${size}` === `small` &&
        `${position}` === `top` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=small, position=top, state=disabled" id="531:35992" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36036" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-placeholder, #a7a7a7)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:35993" */}
      {`${size}` === `default` &&
        `${position}` === `bottom` &&
        `${state}` === `active` && (
          <>
            {/* name="size=default, position=bottom, state=active" id="531:35993" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderTop:
                    "2px solid var(--border-border-primary-20, #158de2)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36038" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:35994" */}
      {`${size}` === `large` &&
        `${position}` === `bottom` &&
        `${state}` === `active` && (
          <>
            {/* name="size=large, position=bottom, state=active" id="531:35994" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding: "var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderTop:
                    "2px solid var(--border-border-primary-20, #158de2)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36040" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:35995" */}
      {`${size}` === `small` &&
        `${position}` === `bottom` &&
        `${state}` === `active` && (
          <>
            {/* name="size=small, position=bottom, state=active" id="531:35995" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderTop:
                    "2px solid var(--border-border-primary-20, #158de2)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36042" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:35996" */}
      {`${size}` === `default` &&
        `${position}` === `bottom` &&
        `${state}` === `default` && (
          <>
            {/* name="size=default, position=bottom, state=default" id="531:35996" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36044" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:35997" */}
      {`${size}` === `large` &&
        `${position}` === `bottom` &&
        `${state}` === `default` && (
          <>
            {/* name="size=large, position=bottom, state=default" id="531:35997" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding: "var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36046" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:35998" */}
      {`${size}` === `small` &&
        `${position}` === `bottom` &&
        `${state}` === `default` && (
          <>
            {/* name="size=small, position=bottom, state=default" id="531:35998" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36048" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:35999" */}
      {`${size}` === `default` &&
        `${position}` === `bottom` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=default, position=bottom, state=disabled" id="531:35999" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36050" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-placeholder, #a7a7a7)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:36000" */}
      {`${size}` === `large` &&
        `${position}` === `bottom` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=large, position=bottom, state=disabled" id="531:36000" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding: "var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36052" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-placeholder, #a7a7a7)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:36001" */}
      {`${size}` === `small` &&
        `${position}` === `bottom` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=small, position=bottom, state=disabled" id="531:36001" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36054" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-placeholder, #a7a7a7)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:36002" */}
      {`${size}` === `default` &&
        `${position}` === `left` &&
        `${state}` === `active` && (
          <>
            {/* name="size=default, position=left, state=active" id="531:36002" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRight:
                    "2px solid var(--border-border-primary-20, #158de2)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36056" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "right",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:36003" */}
      {`${size}` === `large` &&
        `${position}` === `left` &&
        `${state}` === `active` && (
          <>
            {/* name="size=large, position=left, state=active" id="531:36003" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRight:
                    "2px solid var(--border-border-primary-20, #158de2)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36058" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "right",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:36004" */}
      {`${size}` === `small` &&
        `${position}` === `left` &&
        `${state}` === `active` && (
          <>
            {/* name="size=small, position=left, state=active" id="531:36004" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRight:
                    "2px solid var(--border-border-primary-20, #158de2)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36060" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "right",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:36005" */}
      {`${size}` === `default` &&
        `${position}` === `left` &&
        `${state}` === `default` && (
          <>
            {/* name="size=default, position=left, state=default" id="531:36005" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36062" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-40, #464646)",
                    textAlign: "right",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:36006" */}
      {`${size}` === `large` &&
        `${position}` === `left` &&
        `${state}` === `default` && (
          <>
            {/* name="size=large, position=left, state=default" id="531:36006" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36064" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-40, #464646)",
                    textAlign: "right",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:36007" */}
      {`${size}` === `small` &&
        `${position}` === `left` &&
        `${state}` === `default` && (
          <>
            {/* name="size=small, position=left, state=default" id="531:36007" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36066" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-40, #464646)",
                    textAlign: "right",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:36008" */}
      {`${size}` === `default` &&
        `${position}` === `left` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=default, position=left, state=disabled" id="531:36008" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36068" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-placeholder, #a7a7a7)",
                    textAlign: "right",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:36009" */}
      {`${size}` === `large` &&
        `${position}` === `left` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=large, position=left, state=disabled" id="531:36009" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36070" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-placeholder, #a7a7a7)",
                    textAlign: "right",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:36010" */}
      {`${size}` === `small` &&
        `${position}` === `left` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=small, position=left, state=disabled" id="531:36010" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36072" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-placeholder, #a7a7a7)",
                    textAlign: "right",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:36011" */}
      {`${size}` === `default` &&
        `${position}` === `right` &&
        `${state}` === `active` && (
          <>
            {/* name="size=default, position=right, state=active" id="531:36011" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderLeft:
                    "2px solid var(--border-border-primary-20, #158de2)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36074" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:36012" */}
      {`${size}` === `large` &&
        `${position}` === `right` &&
        `${state}` === `active` && (
          <>
            {/* name="size=large, position=right, state=active" id="531:36012" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderLeft:
                    "2px solid var(--border-border-primary-20, #158de2)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36076" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:36013" */}
      {`${size}` === `small` &&
        `${position}` === `right` &&
        `${state}` === `active` && (
          <>
            {/* name="size=small, position=right, state=active" id="531:36013" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderLeft:
                    "2px solid var(--border-border-primary-20, #158de2)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36078" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:36014" */}
      {`${size}` === `default` &&
        `${position}` === `right` &&
        `${state}` === `default` && (
          <>
            {/* name="size=default, position=right, state=default" id="531:36014" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36080" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:36015" */}
      {`${size}` === `large` &&
        `${position}` === `right` &&
        `${state}` === `default` && (
          <>
            {/* name="size=large, position=right, state=default" id="531:36015" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36082" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:36016" */}
      {`${size}` === `small` &&
        `${position}` === `right` &&
        `${state}` === `default` && (
          <>
            {/* name="size=small, position=right, state=default" id="531:36016" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36084" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:36017" */}
      {`${size}` === `default` &&
        `${position}` === `right` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=default, position=right, state=disabled" id="531:36017" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36086" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-placeholder, #a7a7a7)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:36018" */}
      {`${size}` === `large` &&
        `${position}` === `right` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=large, position=right, state=disabled" id="531:36018" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36088" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-placeholder, #a7a7a7)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="531:36019" */}
      {`${size}` === `small` &&
        `${position}` === `right` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=small, position=right, state=disabled" id="531:36019" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...style,
              }}
            >
              {/* name="🎰 icon" id="531:36090" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-placeholder, #a7a7a7)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
    </>
  )
}
