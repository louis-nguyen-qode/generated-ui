/* name="avatar" id="43:25732" type="INSTANCE" */
import { Icon } from "@/app/designSystem/icon";
import QodeSvg562960_OpenToWork from "@designSystem/icon/svg/QodeSvg562960";
import QodeSvg562969 from "@designSystem/icon/svg/QodeSvg562969";
import React, { CSSProperties } from "react";

export interface QodeCustom562954Props {
  opentowork?: boolean;
  badge?: boolean;
  img?: string;
  icon?: boolean;
  type?: "Round" | "Square";
  state?: "Default" | "Hover";
  width?: number;
  height?: number;
}

export const QodeCustom562954: React.FC<
  QodeCustom562954Props & { style?: CSSProperties }
> = ({
  opentowork = true,
  badge = false,
  img,
  type = "Round",
  state = "Default",
  width,
  height,
  style,
}) => {
  const isRound = type === "Round";
  const isSquare = type === "Square";
  const isHover = state === "Hover";

  return (
    <div
      style={{
        display: "flex",
        width: width
          ? width + "px"
          : "var(--line-height-lineheighheading3, 32px)",
        height: height
          ? height + "px"
          : "var(--line-height-lineheighheading3, 32px)",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "var(--font-size-large, 16px)",
        flexShrink: 0,
        borderRadius: isRound
          ? "var(--style-radius-borderround, 999px)"
          : "var(--style-radius-borderradius, 8px)",
        background: "var(--color-success-colorsuccesshover, #a3c73e)",
        position: "relative",
        ...style,
      }}
    >
      {img ? (
        <div
          style={{
            display: "flex",
            width: width
              ? width + "px"
              : "var(--line-height-lineheighheading3, 32px)",
            height: height
              ? height + "px"
              : "var(--line-height-lineheighheading3, 32px)",
            padding: "var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            position: "absolute",
            borderRadius: isRound
              ? "var(--style-radius-borderround, 999px)"
              : "var(--style-radius-borderradius, 8px)",
            background: `url(${img}) lightgray 50% / cover no-repeat`,
          }}
        />
      ) : (
        <Icon.QodeUserLarge
          style={{
            width: width
              ? width / 2 + "px"
              : "var(--line-height-lineheighheading3, 32px)",
            height: height
              ? height / 2 + "px"
              : "var(--line-height-lineheighheading3, 32px)",
            position: "absolute",
            color: "white",
          }}
        />
      )}

      {/* {badge && (
        <QodeCustom562939
          style={{
            display: "flex",
            width: "6px",
            height: "6px",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            right: "1px",
            bottom: "1px",
            borderRadius: "var(--style-radius-borderradiuslg, 8px)",
            border:
              "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
            background: "var(--color-error-colorerror, #ff6542)",
          }}
          count="21"
          type="dot"
        />
      )} */}

      {opentowork && (
        <div
          style={{
            width: width
              ? width + "px"
              : "var(--line-height-lineheighheading3, 32px)",
            height: height
              ? height + "px"
              : "var(--line-height-lineheighheading3, 32px)",
            position: "absolute",
          }}
        >
          <QodeSvg562960_OpenToWork
            style={{
              width: width
                ? width + "px"
                : "var(--line-height-lineheighheading3, 32px)",
              height: height
                ? height + "px"
                : "var(--line-height-lineheighheading3, 32px)",
            }}
          />
        </div>
      )}

      {isHover && (
        <div
          style={{
            width: width
              ? width + "px"
              : "var(--line-height-lineheighheading3, 32px)",
            height: height
              ? height + "px"
              : "var(--line-height-lineheighheading3, 32px)",
            position: "absolute",
          }}
        >
          {isRound && (
            <QodeSvg562969
              style={{
                width: width
                  ? width + "px"
                  : "var(--line-height-lineheighheading3, 32px)",
                height: height
                  ? height + "px"
                  : "var(--line-height-lineheighheading3, 32px)",
              }}
            />
          )}
          {isSquare && (
            <span
              style={{
                width: width
                  ? width + "px"
                  : "var(--line-height-lineheighheading3, 32px)",
                height: height
                  ? height + "px"
                  : "var(--line-height-lineheighheading3, 32px)",
                position: "absolute",
                borderRadius: "10px",
                border:
                  "var(--style-line-width-linewidth, 2px) solid var(--color-primary-colorprimaryhover, #5783c9)",
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};
