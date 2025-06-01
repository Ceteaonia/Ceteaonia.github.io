---
title: 友情链接
icon: fa fa-address-book
order: 5
---
<style type="text/css">

/*我们如今拥有更为现代的友情链接设计思路*/

:root {
  --primary-font: 'Segoe UI', system-ui, -apple-system, sans-serif;
}

.links-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
    padding: 30px;
    max-width: 1400px;
    margin: 0 auto;
    font-family: var(--primary-font);
}

.linksbox {
    position: relative;
    border-radius: 16px;
    padding: 25px;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    color: #2d3436;
    background: white;
    border: none;
}

.linksbox::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: linear-gradient(90deg, #ff7675, #0984e3);
}

.linksbox::after {
    content: '';
    position: absolute;
    bottom: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%);
    transform: scale(0);
    transition: transform 0.6s ease-out;
    z-index: 0;
}

.linksbox:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
}

.linksbox:hover::after {
    transform: scale(2);
}

.links-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.links-image-container {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.linksimage {
    width: 70px;
    height: 70px;
    border-radius: 18px;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 3px solid white;
}

.linksbox:hover .linksimage {
    transform: rotate(5deg) scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.linkstitle {
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 8px;
    color: #2d3436;
    line-height: 1.3;
}

.linkstitle a {
    color: inherit;
    text-decoration: none;
    background: linear-gradient(to right, #6c5ce7, #00cec9);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease;
}

.linkstitle a:hover {
    background: linear-gradient(to right, #fd79a8, #e84393);
    -webkit-background-clip: text;
    background-clip: text;
}

.linksbox p {
    margin: 0;
    font-size: 1em;
    line-height: 1.6;
    color: #636e72;
    padding: 12px 0;
    position: relative;
}

.linksbox p::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, #00b894, #00cec9);
    border-radius: 3px;
}

.links-decoration {
    position: absolute;
    opacity: 0.08;
    z-index: 0;
}

.decoration-1 {
    top: 20px;
    right: 20px;
    font-size: 80px;
    transform: rotate(15deg);
}

.decoration-2 {
    bottom: 10px;
    left: 10px;
    font-size: 60px;
    transform: rotate(-10deg);
}

/* 随机颜色生成 */
.linksbox:nth-child(6n+1)::before { background: linear-gradient(90deg, #ff7675, #e84393); }
.linksbox:nth-child(6n+2)::before { background: linear-gradient(90deg, #0984e3, #00cec9); }
.linksbox:nth-child(6n+3)::before { background: linear-gradient(90deg, #00b894, #55efc4); }
.linksbox:nth-child(6n+4)::before { background: linear-gradient(90deg, #fdcb6e, #e17055); }
.linksbox:nth-child(6n+5)::before { background: linear-gradient(90deg, #6c5ce7, #a29bfe); }
.linksbox:nth-child(6n+6)::before { background: linear-gradient(90deg, #fd79a8, #fab1a0); }

.linksbox:nth-child(6n+1) p::after { background: linear-gradient(90deg, #ff7675, #e84393); }
.linksbox:nth-child(6n+2) p::after { background: linear-gradient(90deg, #0984e3, #00cec9); }
.linksbox:nth-child(6n+3) p::after { background: linear-gradient(90deg, #00b894, #55efc4); }
.linksbox:nth-child(6n+4) p::after { background: linear-gradient(90deg, #fdcb6e, #e17055); }
.linksbox:nth-child(6n+5) p::after { background: linear-gradient(90deg, #6c5ce7, #a29bfe); }
.linksbox:nth-child(6n+6) p::after { background: linear-gradient(90deg, #fd79a8, #fab1a0); }
</style>

<div class="links-container">
    <div class="linksbox">
        <div class="links-decoration decoration-1">✦</div>
        <div class="links-decoration decoration-2">❀</div>
        <div class="links-content">
            <div class="links-image-container">
                <img src="https://cdn.luogu.com.cn/upload/image_hosting/wzzqwiik.png" alt="rmls" class="linksimage">
            </div>
            <span class="linkstitle"><a href="https://remelens.me">Remelens的个人主页</a></span>
            <p>企鹅也是鹅啊，火腿也是腿啊 ~</p>
        </div>
    </div>


<div class="linksbox">
        <div class="links-decoration decoration-1">❁</div>
        <div class="links-decoration decoration-2">✦</div>
        <div class="links-content">
            <div class="links-image-container">
                <img src="/assets/img/links/cloud.jpg" alt="cloud" class="linksimage">
            </div>
            <span class="linkstitle"><a href="https://cloud.sd.cn">网络一隅</a></span>
            <p>愿我的祝福与你同在</p>
        </div>
</div>

<div class="linksbox">
        <div class="links-decoration decoration-1">✿</div>
        <div class="links-decoration decoration-2">❀</div>
        <div class="links-content">
            <div class="links-image-container">
                <img src="/assets/img/links/xiubi.png" alt="xb" class="linksimage">
            </div>
            <span class="linkstitle"><a href="https://www.schwarzblog.icu/">Schwarz</a></span>
            <p>记录一些笔记和成长经历</p>
        </div>
</div>

<div class="linksbox">
        <div class="links-decoration decoration-1">❀</div>
        <div class="links-decoration decoration-2">✧</div>
        <div class="links-content">
            <div class="links-image-container">
                <img src="/assets/img/links/mountr.png" alt="mr" class="linksimage">
            </div>
            <span class="linkstitle"><a href="https://mount-rain.link/">山雨的湖边小屋</a></span>
            <p>拥抱过去，创造未来</p>
        </div>
</div>

<div class="linksbox">
        <div class="links-decoration decoration-1">✦</div>
        <div class="links-decoration decoration-2">❁</div>
        <div class="links-content">
            <div class="links-image-container">
                <img src="https://rymingenu.fun/assets/images/rymingenu.png" alt="rym" class="linksimage">
            </div>
            <span class="linkstitle"><a href="https://rymingenu.fun/">任亚墨的书房</a></span>
            <p>你似乎来过这里…</p>
        </div>
    </div>
</div>

<script>
// 为每个卡片添加随机装饰符号
const decorations = ['✦', '✧', '❁', '✿', '❀', '♡', '★', '☆', '✪', '✯'];
const boxes = document.querySelectorAll('.linksbox');

boxes.forEach(box => {
    const deco1 = box.querySelector('.decoration-1');
    const deco2 = box.querySelector('.decoration-2');
    
    if(deco1 && deco2) {
        deco1.textContent = decorations[Math.floor(Math.random() * decorations.length)];
        deco2.textContent = decorations[Math.floor(Math.random() * decorations.length)];
    }
});
</script>

<!--
用于添加新友情链接：

<div class="linksbox">
    <div class="links-decoration decoration-1">✧</div>
    <div class="links-decoration decoration-2">❀</div>
    <div class="links-content">
        <div class="links-image-container">
            <img src="新图片URL" alt="新描述" class="linksimage">
        </div>
        <span class="linkstitle"><a href="新链接URL">新网站标题</a></span>
        <p>新网站描述文字</p>
    </div>
</div>

-->

<!--

已归档内容：

<div class="linksbox" style="background-image: -webkit-cross-fade(url(/assets/img/links/transparent.png),url(/assets/img/links/orcinus-library.png),40%);">
    <img src="/assets/img/links/orcinus-library.png" alt="虎鲸神话故事馆" class="linksimage">
    <span class="linkstitle"><a href="https://orcinushinwa.github.io">虎鲸神话故事馆</a></span>
    <p>当前连载系列：比斯特</p>
</div>

<div class="linksbox">
        <div class="links-decoration decoration-1">✧</div>
        <div class="links-decoration decoration-2">✿</div>
        <div class="links-content">
            <div class="links-image-container">
                <img src="/assets/img/links/rk.png" alt="rk" class="linksimage">
            </div>
            <span class="linkstitle"><a href="https://runeri-star.github.io/">RK'S BLOGS</a></span>
            <p>耶嘿~！这里是~Runeri的blog捏☆</p>
        </div>
</div>

-->





-----

**如果你希望在这里加上你的链接，请在侧栏“聊天”留言或在侧栏邮箱中发送邮件，我会很快的看到的！**


