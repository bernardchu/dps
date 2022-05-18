import React from "react";

/**
 * Addresses console warning:
 * Warning: Can't call setState (or forceUpdate) on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
 * ...which appears if you navigate quickly between e.g. home page or available page before async data has loaded.
 * https://www.robinwieruch.de/react-warning-cant-call-setstate-on-an-unmounted-component/
 */
export default abstract class DpsImmediateAsyncComponent<PropsType, StateType> extends React.PureComponent<PropsType, StateType> {
  _isMounted = false;

  public componentWillUnmount() {
    this._isMounted = false;
  }
}