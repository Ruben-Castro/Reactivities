import React from "react";
import { Container, Menu, Button } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item name="activities" />
        <Menu.Item>
          <Button positive content="create Activity" />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
