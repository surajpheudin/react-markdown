import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  PreviewMarkdown,
  PreviewMarkdownProps,
} from '../src/components/Preview/Preview';

const meta: Meta = {
  title: 'Preview Markdown',
  component: PreviewMarkdown,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<PreviewMarkdownProps> = args => (
  <PreviewMarkdown>{args.children}</PreviewMarkdown>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing

export const Preview = Template.bind({});

Preview.args = {
  children: 'Hello',
};
