// id="559:30057"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom55930095 } from "@designSystem/custom/QodeCustom55930095"

export interface QodeCustom55930057Props {
  state?: "Upcoming" | "Done" | "Canceled"
}

export const QodeCustom55930057: React.FC<
  QodeCustom55930057Props & { style?: CSSProperties }
> = ({ state = "Upcoming", ...rest }) => {
  return (
    <>
      {/* name="Interview item 2" id="559:30057" type="COMPONENT_SET" */}
      {/* id="559:30055" */}
      {`${state}` === `Upcoming` && (
        <>
          {/* name="State=Upcoming" id="559:30055" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "637px",
              height: "106px",
              padding: "36px 24px 24px 24px",
              alignItems: "flex-start",
              gap: "16px",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--neutral-white, #fff)",
            }}
          >
            {/* name="Header" id="559:29691" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "24px",
                flex: "1 0 0",
              }}
            >
              {/* name="3rd interview | Nguyen Quoc Thai Wednesday, September 11 - 12:30 AM - 1:00 AM" id="559:29692" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                  flex: "1 0 0",
                }}
              >
                {/* name="Title" id="559:29693" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    alignSelf: "stretch",
                  }}
                >
                  <span
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: "1",
                      overflow: "hidden",
                      color: "var(--text-text-neutral-40, #464646)",
                      textOverflow: "ellipsis",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-heading6, 16px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                    }}
                  >{`3rd interview | Nguyen Quoc Thai - Technical round 2`}</span>
                </div>
                {/* name="Datetime" id="559:29695" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  {/* name="calendar-days" id="559:34893" type="INSTANCE" */}
                  <Icon.QodeCalendarDays
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                  <span
                    style={{
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Sunday, September 15`}</span>
                  {/* name="divider" id="559:29697" type="LINE" */}
                  <Flex
                    style={{
                      width: "1px",
                      height: "9px",
                      background: "var(--border-border-neutral-30, #d5d5d5)",
                    }}
                  >
                    {/* name="divider" id=559:29697 type=LINE */}
                    <></>
                  </Flex>
                  <span
                    style={{
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`10:00 AM–11:00 AM`}</span>
                  {/* name="divider" id="559:30374" type="LINE" */}
                  <Flex
                    style={{
                      width: "1px",
                      height: "9px",
                      background: "var(--border-border-neutral-30, #d5d5d5)",
                    }}
                  >
                    {/* name="divider" id=559:30374 type=LINE */}
                    <></>
                  </Flex>
                  {/* name="Link" id="559:30352" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "8px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="R" id="559:30353" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="link-simple" id="559:30354" type="INSTANCE" */}
                      <Icon.QodeLinkSimple
                        style={{ width: "16px", height: "16px" }}
                        {...{}}
                      />
                      <span
                        style={{
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`Interview link`}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* name="Button" id="559:29699" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  width: "100px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconLeft: <Icon.QodePenToSquare />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  buttonname: "Edit",
                  iconLeft: true,
                  type: "default",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
            {/* name="Interview/Badge" id="559:30102" type="INSTANCE" */}
            <QodeCustom55930095
              style={{
                display: "flex",
                height: "24px",
                padding: "0px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                position: "absolute",
                left: "26px",
                borderRadius: "0px 0px 6px 6px",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-10, #64b9f5)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-10, #64b9f5)",
                borderLeft:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-10, #64b9f5)",
                background:
                  "linear-gradient(101deg, #CDF6FF 2.22%, #B8E1FF 97.78%)",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="559:30058" */}
      {`${state}` === `Done` && (
        <>
          {/* name="State=Done" id="559:30058" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "637px",
              height: "106px",
              padding: "36px 24px 24px 24px",
              alignItems: "flex-start",
              gap: "16px",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--neutral-white, #fff)",
            }}
          >
            {/* name="Header" id="559:30535" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "24px",
                flex: "1 0 0",
              }}
            >
              {/* name="3rd interview | Nguyen Quoc Thai Wednesday, September 11 - 12:30 AM - 1:00 AM" id="559:30536" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                  flex: "1 0 0",
                }}
              >
                {/* name="Title" id="559:30537" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    alignSelf: "stretch",
                  }}
                >
                  <span
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: "1",
                      overflow: "hidden",
                      color: "var(--text-text-neutral-40, #464646)",
                      textOverflow: "ellipsis",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-heading6, 16px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                    }}
                  >{`3rd interview | Nguyen Quoc Thai - Technical round 2`}</span>
                </div>
                {/* name="Datetime" id="559:35182" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  {/* name="calendar-days" id="559:35183" type="INSTANCE" */}
                  <Icon.QodeCalendarDays
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                  <span
                    style={{
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Sunday, September 15`}</span>
                  {/* name="divider" id="559:35185" type="LINE" */}
                  <Flex
                    style={{
                      width: "1px",
                      height: "9px",
                      background: "var(--border-border-neutral-30, #d5d5d5)",
                    }}
                  >
                    {/* name="divider" id=559:35185 type=LINE */}
                    <></>
                  </Flex>
                  <span
                    style={{
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`10:00 AM–11:00 AM`}</span>
                  {/* name="divider" id="559:35187" type="LINE" */}
                  <Flex
                    style={{
                      width: "1px",
                      height: "9px",
                      background: "var(--border-border-neutral-30, #d5d5d5)",
                    }}
                  >
                    {/* name="divider" id=559:35187 type=LINE */}
                    <></>
                  </Flex>
                  {/* name="Link" id="559:35188" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "8px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="R" id="559:35189" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="link-simple" id="559:35190" type="INSTANCE" */}
                      <Icon.QodeLinkSimple
                        style={{ width: "16px", height: "16px" }}
                        {...{}}
                      />
                      <span
                        style={{
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`Interview link`}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* name="Button" id="559:30734" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  width: "98px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                }}
                {...{
                  selectIconLeft: <Icon.QodeEye />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  buttonname: "View result",
                  iconLeft: true,
                  type: "link",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
            {/* name="Interview/Badge" id="559:30107" type="INSTANCE" */}
            <QodeCustom55930095
              style={{
                display: "flex",
                height: "24px",
                padding: "0px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                position: "absolute",
                left: "26px",
                borderRadius: "0px 0px 6px 6px",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-10, #64b9f5)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-10, #64b9f5)",
                borderLeft:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-10, #64b9f5)",
                background:
                  "linear-gradient(101deg, #CDF6FF 2.22%, #B8E1FF 97.78%)",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="559:30411" */}
      {`${state}` === `Canceled` && (
        <>
          {/* name="State=Canceled" id="559:30411" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "637px",
              height: "106px",
              padding: "36px 24px 24px 24px",
              alignItems: "flex-start",
              gap: "16px",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--neutral-white, #fff)",
            }}
          >
            {/* name="Header" id="559:30625" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "24px",
                flex: "1 0 0",
              }}
            >
              {/* name="3rd interview | Nguyen Quoc Thai Wednesday, September 11 - 12:30 AM - 1:00 AM" id="559:30626" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                  flex: "1 0 0",
                }}
              >
                {/* name="Title" id="559:30627" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    alignSelf: "stretch",
                  }}
                >
                  <span
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: "1",
                      overflow: "hidden",
                      color: "var(--text-text-neutral-40, #464646)",
                      textOverflow: "ellipsis",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-heading6, 16px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "var(--lineheight-lineheight-h6, 22px)",
                    }}
                  >{`(Canceled) 3rd interview | Nguyen Quoc Thai - Technical round 2`}</span>
                </div>
                {/* name="Datetime" id="559:35419" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  {/* name="calendar-days" id="559:35420" type="INSTANCE" */}
                  <Icon.QodeCalendarDays
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                  <span
                    style={{
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Sunday, September 15`}</span>
                  {/* name="divider" id="559:35422" type="LINE" */}
                  <Flex
                    style={{
                      width: "1px",
                      height: "9px",
                      background: "var(--border-border-neutral-30, #d5d5d5)",
                    }}
                  >
                    {/* name="divider" id=559:35422 type=LINE */}
                    <></>
                  </Flex>
                  <span
                    style={{
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`10:00 AM–11:00 AM`}</span>
                </div>
              </div>
            </div>
            {/* name="Interview/Badge" id="559:30422" type="INSTANCE" */}
            <QodeCustom55930095
              style={{
                display: "flex",
                height: "24px",
                padding: "0px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                position: "absolute",
                left: "26px",
                borderRadius: "0px 0px 6px 6px",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-10, #64b9f5)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-10, #64b9f5)",
                borderLeft:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-10, #64b9f5)",
                background:
                  "linear-gradient(101deg, #CDF6FF 2.22%, #B8E1FF 97.78%)",
              }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
