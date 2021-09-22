// Re-format a timestamp from the backend into a more readable form
export function formatTimestamp(timestamp) {
  let tokens = timestamp.split("T")

  // Return the original string if it doesn't appear to be in the expected formatting
  if (tokens.length !== 2) {
    return timestamp
  }

  let formattedString = ""

  // Format the date as DD/MM/YYYY
  let dateTokens = tokens[0].split("-")

  formattedString += dateTokens[2] + "/" // date
  formattedString += dateTokens[1] + "/" // month
  formattedString += dateTokens[0] // year

  // Add a space between the date and time
  formattedString += " "

  // Format the time as HH:MM
  let timeTokens = tokens[1].split(":")
  formattedString += timeTokens[0] + ":" + timeTokens[1]

  return formattedString
}