import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Editor, EditorProps } from '../src/components/Editor';

const meta: Meta = {
  title: 'Editor',
  component: Editor,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<EditorProps> = args => <Editor {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const MarkdownEditor = Template.bind({});

Template.args = {
  onChange: e => {
    console.log(e.currentTarget.value);
  },
};
