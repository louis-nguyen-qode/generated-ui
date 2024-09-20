// id="5629:24"
import React, { CSSProperties } from "react";

import QodeSvg562925_UserProfile from "@/app/designSystem/icon/svg/QodeSvg562925";

export interface QodeCustom562924_UserProfileProps {}

export const QodeCustom562924_UserProfile: React.FC<
  QodeCustom562924_UserProfileProps & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="user-large" id="5629:24" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.4px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="5629:25" type="VECTOR" */}
        <QodeSvg562925_UserProfile
          style={{
            ...{
              width: style?.width, 
              height: style?.height, 
              flexShrink: "0",
              fill: "var(--color-neutral-text-colortext, rgba(0, 0, 0, 0.88))",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  );
};
