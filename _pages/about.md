---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hello! I am a third-year PhD student in Computer Science at Washington University in St. Louis. I'm fortunate to be advised by Prof. [**Yixin Chen**](https://www.cse.wustl.edu/~yixin.chen/) and to work closely with Prof. [**Muhan Zhang**](https://muhanzhang.github.io/) at Peking University. Previously, I received my master's degree from Zhejiang University, where I was advised by Prof. [**Yang Yang**](http://yangy.org/).

> My research focuses on diffusion language models, structured data generation, and LLM reasoning, with a background in self-supervised learning. I am interested in LLM, Agentic AI, reinforcement learning, and self-improving AI systems, and am seeking **Spring or Summer 2027 Research Scientist Intern and Applied Scientist Intern** opportunities. [Find my CV here]({{ '/repos/CV_DonghongCai_1014.pdf' | relative_url }}).

# 🔥 News
<div class='news-scroll' markdown="1">

- *2026.09*: &nbsp;🎉🎉 [TabDLM](https://arxiv.org/abs/2602.22586) is accepted by NeurIPS 2026!
- *2026.08*: &nbsp;🎉🎉 [LoPE](https://arxiv.org/abs/2605.05566) is accepted by EMNLP 2026!
- *2026.05*: &nbsp;🎉🎉 [GRIP](https://arxiv.org/abs/2511.07457) is accepted by KDD 2026!
- *2026.02*: &nbsp;🔥🔥 [TabDLM](https://arxiv.org/abs/2602.22586) released, we proposed a unified numerical-language diffusion framework for generating high-fidelity tabular data with numerical, categorical and free-form text features.
- *2025.11*: &nbsp;🔥🔥 [GRIP](https://arxiv.org/abs/2511.07457) released, GRIP is a parameter-efficient framework that injects graph knowledge into LLMs, enabling efficient and context-free reasoning over large-scale text-attributed graphs.
- *2024.12*: &nbsp;🧑‍💻🧑‍💻 Following an agreement with our collaborating hospital and industry partners, we are pleased to make the MBrain code publicly available. The repository can be found [here](https://github.com/ilikevegetable/MBrain).
- *2024.08*: &nbsp;✨✨ I started my PhD at Washington University in St. Louis (WashU).

</div>

# 📝 Selected Publications 

[//]: # (published-paper-1: MBrain)
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">KDD 2023</div><img src='images/papers/mbrain.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[MBrain: A Multi-channel Self-Supervised Learning Framework for Brain Signals](https://dl.acm.org/doi/pdf/10.1145/3580305.3599426)

**Donghong Cai**, [Junru Chen](https://mrnobodycali.github.io/), [Yang Yang](http://yangy.org/), Teng Liu, Yafeng Li

[code ![](https://img.shields.io/github/stars/ilikevegetable/MBrain?style=social)](https://github.com/ilikevegetable/MBrain)

MBrain is the first generalized self-supervised learning framework, which can be applied to pre-train both EEG and SEEG signals.
</div>
</div>

[//]: # (published-paper-2: grip)
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">KDD 2026</div><img src='images/papers/grip.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GRIP: In-Parameter Graph Reasoning through Fine-Tuning Large Language Models](https://arxiv.org/pdf/2511.07457)

[Jiarui Feng](https://jiaruifeng.github.io/), **Donghong Cai**, [Yixin Chen](https://www.cse.wustl.edu/~yixin.chen/), [Muhan Zhang](https://muhanzhang.github.io/)

[code ![](https://img.shields.io/github/stars/JiaruiFeng/GRIP?style=social)](https://github.com/JiaruiFeng/GRIP)

GRIP is a parameter-efficient framework that injects graph knowledge into LLMs, enabling efficient and context-free inference over text-attributed graphs.
</div>
</div>

[//]: # (published-paper-3: tabdlm)
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2026</div><img src='images/papers/tabdlm.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[TabDLM: Free-Form Tabular Data Generation via Joint Numerical-Language Diffusion](https://arxiv.org/pdf/2602.22586)

**Donghong Cai**, [Jiarui Feng](https://jiaruifeng.github.io/), [Yanbo Wang](https://yanxwb.github.io/), Da Zheng, [Yixin Chen](https://www.cse.wustl.edu/~yixin.chen/), [Muhan Zhang](https://muhanzhang.github.io/)

[code ![](https://img.shields.io/github/stars/ilikevegetable/TabDLM?style=social)](https://github.com/ilikevegetable/TabDLM)

TabDLM is a unified numerical-language diffusion framework for generating tabular data with both numerical, categorical and free-form text features.
</div>
</div>

[//]: # (published-paper-4: lope)
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2026</div><img src='images/papers/lope.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Nonsense Helps: Prompt Space Perturbation Broadens Reasoning Exploration](https://arxiv.org/pdf/2605.05566)

[Langlin Huang](https://shrango.github.io/), [Chengsong Huang](https://chengsong-huang.github.io/), [Jinyuan Li](https://sites.google.com/view/jinyuanli), **Donghong Cai**, [Yuyi Yang](https://yyuyi.github.io/), [Jiaxin Huang](https://teapot123.github.io/)

[code ![](https://img.shields.io/github/stars/shrango/LoPE?style=social)](https://github.com/shrango/LoPE)

LoPE is a simple yet effective training framework that prepends random Lorem Ipsum text to prompts when all rollouts fail, broadening reasoning exploration in LLM reinforcement learning.
</div>
</div>

[//]: # (# 🎖 Honors and Awards)

[//]: # (- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. )

[//]: # (- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. )

# 📖 Educations
- *2024.08 - present*, Ph.D., Computer Science, Washington University in St. Louis, Saint Louis, US.
- *2020.09 - 2023.03*, Master's, Software Engineering, Zhejiang University, Hangzhou, China.
- *2016.09 - 2020.06*, Bachelor's, Software Engineering, Huazhong University of Science and Technology, Wuhan, China.

# 💻 Work Experience
- *2023.04 - 2024.07*, Machine Learning Engineer, Alibaba Group, Shenzhen, China.

# ✨ Misc
- I am from Shenzhen, China.
- In my spare time, I play basketball and am learning photography.
- I have a cat named Latte. <button class="latte-gallery-trigger" type="button" aria-haspopup="dialog" aria-controls="latte-gallery">🐾 View photos</button>

<div class="latte-gallery" id="latte-gallery" role="dialog" aria-modal="true" aria-label="Photos of Latte" data-second-src="{{ '/images/latte/latte_napping.png' | relative_url }}" hidden>
  <div class="latte-gallery__backdrop"></div>
  <button class="latte-gallery__close" type="button" aria-label="Close photo gallery">&times;</button>
  <div class="latte-gallery__viewer">
    <button class="latte-gallery__arrow latte-gallery__arrow--prev" type="button" aria-label="Previous photo">&#8249;</button>
    <figure class="latte-gallery__figure">
      <img class="latte-gallery__image" src="{{ '/images/latte/latte_looking_up.png' | relative_url }}" alt="Latte looking up at the camera" width="1086" height="1448">
      <figcaption class="latte-gallery__caption" aria-live="polite">Latte <span class="latte-gallery__count">1 / 2</span></figcaption>
    </figure>
    <button class="latte-gallery__arrow latte-gallery__arrow--next" type="button" aria-label="Next photo">&#8250;</button>
  </div>
</div>
<script src="{{ '/assets/js/latte-gallery.js' | relative_url }}?v={{ site.time | date: '%s' }}" defer></script>

<script type='text/javascript' id='clustrmaps' src='//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=300&t=tt&d=wLI1v9LBMSlN_Rc9WDhI7ScSKU8xmJYfxpZyDfv1SHQ&co=2d78ad&ct=ffffff&cmo=3acc3a&cmn=ff5353'></script>

[//]: # ([![Hits]&#40;https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Filikevegetable.github.io&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=visits&edge_flat=false&#41;]&#40;https://hits.seeyoufarm.com&#41;)
