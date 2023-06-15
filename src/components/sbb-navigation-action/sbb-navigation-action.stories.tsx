/** @jsx h */
import { h, JSX } from 'jsx-dom';
import readme from './readme.md';
import type { Meta, StoryObj, ArgTypes, Args } from '@storybook/html';
import type { InputType } from '@storybook/types';

const size: InputType = {
  control: {
    type: 'inline-radio',
  },
  options: ['l', 'm', 's'],
};

const ariaLabel: InputType = {
  control: {
    type: 'text',
  },
};

const href: InputType = {
  control: {
    type: 'text',
  },
};

const defaultArgTypes: ArgTypes = {
  size,
  href,
  'aria-label': ariaLabel,
};

const defaultArgs: Args = {
  size: size.options[0],
  href: undefined,
  'aria-label': undefined,
};

const Template = (args): JSX.Element => (
  <sbb-navigation-action {...args}>Label</sbb-navigation-action>
);

const style = {
  'background-color': 'var(--sbb-color-midnight-default)',
  width: 'max-content',
  padding: '1rem 2rem',
};

export const SizeL: StoryObj = {
  render: Template,
  argTypes: defaultArgTypes,
  args: { ...defaultArgs },
};

export const SizeM: StoryObj = {
  render: Template,
  argTypes: defaultArgTypes,
  args: { ...defaultArgs, size: size.options[1] },
};

export const SizeS: StoryObj = {
  render: Template,
  argTypes: defaultArgTypes,
  args: { ...defaultArgs, size: size.options[2] },
};

export const Link: StoryObj = {
  render: Template,
  argTypes: defaultArgTypes,
  args: { ...defaultArgs, href: 'https://www.sbb.ch' },
};

const meta: Meta = {
  decorators: [
    (Story) => (
      <div style={style}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      disable: true,
    },
    docs: {
      extractComponentDescription: () => readme,
    },
  },
  title: 'components/sbb-navigation-action',
};

export default meta;