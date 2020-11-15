/* eslint-disable */
import React, {PureComponent} from 'react';
import classNames from 'classnames';
import {Moon, Sun} from '../icons';

import {InputHTMLAttributes, ReactNode} from 'react';

export interface ToggleIcons {
  checked?: ReactNode;
  unchecked?: ReactNode;
}

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  'aria-labelledby'?: string;
  'aria-label'?: string;
  icons?: boolean | ToggleIcons;
}

export function pointerCoord(event: any) {
  // get coordinates for either a mouse click
  // or a touch depending on the given event
  if (event) {
    const changedTouches = event.changedTouches;
    if (changedTouches && changedTouches.length > 0) {
      const touch = changedTouches[0];
      return {x: touch.clientX, y: touch.clientY};
    }
    const pageX = event.pageX;
    if (pageX !== undefined) {
      return {x: pageX, y: event.pageY};
    }
  }
  return {x: 0, y: 0};
}

export class Toggle extends PureComponent<Props> {
  state = {
    checked: !!(this.props.checked || this.props.defaultChecked),
    hasFocus: false,
  };

  previouslyChecked = !!(this.props.checked || this.props.defaultChecked);
  input: any = null;
  moved: any = null;
  startX: any = null;
  activated: any = null;

  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.checked !== this.props.checked) {
      this.setState({checked: !!this.props.checked});
    }
  }

  handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (this.props.disabled) {
      return;
    }

    const checkbox = this.input;
    if (event.target !== checkbox && !this.moved) {
      this.previouslyChecked = checkbox.checked;
      event.preventDefault();
      checkbox.focus();
      checkbox.click();
      return;
    }

    const checked = this.props.hasOwnProperty('checked')
      ? this.props.checked
      : checkbox.checked;

    this.setState({checked});
  }

  handleTouchStart(event: any) {
    if (this.props.disabled) {
      return;
    }
    this.startX = pointerCoord(event).x;
    this.activated = true;
  }

  handleTouchMove(event: any) {
    if (!this.activated) return;
    this.moved = true;

    if (this.startX) {
      let currentX = pointerCoord(event).x;
      if (this.state.checked && currentX + 15 < this.startX) {
        this.setState({checked: false});
        this.startX = currentX;
        this.activated = true;
      } else if (currentX - 15 > this.startX) {
        this.setState({checked: true});
        this.startX = currentX;
        this.activated = currentX < this.startX + 5;
      }
    }
  }

  handleTouchEnd(event: any) {
    if (!this.moved) return;
    const checkbox = this.input;
    event.preventDefault();

    if (this.startX) {
      let endX = pointerCoord(event).x;
      if (this.previouslyChecked === true && this.startX + 4 > endX) {
        if (this.previouslyChecked !== this.state.checked) {
          this.setState({checked: false});
          this.previouslyChecked = this.state.checked;
          checkbox.click();
        }
      } else if (this.startX - 4 < endX) {
        if (this.previouslyChecked !== this.state.checked) {
          this.setState({checked: true});
          this.previouslyChecked = this.state.checked;
          checkbox.click();
        }
      }

      this.activated = false;
      this.startX = null;
      this.moved = false;
    }
  }

  handleFocus(event: any) {
    const {onFocus} = this.props;

    if (onFocus) {
      onFocus(event);
    }

    this.setState({hasFocus: true});
  }

  handleBlur(event: any) {
    const {onBlur} = this.props;

    if (onBlur) {
      onBlur(event);
    }

    this.setState({hasFocus: false});
  }

  getIcon(type: any) {
    const {
      icons = {
        checked: <Moon />,
        unchecked: <Sun />,
      },
    } = this.props;

    if (!icons) {
      return null;
    }

    return (icons as any)[type];
  }

  render() {
    const {className, icons: _icons, ...inputProps} = this.props;
    const classes = classNames(
      'react-toggle',
      {
        'react-toggle--checked': this.state.checked,
        'react-toggle--focus': this.state.hasFocus,
        'react-toggle--disabled': this.props.disabled,
      },
      className,
    );

    return (
      <div
        className={classes}
        onClick={this.handleClick}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        <div className="react-toggle-track">
          <div className="react-toggle-track-check">
            {this.getIcon('checked')}
          </div>
          <div className="react-toggle-track-x">
            {this.getIcon('unchecked')}
          </div>
        </div>
        <div className="react-toggle-thumb" />

        <input
          {...inputProps}
          ref={(ref) => {
            this.input = ref;
          }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className="react-toggle-screenreader-only"
          type="checkbox"
        />
      </div>
    );
  }
}
