import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-alert',
  styleUrl: 'my-alert.css',
  shadow: true,
})
export class MyAlert {
  @Prop() type: 'success' | 'danger' | 'warning' | 'info' = 'info';
  @Prop() message: string;
  @Prop() icon?: string;
  @Prop() bordered: boolean = false;
  @Prop() listItems?: string = "";
  @Prop() dismissible: boolean = false;

  @State() isVisible: boolean = true;

  @Event() alertDismissed!: EventEmitter<void>;

  private handleDismiss = () => {
    this.isVisible = false;
    this.alertDismissed.emit();
  };

  render() {
    console.log("List Items Received:", this.listItems);
    if (!this.isVisible) return null;

    return (
      <div class={`alert ${this.type} ${this.bordered ? 'bordered' : ''}`}>
        {this.icon && <span class="icon">{this.icon}</span>}
        <div class="content">
          <p>{this.message}</p>
          {this.listItems && (
            <ul>
              {this.listItems.split(',').map(item => (
                <li>{item.trim()}</li>
              ))}
            </ul>
          )}
        </div>
        {this.dismissible && (
          <button class="close-btn" onClick={this.handleDismiss}>&times;</button>
        )}
      </div>
    );
  }
}
