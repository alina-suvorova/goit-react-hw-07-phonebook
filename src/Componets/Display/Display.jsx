import { useDeleteContactByIdMutation } from "./../../app/API/fetchMockApi";
import React from "react";
import { Button } from "../../style/Button";
import { Item, List } from "../../style/List";
import { useSelector } from "react-redux";

const Display = ({ contacts }) => {
const filter = useSelector((state) => state.filter.filter);
const [deleteContact] = useDeleteContactByIdMutation()
  return (
    <List>
      {contacts.filter(({ name }) => (filter !== "" ? name.includes(filter) : true)).map(({ id, name, phone }) => (
          <Item key={id}>
            <span>
              {name} {phone}
            </span>
            <Button onClick={() => deleteContact(id)}>Delete</Button>
          </Item>
        ))}
    </List>
  );
};

export default Display;
