---
title: 友情链接
icon: fa fa-address-book
order: 5
---

> 本站友情链接列表仍处于检修状态中...是的我想我是修不好了...但我觉得我能把跳转功能修一修就是万幸...（祈祷）

<details>

<summary>损坏的友情链接，展开后部分无法使用，仅有跳转功能，作为留档。</summary>

<div class="friendship-links">
  <div class="link-card" data-href="https://truthboard.wikidot.com">
    <div class="card-content">
      <img src="https://truthboard.wdfiles.com/local--files/theme%3Abasic/truthboard2.svg" alt="Truthboard头像" class="avatar">
      <div class="card-text">
        <h3>Truthboard</h3>
        <p>Freedom and Blogs</p>
        <span class="type-tag">社区网站</span>
      </div>
    </div>
  </div>
  
  <div class="link-card" data-href="https://remelens.link">
    <div class="card-content">
      <img src="https://cdn.luogu.com.cn/upload/image_hosting/wzzqwiik.png" alt="Remelens头像" class="avatar">
      <div class="card-text">
        <h3>Remelens的个人主页</h3>
        <p>我们都在阴沟里，但总有人仰望星空</p>
        <span class="type-tag">个人博客</span>
      </div>
    </div>
  </div>
  
  <div class="link-card" data-href="https://cloud.sd.cn">
    <div class="card-content">
      <img src="https://cloud.sd.cn/usr/uploads/2025/07/574656472.png" alt="网络一隅头像" class="avatar">
      <div class="card-text">
        <h3>网络一隅</h3>
        <p>愿我的祝福与你同在</p>
        <span class="type-tag">个人博客</span>
      </div>
    </div>
  </div>
  
  <div class="link-card" data-href="https://example.com/schwarz">
    <div class="card-content">
      <img src="/assets/img/links/xiubi.png" alt="Schwarz头像" class="avatar">
      <div class="card-text">
        <h3>Schwarz</h3>
        <p>记录一些笔记和成长经历</p>
        <span class="type-tag">个人博客</span>
      </div>
    </div>
  </div>
  
  <div class="link-card" data-href="https://mount-rain.link">
    <div class="card-content">
      <img src="/assets/img/links/mountr.png" alt="山雨的湖边小屋头像" class="avatar">
      <div class="card-text">
        <h3>山雨的湖边小屋</h3>
        <p>拥抱过去，创造未来</p>
        <span class="type-tag">社区网站</span>
      </div>
    </div>
  </div>
  
  <div class="link-card" data-href="https://rymingenu.top">
    <div class="card-content">
      <img src="https://rymingenu.top/assets/images/rymingenu.png" alt="任亚墨的书房头像" class="avatar">
      <div class="card-text">
        <h3>任亚墨的书房</h3>
        <p>你似乎来过这里…</p>
        <span class="type-tag">个人博客</span>
      </div>
    </div>
  </div>
</div>

</details>

<style>
.friendship-links {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.link-card {
  position: relative;
  transition: transform 0.3s ease;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
}

.link-card:hover {
  transform: translateY(-5px);
}

.card-content {
  display: flex;
  align-items: center;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 2;
}

.link-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
  border-radius: 12px;
}

.link-card:hover::before {
  opacity: 0.1;
}

.card-content:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  border-color: rgba(0, 0, 0, 0.1);
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
  border: 2px solid #f8f8f8;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.link-card:hover .avatar {
  transform: scale(1.05);
}

.card-text {
  flex: 1;
}

.card-text h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  transition: color 0.3s ease;
}

.link-card:hover .card-text h3 {
  color: #1a73e8;
}

.card-text p {
  margin: 8px 0 0;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  transition: color 0.3s ease;
}

.link-card:hover .card-text p {
  color: #444;
}

.type-tag {
  display: inline-block;
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 20px;
  background-color: #f0f7ff;
  color: #1a73e8;
  margin-top: 10px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.link-card:hover .type-tag {
  background-color: #1a73e8;
  color: white;
}
</style>

<script>
document.querySelectorAll('.link-card').forEach(card => {
  card.addEventListener('click', function() {
    const url = this.getAttribute('data-href');
    if (url) window.open(url, '_blank');
  });
});
</script>