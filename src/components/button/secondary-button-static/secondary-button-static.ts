import type { CSSResultGroup } from 'lit';
import { customElement } from 'lit/decorators.js';

import { SbbActionBaseElement, SbbDisabledMixin } from '../../core/common-behaviors';
import { buttonCommonStyle, buttonSecondaryStyle, SbbButtonCommonElementMixin } from '../common';

/**
 * It displays a static button enhanced with the SBB Design in the 'secondary' variant.
 *
 * @slot - Use the unnamed slot to add content to the secondary-button-static.
 * @slot icon - Slot used to display the icon, if one is set
 */
@customElement('sbb-secondary-button-static')
export class SbbSecondaryButtonStaticElement extends SbbButtonCommonElementMixin(
  SbbDisabledMixin(SbbActionBaseElement),
) {
  public static override styles: CSSResultGroup = [buttonCommonStyle, buttonSecondaryStyle];
}

declare global {
  interface HTMLElementTagNameMap {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'sbb-secondary-button-static': SbbSecondaryButtonStaticElement;
  }
}
