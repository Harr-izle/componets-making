import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  @Prop() header?: string;
  @Prop() description?: string;
  @Prop() imageUrl?: string;
  @Prop() buttonText?: string;
  @Prop() linkText?: string;
  @Prop() linkUrl?: string;
  @Prop() horizontal?: boolean;
  @Prop() isProfile?: boolean;
  @Prop() hasForm?: boolean;

  render() {
    return (
      <div class={`card ${this.horizontal ? 'horizontal' : ''}`}>
        {this.imageUrl && (
          <div class="card-image">
            <img src={this.imageUrl} alt={this.header} />
          </div>
        )}
        
        <div class="card-content">
          {this.header && <h3 class="card-header">{this.header}</h3>}
          {this.description && <p class="card-description">{this.description}</p>}
          
          {this.buttonText && (
            <button class="card-button">{this.buttonText}</button>
          )}
          
          {this.linkText && this.linkUrl && (
            <a href={this.linkUrl} class="card-link">{this.linkText}</a>
          )}
          
          {this.isProfile && (
            <div class="profile-actions">
              <button class="profile-button">Follow</button>
              <button class="profile-button">Message</button>
              <div class="dropdown">•••</div>
            </div>
          )}
          
          {this.hasForm && (
            <form class="card-form">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>
    );
  }
}
