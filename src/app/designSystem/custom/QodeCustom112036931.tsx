// id="1120:36931"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg112036937 from "@designSystem/icon/svg/QodeSvg112036937"
import QodeSvg112036943 from "@designSystem/icon/svg/QodeSvg112036943"
import QodeSvg112036947 from "@designSystem/icon/svg/QodeSvg112036947"
import QodeSvg112036953 from "@designSystem/icon/svg/QodeSvg112036953"

export interface QodeCustom112036931Props {
  content?: string
  flowName?: string
  type?: "Default" | "Only title"
  size?: "Default" | "Compact"
}

export const QodeCustom112036931: React.FC<
  QodeCustom112036931Props & { style?: CSSProperties }
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
      {/* name="Flow description" id="1120:36931" type="COMPONENT_SET" */}
      {/* id="1120:36932" */}
      {`${type}` === `Default` && `${size}` === `Default` && (
        <>
          {/* name="Type=Default, Size=Default" id="1120:36932" type="COMPONENT" */}
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
            {/* name="Title" id="1120:36936" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "20px 24px",
                  alignItems: "center",
                  gap: "16px",
                  alignSelf: "stretch",
                  borderTop: "var(--border-radius-small, 4px) solid #8D33FF",
                  borderBottom: "var(--border-radius-small, 4px) solid #8D33FF",
                  background: "var(--white, #fff)",
                  boxShadow: "3px 3px 0px 0px #434343",
                },
                ...{},
              }}
            >
              {/* name="Frame" id="1120:36937" type="FRAME" */}
              <QodeSvg112036937
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
            {/* name="Content" id="1120:36940" type="FRAME" */}
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
      {/* id="1120:36933" */}
      {`${type}` === `Only title` && `${size}` === `Default` && (
        <>
          {/* name="Type=Only title, Size=Default" id="1120:36933" type="COMPONENT" */}
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
            {/* name="Title" id="1120:36942" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "20px 24px",
                  alignItems: "center",
                  gap: "16px",
                  alignSelf: "stretch",
                  borderTop: "var(--border-radius-small, 4px) solid #8D33FF",
                  borderBottom: "var(--border-radius-small, 4px) solid #8D33FF",
                  background: "var(--white, #fff)",
                  boxShadow: "3px 3px 0px 0px #434343",
                },
                ...{},
              }}
            >
              {/* name="Frame" id="1120:36943" type="FRAME" */}
              <QodeSvg112036943
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
      {/* id="1120:36934" */}
      {`${type}` === `Default` && `${size}` === `Compact` && (
        <>
          {/* name="Type=Default, Size=Compact" id="1120:36934" type="COMPONENT" */}
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
            {/* name="Title" id="1120:36946" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "12px 16px",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                  borderTop: "var(--border-radius-small, 4px) solid #8D33FF",
                  borderBottom: "var(--border-radius-small, 4px) solid #8D33FF",
                  background: "var(--white, #fff)",
                  boxShadow: "3px 3px 0px 0px #434343",
                },
                ...{},
              }}
            >
              {/* name="Frame" id="1120:36947" type="FRAME" */}
              <QodeSvg112036947
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
            {/* name="Content" id="1120:36950" type="FRAME" */}
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
      {/* id="1120:36935" */}
      {`${type}` === `Only title` && `${size}` === `Compact` && (
        <>
          {/* name="Type=Only title, Size=Compact" id="1120:36935" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                borderRadius: "var(--4, 4px)",
                border: "1px solid #000",
                background: "var(--text-text-dark-400, #2a2a2a)",
                boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
              },
              ...style,
            }}
          >
            {/* name="Title" id="1120:36952" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "12px 16px",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                  borderTop: "var(--border-radius-small, 4px) solid #8D33FF",
                  borderBottom: "var(--border-radius-small, 4px) solid #8D33FF",
                  background: "var(--white, #fff)",
                  boxShadow: "3px 3px 0px 0px #434343",
                },
                ...{},
              }}
            >
              {/* name="Frame" id="1120:36953" type="FRAME" */}
              <QodeSvg112036953
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
