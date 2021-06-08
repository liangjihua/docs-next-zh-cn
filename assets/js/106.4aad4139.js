(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{625:function(_,v,t){"use strict";t.r(v);var r=t(57),e=Object(r.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"vue-文档编写指南"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-文档编写指南"}},[_._v("#")]),_._v(" Vue 文档编写指南")]),_._v(" "),t("blockquote",[t("p",[_._v("译者：本章节大部分内容是针对母语是英文的读者，中文用户可略读，除非你想以英文文档编写者的身份参与 Vue docs 的编写。")])]),_._v(" "),t("p",[_._v("编写文档是一种换位思考的练习。我们并不是在描述客观现实——源代码已经做到了。我们的工作是帮助塑造用户与 Vue 生态系统之间的关系。这份不断发展的指南提供了一些规则和建议，说明如何在 Vue 生态系统中始终如一地做到这一点。")]),_._v(" "),t("h2",{attrs:{id:"原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原则"}},[_._v("#")]),_._v(" 原则")]),_._v(" "),t("ul",[t("li",[t("p",[t("strong",[_._v("除非有充分的文档证明，否则功能不存在")]),_._v("。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("尊重用户的认知能力 (即脑力)")]),_._v("。当用户开始阅读时，他们从一定量的有限脑力开始，而当他们用完时，他们停止学习。")]),_._v(" "),t("ul",[t("li",[_._v("复杂的句子、一次必须学习一个以上的概念，以及与用户的工作没有直接关系的抽象例子，认知能力"),t("strong",[_._v("消耗得更快")]),_._v("。")]),_._v(" "),t("li",[_._v("当我们帮助他们持续感到聪明、强大和好奇时，他们的认知能力会"),t("strong",[_._v("慢慢消耗")]),_._v("殆尽。把事情分解成可消化的部分并注意文档的流动可以帮助他们保持这种状态。")])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("总是试着从用户的角度看问题")]),_._v("。当我们彻底理解某件事情时，它就变得显而易见了。这就是所谓的知识诅咒。为了编写好的文档，记住在学习这个概念时首先需要知道什么。你需要学什么行话？你误解了什么？什么花了很长时间才真正掌握？好的文档可以满足用户的需求。这可能有助于练习向人们解释这个概念。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("首先描述"),t("em",[_._v("问题")]),_._v("，然后描述解决方案")]),_._v("。在展示功能如何工作之前，解释其存在的原因非常重要。否则，用户将无法知道这些信息对他们是否重要 (这是他们遇到的问题吗？) 或与之前的知识/经验相联系。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("在写作时，不要害怕问问题")]),_._v("，尤其是如果你害怕他们“蠢”的话。脆弱是很难的，但这是我们更充分地理解我们需要解释的唯一途径。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("参与特性讨论")]),_._v("。最好的 API 来自于文档驱动的开发，我们在开发中构建易于解释的特性，而不是试图在以后解释它们。提前提出问题 (尤其是“愚蠢的”问题) 通常有助于揭示困惑、不一致和有问题的行为，然后才需要进行破坏性的更改来修复它们。")])])]),_._v(" "),t("h2",{attrs:{id:"组织"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组织"}},[_._v("#")]),_._v(" 组织")]),_._v(" "),t("ul",[t("li",[t("p",[t("strong",[_._v("安装/集成")]),_._v("：提供有关如何将软件集成到尽可能多的不同项目中的全面概述。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("介绍/起步")]),_._v("：")]),_._v(" "),t("ul",[t("li",[_._v("提供一个不到 10 分钟的项目解决的问题及其存在原因的概述。")]),_._v(" "),t("li",[_._v("提供一个不到 30 分钟的项目解决的问题和如何解决的概述，包括何时和为什么使用项目以及一些简单的代码示例。最后，链接到安装页面和要点指南的开头。")])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("指南")]),_._v("：让用户感到聪明、强大、好奇，然后保持这种状态，让用户保持不断学习的动力和认知能力。指南页是按顺序阅读的，因此通常应该从最高到最低的功率/工作比排序。")]),_._v(" "),t("ul",[t("li",[t("p",[t("strong",[_._v("要点")]),_._v("：阅读要领的时间不应超过 5 个小时，但越短越好。它的目标是提供 20%的知识来帮助用户处理 80%的用例。Essentials 可以链接到更高阶的指南和 API，不过，在大多数情况下，你应该避免此类链接。当它们被提供时，你还需要提供一个上下文，以便用户知道他们是否应该在第一次阅读时遵循这个链接。否则，许多用户最终会耗尽他们的认知能力，跳转链接，试图在继续之前全面了解一个功能的各个方面，结果是，永远无法完成第一次通读的要领。记住，通顺的阅读比彻底的阅读更重要。我们想给人们提供他们需要的信息，以避免令人沮丧的经历，但他们总是可以回来继续阅读，或者在谷歌遇到一个不太常见的问题。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("高阶")]),_._v("：虽然要点帮助人们处理大约 80%的用例，但后续的指南帮助用户了解 95%的用例，以及关于非基本特性 (例如转换、动画)、更复杂的便利特性 (例如 mixin、自定义指令) 和开发人员体验改进 (例如 JSX、插件) 的更详细信息。最后 5%的用例是更利基的、更复杂的和/或更容易被滥用的，将留给 Cookbook 和 API 参考，它们可以从这些高阶指南链接到。")])])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("引用/API")]),_._v("：提供功能的完整列表，包括类型信息，每个要解决的问题的描述，选项的每种组合的示例以及指向指南，食谱的食谱以及提供更多详细信息的其他内部资源的链接。与其他页面不同，此页面无意自上而下阅读，因此可以提供大量详细信息。这些参考资料还必须比指南更容易浏览，因此格式应比指南的讲故事格式更接近字典条目。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("迁移")]),_._v("：")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("版本")]),_._v("：当进行了重要的更改时，包含一个完整的更改列表是很有用的，包括对为什么进行更改以及如何迁移其项目的详细解释。")]),_._v(" "),t("li",[t("strong",[_._v("从其他项目")]),_._v("：这个软件与同类软件相比如何？这对于帮助用户了解我们可能为他们解决或创造的其他问题，以及他们可以在多大程度上转移他们已经拥有的知识，这一点很重要。")])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("风格指南")]),_._v("：开发中必然有一些关键部分需要决策，但它们不是 API 的核心。风格指南提供了受过教育的、有主见的建议，以帮助指导这些决策。他们不应该盲目遵循，但可以帮助团队节省时间，在较小的细节上保持一致。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("Cookbook")]),_._v("：Cookbook 中的秘诀是基于对 Vue 及其生态系统的熟悉程度而编写的。每一个文档都是一个高度结构化的文档，它详细介绍了 Vue 开发人员可能遇到的一些常见实现细节。")])])]),_._v(" "),t("h2",{attrs:{id:"写作-语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写作-语法"}},[_._v("#")]),_._v(" 写作 & 语法")]),_._v(" "),t("h3",{attrs:{id:"风格"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#风格"}},[_._v("#")]),_._v(" 风格")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("标题应该描述问题")]),_._v("，不是解决方案。例如，一个不太有效的标题可能是“使用 prop”，因为它描述了一个解决方案。一个更好的标题可能是“通过 Props 将数据传递给子组件”，因为它提供了 Props 解决问题的上下文。用户不会真正开始注意某个功能的解释，直到他们知道为什么/何时使用它。")]),_._v(" "),t("li",[t("strong",[_._v("当你假设知识时，就要声明它")]),_._v("，在开始时，链接到参考资料，以获得你期望的不太常见的知识。")]),_._v(" "),t("li",[t("strong",[_._v("尽可能一次只引入一个新概念")]),_._v(" (包括文本和代码示例)，即使当你介绍不止一个的时候很多人都能理解，也有很多人会迷失方向，即使那些没有迷失方向的人也会耗尽更多的认知能力。")]),_._v(" "),t("li",[t("strong",[_._v("尽可能避免使用特殊的内容块来获取提示和注意事项")]),_._v("，一般来说，最好将这些内容更自然地融合到主要内容中，例如，通过构建示例来演示边缘案例。")]),_._v(" "),t("li",[t("strong",[_._v("每页不要超过两个相互交织的提示和注意事项")]),_._v("，如果你发现一个页面需要两个以上的提示，请考虑添加一个警告部分来解决这些问题。本指南的目的是通读，提示和注意事项可能会让试图理解基本概念的人不知所措或分心。")]),_._v(" "),t("li",[t("strong",[_._v("避免诉诸权威")]),_._v(" (例如，“你应该做 X，因为这是一个最佳实践”或“X 是最好的，因为它能让你完全分离关注点”)。相反，用例子来演示由模式引起和/或解决的具体人类问题。")]),_._v(" "),t("li",[t("strong",[_._v("当决定先教什么时，想想哪些知识能提供最好的动力")]),_._v("。这意味着教任何能帮助用户解决最大痛苦或最大数量问题的东西，而学习的努力相对较少。这有助于学习者感到聪明、强大和好奇，因此他们的认知能力会慢慢流失。")]),_._v(" "),t("li",[t("strong",[_._v("除非上下文采用字符串模板或构建系统，否则只能编写在软件的任何环境中工作的代码 (例如 Vue、Vuex 等)")])]),_._v(" "),t("li",[t("strong",[_._v("显示，不要说")]),_._v("例如，“要在页面上使用 Vue，可以将其添加到 HTML 中”(然后显示脚本标记)，而不是“要在页面上使用 Vue，可以添加一个具有 src 属性的脚本元素，该属性的值应为指向 Vue 编译源的链接”。")]),_._v(" "),t("li",[t("strong",[_._v("几乎总是避免幽默 (对于英文文档)")]),_._v("， 尤其是讽刺和通俗文化的引用，因为它在不同文化之间的翻译并不好。")]),_._v(" "),t("li",[t("strong",[_._v("永远不要假设比你必须的更高阶的上下文")]),_._v("。")]),_._v(" "),t("li",[t("strong",[_._v("在大多数情况下，比起在多个部分中重复相同的内容，更喜欢在文档的各个部分之间建立链接")]),_._v("。在内容上有些重复是不可避免的，甚至是学习的必要条件。然而，过多的重复也会使文档更难维护，因为 API 的更改将需要在许多地方进行更改，而且很容易遗漏某些内容。这是一个很难达到的平衡。")]),_._v(" "),t("li",[t("strong",[_._v("具体的比一般的好")]),_._v("例如，一个 "),t("code",[_._v("<BlogPost>")]),_._v(" 组件例子比 "),t("code",[_._v("<ComponentA>")]),_._v(" 更好。")]),_._v(" "),t("li",[t("strong",[_._v("相对胜于晦涩")]),_._v("。例如，一个 "),t("code",[_._v("<BlogPost>")]),_._v(" 组件例子比 "),t("code",[_._v("<CurrencyExchangeSettings>")]),_._v(" 更好。")]),_._v(" "),t("li",[t("strong",[_._v("保持情感相关")]),_._v("。与人们有经验并关心的事物相关的解释和示例将永远更加有效。")]),_._v(" "),t("li",[t("strong",[_._v("始终喜欢使用简单，简单的语言，而不是复杂或专业的语言")]),_._v("。例如：\n"),t("ul",[t("li",[_._v("“你可以将 Vue 与脚本元素一起使用”，而不是“为了启动 Vue 的使用，一种可能的选择是通过脚本 HTML 元素实际注入它”")]),_._v(" "),t("li",[_._v("“返回函数的函数”而不是“高阶函数”")])])]),_._v(" "),t("li",[t("strong",[_._v("避免使用毫无意义的语言")]),_._v("。如“简单”、“公正”、“明显”等，请参阅"),t("a",{attrs:{href:"https://css-tricks.com/words-avoid-educational-writing/",target:"_blank",rel:"noopener noreferrer"}},[_._v("教育写作中应避免的词语"),t("OutboundLink")],1),_._v("。")])]),_._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[_._v("#")]),_._v(" 语法")]),_._v(" "),t("ul",[t("li",[t("p",[t("strong",[_._v("避免缩写")]),_._v("在编写代码和示例代码中 (例如，"),t("code",[_._v("attribute")]),_._v(" 优于 "),t("code",[_._v("attr")]),_._v("，"),t("code",[_._v("message")]),_._v(" 优于 "),t("code",[_._v("msg")]),_._v(")，除非你在 API 中明确引用了缩写 (例如 "),t("code",[_._v("$attrs")]),_._v(")。标准键盘上包含的缩写符号 (例如，"),t("code",[_._v("@")]),_._v("，"),t("code",[_._v("#")]),_._v("，"),t("code",[_._v("&")]),_._v(") 可以。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("当引用直接下面的示例时，请使用冒号 ("),t("code",[_._v(":")]),_._v(") 结束句子")]),_._v("，而不是句点 ("),t("code",[_._v(".")]),_._v(")")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("使用牛津逗号")]),_._v(" (例如：“a，b，and c” 替换 “a，b and c”)。"),t("img",{attrs:{src:"/images/oxford-comma.jpg",alt:"为什么牛津逗号很重要"}})]),_._v(" "),t("ul",[t("li",[_._v("来源："),t("a",{attrs:{href:"https://www.inkonhand.com/2015/10/the-serial-oxford-comma-when-and-why-to-use-it/",target:"_blank",rel:"noopener noreferrer"}},[_._v("The Serial (Oxford) Comma：When and Why To Use It"),t("OutboundLink")],1)])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("引用项目名称时，请使用项目引用自身的名称")]),_._v("。例如，“webpack”和“npm”都应使用小写字母，因为这是它们的文档引用它们的方式。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("使用标题大小写作为标题")]),_._v(" - 至少到目前为止，因为这是我们在其余文档中使用的。有研究表明，句子大小写 (仅标题的第一个单词以大写字母开头) 实际上在可读性上是优越的，并且还减少了文档作者的认知开销，因为他们不必记住是否要大写“and”，“with”和“about”。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("请勿使用表情符号 (讨论中除外)")]),_._v("。Emoji 既可爱又友好，但是它们可能会使文档分散注意力，有些表情符号甚至会在不同文化中传达不同的含义。")])])]),_._v(" "),t("h2",{attrs:{id:"迭代-沟通"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#迭代-沟通"}},[_._v("#")]),_._v(" 迭代 & 沟通")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("卓越源于迭代")]),_._v("初稿总是很糟糕，但是编写初稿是该过程的重要组成部分。要避免进度缓慢，很难-不好-> OK->好->好->鼓舞人心->超越。")]),_._v(" "),t("li",[t("strong",[_._v("在发布之前，请仅等到某事为“好”为止")]),_._v("。社区将帮助你将其推向更深的链。")]),_._v(" "),t("li",[t("strong",[_._v("收到反馈时，尽量不要防御")]),_._v("我们的写作对我们来说可能是非常私人的，但是如果我们对帮助我们做得更好的人感到不满，他们要么停止提供反馈，要么开始限制他们提供的反馈种类。")]),_._v(" "),t("li",[t("strong",[_._v("在向他人展示之前，请先阅读自己的作品")]),_._v("。如果你显示某人的拼写/语法错误很多，你将获得有关拼写语法/错误的反馈，而不是获得有关写作是否达到目标的更有价值的注释。")]),_._v(" "),t("li",[t("strong",[_._v("当你要求人们提供反馈时，请告诉审阅者以下内容：")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("你正在尝试做")])]),_._v(" "),t("li",[t("strong",[_._v("你的恐惧是")])]),_._v(" "),t("li",[t("strong",[_._v("你想要达到的平衡")])])])]),_._v(" "),t("li",[t("strong",[_._v("当有人报告问题时，几乎总是有问题")]),_._v("，即使他们提出的解决方案不太正确。不断询问后续问题以了解更多信息")]),_._v(" "),t("li",[_._v("人们在提交/查看内容时需要放心地提问。这是你可以执行的操作：\n"),t("ul",[t("li",[t("strong",[_._v("即使别人感到脾气暴躁，也要感谢他们的贡献/评价")]),_._v("。比如：\n"),t("ul",[t("li",[_._v("“Great question！”")]),_._v(" "),t("li",[_._v("“感谢你抽出宝贵的时间来解释。🙂”")]),_._v(" "),t("li",[_._v("“这实际上是故意的，但感谢你抽出宝贵的时间来贡献自己的力量。 😊”")])])]),_._v(" "),t("li",[t("strong",[_._v("听别人说什么，如果不确定自己是否正确理解，请照搬")]),_._v("。这可以帮助验证人们的感受和经历，同时还可以了解"),t("em",[_._v("你是")]),_._v("否正确理解了"),t("em",[_._v("他们")]),_._v("。")]),_._v(" "),t("li",[t("strong",[_._v("使用大量积极和善解人意的表情符号")]),_._v("。显得有些奇怪总比刻薄或急躁好。")]),_._v(" "),t("li",[t("strong",[_._v("请传达规则/边界")]),_._v("。如果某人的举止有辱人格/不当行为，请仅以仁慈和成熟来回应，但也要明确表示，这种行为是不可接受的，如果他们继续表现不佳，将会发生什么 (根据行为准则)。")])])])]),_._v(" "),t("h3",{attrs:{id:"提示、标注、警告和行高亮"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提示、标注、警告和行高亮"}},[_._v("#")]),_._v(" 提示、标注、警告和行高亮")]),_._v(" "),t("p",[_._v("我们有一些专用的样式来表示需要以特定方式突出显示的内容。这些被捕获为"),t("a",{attrs:{href:"https://v3.vuejs.org/guide/doc-style-guide.html#alerts",target:"_blank",rel:"noopener noreferrer"}},[_._v("在这个页面"),t("OutboundLink")],1),t("strong",[_._v("请谨慎使用")]),_._v("。")]),_._v(" "),t("p",[_._v("滥用这些样式是有一定诱惑力的，因为你可以简单地在标注中添加更改。但是，这会破坏用户的阅读流程，因此，只能在特殊情况下使用。在可能的情况下，我们应该尝试在页面内创建一个叙述和流程，以尊重读者的认知负荷。")]),_._v(" "),t("p",[_._v("在任何情况下都不应该相邻使用两个警告，这表明我们无法很好地解释上下文。")]),_._v(" "),t("h3",{attrs:{id:"贡献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#贡献"}},[_._v("#")]),_._v(" 贡献")]),_._v(" "),t("p",[_._v("我们欣赏小型、集中的 PR。如果你想进行非常大的更改，请在发起请求之前与团队成员沟通。这是一份"),t("a",{attrs:{href:"https://www.netlify.com/blog/2020/03/31/how-to-scope-down-prs/",target:"_blank",rel:"noopener noreferrer"}},[_._v("详细说明为什么这一点如此重要的书面材料"),t("OutboundLink")],1),_._v("让我们在这个团队里工作得很好。请理解，尽管我们总是很感激你的贡献，但最终我们必须优先考虑哪些对整个项目最有效。")]),_._v(" "),t("h2",{attrs:{id:"资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#资源"}},[_._v("#")]),_._v(" 资源")]),_._v(" "),t("h3",{attrs:{id:"软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件"}},[_._v("#")]),_._v(" 软件")]),_._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.grammarly.com/",target:"_blank",rel:"noopener noreferrer"}},[_._v("Grammarly"),t("OutboundLink")],1),_._v("：用于检查拼写和语法的桌面应用程序和浏览器扩展 (尽管语法检查不能捕获所有内容，偶尔会显示假阳性)。")]),_._v(" "),t("li",[t("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker",target:"_blank",rel:"noopener noreferrer"}},[_._v("Code Spell Checker"),t("OutboundLink")],1),_._v("：一个 VS Code 的扩展，帮助你在降价和代码示例中检查拼写。")])]),_._v(" "),t("h3",{attrs:{id:"书籍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#书籍"}},[_._v("#")]),_._v(" 书籍")]),_._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.amazon.com/Writing-Well-30th-Anniversary-Nonfiction-ebook/dp/B0090RVGW0",target:"_blank",rel:"noopener noreferrer"}},[_._v("On Writing Well"),t("OutboundLink")],1),_._v(" (参见 "),t("a",{attrs:{href:"https://www.goodreads.com/work/quotes/1139032-on-writing-well-the-classic-guide-to-writing-nonfiction",target:"_blank",rel:"noopener noreferrer"}},[_._v("popular quotes"),t("OutboundLink")],1),_._v(")")]),_._v(" "),t("li",[t("a",{attrs:{href:"https://www.amazon.com/Bird-Some-Instructions-Writing-Life/dp/0385480016",target:"_blank",rel:"noopener noreferrer"}},[_._v("Bird by Bird"),t("OutboundLink")],1),_._v(" (参见 "),t("a",{attrs:{href:"https://www.goodreads.com/work/quotes/841198-bird-by-bird-some-instructions-on-writing-and-life",target:"_blank",rel:"noopener noreferrer"}},[_._v("popular quotes"),t("OutboundLink")],1),_._v(")")]),_._v(" "),t("li",[t("a",{attrs:{href:"https://www.amazon.com/Cognitive-Explorations-Instructional-Performance-Technologies/dp/144198125X/",target:"_blank",rel:"noopener noreferrer"}},[_._v("Cognitive Load Theory"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=e.exports}}]);