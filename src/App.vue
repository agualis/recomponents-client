<template>
  <r-button @click="onClick">Click me!</r-button>

   <v-form-tile>
        <template #title>
            <h2>Profile Summary</h2>
        </template>

        <r-button #description>Button with slot </r-button>

        <template #content>
          <r-button>Button inside slot with template</r-button>
        </template>
    </v-form-tile>

<!-- v-model {{numValue}}
<r-input v-model="numValue" @change="change">Type a value</r-input> -->
<!-- <br>
  <r-badge>Default</r-badge>
  <r-date-input></r-date-input>
    <r-date-input class="r-mb-m width-half"
                label="Date range"
                :is-date-range="true"
                color="blue"
                :is24hr="true"
                v-model="value"/>
    Selected Range: {{ value }}  👈 This is not updated??? -->
</template>

<script setup>
    import  VFormTile from './v-form-tile.vue'
    import {ref} from '@vue/reactivity';
    const value = ref({start: new Date('01-01-2022'), end: new Date('01-02-2022')});
    const numValue = ref(24);
    const change = ()=> console.log('@change event received');
    const onClick = (event)=> console.log('@click event received');
</script>
