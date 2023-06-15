/** @jsx h */
import events from './sbb-tooltip.events';
import { Fragment, h, JSX } from 'jsx-dom';
import readme from './readme.md';
import isChromatic from 'chromatic';
import { userEvent, within } from '@storybook/testing-library';
import { waitForComponentsReady } from '../../global/helpers/testing/wait-for-components-ready';
import { waitForStablePosition } from '../../global/helpers/testing/wait-for-stable-position';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj, ArgTypes, Args, Decorator } from '@storybook/html';
import type { InputType } from '@storybook/types';

// Story interaction executed after the story renders
const playStory = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);

  await waitForComponentsReady(() =>
    canvas.getByTestId('tooltip').shadowRoot.querySelector('dialog.sbb-tooltip')
  );

  await waitForStablePosition(() => canvas.getByTestId('tooltip-trigger'));

  const button = canvas.getByTestId('tooltip-trigger');
  await userEvent.click(button);
};

const hoverTrigger: InputType = {
  control: {
    type: 'boolean',
  },
};

const openDelay: InputType = {
  control: {
    type: 'number',
  },
};

const closeDelay: InputType = {
  control: {
    type: 'number',
  },
};

const disableAnimation: InputType = {
  control: {
    type: 'boolean',
  },
};

const defaultArgTypes: ArgTypes = {
  'hover-trigger': hoverTrigger,
  'open-delay': openDelay,
  'close-delay': closeDelay,
  'disable-animation': disableAnimation,
};

const defaultArgs: Args = {
  'hover-trigger': false,
  'open-delay': undefined,
  'close-delay': undefined,
  'disable-animation': isChromatic(),
};

const tooltipTrigger = (position: Record<string, string>): JSX.Element => (
  <sbb-tooltip-trigger
    data-testid="tooltip-trigger"
    style={{ 'margin-inline': '2rem', position: 'absolute', cursor: 'pointer', ...position }}
    id="tooltip-trigger"
  ></sbb-tooltip-trigger>
);

const tooltip = (args): JSX.Element => (
  <sbb-tooltip data-testid="tooltip" trigger="tooltip-trigger" {...args}>
    <p id="tooltip-content" style={{ margin: '0', 'font-size': 'var(--sbb-font-size-text-s)' }}>
      Simple information tooltip with link.{' '}
      <sbb-link
        size="s"
        variant="block"
        icon-name="chevron-small-right-small"
        icon-placement="end"
        sbb-tooltip-close
      >
        Learn More
      </sbb-link>
    </p>
  </sbb-tooltip>
);

const StartBelowTemplate = (args): JSX.Element => (
  <Fragment>
    {tooltipTrigger({ 'inset-inline-start': '2rem' })}
    {tooltip(args)}
  </Fragment>
);

const CenterBelowTemplate = (args): JSX.Element => (
  <Fragment>
    {tooltipTrigger({ 'inset-inline-start': 'calc(50% - 44px)' })}
    {tooltip(args)}
  </Fragment>
);

const EndBelowTemplate = (args): JSX.Element => (
  <Fragment>
    {tooltipTrigger({ 'inset-inline-end': '2rem' })}
    {tooltip(args)}
  </Fragment>
);

const StartAboveTemplate = (args): JSX.Element => (
  <Fragment>
    {tooltipTrigger({ 'inset-block-end': '2rem' })}
    {tooltip(args)}
  </Fragment>
);

const CenterAboveTemplate = (args): JSX.Element => (
  <Fragment>
    {tooltipTrigger({ 'inset-inline-start': 'calc(50% - 44px)', 'inset-block-end': '2rem' })}
    {tooltip(args)}
  </Fragment>
);

const EndAboveTemplate = (args): JSX.Element => (
  <Fragment>
    {tooltipTrigger({ 'inset-inline-end': '2rem', 'inset-block-end': '2rem' })}
    {tooltip(args)}
  </Fragment>
);

const LongContentTemplate = (args): JSX.Element => (
  <Fragment>
    {tooltipTrigger({ 'inset-inline-start': '2rem' })}
    <sbb-tooltip data-testid="tooltip" trigger="tooltip-trigger" {...args}>
      <p id="tooltip-content" style={{ margin: '0', 'font-size': 'var(--sbb-font-size-text-s)' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </sbb-tooltip>
  </Fragment>
);

const HoverTriggerTemplate = (args): JSX.Element => (
  <Fragment>
    {tooltipTrigger({ 'inset-inline-start': '2rem' })}
    {tooltip(args)}
  </Fragment>
);

export const StartBelow: StoryObj = {
  render: StartBelowTemplate,
  argTypes: defaultArgTypes,
  args: { ...defaultArgs },
  play: isChromatic() && playStory,
};

export const CenterBelow: StoryObj = {
  render: CenterBelowTemplate,
  argTypes: defaultArgTypes,
  args: { ...defaultArgs },
  play: isChromatic() && playStory,
};

export const EndBelow: StoryObj = {
  render: EndBelowTemplate,
  argTypes: defaultArgTypes,
  args: { ...defaultArgs },
  play: isChromatic() && playStory,
};

export const StartAbove: StoryObj = {
  render: StartAboveTemplate,
  argTypes: defaultArgTypes,
  args: { ...defaultArgs },
  play: isChromatic() && playStory,
};

export const CenterAbove: StoryObj = {
  render: CenterAboveTemplate,
  argTypes: defaultArgTypes,
  args: { ...defaultArgs },
  play: isChromatic() && playStory,
};

export const EndAbove: StoryObj = {
  render: EndAboveTemplate,
  argTypes: defaultArgTypes,
  args: { ...defaultArgs },
  play: isChromatic() && playStory,
};

export const LongContent: StoryObj = {
  render: LongContentTemplate,
  argTypes: defaultArgTypes,
  args: { ...defaultArgs },
  play: isChromatic() && playStory,
};

export const HoverTrigger: StoryObj = {
  render: HoverTriggerTemplate,
  argTypes: defaultArgTypes,
  args: {
    ...defaultArgs,
    'hover-trigger': true,
    'open-delay': 0,
    'close-delay': 0,
  },
  play: isChromatic() && playStory,
};

const meta: Meta = {
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', position: 'relative', 'min-height': 'calc(100vh - 2rem)' }}>
        <Story />
      </div>
    ),
    withActions as Decorator,
  ],
  parameters: {
    chromatic: { disableSnapshot: false },
    actions: {
      handles: [events.willOpen, events.didOpen, events.didClose, events.willClose],
    },
    backgrounds: {
      disable: true,
    },
    docs: {
      story: { inline: false, iframeHeight: '250px' },

      extractComponentDescription: () => readme,
    },
    layout: 'fullscreen',
  },
  title: 'components/sbb-tooltip',
};

export default meta;