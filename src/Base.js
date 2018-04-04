import React, {Component} from 'react';

import './Base.css';

import {
  AppBar,
  Card,
  CardActions,
  CardHeader,
  CardText,
  Drawer,
  FlatButton,
  IconButton,
  Tab,
  Tabs
} from "material-ui";
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {grey900} from "material-ui/styles/colors";

export default class Base extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: 'hypothesis'
    };
  }

  componentDidMount() {
    window.hypothesisConfig = () => {
      return {
        "theme": "clean",
        "onLayoutChange": (sidebarInfo) => {
          if (sidebarInfo.expanded) {
            this.setState({open: true});
          }
        },
        "externalContainerSelector": "#hypothesis-root"
      };
    };

    const script = document.createElement("script");

    script.src = "http://localhost:5000/embed.js";
    script.async = true;

    document.body.appendChild(script);
  }

  handleToggle = () => {
    this.setState({open: !this.state.open});
  };

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <div>
        <Drawer
          className="annotator-drawer"
          width={400}
          open={this.state.open}
        >
          <AppBar
            title="Annotate"
            iconElementLeft={<IconButton onClick={this.handleToggle}><NavigationClose/></IconButton>}
          />
          <Tabs
            className="annotator-tabs"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <Tab className="hypothesis-tab" label="Hypothes.is" value="hypothesis">
              <div id="hypothesis-root"/>
            </Tab>
            <Tab label="Faux Notes" value="other">
              <div style={{padding: '0 0.5em'}}>
                <br/>
                <Card>
                  <CardHeader
                    title="Juan Corona"
                    subtitle="Public"
                    avatar={"https://gravatar.com/avatar/116efe9aa8b93a8a002bd2b0df033161"}
                  />
                  <CardText>
                    Inserting pseudo latin text in 3.. 2.. 1..
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                  </CardText>
                  <CardActions>
                    <FlatButton label="Reply"/>
                    <FlatButton label="Share"/>
                  </CardActions>
                </Card>
                <br/>
                <Card>
                  <CardHeader
                    title="Juan Corona"
                    subtitle="Public"
                    avatar={"https://gravatar.com/avatar/116efe9aa8b93a8a002bd2b0df033161"}
                  />
                  <CardText>
                    I like turtles.
                  </CardText>
                  <CardActions>
                    <FlatButton label="Reply"/>
                    <FlatButton label="Share"/>
                  </CardActions>
                </Card>
              </div>
            </Tab>
          </Tabs>
        </Drawer>
        <AppBar
          title="Faux Reader"
          onLeftIconButtonClick={this.handleToggle}
          style={{backgroundColor: grey900}}
        />
      </div>
    );
  }
}