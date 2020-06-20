<template>
  <section
    class="page"
    style="border-top: 2px solid #eaecef;padding-top:1rem;margin-top:2rem;padding-right:2.5rem"
  >
    <div style="padding-left:2.5rem;">
      <!-- id 将作为查询条件 -->
      <span class="leancloud-visitors" data-flag-title="Your Article Title">
        <em class="post-meta-item-text">阅读量：</em>
        <i class="leancloud-visitors-count"></i>
      </span>
    </div>
    <h3 style="padding-left:2.5rem;">发表评论：</h3>
    <div style="padding-left:2.5rem;" id="vcomments"></div>
  </section>
</template>
 
<script>
export default {
  name: "Valine",
  mounted: function() { // 网页重新刷新加载, 也重新初始化评论组件
    // 修改不同路由页面的配置 区分不同页面的评论
    // require window
    const Valine = require("valine");
    if (typeof window !== "undefined") {
      this.Windows = window;
      this.Windows.AV = require("leancloud-storage");
    }
    this.valine = new Valine();
    this.initValine();
  },
  watch: { // 监听路由改变, 重新初始化评论组件
    $route(to, from) {
      if (from.path != to.path) {
        this.initValine();
      }
    }
  },
  methods: {
    initValine() {
      let path = location.origin + location.pathname;
      document.getElementsByClassName("leancloud-visitors")[0].id = path;
      this.valine.init({
        el: "#vcomments",
        appId: "请填写你自己从leanCloud申请下来的AppID",
        appKey: "请填写你自己从leanCloud申请下来的AppKey",
        placeholder: "如果有好的想法, 还请不吝赐教",
        avatar: "wavatar",
        path: path,
        meta: ["nick", "mail"],
        visitor: true
      });
    }
  }
};
</script>
<style>
  .vsys{
    display: none !important;
  }
</style>