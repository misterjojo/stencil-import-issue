import { Component, h } from '@stencil/core';

@Component({
  tag: 'a-component',
  styleUrl: 'a-component.css',
  shadow: true
})
export class AComponent {
  render() {
    return <div>Hello, World! I'm component A</div>;
  }
}
