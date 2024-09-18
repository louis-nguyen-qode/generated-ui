// id="5610:44930"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg561044931 from "@designSystem/icon/svg/QodeSvg561044931"
import QodeSvg561044933 from "@designSystem/icon/svg/QodeSvg561044933"
import QodeSvg561044935 from "@designSystem/icon/svg/QodeSvg561044935"
import QodeSvg561044937 from "@designSystem/icon/svg/QodeSvg561044937"
import QodeSvg561044940 from "@designSystem/icon/svg/QodeSvg561044940"
import QodeSvg561044943 from "@designSystem/icon/svg/QodeSvg561044943"
import QodeSvg561044946 from "@designSystem/icon/svg/QodeSvg561044946"

export interface QodeCustom561044930Props {
  state?:
    | "Default"
    | "Hover"
    | "Focus"
    | "Selected"
    | "Intermediate"
    | "Disabled"
    | "Disabled selected"
}

export const QodeCustom561044930: React.FC<
  QodeCustom561044930Props & { style?: CSSProperties }
> = ({ state = "Default", style, ...rest }) => {
  return (
    <>
      {/* name="Icon/checkbox" id="5610:44930" type="COMPONENT_SET" */}
      {/* id="5610:44931" */}
      {`${state}` === `Default` && (
        <>
          {/* name="State=Default" id="5610:44931" type="COMPONENT" */}
          <QodeSvg561044931
            style={{
              ...{ width: "20px", height: "20px", flexShrink: "0" },
              ...style,
            }}
            {...{}}
          />
        </>
      )}
      {/* id="5610:44933" */}
      {`${state}` === `Hover` && (
        <>
          {/* name="State=Hover" id="5610:44933" type="COMPONENT" */}
          <QodeSvg561044933
            style={{
              ...{ width: "20px", height: "20px", flexShrink: "0" },
              ...style,
            }}
            {...{}}
          />
        </>
      )}
      {/* id="5610:44935" */}
      {`${state}` === `Focus` && (
        <>
          {/* name="State=Focus" id="5610:44935" type="COMPONENT" */}
          <QodeSvg561044935
            style={{
              ...{ width: "20px", height: "20px", flexShrink: "0" },
              ...style,
            }}
            {...{}}
          />
        </>
      )}
      {/* id="5610:44937" */}
      {`${state}` === `Selected` && (
        <>
          {/* name="State=Selected" id="5610:44937" type="COMPONENT" */}
          <QodeSvg561044937
            style={{
              ...{ width: "20px", height: "20px", flexShrink: "0" },
              ...style,
            }}
            {...{}}
          />
        </>
      )}
      {/* id="5610:44940" */}
      {`${state}` === `Disabled selected` && (
        <>
          {/* name="State=Disabled selected" id="5610:44940" type="COMPONENT" */}
          <QodeSvg561044940
            style={{
              ...{ width: "20px", height: "20px", flexShrink: "0" },
              ...style,
            }}
            {...{}}
          />
        </>
      )}
      {/* id="5610:44943" */}
      {`${state}` === `Intermediate` && (
        <>
          {/* name="State=Intermediate" id="5610:44943" type="COMPONENT" */}
          <QodeSvg561044943
            style={{
              ...{ width: "20px", height: "20px", flexShrink: "0" },
              ...style,
            }}
            {...{}}
          />
        </>
      )}
      {/* id="5610:44946" */}
      {`${state}` === `Disabled` && (
        <>
          {/* name="State=Disabled" id="5610:44946" type="COMPONENT" */}
          <QodeSvg561044946
            style={{
              ...{ width: "20px", height: "20px", flexShrink: "0" },
              ...style,
            }}
            {...{}}
          />
        </>
      )}
    </>
  )
}
