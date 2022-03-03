import FluiOffCanvas from './FluiOffCanvas.vue';
import FluiButton from './FluiButton.vue';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'FlareUi/OffCanvas',
  component: FluiOffCanvas,
  decorators: [withDesign],
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FluiOffCanvas, FluiButton },
  template: 
  `<div style="padding: 16px;">
    <flui-button label="Open Off Canvas" :fullMode="false" data-off-canvas-name="demo"/>
    <flui-off-canvas v-bind="$props">
      <p>Flare is a design system for agile front-end software engineering. 🚀</p>
    </flui-off-canvas>
  </div>`,
});

export const Normal = Template.bind({});
Normal.args = {
  title: 'PLC-Admisiones-REV 🐿️',
  offCanvasName: 'demo',
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OE02GpJJExjaalqpl4pghS/dashboard-Projects-design-health?node-id=67%3A2398',
  },
}
