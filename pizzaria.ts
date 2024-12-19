/**
 * Applies a function to one or more elements selected by a CSS selector.
 * @param selector - The CSS selector.
 * @param callback - The function to apply to each element.
 * @param context - The context within which to query elements (default is document).
 * This function is the backbone of the library, allowing batch operations on multiple elements.
 */
function applyToSelector(
    selector: string,
    callback: (element: HTMLElement) => void,
    context: Document | HTMLElement = document
  ): void {
    const elements = context.querySelectorAll<HTMLElement>(selector);
    elements.forEach((element) => callback(element));
  }
  
  /**
   * Sets multiple ARIA attributes on one or more elements selected by a CSS selector.
   * @param selector - The CSS selector to target elements.
   * @param attributes - An object containing ARIA attributes as key-value pairs.
   * @param context - Optional context to limit the scope of the selector (default is document).
   * This function adds or updates multiple ARIA attributes efficiently.
   */
  export function setAriaAttributes(
    selector: string,
    attributes: { [key: string]: string },
    context: Document | HTMLElement = document
  ): void {
    applyToSelector(selector, (element) => {
      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(`aria-${key}`, value);
      });
    }, context);
  }
  
  /**
   * Sets a specific ARIA role for one or more elements selected by a CSS selector.
   * @param selector - The CSS selector to target elements.
   * @param role - The ARIA role to apply.
   * @param context - Optional context to limit the scope of the selector (default is document).
   * This function ensures elements are assigned proper roles for accessibility.
   */
  export function setAriaRole(
    selector: string,
    role: string,
    context: Document | HTMLElement = document
  ): void {
    applyToSelector(selector, (element) => {
      element.setAttribute('role', role);
    }, context);
  }
  
  /**
   * Removes specific ARIA attributes from one or more elements selected by a CSS selector.
   * @param selector - The CSS selector to target elements.
   * @param attributes - An array of ARIA attributes to remove.
   * @param context - Optional context to limit the scope of the selector (default is document).
   * This function cleans up unnecessary or outdated ARIA attributes.
   */
  export function removeAriaAttributes(
    selector: string,
    attributes: string[],
    context: Document | HTMLElement = document
  ): void {
    applyToSelector(selector, (element) => {
      attributes.forEach((attr) => {
        element.removeAttribute(`aria-${attr}`);
      });
    }, context);
  }
  
  /**
   * Checks if all elements selected by a CSS selector have a specific ARIA attribute.
   * @param selector - The CSS selector to target elements.
   * @param attribute - The ARIA attribute to check for.
   * @param context - Optional context to limit the scope of the selector (default is document).
   * @returns True if all targeted elements have the specified attribute, false otherwise.
   */
  export function hasAriaAttribute(
    selector: string,
    attribute: string,
    context: Document | HTMLElement = document
  ): boolean {
    const elements = context.querySelectorAll<HTMLElement>(selector);
    return elements.length > 0 && Array.from(elements).every((element) => element.hasAttribute(`aria-${attribute}`));
  }
  
  /**
   * Sets ARIA attributes for modal dialogs selected by a CSS selector.
   * @param selector - The CSS selector targeting modal elements.
   * @param isOpen - Whether the modal is open (true) or closed (false).
   * @param context - Optional context to limit the scope of the selector (default is document).
   * This function is tailored for modal accessibility management.
   */
  export function setAriaModal(
    selector: string,
    isOpen: boolean,
    context: Document | HTMLElement = document
  ): void {
    applyToSelector(selector, (element) => {
      element.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      element.setAttribute('role', 'dialog');
      element.setAttribute('aria-modal', 'true');
    }, context);
  }
  
  /**
   * Sets ARIA attributes for alert elements selected by a CSS selector.
   * @param selector - The CSS selector targeting alert elements.
   * @param message - The alert message to set as text content.
   * @param context - Optional context to limit the scope of the selector (default is document).
   * This function makes it simple to announce alerts with ARIA attributes.
   */
  export function setAriaAlert(
    selector: string,
    message: string,
    context: Document | HTMLElement = document
  ): void {
    applyToSelector(selector, (element) => {
      element.setAttribute('role', 'alert');
      element.textContent = message;
    }, context);
  }
  