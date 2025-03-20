import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,e as s,o as r}from"./app-hy_yT35i.js";const i="/assets/image-cTMwn9iq.png",t={};function l(o,a){return r(),n("div",null,a[0]||(a[0]=[s(`<p>公司有个使用 gralde 6.1 的老项目，换 arch 芯片后第一次构建，报错：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>org.gradle.tooling.GradleConnectionException: Could not run phased build action using connection to Gradle installation &#39;/Users/raymond/gradle/gradle-6.1&#39;.</span></span>
<span class="line"><span>	at org.gradle.tooling.internal.consumer.ConnectionExceptionTransformer.transform(ConnectionExceptionTransformer.java:57)</span></span>
<span class="line"><span>	at org.gradle.tooling.internal.consumer.ResultHandlerAdapter.onFailure(ResultHandlerAdapter.java:42)</span></span>
<span class="line"><span>	at org.gradle.tooling.internal.consumer.async.DefaultAsyncConsumerActionExecutor$1$1.run(DefaultAsyncConsumerActionExecutor.java:68)</span></span>
<span class="line"><span>	at org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:64)</span></span>
<span class="line"><span>	at org.gradle.internal.concurrent.AbstractManagedExecutor$1.run(AbstractManagedExecutor.java:48)</span></span>
<span class="line"><span>	at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1144)</span></span>
<span class="line"><span>	at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:642)</span></span>
<span class="line"><span>	at java.base/java.lang.Thread.run(Thread.java:1583)</span></span>
<span class="line"><span>Caused by: org.gradle.launcher.daemon.client.DaemonConnectionException: The newly created daemon process has a different context than expected.</span></span>
<span class="line"><span>It won&#39;t be possible to reconnect to this daemon. Context mismatch: </span></span>
<span class="line"><span>Java home is different.</span></span>
<span class="line"><span>Wanted: DefaultDaemonContext[uid=null,javaHome=/Users/raymond/.sdkman/candidates/java/current,daemonRegistryDir=/Users/raymond/.gradle/daemon,pid=4279,idleTimeout=null,priority=NORMAL,daemonOpts=-XX:MaxPermSize=512m,-XX:+HeapDumpOnOutOfMemoryError,-Xmx2048m,-Dfile.encoding=UTF-8,-Duser.country=CN,-Duser.language=zh,-Duser.variant]</span></span>
<span class="line"><span>Actual: DefaultDaemonContext[uid=2391ac83-4837-4467-9651-9ae0908299f2,javaHome=/Users/raymond/.sdkman/candidates/java/8.0.442-zulu/zulu-8.jdk/Contents/Home,daemonRegistryDir=/Users/raymond/.gradle/daemon,pid=4384,idleTimeout=10800000,priority=NORMAL,daemonOpts=-XX:MaxPermSize=512m,-XX:+HeapDumpOnOutOfMemoryError,-Xmx2048m,-Dfile.encoding=UTF-8,-Duser.country=CN,-Duser.language=zh,-Duser.variant]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>来源于 idea.log</p></blockquote><p>参考：<a href="https://stackoverflow.com/questions/37960949/intellij-idea-says-java-home-is-different" target="_blank" rel="noopener noreferrer">https://stackoverflow.com/questions/37960949/intellij-idea-says-java-home-is-different</a></p><p>尝试在 <code>gradle.properties</code> 设置 <code>org.gradle.java.home</code> ，更改 IDEA <code>Gradle JVM</code> 为指定的 JVM</p><figure><img src="`+i+'" alt="Gradle JVM 配置" tabindex="0" loading="lazy"><figcaption>Gradle JVM 配置</figcaption></figure><p>发现可以解决问题</p><div class="hint-container important"><p class="hint-container-title">重要</p><p>Gradle JVM 配置需要慎重</p></div>',8)]))}const p=e(t,[["render",l],["__file","gradle_jvm配置.html.vue"]]),u=JSON.parse(`{"path":"/posts/gradle_jvm%E9%85%8D%E7%BD%AE.html","title":"为什么我不推荐读硕士","lang":"zh-CN","frontmatter":{"title":"为什么我不推荐读硕士","category":["技术"],"tag":["gradle"]},"headers":[],"git":{"createdTime":1742434168000,"updatedTime":1742434168000,"contributors":[{"name":"梁锋","username":"梁锋","email":"raymond@liangfengdeMac-mini.local","commits":1,"url":"https://github.com/梁锋"}]},"readingTime":{"minutes":0.8,"words":239},"filePathRelative":"posts/gradle_jvm配置.md","localizedDate":"2025年3月20日","excerpt":"<p>公司有个使用 gralde 6.1 的老项目，换 arch 芯片后第一次构建，报错：</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>org.gradle.tooling.GradleConnectionException: Could not run phased build action using connection to Gradle installation '/Users/raymond/gradle/gradle-6.1'.</span></span>\\n<span class=\\"line\\"><span>\\tat org.gradle.tooling.internal.consumer.ConnectionExceptionTransformer.transform(ConnectionExceptionTransformer.java:57)</span></span>\\n<span class=\\"line\\"><span>\\tat org.gradle.tooling.internal.consumer.ResultHandlerAdapter.onFailure(ResultHandlerAdapter.java:42)</span></span>\\n<span class=\\"line\\"><span>\\tat org.gradle.tooling.internal.consumer.async.DefaultAsyncConsumerActionExecutor$1$1.run(DefaultAsyncConsumerActionExecutor.java:68)</span></span>\\n<span class=\\"line\\"><span>\\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:64)</span></span>\\n<span class=\\"line\\"><span>\\tat org.gradle.internal.concurrent.AbstractManagedExecutor$1.run(AbstractManagedExecutor.java:48)</span></span>\\n<span class=\\"line\\"><span>\\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1144)</span></span>\\n<span class=\\"line\\"><span>\\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:642)</span></span>\\n<span class=\\"line\\"><span>\\tat java.base/java.lang.Thread.run(Thread.java:1583)</span></span>\\n<span class=\\"line\\"><span>Caused by: org.gradle.launcher.daemon.client.DaemonConnectionException: The newly created daemon process has a different context than expected.</span></span>\\n<span class=\\"line\\"><span>It won't be possible to reconnect to this daemon. Context mismatch: </span></span>\\n<span class=\\"line\\"><span>Java home is different.</span></span>\\n<span class=\\"line\\"><span>Wanted: DefaultDaemonContext[uid=null,javaHome=/Users/raymond/.sdkman/candidates/java/current,daemonRegistryDir=/Users/raymond/.gradle/daemon,pid=4279,idleTimeout=null,priority=NORMAL,daemonOpts=-XX:MaxPermSize=512m,-XX:+HeapDumpOnOutOfMemoryError,-Xmx2048m,-Dfile.encoding=UTF-8,-Duser.country=CN,-Duser.language=zh,-Duser.variant]</span></span>\\n<span class=\\"line\\"><span>Actual: DefaultDaemonContext[uid=2391ac83-4837-4467-9651-9ae0908299f2,javaHome=/Users/raymond/.sdkman/candidates/java/8.0.442-zulu/zulu-8.jdk/Contents/Home,daemonRegistryDir=/Users/raymond/.gradle/daemon,pid=4384,idleTimeout=10800000,priority=NORMAL,daemonOpts=-XX:MaxPermSize=512m,-XX:+HeapDumpOnOutOfMemoryError,-Xmx2048m,-Dfile.encoding=UTF-8,-Duser.country=CN,-Duser.language=zh,-Duser.variant]</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{p as comp,u as data};
