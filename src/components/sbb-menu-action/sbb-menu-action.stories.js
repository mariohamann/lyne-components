import events from './sbb-menu-action.events.ts';
import { h } from 'jsx-dom';
import readme from './readme.md';

const getBasicTemplate = ({ text, 'menu-action-id': menuActionId, ...args }, id, iconSlot) => (
  <sbb-menu-action {...args} menu-action-id={`${menuActionId}-${id}`}>
    {text} {id}
    {iconSlot && <sbb-icon slot="icon" name="pie-small" />}
  </sbb-menu-action>
);

const TemplateMenuAction = (args) => (
  <div>
    {getBasicTemplate(args, 1)}
    {getBasicTemplate(args, 2)}
    {getBasicTemplate(args, 3)}
  </div>
);

const TemplateMenuActionCustomIcon = (args) => (
  <div>
    {getBasicTemplate(args, 1, true)}
    {getBasicTemplate(args, 2, false)}
    {getBasicTemplate(args, 3, true)}
  </div>
);

const text = {
  control: {
    type: 'text',
  },
};

const amount = {
  control: {
    type: 'text',
  },
};

const menuActionId = {
  control: {
    type: 'text',
  },
};

const iconName = {
  control: {
    type: 'text',
  },
  table: {
    category: 'Icon',
  },
};

const href = {
  control: {
    type: 'text',
  },
  table: {
    category: 'Link',
  },
};

const target = {
  control: {
    type: 'text',
  },
  table: {
    category: 'Link',
  },
};

const rel = {
  control: {
    type: 'text',
  },
  table: {
    category: 'Link',
  },
};

const download = {
  control: {
    type: 'boolean',
  },
  table: {
    category: 'Link',
  },
};

const type = {
  control: {
    type: 'select',
  },
  options: ['button', 'reset', 'submit'],
  table: {
    category: 'Button',
  },
};

const disabled = {
  control: {
    type: 'boolean',
  },
  table: {
    category: 'Button',
  },
};

const name = {
  control: {
    type: 'text',
  },
  table: {
    category: 'Button',
  },
};

const value = {
  control: {
    type: 'text',
  },
  table: {
    category: 'Button',
  },
};

const form = {
  control: {
    type: 'text',
  },
  table: {
    category: 'Button',
  },
};

const accessibilityControls = {
  control: {
    type: 'text',
  },
  table: {
    category: 'Button',
  },
};

const accessibilityHaspopup = {
  control: {
    type: 'text',
  },
  table: {
    category: 'Button',
  },
};

const accessibilityLabel = {
  control: {
    type: 'text',
  },
};

const accessibilityDescribedby = {
  control: {
    type: 'text',
  },
};

const accessibilityLabelledby = {
  control: {
    type: 'text',
  },
};

const defaultArgTypes = {
  text,
  amount,
  'menu-action-id': menuActionId,
  'icon-name': iconName,
  href,
  target,
  rel,
  download,
  type,
  disabled,
  name,
  value,
  form,
  'accessibility-controls': accessibilityControls,
  'accessibility-haspopup': accessibilityHaspopup,
  'accessibility-label': accessibilityLabel,
  'accessibility-describedby': accessibilityDescribedby,
  'accessibility-labelledby': accessibilityLabelledby,
};

const defaultArgs = {
  text: 'Details',
  amount: '99',
  'menu-action-id': undefined,
  'icon-name': 'tick-small',

  href: 'https://www.sbb.ch/en',
  target: '_blank',
  rel: undefined,
  download: false,
  type: undefined,
  disabled: false,
  name: undefined,
  value: undefined,
  form: undefined,
  'accessibility-controls': undefined,
  'accessibility-haspopup': undefined,
  'accessibility-label': 'Details',
  'accessibility-describedby': '',
  'accessibility-labelledby': '',
};

const buttonArgs = {
  ...defaultArgs,
  href: undefined,
  type: type.options[0],
  name: 'detail',
  value: 'Value',
  form: 'form-name',
};

export const menuActionLink = TemplateMenuAction.bind({});
menuActionLink.argTypes = defaultArgTypes;
menuActionLink.args = { ...defaultArgs };
menuActionLink.documentation = {
  title: 'Menu action - link mode',
};

export const menuActionButton = TemplateMenuAction.bind({});
menuActionButton.argTypes = defaultArgTypes;
menuActionButton.args = { ...buttonArgs };
menuActionButton.documentation = {
  title: 'Menu action - button mode',
};

export const menuActionLinkCustomIconNoAmount = TemplateMenuActionCustomIcon.bind({});
menuActionLinkCustomIconNoAmount.argTypes = defaultArgTypes;
menuActionLinkCustomIconNoAmount.args = {
  ...defaultArgs,
  amount: undefined,
  'icon-name': undefined,
};
menuActionLinkCustomIconNoAmount.documentation = {
  title: 'Menu action - link mode, custom icon, no amount',
};

export const menuActionLinkNoIconNoAmount = TemplateMenuAction.bind({});
menuActionLinkNoIconNoAmount.argTypes = defaultArgTypes;
menuActionLinkNoIconNoAmount.args = { ...defaultArgs, 'icon-name': undefined, amount: undefined };
menuActionLinkNoIconNoAmount.documentation = {
  title: 'Menu action - link mode, no icon, no amount',
};

export const menuActionButtonDisabled = TemplateMenuAction.bind({});
menuActionButtonDisabled.argTypes = defaultArgTypes;
menuActionButtonDisabled.args = { ...buttonArgs, disabled: true };
menuActionButtonDisabled.documentation = {
  title: 'Menu action - button mode (disabled)',
};

export const menuActionButtonEllipsis = TemplateMenuAction.bind({});
menuActionButtonEllipsis.argTypes = defaultArgTypes;
menuActionButtonEllipsis.args = {
  ...buttonArgs,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};
menuActionButtonEllipsis.documentation = {
  title: 'Menu action - button mode (disabled)',
};

export default {
  decorators: [
    (Story) => (
      <div style={'background-color: var(--sbb-color-black-default); width: 320px;'}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    actions: {
      handles: [events.click],
    },
    backgrounds: {
      disable: true,
    },
    docs: {
      extractComponentDescription: () => readme,
    },
  },
  title: 'components/menu/sbb-menu-action',
};