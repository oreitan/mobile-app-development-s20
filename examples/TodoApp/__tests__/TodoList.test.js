/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native'
import React from 'react'
import { TodoList } from '../src/components/Todo/TodoList'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const items = [
    { key: 'Laundry', isDone: false },
    { key: 'Shopping', isDone: false },
    { key: 'Call lawyer', isDone: false }
  ]
  const testRenderer = renderer.create(<TodoList items={items} showAddItemInput={false} />)
})
