import { Component, h } from '@stencil/core';

@Component({
  tag: 'b-component',
  styleUrl: 'b-component.css',
  shadow: true
})
export class BComponent {

  render() {
    return <div>Hello, World! I'm component B</div>;
  }
}
