// id="221:16618"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg22116619 from "@designSystem/icon/svg/QodeSvg22116619"
import QodeSvg22116621 from "@designSystem/icon/svg/QodeSvg22116621"

export interface QodeCustom22116618Props {
  state?: "Default" | "Variant2"
}

export const QodeCustom22116618: React.FC<
  QodeCustom22116618Props & { style?: CSSProperties }
> = ({ state = "Default", ...rest }) => {
  return (
    <>
      {/* name="Mixer/Reset" id="221:16618" type="COMPONENT_SET" */}
      {/* id="221:16619" */}
      {`${state}` === `Default` && (
        <>
          {/* name="State=Default" id="221:16619" type="COMPONENT" */}
          <QodeSvg22116619
            style={{ width: "11px", height: "11px", flexShrink: "0" }}
            {...{}}
          />
        </>
      )}
      {/* id="221:16621" */}
      {`${state}` === `Variant2` && (
        <>
          {/* name="State=Variant2" id="221:16621" type="COMPONENT" */}
          <QodeSvg22116621
            style={{ width: "11px", height: "11px", flexShrink: "0" }}
            {...{}}
          />
        </>
      )}
    </>
  )
}
