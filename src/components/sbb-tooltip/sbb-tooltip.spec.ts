import { SbbTooltip } from './sbb-tooltip';
import { newSpecPage } from '@stencil/core/testing';
import { i18nCloseTooltip } from '../../global/i18n';

describe('sbb-tooltip', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SbbTooltip],
      html: '<sbb-tooltip />',
    });

    expect(root).toEqualHtml(`
        <sbb-tooltip>
          <mock:shadow-root>
          <dialog class="sbb-tooltip">
            <div class="sbb-tooltip__content">
              <span>
                <slot>
                  No content
                </slot>
              </span>
              <span class="sbb-tooltip__close">
                <sbb-button accessibility-label="${i18nCloseTooltip.en}" iconname="cross-small" sbb-tooltip-close="" size="m" type="button" variant="secondary"></sbb-button>
              </span>
            </div>
          </dialog>
          </mock:shadow-root>
        </sbb-tooltip>
      `);
  });
});
