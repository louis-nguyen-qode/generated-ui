// id="307:17676"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvgI30717679562960 from "@designSystem/icon/svg/QodeSvgI30717679562960"
import QodeSvgI30717821562960 from "@designSystem/icon/svg/QodeSvgI30717821562960"
import QodeSvgI30717838562960 from "@designSystem/icon/svg/QodeSvgI30717838562960"

export interface QodeCustom30717676Props {
  showDelete?: boolean
  state?: "active" | "default" | "hover"
}

export const QodeCustom30717676: React.FC<
  QodeCustom30717676Props & { style?: CSSProperties }
> = ({ showDelete = true, state = "default", ...rest }) => {
  return (
    <>
      {/* name="Interviewed/List item" id="307:17676" type="COMPONENT_SET" */}
      {/* id="307:17677" */}
      {`${state}` === `default` && (
        <>
          {/* name="state=default" id="307:17677" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "352px",
              padding: "12px 16px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "24px",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--neutral-white, #fff)",
            }}
          >
            {/* name="Header" id="307:17678" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "var(--font-size-base, 14px)",
                alignSelf: "stretch",
              }}
            >
              {/* name="avatar" id="307:17679" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "48px",
                  height: "48px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--font-size-large, 16px)",
                  borderRadius: "666px",
                  background: "var(--color-success-colorsuccesshover, #a3c73e)",
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                  }}
                >{`AW`}</span>
                {/* name="user-large" id="I307:17679;5629:57" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "24px",
                    padding: "2.4px 2.401px 2.4px 2.399px",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    left: "12px",
                    top: "12px",
                  }}
                >
                  {/* name="Vector" id="I307:17679;5629:57;2828:6334" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "19.2px",
                      height: "19.2px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I307:17679;5629:57;2828:6334 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="img" id="I307:17679;5629:58" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "48px",
                    height: "48px",
                    padding: "var(--size-padding-paddingxs, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                    position: "absolute",
                    borderRadius: "666px",
                    background:
                      "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                  }}
                >
                  {/* name="img" id=I307:17679;5629:58 type=FRAME */}
                  <></>
                </div>
                {/* name="Badge" id="I307:17679;5629:59" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "9px",
                    height: "9px",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    right: "1.5px",
                    bottom: "1.5px",
                    borderRadius: "5.333px",
                    border:
                      "1.5px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                    background: "var(--color-error-colorerror, #ff6542)",
                  }}
                >
                  {/* name="Badge" id=I307:17679;5629:59 type=INSTANCE */}
                  <></>
                </Flex>
                {/* name="opentoWork" id="I307:17679;5629:60" type="FRAME" */}
                <QodeSvgI30717679562960
                  style={{
                    width: "48px",
                    height: "48px",
                    position: "absolute",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="R" id="307:17680" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                  flex: "1 0 0",
                }}
              >
                {/* name="wrap" id="307:17681" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    alignSelf: "stretch",
                  }}
                >
                  <span
                    style={{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-heading6, 16px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--line-height-lineheighheading5, 24px) /* 150% */",
                    }}
                  >{`Nguyen Quoc Thai`}</span>
                </div>
                {/* name="Interviewed/Status" id="311:23056" type="INSTANCE" */}
                <Flex
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  {/* name="Badge__Status" id="I311:23056;434:26889" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="Dot" id="I311:23056;434:26889;124:665" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        width: "var(--size-size-sizexxs-6px, 6px)",
                        height: "var(--size-size-sizexxs-6px, 6px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                        background: "var(--background-bg-green-hover, #11a620)",
                      }}
                    >
                      {/* name="Dot" id=I311:23056;434:26889;124:665 type=FRAME */}
                      <></>
                    </div>
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
                    >{`Upcoming`}</span>
                  </Flex>
                </Flex>
              </div>
            </div>
            {/* name="Frame 37201" id="307:17689" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "12px 20px",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "8px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Button" id="307:17690" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background: "var(--color-info-colorinfo, #2e2e2e)",
                }}
              >
                {/* name="plus" id="I307:17690;35:13236" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "2.8px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I307:17690;35:13236;2828:4752" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "10.4px",
                      height: "10.4px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortextsolid, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I307:17690;35:13236;2828:4752 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                <span
                  style={{
                    color: "var(--color-neutral-text-colortextsolid, #fff)",
                    textAlign: "center",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  }}
                >{`Add notes`}</span>
                {/* name="🎰 icon" id="I307:17690;2906:15123" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 1.601px 1.598px 1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I307:17690;2906:15123;2828:3908" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.799px",
                      height: "12.802px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortextsolid, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I307:17690;2906:15123;2828:3908 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
              {/* name="Upload CV" id="307:17691" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "124px",
                  alignItems: "flex-start",
                }}
              >
                {/* name="Button" id="I307:17691;11588:3979" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    flex: "1 0 0",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                    background:
                      "var(--color-neutral-background-colorbgcontainer, #fff)",
                  }}
                >
                  {/* name="🎰 icon" id="I307:17691;11588:3979;114:1808" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.601px 1.6px 1.6px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I307:17691;11588:3979;114:1808;2828:6280" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.8px",
                        height: "12.799px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I307:17691;11588:3979;114:1808;2828:6280 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  <span
                    style={{
                      color: "var(--color-neutral-text-colortext, #000)",
                      textAlign: "center",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheight, 22px) /* 157.143% */",
                    }}
                  >{`Upload CV`}</span>
                  {/* name="🎰 icon" id="I307:17691;11588:3979;2906:15520" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.6px 1.601px 1.598px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I307:17691;11588:3979;2906:15520;2828:3908" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.799px",
                        height: "12.802px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I307:17691;11588:3979;2906:15520;2828:3908 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </div>
            {/* name="Indicator" id="307:17692" type="ELLIPSE" */}
            <Flex
              style={{
                width: "8px",
                height: "8px",
                position: "absolute",
                left: "40px",
                bottom: "-7px",
                borderRadius: "8px",
                background: "#FF7878",
              }}
            >
              {/* name="Indicator" id=307:17692 type=ELLIPSE */}
              <></>
            </Flex>
          </div>
        </>
      )}
      {/* id="307:17694" */}
      {`${state}` === `hover` && (
        <>
          {/* name="state=hover" id="307:17694" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "352px",
              padding: "12px 16px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "24px",
              borderRadius: "var(--border-radius-base, 8px)",
              border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Header" id="307:17820" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "var(--font-size-base, 14px)",
                alignSelf: "stretch",
              }}
            >
              {/* name="avatar" id="307:17821" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "48px",
                  height: "48px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--font-size-large, 16px)",
                  borderRadius: "666px",
                  background: "var(--color-success-colorsuccesshover, #a3c73e)",
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                  }}
                >{`AW`}</span>
                {/* name="user-large" id="I307:17821;5629:57" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "24px",
                    padding: "2.4px 2.401px 2.4px 2.399px",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    left: "12px",
                    top: "12px",
                  }}
                >
                  {/* name="Vector" id="I307:17821;5629:57;2828:6334" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "19.2px",
                      height: "19.2px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I307:17821;5629:57;2828:6334 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="img" id="I307:17821;5629:58" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "48px",
                    height: "48px",
                    padding: "var(--size-padding-paddingxs, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                    position: "absolute",
                    borderRadius: "666px",
                    background:
                      "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                  }}
                >
                  {/* name="img" id=I307:17821;5629:58 type=FRAME */}
                  <></>
                </div>
                {/* name="Badge" id="I307:17821;5629:59" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "9px",
                    height: "9px",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    right: "1.5px",
                    bottom: "1.5px",
                    borderRadius: "5.333px",
                    border:
                      "1.5px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                    background: "var(--color-error-colorerror, #ff6542)",
                  }}
                >
                  {/* name="Badge" id=I307:17821;5629:59 type=INSTANCE */}
                  <></>
                </Flex>
                {/* name="opentoWork" id="I307:17821;5629:60" type="FRAME" */}
                <QodeSvgI30717821562960
                  style={{
                    width: "48px",
                    height: "48px",
                    position: "absolute",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="R" id="307:17907" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                  flex: "1 0 0",
                }}
              >
                {/* name="wrap" id="307:17908" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    alignSelf: "stretch",
                  }}
                >
                  <span
                    style={{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-heading6, 16px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--line-height-lineheighheading5, 24px) /* 150% */",
                    }}
                  >{`Nguyen Quoc Thai`}</span>
                </div>
                {/* name="Interviewed/Status" id="311:23091" type="INSTANCE" */}
                <Flex
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  {/* name="Badge__Status" id="I311:23091;434:26889" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="Dot" id="I311:23091;434:26889;124:665" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        width: "var(--size-size-sizexxs-6px, 6px)",
                        height: "var(--size-size-sizexxs-6px, 6px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                        background: "var(--background-bg-green-hover, #11a620)",
                      }}
                    >
                      {/* name="Dot" id=I311:23091;434:26889;124:665 type=FRAME */}
                      <></>
                    </div>
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
                    >{`Upcoming`}</span>
                  </Flex>
                </Flex>
              </div>
            </div>
            {/* name="Frame 37201" id="307:17706" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "12px 20px",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "8px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Button" id="307:17707" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background: "var(--color-info-colorinfo, #2e2e2e)",
                }}
              >
                {/* name="plus" id="I307:17707;35:13236" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "2.8px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I307:17707;35:13236;2828:4752" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "10.4px",
                      height: "10.4px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortextsolid, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I307:17707;35:13236;2828:4752 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                <span
                  style={{
                    color: "var(--color-neutral-text-colortextsolid, #fff)",
                    textAlign: "center",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  }}
                >{`Add notes`}</span>
                {/* name="🎰 icon" id="I307:17707;2906:15123" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 1.601px 1.598px 1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I307:17707;2906:15123;2828:3908" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.799px",
                      height: "12.802px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortextsolid, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I307:17707;2906:15123;2828:3908 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
              {/* name="Upload CV" id="307:17708" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "124px",
                  alignItems: "flex-start",
                }}
              >
                {/* name="Button" id="I307:17708;11588:3979" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    flex: "1 0 0",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                    background:
                      "var(--color-neutral-background-colorbgcontainer, #fff)",
                  }}
                >
                  {/* name="🎰 icon" id="I307:17708;11588:3979;114:1808" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.601px 1.6px 1.6px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I307:17708;11588:3979;114:1808;2828:6280" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.8px",
                        height: "12.799px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I307:17708;11588:3979;114:1808;2828:6280 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  <span
                    style={{
                      color: "var(--color-neutral-text-colortext, #000)",
                      textAlign: "center",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheight, 22px) /* 157.143% */",
                    }}
                  >{`Upload CV`}</span>
                  {/* name="🎰 icon" id="I307:17708;11588:3979;2906:15520" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.6px 1.601px 1.598px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I307:17708;11588:3979;2906:15520;2828:3908" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.799px",
                        height: "12.802px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I307:17708;11588:3979;2906:15520;2828:3908 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </div>
            {/* name="Indicator" id="307:17709" type="ELLIPSE" */}
            <Flex
              style={{
                width: "8px",
                height: "8px",
                position: "absolute",
                left: "40px",
                bottom: "-7px",
                borderRadius: "8px",
                background: "#FF7878",
              }}
            >
              {/* name="Indicator" id=307:17709 type=ELLIPSE */}
              <></>
            </Flex>
          </div>
        </>
      )}
      {/* id="307:17711" */}
      {`${state}` === `active` && (
        <>
          {/* name="state=active" id="307:17711" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "352px",
              padding: "12px 16px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "24px",
              borderRadius: "var(--border-radius-base, 8px)",
              border: "2px solid var(--border-border-primary-20, #158de2)",
              background: "var(--blue-techblue-5, #f8fcff)",
            }}
          >
            {/* name="Header" id="307:17837" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "var(--font-size-base, 14px)",
                alignSelf: "stretch",
              }}
            >
              {/* name="avatar" id="307:17838" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "48px",
                  height: "48px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--font-size-large, 16px)",
                  borderRadius: "666px",
                  background: "var(--color-success-colorsuccesshover, #a3c73e)",
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                  }}
                >{`AW`}</span>
                {/* name="user-large" id="I307:17838;5629:57" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "24px",
                    padding: "2.4px 2.401px 2.4px 2.399px",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    left: "12px",
                    top: "12px",
                  }}
                >
                  {/* name="Vector" id="I307:17838;5629:57;2828:6334" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "19.2px",
                      height: "19.2px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I307:17838;5629:57;2828:6334 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="img" id="I307:17838;5629:58" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "48px",
                    height: "48px",
                    padding: "var(--size-padding-paddingxs, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                    position: "absolute",
                    borderRadius: "666px",
                    background:
                      "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                  }}
                >
                  {/* name="img" id=I307:17838;5629:58 type=FRAME */}
                  <></>
                </div>
                {/* name="Badge" id="I307:17838;5629:59" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "9px",
                    height: "9px",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    right: "1.5px",
                    bottom: "1.5px",
                    borderRadius: "5.333px",
                    border:
                      "1.5px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                    background: "var(--color-error-colorerror, #ff6542)",
                  }}
                >
                  {/* name="Badge" id=I307:17838;5629:59 type=INSTANCE */}
                  <></>
                </Flex>
                {/* name="opentoWork" id="I307:17838;5629:60" type="FRAME" */}
                <QodeSvgI30717838562960
                  style={{
                    width: "48px",
                    height: "48px",
                    position: "absolute",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="R" id="307:17912" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                  flex: "1 0 0",
                }}
              >
                {/* name="wrap" id="307:17913" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    alignSelf: "stretch",
                  }}
                >
                  <span
                    style={{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-heading6, 16px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--line-height-lineheighheading5, 24px) /* 150% */",
                    }}
                  >{`Nguyen Quoc Thai`}</span>
                </div>
                {/* name="Interviewed/Status" id="336:19561" type="INSTANCE" */}
                <Flex
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  {/* name="Badge__Status" id="I336:19561;434:26889" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="Dot" id="I336:19561;434:26889;124:665" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        width: "var(--size-size-sizexxs-6px, 6px)",
                        height: "var(--size-size-sizexxs-6px, 6px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                        background: "var(--background-bg-green-hover, #11a620)",
                      }}
                    >
                      {/* name="Dot" id=I336:19561;434:26889;124:665 type=FRAME */}
                      <></>
                    </div>
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
                    >{`Upcoming`}</span>
                  </Flex>
                </Flex>
              </div>
            </div>
            {/* name="Frame 37201" id="307:17723" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "794px",
                padding: "12px 20px",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {/* name="Button" id="307:17724" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background: "var(--color-info-colorinfo, #2e2e2e)",
                }}
              >
                {/* name="plus" id="I307:17724;35:13236" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "2.8px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I307:17724;35:13236;2828:4752" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "10.4px",
                      height: "10.4px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortextsolid, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I307:17724;35:13236;2828:4752 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                <span
                  style={{
                    color: "var(--color-neutral-text-colortextsolid, #fff)",
                    textAlign: "center",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  }}
                >{`Add notes`}</span>
                {/* name="🎰 icon" id="I307:17724;2906:15123" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 1.601px 1.598px 1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I307:17724;2906:15123;2828:3908" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.799px",
                      height: "12.802px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortextsolid, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I307:17724;2906:15123;2828:3908 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
              {/* name="Upload CV" id="307:17725" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "124px",
                  alignItems: "flex-start",
                  flexShrink: "0",
                }}
              >
                {/* name="Button" id="I307:17725;11588:3979" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    flex: "1 0 0",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                    background:
                      "var(--color-neutral-background-colorbgcontainer, #fff)",
                  }}
                >
                  {/* name="🎰 icon" id="I307:17725;11588:3979;114:1808" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.601px 1.6px 1.6px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I307:17725;11588:3979;114:1808;2828:6280" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.8px",
                        height: "12.799px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I307:17725;11588:3979;114:1808;2828:6280 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  <span
                    style={{
                      color: "var(--color-neutral-text-colortext, #000)",
                      textAlign: "center",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheight, 22px) /* 157.143% */",
                    }}
                  >{`Upload CV`}</span>
                  {/* name="🎰 icon" id="I307:17725;11588:3979;2906:15520" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.6px 1.601px 1.598px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I307:17725;11588:3979;2906:15520;2828:3908" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.799px",
                        height: "12.802px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I307:17725;11588:3979;2906:15520;2828:3908 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </div>
            {/* name="Indicator" id="307:17726" type="ELLIPSE" */}
            <Flex
              style={{
                width: "8px",
                height: "8px",
                position: "absolute",
                left: "40px",
                bottom: "-7px",
                borderRadius: "8px",
                background: "#FF7878",
              }}
            >
              {/* name="Indicator" id=307:17726 type=ELLIPSE */}
              <></>
            </Flex>
          </div>
        </>
      )}
    </>
  )
}
