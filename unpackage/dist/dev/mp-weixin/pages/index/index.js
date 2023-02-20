"use strict";
const common_vendor = require("../../common/vendor.js");
const mock_mockData = require("../../mock/mockData.js");
require("../../mock/type/entity/cart.js");
require("../../mock/type/entity/goods.js");
require("../../mock/type/entity/order.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const initData = common_vendor.ref(mock_mockData.homePageInitData);
    const tabIndex = common_vendor.ref(0);
    console.log(tabIndex.value);
    const clickTab = (a) => {
      tabIndex.value = a;
      console.log(tabIndex.value);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(initData.value.category, (category, i, i0) => {
          return {
            a: common_vendor.t(category.title),
            b: i,
            c: i === tabIndex.value ? 1 : "",
            d: common_vendor.o(($event) => clickTab(i), i)
          };
        }),
        b: `${40 + tabIndex.value * 131}rpx`,
        c: common_vendor.f(initData.value.banner, (banner, i, i0) => {
          return {
            a: banner.img,
            b: banner.target,
            c: i
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/mee/Documents/HBuilderProjects/AiGouWu/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
