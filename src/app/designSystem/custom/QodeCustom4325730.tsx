// id="43:25730"
import React, { CSSProperties } from "react";
import { Flex } from "antd";
import { Icon } from "@designSystem/icon";

import { QodeCustom562954 } from "@designSystem/custom/QodeCustom562954";
import { QodeButton } from "@designSystem/ant/QodeButton";

export interface QodeCustom4325730_ProfileHeaderProps {}

export const QodeCustom4325730_ProfileHeader: React.FC<
  QodeCustom4325730_ProfileHeaderProps & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=Default" id="43:25730" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",

            alignItems: "flex-start",
            gap: "24px",
          },
          ...style,
        }}
      >
        {/* name="Wrap" id="43:25731" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
              flex: "1 0 0",
            },
            ...{},
          }}
        >
          {/* name="avatar" id="43:25732" type="INSTANCE" */}
          <QodeCustom562954
            style={{
              ...{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--font-size-large, 16px)",
                borderRadius: "999px",
                background: "var(--color-success-colorsuccesshover, #a3c73e)",
                position: "relative",
              },
              ...{},
            }}
            {...{
              opentowork: true,
              type: "Round",
              state: "Hover",
              // img: "https://i.pravatar.cc/300",
              width: "72",
              height: "72",
            }}
          />
          {/* name="Wrap" id="43:25733" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
                flex: "1 0 0",
              },
              ...{},
            }}
          >
            {/* name="Name yoe" id="43:25734" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-10, #bfbfbf)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-heading6, 16px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "var(--lineheight-lineheight-h6, 22px)",
                  },
                  ...{},
                }}
              >{`Nguyen Quoc Thai · 12 YoE`}</span>
            </div>
            {/* name="Brief" id="47:6603" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  paddingRight: "24px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "2px",
                  alignSelf: "stretch",
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
                  },
                  ...{},
                }}
              >{`Senior Software Developer at The Chemico Vietnam`}</span>
              {/* name="Location" id="47:6605" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name="location-dot" id="69:8761" type="INSTANCE" */}
                <Icon.QodeLocationDot
                  style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                  {...{}}
                />
                <span
                  style={{
                    ...{
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Ho Chi Minh city, Vietnam`}</span>
              </div>
            </div>
          </div>
        </div>
        {/* name="Button" id="43:25741" type="INSTANCE" */}
        <QodeButton
          style={{
            ...{
              display: "flex",
              height: "var(--size-height-controlheight, 32px)",
              padding: "4px 16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              borderRadius: "var(--border-radius-rounded, 999px)",
              border: "1px solid var(--border-border-primary-30, #107ecc)",
              background: "var(--background-bg-primary, #1597f4)",
            },
            ...{},
          }}
          {...{
            onlyIcon: <Icon.QodeMagnifyingGlass />,
            iconLeft: true,
            buttonname: "Shortlist",
            selectIconRight: <Icon.QodeMagnifyingGlass />,
            selectIconLeft: <Icon.QodeHeart />,
            type: "primary",
            size: "default",
            state: "default",
            content: "default",
            danger: false,
            ghost: false,
          }}
        />
      </div>
    </>
  );
};
