import { assert, expect } from '@open-wc/testing';
import { html } from 'lit/static-html.js';

import images from '../core/images.js';
import { fixture } from '../core/testing/private.js';
import { waitForLitRender } from '../core/testing.js';

import { SbbTeaserHeroElement } from './teaser-hero.js';

describe(`sbb-teaser-hero with ${fixture.name}`, () => {
  let element: SbbTeaserHeroElement;

  it('renders', async () => {
    element = await fixture(
      html`<sbb-teaser-hero href="https://www.sbb.ch" image-src="${images[0]}"></sbb-teaser-hero>`,
      { modules: ['./teaser-hero.ts'] },
    );
    assert.instanceOf(element, SbbTeaserHeroElement);
  });

  it('should receive focus', async () => {
    element = await fixture(
      html`<sbb-teaser-hero href="link" id="focus-id">Hero content</sbb-teaser-hero>`,
      { modules: ['./teaser-hero.ts'] },
    );

    element.focus();
    await waitForLitRender(element);

    expect(document.activeElement!.id).to.be.equal('focus-id');
  });
});
