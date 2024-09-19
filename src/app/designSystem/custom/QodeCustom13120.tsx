// id="1:3120"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom61606 } from "@designSystem/custom/QodeCustom61606"
import { QodeCustom434 } from "@designSystem/custom/QodeCustom434"
import { QodeCustom440 } from "@designSystem/custom/QodeCustom440"

export interface QodeCustom13120Props {}

export const QodeCustom13120: React.FC<
  QodeCustom13120Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Navbar" id="1:3120" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "84px",
            height: "100%",
            flexDirection: "column",
            alignItems: "center",
            borderRight:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            background: "var(--background-bg-white, #fff)",
          },
          ...style,
        }}
      >
        {/* name="Logo" id="1:3092" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              padding: "16px 0px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "4px",
              alignSelf: "stretch",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            },
            ...{},
          }}
        >
          {/* name="logo" id="635:31404" type="INSTANCE" */}
          <QodeCustom61606
            style={{ ...{ width: "40px", height: "40px" }, ...{} }}
            {...{
              type: "Default",
              darkmode: "yes",
              orientation: "landscape",
              wordmark: "no",
            }}
          />
        </div>
        {/* name="V-Menu" id="1:3094" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              padding: "16px 8px",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              flex: "1 0 0",
              alignSelf: "stretch",
            },
            ...{},
          }}
        >
          {/* name="Navbar/Menu" id="4:124" type="INSTANCE" */}
          <QodeCustom434
            style={{
              ...{
                display: "flex",
                width: "84px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-size-sizexxs-6px, 6px)",
                color: "var(--neutral-gray-80, #565656)",
              },
              ...{},
            }}
            {...{ icon: <Icon.QodeCube />, state: "Default" }}
          />
          {/* name="Navbar/Menu" id="16:5813" type="INSTANCE" */}
          <QodeCustom440
            style={{
              ...{
                display: "flex",
                width: "84px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-size-sizexxs-6px, 6px)",
                color: "var(--color-neutral-background-colorbgcontainer, #fff)",
              },
              ...{},
            }}
            {...{ icon: <Icon.QodeBriefcase />, state: "Active" }}
          />
          {/* name="Navbar/Menu" id="4:54" type="INSTANCE" */}
          <QodeCustom434
            style={{
              ...{
                display: "flex",
                width: "84px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-size-sizexxs-6px, 6px)",
                color: "var(--neutral-gray-80, #565656)",
              },
              ...{},
            }}
            {...{ icon: <Icon.QodeUserGroup />, state: "Default" }}
          />
          {/* name="Navbar/Menu" id="4:95" type="INSTANCE" */}
          <QodeCustom434
            style={{
              ...{
                display: "flex",
                width: "84px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-size-sizexxs-6px, 6px)",
                color: "var(--neutral-gray-80, #565656)",
              },
              ...{},
            }}
            {...{ icon: <Icon.QodeVideo />, state: "Default" }}
          />
        </div>
        {/* name="Btm" id="1:3098" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              padding: "16px 0px",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            },
            ...{},
          }}
        >
          {/* name="Profile" id="1:3099" type="INSTANCE" */}
          <div
            style={{
              ...{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                gap: "var(--font-size-large, 16px)",
                alignSelf: "stretch",
              },
              ...{},
            }}
            {...{ _style: "V - Profile", logIn: "No" }}
          />
          {/* name="Profile" id="1:3100" type="INSTANCE" */}
          <div
            style={{
              ...{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                gap: "var(--font-size-large, 16px)",
                alignSelf: "stretch",
              },
              ...{},
            }}
            {...{ _style: "V - Profile", logIn: "No" }}
          />
        </div>
      </div>
    </>
  )
}
