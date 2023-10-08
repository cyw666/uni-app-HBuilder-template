"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("Hello uni app");
    common_vendor.onReady(() => {
      console.log("onReady");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/cyw/WorkingDir/电信数智/H5-数字人/digitalhuman-uni-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
