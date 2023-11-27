import type { InputType } from '@storybook/types';
import type { Meta, StoryObj, ArgTypes, Args } from '@storybook/web-components';
import { html, TemplateResult } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

import { sbbSpread } from '../../core/dom';

import readme from './readme.md?raw';

import './breadcrumb-group';
import '../breadcrumb';

const addBreadcrumb = (): void => {
  const container = document.getElementById('container')!;
  const breadcrumb = document.createElement('sbb-breadcrumb');
  breadcrumb.setAttribute('href', '/');
  breadcrumb.textContent = 'Breadcrumb ' + container.children.length;
  container.append(breadcrumb);
};

const removeBreadcrumb = (): void => {
  const container = document.getElementById('container')!;
  if (container.children.length > 1) {
    container.removeChild(container.lastElementChild!);
  }
};

const numberOfBreadcrumbs: InputType = {
  control: {
    type: 'number',
  },
};

const text: InputType = {
  control: {
    type: 'text',
  },
  table: {
    category: 'Breadcrumb',
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
    category: 'Breadcrumb',
  },
};

const target: InputType = {
  control: {
    type: 'text',
  },
  table: {
    category: 'Breadcrumb',
  },
};

const rel: InputType = {
  control: {
    type: 'text',
  },
  table: {
    category: 'Breadcrumb',
  },
};

const download: InputType = {
  control: {
    type: 'boolean',
  },
  table: {
    category: 'Breadcrumb',
  },
};

const iconName: InputType = {
  control: {
    type: 'text',
  },
  table: {
    category: 'Breadcrumb',
  },
};

const defaultArgTypes: ArgTypes = {
  numberOfBreadcrumbs,
  text,
  href,
  target,
  rel,
  download,
  'icon-name': iconName,
};

const defaultArgs: Args = {
  numberOfBreadcrumbs: 3,
  text: 'Breadcrumb',
  href: 'https://github.com/lyne-design-system/lyne-components',
  target: '_blank',
  rel: undefined,
  download: false,
  'icon-name': undefined,
};

const breadcrumbTemplate = (args, text: string, i: number): TemplateResult => html`
  <sbb-breadcrumb ${sbbSpread(args)}> ${text} ${i} </sbb-breadcrumb>
`;

const createBreadcrumbs = ({ numberOfBreadcrumbs, text, ...args }): TemplateResult => html`
  <sbb-breadcrumb href="/" icon-name="house-small"></sbb-breadcrumb>
  ${new Array(numberOfBreadcrumbs - 1)
    .fill(undefined)
    .map((_, i) => breadcrumbTemplate(args, text, i + 1))}
`;

const Template = (args): TemplateResult => html`
  <sbb-breadcrumb-group aria-label="You are here:" id="container">
    ${createBreadcrumbs(args)}
  </sbb-breadcrumb-group>
  <div style=${styleMap({ 'margin-block': '2rem', gap: '1rem', display: 'flex' })}>
    <button @click=${() => addBreadcrumb()}>Add</button>
    <button @click=${() => removeBreadcrumb()}>Remove</button>
  </div>
`;

export const Default: StoryObj = {
  render: Template,
  argTypes: defaultArgTypes,
  args: { ...defaultArgs },
};

export const CollapsedState: StoryObj = {
  render: Template,
  argTypes: defaultArgTypes,
  args: { ...defaultArgs, numberOfBreadcrumbs: 25 },
};

const meta: Meta = {
  decorators: [
    (story) => html`
      <div style=${styleMap({ padding: '2rem' })}>
        ${story()}
        <div>Page content</div>
      </div>
    `,
  ],
  parameters: {
    backgrounds: {
      disable: true,
    },
    docs: {
      extractComponentDescription: () => readme,
    },
  },
  title: 'components/sbb-breadcrumb/sbb-breadcrumb-group',
};

export default meta;