<template>
  <div>
    <el-input v-bind="this.$attrs">
      <template v-for="(value, name) in $slots" #[name]="scopedData">
        <slot :name="name" v-bind="scopedData"></slot>
      </template>
    </el-input>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$slots);
  },
  methods: {
    api() {
      fetch()
        .then((res) => res.json())
        .then((res) => console.log(res));
    },
  },
};
</script>

<style lang="scss" scoped></style>
