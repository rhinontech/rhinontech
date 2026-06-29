/**
 * Inline, render-blocking script that sets the theme class on <html> before the
 * page paints — so there's no flash of the wrong theme on load.
 *
 * Default is dark (the brand). A stored preference of "light" switches to light;
 * anything else (including no preference) stays dark.
 */
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`;

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }}
      suppressHydrationWarning
    />
  );
}
