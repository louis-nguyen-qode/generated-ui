// id="3026:28639"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom302628964 } from "@designSystem/custom/QodeCustom302628964"

export interface QodeCustom302628639Props {
  rIcon?: React.ReactNode
  lIcon?: React.ReactNode
  label?: boolean
  size?: "sm" | "md" | "lg"
  variant?: "subtle" | "solid" | "outline"
  colorscheme?:
    | "gray"
    | "blue"
    | "teal"
    | "green"
    | "purple"
    | "pink"
    | "orange"
    | "red"
    | "brand"
}

export const QodeCustom302628639: React.FC<
  QodeCustom302628639Props & { style?: CSSProperties }
> = ({
  rIcon = undefined,
  lIcon = undefined,
  label = true,
  size = "sm",
  variant = "subtle",
  colorscheme = "gray",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Tag" id="3026:28639" type="COMPONENT_SET" */}
      {/* id="3026:28640" */}
      {`${size}` === `sm` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `gray` && (
          <>
            {/* name="size=sm, variant=subtle, colorScheme=gray" id="3026:28640" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-gray-200, #f0f0f0)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28641" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-500, #969696)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28643" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28644" */}
      {`${size}` === `sm` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `gray` && (
          <>
            {/* name="size=sm, variant=solid, colorScheme=gray" id="3026:28644" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-gray-500, #969696)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28645" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28647" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28648" */}
      {`${size}` === `sm` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `gray` && (
          <>
            {/* name="size=sm, variant=outline, colorScheme=gray" id="3026:28648" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border: "1px solid var(--brands-gray-300, #e0e0e0)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28649" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-500, #969696)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28651" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28652" */}
      {`${size}` === `sm` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `blue` && (
          <>
            {/* name="size=sm, variant=subtle, colorScheme=blue" id="3026:28652" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-blue-100, #bce3ff)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28653" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-blue-500-core, #1098f7)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28655" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28656" */}
      {`${size}` === `sm` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `blue` && (
          <>
            {/* name="size=sm, variant=solid, colorScheme=blue" id="3026:28656" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-blue-500-core, #1098f7)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28657" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28659" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28660" */}
      {`${size}` === `sm` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `blue` && (
          <>
            {/* name="size=sm, variant=outline, colorScheme=blue" id="3026:28660" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-blue-300, #66c0ff)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28661" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-blue-500-core, #1098f7)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28663" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28664" */}
      {`${size}` === `sm` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `teal` && (
          <>
            {/* name="size=sm, variant=subtle, colorScheme=teal" id="3026:28664" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-teal-100, #b2f5ea)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28665" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-teal-500-core, #319795)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28667" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28668" */}
      {`${size}` === `sm` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `teal` && (
          <>
            {/* name="size=sm, variant=solid, colorScheme=teal" id="3026:28668" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-teal-500-core, #319795)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28669" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28671" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28672" */}
      {`${size}` === `sm` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `teal` && (
          <>
            {/* name="size=sm, variant=outline, colorScheme=teal" id="3026:28672" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-teal-300, #4fd1c5)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28673" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-teal-500-core, #319795)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28675" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28676" */}
      {`${size}` === `sm` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `green` && (
          <>
            {/* name="size=sm, variant=subtle, colorScheme=green" id="3026:28676" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-green-100, #c6f6d5)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28677" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-green-500-core, #38a169)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28679" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28680" */}
      {`${size}` === `sm` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `green` && (
          <>
            {/* name="size=sm, variant=solid, colorScheme=green" id="3026:28680" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-green-500-core, #38a169)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28681" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28683" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28684" */}
      {`${size}` === `sm` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `green` && (
          <>
            {/* name="size=sm, variant=outline, colorScheme=green" id="3026:28684" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-green-300, #68d391)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28685" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-green-500-core, #38a169)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28687" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28688" */}
      {`${size}` === `sm` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `red` && (
          <>
            {/* name="size=sm, variant=subtle, colorScheme=red" id="3026:28688" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-red-100, #fed7d7)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28689" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-red-500-core, #e53e3e)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28691" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28692" */}
      {`${size}` === `sm` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `red` && (
          <>
            {/* name="size=sm, variant=solid, colorScheme=red" id="3026:28692" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-red-500-core, #e53e3e)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28693" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28695" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28696" */}
      {`${size}` === `sm` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `red` && (
          <>
            {/* name="size=sm, variant=outline, colorScheme=red" id="3026:28696" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-red-300, #fc8181)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28697" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-red-500-core, #e53e3e)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28699" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28700" */}
      {`${size}` === `sm` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `purple` && (
          <>
            {/* name="size=sm, variant=subtle, colorScheme=purple" id="3026:28700" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-purple-100, #e9d8fd)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28701" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-purple-500-core, #805ad5)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28703" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28704" */}
      {`${size}` === `sm` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `purple` && (
          <>
            {/* name="size=sm, variant=solid, colorScheme=purple" id="3026:28704" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-purple-500-core, #805ad5)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28705" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28707" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28708" */}
      {`${size}` === `sm` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `purple` && (
          <>
            {/* name="size=sm, variant=outline, colorScheme=purple" id="3026:28708" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-purple-300, #b794f4)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28709" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-purple-500-core, #805ad5)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28711" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28712" */}
      {`${size}` === `sm` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `pink` && (
          <>
            {/* name="size=sm, variant=subtle, colorScheme=pink" id="3026:28712" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-pink-100, #fed7e2)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28713" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-pink-500-core, #d53f8c)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28715" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28716" */}
      {`${size}` === `sm` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `pink` && (
          <>
            {/* name="size=sm, variant=solid, colorScheme=pink" id="3026:28716" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-pink-500-core, #d53f8c)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28717" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28719" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28720" */}
      {`${size}` === `sm` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `pink` && (
          <>
            {/* name="size=sm, variant=outline, colorScheme=pink" id="3026:28720" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-pink-300, #f687b3)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28721" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-pink-500-core, #d53f8c)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28723" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28724" */}
      {`${size}` === `sm` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `orange` && (
          <>
            {/* name="size=sm, variant=subtle, colorScheme=orange" id="3026:28724" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-brand-yellow-100, #fefcbf)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28725" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-brand-yellow-500-core, #d69e2e)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28727" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28728" */}
      {`${size}` === `sm` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `brand` && (
          <>
            {/* name="size=sm, variant=subtle, colorScheme=brand" id="3026:28728" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "2px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-brand-orange-100, #ffd1cb)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28729" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-brand-orange-500-core, #cb5344)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28731" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28732" */}
      {`${size}` === `sm` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `orange` && (
          <>
            {/* name="size=sm, variant=solid, colorScheme=orange" id="3026:28732" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-brand-yellow-500-core, #d69e2e)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28733" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28735" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28736" */}
      {`${size}` === `sm` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `brand` && (
          <>
            {/* name="size=sm, variant=solid, colorScheme=brand" id="3026:28736" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "2px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-brand-orange-500-core, #cb5344)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28737" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28739" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28740" */}
      {`${size}` === `sm` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `orange` && (
          <>
            {/* name="size=sm, variant=outline, colorScheme=orange" id="3026:28740" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-brand-yellow-300, #f6e05e)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28741" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-brand-yellow-500-core, #d69e2e)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28743" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28744" */}
      {`${size}` === `sm` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `brand` && (
          <>
            {/* name="size=sm, variant=outline, colorScheme=brand" id="3026:28744" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "20px",
                  padding: "0px 6px",
                  alignItems: "center",
                  gap: "2px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-brand-orange-300, #f88e81)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28745" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-brand-orange-500-core, #cb5344)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28747" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28748" */}
      {`${size}` === `lg` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `gray` && (
          <>
            {/* name="size=lg, variant=subtle, colorScheme=gray" id="3026:28748" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-gray-200, #f0f0f0)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28749" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-500, #969696)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28751" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28752" */}
      {`${size}` === `lg` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `gray` && (
          <>
            {/* name="size=lg, variant=solid, colorScheme=gray" id="3026:28752" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-gray-500, #969696)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28753" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28755" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28756" */}
      {`${size}` === `lg` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `gray` && (
          <>
            {/* name="size=lg, variant=outline, colorScheme=gray" id="3026:28756" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border: "1px solid var(--brands-gray-300, #e0e0e0)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28757" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-500, #969696)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28759" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28760" */}
      {`${size}` === `lg` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `blue` && (
          <>
            {/* name="size=lg, variant=subtle, colorScheme=blue" id="3026:28760" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-blue-100, #bce3ff)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28761" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-blue-500-core, #1098f7)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28763" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28764" */}
      {`${size}` === `lg` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `blue` && (
          <>
            {/* name="size=lg, variant=solid, colorScheme=blue" id="3026:28764" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-blue-500-core, #1098f7)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28765" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28767" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28768" */}
      {`${size}` === `lg` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `blue` && (
          <>
            {/* name="size=lg, variant=outline, colorScheme=blue" id="3026:28768" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-blue-300, #66c0ff)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28769" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-blue-500-core, #1098f7)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28771" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28772" */}
      {`${size}` === `lg` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `teal` && (
          <>
            {/* name="size=lg, variant=subtle, colorScheme=teal" id="3026:28772" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-teal-100, #b2f5ea)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28773" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-teal-500-core, #319795)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28775" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28776" */}
      {`${size}` === `lg` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `teal` && (
          <>
            {/* name="size=lg, variant=solid, colorScheme=teal" id="3026:28776" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-teal-500-core, #319795)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28777" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28779" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28780" */}
      {`${size}` === `lg` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `teal` && (
          <>
            {/* name="size=lg, variant=outline, colorScheme=teal" id="3026:28780" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-teal-300, #4fd1c5)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28781" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-teal-500-core, #319795)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28783" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28784" */}
      {`${size}` === `lg` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `green` && (
          <>
            {/* name="size=lg, variant=subtle, colorScheme=green" id="3026:28784" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-green-100, #c6f6d5)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28785" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-green-500-core, #38a169)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28787" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28788" */}
      {`${size}` === `lg` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `green` && (
          <>
            {/* name="size=lg, variant=solid, colorScheme=green" id="3026:28788" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-green-500-core, #38a169)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28789" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28791" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28792" */}
      {`${size}` === `lg` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `green` && (
          <>
            {/* name="size=lg, variant=outline, colorScheme=green" id="3026:28792" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-green-300, #68d391)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28793" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-green-500-core, #38a169)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28795" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28796" */}
      {`${size}` === `lg` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `red` && (
          <>
            {/* name="size=lg, variant=subtle, colorScheme=red" id="3026:28796" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-red-100, #fed7d7)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28797" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-red-500-core, #e53e3e)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28799" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28800" */}
      {`${size}` === `lg` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `red` && (
          <>
            {/* name="size=lg, variant=solid, colorScheme=red" id="3026:28800" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-red-500-core, #e53e3e)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28801" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28803" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28804" */}
      {`${size}` === `lg` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `red` && (
          <>
            {/* name="size=lg, variant=outline, colorScheme=red" id="3026:28804" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-red-300, #fc8181)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28805" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-red-500-core, #e53e3e)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28807" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28808" */}
      {`${size}` === `lg` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `purple` && (
          <>
            {/* name="size=lg, variant=subtle, colorScheme=purple" id="3026:28808" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-purple-100, #e9d8fd)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28809" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-purple-500-core, #805ad5)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28811" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28812" */}
      {`${size}` === `lg` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `purple` && (
          <>
            {/* name="size=lg, variant=solid, colorScheme=purple" id="3026:28812" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-purple-500-core, #805ad5)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28813" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28815" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28816" */}
      {`${size}` === `lg` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `purple` && (
          <>
            {/* name="size=lg, variant=outline, colorScheme=purple" id="3026:28816" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-purple-300, #b794f4)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28817" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-purple-500-core, #805ad5)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28819" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28820" */}
      {`${size}` === `lg` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `pink` && (
          <>
            {/* name="size=lg, variant=subtle, colorScheme=pink" id="3026:28820" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-pink-100, #fed7e2)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28821" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-pink-500-core, #d53f8c)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28823" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28824" */}
      {`${size}` === `lg` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `pink` && (
          <>
            {/* name="size=lg, variant=solid, colorScheme=pink" id="3026:28824" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-pink-500-core, #d53f8c)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28825" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28827" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28828" */}
      {`${size}` === `lg` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `pink` && (
          <>
            {/* name="size=lg, variant=outline, colorScheme=pink" id="3026:28828" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-pink-300, #f687b3)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28829" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-pink-500-core, #d53f8c)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28831" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28832" */}
      {`${size}` === `lg` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `orange` && (
          <>
            {/* name="size=lg, variant=subtle, colorScheme=orange" id="3026:28832" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-brand-yellow-100, #fefcbf)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28833" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-brand-yellow-500-core, #d69e2e)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28835" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28836" */}
      {`${size}` === `lg` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `brand` && (
          <>
            {/* name="size=lg, variant=subtle, colorScheme=brand" id="3026:28836" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-brand-orange-100, #ffd1cb)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28837" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-brand-orange-500-core, #cb5344)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28839" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28840" */}
      {`${size}` === `lg` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `orange` && (
          <>
            {/* name="size=lg, variant=solid, colorScheme=orange" id="3026:28840" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-brand-yellow-500-core, #d69e2e)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28841" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28843" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28844" */}
      {`${size}` === `lg` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `brand` && (
          <>
            {/* name="size=lg, variant=solid, colorScheme=brand" id="3026:28844" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-brand-orange-500-core, #cb5344)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28845" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28847" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28848" */}
      {`${size}` === `lg` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `orange` && (
          <>
            {/* name="size=lg, variant=outline, colorScheme=orange" id="3026:28848" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-brand-yellow-300, #f6e05e)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28849" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-brand-yellow-500-core, #d69e2e)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28851" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28852" */}
      {`${size}` === `lg` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `brand` && (
          <>
            {/* name="size=lg, variant=outline, colorScheme=brand" id="3026:28852" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-brand-orange-300, #f88e81)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28853" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-brand-orange-500-core, #cb5344)",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28855" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28856" */}
      {`${size}` === `md` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `gray` && (
          <>
            {/* name="size=md, variant=subtle, colorScheme=gray" id="3026:28856" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-gray-200, #f0f0f0)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28857" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-500, #969696)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28859" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28860" */}
      {`${size}` === `md` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `gray` && (
          <>
            {/* name="size=md, variant=solid, colorScheme=gray" id="3026:28860" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-gray-500, #969696)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28861" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28863" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28864" */}
      {`${size}` === `md` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `gray` && (
          <>
            {/* name="size=md, variant=outline, colorScheme=gray" id="3026:28864" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border: "1px solid var(--brands-gray-300, #e0e0e0)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28865" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-500, #969696)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28867" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28868" */}
      {`${size}` === `md` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `blue` && (
          <>
            {/* name="size=md, variant=subtle, colorScheme=blue" id="3026:28868" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-blue-100, #bce3ff)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28869" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-blue-500-core, #1098f7)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28871" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28872" */}
      {`${size}` === `md` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `blue` && (
          <>
            {/* name="size=md, variant=solid, colorScheme=blue" id="3026:28872" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-blue-500-core, #1098f7)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28873" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28875" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28876" */}
      {`${size}` === `md` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `blue` && (
          <>
            {/* name="size=md, variant=outline, colorScheme=blue" id="3026:28876" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-blue-300, #66c0ff)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28877" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-blue-500-core, #1098f7)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28879" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28880" */}
      {`${size}` === `md` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `teal` && (
          <>
            {/* name="size=md, variant=subtle, colorScheme=teal" id="3026:28880" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-teal-100, #b2f5ea)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28881" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-teal-500-core, #319795)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28883" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28884" */}
      {`${size}` === `md` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `teal` && (
          <>
            {/* name="size=md, variant=solid, colorScheme=teal" id="3026:28884" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-teal-500-core, #319795)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28885" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28887" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28888" */}
      {`${size}` === `md` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `teal` && (
          <>
            {/* name="size=md, variant=outline, colorScheme=teal" id="3026:28888" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-teal-300, #4fd1c5)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28889" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-teal-500-core, #319795)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28891" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28892" */}
      {`${size}` === `md` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `green` && (
          <>
            {/* name="size=md, variant=subtle, colorScheme=green" id="3026:28892" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-green-100, #c6f6d5)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28893" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-green-500-core, #38a169)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28895" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28896" */}
      {`${size}` === `md` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `green` && (
          <>
            {/* name="size=md, variant=solid, colorScheme=green" id="3026:28896" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-green-500-core, #38a169)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28897" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28899" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28900" */}
      {`${size}` === `md` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `green` && (
          <>
            {/* name="size=md, variant=outline, colorScheme=green" id="3026:28900" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-green-300, #68d391)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28901" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-green-500-core, #38a169)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28903" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28904" */}
      {`${size}` === `md` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `red` && (
          <>
            {/* name="size=md, variant=subtle, colorScheme=red" id="3026:28904" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-red-100, #fed7d7)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28905" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-red-500-core, #e53e3e)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28907" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28908" */}
      {`${size}` === `md` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `red` && (
          <>
            {/* name="size=md, variant=solid, colorScheme=red" id="3026:28908" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-red-500-core, #e53e3e)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28909" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28911" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28912" */}
      {`${size}` === `md` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `red` && (
          <>
            {/* name="size=md, variant=outline, colorScheme=red" id="3026:28912" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-red-300, #fc8181)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28913" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-red-500-core, #e53e3e)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28915" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28916" */}
      {`${size}` === `md` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `purple` && (
          <>
            {/* name="size=md, variant=subtle, colorScheme=purple" id="3026:28916" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-purple-100, #e9d8fd)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28917" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-purple-500-core, #805ad5)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28919" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28920" */}
      {`${size}` === `md` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `purple` && (
          <>
            {/* name="size=md, variant=solid, colorScheme=purple" id="3026:28920" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-purple-500-core, #805ad5)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28921" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28923" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28924" */}
      {`${size}` === `md` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `purple` && (
          <>
            {/* name="size=md, variant=outline, colorScheme=purple" id="3026:28924" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-purple-300, #b794f4)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28925" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-purple-500-core, #805ad5)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28927" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28928" */}
      {`${size}` === `md` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `pink` && (
          <>
            {/* name="size=md, variant=subtle, colorScheme=pink" id="3026:28928" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-pink-100, #fed7e2)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28929" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-pink-500-core, #d53f8c)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28931" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28932" */}
      {`${size}` === `md` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `pink` && (
          <>
            {/* name="size=md, variant=solid, colorScheme=pink" id="3026:28932" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-pink-500-core, #d53f8c)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28933" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28935" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28936" */}
      {`${size}` === `md` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `pink` && (
          <>
            {/* name="size=md, variant=outline, colorScheme=pink" id="3026:28936" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-pink-300, #f687b3)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28937" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-pink-500-core, #d53f8c)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28939" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28940" */}
      {`${size}` === `md` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `orange` && (
          <>
            {/* name="size=md, variant=subtle, colorScheme=orange" id="3026:28940" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-brand-yellow-100, #fefcbf)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28941" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-brand-yellow-500-core, #d69e2e)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28943" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28944" */}
      {`${size}` === `md` &&
        `${variant}` === `subtle` &&
        `${colorscheme}` === `brand` && (
          <>
            {/* name="size=md, variant=subtle, colorScheme=brand" id="3026:28944" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-brand-orange-100, #ffd1cb)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28945" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-brand-orange-500-core, #cb5344)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28947" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28948" */}
      {`${size}` === `md` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `orange` && (
          <>
            {/* name="size=md, variant=solid, colorScheme=orange" id="3026:28948" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-brand-yellow-500-core, #d69e2e)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28949" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28951" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28952" */}
      {`${size}` === `md` &&
        `${variant}` === `solid` &&
        `${colorscheme}` === `brand` && (
          <>
            {/* name="size=md, variant=solid, colorScheme=brand" id="3026:28952" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  background: "var(--brands-brand-orange-500-core, #cb5344)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28953" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-gray-050, #fcfcfc)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28955" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28956" */}
      {`${size}` === `md` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `orange` && (
          <>
            {/* name="size=md, variant=outline, colorScheme=orange" id="3026:28956" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-brand-yellow-300, #f6e05e)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28957" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-brand-yellow-500-core, #d69e2e)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28959" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="3026:28960" */}
      {`${size}` === `md` &&
        `${variant}` === `outline` &&
        `${colorscheme}` === `brand` && (
          <>
            {/* name="size=md, variant=outline, colorScheme=brand" id="3026:28960" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "24px",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "6px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--brands-brand-orange-300, #f88e81)",
                },
                ...style,
              }}
            >
              {/* name="BsPlus" id="3026:28961" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--brands-brand-orange-500-core, #cb5344)",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tag`}</span>
              {/* name="BsPlus" id="3026:28963" type="INSTANCE" */}
              <QodeCustom302628964
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
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
