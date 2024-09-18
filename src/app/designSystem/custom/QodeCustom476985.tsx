// id="47:6985"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg476986 from "@designSystem/icon/svg/QodeSvg476986"
import QodeSvg476987 from "@designSystem/icon/svg/QodeSvg476987"
import QodeSvg476988 from "@designSystem/icon/svg/QodeSvg476988"
import QodeSvg476989 from "@designSystem/icon/svg/QodeSvg476989"
import QodeSvg476990 from "@designSystem/icon/svg/QodeSvg476990"
import QodeSvg476991 from "@designSystem/icon/svg/QodeSvg476991"
import QodeSvg476992 from "@designSystem/icon/svg/QodeSvg476992"

export interface QodeCustom476985Props {
  state?:
    | "Default"
    | "Hover"
    | "Focus"
    | "Selected"
    | "Intermediate"
    | "Disabled"
    | "Disabled selected"
}

export const QodeCustom476985: React.FC<
  QodeCustom476985Props & { style?: CSSProperties }
> = ({ state = "Default", style, ...rest }) => {
  return (
    <>
      {/* name="Icon/checkbox" id="47:6985" type="COMPONENT_SET" */}
      {/* id="47:6986" */}
      {`${state}` === `Default` && (
        <>
          {/* name="State=Default" id="47:6986" type="COMPONENT" */}
          <QodeSvg476986
            style={{
              ...{ width: "20px", height: "20px", flexShrink: "0" },
              ...style,
            }}
            {...{}}
          />
        </>
      )}
      {/* id="47:6987" */}
      {`${state}` === `Hover` && (
        <>
          {/* name="State=Hover" id="47:6987" type="COMPONENT" */}
          <QodeSvg476987
            style={{
              ...{ width: "20px", height: "20px", flexShrink: "0" },
              ...style,
            }}
            {...{}}
          />
        </>
      )}
      {/* id="47:6988" */}
      {`${state}` === `Focus` && (
        <>
          {/* name="State=Focus" id="47:6988" type="COMPONENT" */}
          <QodeSvg476988
            style={{
              ...{ width: "20px", height: "20px", flexShrink: "0" },
              ...style,
            }}
            {...{}}
          />
        </>
      )}
      {/* id="47:6989" */}
      {`${state}` === `Selected` && (
        <>
          {/* name="State=Selected" id="47:6989" type="COMPONENT" */}
          <QodeSvg476989
            style={{
              ...{ width: "20px", height: "20px", flexShrink: "0" },
              ...style,
            }}
            {...{}}
          />
        </>
      )}
      {/* id="47:6990" */}
      {`${state}` === `Disabled selected` && (
        <>
          {/* name="State=Disabled selected" id="47:6990" type="COMPONENT" */}
          <QodeSvg476990
            style={{
              ...{ width: "20px", height: "20px", flexShrink: "0" },
              ...style,
            }}
            {...{}}
          />
        </>
      )}
      {/* id="47:6991" */}
      {`${state}` === `Intermediate` && (
        <>
          {/* name="State=Intermediate" id="47:6991" type="COMPONENT" */}
          <QodeSvg476991
            style={{
              ...{ width: "20px", height: "20px", flexShrink: "0" },
              ...style,
            }}
            {...{}}
          />
        </>
      )}
      {/* id="47:6992" */}
      {`${state}` === `Disabled` && (
        <>
          {/* name="State=Disabled" id="47:6992" type="COMPONENT" */}
          <QodeSvg476992
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
