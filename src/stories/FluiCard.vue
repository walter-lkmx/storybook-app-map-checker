<template>
  <div class="flui-card" v-if="alertIsVisible">
    <div class="flui-card__header">
      <h4>{{title}}</h4>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289C10.9024 4.68342 10.9024 5.31658 11.2929 5.70711L16.5858 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H16.5858L11.2929 18.2929C10.9024 18.6834 10.9024 19.3166 11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L19.7066 12.7076L19.7071 12.7071M12.7071 4.29289L19.7065 11.2923ZM19.7136 11.2995C19.7115 11.2973 19.7093 11.2951 19.7071 11.2929L19.7065 11.2923M19.7136 11.2995C19.8027 11.3902 19.8746 11.4979 19.9241 11.6172C19.8764 11.502 19.8063 11.3938 19.7136 11.2995Z" fill="#6E99E3"/>
      </svg>
    </div>
    <div class="flui-card__indicator">
      <p class="flui-card__indicator__title">Rendimiento</p>
      <div class="flui-card__indicator__info">
        <p>Capas ocultas</p>
        <h5 class="flui-card__indicator__info__value">1,200</h5>
      </div>
    </div>
    <div class="flui-card__indicator">
      <p class="flui-card__indicator__title">Definición</p>
      <div class="flui-card__indicator__info">
        <p>Escenarios por revisar</p>
        <h5 class="flui-card__indicator__info__value">4</h5>
      </div>
    </div>
    <div class="flui-card__indicator">
      <p class="flui-card__indicator__title">Fidelidad de Contenido</p>
      <div class="flui-card__indicator__info">
        <p>Estilos desvinculados</p>
        <h5 class="flui-card__indicator__info__value">5</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      alertIsVisible: true,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
:root {
  --flui-card-background: var(--flui-color-white);
}
.flui-card {
  display: grid;
  gap: var(--f-gutter);
  padding: var(--f-gutter);
  background: var(--flui-card-background);
  border: 1px solid var(--flui-color-grey-03);
  * {
    margin: 0;
  }

  &__header {
    display: grid;
    grid-template-columns: 1fr auto;
  }

  &__indicator {

    &__title {
        color: var(--flui-color-grey-03);
      }

    &__info {
      color: var(--flui-color-grey-01);
      display: grid;
      grid-template-columns: 2fr 1fr;

      &__value {
        text-align: right;
        font-size: 20px;
      }
    }
  }

  &__message {
    
  }
}
</style>
