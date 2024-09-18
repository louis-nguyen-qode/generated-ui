// id="715:30651"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom4325453 } from "@designSystem/custom/QodeCustom4325453"

export interface Qode71530651PageProps {
  style?: CSSProperties
}

export const Qode71530651Page: React.FC<Qode71530651PageProps> = ({
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Profile header states" id="715:30651" type="SECTION" */}
      <div style={{ ...{}, ...style }}>
        {/* name="Profile/Header" id="715:30544" type="INSTANCE" */}
        <QodeCustom4325453
          style={{
            ...{
              display: "flex",
              
              alignItems: "flex-start",
              gap: "24px",
            },
            ...{},
          }}
          {...{ property_1: "Default" }}
        />
        {/* name="Profile/Header" id="715:30545" type="INSTANCE" */}
        <QodeCustom4325453
          style={{
            ...{
              display: "flex",
              
              alignItems: "flex-start",
              gap: "24px",
            },
            ...{},
          }}
          {...{ property_1: "Shortlist" }}
        />
        {/* name="Profile/Header" id="715:30546" type="INSTANCE" */}
        <QodeCustom4325453
          style={{
            ...{
              display: "flex",
              
              alignItems: "flex-start",
              gap: "24px",
            },
            ...{},
          }}
          {...{ property_1: "In shortlisted" }}
        />
        {/* name="Profile/Header" id="715:30547" type="INSTANCE" */}
        <QodeCustom4325453
          style={{
            ...{
              display: "flex",
              
              alignItems: "flex-start",
              gap: "24px",
            },
            ...{},
          }}
          {...{ property_1: "Variant5" }}
        />
      </div>
    </>
  )
}

export default Qode71530651Page
