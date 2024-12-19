import {
    setAriaAttributes,
    setAriaRole,
    removeAriaAttributes,
    hasAriaAttribute,
    setAriaModal,
    setAriaAlert,
  } from './pizzaria';
  
  describe('Pizzaria Library', () => {
    let container: HTMLElement;
  
    beforeEach(() => {
      container = document.createElement('div');
      container.innerHTML = `
        <button id="btn1">Button 1</button>
        <button id="btn2">Button 2</button>
        <div id="modal"></div>
        <div id="alert"></div>
      `;
      document.body.appendChild(container);
    });
  
    afterEach(() => {
      container.remove();
    });
  
    describe('setAriaAttributes', () => {
      test('sets multiple ARIA attributes on selected elements', () => {
        setAriaAttributes('button', { pressed: 'false', label: 'Submit' });
        const buttons = container.querySelectorAll('button');
        buttons.forEach((button) => {
          expect(button.getAttribute('aria-pressed')).toBe('false');
          expect(button.getAttribute('aria-label')).toBe('Submit');
        });
      });
  
      test('does not throw when no elements match the selector', () => {
        expect(() => setAriaAttributes('.nonexistent', { pressed: 'true' })).not.toThrow();
      });
    });
  
    describe('setAriaRole', () => {
      test('sets ARIA role on selected elements', () => {
        setAriaRole('button', 'menuitem');
        const buttons = container.querySelectorAll('button');
        buttons.forEach((button) => {
          expect(button.getAttribute('role')).toBe('menuitem');
        });
      });
  
      test('does not throw when no elements match the selector', () => {
        expect(() => setAriaRole('.nonexistent', 'dialog')).not.toThrow();
      });
    });
  
    describe('removeAriaAttributes', () => {
      test('removes specific ARIA attributes from selected elements', () => {
        setAriaAttributes('button', { pressed: 'true', label: 'Submit' });
        removeAriaAttributes('button', ['pressed', 'label']);
        const buttons = container.querySelectorAll('button');
        buttons.forEach((button) => {
          expect(button.hasAttribute('aria-pressed')).toBe(false);
          expect(button.hasAttribute('aria-label')).toBe(false);
        });
      });
  
      test('does not throw when no elements match the selector', () => {
        expect(() => removeAriaAttributes('.nonexistent', ['pressed'])).not.toThrow();
      });
    });
  
    describe('hasAriaAttribute', () => {
      test('returns true if all selected elements have the specified attribute', () => {
        setAriaAttributes('button', { pressed: 'true' });
        expect(hasAriaAttribute('button', 'pressed')).toBe(true);
      });
  
      test('returns false if any selected element does not have the specified attribute', () => {
        setAriaAttributes('#btn1', { pressed: 'true' });
        expect(hasAriaAttribute('button', 'pressed')).toBe(false);
      });
  
      test('returns false when no elements match the selector', () => {
        expect(hasAriaAttribute('.nonexistent', 'pressed')).toBe(false);
      });
    });
  
    describe('setAriaModal', () => {
      test('sets ARIA attributes for modal dialogs when open', () => {
        setAriaModal('#modal', true);
        const modal = container.querySelector('#modal');
        expect(modal?.getAttribute('aria-hidden')).toBe('false');
        expect(modal?.getAttribute('role')).toBe('dialog');
        expect(modal?.getAttribute('aria-modal')).toBe('true');
      });
  
      test('sets ARIA attributes for modal dialogs when closed', () => {
        setAriaModal('#modal', false);
        const modal = container.querySelector('#modal');
        expect(modal?.getAttribute('aria-hidden')).toBe('true');
      });
  
      test('does not throw when no elements match the selector', () => {
        expect(() => setAriaModal('.nonexistent', true)).not.toThrow();
      });
    });
  
    describe('setAriaAlert', () => {
      test('sets ARIA attributes for alert elements and updates text content', () => {
        setAriaAlert('#alert', 'This is an alert');
        const alert = container.querySelector('#alert');
        expect(alert?.getAttribute('role')).toBe('alert');
        expect(alert?.textContent).toBe('This is an alert');
      });
  
      test('does not throw when no elements match the selector', () => {
        expect(() => setAriaAlert('.nonexistent', 'No alert here')).not.toThrow();
      });
    });
  });
  