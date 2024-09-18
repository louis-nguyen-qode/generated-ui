// id="296:15477"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom29615477Props {
  icon?: React.ReactNode
  showIcon?: boolean
  title?: string
  size?: "default" | "large" | "small"
  position?: "bottom" | "left" | "right" | "top"
  state?: "active" | "default" | "disabled"
}

export const QodeCustom29615477: React.FC<
  QodeCustom29615477Props & { style?: CSSProperties }
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
      {/* name=".tab__item" id="296:15477" type="COMPONENT_SET" */}
      {/* id="296:15476" */}
      {`${size}` === `default` &&
        `${position}` === `top` &&
        `${state}` === `active` && (
          <>
            {/* name="size=default, position=top, state=active" id="296:15476" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15484" type="INSTANCE" */}
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
      {/* id="296:15480" */}
      {`${size}` === `large` &&
        `${position}` === `top` &&
        `${state}` === `active` && (
          <>
            {/* name="size=large, position=top, state=active" id="296:15480" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15486" type="INSTANCE" */}
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
      {/* id="296:15482" */}
      {`${size}` === `small` &&
        `${position}` === `top` &&
        `${state}` === `active` && (
          <>
            {/* name="size=small, position=top, state=active" id="296:15482" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15488" type="INSTANCE" */}
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
      {/* id="296:15490" */}
      {`${size}` === `default` &&
        `${position}` === `top` &&
        `${state}` === `default` && (
          <>
            {/* name="size=default, position=top, state=default" id="296:15490" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15491" type="INSTANCE" */}
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
      {/* id="296:15493" */}
      {`${size}` === `large` &&
        `${position}` === `top` &&
        `${state}` === `default` && (
          <>
            {/* name="size=large, position=top, state=default" id="296:15493" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15494" type="INSTANCE" */}
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
      {/* id="296:15496" */}
      {`${size}` === `small` &&
        `${position}` === `top` &&
        `${state}` === `default` && (
          <>
            {/* name="size=small, position=top, state=default" id="296:15496" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15497" type="INSTANCE" */}
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
      {/* id="296:15502" */}
      {`${size}` === `default` &&
        `${position}` === `top` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=default, position=top, state=disabled" id="296:15502" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15503" type="INSTANCE" */}
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
      {/* id="296:15505" */}
      {`${size}` === `large` &&
        `${position}` === `top` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=large, position=top, state=disabled" id="296:15505" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15506" type="INSTANCE" */}
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
      {/* id="296:15508" */}
      {`${size}` === `small` &&
        `${position}` === `top` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=small, position=top, state=disabled" id="296:15508" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15509" type="INSTANCE" */}
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
      {/* id="296:15514" */}
      {`${size}` === `default` &&
        `${position}` === `bottom` &&
        `${state}` === `active` && (
          <>
            {/* name="size=default, position=bottom, state=active" id="296:15514" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15515" type="INSTANCE" */}
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
      {/* id="296:15517" */}
      {`${size}` === `large` &&
        `${position}` === `bottom` &&
        `${state}` === `active` && (
          <>
            {/* name="size=large, position=bottom, state=active" id="296:15517" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15518" type="INSTANCE" */}
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
      {/* id="296:15520" */}
      {`${size}` === `small` &&
        `${position}` === `bottom` &&
        `${state}` === `active` && (
          <>
            {/* name="size=small, position=bottom, state=active" id="296:15520" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15521" type="INSTANCE" */}
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
      {/* id="296:15523" */}
      {`${size}` === `default` &&
        `${position}` === `bottom` &&
        `${state}` === `default` && (
          <>
            {/* name="size=default, position=bottom, state=default" id="296:15523" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15524" type="INSTANCE" */}
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
      {/* id="296:15526" */}
      {`${size}` === `large` &&
        `${position}` === `bottom` &&
        `${state}` === `default` && (
          <>
            {/* name="size=large, position=bottom, state=default" id="296:15526" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15527" type="INSTANCE" */}
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
      {/* id="296:15529" */}
      {`${size}` === `small` &&
        `${position}` === `bottom` &&
        `${state}` === `default` && (
          <>
            {/* name="size=small, position=bottom, state=default" id="296:15529" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15530" type="INSTANCE" */}
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
      {/* id="296:15532" */}
      {`${size}` === `default` &&
        `${position}` === `bottom` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=default, position=bottom, state=disabled" id="296:15532" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15533" type="INSTANCE" */}
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
      {/* id="296:15535" */}
      {`${size}` === `large` &&
        `${position}` === `bottom` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=large, position=bottom, state=disabled" id="296:15535" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15536" type="INSTANCE" */}
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
      {/* id="296:15538" */}
      {`${size}` === `small` &&
        `${position}` === `bottom` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=small, position=bottom, state=disabled" id="296:15538" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15539" type="INSTANCE" */}
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
      {/* id="296:15550" */}
      {`${size}` === `default` &&
        `${position}` === `left` &&
        `${state}` === `active` && (
          <>
            {/* name="size=default, position=left, state=active" id="296:15550" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15551" type="INSTANCE" */}
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
      {/* id="296:15553" */}
      {`${size}` === `large` &&
        `${position}` === `left` &&
        `${state}` === `active` && (
          <>
            {/* name="size=large, position=left, state=active" id="296:15553" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15554" type="INSTANCE" */}
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
      {/* id="296:15556" */}
      {`${size}` === `small` &&
        `${position}` === `left` &&
        `${state}` === `active` && (
          <>
            {/* name="size=small, position=left, state=active" id="296:15556" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15557" type="INSTANCE" */}
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
      {/* id="296:15559" */}
      {`${size}` === `default` &&
        `${position}` === `left` &&
        `${state}` === `default` && (
          <>
            {/* name="size=default, position=left, state=default" id="296:15559" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15560" type="INSTANCE" */}
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
      {/* id="296:15562" */}
      {`${size}` === `large` &&
        `${position}` === `left` &&
        `${state}` === `default` && (
          <>
            {/* name="size=large, position=left, state=default" id="296:15562" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15563" type="INSTANCE" */}
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
      {/* id="296:15565" */}
      {`${size}` === `small` &&
        `${position}` === `left` &&
        `${state}` === `default` && (
          <>
            {/* name="size=small, position=left, state=default" id="296:15565" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15566" type="INSTANCE" */}
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
      {/* id="296:15568" */}
      {`${size}` === `default` &&
        `${position}` === `left` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=default, position=left, state=disabled" id="296:15568" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15569" type="INSTANCE" */}
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
      {/* id="296:15571" */}
      {`${size}` === `large` &&
        `${position}` === `left` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=large, position=left, state=disabled" id="296:15571" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15572" type="INSTANCE" */}
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
      {/* id="296:15574" */}
      {`${size}` === `small` &&
        `${position}` === `left` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=small, position=left, state=disabled" id="296:15574" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15575" type="INSTANCE" */}
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
      {/* id="296:15586" */}
      {`${size}` === `default` &&
        `${position}` === `right` &&
        `${state}` === `active` && (
          <>
            {/* name="size=default, position=right, state=active" id="296:15586" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15587" type="INSTANCE" */}
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
      {/* id="296:15589" */}
      {`${size}` === `large` &&
        `${position}` === `right` &&
        `${state}` === `active` && (
          <>
            {/* name="size=large, position=right, state=active" id="296:15589" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15590" type="INSTANCE" */}
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
      {/* id="296:15592" */}
      {`${size}` === `small` &&
        `${position}` === `right` &&
        `${state}` === `active` && (
          <>
            {/* name="size=small, position=right, state=active" id="296:15592" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15593" type="INSTANCE" */}
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
      {/* id="296:15595" */}
      {`${size}` === `default` &&
        `${position}` === `right` &&
        `${state}` === `default` && (
          <>
            {/* name="size=default, position=right, state=default" id="296:15595" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15596" type="INSTANCE" */}
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
      {/* id="296:15598" */}
      {`${size}` === `large` &&
        `${position}` === `right` &&
        `${state}` === `default` && (
          <>
            {/* name="size=large, position=right, state=default" id="296:15598" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15599" type="INSTANCE" */}
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
      {/* id="296:15601" */}
      {`${size}` === `small` &&
        `${position}` === `right` &&
        `${state}` === `default` && (
          <>
            {/* name="size=small, position=right, state=default" id="296:15601" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15602" type="INSTANCE" */}
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
      {/* id="296:15604" */}
      {`${size}` === `default` &&
        `${position}` === `right` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=default, position=right, state=disabled" id="296:15604" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15605" type="INSTANCE" */}
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
      {/* id="296:15607" */}
      {`${size}` === `large` &&
        `${position}` === `right` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=large, position=right, state=disabled" id="296:15607" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15608" type="INSTANCE" */}
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
      {/* id="296:15610" */}
      {`${size}` === `small` &&
        `${position}` === `right` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=small, position=right, state=disabled" id="296:15610" type="COMPONENT" */}
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
              {/* name="🎰 icon" id="296:15611" type="INSTANCE" */}
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
