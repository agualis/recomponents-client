<template>
<div style="width:50%">
  <SelectTimezone v-model="timezone" />

  <r-date-input
    v-model="value"
    class="r-mb-m width-half"
    label="Date range"
    type="range"
    :timezone="timezone"
    :min-date="minDate"
    :max-date="maxDate"
    :columns="columns"
    :is24hr="is24hr"
  />
  <p>Your period:</p>
  <pre>{{ value }}</pre>
  </div>
</template>

<script>
import SelectTimezone from './select-timezone.vue';

export default {
  components: { SelectTimezone },
  data() {
    return {
      value: {
        start: new Date('2022-01-01'),
        end: new Date('2022-01-10'),
      },
      timezone: 'America/Los_Angeles',
      minDate: '2021-12-20',
      maxDate: '2022-03-20',
      columns: 2,
      is24hr: true,
    };
  },
};
</script>

<style lang="scss">
.width-half {
  width: 50%;
}
</style>
