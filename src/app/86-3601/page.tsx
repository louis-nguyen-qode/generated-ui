// id="86:3601"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom13120 } from "@designSystem/custom/QodeCustom13120"
import { QodeCustom1136232 } from "@designSystem/custom/QodeCustom1136232"
import { QodeCustom43430029 } from "@designSystem/custom/QodeCustom43430029"
import { QodeCustom4325081 } from "@designSystem/custom/QodeCustom4325081"

export interface Qode863601PageProps {
  style?: CSSProperties
}

export const Qode863601Page: React.FC<Qode863601PageProps> = ({
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Similar profiles" id="86:3601" type="FRAME" */}
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
        {/* name="Navbar" id="86:3602" type="INSTANCE" */}
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
        {/* name="b" id="86:3603" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              height: "800px",
              padding: "24px 40px 0px 40px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "24px",
              flex: "1 0 0",
              background: "var(--app-bg, #f4f4f6)",
            },
            ...{},
          }}
        >
          {/* name="Screen header" id="113:6265" type="INSTANCE" */}
          <QodeCustom1136232
            style={{
              ...{
                display: "flex",
                width: "1116px",
                height: "42px",
                maxWidth: "1276px",
                paddingRight: "476.5px",
                alignItems: "center",
                gap: "443.5px",
                flexShrink: "0",
                borderRadius:
                  "0px 0px var(--border-radius-large, 12px) var(--border-radius-large, 12px)",
              },
              ...{},
            }}
            {...{ property_1: "Default" }}
          />
          {/* name="Wrap" id="86:4086" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                maxWidth: "1276px",
                flexDirection: "column",
                alignItems: "flex-start",
                flex: "1 0 0",
                alignSelf: "stretch",
                borderRadius: "12px 12px 0px 0px",
                border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
              },
              ...{},
            }}
          >
            {/* name="Body" id="86:4088" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  background: "#FFF",
                },
                ...{},
              }}
            >
              {/* name="List | Profile" id="86:4089" type="INSTANCE" */}
              <QodeCustom43430029
                style={{
                  ...{
                    display: "flex",
                    width: "353px",
                    flexDirection: "column",
                    alignItems: "center",
                    alignSelf: "stretch",
                    background: "#FFF",
                  },
                  ...{},
                }}
                {...{ property_1: "Default" }}
              />
              {/* name="Profile" id="86:4090" type="INSTANCE" */}
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
      </div>
    </>
  )
}

export default Qode863601Page
