/**
 * Utility functions for dynamic date generation in guides
 */

/**
 * Get the current year
 * @returns Current year as string (e.g., "2025")
 */
export function getCurrentYear(): string {
  return new Date().getFullYear().toString()
}

/**
 * Get the last update date (current month - 2 months)
 * @returns Formatted date string in French (e.g., "Août 2025")
 */
export function getLastUpdateDate(): string {
  const now = new Date()
  // Subtract 2 months
  const twoMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 2, 1)

  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ]

  const month = months[twoMonthsAgo.getMonth()]
  const year = twoMonthsAgo.getFullYear()

  return `${month} ${year}`
}
