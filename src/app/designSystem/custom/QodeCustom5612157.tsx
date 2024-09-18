// id="5612:157"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom5612157Props {
  subSectionName?: string
  section?: string
  type?: "Default" | "Compact"
}

export const QodeCustom5612157: React.FC<
  QodeCustom5612157Props & { style?: CSSProperties }
> = ({
  subSectionName = "Sub section name",
  section = "Section name",
  type = "Default",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Section name" id="5612:157" type="COMPONENT_SET" */}
      {/* id="5612:158" */}
      {`${type}` === `Default` && (
        <>
          {/* name="Type=Default" id="5612:158" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding: "40px 120px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "0px 0px 48px 0px",
                background:
                  "linear-gradient(90deg, #EAF4FF 2.94%, #EFEBFF 38.71%, #FFFEFB 71.15%, #EBFBFF 99.21%)",
                boxShadow: "4px 4px 0px 0px #434343",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--cool-neutrals-100, #1f2a35)",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Sora",
                  fontSize: "54px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                },
                ...{},
              }}
            >{`Section name`}</span>
          </div>
        </>
      )}
      {/* id="5612:160" */}
      {`${type}` === `Compact` && (
        <>
          {/* name="Type=Compact" id="5612:160" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding: "24px 80px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "0px 0px 36px 0px",
                background:
                  "linear-gradient(90deg, #EAF4FF 2.94%, #EFEBFF 38.71%, #FFFEFB 71.15%, #EBFBFF 99.21%)",
                boxShadow: "4px 4px 0px 0px #434343",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--cool-neutrals-100, #1f2a35)",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Sora",
                  fontSize: "40px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                },
                ...{},
              }}
            >{`Sub section name`}</span>
          </div>
        </>
      )}
    </>
  )
}
