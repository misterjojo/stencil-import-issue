import { newE2EPage } from '@stencil/core/testing';

describe('a-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<a-component></a-component>');
    const element = await page.find('a-component');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<a-component></a-component>');
    const element = await page.find('a-component >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm component A`);
  });
});
