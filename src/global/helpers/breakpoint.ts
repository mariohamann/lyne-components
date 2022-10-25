export type Breakpoint = 'zero' | 'micro' | 'small' | 'medium' | 'wide' | 'large' | 'ultra';

/**
 * Checks whether the document matches a particular media query.
 * It will rely on the global CSS variables to determine the value of the breakpoints.
 *
 * @param from The breakpoint corresponding to the `min-width` value of the media query (optional).
 * @param to The breakpoint corresponding to the `max-width` value of the media query (optional).
 * @returns A boolean indicating whether the window matches the breakpoint.
 */
export function isBreakpoint(from?: Breakpoint, to?: Breakpoint): boolean {
  const computedStyle = getComputedStyle(document.documentElement);

  const breakpointMin = computedStyle.getPropertyValue(`--sbb-breakpoint-${from}-min`);
  const breakpointMax = computedStyle.getPropertyValue(`--sbb-breakpoint-${to}-max`);

  const minWidth = breakpointMin && `(min-width: ${breakpointMin})`;
  const maxWidth = breakpointMax && `(max-width: ${breakpointMax})`;
  const and = breakpointMin && breakpointMax && ' and ';

  return window.matchMedia(`${minWidth}${and}${maxWidth}`).matches;
}