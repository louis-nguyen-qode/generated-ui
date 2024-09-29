// id="1469:45801"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom146945801Props {
  property_1?: "waiting" | "progress" | "done"
  device?: "Default" | "mobile"
}

export const QodeCustom146945801: React.FC<
  QodeCustom146945801Props & { style?: CSSProperties }
> = ({ property_1 = "done", device = "Default", style, ...rest }) => {
  return (
    <>
      {/* name="Stepper/Pre-interiview/Item" id="1469:45801" type="COMPONENT_SET" */}
      {/* id="1469:45800" */}
      {`${property_1}` === `done` && `${device}` === `Default` && (
        <>
          {/* name="Property 1=done, device=Default" id="1469:45800" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "181.333px",
                height: "51px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="Progress" id="1469:45789" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  height: "5px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  background: "var(--blue-techblue-50, #1597f4)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Title" id="1469:45790" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-heading6, 16px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                  },
                  ...{},
                }}
              >{`Sign in `}</span>
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-20, #878787)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  },
                  ...{},
                }}
              >{`1 min`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="1491:45168" */}
      {`${property_1}` === `progress` && `${device}` === `Default` && (
        <>
          {/* name="Property 1=progress, device=Default" id="1491:45168" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "181.333px",
                height: "51px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="Progress" id="1491:45169" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  height: "5px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  background: "var(--blue-techblue-30, #82c8fa)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Title" id="1491:45170" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-heading6, 16px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                  },
                  ...{},
                }}
              >{`Sign in `}</span>
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-20, #878787)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  },
                  ...{},
                }}
              >{`1 min`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="1469:45799" */}
      {`${property_1}` === `waiting` && `${device}` === `Default` && (
        <>
          {/* name="Property 1=waiting, device=Default" id="1469:45799" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "181.333px",
                height: "51px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="Progress" id="1469:45795" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  height: "5px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  background: "var(--neutral-gray-20, #d5d5d5)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Title" id="1469:45796" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-heading6, 16px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                  },
                  ...{},
                }}
              >{`Sign in `}</span>
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-20, #878787)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  },
                  ...{},
                }}
              >{`1 min`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="1477:48080" */}
      {`${property_1}` === `done` && `${device}` === `mobile` && (
        <>
          {/* name="Property 1=done, device=mobile" id="1477:48080" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "100px",
                height: "49px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="Progress" id="1477:48081" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  height: "5px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  background: "var(--blue-techblue-50, #1597f4)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Title" id="1477:48082" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Sign in `}</span>
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-20, #878787)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  },
                  ...{},
                }}
              >{`1 min`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="1491:45173" */}
      {`${property_1}` === `progress` && `${device}` === `mobile` && (
        <>
          {/* name="Property 1=progress, device=mobile" id="1491:45173" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "100px",
                height: "49px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="Progress" id="1491:45174" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  height: "5px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  background: "var(--blue-techblue-30, #82c8fa)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Title" id="1491:45175" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Sign in `}</span>
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-20, #878787)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  },
                  ...{},
                }}
              >{`1 min`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="1477:48085" */}
      {`${property_1}` === `waiting` && `${device}` === `mobile` && (
        <>
          {/* name="Property 1=waiting, device=mobile" id="1477:48085" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "100px",
                height: "49px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="Progress" id="1477:48086" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  height: "5px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  background: "var(--neutral-gray-20, #d5d5d5)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Title" id="1477:48087" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Sign in `}</span>
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-20, #878787)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  },
                  ...{},
                }}
              >{`1 min`}</span>
            </div>
          </div>
        </>
      )}
    </>
  )
}
