// id="164:2948"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg1642949 from "@designSystem/icon/svg/QodeSvg1642949"
import QodeSvg1642965 from "@designSystem/icon/svg/QodeSvg1642965"

export interface QodeCustom1642948Props {
  integrity?: "zero" | "half" | "full"
}

export const QodeCustom1642948: React.FC<
  QodeCustom1642948Props & { style?: CSSProperties }
> = ({ integrity = "full", ...rest }) => {
  return (
    <>
      {/* name=".rateStar__customIcon" id="164:2948" type="COMPONENT_SET" */}
      {/* id="164:2949" */}
      {`${integrity}` === `zero` && (
        <>
          {/* name="integrity=zero" id="164:2949" type="COMPONENT" */}
          <QodeSvg1642949
            style={{
              width: "24px",
              height: "var(--size-height-controlheightsm, 24px)",
              flexShrink: "0",
            }}
            {...{}}
          />
        </>
      )}
      {/* id="164:2955" */}
      {`${integrity}` === `half` && (
        <>
          {/* name="integrity=half" id="164:2955" type="COMPONENT" */}
          <div
            style={{
              width: "24px",
              height: "var(--size-height-controlheightsm, 24px)",
              flexShrink: "0",
            }}
          >
            {/* name="Union" id="164:2956" type="BOOLEAN_OPERATION" */}
            <Flex
              style={{
                width: "20px",
                height: "20px",
                flexShrink: "0",
                fill: "var(--character-primary-85, rgba(0, 0, 0, 0.85))",
              }}
            >
              {/* name="Smile" id="164:2957" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "20px",
                  height: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "var(--character-primary-inverse, #fff)",
                }}
              >
                {/* name="Vector" id="I164:2957;806:9229" type="VECTOR" */}
                <Flex
                  style={{
                    width: "20px",
                    height: "20px",
                    flexShrink: "0",
                    fill: "var(--character-title-85, rgba(0, 0, 0, 0.85))",
                  }}
                >
                  {/* name="Vector" id=I164:2957;806:9229 type=VECTOR */}
                  <></>
                </Flex>
              </Flex>
            </Flex>
            {/* name="Rectangle" id="164:2958" type="RECTANGLE" */}
            <Flex
              style={{
                width: "14.4px",
                height: "24px",
                flexShrink: "0",
                background: "var(--green-green-50, #11a620)",
              }}
            >
              {/* name="Rectangle" id=164:2958 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Rectangle" id="164:2959" type="RECTANGLE" */}
            <Flex
              style={{
                width: "14.4px",
                height: "24px",
                flexShrink: "0",
                background:
                  "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
              }}
            >
              {/* name="Rectangle" id=164:2959 type=RECTANGLE */}
              <></>
            </Flex>
          </div>
        </>
      )}
      {/* id="164:2965" */}
      {`${integrity}` === `full` && (
        <>
          {/* name="integrity=full" id="164:2965" type="COMPONENT" */}
          <QodeSvg1642965
            style={{
              width: "24px",
              height: "var(--size-height-controlheightsm, 24px)",
              flexShrink: "0",
            }}
            {...{}}
          />
        </>
      )}
    </>
  )
}
