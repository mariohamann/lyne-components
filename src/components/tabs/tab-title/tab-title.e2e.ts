import { assert } from '@open-wc/testing';
import { html } from 'lit/static-html.js';

import { fixture } from '../../core/testing/private.js';

import { SbbTabTitleElement } from './tab-title.js';

describe(`sbb-tab-title with ${fixture.name}`, () => {
  let element: SbbTabTitleElement;

  it('renders', async () => {
    element = await fixture(html`<sbb-tab-title></sbb-tab-title>`, { modules: ['./tab-title.ts'] });
    assert.instanceOf(element, SbbTabTitleElement);
  });
});
