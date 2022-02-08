import React from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'



export default function ProductList() {

  return <div>
      <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>wiskunde onderwerp</Table.HeaderCell>
        <Table.HeaderCell>Link</Table.HeaderCell>
        <Table.HeaderCell>Category</Table.HeaderCell>
     
      </Table.Row>
    </Table.Header>

    <Table.Body>
    
      <Table.Row>
        <Table.Cell>Name</Table.Cell>
        <Table.Cell>Link of test</Table.Cell>
        <Table.Cell>Category</Table.Cell>
      </Table.Row>
      
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
  </div>;
}
