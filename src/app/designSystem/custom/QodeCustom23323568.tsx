// id="233:23568"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg23323574 from "@designSystem/icon/svg/QodeSvg23323574"
import QodeSvg23323580 from "@designSystem/icon/svg/QodeSvg23323580"
import QodeSvg23323584 from "@designSystem/icon/svg/QodeSvg23323584"
import QodeSvg23323590 from "@designSystem/icon/svg/QodeSvg23323590"

export interface QodeCustom23323568Props {
  content?: string
  flowName?: string
  type?: "Default" | "Only title"
  size?: "Default" | "Compact"
}

export const QodeCustom23323568: React.FC<
  QodeCustom23323568Props & { style?: CSSProperties }
> = ({
  content = "Description",
  flowName = "Flow name",
  type = "Default",
  size = "Default",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Flow description" id="233:23568" type="COMPONENT_SET" */}
      {/* id="233:23569" */}
      {`${type}` === `Default` && `${size}` === `Default` && (
        <>
          {/* name="Type=Default, Size=Default" id="233:23569" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                borderRadius: "var(--4, 4px)",
                background: "var(--gray-neutrals-80, #4a4a4a)",
                boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
              },
              ...style,
            }}
          >
            {/* name="Title" id="233:23573" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "20px 40px",
                  alignItems: "center",
                  gap: "10px",
                  alignSelf: "stretch",
                  borderTop: "var(--border-radius-small, 4px) solid #8D33FF",
                  borderBottom: "var(--border-radius-small, 4px) solid #8D33FF",
                  background: "var(--white, #fff)",
                  boxShadow: "3px 3px 0px 0px #434343",
                },
                ...{},
              }}
            >
              {/* name="Frame" id="233:23574" type="FRAME" */}
              <QodeSvg23323574
                style={{ ...{ width: "24px", height: "24px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-dark-400, #2a2a2a)",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Sora",
                    fontSize: "36px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                  },
                  ...{},
                }}
              >{`Flow name`}</span>
            </div>
            {/* name="Content" id="233:23577" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "40px 74px",
                  alignItems: "flex-start",
                  gap: "10px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    color: "#FFF",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: '"Be Vietnam Pro"',
                    fontSize: "28px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "36px /* 128.571% */",
                  },
                  ...{},
                }}
              >{`Description`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="233:23570" */}
      {`${type}` === `Only title` && `${size}` === `Default` && (
        <>
          {/* name="Type=Only title, Size=Default" id="233:23570" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                borderRadius: "var(--4, 4px)",
                background: "var(--text-text-dark-400, #2a2a2a)",
                boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
              },
              ...style,
            }}
          >
            {/* name="Title" id="233:23579" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "20px 40px",
                  alignItems: "center",
                  gap: "10px",
                  alignSelf: "stretch",
                  borderTop: "var(--border-radius-small, 4px) solid #8D33FF",
                  borderBottom: "var(--border-radius-small, 4px) solid #8D33FF",
                  background: "var(--white, #fff)",
                  boxShadow: "3px 3px 0px 0px #434343",
                },
                ...{},
              }}
            >
              {/* name="Frame" id="233:23580" type="FRAME" */}
              <QodeSvg23323580
                style={{ ...{ width: "24px", height: "24px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-dark-400, #2a2a2a)",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Sora",
                    fontSize: "36px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                  },
                  ...{},
                }}
              >{`Flow name`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="233:23571" */}
      {`${type}` === `Default` && `${size}` === `Compact` && (
        <>
          {/* name="Type=Default, Size=Compact" id="233:23571" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                borderRadius: "var(--4, 4px)",
                background: "var(--gray-neutrals-80, #4a4a4a)",
                boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
              },
              ...style,
            }}
          >
            {/* name="Title" id="233:23583" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "12px 24px",
                  alignItems: "center",
                  gap: "10px",
                  alignSelf: "stretch",
                  borderTop: "var(--border-radius-small, 4px) solid #8D33FF",
                  borderBottom: "var(--border-radius-small, 4px) solid #8D33FF",
                  background: "var(--white, #fff)",
                  boxShadow: "3px 3px 0px 0px #434343",
                },
                ...{},
              }}
            >
              {/* name="Frame" id="233:23584" type="FRAME" */}
              <QodeSvg23323584
                style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-dark-400, #2a2a2a)",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Sora",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                  },
                  ...{},
                }}
              >{`Flow name`}</span>
            </div>
            {/* name="Content" id="233:23587" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "24px 56px",
                  alignItems: "flex-start",
                  gap: "10px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    color: "#FFF",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: '"Be Vietnam Pro"',
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "28px /* 140% */",
                  },
                  ...{},
                }}
              >{`Description`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="233:23572" */}
      {`${type}` === `Only title` && `${size}` === `Compact` && (
        <>
          {/* name="Type=Only title, Size=Compact" id="233:23572" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                borderRadius: "var(--4, 4px)",
                border: "var(--style-line-width-linewidth, 1px) solid #000",
                background: "var(--text-text-dark-400, #2a2a2a)",
                boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
              },
              ...style,
            }}
          >
            {/* name="Title" id="233:23589" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "12px 24px",
                  alignItems: "center",
                  gap: "10px",
                  alignSelf: "stretch",
                  borderTop: "var(--border-radius-small, 4px) solid #8D33FF",
                  borderBottom: "var(--border-radius-small, 4px) solid #8D33FF",
                  background: "var(--white, #fff)",
                  boxShadow: "3px 3px 0px 0px #434343",
                },
                ...{},
              }}
            >
              {/* name="Frame" id="233:23590" type="FRAME" */}
              <QodeSvg23323590
                style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-dark-400, #2a2a2a)",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Sora",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                  },
                  ...{},
                }}
              >{`Flow name`}</span>
            </div>
          </div>
        </>
      )}
    </>
  )
}
