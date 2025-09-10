// Mozilla User Preferences
//
// If you make changes to this file while the application is running,
// the changes will be overwritten when the application exits.
//
// To change a preference value, you can either:
// - modify it via the UI (e.g. via about:config in the browser); or
// - set it within a user.js file in your profile.

// DevTools
user_pref('devtools.chrome.enabled', true);
user_pref('devtools.debugger.remote-enabled', true);

// CSS customization
user_pref('toolkit.legacyUserProfileCustomizations.stylesheets', true);

// Zen compact view
user_pref('zen.view.compact.hide-toolbar', true);
user_pref('zen.view.compact.should-enable-at-startup', true);
user_pref('zen.view.use-single-toolbar', true);

// Language
user_pref('intl.accept_languages', 'es-ES, es, en-US, en');
user_pref('intl.locale.requested', 'es-ES,en-US');

// General
user_pref('browser.preferences.experimental.hidden', true);
user_pref('browser.tabs.allow_transparent_browser', true);
user_pref('browser.search.separatePrivateDefault', false);
user_pref('browser.shell.defaultBrowserCheckCount', 1);

// Search & URL Bar
user_pref('browser.toolbars.bookmarks.visibility', 'always');
user_pref('browser.urlbar.placeholderName', 'DuckDuckGo');
user_pref('browser.urlbar.placeholderName.private', 'DuckDuckGo');
user_pref('browser.newtabpage.activity-stream.feeds.topsites', true);
user_pref('browser.newtabpage.activity-stream.newtabWallpapers.wallpaper', 'custom');
user_pref('zen.urlbar.replace-newtab', false);

// Form autofill
user_pref('extensions.formautofill.creditCards.enabled', false);

// History
user_pref('places.history.enabled', false);

// Privacy & Cleanup
user_pref('privacy.history.custom', true);
user_pref('privacy.purge_trackers.date_in_cookie_database', '0');
user_pref('privacy.sanitize.clearOnShutdown.hasMigratedToNewPrefs3', true);

// Privacy & Cleanup Sync (disabled by user)
// user_pref("services.sync.prefs.sync-seen.privacy.clearOnShutdown_v2.cache", true);
// user_pref("services.sync.prefs.sync-seen.privacy.clearOnShutdown_v2.cookiesAndStorage", true);
// user_pref("services.sync.prefs.sync-seen.privacy.clearOnShutdown_v2.formdata", true);
// user_pref("services.sync.prefs.sync-seen.privacy.clearOnShutdown_v2.siteSettings", true);

// Theme (Nebula)
user_pref('nebula-compact-mode-no-sidebar-bg', true);
user_pref('nebula-default-sound-style', 1);
user_pref('nebula-disable-container-styling', true);
user_pref('nebula-disable-menu-animations', true);
user_pref('nebula-essentials-gray-icons', true);
user_pref('nebula-glow-gradient', 0);
user_pref('nebula-macos-style-buttons', true);
user_pref('nebula-nogaps-compact-mod', false);
user_pref('nebula-nogaps-mod', false);
user_pref('nebula-pinned-extensions-mod', true);
user_pref('nebula-pinned-tabs-bg', true);
user_pref('nebula-remove-workspace-indicator', true);
user_pref('nebula-tab-loading-animation', 0);
user_pref('nebula-tab-switch-animation', 1);
user_pref('nebula-tabs-no-shadow', true);
user_pref('nebula-urlbar-animation', 1);
user_pref('nebula-workspace-style', 1);
