import { withKnobs, text } from '@storybook/addon-knobs'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Main } from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as ComponentMeta<typeof Main>

export const Basic: ComponentStory<typeof Main> = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJs e Styled Components'
    )}
  />
)
