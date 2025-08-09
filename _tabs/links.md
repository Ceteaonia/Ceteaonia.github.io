---
title: 友情链接
icon: fa fa-address-book
order: 5
---
<style>
        :root {
            --primary-color: #333;
            --secondary-color: #666;
            --accent-color: #4a6fa5;
            --bg-color: #f8f8f8;
            --card-bg: #fff;
            --border-radius: 8px;
            --shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
            --transition: all 0.25s ease;
        }
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: var(--primary-color);
            background-color: var(--bg-color);
            margin: 0;
            padding: 0;
            }
        .links-header {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px 20px;
            text-align: center;
        }
        .links-header h1 {
            font-weight: 600;
            font-size: 2rem;
            margin-bottom: 10px;
            color: var(--primary-color);
        }
        .links-header p {
            color: var(--secondary-color);
            max-width: 600px;
            margin: 0 auto;
        }
        .links-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 24px;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        .links-card {
            background: var(--card-bg);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            transition: var(--transition);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            height: 100%;
            border: 1px solid rgba(0, 0, 0, 0.03);
        }
        .links-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }
        .links-image-container {
            width: 100%;
            height: 160px;
            overflow: hidden;
            position: relative;
        }
        .links-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: var(--transition);
        }
        .links-card:hover .links-image {
            transform: scale(1.03);
        }
        .links-content {
            padding: 20px;
            flex-grow: 1;
        }
        .links-title {
            font-size: 1.2rem;
            font-weight: 600;
            margin: 0 0 8px;
        }
        .links-title a {
            color: var(--primary-color);
            text-decoration: none;
            transition: var(--transition);
            display: inline-block;
        }
        .links-title a:hover {
            color: var(--accent-color);
        }
        .links-description {
            color: var(--secondary-color);
            font-size: 0.9rem;
            margin: 0 0 12px;
        }
        .links-meta {
            display: flex;
            align-items: center;
            font-size: 0.8rem;
            color: var(--secondary-color);
            margin-top: auto;
        }
        .links-avatar {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            margin-right: 8px;
            object-fit: cover;
        }
        .notice {
            max-width: 1200px;
            margin: 40px auto;
            padding: 20px;
            background: var(--card-bg);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            text-align: center;
            border-left: 4px solid var(--accent-color);
        }
        @media (max-width: 768px) {
            .links-container {
                grid-template-columns: 1fr;
            }
        }
    </style>

<div class="links-container">
        <div class="links-card">
            <div class="links-image-container">
                <img src="https://truthboard.wdfiles.com/local--files/theme%3Abasic/truthboard.svg" alt="Remelens" class="links-image">
            </div>
            <div class="links-content">
                <h3 class="links-title"><a href="https://truthboard.wikidot.com">Truthboard</a></h3>
                <p class="links-description">Freedom and Blogs</p>
                <div class="links-meta">
                    <img src="https://truthboard.wdfiles.com/local--files/theme%3Abasic/truthboard2.svg" alt="Truthboard" class="links-avatar">
                    <span>社区网站</span>
                </div>
            </div>
        </div>


<div class="links-container">
        <div class="links-card">
            <div class="links-image-container">
                <img src="https://cdn.luogu.com.cn/upload/image_hosting/wzzqwiik.png" alt="Remelens" class="links-image">
            </div>
            <div class="links-content">
                <h3 class="links-title"><a href="https://remelens.me">Remelens的个人主页</a></h3>
                <p class="links-description">我们都在阴沟里，但总有人仰望星空</p>
                <div class="links-meta">
                    <img src="https://cdn.luogu.com.cn/upload/image_hosting/wzzqwiik.png" alt="Remelens" class="links-avatar">
                    <span>个人博客</span>
                </div>
            </div>
        </div>


<div class="links-container">
        <div class="links-card">
            <div class="links-image-container">
                <img src="https://cdn.luogu.com.cn/upload/image_hosting/wzzqwiik.png" alt="Remelens" class="links-image">
            </div>
            <div class="links-content">
                <h3 class="links-title"><a href="https://remelens.me">Remelens的个人主页</a></h3>
                <p class="links-description">我们都在阴沟里，但总有人仰望星空</p>
                <div class="links-meta">
                    <img src="https://cdn.luogu.com.cn/upload/image_hosting/wzzqwiik.png" alt="Remelens" class="links-avatar">
                    <span>个人博客</span>
                </div>
            </div>
        </div>


<div class="links-card">
            <div class="links-image-container">
                <img src="/assets/img/links/cloud.jpg" alt="网络一隅" class="links-image">
            </div>
            <div class="links-content">
                <h3 class="links-title"><a href="https://cloud.sd.cn">网络一隅</a></h3>
                <p class="links-description">愿我的祝福与你同在</p>
                <div class="links-meta">
                    <img src="/assets/img/links/cloud.jpg" alt="网络一隅" class="links-avatar">
                    <span>个人博客</span>
                </div>
            </div>
        </div>

<div class="links-card">
            <div class="links-image-container">
                <img src="/assets/img/links/xiubi.png" alt="Schwarz" class="links-image">
            </div>
            <div class="links-content">
                <h3 class="links-title"><a href="https://www.schwarzblog.icu/">Schwarz</a></h3>
                <p class="links-description">记录一些笔记和成长经历</p>
                <div class="links-meta">
                    <img src="/assets/img/links/xiubi.png" alt="Schwarz" class="links-avatar">
                    <span>个人博客</span>
                </div>
            </div>
        </div>


<div class="links-card">
            <div class="links-image-container">
                <img src="/assets/img/links/mountr.png" alt="山雨的湖边小屋" class="links-image">
            </div>
            <div class="links-content">
                <h3 class="links-title"><a href="https://mount-rain.link/">山雨的湖边小屋</a></h3>
                <p class="links-description">拥抱过去，创造未来</p>
                <div class="links-meta">
                    <img src="/assets/img/links/mountr.png" alt="山雨的湖边小屋" class="links-avatar">
                    <span>社区网站</span>
                </div>
            </div>
        </div>

<div class="links-card">
            <div class="links-image-container">
                <img src="https://rymingenu.fun/assets/images/rymingenu.png" alt="任亚墨的书房" class="links-image">
            </div>
            <div class="links-content">
                <h3 class="links-title"><a href="https://rymingenu.fun/">任亚墨的书房</a></h3>
                <p class="links-description">你似乎来过这里…</p>
                <div class="links-meta">
                    <img src="https://rymingenu.fun/assets/images/rymingenu.png" alt="任亚墨的书房" class="links-avatar">
                    <span>个人博客</span>
                </div>
            </div>
        </div>