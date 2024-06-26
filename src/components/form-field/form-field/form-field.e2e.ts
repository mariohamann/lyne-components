import { assert, expect, nextFrame } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import { html } from 'lit/static-html.js';

import { fixture } from '../../core/testing/private.js';
import { waitForCondition, waitForLitRender } from '../../core/testing.js';
import { SbbOptionElement } from '../../option.js';
import { SbbSelectElement } from '../../select.js';

import { SbbFormFieldElement } from './form-field.js';

describe(`sbb-form-field with ${fixture.name}`, () => {
  describe('with input', () => {
    let element: SbbFormFieldElement;
    let input: HTMLInputElement;

    beforeEach(async () => {
      element = await fixture(html`<sbb-form-field><input /></sbb-form-field>`, {
        modules: ['./form-field.ts'],
      });
      input = element.querySelector<HTMLInputElement>('input')!;
    });

    it('renders', async () => {
      assert.instanceOf(element, SbbFormFieldElement);
    });

    it('should update empty input state', async () => {
      expect(element).to.have.attribute('data-input-empty');

      input.focus();
      await sendKeys({ type: 'v' });
      await waitForLitRender(element);
      expect(element).not.to.have.attribute('data-input-empty');

      await sendKeys({ press: 'Backspace' });
      await waitForLitRender(element);
      expect(element).to.have.attribute('data-input-empty');

      await sendKeys({ type: 'v' });
      await waitForLitRender(element);
      expect(element).not.to.have.attribute('data-input-empty');

      // Clearing value programmatically which does not trigger input event but can be caught by blur event.
      input.value = '';
      input.blur();
      await waitForLitRender(element);
      expect(element).to.have.attribute('data-input-empty');
    });

    it('should react to focus state', async () => {
      element = await fixture(
        html`
          <sbb-form-field><input /></sbb-form-field>
          <button></button>
        `,
        { modules: ['./form-field.ts'] },
      );
      input = element.querySelector<HTMLInputElement>('input')!;

      expect(element).not.to.have.attribute('data-input-focused');

      input.focus();
      await sendKeys({ type: 'v' });
      await waitForLitRender(element);
      expect(element).to.have.attribute('data-input-focused');

      input.focus();
      await sendKeys({ press: 'Tab' });
      await waitForLitRender(element);

      expect(element).not.to.have.attribute('data-input-focused');
    });

    it('should assign id to input and reference it in the label', async () => {
      const newLabel = document.createElement('label');
      newLabel.textContent = 'Example';
      element.prepend(newLabel);

      await waitForLitRender(element);
      const label = element.querySelector('label');

      expect(input.id).to.match(/^sbb-form-field-input-/);
      expect(label).to.have.attribute('for', input.id);
    });

    it('should reference sbb-form-error', async () => {
      // When adding a sbb-form-error
      const formError = document.createElement('sbb-form-error');
      element.append(formError);
      await waitForLitRender(element);
      await nextFrame();

      // Then input should be linked and sbb-form-error configured
      expect(input)
        .to.have.attribute('aria-describedby')
        .match(/^sbb-form-field-error-/);
      expect(formError.id).to.be.equal(input.getAttribute('aria-describedby'));
      expect(formError).to.have.attribute('role', 'status');

      // When removing sbb-form-error
      formError.remove();
      await waitForLitRender(element);

      // Then aria-describedby should be removed
      expect(input).not.to.have.attribute('aria-describedby');
    });

    it('should reference sbb-form-error with original aria-describedby', async () => {
      input.setAttribute('aria-describedby', 'foo');
      // When adding a sbb-form-error
      const formError = document.createElement('sbb-form-error');
      element.append(formError);
      await waitForLitRender(element);
      await nextFrame();

      // Then input should be linked and original aria-describedby preserved
      expect(input)
        .to.have.attribute('aria-describedby')
        .match(/^foo sbb-form-field-error-/);

      // When removing sbb-form-error

      formError.remove();
      await waitForLitRender(element);

      // Then aria-describedby should be set to foo
      expect(input).to.have.attribute('aria-describedby');
    });
  });

  describe('with textarea', () => {
    let element: SbbFormFieldElement;
    let textarea: HTMLTextAreaElement;

    beforeEach(async () => {
      element = await fixture(html`<sbb-form-field><textarea></textarea></sbb-form-field>`, {
        modules: ['./form-field.ts'],
      });
      textarea = element.querySelector<HTMLTextAreaElement>('textarea')!;
    });

    it('renders', async () => {
      assert.instanceOf(element, SbbFormFieldElement);
    });

    it('should set default rows', () => {
      expect(textarea.rows).to.be.equal(3);
    });

    it('should respect user defined rows attribute', async () => {
      element = await fixture(
        html`<sbb-form-field><textarea rows="2"></textarea></sbb-form-field>`,
        {
          modules: ['./form-field.ts'],
        },
      );
      expect(element.querySelector<HTMLTextAreaElement>('textarea')!.rows).to.be.equal(2);
    });

    it('should respect changing rows at a later time', async () => {
      textarea.rows = 1;
      expect(textarea.rows).to.be.equal(1);

      textarea.setAttribute('rows', '4');
      expect(textarea.rows).to.be.equal(4);
    });

    it('should update empty input state', async () => {
      expect(element).to.have.attribute('data-input-empty');

      textarea.focus();
      await sendKeys({ type: 'v' });
      await waitForLitRender(element);
      expect(element).not.to.have.attribute('data-input-empty');

      await sendKeys({ press: 'Backspace' });
      await waitForLitRender(element);
      expect(element).to.have.attribute('data-input-empty');

      await sendKeys({ type: 'v' });
      await waitForLitRender(element);
      expect(element).not.to.have.attribute('data-input-empty');

      // Clearing value programmatically which does not trigger input event but can be caught by blur event.
      textarea.value = '';
      textarea.blur();
      await waitForLitRender(element);
      expect(element).to.have.attribute('data-input-empty');
    });

    it('should react to focus state', async () => {
      element = await fixture(
        html`
          <sbb-form-field><textarea></textarea></sbb-form-field>
          <button></button>
        `,
        { modules: ['./form-field.ts'] },
      );
      textarea = element.querySelector<HTMLTextAreaElement>('textarea')!;

      expect(element).not.to.have.attribute('data-input-focused');

      textarea.focus();
      await sendKeys({ type: 'v' });
      await waitForLitRender(element);
      expect(element).to.have.attribute('data-input-focused');

      textarea.focus();
      await sendKeys({ press: 'Tab' });
      await waitForLitRender(element);

      expect(element).not.to.have.attribute('data-input-focused');
    });

    it('should assign id to input and reference it in the label', async () => {
      const newLabel = document.createElement('label');
      newLabel.textContent = 'Example';
      element.prepend(newLabel);

      await waitForLitRender(element);
      const label = element.querySelector('label');

      expect(textarea.id).to.match(/^sbb-form-field-input-/);
      expect(label).to.have.attribute('for', textarea.id);
    });

    it('should reference sbb-form-error', async () => {
      // When adding a sbb-form-error
      const formError = document.createElement('sbb-form-error');
      element.append(formError);
      await waitForLitRender(element);
      await nextFrame();

      // Then input should be linked and sbb-form-error configured
      expect(textarea)
        .to.have.attribute('aria-describedby')
        .match(/^sbb-form-field-error-/);
      expect(formError.id).to.be.equal(textarea.getAttribute('aria-describedby'));
      expect(formError).to.have.attribute('role', 'status');

      // When removing sbb-form-error
      formError.remove();
      await waitForLitRender(element);

      // Then aria-describedby should be removed
      expect(textarea).not.to.have.attribute('aria-describedby');
    });

    it('should reference sbb-form-error with original aria-describedby', async () => {
      textarea.setAttribute('aria-describedby', 'foo');
      // When adding a sbb-form-error
      const formError = document.createElement('sbb-form-error');
      element.append(formError);
      await waitForLitRender(element);
      await nextFrame();

      // Then input should be linked and original aria-describedby preserved
      expect(textarea)
        .to.have.attribute('aria-describedby')
        .match(/^foo sbb-form-field-error-/);

      // When removing sbb-form-error

      formError.remove();
      await waitForLitRender(element);

      // Then aria-describedby should be set to foo
      expect(textarea).to.have.attribute('aria-describedby');
    });
  });

  describe('with sbb-select', () => {
    let element: SbbFormFieldElement;
    let select: SbbSelectElement;

    beforeEach(async () => {
      element = await fixture(
        html`
          <sbb-form-field>
            <label>Example</label>
            <sbb-select><sbb-option>Test</sbb-option></sbb-select>
          </sbb-form-field>
        `,
        { modules: ['./form-field.ts', '../../select.ts', '../../option.ts'] },
      );
      select = element.querySelector<SbbSelectElement>('sbb-select')!;
    });

    it('renders', async () => {
      const option = select.querySelector('sbb-option');
      assert.instanceOf(select, SbbSelectElement);
      assert.instanceOf(option, SbbOptionElement);
    });

    it('should react to focus state', async () => {
      expect(element).not.to.have.attribute('data-input-focused');

      select.focus();
      await waitForLitRender(element);
      expect(element).to.have.attribute('data-input-focused');

      select.blur();
      await waitForLitRender(element);
      expect(element).not.to.have.attribute('data-input-focused');
    });

    it('should open select on form field click', async () => {
      expect(element).not.to.have.attribute('data-input-focused');

      const label = element.querySelector('label')!;
      label.click();
      await waitForLitRender(element);

      expect(select).to.have.attribute('data-state', 'opening');
    });

    it('should focus select on form field click readonly', async () => {
      select.toggleAttribute('readonly', true);
      await waitForLitRender(element);

      expect(element).not.to.have.attribute('data-input-focused');

      const label = element.querySelector('label')!;
      label.click();
      await waitForLitRender(element);

      expect(element).to.have.attribute('data-input-focused');
    });

    it('should assign id to label and reference it in the sbb-select', async () => {
      const label = element.querySelector('label')!;

      expect(label.id).to.match(/^sbb-form-field-label-/);
      expect(select).to.have.attribute('aria-labelledby', label.id);
    });
  });

  describe('with floating label', () => {
    it('should read native empty select state', async () => {
      const element = await fixture(
        html`
          <sbb-form-field floating-label>
            <select>
              <option value="0"></option>
              <option value="1">Displayed Value</option>
            </select>
          </sbb-form-field>
        `,
        { modules: ['./form-field.ts'] },
      );

      expect(element).to.have.attribute('data-input-empty');
    });

    it('should not read native empty select state', async () => {
      const element = await fixture(
        html`
          <sbb-form-field floating-label>
            <select>
              <option value="" selected>Empty Value</option>
              <option value="1">Displayed Value</option>
            </select>
          </sbb-form-field>
        `,
        { modules: ['./form-field.ts'] },
      );
      expect(element).not.to.have.attribute('data-input-empty');
    });

    it('should never be empty if input type is date', async () => {
      const element: SbbFormFieldElement = await fixture(
        html`<sbb-form-field floating-label><input type="date" /></sbb-form-field>`,
        { modules: ['./form-field.ts'] },
      );

      expect(element).not.to.have.attribute('data-input-empty');
    });

    it('should read sbb-select empty state', async () => {
      const element: SbbFormFieldElement = await fixture(
        html`
          <sbb-form-field floating-label>
            <sbb-select value="0">
              <sbb-option value="0"></sbb-option>
              <sbb-option value="1">Displayed Value</sbb-option>
            </sbb-select>
          </sbb-form-field>
        `,
        { modules: ['./form-field.ts', '../../select.ts', '../../option.ts'] },
      );

      expect(element).to.have.attribute('data-input-empty');
    });

    it('should not read sbb-select empty state', async () => {
      const element = await fixture(
        html`
          <sbb-form-field floating-label>
            <sbb-select>
              <sbb-option value="" selected>Empty Value</sbb-option>
              <sbb-option value="1">Displayed Value</sbb-option>
            </sbb-select>
          </sbb-form-field>
        `,
        { modules: ['./form-field.ts', '../../select.ts', '../../option.ts'] },
      );

      expect(element).not.to.have.attribute('data-input-empty');
    });

    it('should update floating label after clearing', async () => {
      const element = await fixture<SbbFormFieldElement>(
        html` <sbb-form-field floating-label>
          <sbb-select>
            <sbb-option value="1" selected>Displayed Value</sbb-option>
          </sbb-select>
        </sbb-form-field>`,
        { modules: ['./form-field.ts', '../../select.ts', '../../option.ts'] },
      );

      element.querySelector<SbbSelectElement>('sbb-select')!.value = '';
      await waitForLitRender(element);

      expect(element).to.have.attribute('data-input-empty');
    });

    it('should update floating label when resetting form', async () => {
      const form = (await fixture(
        html`
          <form>
            <sbb-form-field floating-label>
              <input />
            </sbb-form-field>
          </form>
        `,
        { modules: ['./form-field.ts'] },
      )) as HTMLFormElement;
      const element = form.querySelector<SbbFormFieldElement>('sbb-form-field')!;
      form.querySelector('input')!.focus();
      await sendKeys({ type: 'test' });
      await waitForLitRender(element);
      expect(element).not.to.have.attribute('data-input-empty');

      form.reset();

      // This is necessary to await for the reset event to be propagated
      await waitForCondition(() => element.hasAttribute('data-input-empty'));
      expect(element).to.have.attribute('data-input-empty');
    });

    it('should reset floating label when calling reset of sbb-form-field', async () => {
      const element: SbbFormFieldElement = await fixture(
        html`
          <sbb-form-field floating-label>
            <input />
          </sbb-form-field>
        `,
        { modules: ['./form-field.ts'] },
      );
      const input = element.querySelector<HTMLInputElement>('input')!;

      input.focus();
      await sendKeys({ type: 'test' });
      await waitForLitRender(element);
      expect(element).not.to.have.attribute('data-input-empty');

      // When setting value to empty
      input.value = '';
      await waitForLitRender(element);

      // Then empty state is not updated
      expect(element).not.to.have.attribute('data-input-empty');

      // When manually calling reset method
      element.reset();
      await waitForLitRender(element);

      // Then empty state should be updated
      expect(element).to.have.attribute('data-input-empty');
    });
  });
});
