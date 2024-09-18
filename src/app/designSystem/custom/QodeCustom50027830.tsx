// id="500:27830"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom50027830Props {
  property_1?: "End" | "No result"
}

export const QodeCustom50027830: React.FC<
  QodeCustom50027830Props & { style?: CSSProperties }
> = ({ property_1 = "End", style, ...rest }) => {
  return (
    <>
      {/* name="End of list" id="500:27830" type="COMPONENT_SET" */}
      {/* id="434:30284" */}
      {`${property_1}` === `End` && (
        <>
          {/* name="Property 1=End" id="434:30284" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "350px",
                padding: "20px 0px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-30, #656565)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`End of result`}</span>
          </div>
        </>
      )}
      {/* id="500:27831" */}
      {`${property_1}` === `No result` && (
        <>
          {/* name="Property 1=No result" id="500:27831" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "350px",
                padding: "20px 0px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-30, #656565)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`No result found`}</span>
          </div>
        </>
      )}
    </>
  )
}
