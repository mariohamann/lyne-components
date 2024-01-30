import { withActions } from '@storybook/addon-actions/decorator';
import type { InputType } from '@storybook/types';
import type { Args, Decorator, Meta, StoryObj } from '@storybook/web-components';
import type { TemplateResult } from 'lit';
import { html } from 'lit';

import readme from './readme.md?raw';

import './screenreader-only';

const content: InputType = {
  control: {
    type: 'text',
  },
};

const Template = (args: Args): TemplateResult =>
  html`There is a visually hidden text here:
    <sbb-screenreader-only>${args.content}</sbb-screenreader-only>`;

export const Default: StoryObj = {
  render: Template,
  argTypes: { content },
  args: { content: `I'm visually hidden, but read to screen reader.` },
};

const meta: Meta = {
  decorators: [withActions as Decorator],
  parameters: {
    backgrounds: {
      disable: true,
    },
    docs: {
      extractComponentDescription: () => readme,
    },
  },
  title: 'internals/sbb-screenreader-only',
};

export default meta;
