const translation = {
  header: {
    title: 'Neurora Tech',
    signIn: '登录',
    getStarted: '开始使用',
  },
  hero: {
    title: '构建强大的AI应用程序',
    subtitle: '无需编程',
    description: 'Neurora Tech 提供企业级平台，用于开发具有可视化工作流、RAG系统和多模型支持的LLM应用程序。',
    getStartedFree: '免费开始',
    signIn: '登录',
  },
  techStack: {
    title: '采用最佳技术构建',
    subtitle: '为可扩展和高性能应用程序提供现代技术栈',
  },
  features: {
    title: '启动您的 SaaS 所需的一切',
    subtitle: '构建、部署和管理AI应用程序所需的一切',
    workflow: {
      title: '可视化工作流构建器',
      description: '通过拖拽简单创建复杂的AI工作流',
    },
    multiModel: {
      title: '多模型支持',
      description: '与包括OpenAI、Anthropic等在内的100多个LLM提供商集成',
    },
    rag: {
      title: 'RAG系统',
      description: '高级文档处理和检索增强生成',
    },
    security: {
      title: '企业安全',
      description: '基于角色的访问控制的多租户工作区',
    },
    authentication: {
      title: '身份认证',
      description: '安全的用户认证，支持 JWT 和 OAuth',
    },
    database: {
      title: '数据库',
      description: '使用 Prisma ORM 的 PostgreSQL，实现类型安全查询',
    },
    backgroundJobs: {
      title: '后台任务',
      description: '高效处理异步任务的队列系统',
    },
    seo: {
      title: 'SEO 优化',
      description: '内置 SEO 优化，包含元标签和站点地图',
    },
    emails: {
      title: '电子邮件',
      description: '带模板的事务性邮件系统',
    },
    payments: {
      title: '支付',
      description: 'Stripe 集成，支持订阅和一次性付款',
    },
    ai: {
      title: 'AI 功能',
      description: 'OpenAI 集成，实现智能功能',
    },
    components: {
      title: '组件库',
      description: '预构建的 UI 组件，支持深色模式',
    },
    vercel: {
      title: 'Vercel',
      description: '针对 Vercel 平台优化部署',
    },
    mdxBlog: {
      title: 'MDX 博客',
      description: '支持 React 组件的 Markdown 博客',
    },
    admin: {
      title: '管理面板',
      description: '管理应用程序的管理仪表板',
    },
    feedback: {
      title: '反馈系统',
      description: '带分析功能的用户反馈系统',
    },
  },
  testimonials: {
    title: '加入数百位满意的开发者',
    subtitle: '看看其他人对我们平台的评价',
    items: {
      1: {
        content: '这个模板为我节省了数周的开发时间。架构坚实且文档完善。',
        author: '陈晓雨',
        role: 'TechStartup 创始人',
      },
      2: {
        content: '我用过的最好的 Next.js 启动模板。一切都开箱即用。',
        author: '王建国',
        role: '全栈开发者',
      },
      3: {
        content: '从想法到生产只需几天，而不是几个月。物超所值。',
        author: '李美玲',
        role: '独立创业者',
      },
      4: {
        content: '代码整洁，文档详尽，支持响应迅速。强烈推荐！',
        author: '张大伟',
        role: '高级工程师',
      },
      5: {
        content: '仅认证和支付集成就值这个价格了。',
        author: '刘芳',
        role: '产品经理',
      },
      6: {
        content: '我使用这个模板已经发布了3个 SaaS 产品。这是我的首选启动器。',
        author: '赵明',
        role: '连续创业者',
      },
      7: {
        content: '组件库很美观，代码质量非常出色。',
        author: '王小花',
        role: 'UI/UX 开发者',
      },
      8: {
        content: '让我免于决策疲劳。一切都按照最佳实践设置好了。',
        author: '李志强',
        role: '独立开发者',
      },
    },
  },
  pricing: {
    title: '免费开始，然后一次付费',
    subtitle: '选择最适合您的计划',
    hobby: {
      title: '免费版',
      price: '¥0',
      period: '',
      description: '非常适合试用我们的平台',
      features: {
        1: '基础身份认证',
        2: '有限的 API 调用',
        3: '社区支持',
        4: '基础组件',
      },
      cta: '免费开始',
    },
    pro: {
      title: '专业版',
      price: '¥999',
      originalPrice: '¥1999',
      period: '一次性付费',
      description: '启动您的 SaaS 所需的一切',
      features: {
        1: '完整身份认证系统',
        2: '无限 API 调用',
        3: '优先支持',
        4: '所有高级组件',
        5: '终身更新',
        6: '商业许可证',
      },
      cta: '立即购买',
    },
  },
  faq: {
    title: '常见问题',
    subtitle: '关于我们平台的所有信息',
    items: {
      1: {
        question: '专业版到底包含什么？',
        answer: '您将获得完整的源代码、所有组件、身份认证系统、数据库设置、支付集成和终身更新。构建和启动 SaaS 应用程序所需的一切。',
      },
      2: {
        question: '需要支付月费吗？',
        answer: '不需要！这是一次性付费。您永久拥有代码，可以用于无限项目。唯一的重复成本是您自己的托管和第三方服务。',
      },
      3: {
        question: '可以用于客户项目吗？',
        answer: '可以！专业版许可证包含商业使用权。您可以将其用于自己的项目或客户工作，无需额外费用。',
      },
      4: {
        question: '更新是如何工作的？',
        answer: '您将获得所有更新的终身访问权限。当我们发布新功能或改进时，您将免费获得它们。',
      },
      5: {
        question: '我能获得什么样的支持？',
        answer: '专业版用户通过电子邮件获得优先支持，并可以访问我们的私人 Discord 社区，在那里您可以从我们的团队和其他开发者那里获得帮助。',
      },
    },
  },
  cta: {
    title: '准备好构建您的AI应用程序了吗？',
    subtitle: '加入数千名开发者和企业，共同构建AI的未来',
    startBuilding: '免费开始构建',
    signIn: '登录',
  },
  footer: {
    copyright: '© {{year}} Neurora Tech. 保留所有权利。',
  },
}

export default translation
