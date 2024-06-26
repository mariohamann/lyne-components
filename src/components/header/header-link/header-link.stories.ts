import { withActions } from '@storybook/addon-actions/decorator';
import type { InputType } from '@storybook/types';
import type { Meta, StoryObj, ArgTypes, Args, Decorator } from '@storybook/web-components';
import type { TemplateResult } from 'lit';
import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

import { sbbSpread } from '../../../storybook/helpers/spread.js';

import readme from './readme.md?raw';
import './header-link.js';

const TemplateSingle = (args: Args): TemplateResult => html`
  <sbb-header-link ${sbbSpread(args)}>${args.text}</sbb-header-link>
`;

const TemplateMultiple = (args: Args): TemplateResult => html`
  <div style=${styleMap({ display: 'flex', gap: '2rem' })}>
    <sbb-header-link ${sbbSpread(args)}>${args.text} 1</sbb-header-link>
    <sbb-header-link ${sbbSpread(args)}>${args.text} 2</sbb-header-link>
    <sbb-header-link ${sbbSpread(args)}>${args.text} 3</sbb-header-link>
  </div>
`;

const text: InputType = {
  control: {
    type: 'text',
  },
};

const expandFrom: InputType = {
  control: {
    type: 'inline-radio',
  },
  options: ['zero', 'micro', 'small', 'medium', 'large', 'wide', 'ultra'],
};

const iconName: InputType = {
  control: {
    type: 'text',
  },
};

const hrefs = ['https://www.sbb.ch', 'https://github.com/lyne-design-system/lyne-components'];
const href: InputType = {
  options: Object.keys(hrefs),
  mapping: hrefs,
  control: {
    type: 'select',
    labels: {
      0: 'sbb.ch',
      1: 'GitHub Lyne Components',
    },
  },
  table: {
    category: 'Link',
  },
};

const target: InputType = {
  control: {
    type: 'text',
  },
  table: {
    category: 'Link',
  },
};

const rel: InputType = {
  control: {
    type: 'text',
  },
  table: {
    category: 'Link',
  },
};

const download: InputType = {
  control: {
    type: 'boolean',
  },
  table: {
    category: 'Link',
  },
};

const ariaLabel: InputType = {
  control: { type: 'text' },
};

const basicArgTypes: ArgTypes = {
  text,
  'expand-from': expandFrom,
  'icon-name': iconName,
  href,
  target,
  rel,
  download,
  'aria-label': ariaLabel,
};

const basicArgs: Args = {
  text: 'Menu',
  'expand-from': expandFrom.options[0],
  'icon-name': 'hamburger-menu-small',
  href: href.options[1],
  target: '_blank',
  rel: undefined,
  download: false,
  'aria-label': undefined,
};

export const sbbHeaderActionLink: StoryObj = {
  render: TemplateSingle,
  argTypes: basicArgTypes,
  args: { ...basicArgs },
};

export const sbbHeaderActionLinkMultiple: StoryObj = {
  render: TemplateMultiple,
  argTypes: basicArgTypes,
  args: { ...basicArgs },
};

const meta: Meta = {
  decorators: [
    (story) => html` <div style=${styleMap({ padding: '2rem' })}>${story()}</div> `,
    withActions as Decorator,
  ],
  parameters: {
    actions: {
      handles: ['click'],
    },
    backgrounds: {
      disable: true,
    },
    docs: {
      extractComponentDescription: () => readme,
    },
  },
  title: 'components/sbb-header/sbb-header-link',
};

export default meta;
