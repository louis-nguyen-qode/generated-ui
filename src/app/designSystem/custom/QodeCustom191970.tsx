// id="191:970"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg191969 from "@designSystem/icon/svg/QodeSvg191969"
import QodeSvg191973 from "@designSystem/icon/svg/QodeSvg191973"
import QodeSvg191975 from "@designSystem/icon/svg/QodeSvg191975"
import QodeSvg191977 from "@designSystem/icon/svg/QodeSvg191977"
import QodeSvg191979 from "@designSystem/icon/svg/QodeSvg191979"
import QodeSvg191981 from "@designSystem/icon/svg/QodeSvg191981"
import QodeSvg191983 from "@designSystem/icon/svg/QodeSvg191983"
import QodeSvg191985 from "@designSystem/icon/svg/QodeSvg191985"

export interface QodeCustom191970Props {
  direction?: "horizontal" | "vertical"
  _style?: "bold" | "default"
  state?: "active" | "waiting"
}

export const QodeCustom191970: React.FC<
  QodeCustom191970Props & { style?: CSSProperties }
> = ({
  direction = "horizontal",
  _style = "default",
  state = "active",
  ...rest
}) => {
  return (
    <>
      {/* name=".steps__item_tail" id="191:970" type="COMPONENT_SET" */}
      {/* id="191:969" */}
      {`${direction}` === `horizontal` &&
        `${_style}` === `default` &&
        `${state}` === `active` && (
          <>
            {/* name="direction=horizontal, style=default, state=active" id="191:969" type="COMPONENT" */}
            <QodeSvg191969
              style={{
                width: "160px",
                height: "var(--size-size-size5xs-1px, 1px)",
                flexShrink: "0",
              }}
              {...{}}
            />
          </>
        )}
      {/* id="191:973" */}
      {`${direction}` === `horizontal` &&
        `${_style}` === `bold` &&
        `${state}` === `active` && (
          <>
            {/* name="direction=horizontal, style=bold, state=active" id="191:973" type="COMPONENT" */}
            <QodeSvg191973
              style={{ width: "160px", height: "3px", flexShrink: "0" }}
              {...{}}
            />
          </>
        )}
      {/* id="191:975" */}
      {`${direction}` === `horizontal` &&
        `${_style}` === `default` &&
        `${state}` === `waiting` && (
          <>
            {/* name="direction=horizontal, style=default, state=waiting" id="191:975" type="COMPONENT" */}
            <QodeSvg191975
              style={{
                width: "160px",
                height: "var(--size-size-size5xs-1px, 1px)",
                flexShrink: "0",
              }}
              {...{}}
            />
          </>
        )}
      {/* id="191:977" */}
      {`${direction}` === `horizontal` &&
        `${_style}` === `bold` &&
        `${state}` === `waiting` && (
          <>
            {/* name="direction=horizontal, style=bold, state=waiting" id="191:977" type="COMPONENT" */}
            <QodeSvg191977
              style={{ width: "160px", height: "3px", flexShrink: "0" }}
              {...{}}
            />
          </>
        )}
      {/* id="191:979" */}
      {`${direction}` === `vertical` &&
        `${_style}` === `default` &&
        `${state}` === `active` && (
          <>
            {/* name="direction=vertical, style=default, state=active" id="191:979" type="COMPONENT" */}
            <QodeSvg191979
              style={{
                width: "var(--size-size-size5xs-1px, 1px)",
                height: "75px",
                flexShrink: "0",
              }}
              {...{}}
            />
          </>
        )}
      {/* id="191:981" */}
      {`${direction}` === `vertical` &&
        `${_style}` === `bold` &&
        `${state}` === `active` && (
          <>
            {/* name="direction=vertical, style=bold, state=active" id="191:981" type="COMPONENT" */}
            <QodeSvg191981
              style={{ width: "3px", height: "75px", flexShrink: "0" }}
              {...{}}
            />
          </>
        )}
      {/* id="191:983" */}
      {`${direction}` === `vertical` &&
        `${_style}` === `default` &&
        `${state}` === `waiting` && (
          <>
            {/* name="direction=vertical, style=default, state=waiting" id="191:983" type="COMPONENT" */}
            <QodeSvg191983
              style={{
                width: "var(--size-size-size5xs-1px, 1px)",
                height: "75px",
                flexShrink: "0",
              }}
              {...{}}
            />
          </>
        )}
      {/* id="191:985" */}
      {`${direction}` === `vertical` &&
        `${_style}` === `bold` &&
        `${state}` === `waiting` && (
          <>
            {/* name="direction=vertical, style=bold, state=waiting" id="191:985" type="COMPONENT" */}
            <QodeSvg191985
              style={{ width: "3px", height: "75px", flexShrink: "0" }}
              {...{}}
            />
          </>
        )}
    </>
  )
}
