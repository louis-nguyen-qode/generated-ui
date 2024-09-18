// id="202:38253"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeDatePicker } from "@designSystem/ant/QodeDatePicker"
import { QodeCustom20232979 } from "@designSystem/custom/QodeCustom20232979"

export interface QodeCustom20238253Props {
  size?: "default" | "large" | "small"
  active?: "false" | "true"
}

export const QodeCustom20238253: React.FC<
  QodeCustom20238253Props & { style?: CSSProperties }
> = ({ size = "default", active = "false", ...rest }) => {
  return (
    <>
      {/* name="DatePicker" id="202:38253" type="COMPONENT_SET" */}
      {/* id="202:38251" */}
      {`${size}` === `default` && `${active}` === `false` && (
        <>
          {/* name="size=default, active=false" id="202:38251" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
            }}
          >
            {/* name="🧬 input" id="202:38245" type="INSTANCE" */}
            <QodeDatePicker
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                alignSelf: "stretch",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
              {...{
                placeholder: "Select date",
                date: "2023-09-02",
                startPlaceholder: "Start date",
                startDate: "2023-09-02",
                endPlaceholder: "End date",
                endDate: "2023-09-09",
                state: "default",
                status: "default",
                size: "default",
                range: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="202:38969" */}
      {`${size}` === `large` && `${active}` === `false` && (
        <>
          {/* name="size=large, active=false" id="202:38969" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
            }}
          >
            {/* name="🧬 input" id="202:38970" type="INSTANCE" */}
            <QodeDatePicker
              style={{
                display: "flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
              {...{
                placeholder: "Select date",
                startDate: "2023-09-02",
                startPlaceholder: "Start date",
                date: "2023-09-02",
                rIcon: true,
                endDate: "2023-09-09",
                endPlaceholder: "End date",
                state: "default",
                status: "default",
                size: "large",
                range: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="202:39334" */}
      {`${size}` === `small` && `${active}` === `false` && (
        <>
          {/* name="size=small, active=false" id="202:39334" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
            }}
          >
            {/* name="🧬 input" id="202:39335" type="INSTANCE" */}
            <QodeDatePicker
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
              {...{
                placeholder: "Select date",
                endPlaceholder: "End date",
                date: "2023-09-02",
                startPlaceholder: "Start date",
                startDate: "2023-09-02",
                endDate: "2023-09-09",
                state: "default",
                status: "default",
                size: "small",
                range: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="202:38609" */}
      {`${size}` === `default` && `${active}` === `true` && (
        <>
          {/* name="size=default, active=true" id="202:38609" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
            }}
          >
            {/* name="🧬 input" id="202:38610" type="INSTANCE" */}
            <QodeDatePicker
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                alignSelf: "stretch",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
              {...{
                placeholder: "Select date",
                endPlaceholder: "End date",
                date: "2023-09-02",
                rIcon: true,
                endDate: "2023-09-09",
                startPlaceholder: "Start date",
                startDate: "2023-09-02",
                state: "focused",
                status: "default",
                size: "default",
                range: false,
              }}
            />
            {/* name="🧬 dropdown menu" id="202:38611" type="INSTANCE" */}
            <QodeCustom20232979
              style={{
                display: "flex",
                width: "280px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: "-40px",
                bottom: "-332px",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background:
                  "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              }}
              {...{
                monthStartDate: "2020",
                dayStartDate: "Dec 2020",
                dayEndDate: "Jan 2021",
                monthDate: "2020",
                dayDate: "Dec 2020",
                monthEndDate: "2021",
                yearDate: "2020-2029",
                yearStartDate: "2020-2029",
                yearEndDate: "2030-2039",
                type: "day",
                range: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="202:38971" */}
      {`${size}` === `large` && `${active}` === `true` && (
        <>
          {/* name="size=large, active=true" id="202:38971" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
            }}
          >
            {/* name="🧬 input" id="202:38972" type="INSTANCE" */}
            <QodeDatePicker
              style={{
                display: "flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                background: "var(--background-bg-white, #fff)",
              }}
              {...{
                placeholder: "Select date",
                date: "2023-09-02",
                startPlaceholder: "Start date",
                startDate: "2023-09-02",
                endPlaceholder: "End date",
                endDate: "2023-09-09",
                state: "focused",
                status: "default",
                size: "large",
                range: false,
              }}
            />
            {/* name="🧬 dropdown menu" id="202:38973" type="INSTANCE" */}
            <QodeCustom20232979
              style={{
                display: "flex",
                width: "280px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: "-40px",
                bottom: "-332px",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background:
                  "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              }}
              {...{
                monthStartDate: "2020",
                dayStartDate: "Dec 2020",
                dayEndDate: "Jan 2021",
                monthDate: "2020",
                dayDate: "Dec 2020",
                monthEndDate: "2021",
                yearDate: "2020-2029",
                yearStartDate: "2020-2029",
                yearEndDate: "2030-2039",
                type: "day",
                range: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="202:39336" */}
      {`${size}` === `small` && `${active}` === `true` && (
        <>
          {/* name="size=small, active=true" id="202:39336" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
            }}
          >
            {/* name="🧬 input" id="202:39337" type="INSTANCE" */}
            <QodeDatePicker
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                background: "var(--background-bg-white, #fff)",
              }}
              {...{
                placeholder: "Select date",
                startDate: "2023-09-02",
                startPlaceholder: "Start date",
                date: "2023-09-02",
                endDate: "2023-09-09",
                endPlaceholder: "End date",
                state: "focused",
                status: "default",
                size: "small",
                range: false,
              }}
            />
            {/* name="🧬 dropdown menu" id="202:39338" type="INSTANCE" */}
            <QodeCustom20232979
              style={{
                display: "flex",
                width: "280px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: "-40px",
                bottom: "-332px",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background:
                  "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              }}
              {...{
                monthStartDate: "2020",
                dayStartDate: "Dec 2020",
                dayEndDate: "Jan 2021",
                monthDate: "2020",
                dayDate: "Dec 2020",
                monthEndDate: "2021",
                yearDate: "2020-2029",
                yearStartDate: "2020-2029",
                yearEndDate: "2030-2039",
                type: "day",
                range: false,
              }}
            />
          </div>
        </>
      )}
    </>
  )
}
