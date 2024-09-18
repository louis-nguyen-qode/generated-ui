// id="170:23962"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom17023962Props {
  title?: string
  state?: "default" | "hover" | "disabled"
  size?: "default" | "large" | "small"
}

export const QodeCustom17023962: React.FC<
  QodeCustom17023962Props & { style?: CSSProperties }
> = ({ title = "Item", state = "default", size = "default", ...rest }) => {
  return (
    <>
      {/* name="Select/Multiple item" id="170:23962" type="COMPONENT_SET" */}
      {/* id="170:23961" */}
      {`${state}` === `default` && `${size}` === `default` && (
        <>
          {/* name="state=default, size=default" id="170:23961" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "0px var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              background: "var(--background-bg-neutral-5, #f8f6f6)",
            }}
          >
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Item`}</span>
            {/* name="Icon" id="170:24061" type="INSTANCE" */}
            <Icon.QodeXmark style={{ width: "12px", height: "12px" }} {...{}} />
          </div>
        </>
      )}
      {/* id="170:24067" */}
      {`${state}` === `hover` && `${size}` === `default` && (
        <>
          {/* name="state=hover, size=default" id="170:24067" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "0px var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              background: "var(--background-bg-neutral-5, #f8f6f6)",
            }}
          >
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Item`}</span>
            {/* name="Icon" id="170:24069" type="INSTANCE" */}
            <Icon.QodeXmark style={{ width: "12px", height: "12px" }} {...{}} />
          </div>
        </>
      )}
      {/* id="170:24063" */}
      {`${state}` === `disabled` && `${size}` === `default` && (
        <>
          {/* name="state=disabled, size=default" id="170:24063" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "0px var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              background: "var(--background-bg-neutral-5, #f8f6f6)",
            }}
          >
            <span
              style={{
                color: "var(--text-text-placeholder, #a7a7a7)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Item`}</span>
          </div>
        </>
      )}
      {/* id="170:24071" */}
      {`${state}` === `default` && `${size}` === `large` && (
        <>
          {/* name="state=default, size=large" id="170:24071" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controlheight, 32px)",
              padding:
                "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              background: "var(--background-bg-neutral-5, #f8f6f6)",
            }}
          >
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px /* 150% */",
              }}
            >{`Item`}</span>
            {/* name="Icon" id="170:24073" type="INSTANCE" */}
            <Icon.QodeXmark style={{ width: "12px", height: "12px" }} {...{}} />
          </div>
        </>
      )}
      {/* id="170:24074" */}
      {`${state}` === `hover` && `${size}` === `large` && (
        <>
          {/* name="state=hover, size=large" id="170:24074" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controlheight, 32px)",
              padding:
                "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              background: "var(--background-bg-neutral-5, #f8f6f6)",
            }}
          >
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px /* 150% */",
              }}
            >{`Item`}</span>
            {/* name="Icon" id="170:24076" type="INSTANCE" */}
            <Icon.QodeXmark style={{ width: "12px", height: "12px" }} {...{}} />
          </div>
        </>
      )}
      {/* id="170:24077" */}
      {`${state}` === `disabled` && `${size}` === `large` && (
        <>
          {/* name="state=disabled, size=large" id="170:24077" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controlheight, 32px)",
              padding:
                "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              background: "var(--background-bg-neutral-5, #f8f6f6)",
            }}
          >
            <span
              style={{
                color: "var(--text-text-placeholder, #a7a7a7)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px /* 150% */",
              }}
            >{`Item`}</span>
          </div>
        </>
      )}
      {/* id="170:24081" */}
      {`${state}` === `default` && `${size}` === `small` && (
        <>
          {/* name="state=default, size=small" id="170:24081" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controheightxs, 16px)",
              padding: "0px var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              background: "var(--background-bg-neutral-5, #f8f6f6)",
            }}
          >
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Item`}</span>
            {/* name="Icon" id="170:24083" type="INSTANCE" */}
            <Icon.QodeXmark style={{ width: "12px", height: "12px" }} {...{}} />
          </div>
        </>
      )}
      {/* id="170:24084" */}
      {`${state}` === `hover` && `${size}` === `small` && (
        <>
          {/* name="state=hover, size=small" id="170:24084" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controheightxs, 16px)",
              padding: "0px var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              background: "var(--background-bg-neutral-5, #f8f6f6)",
            }}
          >
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Item`}</span>
            {/* name="Icon" id="170:24086" type="INSTANCE" */}
            <Icon.QodeXmark style={{ width: "12px", height: "12px" }} {...{}} />
          </div>
        </>
      )}
      {/* id="170:24087" */}
      {`${state}` === `disabled` && `${size}` === `small` && (
        <>
          {/* name="state=disabled, size=small" id="170:24087" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controheightxs, 16px)",
              padding: "0px var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              background: "var(--background-bg-neutral-5, #f8f6f6)",
            }}
          >
            <span
              style={{
                color: "var(--text-text-placeholder, #a7a7a7)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Item`}</span>
          </div>
        </>
      )}
    </>
  )
}
