import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,e,o as i}from"./app-D1evFwvJ.js";const l={};function r(p,s){return i(),n("div",null,s[0]||(s[0]=[e(`<h2 id="grafana-and-prometheus" tabindex="-1"><a class="header-anchor" href="#grafana-and-prometheus"><span>grafana and prometheus</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker run -d -p 3000:3000 --name=grafana grafana/grafana-enterprise</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker run --name prometheus -d -p 9090:9090 -v /Users/raymond/tmp/prometheus.yaml:/etc/prometheus/prometheus.yml prom/prometheus</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># my global config</span></span>
<span class="line"><span>global:</span></span>
<span class="line"><span>  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.</span></span>
<span class="line"><span>  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.</span></span>
<span class="line"><span>  # scrape_timeout is set to the global default (10s).</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Alertmanager configuration</span></span>
<span class="line"><span>alerting:</span></span>
<span class="line"><span>  alertmanagers:</span></span>
<span class="line"><span>    - static_configs:</span></span>
<span class="line"><span>        - targets:</span></span>
<span class="line"><span>          # - alertmanager:9093</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Load rules once and periodically evaluate them according to the global &#39;evaluation_interval&#39;.</span></span>
<span class="line"><span>rule_files:</span></span>
<span class="line"><span>  # - &quot;first_rules.yml&quot;</span></span>
<span class="line"><span>  # - &quot;second_rules.yml&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># A scrape configuration containing exactly one endpoint to scrape:</span></span>
<span class="line"><span># Here it&#39;s Prometheus itself.</span></span>
<span class="line"><span>scrape_configs:</span></span>
<span class="line"><span>  # The job name is added as a label \`job=&lt;job_name&gt;\` to any timeseries scraped from this config.</span></span>
<span class="line"><span>  - job_name: &quot;prometheus&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # metrics_path defaults to &#39;/metrics&#39;</span></span>
<span class="line"><span>    # scheme defaults to &#39;http&#39;.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    static_configs:</span></span>
<span class="line"><span>      - targets: [&quot;localhost:9090&quot;]</span></span>
<span class="line"><span>  - job_name: &#39;spring-boot-application&#39;</span></span>
<span class="line"><span>    metrics_path: &#39;/actuator/prometheus&#39;</span></span>
<span class="line"><span>    scrape_interval: 5s # This can be adjusted based on our needs</span></span>
<span class="line"><span>    static_configs:</span></span>
<span class="line"><span>      - targets: [&#39;host.docker.internal:8080&#39;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const c=a(l,[["render",r],["__file","work.html.vue"]]),o=JSON.parse('{"path":"/blog/work.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"grafana and prometheus","slug":"grafana-and-prometheus","link":"#grafana-and-prometheus","children":[]}],"git":{"createdTime":1757553268000,"updatedTime":1757553268000,"contributors":[{"name":"RaymondLam1","username":"RaymondLam1","email":"liangfenglam@163.com","commits":1,"url":"https://github.com/RaymondLam1"}]},"readingTime":{"minutes":0.52,"words":157},"filePathRelative":"blog/work.md","localizedDate":"2025年9月11日","excerpt":"<h2>grafana and prometheus</h2>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>docker run -d -p 3000:3000 --name=grafana grafana/grafana-enterprise</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{c as comp,o as data};
