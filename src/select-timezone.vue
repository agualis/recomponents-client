<template>
  <div class="r-mb-m">
    <p>Timezone:</p>
    <r-radio
      id="America/Los_Angeles"
      v-model="timezone"
      name="timezone"
      label="America/Los_Angeles"
      value="America/Los_Angeles"
      @update:model-value="update"
    />
    <r-radio
      id="UTC"
      v-model="timezone"
      name="timezone"
      label="UTC"
      value="UTC"
      @update:model-value="update"
    />
    <r-radio
      id="Asia/Tomsk"
      v-model="timezone"
      name="timezone"
      label="Asia/Tomsk"
      value="Asia/Tomsk"
      @update:model-value="update"
    />
    <r-radio
      id="Europe/Madrid"
      v-model="timezone"
      name="timezone"
      label="Europe/Madrid"
      value="Europe/Madrid"
      @update:model-value="update"
    />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  emits: ['update:modelValue'],
  setup(props, context) {
    const timezone = ref('Europe/Madrid');
    const update = (value) => context.emit('update:modelValue', value);
    return {
      timezone,
      update,
    };
  },
};
</script>
