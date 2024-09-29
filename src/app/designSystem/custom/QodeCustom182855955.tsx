// id="1828:55955"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom63530779 } from "@designSystem/custom/QodeCustom63530779"
import { QodeCustom145945943 } from "@designSystem/custom/QodeCustom145945943"

export interface QodeCustom182855955Props {}

export const QodeCustom182855955: React.FC<
  QodeCustom182855955Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Interviewing/Video" id="1828:55955" type="COMPONENT" */}
      <div
        style={{
          ...{
            width: "1108px",
            height: "648px",
            background: "linear-gradient(180deg, #FFF 50.58%, #C8E7F1 100%)",
          },
          ...style,
        }}
      >
        {/* name="logo" id="1828:55828" type="INSTANCE" */}
        <QodeCustom63530779
          style={{
            ...{ width: "117px", height: "39.398px", flexShrink: "0" },
            ...{},
          }}
          {...{
            type: "Default",
            darkmode: "yes",
            orientation: "landscape",
            wordmark: "yes",
          }}
        />
        {/* name="image-removebg-preview 1" id="1828:55829" type="RECTANGLE" */}
        <Flex
          style={{
            ...{
              width: "1108px",
              height: "648px",
              flexShrink: "0",
              background:
                "url(<path-to-image>) lightgray 50% / cover no-repeat",
            },
            ...{},
          }}
        >
          <></>
        </Flex>
        {/* name="Inverview/Speaker box (overlay mode)" id="1828:55944" type="INSTANCE" */}
        <QodeCustom145945943
          style={{
            ...{
              width: "225px",
              height: "125px",
              flexShrink: "0",
              borderRadius: "var(--border-radius-large, 12px)",
              border: "2px solid #81E8FF",
              background: "#282828",
            },
            ...{},
          }}
          {...{ property_1: "Speak 1" }}
        />
      </div>
    </>
  )
}
