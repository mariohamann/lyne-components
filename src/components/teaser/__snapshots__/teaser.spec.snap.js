/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots["sbb-teaser renders after centered DOM"] = 
`<sbb-teaser
  alignment="after-centered"
  aria-label="SBB teaser"
  data-action=""
  data-link=""
  dir="ltr"
  href="https://github.com/lyne-design-system/lyne-components"
  role="link"
  tabindex="0"
>
</sbb-teaser>
`;
/* end snapshot sbb-teaser renders after centered DOM */

snapshots["sbb-teaser renders after centered Shadow DOM"] = 
`<a
  class="sbb-action-base sbb-teaser"
  href="https://github.com/lyne-design-system/lyne-components"
  role="presentation"
  tabindex="-1"
>
  <span class="sbb-teaser__container">
    <span class="sbb-teaser__image-wrapper">
      <slot name="image">
      </slot>
    </span>
    <span class="sbb-teaser__text">
      <sbb-chip
        class="sbb-teaser__chip"
        color="charcoal"
        size="xxs"
      >
        <slot name="chip">
        </slot>
      </sbb-chip>
      <sbb-title
        aria-level="5"
        class="sbb-teaser__lead"
        level="5"
        role="heading"
        visual-level="5"
      >
        <slot name="title">
        </slot>
      </sbb-title>
      <span class="sbb-teaser__description">
        <slot>
        </slot>
      </span>
    </span>
  </span>
</a>
`;
/* end snapshot sbb-teaser renders after centered Shadow DOM */

snapshots["sbb-teaser renders after centered A11y tree Firefox"] = 
`<p>
  {
  "role": "document",
  "name": "",
  "children": [
    {
      "role": "link",
      "name": "SBB teaser",
      "children": [
        {
          "role": "link",
          "name": "​",
          "value": "https://github.com/lyne-design-system/lyne-components"
        }
      ]
    }
  ]
}
</p>
`;
/* end snapshot sbb-teaser renders after centered A11y tree Firefox */

snapshots["sbb-teaser renders after with title level set DOM"] = 
`<sbb-teaser
  alignment="after"
  aria-label="SBB teaser"
  data-action=""
  data-link=""
  dir="ltr"
  href="https://github.com/lyne-design-system/lyne-components"
  role="link"
  tabindex="0"
  title-level="2"
>
</sbb-teaser>
`;
/* end snapshot sbb-teaser renders after with title level set DOM */

snapshots["sbb-teaser renders after with title level set Shadow DOM"] = 
`<a
  class="sbb-action-base sbb-teaser"
  href="https://github.com/lyne-design-system/lyne-components"
  role="presentation"
  tabindex="-1"
>
  <span class="sbb-teaser__container">
    <span class="sbb-teaser__image-wrapper">
      <slot name="image">
      </slot>
    </span>
    <span class="sbb-teaser__text">
      <sbb-chip
        class="sbb-teaser__chip"
        color="charcoal"
        size="xxs"
      >
        <slot name="chip">
        </slot>
      </sbb-chip>
      <sbb-title
        aria-level="2"
        class="sbb-teaser__lead"
        level="2"
        role="heading"
        visual-level="5"
      >
        <slot name="title">
        </slot>
      </sbb-title>
      <span class="sbb-teaser__description">
        <slot>
        </slot>
      </span>
    </span>
  </span>
</a>
`;
/* end snapshot sbb-teaser renders after with title level set Shadow DOM */

snapshots["sbb-teaser renders below with projected content DOM"] = 
`<sbb-teaser
  alignment="below"
  aria-label="SBB teaser"
  data-action=""
  data-link=""
  data-slot-names="chip image title unnamed"
  dir="ltr"
  href="https://github.com/lyne-design-system/lyne-components"
  role="link"
  tabindex="0"
>
  <img
    alt="400x300"
    slot="image"
    src="https://cdn.img.sbb.ch/content/dam/internet/lyne/Billetkontrolle.jpg"
  >
  <span slot="chip">
    Chip
  </span>
  <span slot="title">
    TITLE
  </span>
  description
</sbb-teaser>
`;
/* end snapshot sbb-teaser renders below with projected content DOM */

snapshots["sbb-teaser renders below with projected content Shadow DOM"] = 
`<a
  class="sbb-action-base sbb-teaser"
  href="https://github.com/lyne-design-system/lyne-components"
  role="presentation"
  tabindex="-1"
>
  <span class="sbb-teaser__container">
    <span class="sbb-teaser__image-wrapper">
      <slot name="image">
      </slot>
    </span>
    <span class="sbb-teaser__text">
      <sbb-chip
        class="sbb-teaser__chip"
        color="charcoal"
        size="xxs"
      >
        <slot name="chip">
        </slot>
      </sbb-chip>
      <sbb-title
        aria-level="5"
        class="sbb-teaser__lead"
        level="5"
        role="heading"
        visual-level="5"
      >
        <slot name="title">
        </slot>
      </sbb-title>
      <span class="sbb-teaser__description">
        <slot>
        </slot>
      </span>
    </span>
  </span>
</a>
`;
/* end snapshot sbb-teaser renders below with projected content Shadow DOM */

snapshots["sbb-teaser renders after centered A11y tree Chrome"] = 
`<p>
  {
  "role": "WebArea",
  "name": "",
  "children": [
    {
      "role": "link",
      "name": "SBB teaser",
      "children": [
        {
          "role": "link",
          "name": "​"
        }
      ]
    }
  ]
}
</p>
`;
/* end snapshot sbb-teaser renders after centered A11y tree Chrome */

