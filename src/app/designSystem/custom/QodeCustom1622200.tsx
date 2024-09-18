// id="162:2200"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom1621778 } from "@designSystem/custom/QodeCustom1621778"
import { QodeCustom1621857 } from "@designSystem/custom/QodeCustom1621857"

export interface QodeCustom1622200Props {
  position?: "Bottom" | "Top" | "Left" | "Right"
}

export const QodeCustom1622200: React.FC<
  QodeCustom1622200Props & { style?: CSSProperties }
> = ({ position = "Bottom", style, ...rest }) => {
  return (
    <>
      {/* name="Carousel" id="162:2200" type="COMPONENT_SET" */}
      {/* id="162:2199" */}
      {`${position}` === `Bottom` && (
        <>
          {/* name="Position=Bottom" id="162:2199" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "800px",
                height: "320px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "10px",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="Background" id="162:2188" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  background: "var(--color-primary-colorprimary, #1597f4)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="🧬 dots" id="162:2189" type="INSTANCE" */}
            <QodeCustom1621778
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  position: "absolute",
                  left: "352px",
                  bottom: "16px",
                },
                ...{},
              }}
              {...{ direction: "horizontal", items: "4" }}
            />
          </div>
        </>
      )}
      {/* id="162:2212" */}
      {`${position}` === `Top` && (
        <>
          {/* name="Position=Top" id="162:2212" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "800px",
                height: "320px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "10px",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="Background" id="162:2213" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  background: "var(--color-primary-colorprimary, #1597f4)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="🧬 dots" id="162:2214" type="INSTANCE" */}
            <QodeCustom1621778
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  position: "absolute",
                  left: "352px",
                  top: "16px",
                },
                ...{},
              }}
              {...{ direction: "horizontal", items: "4" }}
            />
          </div>
        </>
      )}
      {/* id="162:2223" */}
      {`${position}` === `Left` && (
        <>
          {/* name="Position=Left" id="162:2223" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "800px",
                height: "320px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "10px",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="Background" id="162:2224" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  background: "var(--color-primary-colorprimary, #1597f4)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="🧬 dots" id="162:2225" type="INSTANCE" */}
            <QodeCustom1621857
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  position: "absolute",
                  left: "16px",
                  top: "142px",
                },
                ...{},
              }}
              {...{ direction: "vertical", items: "4" }}
            />
          </div>
        </>
      )}
      {/* id="162:2242" */}
      {`${position}` === `Right` && (
        <>
          {/* name="Position=Right" id="162:2242" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "800px",
                height: "320px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "10px",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="Background" id="162:2243" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  background: "var(--color-primary-colorprimary, #1597f4)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="🧬 dots" id="162:2244" type="INSTANCE" */}
            <QodeCustom1621857
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  position: "absolute",
                  right: "16px",
                  top: "142px",
                },
                ...{},
              }}
              {...{ direction: "vertical", items: "4" }}
            />
          </div>
        </>
      )}
    </>
  )
}
