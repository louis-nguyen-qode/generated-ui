// id="5629:38"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom562926 } from "@designSystem/custom/QodeCustom562926"

export interface QodeCustom562938Props {
  icon?: React.ReactNode
  count?: string
  type?: "dot" | "default" | "small" | "icon"
}

export const QodeCustom562938: React.FC<
  QodeCustom562938Props & { style?: CSSProperties }
> = ({ icon = undefined, count = "21", type = "dot", ...rest }) => {
  return (
    <>
      {/* name="Badge" id="5629:38" type="COMPONENT_SET" */}
      {/* id="5629:39" */}
      {`${type}` === `dot` && (
        <>
          {/* name="type=dot" id="5629:39" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              width: "6px",
              height: "6px",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiuslg, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
              background: "var(--color-error-colorerror, #ff6542)",
            }}
          >
            {/* name="type=dot" id=5629:39 type=COMPONENT */}
            <></>
          </div>
        </>
      )}
      {/* id="5629:40" */}
      {`${type}` === `default` && (
        <>
          {/* name="type=default" id="5629:40" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "20px",
              padding: "0px var(--size-padding-paddingxxs, 4px)",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "999px",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
              background: "var(--color-error-colorerror, #ff6542)",
            }}
          >
            <span
              style={{
                color: "var(--color-neutral-text-colortextsolid, #fff)",
                textAlign: "center",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--line-height-lineheight, 20px) /* 142.857% */",
              }}
            >{`21`}</span>
          </div>
        </>
      )}
      {/* id="5629:42" */}
      {`${type}` === `small` && (
        <>
          {/* name="type=small" id="5629:42" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "16px",
              padding: "0px var(--size-padding-paddingxxs, 4px)",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "900px",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
              background: "var(--color-error-colorerror, #ff6542)",
            }}
          >
            <span
              style={{
                color: "var(--color-neutral-text-colortextsolid, #fff)",
                textAlign: "center",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--line-height-lineheighsm, 16px) /* 133.333% */",
              }}
            >{`21`}</span>
          </div>
        </>
      )}
      {/* id="5629:44" */}
      {`${type}` === `icon` && (
        <>
          {/* name="type=icon" id="5629:44" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "var(--size-padding-paddingxxs, 4px)",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "900px",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
              background: "var(--color-error-colorerror, #ff6542)",
            }}
          >
            {/* name="linkedin" id="5629:45" type="INSTANCE" */}
            <QodeCustom562926
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
