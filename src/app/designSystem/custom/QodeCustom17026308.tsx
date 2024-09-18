// id="170:26308"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom17026308Props {
  active?: "false" | "true"
  size?: "default" | "large" | "small"
}

export const QodeCustom17026308: React.FC<
  QodeCustom17026308Props & { style?: CSSProperties }
> = ({ active = "false", size = "default", ...rest }) => {
  return (
    <>
      {/* name="Select" id="170:26308" type="COMPONENT_SET" */}
      {/* id="170:26362" */}
      {`${active}` === `false` && `${size}` === `default` && (
        <>
          {/* name="active=false, size=default" id="170:26362" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "320px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--size-padding-paddingxxs, 4px)",
              borderRadius: "var(--border-radius-base, 8px)",
              border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
            }}
          >
            {/* name="🧬 input" id="170:26363" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                alignSelf: "stretch",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background: "var(--neutral-white, #fff)",
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
              >{`Select`}</span>
              {/* name="Icon" id="I170:26363;170:24186" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="170:26365" */}
      {`${active}` === `false` && `${size}` === `large` && (
        <>
          {/* name="active=false, size=large" id="170:26365" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "320px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--size-padding-paddingxxs, 4px)",
              borderRadius: "var(--border-radius-base, 8px)",
              border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
            }}
          >
            {/* name="🧬 input" id="170:26366" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                alignSelf: "stretch",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background: "var(--neutral-white, #fff)",
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
              >{`Select`}</span>
              {/* name="Icon" id="I170:26366;170:24249" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="170:26368" */}
      {`${active}` === `false` && `${size}` === `small` && (
        <>
          {/* name="active=false, size=small" id="170:26368" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "320px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--size-padding-paddingxxs, 4px)",
              borderRadius: "var(--border-radius-base, 8px)",
              border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
            }}
          >
            {/* name="🧬 input" id="170:26369" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                alignSelf: "stretch",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background: "var(--neutral-white, #fff)",
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
              >{`Select`}</span>
              {/* name="Icon" id="I170:26369;170:24253" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="170:26307" */}
      {`${active}` === `true` && `${size}` === `default` && (
        <>
          {/* name="active=true, size=default" id="170:26307" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "320px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--size-padding-paddingxxs, 4px)",
            }}
          >
            {/* name="🧬 input" id="170:26297" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="I170:26297;170:24269" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              {/* name="Focus ring" id="I170:26297;170:24292" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-60, #464646)",
                }}
              >
                {/* name="Focus ring" id=I170:26297;170:24292 type=RECTANGLE */}
                <></>
              </Flex>
            </Flex>
            {/* name="🧬 dropdown menu" id="170:26301" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                alignItems: "flex-start",
                alignSelf: "stretch",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              }}
            >
              {/* name="🧬 item 1" id="I170:26301;170:23924" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
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
                >{`Select menu item`}</span>
              </Flex>
              {/* name="🧬 item 2" id="I170:26301;170:23925" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
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
                >{`Select menu item`}</span>
              </Flex>
              {/* name="🧬 item 3" id="I170:26301;170:23926" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
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
                >{`Select menu item`}</span>
              </Flex>
              {/* name="🧬 item 4" id="I170:26301;170:23930" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
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
                >{`Select menu item`}</span>
              </Flex>
            </Flex>
          </div>
        </>
      )}
      {/* id="170:26309" */}
      {`${active}` === `true` && `${size}` === `large` && (
        <>
          {/* name="active=true, size=large" id="170:26309" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "320px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--size-padding-paddingxxs, 4px)",
            }}
          >
            {/* name="🧬 input" id="170:26310" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="I170:26310;170:24272" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px" }}
                {...{}}
              />
              {/* name="Focus ring" id="I170:26310;170:24293" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-60, #464646)",
                }}
              >
                {/* name="Focus ring" id=I170:26310;170:24293 type=RECTANGLE */}
                <></>
              </Flex>
            </Flex>
            {/* name="🧬 dropdown menu" id="170:26311" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                alignItems: "flex-start",
                alignSelf: "stretch",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              }}
            >
              {/* name="🧬 item 1" id="I170:26311;170:23924" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
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
                >{`Select menu item`}</span>
              </Flex>
              {/* name="🧬 item 2" id="I170:26311;170:23925" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
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
                >{`Select menu item`}</span>
              </Flex>
              {/* name="🧬 item 3" id="I170:26311;170:23926" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
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
                >{`Select menu item`}</span>
              </Flex>
              {/* name="🧬 item 4" id="I170:26311;170:23930" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
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
                >{`Select menu item`}</span>
              </Flex>
            </Flex>
          </div>
        </>
      )}
      {/* id="170:26319" */}
      {`${active}` === `true` && `${size}` === `small` && (
        <>
          {/* name="active=true, size=small" id="170:26319" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "320px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--size-padding-paddingxxs, 4px)",
            }}
          >
            {/* name="🧬 input" id="170:26320" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="I170:26320;170:24275" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              {/* name="Focus ring" id="I170:26320;170:24294" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-60, #464646)",
                }}
              >
                {/* name="Focus ring" id=I170:26320;170:24294 type=RECTANGLE */}
                <></>
              </Flex>
            </Flex>
            {/* name="🧬 dropdown menu" id="170:26321" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                alignItems: "flex-start",
                alignSelf: "stretch",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              }}
            >
              {/* name="🧬 item 1" id="I170:26321;170:23924" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
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
                >{`Select menu item`}</span>
              </Flex>
              {/* name="🧬 item 2" id="I170:26321;170:23925" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
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
                >{`Select menu item`}</span>
              </Flex>
              {/* name="🧬 item 3" id="I170:26321;170:23926" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
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
                >{`Select menu item`}</span>
              </Flex>
              {/* name="🧬 item 4" id="I170:26321;170:23930" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
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
                >{`Select menu item`}</span>
              </Flex>
            </Flex>
          </div>
        </>
      )}
    </>
  )
}
