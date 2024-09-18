// id="168:7880"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom1687880Props {
  title?: string
  theme?: "light"
}

export const QodeCustom1687880: React.FC<
  QodeCustom1687880Props & { style?: CSSProperties }
> = ({ title = "Navigation Group", theme = "light", ...rest }) => {
  return (
    <>
      {/* name=".menu__group" id="168:7880" type="COMPONENT_SET" */}
      {/* id="168:7879" */}
      {`${theme}` === `light` && (
        <>
          {/* name="theme=light" id="168:7879" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "var(--size-height-controlheightlg, 40px)",
              padding: "0px var(--size-padding-paddingxl, 32px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiuslg, 8px)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color:
                  "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Navigation Group`}</span>
          </div>
        </>
      )}
    </>
  )
}
