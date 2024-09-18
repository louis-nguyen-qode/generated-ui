// id="545:32247"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeBadge } from "@designSystem/ant/QodeBadge"

export interface QodeCustom54532247Props {}

export const QodeCustom54532247: React.FC<
  QodeCustom54532247Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Job status" id="545:32247" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "295px",
            alignItems: "flex-start",
            gap: "16px",
          },
          ...style,
        }}
      >
        {/* name="Title" id="545:32236" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
              flex: "1 0 0",
            },
            ...{},
          }}
        >
          {/* name="Icon wrap" id="545:32371" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                paddingTop: "2px",
                alignItems: "center",
                gap: "10px",
              },
              ...{},
            }}
          >
            {/* name="briefcase" id="545:32237" type="INSTANCE" */}
            <Icon.QodeBriefcase
              style={{ ...{ width: "16px", height: "16px" }, ...{} }}
              {...{}}
            />
          </div>
          {/* name="Job title" id="545:32238" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
                flex: "1 0 0",
              },
              ...{},
            }}
          >
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  textDecorationLine: "underline",
                },
                ...{},
              }}
            >{`Senior Software Engineer`}</span>
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-20, #878787)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                },
                ...{},
              }}
            >{`Sep 15, 2024`}</span>
          </div>
        </div>
        {/* name="Badge__Status" id="545:32242" type="INSTANCE" */}
        <QodeBadge
          style={{
            ...{ display: "flex", alignItems: "center", gap: "8px" },
            ...{},
          }}
          {...{ showLabel: true, status: "success" }}
        />
      </div>
    </>
  )
}
