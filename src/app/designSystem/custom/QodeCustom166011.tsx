// id="16:6011"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg166012 from "@designSystem/icon/svg/QodeSvg166012"
import QodeSvg166014 from "@designSystem/icon/svg/QodeSvg166014"
import QodeSvg166016 from "@designSystem/icon/svg/QodeSvg166016"
import QodeSvg166018 from "@designSystem/icon/svg/QodeSvg166018"
import QodeSvg166020 from "@designSystem/icon/svg/QodeSvg166020"
import QodeSvg166022 from "@designSystem/icon/svg/QodeSvg166022"
import QodeSvg166024 from "@designSystem/icon/svg/QodeSvg166024"
import QodeSvg166026 from "@designSystem/icon/svg/QodeSvg166026"

export interface QodeCustom166011Props {
  direction?: "horizontal" | "vertical"
  _style?: "bold" | "default"
  state?: "active" | "waiting"
}

export const QodeCustom166011: React.FC<
  QodeCustom166011Props & { style?: CSSProperties }
> = ({
  direction = "horizontal",
  _style = "default",
  state = "active",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name=".steps__item_tail" id="16:6011" type="COMPONENT_SET" */}
      {/* id="16:6012" */}
      {`${direction}` === `horizontal` &&
        `${_style}` === `default` &&
        `${state}` === `active` && (
          <>
            {/* name="direction=horizontal, style=default, state=active" id="16:6012" type="COMPONENT" */}
            <QodeSvg166012
              style={{
                ...{ width: "160px", height: "1px", flexShrink: "0" },
                ...style,
              }}
              {...{}}
            />
          </>
        )}
      {/* id="16:6014" */}
      {`${direction}` === `horizontal` &&
        `${_style}` === `bold` &&
        `${state}` === `active` && (
          <>
            {/* name="direction=horizontal, style=bold, state=active" id="16:6014" type="COMPONENT" */}
            <QodeSvg166014
              style={{
                ...{ width: "160px", height: "3px", flexShrink: "0" },
                ...style,
              }}
              {...{}}
            />
          </>
        )}
      {/* id="16:6016" */}
      {`${direction}` === `horizontal` &&
        `${_style}` === `default` &&
        `${state}` === `waiting` && (
          <>
            {/* name="direction=horizontal, style=default, state=waiting" id="16:6016" type="COMPONENT" */}
            <QodeSvg166016
              style={{
                ...{ width: "160px", height: "1px", flexShrink: "0" },
                ...style,
              }}
              {...{}}
            />
          </>
        )}
      {/* id="16:6018" */}
      {`${direction}` === `horizontal` &&
        `${_style}` === `bold` &&
        `${state}` === `waiting` && (
          <>
            {/* name="direction=horizontal, style=bold, state=waiting" id="16:6018" type="COMPONENT" */}
            <QodeSvg166018
              style={{
                ...{ width: "160px", height: "3px", flexShrink: "0" },
                ...style,
              }}
              {...{}}
            />
          </>
        )}
      {/* id="16:6020" */}
      {`${direction}` === `vertical` &&
        `${_style}` === `default` &&
        `${state}` === `active` && (
          <>
            {/* name="direction=vertical, style=default, state=active" id="16:6020" type="COMPONENT" */}
            <QodeSvg166020
              style={{
                ...{ width: "1px", height: "75px", flexShrink: "0" },
                ...style,
              }}
              {...{}}
            />
          </>
        )}
      {/* id="16:6022" */}
      {`${direction}` === `vertical` &&
        `${_style}` === `bold` &&
        `${state}` === `active` && (
          <>
            {/* name="direction=vertical, style=bold, state=active" id="16:6022" type="COMPONENT" */}
            <QodeSvg166022
              style={{
                ...{ width: "3px", height: "75px", flexShrink: "0" },
                ...style,
              }}
              {...{}}
            />
          </>
        )}
      {/* id="16:6024" */}
      {`${direction}` === `vertical` &&
        `${_style}` === `default` &&
        `${state}` === `waiting` && (
          <>
            {/* name="direction=vertical, style=default, state=waiting" id="16:6024" type="COMPONENT" */}
            <QodeSvg166024
              style={{
                ...{ width: "1px", height: "75px", flexShrink: "0" },
                ...style,
              }}
              {...{}}
            />
          </>
        )}
      {/* id="16:6026" */}
      {`${direction}` === `vertical` &&
        `${_style}` === `bold` &&
        `${state}` === `waiting` && (
          <>
            {/* name="direction=vertical, style=bold, state=waiting" id="16:6026" type="COMPONENT" */}
            <QodeSvg166026
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
