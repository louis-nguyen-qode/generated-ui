// id="24:5084"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom53130112 } from "@designSystem/custom/QodeCustom53130112"
import { QodeCustom244862 } from "@designSystem/custom/QodeCustom244862"
import { QodeCustom244887 } from "@designSystem/custom/QodeCustom244887"
import { QodeCustom277914 } from "@designSystem/custom/QodeCustom277914"

export interface QodeCustom245084Props {}

export const QodeCustom245084: React.FC<
  QodeCustom245084Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="❓Expand=No" id="24:5084" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "608px",
            paddingBottom: "12px",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "16px",
            borderBottom:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
          },
          ...style,
        }}
      >
        {/* name="body" id="24:5085" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
              alignSelf: "stretch",
            },
            ...{},
          }}
        >
          {/* name="Profile/Section header" id="531:30152" type="INSTANCE" */}
          <QodeCustom53130112
            style={{
              ...{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-small, 4px)",
              },
              ...{},
            }}
            {...{ edit: true, title: "Experience", state: "view" }}
          />
          {/* name="jobItem" id="24:5093" type="INSTANCE" */}
          <QodeCustom244862
            style={{
              ...{
                display: "flex",
                paddingBottom: "var(--size-padding-paddingsm, 12px)",
                alignItems: "flex-start",
                gap: "var(--size-margin-marginsm, 12px)",
                alignSelf: "stretch",
              },
              ...{},
            }}
            {...{
              location: true,
              time: true,
              button: true,
              company: true,
              title: "Software Engineer",
              description:
                "Founding Engineer at Qode, specializing in full-stack development, infrastructure design, and DevOps. Key architect of the core product, contributing to both development and operational efficiency. Working towards establishing the technical foundation for Qode, balancing innovation and scalability.",
              expand: "No",
            }}
          />
          {/* name="groupExp" id="24:5094" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
                alignSelf: "stretch",
              },
              ...{},
            }}
          >
            {/* name="companyItem" id="24:5095" type="INSTANCE" */}
            <QodeCustom244887
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-margin-marginsm, 12px)",
                  alignSelf: "stretch",
                },
                ...{},
              }}
              {...{ location: true, companyName: true, logo: "Yes" }}
            />
            {/* name="expItem" id="24:5096" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  paddingLeft: "var(--size-padding-padding, 16px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name=".exp_item_vertical" id="24:5097" type="INSTANCE" */}
              <QodeCustom277914
                style={{
                  ...{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxl, 32px)",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
                {...{
                  button: true,
                  time: true,
                  description:
                    "As the Lead Technical Engineer of Google, I play a crucial role in shaping the technical direction of the company. By implementing best practices in full-sta...",
                  title: "Lead Technical Software Engineer",
                  state: "default",
                  status: "wait",
                  size: "dot",
                }}
              />
              {/* name=".exp_item_vertical" id="24:5098" type="INSTANCE" */}
              <QodeCustom277914
                style={{
                  ...{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxl, 32px)",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
                {...{
                  button: true,
                  time: true,
                  description:
                    "As the software engineer, I oversaw the entire product lifecycle. I implemented new features, enhanced application security, and transitioned to a serverless architect...",
                  title: "Software Engineer",
                  state: "default",
                  status: "wait",
                  size: "dot",
                }}
              />
            </div>
          </div>
        </div>
        <span
          style={{
            ...{
              color: "var(--text-text-neutral-20, #878787)",
              textAlign: "center",
              fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
              fontSize: "var(--font-size-small, 12px)",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "var(--line-height-lineheighsm, 16px) /* 133.333% */",
            },
            ...{},
          }}
        >{`Show all 3 experiences`}</span>
      </div>
    </>
  )
}
