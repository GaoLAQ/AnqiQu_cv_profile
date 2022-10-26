<template>
  <v-data-table
    :headers="header"
    :items="item"
    :expanded.sync="expanded"
    item-key="name"
    show-expand
    :single-expand="singleExpand"
    class="elevation-1"
  >
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">{{ item.content }}</td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: {
    header: {
      type: Array,
    },
    item: {
      type: Array,
    },
  },
  data() {
    return {
      expanded: [],
      singleExpand: true,
    };
  },
  computed: {},
};
</script>
