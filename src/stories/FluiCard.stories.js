import FluiCard from './FluiCard.vue';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'FlareUi/Card',
  component: FluiCard,
  decorators: [withDesign],
  argTypes: {
    title: '',
    message: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FluiCard },
  template: '<flui-card v-bind="$props" />',
});

export const Normal = Template.bind({});
Normal.args = {
  title: 'PLC-Admisiones-REV 🐿️',
  message: 'Software engineering is the systematic application of engineering approaches to the development of software. A software engineer is a person who applies the principles of software engineering to design, develop, maintain, test, and evaluate computer software.',
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OE02GpJJExjaalqpl4pghS/dashboard-Projects-design-health?node-id=10%3A136',
  },
}