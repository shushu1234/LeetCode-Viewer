# LeetCode-Viewer

## 简介：

LeetCode-Viewer是一个利用Python爬取LeetCode-CN的做题信息，并通过Vuepress构建网页展示出来的一个项目，具体可以参考Demo：[LeetCode-Viewer](https://leetcode.liuyao.site/)

下面给先看一下吧：

![LeetCode-Viewer](https://images-1253421044.cos.ap-beijing.myqcloud.com/leetcode-viewer/LeetCode-Viwer.gif)

## 使用方式

fork该工程，然后clone到本地，由于本项目需要vuepress和python相关环境支持，需要先执行下面该命令：

* `npm install`
* `pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple -r requirements.txt`

然后进入到LeetCode-Spider目录中修改`config.json`，其中outputDir需要填写该工程的`/docs/views`文件夹路径

```json
{
 "username": "aaa",
    
 "password": "bbb",
 
 "outputDir": "/Users/liuyao/Downloads/LeetCode-Blog-Test/docs/views"
}

```

然后在LeetCode-Spider目录下执行，将会降题目和代码信息爬取到`/docs/views`目录下：

* `python3 LeetCode.py`

本地预览：

* `npm run dev`

构建项目生成静态页面：

* `npm run docs:build`

发布到xxx.github.io中，复制build生成的`dist`目录下的文件到本地项目xxx.github.io中，然后push上去即可通过xxx.github.io访问查看。


## 支持功能

1. 自动爬取LeetCode通过的所有题目。

   ![](https://images-1253421044.cos.ap-beijing.myqcloud.com/leetcode-viewer/all.jpg)

2. 对每一道题目可以爬取 **英文原文**，**中文翻译**，**通过代码**，**统计信息**，**提交历史**，**相似题目**。

   ![](https://images-1253421044.cos.ap-beijing.myqcloud.com/leetcode-viewer/preview.jpg)

3. 提交代码中可以展示所有的通过的代码，支持**多种语言同时展示**，可以**折叠代码展示区**。

   ![](https://images-1253421044.cos.ap-beijing.myqcloud.com/leetcode-viewer/code.jpg)

4. 统计信息展示该题的**通过次数**，**提交次数**，**AC比率**。

   ![](https://images-1253421044.cos.ap-beijing.myqcloud.com/leetcode-viewer/summary.jpg)

5. 提交历史展示该题的所有的**提交时间**，**提交结果**，**执行时间**，**内存消耗**，**语言**，同时可以点击提交结果自动对应的提交详情页。

   ![](https://images-1253421044.cos.ap-beijing.myqcloud.com/leetcode-viewer/history.jpg)

6. 相似题目将自动获取与该题**类似的题目**及其**难度**（如果该题存在相似题目的话），可以点击题目直达该题。

   ![](https://images-1253421044.cos.ap-beijing.myqcloud.com/leetcode-viewer/same.jpg)

7. 分类将根据题目的难度分为**简单**，**中等**，**困难**。

   ![](https://images-1253421044.cos.ap-beijing.myqcloud.com/leetcode-viewer/category.jpg)

8. 标签页将对题目按照对应的标签自动分类。

   ![](https://images-1253421044.cos.ap-beijing.myqcloud.com/leetcode-viewer/tags.jpg)

9. 时间轴将根据做题的时间自动排列出来。

   ![](https://images-1253421044.cos.ap-beijing.myqcloud.com/leetcode-viewer/timeline.jpg)

## 爬取规则

如果该题是新AC的题目，只要运行LeetCode.py就会自动爬取；如果某题有新的提交AC提交代码，也会自动爬取。

如果想让某道题重新爬取的话，可以修改工程中的`problem.json`

![problem.json](https://images-1253421044.cos.ap-beijing.myqcloud.com/leetcode-viewer/problem-json.jpg)

如果想重新爬取该题目的话，删掉整行即可，如果要重新某次提交的话，删掉对应提交的时间戳即可。

## 致谢

该项目采用的主题为 [vuepress-theme-rco](https://github.com/vuepress-reco/vuepress-theme-reco)

## 已知问题

由于爬取下来的题目是html，在vuepress中展示可能由于转义字符原因展示不出来，需要找到该题的markdown文件，修改其中的转义字符即可，一般加个回车或空格即可。

**如果你觉得好，请给个star吧～**