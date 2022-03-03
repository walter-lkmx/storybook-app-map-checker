<template>
  <div class="flui-off-canvas" v-if="isOffCanvasVisible" :data-off-canvas-name="offCanvasName">
    <div class="flui-off-canvas__overlay" v-on:click="closeOffCanvas"></div>
    <div class="flui-off-canvas__container right">
      <div class="flui-off-canvas__header">
        <h3>{{ title }}</h3>
        <button class="flui-off-canvas__close" v-on:click="closeOffCanvas">
        <img src ="../assets/icon-close.svg" alt="Close"/>
        </button>
      </div>
      <div class="flui-off-canvas__content">

        <!-- Rendimiento -->
        <div class="flui-off-canvas__indicator">
          <h4 class="flui-off-canvas__indicator-title">Rendimiento</h4>
          <div class="flui-off-canvas__indicator-info">
            <h5>Capas no visibles</h5>
            <h3 class="flui-off-canvas__indicator-info__value">1,200</h3>
          </div>
        </div>

        <!-- Definición -->
        <div class="flui-off-canvas__indicator">
          <h4 class="flui-off-canvas__indicator-title">Definición</h4>
          <div class="flui-off-canvas__indicator-info">
            <h5>Escenarios por revisar</h5>
            <h3 class="flui-off-canvas__indicator-info__value">4</h3>
          </div>
          <div class="flui-off-canvas__indicator-states">
            <div class="flui-off-canvas__indicator-states__frame">
              <p>#inicio_de_canopy</p>
              <img src ="../assets/icon-copy.svg" alt="Copy"/>
              <img src ="../assets/icon-external-link.svg" alt="External Link"/>
            </div>
            <div class="flui-off-canvas__indicator-states__frame">
              <p>#registro_de_canopy</p>
              <img src ="../assets/icon-copy.svg" alt="Copy"/>
              <img src ="../assets/icon-external-link.svg" alt="External Link"/>
            </div>
          </div>
        </div>

        <!-- Fidelidad de Contenido -->
        <div class="flui-off-canvas__indicator">
          <h4 class="flui-off-canvas__indicator-title">Fidelidad de Contenido</h4>
          <div class="flui-off-canvas__indicator-info">
            <h5>Contenido Duplicado</h5>
            <h3 class="flui-off-canvas__indicator-info__value">30</h3>
            <p class="flui-off-canvas__indicator-suggestion">Puedes utilizar el plugin Many Paster dentro del archivo de figma para identificar los escenarios con contenido duplicado</p>
          </div>
          
          <div class="flui-off-canvas__indicator-duplicates">
            <div class="flui-off-canvas__indicator-duplicates__layer">
              <p>González</p>
              <h5 class="flui-off-canvas__indicator-duplicates__layer-value">16</h5> 
            </div>
            <div class="flui-off-canvas__indicator-duplicates__layer">
              <p>González</p>
              <h5 class="flui-off-canvas__indicator-duplicates__layer-value">16</h5> 
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <div class="flui-off-canvas__container__controls"></div>
  </div>
</template>

<script>
import FluiButton from './FluiButton.vue';

export default {
  data() {
    return {
      isOffCanvasVisible: false,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    offCanvasName: {
      type: String,
      required: true,
    },
  },
  components: { FluiButton },
  methods: {
    offCanvas() {
      const offCanvasTriggerEl = document.querySelectorAll(
        `[data-off-canvas-name="${this.offCanvasName}"]`
      );

      offCanvasTriggerEl.forEach((it) => {
        if (it.dataset.offCanvasName === this.offCanvasName) {
          it.addEventListener('click', (e) => {
            this.isOffCanvasVisible = true;
          });
        }
      });
    },
    closeOffCanvas() {
      this.isOffCanvasVisible = false;
    },
  },
  mounted() {
    this.offCanvas();
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";
:root {
  --flui-off-canvas-container-background: var(--flui-color-white);
  --flui-off-canvas-overlay-background: #ffffff3f;
  --flui-off-canvas-padding: var(--f-gutter);
  --flui-off-canvas-gap: var(--f-gutter);
  --flui-off-canvas-container-max-width: 400px;
  --flui-off-canvas-container-max-height: 100%;
  --flui-off-canvas-zindex: 99999999;
  --flui-off-canvas-overlay-zindex: 999999999;
  --flui-off-canvas-container-zindex: 9999999999;
  --flui-off-canvas-container-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
    0px 18px 88px -4px rgba(24, 39, 75, 0.14);
}

.flui-off-canvas {
  z-index: var(--flui-off-canvas-zindex);
  height: 100vh;
  width: 100vw;
  position: fixed;
  inset: 0;
  z-index: var(--flui-off-canvas-overlay-zindex);
  * {
    margin: 0;
  }
  &__overlay {
    background: var(--flui-off-canvas-overlay-background);
    height: 100%;
    width: 100%;
    position: relative;
    z-index: var(--flui-off-canvas-overlay-zindex);
    backdrop-filter: blur(5px);
  }

  &__header {
    padding: var(--flui-off-canvas-padding);
    display: grid;
    grid-template-columns: 1fr 24px;
    align-items: center;     
  }

  &__close {
    padding: 0;
    background: transparent;
    cursor: pointer;
    &:hover {
      background: transparent;
    }
  }

  &__content {
    display: grid;
    grid-template-rows: auto;
    row-gap: var(--flui-off-canvas-gap);
    padding: var(--flui-off-canvas-padding);
    padding-top: 0;
  }

  &__indicator {
    display: grid;
    grid-template-rows: auto;

    &:not(:last-child) {
      border-bottom: 1px solid var(--flui-color-grey-03);
    }
  }

  &__indicator-title {
    padding: var(--f-gutter);
    color: var(--flui-color-grey-02);
  }

  &__indicator-info {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--flui-off-canvas-gap);
    padding: var(--f-gutter);
    align-items: center;

    &__value {
      text-align: right;
    }
  }

  &__indicator-suggestion {
    font-size: var(--f-small-text-size);
    color: var(--flui-color-grey-02);
  }

  &__indicator-states {
    display: grid;
    padding: var(--f-gutter);
    row-gap: var(--flui-off-canvas-gap);

    &__frame {
      display: grid;
      column-gap: var(--flui-off-canvas-gap);
      grid-template-columns: 1fr auto auto;
      align-items: center;
    }
  }

  &__indicator-duplicates {
    display: grid;
    row-gap: var(--flui-off-canvas-gap);
    padding: var(--flui-off-canvas-padding);
    &__layer {
      display: grid;
      grid-template-columns: 2fr 1fr;
      align-items: center;
    }
    &__layer-value {
      text-align: right;
    }
  }

  &__container, .right {
    box-shadow: var(--flui-off-canvas-container-shadow);
    max-width: 100vw;
    height: var(--flui-off-canvas-container-max-height);
    background: var(--flui-off-canvas-container-background);
    z-index: var(--flui-off-canvas-container-zindex);
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    overflow: scroll;
    @include respond-to("<=s") {
      width: 100vw;
    }
    @include respond-to(">=m") {
      width: var(--flui-off-canvas-container-max-width);
    }
  }

  .left {
    position: absolute;
    left: 0;
    right: auto;
    bottom: 0;
  }

  .bottom {
    position: absolute;
    max-width: 100vw;
    width: 100vw;
    top:auto;
    bottom: 0;
    height: 40vh;
    @include respond-to("<=s") {
    height: 100vh;
    }
  }

  .top {
    position: absolute;
    max-width: 100vw;
    width: 100vw;
    top:0;
    bottom: auto;
    height: 40vh;
    @include respond-to("<=s") {
    height: 100vh;
    }
  } 
} 
</style>
