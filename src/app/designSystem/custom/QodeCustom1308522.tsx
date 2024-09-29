// id="130:8522"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg1308523 from "@designSystem/icon/svg/QodeSvg1308523"
import QodeSvg1308524 from "@designSystem/icon/svg/QodeSvg1308524"
import QodeSvg1308525 from "@designSystem/icon/svg/QodeSvg1308525"
import QodeSvg1308526 from "@designSystem/icon/svg/QodeSvg1308526"
import QodeSvg1308527 from "@designSystem/icon/svg/QodeSvg1308527"
import QodeSvg1308528 from "@designSystem/icon/svg/QodeSvg1308528"
import QodeSvg1308529 from "@designSystem/icon/svg/QodeSvg1308529"
import QodeSvg1308530 from "@designSystem/icon/svg/QodeSvg1308530"

export interface QodeCustom1308522Props {
  direction?: "horizontal" | "vertical"
  _style?: "bold" | "default"
  state?: "active" | "waiting"
}

export const QodeCustom1308522: React.FC<
  QodeCustom1308522Props & { style?: CSSProperties }
> = ({
  direction = "horizontal",
  _style = "default",
  state = "active",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name=".steps__item_tail" id="130:8522" type="COMPONENT_SET" */}
      {/* id="130:8523" */}
      {`${direction}` === `horizontal` &&
        `${_style}` === `default` &&
        `${state}` === `active` && (
          <>
            {/* name="direction=horizontal, style=default, state=active" id="130:8523" type="COMPONENT" */}
            <QodeSvg1308523
              style={{
                ...{ width: "160px", height: "1px", flexShrink: "0" },
                ...style,
              }}
              {...{}}
            />
          </>
        )}
      {/* id="130:8524" */}
      {`${direction}` === `horizontal` &&
        `${_style}` === `bold` &&
        `${state}` === `active` && (
          <>
            {/* name="direction=horizontal, style=bold, state=active" id="130:8524" type="COMPONENT" */}
            <QodeSvg1308524
              style={{
                ...{ width: "160px", height: "3px", flexShrink: "0" },
                ...style,
              }}
              {...{}}
            />
          </>
        )}
      {/* id="130:8525" */}
      {`${direction}` === `horizontal` &&
        `${_style}` === `default` &&
        `${state}` === `waiting` && (
          <>
            {/* name="direction=horizontal, style=default, state=waiting" id="130:8525" type="COMPONENT" */}
            <QodeSvg1308525
              style={{
                ...{ width: "160px", height: "1px", flexShrink: "0" },
                ...style,
              }}
              {...{}}
            />
          </>
        )}
      {/* id="130:8526" */}
      {`${direction}` === `horizontal` &&
        `${_style}` === `bold` &&
        `${state}` === `waiting` && (
          <>
            {/* name="direction=horizontal, style=bold, state=waiting" id="130:8526" type="COMPONENT" */}
            <QodeSvg1308526
              style={{
                ...{ width: "160px", height: "3px", flexShrink: "0" },
                ...style,
              }}
              {...{}}
            />
          </>
        )}
      {/* id="130:8527" */}
      {`${direction}` === `vertical` &&
        `${_style}` === `default` &&
        `${state}` === `active` && (
          <>
            {/* name="direction=vertical, style=default, state=active" id="130:8527" type="COMPONENT" */}
            <QodeSvg1308527
              style={{
                ...{ width: "1px", height: "75px", flexShrink: "0" },
                ...style,
              }}
              {...{}}
            />
          </>
        )}
      {/* id="130:8528" */}
      {`${direction}` === `vertical` &&
        `${_style}` === `bold` &&
        `${state}` === `active` && (
          <>
            {/* name="direction=vertical, style=bold, state=active" id="130:8528" type="COMPONENT" */}
            <QodeSvg1308528
              style={{
                ...{ width: "3px", height: "75px", flexShrink: "0" },
                ...style,
              }}
              {...{}}
            />
          </>
        )}
      {/* id="130:8529" */}
      {`${direction}` === `vertical` &&
        `${_style}` === `default` &&
        `${state}` === `waiting` && (
          <>
            {/* name="direction=vertical, style=default, state=waiting" id="130:8529" type="COMPONENT" */}
            <QodeSvg1308529
              style={{
                ...{ width: "1px", height: "75px", flexShrink: "0" },
                ...style,
              }}
              {...{}}
            />
          </>
        )}
      {/* id="130:8530" */}
      {`${direction}` === `vertical` &&
        `${_style}` === `bold` &&
        `${state}` === `waiting` && (
          <>
            {/* name="direction=vertical, style=bold, state=waiting" id="130:8530" type="COMPONENT" */}
            <QodeSvg1308530
              style={{
                ...{ width: "3px", height: "75px", flexShrink: "0" },
                ...style,
              }}
              {...{}}
            />
          </>
        )}
    </>
  )
}
