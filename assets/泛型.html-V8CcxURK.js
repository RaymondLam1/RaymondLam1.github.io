import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as e,a as i,e as l,o as p}from"./app-CfLYS-Dh.js";const t={};function r(o,n){return p(),a("div",null,[n[0]||(n[0]=e("p",null,"泛型写法",-1)),i(" more "),n[1]||(n[1]=l(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public interface InferRowCountFactory {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     &lt;T&gt; InferRowCount&lt;T&gt; forType(Class&lt;T&gt; type);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class InferRowCountFactoryImpl implements InferRowCountFactory {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private final Map&lt;Class&lt;?&gt;, InferRowCount&lt;?&gt;&gt; implementationMap;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public InferRowCountFactoryImpl(</span></span>
<span class="line"><span>            InferRowCount4ETLOperator inferRowCount4ETLOperator,</span></span>
<span class="line"><span>            InferRowCount4OperatorBean inferRowCount4OperatorBean) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        this.implementationMap = Map.of(</span></span>
<span class="line"><span>                ETLOperator.class, inferRowCount4ETLOperator,</span></span>
<span class="line"><span>                OperatorBean.class, inferRowCount4OperatorBean</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @SuppressWarnings(&quot;unchecked&quot;)</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public &lt;T&gt; InferRowCount&lt;T&gt; forType(Class&lt;T&gt; type) {</span></span>
<span class="line"><span>        InferRowCount&lt;?&gt; implementation = implementationMap.get(type);</span></span>
<span class="line"><span>        if (implementation == null) {</span></span>
<span class="line"><span>            throw new UnsupportedOperationException(&quot;Unsupported infer row count for type: &quot; + type.getName());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return (InferRowCount&lt;T&gt;) implementation;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2))])}const m=s(t,[["render",r],["__file","泛型.html.vue"]]),u=JSON.parse('{"path":"/blog/base/%E6%B3%9B%E5%9E%8B.html","title":"Finalize 方法","lang":"zh-CN","frontmatter":{"title":"Finalize 方法","category":["技术"],"tag":["Java 基础"]},"headers":[],"git":{"createdTime":1697954364000,"updatedTime":1697954364000,"contributors":[{"name":"raymond","username":"raymond","email":"liangfenglam@163.com","commits":1,"url":"https://github.com/raymond"}]},"readingTime":{"minutes":0.27,"words":82},"filePathRelative":"blog/base/泛型.md","localizedDate":"2023年10月22日","excerpt":"<p>泛型写法</p>\\n"}');export{m as comp,u as data};
