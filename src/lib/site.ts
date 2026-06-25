/**
 * Central site configuration.
 *
 * This is the ONE place to plug in real values. The GitHub links are live;
 * the per-platform download links currently point at the Releases page — swap
 * them for specific asset URLs once a release is published.
 */

/** The public GitHub repository for Stillpoint. */
export const GITHUB_URL = 'https://github.com/AnahatM/Stillpoint'

/** GitHub Releases page (the "all downloads" link). */
export const RELEASES_URL = 'https://github.com/AnahatM/Stillpoint/releases'

/** Optional contact address shown in the footer. */
export const CONTACT_EMAIL = 'REPLACE_WITH_CONTACT_EMAIL'

/** Developer details — shown in the "Built by" section and footer. */
export const DEVELOPER = {
  name: 'Anahat Mudgal',
  portfolio: 'https://anahatmudgal.com',
  github: 'https://github.com/AnahatM',
  avatar: 'https://avatars.githubusercontent.com/u/61635745?v=4',
} as const

/**
 * Download links. Only Windows ships today; this points at the Releases page
 * for now — replace it with the specific asset URL once a build is published.
 * (macOS is shown on the site as a disabled/“coming later” card.)
 */
export const DOWNLOADS = {
  windows: 'https://github.com/AnahatM/Stillpoint/releases', // Stillpoint-Setup-x.y.z.exe
} as const

/** Current version label shown on the download cards. */
export const APP_VERSION = 'v1.0.0'
