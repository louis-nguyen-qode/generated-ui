// id="43:9203"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom13120 } from "@designSystem/custom/QodeCustom13120"
import { QodeCustom1136232 } from "@designSystem/custom/QodeCustom1136232"
import { QodeCustom945729 } from "@designSystem/custom/QodeCustom945729"
import { QodeCustom4325081 } from "@designSystem/custom/QodeCustom4325081"

export interface Qode439203PageProps {
  style?: CSSProperties
}

export const Qode439203Page: React.FC<Qode439203PageProps> = ({
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Shortlisted" id="43:9203" type="FRAME" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "1280px",
            height: "800px",
            alignItems: "flex-start",
            background: "var(--app-bg, #f4f4f6)",
          },
          ...style,
        }}
      >
        {/* name="Navbar" id="43:9204" type="INSTANCE" */}
        <QodeCustom13120
          style={{
            ...{
              display: "flex",
              width: "84px",
              height: "800px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRight:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--background-bg-white, #fff)",
            },
            ...{},
          }}
          {...{}}
        />
        {/* name="b" id="43:9205" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              padding: "24px 40px 0px 40px",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              flex: "1 0 0",
              alignSelf: "stretch",
              background: "var(--app-bg, #f4f4f6)",
            },
            ...{},
          }}
        >
          {/* name="Screen header" id="113:6258" type="INSTANCE" */}
          <QodeCustom1136232
            style={{
              ...{
                display: "flex",
                width: "1116px",
                height: "42px",
                maxWidth: "1276px",
                paddingRight: "441px",
                alignItems: "center",
                gap: "408px",
                borderRadius:
                  "0px 0px var(--border-radius-large, 12px) var(--border-radius-large, 12px)",
              },
              ...{},
            }}
            {...{ property_1: "Default" }}
          />
          {/* name="Body" id="43:22700" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                maxWidth: "1276px",
                alignItems: "flex-start",
                flex: "1 0 0",
                alignSelf: "stretch",
                borderRadius:
                  "var(--border-radius-large, 12px) var(--border-radius-large, 12px) 0px 0px",
                border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
              },
              ...{},
            }}
          >
            {/* name="List | Shortlisted" id="94:5465" type="INSTANCE" */}
            <QodeCustom945729
              style={{
                ...{
                  display: "flex",
                  width: "370px",
                  height: "710px",
                  padding: "var(--size-size-sizexxs-6px, 6px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  background: "var(--neutral-gray-10, #e3e3e3)",
                },
                ...{},
              }}
              {...{ property_1: "Default" }}
            />
            {/* name="Profile" id="43:23025" type="INSTANCE" */}
            <QodeCustom4325081
              style={{
                ...{
                  display: "flex",
                  padding: "20px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderRadius: "0px 12px 0px 0px",
                  borderLeft:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{ property_1: "Default" }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Qode439203Page
