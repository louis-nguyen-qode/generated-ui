// id="328:28476"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom32828476Props {
  rIcon?: React.ReactNode
  showRIcon?: boolean
  color?:
    | "primary"
    | "neutral"
    | "magenta"
    | "golden purple"
    | "cyan"
    | "polar green"
    | "lime"
    | "calendula gold"
  state?: "default" | "hover"
  size?: "Default" | "rouned" | "small"
  rounded?: "False" | "True"
}

export const QodeCustom32828476: React.FC<
  QodeCustom32828476Props & { style?: CSSProperties }
> = ({
  rIcon = undefined,
  showRIcon = true,
  color = "magenta",
  state = "default",
  size = "Default",
  rounded = "False",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Tag" id="328:28476" type="COMPONENT_SET" */}
      {/* id="328:28477" */}
      {`${color}` === `magenta` &&
        `${state}` === `default` &&
        `${size}` === `Default` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=magenta, state=default, size=Default, rounded=False" id="328:28477" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--magenta-magenta-30, #ff85c0)",
                  background: "var(--magenta-magenta-5, #fff0f6)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="xmark" id="328:28510" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:28478" */}
      {`${color}` === `magenta` &&
        `${state}` === `default` &&
        `${size}` === `small` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=magenta, state=default, size=small, rounded=False" id="328:28478" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--magenta-magenta-30, #ff85c0)",
                  background: "var(--magenta-magenta-5, #fff0f6)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
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
              >{`Tag`}</span>
            </div>
          </>
        )}
      {/* id="328:28479" */}
      {`${color}` === `magenta` &&
        `${state}` === `default` &&
        `${size}` === `rouned` &&
        `${rounded}` === `True` && (
          <>
            {/* name="color=magenta, state=default, size=rouned, rounded=True" id="328:28479" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--magenta-magenta-30, #ff85c0)",
                  background: "var(--magenta-magenta-5, #fff0f6)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
            </div>
          </>
        )}
      {/* id="328:28480" */}
      {`${color}` === `magenta` &&
        `${state}` === `hover` &&
        `${size}` === `Default` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=magenta, state=hover, size=Default, rounded=False" id="328:28480" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                  background: "var(--magenta-magenta-5, #fff0f6)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="xmark" id="328:28514" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:28481" */}
      {`${color}` === `golden purple` &&
        `${state}` === `default` &&
        `${size}` === `Default` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=golden purple, state=default, size=Default, rounded=False" id="328:28481" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--purple-purple-30, #b37feb)",
                  background: "var(--purple-purple-5, #f9f0ff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="xmark" id="328:28516" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:28482" */}
      {`${color}` === `golden purple` &&
        `${state}` === `default` &&
        `${size}` === `small` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=golden purple, state=default, size=small, rounded=False" id="328:28482" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--purple-purple-30, #b37feb)",
                  background: "var(--purple-purple-5, #f9f0ff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
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
              >{`Tag`}</span>
            </div>
          </>
        )}
      {/* id="328:28483" */}
      {`${color}` === `golden purple` &&
        `${state}` === `default` &&
        `${size}` === `rouned` &&
        `${rounded}` === `True` && (
          <>
            {/* name="color=golden purple, state=default, size=rouned, rounded=True" id="328:28483" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--purple-purple-30, #b37feb)",
                  background: "var(--purple-purple-5, #f9f0ff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
            </div>
          </>
        )}
      {/* id="328:28484" */}
      {`${color}` === `golden purple` &&
        `${state}` === `hover` &&
        `${size}` === `Default` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=golden purple, state=hover, size=Default, rounded=False" id="328:28484" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                  background: "var(--purple-purple-5, #f9f0ff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="xmark" id="328:28520" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:28485" */}
      {`${color}` === `primary` &&
        `${state}` === `default` &&
        `${size}` === `Default` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=primary, state=default, size=Default, rounded=False" id="328:28485" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                  background: "var(--primary-primary-10, #d6eeff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="xmark" id="328:28522" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:28486" */}
      {`${color}` === `primary` &&
        `${state}` === `default` &&
        `${size}` === `small` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=primary, state=default, size=small, rounded=False" id="328:28486" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                  background: "var(--primary-primary-10, #d6eeff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
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
              >{`Tag`}</span>
            </div>
          </>
        )}
      {/* id="328:28487" */}
      {`${color}` === `primary` &&
        `${state}` === `default` &&
        `${size}` === `rouned` &&
        `${rounded}` === `True` && (
          <>
            {/* name="color=primary, state=default, size=rouned, rounded=True" id="328:28487" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                  background: "var(--primary-primary-10, #d6eeff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
            </div>
          </>
        )}
      {/* id="328:28488" */}
      {`${color}` === `primary` &&
        `${state}` === `hover` &&
        `${size}` === `Default` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=primary, state=hover, size=Default, rounded=False" id="328:28488" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                  background: "var(--primary-primary-10, #d6eeff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="xmark" id="328:28526" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:28489" */}
      {`${color}` === `cyan` &&
        `${state}` === `default` &&
        `${size}` === `Default` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=cyan, state=default, size=Default, rounded=False" id="328:28489" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--cyan-cyan-30, #5feaf5)",
                  background: "var(--cyan-cyan-5, #f0feff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="xmark" id="328:28528" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:28490" */}
      {`${color}` === `cyan` &&
        `${state}` === `default` &&
        `${size}` === `small` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=cyan, state=default, size=small, rounded=False" id="328:28490" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--cyan-cyan-30, #5feaf5)",
                  background: "var(--cyan-cyan-5, #f0feff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
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
              >{`Tag`}</span>
            </div>
          </>
        )}
      {/* id="328:28491" */}
      {`${color}` === `cyan` &&
        `${state}` === `default` &&
        `${size}` === `rouned` &&
        `${rounded}` === `True` && (
          <>
            {/* name="color=cyan, state=default, size=rouned, rounded=True" id="328:28491" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--cyan-cyan-30, #5feaf5)",
                  background: "var(--cyan-cyan-5, #f0feff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
            </div>
          </>
        )}
      {/* id="328:28492" */}
      {`${color}` === `cyan` &&
        `${state}` === `hover` &&
        `${size}` === `Default` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=cyan, state=hover, size=Default, rounded=False" id="328:28492" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                  background: "var(--cyan-cyan-5, #f0feff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="xmark" id="328:28532" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:28493" */}
      {`${color}` === `polar green` &&
        `${state}` === `default` &&
        `${size}` === `Default` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=polar green, state=default, size=Default, rounded=False" id="328:28493" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--green-green-30, #2fe541)",
                  background: "var(--green-green-5, #eefff0)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="xmark" id="328:28534" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:28494" */}
      {`${color}` === `polar green` &&
        `${state}` === `default` &&
        `${size}` === `small` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=polar green, state=default, size=small, rounded=False" id="328:28494" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--green-green-30, #2fe541)",
                  background: "var(--green-green-5, #eefff0)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
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
              >{`Tag`}</span>
            </div>
          </>
        )}
      {/* id="328:28495" */}
      {`${color}` === `polar green` &&
        `${state}` === `default` &&
        `${size}` === `rouned` &&
        `${rounded}` === `True` && (
          <>
            {/* name="color=polar green, state=default, size=rouned, rounded=True" id="328:28495" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--green-green-30, #2fe541)",
                  background: "var(--green-green-5, #eefff0)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
            </div>
          </>
        )}
      {/* id="328:28496" */}
      {`${color}` === `polar green` &&
        `${state}` === `hover` &&
        `${size}` === `Default` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=polar green, state=hover, size=Default, rounded=False" id="328:28496" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                  background: "var(--green-green-5, #eefff0)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="xmark" id="328:28538" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:28497" */}
      {`${color}` === `lime` &&
        `${state}` === `default` &&
        `${size}` === `Default` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=lime, state=default, size=Default, rounded=False" id="328:28497" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid #C8FF2B",
                  background: "#F6FFDD",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="xmark" id="328:28540" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:28498" */}
      {`${color}` === `lime` &&
        `${state}` === `default` &&
        `${size}` === `small` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=lime, state=default, size=small, rounded=False" id="328:28498" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid #C8FF2B",
                  background: "#F6FFDD",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
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
              >{`Tag`}</span>
            </div>
          </>
        )}
      {/* id="328:28499" */}
      {`${color}` === `lime` &&
        `${state}` === `default` &&
        `${size}` === `rouned` &&
        `${rounded}` === `True` && (
          <>
            {/* name="color=lime, state=default, size=rouned, rounded=True" id="328:28499" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid #C8FF2B",
                  background: "#F6FFDD",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
            </div>
          </>
        )}
      {/* id="328:28500" */}
      {`${color}` === `lime` &&
        `${state}` === `hover` &&
        `${size}` === `Default` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=lime, state=hover, size=Default, rounded=False" id="328:28500" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                  background: "#F6FFDD",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="xmark" id="328:28544" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:28501" */}
      {`${color}` === `calendula gold` &&
        `${state}` === `default` &&
        `${size}` === `Default` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=calendula gold, state=default, size=Default, rounded=False" id="328:28501" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--gold-gold-30, #f2c773)",
                  background: "var(--gold-gold-10, #fceac8)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="xmark" id="328:28546" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:28502" */}
      {`${color}` === `calendula gold` &&
        `${state}` === `default` &&
        `${size}` === `small` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=calendula gold, state=default, size=small, rounded=False" id="328:28502" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--gold-gold-30, #f2c773)",
                  background: "var(--gold-gold-10, #fceac8)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
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
              >{`Tag`}</span>
            </div>
          </>
        )}
      {/* id="328:28503" */}
      {`${color}` === `calendula gold` &&
        `${state}` === `default` &&
        `${size}` === `rouned` &&
        `${rounded}` === `True` && (
          <>
            {/* name="color=calendula gold, state=default, size=rouned, rounded=True" id="328:28503" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--gold-gold-30, #f2c773)",
                  background: "var(--gold-gold-10, #fceac8)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
            </div>
          </>
        )}
      {/* id="328:28504" */}
      {`${color}` === `calendula gold` &&
        `${state}` === `hover` &&
        `${size}` === `Default` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=calendula gold, state=hover, size=Default, rounded=False" id="328:28504" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                  background: "var(--gold-gold-10, #fceac8)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="xmark" id="328:28550" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:28505" */}
      {`${color}` === `neutral` &&
        `${state}` === `default` &&
        `${size}` === `Default` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=neutral, state=default, size=Default, rounded=False" id="328:28505" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="xmark" id="328:28552" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:28506" */}
      {`${color}` === `neutral` &&
        `${state}` === `default` &&
        `${size}` === `small` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=neutral, state=default, size=small, rounded=False" id="328:28506" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
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
              >{`Tag`}</span>
            </div>
          </>
        )}
      {/* id="328:28507" */}
      {`${color}` === `neutral` &&
        `${state}` === `default` &&
        `${size}` === `rouned` &&
        `${rounded}` === `True` && (
          <>
            {/* name="color=neutral, state=default, size=rouned, rounded=True" id="328:28507" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
            </div>
          </>
        )}
      {/* id="328:28508" */}
      {`${color}` === `neutral` &&
        `${state}` === `hover` &&
        `${size}` === `Default` &&
        `${rounded}` === `False` && (
          <>
            {/* name="color=neutral, state=hover, size=Default, rounded=False" id="328:28508" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="xmark" id="328:28556" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
            </div>
          </>
        )}
    </>
  )
}
