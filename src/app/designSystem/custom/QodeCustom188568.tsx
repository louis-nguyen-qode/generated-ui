// id="188:568"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeRadio } from "@designSystem/ant/QodeRadio"

export interface QodeCustom188568Props {
  items?: "2" | "3" | "4" | "5" | "6"
  direction?: "horizontal" | "vertical"
}

export const QodeCustom188568: React.FC<
  QodeCustom188568Props & { style?: CSSProperties }
> = ({ items = "2", direction = "vertical", style, ...rest }) => {
  return (
    <>
      {/* name="Radio/Basic" id="188:568" type="COMPONENT_SET" */}
      {/* id="188:567" */}
      {`${items}` === `2` && `${direction}` === `vertical` && (
        <>
          {/* name="items=2, direction=vertical" id="188:567" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              },
              ...style,
            }}
          >
            {/* name="🧬 item 1" id="188:554" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{ display: "flex", alignItems: "flex-start", gap: "8px" },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 2" id="188:558" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{ display: "flex", alignItems: "flex-start", gap: "8px" },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="188:582" */}
      {`${items}` === `3` && `${direction}` === `vertical` && (
        <>
          {/* name="items=3, direction=vertical" id="188:582" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              },
              ...style,
            }}
          >
            {/* name="🧬 item 1" id="188:583" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 2" id="188:584" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 3" id="188:591" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="188:595" */}
      {`${items}` === `4` && `${direction}` === `vertical` && (
        <>
          {/* name="items=4, direction=vertical" id="188:595" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              },
              ...style,
            }}
          >
            {/* name="🧬 item 1" id="188:596" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 2" id="188:597" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 3" id="188:598" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 4" id="188:608" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="188:612" */}
      {`${items}` === `5` && `${direction}` === `vertical` && (
        <>
          {/* name="items=5, direction=vertical" id="188:612" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              },
              ...style,
            }}
          >
            {/* name="🧬 item 1" id="188:613" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 2" id="188:614" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 3" id="188:615" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 4" id="188:616" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 5" id="188:629" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="188:633" */}
      {`${items}` === `6` && `${direction}` === `vertical` && (
        <>
          {/* name="items=6, direction=vertical" id="188:633" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              },
              ...style,
            }}
          >
            {/* name="🧬 item 1" id="188:634" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 2" id="188:635" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 3" id="188:636" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 4" id="188:637" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 5" id="188:638" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 6" id="188:654" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="188:658" */}
      {`${items}` === `2` && `${direction}` === `horizontal` && (
        <>
          {/* name="items=2, direction=horizontal" id="188:658" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              },
              ...style,
            }}
          >
            {/* name="🧬 item 1" id="188:659" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 2" id="188:660" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="188:661" */}
      {`${items}` === `3` && `${direction}` === `horizontal` && (
        <>
          {/* name="items=3, direction=horizontal" id="188:661" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              },
              ...style,
            }}
          >
            {/* name="🧬 item 1" id="188:662" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 2" id="188:663" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 3" id="188:664" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="188:665" */}
      {`${items}` === `4` && `${direction}` === `horizontal` && (
        <>
          {/* name="items=4, direction=horizontal" id="188:665" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              },
              ...style,
            }}
          >
            {/* name="🧬 item 1" id="188:666" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 2" id="188:667" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 3" id="188:668" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 4" id="188:669" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="188:670" */}
      {`${items}` === `5` && `${direction}` === `horizontal` && (
        <>
          {/* name="items=5, direction=horizontal" id="188:670" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              },
              ...style,
            }}
          >
            {/* name="🧬 item 1" id="188:671" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 2" id="188:672" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 3" id="188:673" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 4" id="188:674" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 5" id="188:675" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="188:676" */}
      {`${items}` === `6` && `${direction}` === `horizontal` && (
        <>
          {/* name="items=6, direction=horizontal" id="188:676" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              },
              ...style,
            }}
          >
            {/* name="🧬 item 1" id="188:677" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 2" id="188:678" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 3" id="188:679" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 4" id="188:680" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 5" id="188:681" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
            {/* name="🧬 item 6" id="188:682" type="INSTANCE" */}
            <QodeRadio
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                },
                ...{},
              }}
              {...{
                title: "Radio",
                showTitle: true,
                state: "default",
                checked: false,
              }}
            />
          </div>
        </>
      )}
    </>
  )
}
