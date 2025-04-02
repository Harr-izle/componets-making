import { Component, h, Prop, State, Event, EventEmitter, Element, Fragment } from '@stencil/core';

@Component({
  tag: 'my-date-picker',
  styleUrl: 'date-picker.css',
  shadow: true
})
export class DatePicker {
  @Element() hostElement: HTMLElement;
  @Prop() isRange: boolean = false;
  @Prop() startDate?: string;
  @Prop() endDate?: string;
  @Prop() showDefault?: boolean = false;
  @State() currentMonth: Date = new Date();
  @State() selectedDate: Date | null = null;
  @State() selectedEndDate: Date | null = null;
  @State() showCalendar: boolean = false;
  @State() activeInput: 'start' | 'end' | null = null;
  private startInputRef?: HTMLInputElement;
  private endInputRef?: HTMLInputElement;
  
  @Event() dateSelected: EventEmitter<{start: Date, end?: Date}>;

  private handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    if (!this.hostElement.contains(target)) {
      // Only close if it's not a default view or if a date is selected
      if (!this.showDefault || this.selectedDate) {
        this.showCalendar = false;
      }
    }
  }

  componentDidLoad() {
    document.addEventListener('click', this.handleClickOutside);
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  componentWillLoad() {
    if (this.startDate) {
      this.selectedDate = new Date(this.startDate);
      if (this.startInputRef) {
        this.startInputRef.value = this.selectedDate.toLocaleDateString();
      }
    }
    if (this.endDate) {
      this.selectedEndDate = new Date(this.endDate);
      if (this.endInputRef) {
        this.endInputRef.value = this.selectedEndDate.toLocaleDateString();
      }
    }
  }

  private getDaysInMonth(date: Date): Date[] {
    const days: Date[] = [];
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    for (let d = firstDay; d <= lastDay; d.setDate(d.getDate() + 1)) {
      days.push(new Date(d));
    }
    return days;
  }

  private handleInputClick(inputType: 'start' | 'end') {
    this.activeInput = inputType;
    this.showCalendar = true;
  }

  private handleDateClick(date: Date) {
    if (this.isRange) {
      if (this.activeInput === 'start') {
        this.selectedDate = date;
        this.activeInput = 'end';
        if (this.startInputRef) {
          this.startInputRef.value = date.toLocaleDateString();
        }
      } else if (this.activeInput === 'end') {
        if (this.selectedDate && date < this.selectedDate) {
          // If end date is before start date, swap them
          this.selectedEndDate = this.selectedDate;
          this.selectedDate = date;
        } else {
          this.selectedEndDate = date;
        }
        if (this.endInputRef) {
          this.endInputRef.value = date.toLocaleDateString();
        }
        this.showCalendar = false;
        this.dateSelected.emit({
          start: this.selectedDate,
          end: this.selectedEndDate
        });
      }
    } else {
      this.selectedDate = date;
      if (this.startInputRef) {
        this.startInputRef.value = date.toLocaleDateString();
      }
      this.showCalendar = false;
      this.showDefault = false; // Add this line to hide default view after selection
      this.dateSelected.emit({ start: date });
    }
  }

  render() {
    const days = this.getDaysInMonth(this.currentMonth);

    return (
      <div class="datepicker-container">
        <div class="inputs-container">
          <div class="input-wrapper">
            <input
              ref={el => this.startInputRef = el}
              type="text"
              readonly
              placeholder={this.isRange ? "Select start date" : "Select date"}
              onClick={() => this.handleInputClick('start')}
              value={this.selectedDate?.toLocaleDateString()}
            />
            <span class="calendar-icon">📅</span>
          </div>
          
          {this.isRange && (
            <>
              <span class="range-separator">TO</span>
              <div class="input-wrapper">
                <input
                  ref={el => this.endInputRef = el}
                  type="text"
                  readonly
                  placeholder="Select end date"
                  onClick={() => this.handleInputClick('end')}
                  value={this.selectedEndDate?.toLocaleDateString()}
                />
                <span class="calendar-icon">📅</span>
              </div>
            </>
          )}
        </div>
        
        {(this.showCalendar || this.showDefault) && (
          <div class="calendar-popup">
            <div class="calendar-content">
              <div class="header">
                <button class="nav-button" onClick={() => this.currentMonth = new Date(this.currentMonth.setMonth(this.currentMonth.getMonth() - 1))}>
                  ←
                </button>
                <span>{this.currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
                <button class="nav-button" onClick={() => this.currentMonth = new Date(this.currentMonth.setMonth(this.currentMonth.getMonth() + 1))}>
                  →
                </button>
              </div>
              <div class="calendar">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div class="weekday">{day}</div>
                ))}
                {days.map(day => (
                  <div 
                    class={{
                      'day': true,
                      'selected': this.selectedDate?.toDateString() === day.toDateString(),
                      'range-end': this.selectedEndDate?.toDateString() === day.toDateString(),
                      'in-range': this.isRange && this.selectedDate && this.selectedEndDate &&
                                day > this.selectedDate && day < this.selectedEndDate
                    }}
                    onClick={() => this.handleDateClick(day)}
                  >
                    {day.getDate()}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
