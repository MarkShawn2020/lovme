const translation = {
  title: 'AI 助手',
  description: '与您的知识库对话',
  welcome: {
    title: '欢迎使用 AI 助手',
    description: '我可以帮助您从知识库中查找信息。请从侧边栏选择一个或多个知识源以开始使用。',
    no_sources_selected: '请至少选择一个知识源以开始对话',
  },
  sidebar: {
    knowledge_sources: '知识源',
    add_knowledge_base: '添加知识库',
    search_placeholder: '搜索知识库...',
    select_all: '全选',
    no_knowledge_bases: '未找到知识库',
    rag_powered: 'RAG 驱动的响应',
    rag_description: '通过搜索您选择的知识库获得准确答案',
  },
  chat: {
    header_subtitle_single: '使用 {{count}} 个知识源',
    header_subtitle_multiple: '使用 {{count}} 个知识源',
    select_sources_prompt: '选择知识源以开始',
    input_placeholder: '询问有关您知识库的问题...',
    input_placeholder_disabled: '选择知识源以开始对话',
    sources_label: '来源：',
    relevance_score: '相关度：{{score}}%',
    no_info_found: '在选定的知识库中没有找到相关信息',
  },
  knowledge_item: {
    docs: '{{count}} 个文档',
    words: '{{count}} 个词',
    indexed: '已索引',
  },
}

export default translation