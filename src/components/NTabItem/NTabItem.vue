<template>
  <li class="nitrozen-tab-item" >
    <slot />
  </li>
</template>

<script>
import NitrozenUuid from "./../../utils/NUuid";

export default {
  name: "nitrozen-tab-item",
  props: {
    id: {
      type: [Number, String],
      default: () => "nitrozen-tab-item" + NitrozenUuid()
    }
  }
};
</script>
<style lang="less" scoped>
@import "./../../base/base.less";
.nitrozen-tab-item {
  display: flex;
  justify-content: center;
  color: @TypographyPrimaryColor;
  font-family: @PrimaryFont;
  cursor: pointer;
  margin-right: 24px;
  padding-bottom: 24px;
  font-size: 14px;
  font-weight: 400;
}
.nitrozen-tab-active {
  color: @SecondaryColor;
  border-bottom: 3px solid @SecondaryColor;
}
</style>
