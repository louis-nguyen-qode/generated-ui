// id="5612:132"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg5612135 from "@designSystem/icon/svg/QodeSvg5612135"
import QodeSvg5612142 from "@designSystem/icon/svg/QodeSvg5612142"
import QodeSvg5612147 from "@designSystem/icon/svg/QodeSvg5612147"
import QodeSvg5612154 from "@designSystem/icon/svg/QodeSvg5612154"

export interface QodeCustom5612132Props {
  content?: string
  flowName?: string
  type?: "Default" | "Only title"
  size?: "Default" | "Compact"
}

export const QodeCustom5612132: React.FC<
  QodeCustom5612132Props & { style?: CSSProperties }
> = ({
  content = "Description",
  flowName = "Flow name",
  type = "Default",
  size = "Default",
  ...rest
}) => {
  return (
    <>
      {/* name="Flow description" id="5612:132" type="COMPONENT_SET" */}
      {/* id="5612:133" */}
      {`${type}` === `Default` && `${size}` === `Default` && (
        <>
          {/* name="Type=Default, Size=Default" id="5612:133" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--4, 4px)",
              background: "var(--gray-neutrals-80, #4a4a4a)",
              boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
            }}
          >
            {/* name="Title" id="5612:134" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "20px 40px",
                alignItems: "center",
                gap: "10px",
                alignSelf: "stretch",
                borderTop: "var(--border-radius-small, 4px) solid #8D33FF",
                borderBottom: "var(--border-radius-small, 4px) solid #8D33FF",
                background: "var(--white, #fff)",
                boxShadow: "3px 3px 0px 0px #434343",
              }}
            >
              {/* name="Frame" id="5612:135" type="FRAME" */}
              <QodeSvg5612135
                style={{ width: "24px", height: "24px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-dark-400, #2a2a2a)",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Sora",
                  fontSize: "36px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                }}
              >{`Flow name`}</span>
            </div>
            {/* name="Content" id="5612:138" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "40px 74px",
                alignItems: "flex-start",
                gap: "10px",
                alignSelf: "stretch",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "#FFF",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: '"Be Vietnam Pro"',
                  fontSize: "28px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "36px /* 128.571% */",
                }}
              >{`Description`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="5612:140" */}
      {`${type}` === `Only title` && `${size}` === `Default` && (
        <>
          {/* name="Type=Only title, Size=Default" id="5612:140" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--4, 4px)",
              background: "var(--text-text-dark-400, #2a2a2a)",
              boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
            }}
          >
            {/* name="Title" id="5612:141" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "20px 40px",
                alignItems: "center",
                gap: "10px",
                alignSelf: "stretch",
                borderTop: "var(--border-radius-small, 4px) solid #8D33FF",
                borderBottom: "var(--border-radius-small, 4px) solid #8D33FF",
                background: "var(--white, #fff)",
                boxShadow: "3px 3px 0px 0px #434343",
              }}
            >
              {/* name="Frame" id="5612:142" type="FRAME" */}
              <QodeSvg5612142
                style={{ width: "24px", height: "24px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-dark-400, #2a2a2a)",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Sora",
                  fontSize: "36px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                }}
              >{`Flow name`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="5612:145" */}
      {`${type}` === `Default` && `${size}` === `Compact` && (
        <>
          {/* name="Type=Default, Size=Compact" id="5612:145" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--4, 4px)",
              background: "var(--gray-neutrals-80, #4a4a4a)",
              boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
            }}
          >
            {/* name="Title" id="5612:146" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "12px 24px",
                alignItems: "center",
                gap: "10px",
                alignSelf: "stretch",
                borderTop: "var(--border-radius-small, 4px) solid #8D33FF",
                borderBottom: "var(--border-radius-small, 4px) solid #8D33FF",
                background: "var(--white, #fff)",
                boxShadow: "3px 3px 0px 0px #434343",
              }}
            >
              {/* name="Frame" id="5612:147" type="FRAME" */}
              <QodeSvg5612147
                style={{ width: "20px", height: "20px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-dark-400, #2a2a2a)",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Sora",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                }}
              >{`Flow name`}</span>
            </div>
            {/* name="Content" id="5612:150" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "24px 56px",
                alignItems: "flex-start",
                gap: "10px",
                alignSelf: "stretch",
              }}
            >
              <span
                style={{
                  color: "#FFF",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: '"Be Vietnam Pro"',
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "28px /* 140% */",
                }}
              >{`Description`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="5612:152" */}
      {`${type}` === `Only title` && `${size}` === `Compact` && (
        <>
          {/* name="Type=Only title, Size=Compact" id="5612:152" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--4, 4px)",
              border: "var(--style-line-width-linewidth, 1px) solid #000",
              background: "var(--text-text-dark-400, #2a2a2a)",
              boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
            }}
          >
            {/* name="Title" id="5612:153" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "12px 24px",
                alignItems: "center",
                gap: "10px",
                alignSelf: "stretch",
                borderTop: "var(--border-radius-small, 4px) solid #8D33FF",
                borderBottom: "var(--border-radius-small, 4px) solid #8D33FF",
                background: "var(--white, #fff)",
                boxShadow: "3px 3px 0px 0px #434343",
              }}
            >
              {/* name="Frame" id="5612:154" type="FRAME" */}
              <QodeSvg5612154
                style={{ width: "20px", height: "20px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-dark-400, #2a2a2a)",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Sora",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                }}
              >{`Flow name`}</span>
            </div>
          </div>
        </>
      )}
    </>
  )
}
