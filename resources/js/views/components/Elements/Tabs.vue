<template>
  <div>
    <ul class='tabs__header'>
      <li v-for='(tab, index) in tabs'
        :key='tab.title'
        @click='selectTab(index)'
        :class='{"tab__selected": (index == selectedIndex)}'>
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    activeIndex: {
      type: Number,
      default: 0,
    },
  },
  data () {
    return {
      selectedIndex: 0,
      tabs: []
    }
  },
  created () {
    this.tabs = this.$children
  },
  mounted () {
    this.selectTab(this.activeIndex)
  },
  methods: {
    selectTab (i) {
      this.selectedIndex = i

      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i)
      })
    }
  }
}
</script>

<style lang="scss">
  .tabs__header {
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;

    > li {
      color: #202121;
      padding: 15px 30px;
      border-radius: 10px;
      margin: 0;
      display: inline-block;
      margin-right: 5px;
      cursor: pointer;

      &.tab__selected {
        border-radius: 10px 10px 0 0;
        color: #E45C41;
        border-bottom: 8px solid #E45C41;
      }
    }

    .tab {
      display: inline-block;
      padding: 10px 20px;
      border-radius: 10px;
      width: 100%;
      background-color: #fff;
    }
  }
</style>