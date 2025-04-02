import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'my-dropdown',
  styleUrl: 'dropdown.css',
  shadow: true
})
export class Dropdown {
  @Prop() trigger: 'hover' | 'click' = 'click';
  @Prop() delay: number = 300;
  @Prop() label: string = 'Dropdown';
  @State() isOpen: boolean = false;
  
  private timeoutId: NodeJS.Timeout;

  private handleTrigger = () => {
    if (this.trigger === 'click') {
      this.isOpen = !this.isOpen;
    }
  }

  private handleMouseEnter = () => {
    if (this.trigger === 'hover') {
      clearTimeout(this.timeoutId);
      this.isOpen = true;  
    }
  }

  private handleMouseLeave = () => {
    if (this.trigger === 'hover') {
      this.isOpen = false; 
    }
  }

  render() {
    return (
      <div class="dropdown-container" 
           onMouseEnter={this.handleMouseEnter}
           onMouseLeave={this.handleMouseLeave}>
        <button 
          class="dropdown-trigger"
          onClick={this.handleTrigger}
          data-dropdown-trigger={this.trigger}
          data-dropdown-delay={this.delay}>
          {this.label}
          <span class="dropdown-arrow"></span>
        </button>
        <div class={`dropdown-content ${this.isOpen ? 'show' : ''}`}>
          <slot></slot>
        </div>
      </div>
    );
  }
}
