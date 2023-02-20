"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "TopNav",
  setup(__props) {
    function back() {
      common_vendor.index.navigateBack();
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(back)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/mee/Documents/HBuilderProjects/AiGouWu/components/TopNav/TopNav.vue"]]);
wx.createComponent(Component);
