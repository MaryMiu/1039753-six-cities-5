import React, {PureComponent} from "react";

const withCollapse = (Component) => {
  class WithCollapse extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        opened: false
      };

      this.hundleClick = this.hundleClick.bind(this);
    }

    hundleClick() {
      this.setState({opened: !this.state.opened});
    }

    render() {
      const {opened} = this.state;

      return (
        <Component
          {...this.props}
          onClickToggle={this.hundleClick}
          opened={opened}
        >
        </Component>
      );
    }
  }

  return WithCollapse;
};

export default withCollapse;
