// id="496:30265"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeRadio } from "@designSystem/ant/QodeRadio"

export interface QodeCustom49630265Props {
  items?: "2" | "3" | "4" | "5" | "6"
  direction?: "horizontal" | "vertical"
}

export const QodeCustom49630265: React.FC<
  QodeCustom49630265Props & { style?: CSSProperties }
> = ({ items = "2", direction = "vertical", style, ...rest }) => {
  return (
    <>
      {/* name="Radio/Basic" id="496:30265" type="COMPONENT_SET" */}
      {/* id="496:30266" */}
      {`${items}` === `2` && `${direction}` === `vertical` && (
        <>
          {/* name="items=2, direction=vertical" id="496:30266" type="COMPONENT" */}
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
            {/* name="🧬 item 1" id="496:30276" type="INSTANCE" */}
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
            {/* name="🧬 item 2" id="496:30277" type="INSTANCE" */}
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
      {/* id="496:30267" */}
      {`${items}` === `3` && `${direction}` === `vertical` && (
        <>
          {/* name="items=3, direction=vertical" id="496:30267" type="COMPONENT" */}
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
            {/* name="🧬 item 1" id="496:30278" type="INSTANCE" */}
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
            {/* name="🧬 item 2" id="496:30279" type="INSTANCE" */}
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
            {/* name="🧬 item 3" id="496:30280" type="INSTANCE" */}
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
      {/* id="496:30268" */}
      {`${items}` === `4` && `${direction}` === `vertical` && (
        <>
          {/* name="items=4, direction=vertical" id="496:30268" type="COMPONENT" */}
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
            {/* name="🧬 item 1" id="496:30281" type="INSTANCE" */}
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
            {/* name="🧬 item 2" id="496:30282" type="INSTANCE" */}
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
            {/* name="🧬 item 3" id="496:30283" type="INSTANCE" */}
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
            {/* name="🧬 item 4" id="496:30284" type="INSTANCE" */}
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
      {/* id="496:30269" */}
      {`${items}` === `5` && `${direction}` === `vertical` && (
        <>
          {/* name="items=5, direction=vertical" id="496:30269" type="COMPONENT" */}
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
            {/* name="🧬 item 1" id="496:30285" type="INSTANCE" */}
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
            {/* name="🧬 item 2" id="496:30286" type="INSTANCE" */}
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
            {/* name="🧬 item 3" id="496:30287" type="INSTANCE" */}
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
            {/* name="🧬 item 4" id="496:30288" type="INSTANCE" */}
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
            {/* name="🧬 item 5" id="496:30289" type="INSTANCE" */}
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
      {/* id="496:30270" */}
      {`${items}` === `6` && `${direction}` === `vertical` && (
        <>
          {/* name="items=6, direction=vertical" id="496:30270" type="COMPONENT" */}
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
            {/* name="🧬 item 1" id="496:30290" type="INSTANCE" */}
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
            {/* name="🧬 item 2" id="496:30291" type="INSTANCE" */}
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
            {/* name="🧬 item 3" id="496:30292" type="INSTANCE" */}
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
            {/* name="🧬 item 4" id="496:30293" type="INSTANCE" */}
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
            {/* name="🧬 item 5" id="496:30294" type="INSTANCE" */}
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
            {/* name="🧬 item 6" id="496:30295" type="INSTANCE" */}
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
      {/* id="496:30271" */}
      {`${items}` === `2` && `${direction}` === `horizontal` && (
        <>
          {/* name="items=2, direction=horizontal" id="496:30271" type="COMPONENT" */}
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
            {/* name="🧬 item 1" id="496:30296" type="INSTANCE" */}
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
            {/* name="🧬 item 2" id="496:30297" type="INSTANCE" */}
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
      {/* id="496:30272" */}
      {`${items}` === `3` && `${direction}` === `horizontal` && (
        <>
          {/* name="items=3, direction=horizontal" id="496:30272" type="COMPONENT" */}
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
            {/* name="🧬 item 1" id="496:30298" type="INSTANCE" */}
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
            {/* name="🧬 item 2" id="496:30299" type="INSTANCE" */}
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
            {/* name="🧬 item 3" id="496:30300" type="INSTANCE" */}
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
      {/* id="496:30273" */}
      {`${items}` === `4` && `${direction}` === `horizontal` && (
        <>
          {/* name="items=4, direction=horizontal" id="496:30273" type="COMPONENT" */}
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
            {/* name="🧬 item 1" id="496:30301" type="INSTANCE" */}
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
            {/* name="🧬 item 2" id="496:30302" type="INSTANCE" */}
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
            {/* name="🧬 item 3" id="496:30303" type="INSTANCE" */}
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
            {/* name="🧬 item 4" id="496:30304" type="INSTANCE" */}
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
      {/* id="496:30274" */}
      {`${items}` === `5` && `${direction}` === `horizontal` && (
        <>
          {/* name="items=5, direction=horizontal" id="496:30274" type="COMPONENT" */}
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
            {/* name="🧬 item 1" id="496:30305" type="INSTANCE" */}
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
            {/* name="🧬 item 2" id="496:30306" type="INSTANCE" */}
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
            {/* name="🧬 item 3" id="496:30307" type="INSTANCE" */}
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
            {/* name="🧬 item 4" id="496:30308" type="INSTANCE" */}
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
            {/* name="🧬 item 5" id="496:30309" type="INSTANCE" */}
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
      {/* id="496:30275" */}
      {`${items}` === `6` && `${direction}` === `horizontal` && (
        <>
          {/* name="items=6, direction=horizontal" id="496:30275" type="COMPONENT" */}
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
            {/* name="🧬 item 1" id="496:30310" type="INSTANCE" */}
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
            {/* name="🧬 item 2" id="496:30311" type="INSTANCE" */}
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
            {/* name="🧬 item 3" id="496:30312" type="INSTANCE" */}
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
            {/* name="🧬 item 4" id="496:30313" type="INSTANCE" */}
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
            {/* name="🧬 item 5" id="496:30314" type="INSTANCE" */}
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
            {/* name="🧬 item 6" id="496:30315" type="INSTANCE" */}
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
