import { CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { documentLanguage, HandlerRepository, languageChangeHandlerAspect } from '../core/eventing';
import { i18nClass, i18nOccupancy } from '../core/i18n';
import icons from '../core/timetable/icons.json';

import style from './timetable-occupancy.scss?lit&inline';

/**
 * Used in `sbb-timetable-row`, it displays information about wagon occupancy.
 */
@customElement('sbb-timetable-occupancy')
export class SbbTimetableOccupancy extends LitElement {
  public static override styles: CSSResultGroup = style;

  /**
   * Stringified JSON which defines most of the
   * content of the component. Please check the
   * individual stories to get an idea of the
   * structure.
   */
  @property() public config!: string;

  @state() private _currentLanguage = documentLanguage();

  private _handlerRepository = new HandlerRepository(
    this,
    languageChangeHandlerAspect((l) => (this._currentLanguage = l)),
  );

  public override connectedCallback(): void {
    super.connectedCallback();
    this._handlerRepository.connect();
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._handlerRepository.disconnect();
  }

  protected override render(): TemplateResult {
    const { occupancyItems } = JSON.parse(this.config);

    return html`
      <ul class="occupancy__list" role="list">
        ${occupancyItems.map((occupancyItem) => {
          const occupancyText = i18nOccupancy[occupancyItem.occupancy][this._currentLanguage];

          const classText = occupancyItem.class === '1' ? 'first' : 'second';

          const a11yLabel = `${i18nClass[classText][this._currentLanguage]}. ${occupancyText}.`;

          return html`<li class="occupancy__list-item">
            <span class="occupancy__class">
              <span aria-hidden="true" class="occupancy__class--visual">
                ${occupancyItem.class}.
              </span>
              <span class="occupancy__class--visually-hidden">${a11yLabel}</span>
            </span>
            <span
              aria-hidden="true"
              class="occupancy__icon"
              .innerHTML=${icons[occupancyItem.icon]}
              role="presentation"
            ></span>
          </li>`;
        })}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'sbb-timetable-occupancy': SbbTimetableOccupancy;
  }
}