/**
 * Central site configuration.
 *
 * This is the ONE place to plug in real values after the project is published.
 * Search for "REPLACE_WITH_" to find every placeholder that needs updating.
 */

/** The public GitHub repository for Stillpoint. */
export const GITHUB_URL = 'REPLACE_WITH_GITHUB_URL'

/** GitHub Releases page (the "all downloads" link). */
export const RELEASES_URL = 'REPLACE_WITH_GITHUB_RELEASE_URL'

/** Optional contact address shown in the footer. */
export const CONTACT_EMAIL = 'REPLACE_WITH_CONTACT_EMAIL'

/** Per-platform download links. Point these at specific release assets. */
export const DOWNLOADS = {
  windows: 'REPLACE_WITH_GITHUB_RELEASE_URL', // Stillpoint-Setup-x.y.z.exe
  macos: 'REPLACE_WITH_GITHUB_RELEASE_URL', //   Stillpoint-x.y.z.dmg
  linux: 'REPLACE_WITH_GITHUB_RELEASE_URL', //   Stillpoint-x.y.z.AppImage
} as const

/** Current version label shown on the download cards. */
export const APP_VERSION = 'v1.0.0'
