import { Component, Prop, h, Watch } from '@stencil/core';

export interface BreadcrumbItem {
  text: string;
  href?: string;
  dropdown?: boolean;
  dropdownItems?: Array<{ text: string; href: string }>;
}

@Component({
  tag: 'my-breadcrumb',
  styleUrl: 'breadcrumb.css',
  shadow: true
})
export class Breadcrumb {
  private parsedItems: BreadcrumbItem[] = [];

  @Prop() items: BreadcrumbItem[] | string = [];
  @Prop() background: 'transparent' | 'solid' = 'transparent';
  @Prop() type: 'default' | 'header' = 'default';

  @Watch('items')
  parseItems(newValue: BreadcrumbItem[] | string) {
    if (typeof newValue === 'string') {
      this.parsedItems = JSON.parse(newValue);
    } else {
      this.parsedItems = newValue;
    }
  }

  componentWillLoad() {
    this.parseItems(this.items);
  }

  private renderDropdown(item: BreadcrumbItem) {
    return (
      <div class="dropdown">
        <button class="dropdown-toggle">{item.text}</button>
        <div class="dropdown-menu">
          {item.dropdownItems?.map(dropItem => (
            <a href={dropItem.href}>{dropItem.text}</a>
          ))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <nav class={`breadcrumb ${this.background} ${this.type}`} aria-label="breadcrumb">
        <ol>
          {this.parsedItems.map((item, index) => (
            <li>
              {item.dropdown ? (
                this.renderDropdown(item)
              ) : (
                item.href ? (
                  <a href={item.href}>{item.text}</a>
                ) : (
                  <span class="current">{item.text}</span>
                )
              )}
              {index < this.parsedItems.length - 1 && <span class="separator">&rsaquo;</span>}
            </li>
          ))}
        </ol>
      </nav>
    );
  }
}
