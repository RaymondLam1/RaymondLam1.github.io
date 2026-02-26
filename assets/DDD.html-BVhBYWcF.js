import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,e as a,o as l}from"./app-CvFiNCUZ.js";const e={};function p(t,s){return l(),n("div",null,s[0]||(s[0]=[a(`<hr><p>title: DDD 架构<br> category:</p><ul><li>架构<br> tag:</li><li>技术</li></ul><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><a href="https://mp.weixin.qq.com/s/htRzBdHrJCsfhh1UbUAIiQ" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/htRzBdHrJCsfhh1UbUAIiQ</a></p></div><p>DDD 是思想，六边形/菱形/整洁架构是分层，DDD 通过建模思想，指导我们以从用例图（use case diagram）出发，与产品、研发、测试一起在一个规范下，脑暴建模。在这个过程中，以结果为导向，分析出可能存在的领域服务。这些领域服务，如登录完成，下单完成，支付完成，收货完成，根据结果态，分析支撑这样的服务所需的对象（实体）、流程、规则等。这样我们可以更加清晰的构建一套系统。而六边形（常用的）架构，则是用于承接 DDD 领域驱动设计对系统分析后的编码实现。六边形可以说是专门为 DDD 做的配套架构，虽然也可以用 MVC 来编写，但这样是会失去面向对象设计和编码的优势，让代码逻辑混乱在一起。所以，这也是各个互联网公司开始往 DDD 架构切换的目的。</p><ul><li>首先，六边形架构，以 DDD 领域驱动实际为指引，为 domain 层，设计充血模型结构，如；登录、下单、支付，在每个模块下，包含完整的服务、模型、适配。适配的目的是这个领域里所需的数据，都通过适配的方式从外部调用进来，比如；数据库、缓存、接口等。这是一种 ACL 防腐设计，将来外部的接口变化了，也不会影响我们的领域服务，只要按照领域服务的适配标准提供即可。</li><li>之后，围绕着领域 domain 开始，需要啥就让外部的基础设施层实现领域层的接口来提供。而接口要提供啥能力，就调用 case 编排 domain 层，或则简单的由 domain 层直接提供也可以。</li><li>最后，也就是 trigger 触发器，我们把接口、任务、mq等都理解为一种触发，之后让 trigger 调用 case 层。case 或者 domain 的目的，就是分摊 trigger 以前 Controller 编写逻辑代码的压力。让 trigger 只是负责对外逻辑的封装，错误码，异常即可。</li></ul><div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" data-title="mermaid" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">graph TD</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    subgraph MVC_Architecture [&quot;MVC 架构 (东西多了，有点乱！)&quot;]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        direction TB</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        m_model[model - 模型层: req, res, vo, dto]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        m_service[service - 业务层]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        m_controller[controller - 控制层: http, rpc, job, mq]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        m_export[export - 提供接口]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        m_rpc[rpc - 对接接口]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        m_dao[dao - 数据库操作: dao, pojo]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        m_controller --&gt; m_service</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        m_export --&gt; m_controller</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        m_service --&gt; m_rpc</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        m_service --&gt; m_dao</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    MVC_Architecture --&gt; DDD_Architecture</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    subgraph DDD_Architecture [&quot;DDD 架构 (清晰多了！)&quot;]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        direction TB</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        d_api[api - 接口定义: http, rpc, dto/response]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        d_app[app - 应用入口]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        d_case[case - 服务编排]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        d_domain[domain - 领域服务]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        d_infra[infrastructure - 基础设施层]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        d_trigger[trigger - 触发器层: JOB, MQ, HTTP, RPC]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        d_types[types - 通用层]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        %% 核心流程</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        d_api --&gt; d_app</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        d_app --&gt; d_domain</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        d_case --&gt; d_domain</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        d_trigger --&gt; d_infra</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        d_trigger -- 复杂流程 --&gt; d_case</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        d_infra --&gt; d_domain</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        %% 领域模型细节 (以节点形式表现内部逻辑)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        subgraph Domain_Detail [&quot;领域服务内部 (登录校验 / 商品下单)&quot;]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            direction LR</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            adapter --&gt; model</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            model --&gt; entity[实体]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            model --&gt; val[值对象]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            model --&gt; agg[聚合]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            service_inner[service]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        d_domain -.-&gt; Domain_Detail</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        Domain_Detail --&gt; d_infra</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    %% 样式美化</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    style MVC_Architecture fill:#fff9f0,stroke:#d4a373,stroke-dasharray: 5 5</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    style DDD_Architecture fill:#f0f7f4,stroke:#2d6a4f,stroke-dasharray: 5 5</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    style d_app fill:#800000,color:#fff</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    style d_domain fill:#fff4b3</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    style d_infra fill:#6200ea,color:#fff</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    style d_trigger fill:#29b6f6,color:#fff</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    style d_api fill:#80deea</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    style d_case fill:#d81b60,color:#fff</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const h=i(e,[["render",p],["__file","DDD.html.vue"]]),c=JSON.parse('{"path":"/posts/DDD.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":1770687551000,"updatedTime":1770687551000,"contributors":[{"name":"RaymondLam1","username":"RaymondLam1","email":"liangfenglam@163.com","commits":1,"url":"https://github.com/RaymondLam1"}]},"readingTime":{"minutes":2.76,"words":827},"filePathRelative":"posts/DDD.md","localizedDate":"2026年2月10日","excerpt":"<hr>\\n<p>title: DDD 架构<br>\\ncategory:</p>\\n<ul>\\n<li>架构<br>\\ntag:</li>\\n<li>技术</li>\\n</ul>\\n<hr>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<p><a href=\\"https://mp.weixin.qq.com/s/htRzBdHrJCsfhh1UbUAIiQ\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://mp.weixin.qq.com/s/htRzBdHrJCsfhh1UbUAIiQ</a></p>\\n</div>"}');export{h as comp,c as data};
