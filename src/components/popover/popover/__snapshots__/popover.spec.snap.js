/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots["sbb-popover renders"] = 
`<div class="sbb-popover__container">
  <div
    class="sbb-popover"
    role="tooltip"
  >
    <div class="sbb-popover__content">
      <span class="sbb-popover__close">
        <sbb-button
          aria-label="Close note"
          dir="ltr"
          icon-name="cross-small"
          role="button"
          sbb-popover-close=""
          size="m"
          tabindex="0"
          type="button"
          variant="secondary"
        >
        </sbb-button>
      </span>
      <span>
        <slot>
          No content
        </slot>
      </span>
    </div>
  </div>
</div>
`;
/* end snapshot sbb-popover renders */

snapshots["sbb-popover A11y tree Chrome"] = 
`<p>
  {
  "role": "WebArea",
  "name": ""
}
</p>
`;
/* end snapshot sbb-popover A11y tree Chrome */

snapshots["sbb-popover A11y tree Firefox"] = 
`<p>
  {
  "role": "document",
  "name": ""
}
</p>
`;
/* end snapshot sbb-popover A11y tree Firefox */

snapshots["sbb-popover A11y tree Safari"] = 
`<p>
  {
  "role": "WebArea",
  "name": ""
}
</p>
`;
/* end snapshot sbb-popover A11y tree Safari */
