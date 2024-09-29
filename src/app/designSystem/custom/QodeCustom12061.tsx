// id="1:2061"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom12058 } from "@designSystem/custom/QodeCustom12058"

export interface QodeCustom12061Props {
  icon?: React.ReactNode
  count?: string
  type?: "dot" | "default" | "small" | "icon"
}

export const QodeCustom12061: React.FC<
  QodeCustom12061Props & { style?: CSSProperties }
> = ({ icon = undefined, count = "21", type = "dot", style, ...rest }) => {
  return (
    <>
      {/* name="Badge" id="1:2061" type="COMPONENT_SET" */}
      {/* id="1:2062" */}
      {`${type}` === `dot` && (
        <>
          {/* name="type=dot" id="1:2062" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                width: "var(--size-size-sizexxs-6px, 6px)",
                height: "var(--size-size-sizexxs-6px, 6px)",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                border:
                  "1px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                background: "var(--color-error-colorerror, #ff6542)",
              },
              ...style,
            }}
          >
            <></>
          </div>
        </>
      )}
      {/* id="1:2063" */}
      {`${type}` === `default` && (
        <>
          {/* name="type=default" id="1:2063" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "20px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "999px",
                border:
                  "1px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                background: "var(--color-error-colorerror, #ff6542)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  textAlign: "center",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 22px) /* 157.143% */",
                },
                ...{},
              }}
            >{`21`}</span>
          </div>
        </>
      )}
      {/* id="1:2065" */}
      {`${type}` === `small` && (
        <>
          {/* name="type=small" id="1:2065" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "16px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "900px",
                border:
                  "1px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                background: "var(--color-error-colorerror, #ff6542)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  textAlign: "center",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheighsm, 20px) /* 166.667% */",
                },
                ...{},
              }}
            >{`21`}</span>
          </div>
        </>
      )}
      {/* id="1:2067" */}
      {`${type}` === `icon` && (
        <>
          {/* name="type=icon" id="1:2067" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding: "var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "900px",
                border:
                  "1px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                background: "var(--color-error-colorerror, #ff6542)",
              },
              ...style,
            }}
          >
            {/* name="linkedin" id="1:2068" type="INSTANCE" */}
            <QodeCustom12058
              style={{ ...{ width: "16px", height: "16px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
