import { formatTimestamp } from "./utils"

test("correctly formats a standard timestamp", () => {
  let timestamp = "2021-09-11T09:01:08.234+00:00"

  expect(formatTimestamp(timestamp)).toBe("11/09/2021 09:01")
})

test("leaves an abnormally formatted string in its original form", () => {
  // String is missing a 'T'
  let timestamp = "2021-09-1109:01:08.234+00:00"

  expect(formatTimestamp(timestamp)).toBe("2021-09-1109:01:08.234+00:00")
})