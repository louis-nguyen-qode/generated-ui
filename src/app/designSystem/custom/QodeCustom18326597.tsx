// id="183:26597"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom18326597Props {
  title?: string
  state?: "default" | "disabled" | "filled" | "focused" | "hover" | "typing"
  size?: "default" | "large" | "small"
  hide?: "false" | "true"
}

export const QodeCustom18326597: React.FC<
  QodeCustom18326597Props & { style?: CSSProperties }
> = ({
  title = "Password",
  state = "default",
  size = "default",
  hide = "false",
  ...rest
}) => {
  return (
    <>
      {/* name="Input__Password" id="183:26597" type="COMPONENT_SET" */}
      {/* id="183:26598" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${hide}` === `false` && (
          <>
            {/* name="state=default, size=default, hide=false" id="183:26598" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:26603" type="INSTANCE" */}
              <Icon.QodeEye
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:26604" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${hide}` === `false` && (
          <>
            {/* name="state=hover, size=default, hide=false" id="183:26604" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:26609" type="INSTANCE" */}
              <Icon.QodeEye
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:26610" */}
      {`${state}` === `focused` &&
        `${size}` === `default` &&
        `${hide}` === `false` && (
          <>
            {/* name="state=focused, size=default, hide=false" id="183:26610" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:26615" type="INSTANCE" */}
              <Icon.QodeEye
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="183:26616" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=183:26616 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="183:26617" */}
      {`${state}` === `typing` &&
        `${size}` === `default` &&
        `${hide}` === `false` && (
          <>
            {/* name="state=typing, size=default, hide=false" id="183:26617" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:26622" type="INSTANCE" */}
              <Icon.QodeEye
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="183:26623" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=183:26623 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="183:26624" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${hide}` === `false` && (
          <>
            {/* name="state=filled, size=default, hide=false" id="183:26624" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:26629" type="INSTANCE" */}
              <Icon.QodeEye
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:26630" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${hide}` === `false` && (
          <>
            {/* name="state=disabled, size=default, hide=false" id="183:26630" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:26635" type="INSTANCE" */}
              <Icon.QodeEye
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:26768" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${hide}` === `false` && (
          <>
            {/* name="state=default, size=large, hide=false" id="183:26768" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:26773" type="INSTANCE" */}
              <Icon.QodeEye
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:26774" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${hide}` === `false` && (
          <>
            {/* name="state=hover, size=large, hide=false" id="183:26774" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:26779" type="INSTANCE" */}
              <Icon.QodeEye
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:26780" */}
      {`${state}` === `focused` &&
        `${size}` === `large` &&
        `${hide}` === `false` && (
          <>
            {/* name="state=focused, size=large, hide=false" id="183:26780" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:26785" type="INSTANCE" */}
              <Icon.QodeEye
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="183:26786" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=183:26786 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="183:26787" */}
      {`${state}` === `typing` &&
        `${size}` === `large` &&
        `${hide}` === `false` && (
          <>
            {/* name="state=typing, size=large, hide=false" id="183:26787" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:26792" type="INSTANCE" */}
              <Icon.QodeEye
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="183:26793" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=183:26793 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="183:26794" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${hide}` === `false` && (
          <>
            {/* name="state=filled, size=large, hide=false" id="183:26794" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:26799" type="INSTANCE" */}
              <Icon.QodeEye
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:26800" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${hide}` === `false` && (
          <>
            {/* name="state=disabled, size=large, hide=false" id="183:26800" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:26805" type="INSTANCE" */}
              <Icon.QodeEye
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:26938" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${hide}` === `false` && (
          <>
            {/* name="state=default, size=small, hide=false" id="183:26938" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:26943" type="INSTANCE" */}
              <Icon.QodeEye
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:26944" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${hide}` === `false` && (
          <>
            {/* name="state=hover, size=small, hide=false" id="183:26944" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:26949" type="INSTANCE" */}
              <Icon.QodeEye
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:26950" */}
      {`${state}` === `focused` &&
        `${size}` === `small` &&
        `${hide}` === `false` && (
          <>
            {/* name="state=focused, size=small, hide=false" id="183:26950" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:26955" type="INSTANCE" */}
              <Icon.QodeEye
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="183:26956" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=183:26956 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="183:26957" */}
      {`${state}` === `typing` &&
        `${size}` === `small` &&
        `${hide}` === `false` && (
          <>
            {/* name="state=typing, size=small, hide=false" id="183:26957" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:26962" type="INSTANCE" */}
              <Icon.QodeEye
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="183:26963" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=183:26963 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="183:26964" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${hide}` === `false` && (
          <>
            {/* name="state=filled, size=small, hide=false" id="183:26964" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:26969" type="INSTANCE" */}
              <Icon.QodeEye
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:26970" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${hide}` === `false` && (
          <>
            {/* name="state=disabled, size=small, hide=false" id="183:26970" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:26975" type="INSTANCE" */}
              <Icon.QodeEye
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:27378" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${hide}` === `true` && (
          <>
            {/* name="state=default, size=default, hide=true" id="183:27378" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:27380" type="INSTANCE" */}
              <Icon.QodeEyeSlash
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:27381" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${hide}` === `true` && (
          <>
            {/* name="state=hover, size=default, hide=true" id="183:27381" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:27383" type="INSTANCE" */}
              <Icon.QodeEyeSlash
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:27384" */}
      {`${state}` === `focused` &&
        `${size}` === `default` &&
        `${hide}` === `true` && (
          <>
            {/* name="state=focused, size=default, hide=true" id="183:27384" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:27386" type="INSTANCE" */}
              <Icon.QodeEyeSlash
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="183:27387" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=183:27387 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="183:27388" */}
      {`${state}` === `typing` &&
        `${size}` === `default` &&
        `${hide}` === `true` && (
          <>
            {/* name="state=typing, size=default, hide=true" id="183:27388" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`************`}</span>
              {/* name="Icon Right" id="183:27390" type="INSTANCE" */}
              <Icon.QodeEyeSlash
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="183:27391" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=183:27391 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="183:27392" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${hide}` === `true` && (
          <>
            {/* name="state=filled, size=default, hide=true" id="183:27392" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`************`}</span>
              {/* name="Icon Right" id="183:27394" type="INSTANCE" */}
              <Icon.QodeEyeSlash
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:27395" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${hide}` === `true` && (
          <>
            {/* name="state=disabled, size=default, hide=true" id="183:27395" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`************`}</span>
              {/* name="Icon Right" id="183:27397" type="INSTANCE" */}
              <Icon.QodeEyeSlash
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:27398" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${hide}` === `true` && (
          <>
            {/* name="state=default, size=large, hide=true" id="183:27398" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:27400" type="INSTANCE" */}
              <Icon.QodeEyeSlash
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:27401" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${hide}` === `true` && (
          <>
            {/* name="state=hover, size=large, hide=true" id="183:27401" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:27403" type="INSTANCE" */}
              <Icon.QodeEyeSlash
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:27404" */}
      {`${state}` === `focused` &&
        `${size}` === `large` &&
        `${hide}` === `true` && (
          <>
            {/* name="state=focused, size=large, hide=true" id="183:27404" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:27406" type="INSTANCE" */}
              <Icon.QodeEyeSlash
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="183:27407" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=183:27407 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="183:27408" */}
      {`${state}` === `typing` &&
        `${size}` === `large` &&
        `${hide}` === `true` && (
          <>
            {/* name="state=typing, size=large, hide=true" id="183:27408" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`************`}</span>
              {/* name="Icon Right" id="183:27410" type="INSTANCE" */}
              <Icon.QodeEyeSlash
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="183:27411" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=183:27411 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="183:27412" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${hide}` === `true` && (
          <>
            {/* name="state=filled, size=large, hide=true" id="183:27412" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`************`}</span>
              {/* name="Icon Right" id="183:27414" type="INSTANCE" */}
              <Icon.QodeEyeSlash
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:27415" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${hide}` === `true` && (
          <>
            {/* name="state=disabled, size=large, hide=true" id="183:27415" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`************`}</span>
              {/* name="Icon Right" id="183:27417" type="INSTANCE" */}
              <Icon.QodeEyeSlash
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:27418" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${hide}` === `true` && (
          <>
            {/* name="state=default, size=small, hide=true" id="183:27418" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:27420" type="INSTANCE" */}
              <Icon.QodeEyeSlash
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:27421" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${hide}` === `true` && (
          <>
            {/* name="state=hover, size=small, hide=true" id="183:27421" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:27423" type="INSTANCE" */}
              <Icon.QodeEyeSlash
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:27424" */}
      {`${state}` === `focused` &&
        `${size}` === `small` &&
        `${hide}` === `true` && (
          <>
            {/* name="state=focused, size=small, hide=true" id="183:27424" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Password`}</span>
              {/* name="Icon Right" id="183:27426" type="INSTANCE" */}
              <Icon.QodeEyeSlash
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="183:27427" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=183:27427 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="183:27428" */}
      {`${state}` === `typing` &&
        `${size}` === `small` &&
        `${hide}` === `true` && (
          <>
            {/* name="state=typing, size=small, hide=true" id="183:27428" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`************`}</span>
              {/* name="Icon Right" id="183:27430" type="INSTANCE" */}
              <Icon.QodeEyeSlash
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="183:27431" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=183:27431 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="183:27432" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${hide}` === `true` && (
          <>
            {/* name="state=filled, size=small, hide=true" id="183:27432" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`************`}</span>
              {/* name="Icon Right" id="183:27434" type="INSTANCE" */}
              <Icon.QodeEyeSlash
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="183:27435" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${hide}` === `true` && (
          <>
            {/* name="state=disabled, size=small, hide=true" id="183:27435" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`************`}</span>
              {/* name="Icon Right" id="183:27437" type="INSTANCE" */}
              <Icon.QodeEyeSlash
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
    </>
  )
}
