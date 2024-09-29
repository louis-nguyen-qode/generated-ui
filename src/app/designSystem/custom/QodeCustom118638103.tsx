// id="1186:38103"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg118638079 from "@designSystem/icon/svg/QodeSvg118638079"
import QodeSvg118638080 from "@designSystem/icon/svg/QodeSvg118638080"
import QodeSvg63530780 from "@designSystem/icon/svg/QodeSvg63530780"
import QodeSvg118638151 from "@designSystem/icon/svg/QodeSvg118638151"
import QodeSvg118638152 from "@designSystem/icon/svg/QodeSvg118638152"
import { QodeCustom107148975 } from "@designSystem/custom/QodeCustom107148975"
import QodeSvg118638106 from "@designSystem/icon/svg/QodeSvg118638106"
import QodeSvg118638155 from "@designSystem/icon/svg/QodeSvg118638155"

export interface QodeCustom118638103Props {
  state?: "Speaking" | "Listening"
  who?: "Tracy" | "Interviewee"
}

export const QodeCustom118638103: React.FC<
  QodeCustom118638103Props & { style?: CSSProperties }
> = ({ state = "Speaking", who = "Tracy", style, ...rest }) => {
  return (
    <>
      {/* name="Prepare/Tester icon" id="1186:38103" type="COMPONENT_SET" */}
      {/* id="1186:38102" */}
      {`${state}` === `Speaking` && `${who}` === `Tracy` && (
        <>
          {/* name="state=Speaking, who=Tracy" id="1186:38102" type="COMPONENT" */}
          <div
            style={{
              ...{ width: "60px", height: "60px", flexShrink: "0" },
              ...style,
            }}
          >
            {/* name="Ellipse 95" id="1186:38079" type="ELLIPSE" */}
            <QodeSvg118638079
              style={{
                ...{
                  width: "60px",
                  height: "60px",
                  flexShrink: "0",
                  fill: "linear-gradient(144deg, #66A3FF 12.69%, #3CE8FF 84.91%)",
                  filter: "blur(6px)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="Ellipse 94" id="1186:38080" type="ELLIPSE" */}
            <QodeSvg118638080
              style={{
                ...{
                  width: "53.407px",
                  height: "53.407px",
                  flexShrink: "0",
                  fill: "#FFF",
                  strokeWidth: "1px",
                  stroke: "var(--border-border-primary-10, #64b9f5)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="logo" id="1186:38081" type="INSTANCE" */}
            <QodeSvg63530780
              style={{
                ...{ width: "26.374px", height: "26.374px", flexShrink: "0" },
                ...{},
              }}
              {...{
                type: "Default",
                darkmode: "yes",
                orientation: "landscape",
                wordmark: "no",
              }}
            />
          </div>
        </>
      )}
      {/* id="1186:38150" */}
      {`${state}` === `Speaking` && `${who}` === `Interviewee` && (
        <>
          {/* name="state=Speaking, who=Interviewee" id="1186:38150" type="COMPONENT" */}
          <div
            style={{
              ...{ width: "60px", height: "60px", flexShrink: "0" },
              ...style,
            }}
          >
            {/* name="Ellipse 95" id="1186:38151" type="ELLIPSE" */}
            <QodeSvg118638151
              style={{
                ...{
                  width: "60px",
                  height: "60px",
                  flexShrink: "0",
                  fill: "linear-gradient(144deg, #66A3FF 12.69%, #3CE8FF 84.91%)",
                  filter: "blur(6px)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="Ellipse 94" id="1186:38152" type="ELLIPSE" */}
            <QodeSvg118638152
              style={{
                ...{
                  width: "53.407px",
                  height: "53.407px",
                  flexShrink: "0",
                  fill: "#FFF",
                  strokeWidth: "1px",
                  stroke: "var(--border-border-primary-10, #64b9f5)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="microphone" id="1186:38159" type="INSTANCE" */}
            <QodeCustom107148975
              style={{
                ...{ width: "24px", height: "24px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="1186:38104" */}
      {`${state}` === `Listening` && `${who}` === `Tracy` && (
        <>
          {/* name="state=Listening, who=Tracy" id="1186:38104" type="COMPONENT" */}
          <div
            style={{
              ...{ width: "60px", height: "60px", flexShrink: "0" },
              ...style,
            }}
          >
            {/* name="Ellipse 94" id="1186:38106" type="ELLIPSE" */}
            <QodeSvg118638106
              style={{
                ...{
                  width: "53.407px",
                  height: "53.407px",
                  flexShrink: "0",
                  fill: "#FFF",
                  strokeWidth: "1px",
                  stroke: "var(--border-border-neutral-30, #d5d5d5)",
                  boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.25) inset",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="logo" id="1186:38107" type="INSTANCE" */}
            <QodeSvg63530780
              style={{
                ...{ width: "26.374px", height: "26.374px", flexShrink: "0" },
                ...{},
              }}
              {...{
                type: "Default",
                darkmode: "yes",
                orientation: "landscape",
                wordmark: "no",
              }}
            />
          </div>
        </>
      )}
      {/* id="1186:38154" */}
      {`${state}` === `Listening` && `${who}` === `Interviewee` && (
        <>
          {/* name="state=Listening, who=Interviewee" id="1186:38154" type="COMPONENT" */}
          <div
            style={{
              ...{ width: "60px", height: "60px", flexShrink: "0" },
              ...style,
            }}
          >
            {/* name="Ellipse 94" id="1186:38155" type="ELLIPSE" */}
            <QodeSvg118638155
              style={{
                ...{
                  width: "53.407px",
                  height: "53.407px",
                  flexShrink: "0",
                  fill: "#FFF",
                  strokeWidth: "1px",
                  stroke: "var(--border-border-neutral-30, #d5d5d5)",
                  boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.25) inset",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="microphone" id="1186:38162" type="INSTANCE" */}
            <QodeCustom107148975
              style={{
                ...{ width: "24px", height: "24px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
