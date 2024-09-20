import React from "react";
import { Tag, TagProps } from "antd";

export enum QODE_TAG_TYPE {
  GRAY = "GRAY",
  PRIMARY = "PRIMARY",
}

export interface QodeTagProps
  extends Omit<
    TagProps,
    "rIcon" | "showRIcon" | "color" | "state" | "size" | "rounded"
  > {
  rIcon?: React.ReactNode;
  showRIcon?: boolean;
  color?:
    | "primary"
    | "neutral"
    | "magenta"
    | "golden purple"
    | "cyan"
    | "polar green"
    | "lime"
    | "calendula gold";
  state?: "default" | "hover";
  size?: "Default" | "rouned" | "small";
  rounded?: "False" | "True";
  text?: string;
  tagType?: QODE_TAG_TYPE;
}

export const QodeTag: React.FC<QodeTagProps> = ({
  rIcon = undefined,
  showRIcon = true,
  color = "magenta",
  state = "default",
  size = "Default",
  rounded = "False",
  style,
  text,
  children,
  tagType,
  ...rest
}) => {
  let tagStyle: React.CSSProperties = {};

  switch (tagType) {
    case QODE_TAG_TYPE.PRIMARY:
      tagStyle = {
        border: "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
        background: "var(--primary-primary-10, #d6eeff)",
      };
      break;
    case QODE_TAG_TYPE.GRAY:
      tagStyle = {
        border: "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
        background: "var(--neutral-gray-5, #f8f6f6)",
      };
      break;
    default:
      break;
  }

  return (
    <Tag
      // icon={rIcon}
      color={color}
      itemType={state}
      style={{ ...style, ...tagStyle }}
      {...rest}
    >
      {children || (
        <span
          style={{
            color: "var(--text-text-neutral-50, #1D1D1D)",
            fontFamily: "var(--family-family, \"SF Pro Display\")",
            fontSize: "var(--size-base, 14px)",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
          }}
        >
          {text}
        </span>
      )}
    </Tag>
  );
};
