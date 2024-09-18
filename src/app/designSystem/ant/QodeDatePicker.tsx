// id="202:29864"
import React from "react"
import { Flex } from "antd"
import { DatePicker, DatePickerProps } from "antd"

export interface QodeDatePickerProps
  extends Omit<
    DatePickerProps,
    | "endPlaceholder"
    | "rIcon"
    | "startDate"
    | "startPlaceholder"
    | "endDate"
    | "date"
    | "placeholder"
    | "state"
    | "status"
    | "size"
    | "range"
  > {
  endPlaceholder?: string
  rIcon?: React.ReactNode
  startDate?: string
  startPlaceholder?: string
  endDate?: string
  date?: string
  placeholder?: string
  state?: "default" | "hover" | "focused" | "selected" | "filled" | "disabled"
  status?: "default" | "error" | "warning"
  size?: "default" | "large" | "small"
  range?: "false" | "true"
}

export const QodeDatePicker: React.FC<QodeDatePickerProps> = ({
  endPlaceholder = "End date",
  rIcon = undefined,
  startDate = "2023-09-02",
  startPlaceholder = "Start date",
  endDate = "2023-09-09",
  date = "2023-09-02",
  placeholder = "Select date",
  state = "default",
  status = "default",
  size = "default",
  range = "false",
  ...rest
}) => {
  return (
    <DatePicker
      endPlaceholder={endPlaceholder}
      rIcon={rIcon}
      startDate={startDate}
      startPlaceholder={startPlaceholder}
      endDate={endDate}
      date={date}
      placeholder={placeholder}
      state={state}
      status={status}
      size={size}
      range={range}
      {...rest}
    />
  )
}
