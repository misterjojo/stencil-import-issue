import { newE2EPage } from '@stencil/core/testing';

describe('b-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<b-component></b-component>');
    const element = await page.find('b-component');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<b-component></b-component>');
    const element = await page.find('b-component >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm component B`);
  });
});
