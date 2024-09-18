// id="2994:1242"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom29941242Props {
  items?: "2" | "3" | "4" | "5" | "6"
  size?: "default" | "large" | "small"
  type?: "Text" | "icon"
}

export const QodeCustom29941242: React.FC<
  QodeCustom29941242Props & { style?: CSSProperties }
> = ({ items = "2", size = "default", type = "Text", ...rest }) => {
  return (
    <>
      {/* name="segmentedVertical" id="2994:1242" type="COMPONENT_SET" */}
      {/* id="2994:1243" */}
      {`${items}` === `2` &&
        `${size}` === `default` &&
        `${type}` === `Text` && (
          <>
            {/* name="items=2, size=default, type=Text" id="2994:1243" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "2px",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "var(--border-radius-small, 4px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              {/* name=".segmented__item" id="2994:1244" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Item`}</span>
              </Flex>
              {/* name=".segmented__item" id="2994:1245" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Item`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2994:1732" */}
      {`${items}` === `2` &&
        `${size}` === `default` &&
        `${type}` === `icon` && (
          <>
            {/* name="items=2, size=default, type=icon" id="2994:1732" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "2px",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "var(--border-radius-small, 4px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              {/* name=".segmented__item" id="2994:1733" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                }}
              >
                {/* name="🎰 icon" id="I2994:1733;202:42572" type="INSTANCE" */}
                <Icon.QodeListTree
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </Flex>
              {/* name=".segmented__item" id="2994:1734" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                {/* name="🎰 icon" id="I2994:1734;202:42596" type="INSTANCE" */}
                <Icon.QodeListTree
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </Flex>
            </div>
          </>
        )}
      {/* id="2994:1246" */}
      {`${items}` === `3` &&
        `${size}` === `default` &&
        `${type}` === `Text` && (
          <>
            {/* name="items=3, size=default, type=Text" id="2994:1246" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "2px",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "var(--border-radius-small, 4px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              {/* name=".segmented__item" id="2994:1247" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Item`}</span>
              </Flex>
              {/* name=".segmented__item" id="2994:1248" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Item`}</span>
              </Flex>
              {/* name=".segmented__item" id="2994:1249" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Item`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2994:1735" */}
      {`${items}` === `3` &&
        `${size}` === `default` &&
        `${type}` === `icon` && (
          <>
            {/* name="items=3, size=default, type=icon" id="2994:1735" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "2px",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "var(--border-radius-small, 4px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              {/* name=".segmented__item" id="2994:1736" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                }}
              >
                {/* name="🎰 icon" id="I2994:1736;202:42572" type="INSTANCE" */}
                <Icon.QodeListTree
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </Flex>
              {/* name=".segmented__item" id="2994:1737" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                {/* name="🎰 icon" id="I2994:1737;202:42596" type="INSTANCE" */}
                <Icon.QodeListTree
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </Flex>
              {/* name=".segmented__item" id="2994:1738" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                {/* name="🎰 icon" id="I2994:1738;202:42596" type="INSTANCE" */}
                <Icon.QodeListTree
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </Flex>
            </div>
          </>
        )}
      {/* id="2994:1250" */}
      {`${items}` === `4` &&
        `${size}` === `default` &&
        `${type}` === `Text` && (
          <>
            {/* name="items=4, size=default, type=Text" id="2994:1250" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "2px",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "var(--border-radius-small, 4px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              {/* name=".segmented__item" id="2994:1251" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Item`}</span>
              </Flex>
              {/* name=".segmented__item" id="2994:1252" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Item`}</span>
              </Flex>
              {/* name=".segmented__item" id="2994:1253" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Item`}</span>
              </Flex>
              {/* name=".segmented__item" id="2994:1254" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Item`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2994:1739" */}
      {`${items}` === `4` &&
        `${size}` === `default` &&
        `${type}` === `icon` && (
          <>
            {/* name="items=4, size=default, type=icon" id="2994:1739" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "2px",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "var(--border-radius-small, 4px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              {/* name=".segmented__item" id="2994:1740" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                }}
              >
                {/* name="🎰 icon" id="I2994:1740;202:42572" type="INSTANCE" */}
                <Icon.QodeListTree
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </Flex>
              {/* name=".segmented__item" id="2994:1741" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                {/* name="🎰 icon" id="I2994:1741;202:42596" type="INSTANCE" */}
                <Icon.QodeListTree
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </Flex>
              {/* name=".segmented__item" id="2994:1742" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                {/* name="🎰 icon" id="I2994:1742;202:42596" type="INSTANCE" */}
                <Icon.QodeListTree
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </Flex>
              {/* name=".segmented__item" id="2994:1743" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                {/* name="🎰 icon" id="I2994:1743;202:42596" type="INSTANCE" */}
                <Icon.QodeListTree
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </Flex>
            </div>
          </>
        )}
      {/* id="2994:1255" */}
      {`${items}` === `5` &&
        `${size}` === `default` &&
        `${type}` === `Text` && (
          <>
            {/* name="items=5, size=default, type=Text" id="2994:1255" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "2px",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "var(--border-radius-small, 4px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              {/* name=".segmented__item" id="2994:1256" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Item`}</span>
              </Flex>
              {/* name=".segmented__item" id="2994:1257" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Item`}</span>
              </Flex>
              {/* name=".segmented__item" id="2994:1258" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Item`}</span>
              </Flex>
              {/* name=".segmented__item" id="2994:1259" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Item`}</span>
              </Flex>
              {/* name=".segmented__item" id="2994:1260" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Item`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2994:1744" */}
      {`${items}` === `5` &&
        `${size}` === `default` &&
        `${type}` === `icon` && (
          <>
            {/* name="items=5, size=default, type=icon" id="2994:1744" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "2px",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "var(--border-radius-small, 4px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              {/* name=".segmented__item" id="2994:1745" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                }}
              >
                {/* name="🎰 icon" id="I2994:1745;202:42572" type="INSTANCE" */}
                <Icon.QodeListTree
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </Flex>
              {/* name=".segmented__item" id="2994:1746" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                {/* name="🎰 icon" id="I2994:1746;202:42596" type="INSTANCE" */}
                <Icon.QodeListTree
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </Flex>
              {/* name=".segmented__item" id="2994:1747" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                {/* name="🎰 icon" id="I2994:1747;202:42596" type="INSTANCE" */}
                <Icon.QodeListTree
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </Flex>
              {/* name=".segmented__item" id="2994:1748" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                {/* name="🎰 icon" id="I2994:1748;202:42596" type="INSTANCE" */}
                <Icon.QodeListTree
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </Flex>
              {/* name=".segmented__item" id="2994:1749" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                {/* name="🎰 icon" id="I2994:1749;202:42596" type="INSTANCE" */}
                <Icon.QodeListTree
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </Flex>
            </div>
          </>
        )}
      {/* id="2994:1261" */}
      {`${items}` === `6` &&
        `${size}` === `default` &&
        `${type}` === `Text` && (
          <>
            {/* name="items=6, size=default, type=Text" id="2994:1261" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "2px",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "var(--border-radius-small, 4px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              {/* name=".segmented__item" id="2994:1262" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Item`}</span>
              </Flex>
              {/* name=".segmented__item" id="2994:1263" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Item`}</span>
              </Flex>
              {/* name=".segmented__item" id="2994:1264" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Item`}</span>
              </Flex>
              {/* name=".segmented__item" id="2994:1265" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Item`}</span>
              </Flex>
              {/* name=".segmented__item" id="2994:1266" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Item`}</span>
              </Flex>
              {/* name=".segmented__item" id="2994:1267" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Item`}</span>
              </Flex>
            </div>
          </>
        )}
      {/* id="2994:1750" */}
      {`${items}` === `6` &&
        `${size}` === `default` &&
        `${type}` === `icon` && (
          <>
            {/* name="items=6, size=default, type=icon" id="2994:1750" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "2px",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "var(--border-radius-small, 4px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              {/* name=".segmented__item" id="2994:1751" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                }}
              >
                {/* name="🎰 icon" id="I2994:1751;202:42572" type="INSTANCE" */}
                <Icon.QodeListTree
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </Flex>
              {/* name=".segmented__item" id="2994:1752" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                {/* name="🎰 icon" id="I2994:1752;202:42596" type="INSTANCE" */}
                <Icon.QodeListTree
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </Flex>
              {/* name=".segmented__item" id="2994:1753" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                {/* name="🎰 icon" id="I2994:1753;202:42596" type="INSTANCE" */}
                <Icon.QodeListTree
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </Flex>
              {/* name=".segmented__item" id="2994:1754" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                {/* name="🎰 icon" id="I2994:1754;202:42596" type="INSTANCE" */}
                <Icon.QodeListTree
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </Flex>
              {/* name=".segmented__item" id="2994:1755" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                {/* name="🎰 icon" id="I2994:1755;202:42596" type="INSTANCE" */}
                <Icon.QodeListTree
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </Flex>
              {/* name=".segmented__item" id="2994:1756" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                {/* name="🎰 icon" id="I2994:1756;202:42596" type="INSTANCE" */}
                <Icon.QodeListTree
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </Flex>
            </div>
          </>
        )}
      {/* id="2994:1268" */}
      {`${items}` === `2` && `${size}` === `large` && `${type}` === `Text` && (
        <>
          {/* name="items=2, size=large, type=Text" id="2994:1268" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1269" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1270" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Item`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="2994:1757" */}
      {`${items}` === `2` && `${size}` === `large` && `${type}` === `icon` && (
        <>
          {/* name="items=2, size=large, type=icon" id="2994:1757" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1758" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1758;202:42608" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1759" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1759;202:42611" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="2994:1271" */}
      {`${items}` === `3` && `${size}` === `large` && `${type}` === `Text` && (
        <>
          {/* name="items=3, size=large, type=Text" id="2994:1271" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1272" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1273" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1274" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Item`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="2994:1760" */}
      {`${items}` === `3` && `${size}` === `large` && `${type}` === `icon` && (
        <>
          {/* name="items=3, size=large, type=icon" id="2994:1760" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1761" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1761;202:42608" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1762" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1762;202:42611" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1763" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1763;202:42611" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="2994:1275" */}
      {`${items}` === `4` && `${size}` === `large` && `${type}` === `Text` && (
        <>
          {/* name="items=4, size=large, type=Text" id="2994:1275" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1276" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1277" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1278" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1279" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Item`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="2994:1764" */}
      {`${items}` === `4` && `${size}` === `large` && `${type}` === `icon` && (
        <>
          {/* name="items=4, size=large, type=icon" id="2994:1764" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1765" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1765;202:42608" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1766" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1766;202:42611" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1767" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1767;202:42611" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1768" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1768;202:42611" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="2994:1280" */}
      {`${items}` === `5` && `${size}` === `large` && `${type}` === `Text` && (
        <>
          {/* name="items=5, size=large, type=Text" id="2994:1280" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1281" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1282" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1283" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1284" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1285" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Item`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="2994:1769" */}
      {`${items}` === `5` && `${size}` === `large` && `${type}` === `icon` && (
        <>
          {/* name="items=5, size=large, type=icon" id="2994:1769" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1770" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1770;202:42608" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1771" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1771;202:42611" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1772" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1772;202:42611" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1773" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1773;202:42611" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1774" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1774;202:42611" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="2994:1286" */}
      {`${items}` === `6` && `${size}` === `large` && `${type}` === `Text` && (
        <>
          {/* name="items=6, size=large, type=Text" id="2994:1286" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1287" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1288" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1289" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1290" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1291" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1292" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Item`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="2994:1775" */}
      {`${items}` === `6` && `${size}` === `large` && `${type}` === `icon` && (
        <>
          {/* name="items=6, size=large, type=icon" id="2994:1775" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1776" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1776;202:42608" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1777" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1777;202:42611" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1778" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1778;202:42611" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1779" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1779;202:42611" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1780" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1780;202:42611" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1781" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1781;202:42611" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="2994:1293" */}
      {`${items}` === `2` && `${size}` === `small` && `${type}` === `Text` && (
        <>
          {/* name="items=2, size=small, type=Text" id="2994:1293" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "48px",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1294" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1295" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Item`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="2994:1782" */}
      {`${items}` === `2` && `${size}` === `small` && `${type}` === `icon` && (
        <>
          {/* name="items=2, size=small, type=icon" id="2994:1782" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "48px",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1783" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1783;202:42624" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1784" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1784;202:42627" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="2994:1296" */}
      {`${items}` === `3` && `${size}` === `small` && `${type}` === `Text` && (
        <>
          {/* name="items=3, size=small, type=Text" id="2994:1296" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "70px",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1297" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1298" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1299" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Item`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="2994:1785" */}
      {`${items}` === `3` && `${size}` === `small` && `${type}` === `icon` && (
        <>
          {/* name="items=3, size=small, type=icon" id="2994:1785" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "70px",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1786" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1786;202:42624" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1787" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1787;202:42627" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1788" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1788;202:42627" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="2994:1300" */}
      {`${items}` === `4` && `${size}` === `small` && `${type}` === `Text` && (
        <>
          {/* name="items=4, size=small, type=Text" id="2994:1300" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "92px",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1301" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1302" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1303" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1304" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Item`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="2994:1789" */}
      {`${items}` === `4` && `${size}` === `small` && `${type}` === `icon` && (
        <>
          {/* name="items=4, size=small, type=icon" id="2994:1789" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "92px",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1790" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1790;202:42624" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1791" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1791;202:42627" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1792" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1792;202:42627" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1793" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1793;202:42627" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="2994:1305" */}
      {`${items}` === `5` && `${size}` === `small` && `${type}` === `Text` && (
        <>
          {/* name="items=5, size=small, type=Text" id="2994:1305" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "114px",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1306" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1307" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1308" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1309" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1310" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Item`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="2994:1794" */}
      {`${items}` === `5` && `${size}` === `small` && `${type}` === `icon` && (
        <>
          {/* name="items=5, size=small, type=icon" id="2994:1794" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "114px",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1795" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1795;202:42624" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1796" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1796;202:42627" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1797" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1797;202:42627" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1798" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1798;202:42627" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1799" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1799;202:42627" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="2994:1311" */}
      {`${items}` === `6` && `${size}` === `small` && `${type}` === `Text` && (
        <>
          {/* name="items=6, size=small, type=Text" id="2994:1311" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "136px",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1312" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1313" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1314" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1315" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1316" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Item`}</span>
            </Flex>
            {/* name=".segmented__item" id="2994:1317" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Item`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="2994:1800" */}
      {`${items}` === `6` && `${size}` === `small` && `${type}` === `icon` && (
        <>
          {/* name="items=6, size=small, type=icon" id="2994:1800" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "136px",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1801" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1801;202:42624" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1802" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1802;202:42627" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1803" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1803;202:42627" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1804" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1804;202:42627" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1805" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1805;202:42627" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
            {/* name=".segmented__item" id="2994:1806" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
            >
              {/* name="🎰 icon" id="I2994:1806;202:42627" type="INSTANCE" */}
              <Icon.QodeListTree
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
    </>
  )
}
