import type { CSSResultGroup, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

import { SbbButtonBaseElement } from '../../core/base-elements.js';
import { SbbSlotStateController } from '../../core/controllers.js';
import { SbbDisabledTabIndexActionMixin, SbbNegativeMixin } from '../../core/mixins.js';
import { SbbIconNameMixin } from '../../icon.js';

import style from './mini-button.scss?lit&inline';

/**
 * It displays an icon-only button enhanced with the SBB Design;
 * it's meant to be used mainly within the sbb-form-field in prefix/suffix slot.
 *
 * @slot icon - Slot used to display the icon, if one is set
 */
@customElement('sbb-mini-button')
export class SbbMiniButtonElement extends SbbNegativeMixin(
  SbbIconNameMixin(SbbDisabledTabIndexActionMixin(SbbButtonBaseElement)),
) {
  public static override styles: CSSResultGroup = style;

  public constructor() {
    super();
    new SbbSlotStateController(this);
  }

  protected override renderTemplate(): TemplateResult {
    return super.renderIconSlot();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'sbb-mini-button': SbbMiniButtonElement;
  }
}
