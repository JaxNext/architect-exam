var questions = [
  {
    id: 'arch_01',
    type: '概念理解',
    topic: '软件架构设计',
    question: '在Kruchten的4+1视图中，哪个视图主要描述系统的并发和同步方面？',
    answer: 'C',
    reason: '4+1视图中：逻辑视图面向最终用户，描述功能需求；开发视图面向程序员，描述代码结构；进程视图面向系统集成者，描述并发与同步；物理视图面向系统工程师，描述部署拓扑；场景（+1）用于验证。进程视图关注并发、同步、进程通信等，是正确答案。',
    options: [
      { index: 'A', content: '逻辑视图（Logical View）' },
      { index: 'B', content: '开发视图（Development View）' },
      { index: 'C', content: '进程视图（Process View）' },
      { index: 'D', content: '物理视图（Physical View）' }
    ]
  },
  {
    id: 'arch_02',
    type: '概念理解',
    topic: '软件架构设计',
    question: '以下关于架构风格的描述，正确的是？',
    answer: 'B',
    reason: '管道-过滤器风格中，每个过滤器独立处理数据，组件之间通过数据流连接，具有低耦合、高复用的特点，且易于增删过滤器。A错误：分层风格跨层调用违背了层次原则；C错误：事件驱动风格不利于调试和并发控制；D错误：微内核风格的核心功能较少，扩展通过插件实现而非核心层。',
    options: [
      { index: 'A', content: '分层架构风格允许跨层直接调用以提高性能' },
      { index: 'B', content: '管道-过滤器风格中每个过滤器独立处理数据，易于增删组件' },
      { index: 'C', content: '事件驱动架构风格天然适合调试和并发控制' },
      { index: 'D', content: '微内核架构风格的核心层包含大部分业务功能' }
    ]
  },
  {
    id: 'arch_03',
    type: '场景应用',
    topic: '软件架构设计',
    question: '某在线教育平台需要支持视频直播教学，系统要求视频延迟不超过2秒，且在单节点故障时能在3秒内自动切换到备用节点。为实现这两个质量属性，架构师应分别采用什么策略？',
    answer: 'A',
    reason: '性能（延迟不超过2秒）的常见策略包括：增加计算资源、缓存、并发、队列调度等，资源增加是最直接的手段。可用性（3秒内自动切换）的常见策略包括：心跳检测、冗余备用、主动-被动切换等，心跳+冗余是实现自动故障切换的标准方案。B中仲裁用于分布式一致性，C中加密与性能无关，D中限流主要解决过载问题而非延迟。',
    options: [
      { index: 'A', content: '性能：增加计算资源；可用性：心跳检测+冗余备用' },
      { index: 'B', content: '性能：增加计算资源；可用性：仲裁机制+数据分片' },
      { index: 'C', content: '性能：数据加密传输；可用性：心跳检测+冗余备用' },
      { index: 'D', content: '性能：限流排队；可用性：冗余备用+主动激活' }
    ]
  },
  {
    id: 'arch_04',
    type: '场景应用',
    topic: '软件架构设计',
    question: '某工业控制系统需要实时采集传感器数据并进行处理，数据以连续流的形式到达，处理步骤包括：数据清洗→格式转换→异常检测→统计分析→报警触发。该系统最适合采用哪种架构风格？',
    answer: 'C',
    reason: '数据处理流程是线性的、步骤固定的连续数据流，这正是管道-过滤器架构的典型应用场景。每个处理步骤可封装为独立过滤器，数据在过滤器之间流动。A分层架构不适合流式处理；B事件驱动虽然可处理数据但不如管道-过滤器直接；D微内核适合功能可扩展的系统而非数据流处理。',
    options: [
      { index: 'A', content: '分层架构风格' },
      { index: 'B', content: '事件驱动架构风格' },
      { index: 'C', content: '管道-过滤器架构风格' },
      { index: 'D', content: '微内核架构风格' }
    ]
  },
  {
    id: 'arch_05',
    type: '场景应用',
    topic: '软件架构设计',
    question: '某电商平台在架构评审中发现：商品详情页的响应时间从200ms增长到1200ms，主要原因是数据库查询变慢。架构师首先应采用的性能优化策略是？',
    answer: 'B',
    reason: '在性能优化策略中，缓存的优先级通常最高——对于读多写少的商品详情页，引入缓存可以避免大量重复查询，成本最低、效果最显著。A增加服务器虽然有效但成本高；C数据分片适用于数据量过大场景，问题根源是查询慢而非数据量；D更换数据库代价过大，不是首选方案。',
    options: [
      { index: 'A', content: '增加应用服务器数量，进行水平扩展' },
      { index: 'B', content: '引入Redis缓存热点数据，减少数据库访问' },
      { index: 'C', content: '对数据库进行水平分片，分散查询压力' },
      { index: 'D', content: '将关系型数据库更换为NoSQL数据库' }
    ]
  },
  {
    id: 'arch_06',
    type: '场景应用',
    topic: '软件架构设计',
    question: '某金融系统需要在架构层面保证：交易数据零丢失、服务7×24可用、交易处理时间不超过500ms。以下架构策略组合最合理的是？',
    answer: 'D',
    reason: '零丢失需要持久化+事务保证（写入日志）；7×24可用需要冗余+心跳监控；低延迟需要资源充足+高效调度。A异步队列会引入延迟，与低延迟矛盾；B仅考虑了可用性，未解决零丢失和低延迟；C限流可能影响可用性且不保证零丢失；D同步写入保证零丢失、冗余+心跳保证可用性、资源预留和调度优先保证低延迟，三者兼顾。',
    options: [
      { index: 'A', content: '异步消息队列+主备切换+负载均衡' },
      { index: 'B', content: '主备热切换+读写分离+连接池优化' },
      { index: 'C', content: '限流降级+数据分片+监控告警' },
      { index: 'D', content: '同步写入日志+冗余部署+心跳监控+资源预留调度' }
    ]
  },
  {
    id: 'arch_07',
    type: '对比分析',
    topic: '软件架构设计',
    question: '以下关于分层架构和微内核架构的比较，正确的是？',
    answer: 'D',
    reason: 'A错误：分层架构跨层调用是违规的，层间必须逐层调用；B错误：微内核的核心是极简的，扩展功能在插件层；C错误：分层架构的层次是固定的，不易动态增删；D正确：微内核的扩展功能通过插件动态加载实现，而分层架构的层次关系在编译期确定，扩展性不如微内核。微内核更适合需要动态扩展的场景。',
    options: [
      { index: 'A', content: '分层架构允许跨层调用，微内核架构不允许跨层调用' },
      { index: 'B', content: '微内核的核心层包含大部分业务功能，分层架构各层功能均衡' },
      { index: 'C', content: '分层架构易于动态增删层，微内核架构的插件是固定的' },
      { index: 'D', content: '微内核架构通过插件动态扩展功能，分层架构的层次关系相对固定' }
    ]
  },
  {
    id: 'arch_08',
    type: '对比分析',
    topic: '软件架构设计',
    question: '关于事件驱动架构和管道-过滤器架构，以下说法错误的是？',
    answer: 'C',
    reason: 'A正确：事件驱动是隐式调用，过滤器之间通过数据流显式连接；B正确：事件驱动天然支持异步处理，管道-过滤器传统上是同步的；C错误：管道-过滤器风格中各过滤器是独立的，不共享状态，正是易于复用的关键；D正确：事件驱动由于隐式调用关系，调试追踪困难。C说"过滤器之间必须共享状态"是错误的。',
    options: [
      { index: 'A', content: '事件驱动架构是隐式调用，管道-过滤器是显式数据流' },
      { index: 'B', content: '事件驱动架构天然支持异步，管道-过滤器传统上同步处理' },
      { index: 'C', content: '管道-过滤器架构中过滤器之间必须共享状态才能工作' },
      { index: 'D', content: '事件驱动架构中事件传播路径不明确，调试困难' }
    ]
  },
  {
    id: 'dist_01',
    type: '概念理解',
    topic: '分布式系统',
    question: '根据CAP定理，以下说法正确的是？',
    answer: 'C',
    reason: 'CAP定理指出：在发生网络分区（P）时，系统必须在一致性（C）和可用性（A）之间做选择。A错误：CAP的选择是在发生分区时做的权衡；B错误：不是三者任选其二，而是分区发生时在C和A之间选一个；D错误：CAP和BASE是不同层面的概念。C正确描述了CP系统（如ZooKeeper）在网络分区时放弃可用性保证一致性。',
    options: [
      { index: 'A', content: 'CAP是说在任何情况下系统只能同时满足三个中的两个' },
      { index: 'B', content: '分布式系统可以在C、A、P三者中任选其二来设计' },
      { index: 'C', content: '当网络分区发生时，系统必须在一致性和可用性之间做权衡' },
      { index: 'D', content: 'CAP定理是BASE理论的理论基础' }
    ]
  },
  {
    id: 'dist_02',
    type: '场景应用',
    topic: '分布式系统',
    question: '某电商网站在秒杀活动中，大量用户同时查询同一商品，导致Redis缓存中该商品key过期瞬间，海量请求直接打到数据库，造成数据库崩溃。这种现象属于？',
    answer: 'B',
    reason: '缓存击穿是指某个热点key过期的瞬间，大量并发请求同时穿透缓存直接访问数据库。A缓存穿透是查询不存在的数据（如id=-1）；C缓存雪崩是大量key同时过期；D缓存预热是提前加载缓存的措施。注意区分：击穿是"一个热点key被突破"，雪崩是"大面积key同时失效"。',
    options: [
      { index: 'A', content: '缓存穿透' },
      { index: 'B', content: '缓存击穿' },
      { index: 'C', content: '缓存雪崩' },
      { index: 'D', content: '缓存预热' }
    ]
  },
  {
    id: 'dist_03',
    type: '场景应用',
    topic: '分布式系统',
    question: '某银行跨行转账业务需要保证两个账户的余额变动要么同时成功要么同时失败，且对一致性要求极高，允许短暂阻塞但不允许最终不一致。最合适的分布式事务方案是？',
    answer: 'A',
    reason: '2PC（两阶段提交）是强一致性方案，通过协调者统一控制提交/回滚，适合金融场景对一致性的严格要求。B TCC是柔性事务，需要业务侵入实现Try/Confirm/Cancel；C SAGA是长事务方案，通过补偿实现最终一致性，中间状态可见；D本地消息表是最终一致性方案。金融场景优先选择2PC保证强一致性。',
    options: [
      { index: 'A', content: '2PC（两阶段提交）' },
      { index: 'B', content: 'TCC（Try-Confirm-Cancel）' },
      { index: 'C', content: 'SAGA模式' },
      { index: 'D', content: '本地消息表' }
    ]
  },
  {
    id: 'dist_04',
    type: '场景应用',
    topic: '分布式系统',
    question: '某社交平台的feeds流服务，需要支持千万级用户同时刷新动态。系统要求：用户刷新延迟不超过1秒，允许短暂的数据不一致（用户发布的动态可在5秒内被好友看到）。基于CAP权衡，该系统应优先选择哪种设计策略？',
    answer: 'B',
    reason: '场景明确允许短暂不一致（5秒延迟），且要求低延迟刷新（1秒），这是典型的AP系统设计——优先保证可用性和低延迟，接受最终一致性。A_CP会牺牲可用性导致刷新失败；C_CA在分布式环境下不可能实现；D强一致性违背了场景允许最终一致的需求。BASE正是AP系统的体现。',
    options: [
      { index: 'A', content: 'CP策略：保证强一致性，牺牲部分可用性' },
      { index: 'B', content: 'AP策略：优先可用性，采用最终一致性模型（BASE）' },
      { index: 'C', content: 'CA策略：在无分区时同时保证一致性和可用性' },
      { index: 'D', content: '强一致性策略：所有副本同步完成后才返回结果' }
    ]
  },
  {
    id: 'dist_05',
    type: '场景应用',
    topic: '分布式系统',
    question: '某系统管理员发现Redis集群频繁出现缓存雪崩现象，其根本原因最可能是？',
    answer: 'C',
    reason: '缓存雪崩的根本原因是大量key在同一时刻集中过期，导致请求同时穿透缓存访问数据库。C"大量热点key设置了相同的过期时间"正是雪崩的典型根因。A穿透是查询不存在的数据；B击穿是单个热点key失效；D穿透是查询不存在key，与雪崩无关。解决方案是给过期时间加随机偏移量。',
    options: [
      { index: 'A', content: '大量用户查询不存在的数据，缓存无法命中' },
      { index: 'B', content: '某个热点key突然过期，大量请求同时访问数据库' },
      { index: 'C', content: '大量热点key被设置了相同的过期时间，集中失效' },
      { index: 'D', content: '恶意用户反复请求不存在key绕过缓存' }
    ]
  },
  {
    id: 'dist_06',
    type: '对比分析',
    topic: '分布式系统',
    question: '以下关于2PC、TCC和SAGA三种分布式事务方案的对比，错误的是？',
    answer: 'C',
    reason: 'A正确：2PC通过全局锁阻塞等待，性能最低；B正确：TCC的Try/Confirm/Cancel需业务编码实现；C错误：SAGA的补偿操作是正向操作的逆操作（如"扣款"的补偿是"退款"），而非"重新执行正向操作"；D正确：SAGA的长事务特性使其适合跨服务编排。C中"补偿即重新执行"是根本性错误。',
    options: [
      { index: 'A', content: '2PC的阻塞机制导致其并发性能低于TCC和SAGA' },
      { index: 'B', content: 'TCC需要业务系统实现Try、Confirm、Cancel三个接口' },
      { index: 'C', content: 'SAGA的补偿操作是重新执行正向操作以恢复数据' },
      { index: 'D', content: 'SAGA适合业务流程长、涉及多个服务编排的场景' }
    ]
  },
  {
    id: 'cloud_01',
    type: '概念理解',
    topic: '云原生与微服务',
    question: '在Kubernetes中，以下哪种资源对象用于定义一组Pod的访问策略，使外部流量能够访问集群内的服务？',
    answer: 'B',
    reason: 'Service是K8s中为一组Pod提供稳定访问入口的资源对象，通过标签选择器关联Pod，并提供负载均衡。A Pod是最小调度单元；C Deployment管理Pod的副本数和更新策略；D Ingress是七层路由规则，建立在Service之上。题目问的是"定义Pod访问策略"，Service正是这个角色。',
    options: [
      { index: 'A', content: 'Pod' },
      { index: 'B', content: 'Service' },
      { index: 'C', content: 'Deployment' },
      { index: 'D', content: 'Ingress' }
    ]
  },
  {
    id: 'cloud_02',
    type: '场景应用',
    topic: '云原生与微服务',
    question: '某微服务系统中，订单服务在促销期间调用库存服务的频率激增，导致库存服务响应变慢甚至崩溃。架构师应在服务治理层面采取什么措施？',
    answer: 'C',
    reason: '场景描述的是服务过载问题。C"熔断降级+限流"是标准的服务治理方案：限流控制请求速率防止过载，熔断在下游异常时快速失败防止级联故障，降级提供兜底方案保证核心流程。A只解决发现和均衡问题；B网关鉴权与过载无关；D自动扩容是基础设施层面的解决方案，不是服务治理层面的。',
    options: [
      { index: 'A', content: '引入服务发现和负载均衡，分散请求到多个库存服务实例' },
      { index: 'B', content: '在API网关增加鉴权过滤，阻止非法请求' },
      { index: 'C', content: '在订单服务侧配置熔断降级策略，在库存服务侧配置限流策略' },
      { index: 'D', content: '配置HPA自动扩容，增加库存服务Pod数量' }
    ]
  },
  {
    id: 'cloud_03',
    type: '场景应用',
    topic: '云原生与微服务',
    question: '某企业需要将多个内部微服务对外统一暴露，并实现：按URL路径路由到不同服务、统一的JWT鉴权、请求速率限制。以下方案最合适的是？',
    answer: 'A',
    reason: 'API网关的核心能力包括：路由转发、认证鉴权、限流熔断、协议转换等。题目描述的三个需求（路径路由、JWT鉴权、速率限制）正是API网关的典型职责。B Service Mesh主要解决服务间通信；C Ingress主要是K8s的入口路由规则，鉴权和限流能力有限；D Nginx原始配置虽然可行但不够云原生化管理。',
    options: [
      { index: 'A', content: '部署API网关，配置路由规则、鉴权插件和限流策略' },
      { index: 'B', content: '部署Service Mesh，通过Sidecar代理实现' },
      { index: 'C', content: '部署Ingress Controller，配置路由和注解' },
      { index: 'D', content: '部署Nginx反向代理，手动编写配置文件' }
    ]
  },
  {
    id: 'cloud_04',
    type: '场景应用',
    topic: '云原生与微服务',
    question: '某团队将单体应用拆分为微服务时，发现一个业务操作需要调用3个微服务，原本在单体中的本地事务变成了分布式事务。为最小化对业务代码的侵入性，架构师应优先考虑？',
    answer: 'B',
    reason: 'B"基于消息队列的最终一致性"方案中，业务服务只需发送消息，无需实现额外的Try/Confirm/Cancel接口，侵入性最小。A 2PC需要引入协调者和全局锁，对性能影响大；C TCC需要在每个服务实现三个接口，侵入性极大；D SAGA需要为每个步骤定义补偿操作，也有一定侵入性。消息队列方案最轻量。',
    options: [
      { index: 'A', content: '2PC两阶段提交，保证强一致性' },
      { index: 'B', content: '基于消息队列的最终一致性方案' },
      { index: 'C', content: 'TCC方案，每个服务实现Try/Confirm/Cancel' },
      { index: 'D', content: 'SAGA编排方案，为每个步骤定义补偿操作' }
    ]
  },
  {
    id: 'db_01',
    type: '场景应用',
    topic: '数据库系统',
    question: '某银行转账系统中，事务T1将账户A的1000元转入账户B，事务T2同时在读取账户A的余额做审计。在默认隔离级别下，T2可能读到A扣款后但B入账前的中间状态，导致审计数据错误。这种现象是？',
    answer: 'A',
    reason: '不可重复读是指在一个事务内多次读取同一数据，由于其他事务的修改导致前后读取结果不一致。但更精确地说，题中描述的是T2读了T1"部分提交"的数据（A扣了但B还没加），这是读到了"未提交"的中间状态，属于脏读。等等，让我重新分析：如果T1还没提交，T2就看到了T1对A的修改，这是脏读。A正确。B不可重复读强调同一事务内两次读同一行结果不同；C幻读强调两次查询行数不同；D丢失更新是两个事务同时修改同一数据。',
    options: [
      { index: 'A', content: '脏读（Dirty Read）' },
      { index: 'B', content: '不可重复读（Non-Repeatable Read）' },
      { index: 'C', content: '幻读（Phantom Read）' },
      { index: 'D', content: '丢失更新（Lost Update）' }
    ]
  },
  {
    id: 'db_02',
    type: '场景应用',
    topic: '数据库系统',
    question: '某系统有一条SQL查询：SELECT * FROM orders WHERE user_id = 100 AND create_time > "2025-01-01"。该查询走了全表扫描，导致响应缓慢。已知user_id和create_time上各有单列索引。最有效的优化方案是？',
    answer: 'C',
    reason: '查询条件同时涉及user_id和create_time，单列索引最多只用上一个。创建(user_id, create_time)联合索引可以使用索引的最左前缀，同时过滤两个条件，显著减少扫描行数。A只优化了user_id条件；B只优化了create_time条件；D强制索引提示并不能解决索引本身不适用的问题。联合索引是最有效的方案。',
    options: [
      { index: 'A', content: '在user_id上重建为唯一索引' },
      { index: 'B', content: '在create_time上重建为聚簇索引' },
      { index: 'C', content: '创建(user_id, create_time)联合索引' },
      { index: 'D', content: '使用FORCE INDEX强制使用user_id索引' }
    ]
  },
  {
    id: 'db_03',
    type: '场景应用',
    topic: '数据库系统',
    question: '某互联网公司用户表数据量已达5亿行，单表查询性能严重下降。架构师考虑分库分表方案。若查询场景中大部分请求都包含用户ID，最适合的分片策略是？',
    answer: 'A',
    reason: '大部分查询包含用户ID，说明用户ID是天然的分区键。按用户ID取模哈希分片可以将同一用户的数据路由到同一分片，避免跨分片查询。B范围分片会导致热点问题（新用户集中在某个分片）；C一致性哈希适合缓存场景而非分库分表；D随机分配无法定位数据，查询时需要扫描所有分片。',
    options: [
      { index: 'A', content: '按用户ID取模哈希分片' },
      { index: 'B', content: '按注册时间范围分片' },
      { index: 'C', content: '按用户ID一致性哈希分片' },
      { index: 'D', content: '随机分配到各分片' }
    ]
  },
  {
    id: 'db_04',
    type: '计算',
    topic: '数据库系统',
    question: '某数据库采用主从复制架构，主库可靠性为0.99，从库可靠性为0.95（读请求可访问从库）。若系统采用读写分离，写操作必须访问主库，读操作可访问任一从库（2个从库），则读操作的可用性为？',
    answer: 'B',
    reason: '读操作可访问2个从库中的任意一个，只要至少1个从库可用即可。并联系统可靠性 = 1 - (1-R1)×(1-R2) = 1 - (1-0.95)×(1-0.95) = 1 - 0.05×0.05 = 1 - 0.0025 = 0.9975。选项中0.9975对应B。',
    options: [
      { index: 'A', content: '0.95' },
      { index: 'B', content: '0.9975' },
      { index: 'C', content: '0.99' },
      { index: 'D', content: '0.9025' }
    ]
  },
  {
    id: 'sec_01',
    type: '概念理解',
    topic: '系统安全',
    question: '以下关于Web安全漏洞的描述，正确的是？',
    answer: 'C',
    reason: 'A错误：XSS是跨站脚本攻击，注入的是恶意脚本而非SQL语句，SQL注入才是注入SQL语句；B错误：CSRF是跨站请求伪造，利用用户已登录的身份发起请求，而非窃取Cookie；C正确：SQL注入通过构造恶意SQL实现对数据库的非授权操作；D错误：XSS防御应对输入进行编码/过滤而非直接信任。',
    options: [
      { index: 'A', content: 'XSS攻击通过注入恶意SQL语句实现跨站数据窃取' },
      { index: 'B', content: 'CSRF攻击通过窃取用户Cookie来伪造用户身份' },
      { index: 'C', content: 'SQL注入通过构造恶意SQL实现对数据库的非授权操作' },
      { index: 'D', content: 'XSS防御只需对输出进行编码，无需处理输入' }
    ]
  },
  {
    id: 'sec_02',
    type: '场景应用',
    topic: '系统安全',
    question: '某企业有多个内部系统，需要在用户登录一次后即可访问所有系统，并且要求支持第三方应用的安全接入。架构师应选择的认证方案是？',
    answer: 'D',
    reason: 'SSO（单点登录）解决一次登录访问多系统的问题，OAuth2.0解决第三方应用安全接入（授权而非共享密码）。结合两者可同时满足需求。A JWT是令牌格式不是认证协议；B仅实现SSO但无法安全支持第三方接入；C仅实现授权但没有SSO能力。D组合方案最完整。',
    options: [
      { index: 'A', content: 'JWT令牌方案' },
      { index: 'B', content: '仅部署SSO系统（如CAS）' },
      { index: 'C', content: '仅部署OAuth2.0授权服务器' },
      { index: 'D', content: 'SSO + OAuth2.0组合方案' }
    ]
  },
  {
    id: 'sec_03',
    type: '场景应用',
    topic: '系统安全',
    question: '某系统需要传输加密数据，且接收方需要确认数据确实来自发送方且未被篡改。应采用的加密方案组合是？',
    answer: 'C',
    reason: '数据保密性用对称加密（快），发送方身份认证和数据完整性用数字签名（非对称加密+哈希）。A只有对称加密无法认证身份；B非对称加密加密数据效率太低；C先用对称加密保证机密性，再用数字签名保证身份和完整性，是最合理组合；D哈希只保证完整性，不保证机密性。',
    options: [
      { index: 'A', content: '使用对称加密算法加密数据' },
      { index: 'B', content: '使用非对称加密算法加密数据并传输' },
      { index: 'C', content: '使用对称加密算法加密数据，发送方用私钥对摘要签名' },
      { index: 'D', content: '使用哈希算法计算数据摘要并发送' }
    ]
  },
  {
    id: 'se_01',
    type: '场景应用',
    topic: '软件工程',
    question: '某创业团队开发一款社交APP，产品需求不明确，市场变化快，用户反馈频繁。最适合的开发模型是？',
    answer: 'B',
    reason: '需求不明确+市场变化快+用户反馈频繁，这是敏捷开发的典型场景。敏捷强调迭代增量、快速响应变化、持续交付价值。A瀑布模型要求需求明确且稳定；C螺旋模型适合大型高风险项目；D增量模型按模块增量开发但不一定强调快速迭代和用户反馈。',
    options: [
      { index: 'A', content: '瀑布模型' },
      { index: 'B', content: '敏捷开发模型' },
      { index: 'C', content: '螺旋模型' },
      { index: 'D', content: '增量模型' }
    ]
  },
  {
    id: 'se_02',
    type: '场景应用',
    topic: '软件工程',
    question: '在需求分析阶段，架构师需要描述系统与外部参与者之间的交互过程。以下哪种UML图最适合表达这一需求？',
    answer: 'A',
    reason: '用例图描述系统功能和参与者之间的关系，是需求分析阶段最常用的UML图。B类图描述类的结构和关系，是设计阶段的；C序列图描述对象间按时间顺序的消息交互，是详细设计；D活动图描述工作流和业务流程，不如用例图直接表达系统-参与者交互。',
    options: [
      { index: 'A', content: '用例图（Use Case Diagram）' },
      { index: 'B', content: '类图（Class Diagram）' },
      { index: 'C', content: '序列图（Sequence Diagram）' },
      { index: 'D', content: '活动图（Activity Diagram）' }
    ]
  },
  {
    id: 'se_03',
    type: '计算',
    topic: '软件工程',
    question: '某项目活动图如下：A(3天)→B(4天)→D(6天)→F(2天)；A(3天)→C(5天)→E(3天)→F(2天)；B(4天)→E(3天)。该项目关键路径的长度为？',
    answer: 'C',
    reason: '路径1：A→B→D→F = 3+4+6+2 = 15天；路径2：A→C→E→F = 3+5+3+2 = 13天；路径3：A→B→E→F = 3+4+3+2 = 12天。最长路径为路径1：15天，这是关键路径。',
    options: [
      { index: 'A', content: '12天' },
      { index: 'B', content: '13天' },
      { index: 'C', content: '15天' },
      { index: 'D', content: '18天' }
    ]
  },
  {
    id: 'eval_01',
    type: '概念理解',
    topic: '架构评估',
    question: '关于ATAM（Architecture Tradeoff Analysis Method），以下说法正确的是？',
    answer: 'D',
    reason: 'ATAM的核心步骤包括：1.呈现ATAM方法 2.呈现业务驱动 3.呈现架构 4.识别架构方法 5.生成质量属性效用树 6.分析架构方法 7.头脑风暴和优先级场景 8.分析架构方法 9.报告结果。A错误：效用树不是只关注性能，而是涵盖所有质量属性；B错误：ATAM的目的是评估而非设计架构；C错误：ATAM关注多个质量属性的权衡；D正确描述了ATAM的核心价值——识别架构决策与质量属性之间的关系。',
    options: [
      { index: 'A', content: 'ATAM的效用树只关注系统的性能质量属性' },
      { index: 'B', content: 'ATAM的主要目的是设计出最优的软件架构' },
      { index: 'C', content: 'ATAM只评估一种质量属性，不涉及属性间的权衡' },
      { index: 'D', content: 'ATAM通过效用树识别架构决策与质量属性之间的折中关系' }
    ]
  },
  {
    id: 'eval_02',
    type: '场景应用',
    topic: '架构评估',
    question: '某团队需要对一个已有的架构进行可修改性评估，希望识别出架构中哪些组件的修改会影响到其他组件。他们应该选择哪个评估方法？',
    answer: 'B',
    reason: 'SAAM（Software Architecture Analysis Method）专注于可修改性评估，通过场景分析组件间的依赖关系和修改影响。A ATAM是综合多质量属性的权衡分析；C CBAM是成本收益分析，基于ATAM结果做决策；D ACE不是标准架构评估方法。SAAM最适合可修改性专项评估。',
    options: [
      { index: 'A', content: 'ATAM' },
      { index: 'B', content: 'SAAM' },
      { index: 'C', content: 'CBAM' },
      { index: 'D', content: 'ACE' }
    ]
  },
  {
    id: 'tech_01',
    type: '场景应用',
    topic: '前沿技术',
    question: '某企业构建智能客服系统，需要让大模型回答基于企业内部文档的问题。为避免大模型产生幻觉（编造事实），架构师应采用什么技术方案？',
    answer: 'A',
    reason: 'RAG（Retrieval-Augmented Generation，检索增强生成）在生成前先从知识库检索相关文档作为上下文，约束模型基于真实文档回答，有效减少幻觉。B微调是训练方法，不解决幻觉问题；C提示词工程能改善但无法根治幻觉；D模型量化是压缩技术，与幻觉无关。',
    options: [
      { index: 'A', content: 'RAG（检索增强生成），先检索企业文档再让模型基于检索结果生成回答' },
      { index: 'B', content: '大模型微调（Fine-tuning），用企业数据重新训练模型' },
      { index: 'C', content: 'Prompt Engineering，设计更严格的提示词模板' },
      { index: 'D', content: '模型量化（Quantization），压缩模型提高推理精度' }
    ]
  },
  {
    id: 'tech_02',
    type: '场景应用',
    topic: '前沿技术',
    question: '某企业实施零信任安全架构，其核心原则不包括？',
    answer: 'D',
    reason: '零信任的核心原则是"Nevrr trust, always verify"：A默认不信任任何设备/用户；B持续验证而非一次性验证；C最小权限原则限制访问范围。D"信任内网流量"是传统边界安全模型的假设，正是零信任要颠覆的理念。零 Trust认为内网流量同样不可信。',
    options: [
      { index: 'A', content: '默认不信任任何用户和设备' },
      { index: 'B', content: '持续验证访问请求，而非仅在边界验证一次' },
      { index: 'C', content: '遵循最小权限原则，仅授予完成任务所需的最少权限' },
      { index: 'D', content: '内网流量默认可信，仅对外网流量严格验证' }
    ]
  },
  {
    id: 'tech_03',
    type: '对比分析',
    topic: '前沿技术',
    question: '关于传统边界安全模型与零信任模型的对比，以下说法错误的是？',
    answer: 'B',
    reason: 'A正确：传统模型以网络边界为信任分界线，零信任以身份为中心；B错误：零信任不是完全抛弃边界防护，而是在边界防护基础上增加了身份验证和持续监控，是"增强"而非"替代"；C正确描述了两种模型的验证方式差异；D正确：零信任的细粒度控制确实增加了复杂度。B说"完全抛弃"是错误的。',
    options: [
      { index: 'A', content: '传统模型以网络边界为信任分界线，零信任以身份为中心' },
      { index: 'B', content: '零信任模型完全抛弃了防火墙等边界防护措施' },
      { index: 'C', content: '传统模型在边界验证一次即可，零信任需要持续验证' },
      { index: 'D', content: '零信任模型实施复杂度通常高于传统边界模型' }
    ]
  },
  {
    id: 'other_01',
    type: '计算',
    topic: '其他',
    question: '某系统由三个组件组成，组件A和B并联后再与组件C串联。已知A的可靠性为0.9，B的可靠性为0.8，C的可靠性为0.95。该系统的整体可靠性为？',
    answer: 'B',
    reason: '先计算A和B并联的可靠性：R_AB = 1-(1-0.9)×(1-0.8) = 1-0.1×0.2 = 1-0.02 = 0.98。再与C串联：R_总 = R_AB × R_C = 0.98 × 0.95 = 0.931。',
    options: [
      { index: 'A', content: '0.684' },
      { index: 'B', content: '0.931' },
      { index: 'C', content: '0.980' },
      { index: 'D', content: '0.950' }
    ]
  },
  {
    id: 'other_02',
    type: '场景应用',
    topic: '其他',
    question: '某项目进度出现严重偏差，项目经理应首先采取的措施是？',
    answer: 'C',
    reason: '项目出现严重偏差时，应首先分析偏差原因，再决定纠正措施。A增加资源需要先确认资源是否是瓶颈；B压缩工期（赶工）需要先确认是否可行；C分析原因是决策前提；D直接修改基准是不规范的做法。先分析原因再对症下药是项目管理的基本原则。',
    options: [
      { index: 'A', content: '立即增加项目资源，加班赶工' },
      { index: 'B', content: '立即压缩关键路径上的工期' },
      { index: 'C', content: '分析偏差原因，评估对项目目标的影响' },
      { index: 'D', content: '直接修改项目基准，将新计划作为基准' }
    ]
  },
  {
    id: 'eng_01',
    type: '专业英语',
    topic: '专业英语',
    question: 'In the ______ architecture style, the system is decomposed into a set of cooperating objects. Objects interact through method invocations and communicate through well-defined interfaces.',
    answer: 'A',
    reason: '面向对象架构风格将系统分解为协作的对象集合，对象通过方法调用交互并通过接口通信。B管道-过滤器风格是数据流驱动的；C分层风格是按层级组织的；D事件驱动风格是隐式调用。题干中的"cooperating objects"和"method invocations"是面向对象风格的标志性术语。',
    options: [
      { index: 'A', content: 'object-oriented' },
      { index: 'B', content: 'pipe-and-filter' },
      { index: 'C', content: 'layered' },
      { index: 'D', content: 'event-driven' }
    ]
  },
  {
    id: 'eng_02',
    type: '专业英语',
    topic: '专业英语',
    question: 'The ______ pattern ensures a class has only one instance and provides a global point of access to it. It is commonly used for managing shared resources such as database connections or configuration settings.',
    answer: 'C',
    reason: '单例模式（Singleton）确保一个类只有一个实例并提供全局访问点，常用于管理共享资源如数据库连接和配置。A Observer是观察者模式（一对多依赖）；B Factory是工厂模式（创建对象）；D Strategy是策略模式（算法族封装）。题干中的"only one instance"是Singleton的关键标识。',
    options: [
      { index: 'A', content: 'Observer' },
      { index: 'B', content: 'Factory Method' },
      { index: 'C', content: 'Singleton' },
      { index: 'D', content: 'Strategy' }
    ]
  },
  {
    id: 'arch_09',
    type: '概念理解',
    topic: '软件架构设计',
    question: 'ABSD（基于架构的软件设计）方法中，架构设计由哪三项驱动？',
    answer: 'B',
    reason: 'ABSD方法的三个驱动因素是：功能需求（通过用例描述）、质量属性（通过质量场景描述）和约束。A中"技术选型"是架构决策的结果而非驱动因素；C中"团队能力"属于约束的一种但不是三大驱动之一；D中"预算与工期"也属于约束但不是独立的驱动因素。',
    options: [
      { index: 'A', content: '功能需求、技术选型、性能指标' },
      { index: 'B', content: '功能需求、质量属性、约束' },
      { index: 'C', content: '用例、团队能力、预算' },
      { index: 'D', content: '质量属性、技术约束、预算与工期' }
    ]
  },
  {
    id: 'arch_10',
    type: '场景应用',
    topic: '软件架构设计',
    question: '某大型企业ERP系统需要在不影响现有业务运行的情况下，逐步替换底层技术栈。架构师应优先选用哪种架构风格？',
    answer: 'D',
    reason: '微内核架构将核心功能和扩展功能分离，核心层稳定不变，扩展功能通过插件实现。替换技术栈时只需替换对应插件，不影响核心和其他插件。A分层架构跨层依赖强，替换底层会影响上层；B管道-过滤器适合数据处理而非ERP；C事件驱动不利于逐步替换且调试困难。',
    options: [
      { index: 'A', content: '分层架构风格' },
      { index: 'B', content: '管道-过滤器架构风格' },
      { index: 'C', content: '事件驱动架构风格' },
      { index: 'D', content: '微内核架构风格' }
    ]
  },
  {
    id: 'arch_11',
    type: '场景应用',
    topic: '软件架构设计',
    question: '某智能交通系统需要处理来自多种传感器（摄像头、雷达、GPS）的异构数据，并由多个专家模块分别分析后再综合决策。该系统最适合的架构风格是？',
    answer: 'B',
    reason: '黑板架构风格的核心特点是：共享数据结构（黑板）+ 多个独立知识源，知识源观察黑板变化并写入结果，适合异构数据融合和多专家协同决策场景。A分层架构不擅长异构数据融合；C管道-过滤器要求数据格式统一且线性流动；D客户/服务器是部署架构而非数据融合架构。',
    options: [
      { index: 'A', content: '分层架构风格' },
      { index: 'B', content: '黑板架构风格' },
      { index: 'C', content: '管道-过滤器架构风格' },
      { index: 'D', content: 'C/S架构风格' }
    ]
  },
  {
    id: 'arch_12',
    type: '场景应用',
    topic: '软件架构设计',
    question: '某在线考试系统需要防止考生作弊，架构师在架构层面定义了多种质量场景，其中"系统应能检测到考生切换浏览器标签页的行为并发出警告"属于哪种质量属性的场景？',
    answer: 'C',
    reason: '检测切换标签页并发出警告属于安全性（Security）质量属性的场景——防止作弊即保证考试的完整性和可信性。A性能关注响应时间；B可用性关注故障恢复；D可修改性关注变更成本。防作弊本质上是安全防护属性。',
    options: [
      { index: 'A', content: '性能（Performance）' },
      { index: 'B', content: '可用性（Availability）' },
      { index: 'C', content: '安全性（Security）' },
      { index: 'D', content: '可修改性（Modifiability）' }
    ]
  },
  {
    id: 'arch_13',
    type: '场景应用',
    topic: '软件架构设计',
    question: '某医疗影像系统需要支持新设备类型的快速接入。每当厂家推出新型号CT机时，只需编写适配插件即可接入，无需修改核心系统。这体现了哪种质量属性？',
    answer: 'D',
    reason: '新设备接入无需修改核心系统，只需编写适配插件，这直接体现了可修改性（Modifiability）——系统适应变化的能力，具体是可扩展性。A性能关注速度；B可用性关注停机时间；C安全性关注攻击防护。可修改性包含可扩展性、可配置性、可移植性等子属性。',
    options: [
      { index: 'A', content: '性能（Performance）' },
      { index: 'B', content: '可用性（Availability）' },
      { index: 'C', content: '安全性（Security）' },
      { index: 'D', content: '可修改性（Modifiability）' }
    ]
  },
  {
    id: 'arch_14',
    type: '场景应用',
    topic: '软件架构设计',
    question: '某系统采用适配器模式将第三方支付接口统一封装为标准支付接口。当更换支付供应商时，只需编写新的适配器而不修改业务逻辑代码。该模式属于？',
    answer: 'B',
    reason: '适配器模式属于结构型模式，用于将一个类的接口转换为客户端期望的另一个接口，使不兼容的类可以协同工作。A创建型关注对象创建；C行为型关注对象间通信。在本场景中，适配器模式作为"接口转换器"连接了第三方接口和标准接口，是典型的结构型设计模式。',
    options: [
      { index: 'A', content: '创建型设计模式' },
      { index: 'B', content: '结构型设计模式' },
      { index: 'C', content: '行为型设计模式' },
      { index: 'D', content: '架构型设计模式' }
    ]
  },
  {
    id: 'arch_15',
    type: '场景应用',
    topic: '软件架构设计',
    question: '某物流调度系统中，路径规划算法需要根据不同城市（拥堵城市/高速城市/山区城市）动态切换。为避免大量if-else分支，架构师应采用哪种设计模式？',
    answer: 'C',
    reason: '策略模式将一族算法分别封装，使它们可以互相替换，由客户端选择使用哪个策略。场景中的不同路径规划算法正是策略模式的典型应用。A工厂方法关注对象创建；B观察者关注事件通知；D装饰器关注动态添加职责。策略模式消除条件分支，算法独立变化。',
    options: [
      { index: 'A', content: '工厂方法模式' },
      { index: 'B', content: '观察者模式' },
      { index: 'C', content: '策略模式' },
      { index: 'D', content: '装饰器模式' }
    ]
  },
  {
    id: 'arch_16',
    type: '场景应用',
    topic: '软件架构设计',
    question: '某系统需要对订单进行多重校验：格式校验→权限校验→库存校验→风控校验，且校验规则频繁变化。架构师应采用哪种设计模式，使校验链可灵活增删？',
    answer: 'A',
    reason: '责任链模式将请求沿处理链传递，每个处理者决定是否处理及是否传递给下一个。订单的多重校验形成链式处理，且需要灵活增删，正符合责任链模式。B策略模式适用于算法族替换而非链式处理；C装饰器模式动态添加职责但不形成处理链；D模板方法定义算法骨架但步骤固定不易增删。',
    options: [
      { index: 'A', content: '责任链模式' },
      { index: 'B', content: '策略模式' },
      { index: 'C', content: '装饰器模式' },
      { index: 'D', content: '模板方法模式' }
    ]
  },
  {
    id: 'arch_17',
    type: '场景应用',
    topic: '软件架构设计',
    question: '某系统架构文档中包含：模块划分与接口定义、进程通信与同步机制、网络拓扑与部署方案。这三部分分别对应4+1视图中的哪些视图？',
    answer: 'A',
    reason: '模块划分与接口定义对应开发视图（面向程序员，描述代码结构）；进程通信与同步机制对应进程视图（面向系统集成者，描述并发与同步）；网络拓扑与部署方案对应物理视图（面向系统工程师，描述部署拓扑）。逻辑视图面向最终用户描述功能，场景用于验证。',
    options: [
      { index: 'A', content: '开发视图、进程视图、物理视图' },
      { index: 'B', content: '逻辑视图、进程视图、物理视图' },
      { index: 'C', content: '开发视图、逻辑视图、物理视图' },
      { index: 'D', content: '开发视图、进程视图、逻辑视图' }
    ]
  },
  {
    id: 'arch_18',
    type: '对比分析',
    topic: '软件架构设计',
    question: '关于C/S架构和B/S架构的对比，以下说法正确的是？',
    answer: 'D',
    reason: 'A错误：B/S的客户端是浏览器，无需安装专用客户端软件；B错误：C/S的客户端可以承担部分业务逻辑，并非仅负责界面展示；C错误：B/S基于HTTP等标准协议，穿越防火墙能力强于C/S；D正确：C/S客户端功能丰富，交互体验好；B/S受限于浏览器能力，复杂交互体验不如C/S。',
    options: [
      { index: 'A', content: 'B/S架构需要在每个客户端安装专用软件' },
      { index: 'B', content: 'C/S架构中客户端仅负责界面展示，不处理业务逻辑' },
      { index: 'C', content: 'C/S架构比B/S架构更容易穿越防火墙' },
      { index: 'D', content: 'C/S架构的客户端功能更丰富，用户体验优于B/S架构' }
    ]
  },
  {
    id: 'arch_19',
    type: '对比分析',
    topic: '软件架构设计',
    question: '以下关于仓库架构风格和黑板架构风格的比较，正确的是？',
    answer: 'C',
    reason: 'A错误：黑板架构中知识源是主动的，由黑板状态变化触发；B错误：仓库架构中客户端是主动发起请求的；C正确：黑板架构的知识源间通过黑板间接交互，不直接通信，这是黑板模式的核心特征；D错误：黑板架构专门用于需要综合多知识源结果的复杂问题求解。',
    options: [
      { index: 'A', content: '仓库架构中中央数据是主动推送给客户端的' },
      { index: 'B', content: '黑板架构中知识源直接相互通信协调工作' },
      { index: 'C', content: '黑板架构中知识源之间不直接交互，只通过黑板间接传递信息' },
      { index: 'D', content: '仓库架构和黑板架构的适用场景完全相同' }
    ]
  },
  {
    id: 'arch_20',
    type: '计算',
    topic: '软件架构设计',
    question: '某系统由模块A和模块B串联组成，模块A又由两个并联的子模块A1和A2构成。已知A1可靠性0.8，A2可靠性0.9，B可靠性0.95。该系统的整体可靠性约为？',
    answer: 'B',
    reason: '并联部分A的可靠性 = 1-(1-0.8)×(1-0.9) = 1-0.2×0.1 = 1-0.02 = 0.98。系统整体为A和B串联：R = 0.98 × 0.95 = 0.931。A选项0.76是错误地把A1和A2串联计算；C选项0.68无意义；D选项0.99只算了并联部分未串联B。',
    options: [
      { index: 'A', content: '0.76' },
      { index: 'B', content: '0.931' },
      { index: 'C', content: '0.68' },
      { index: 'D', content: '0.99' }
    ]
  },
  {
    id: 'arch_21',
    type: '计算',
    topic: '软件架构设计',
    question: '某系统采用3个模块并联冗余设计，每个模块可靠性均为0.9。该并联系统的可靠性约为？',
    answer: 'C',
    reason: '并联系统可靠性 = 1-(1-R)^n = 1-(1-0.9)³ = 1-0.1³ = 1-0.001 = 0.999。A是单个模块可靠性；B是两个并联的可靠性1-0.01=0.99；D不存在对应的计算结果。三并联将可靠性从0.9提升到0.999。',
    options: [
      { index: 'A', content: '0.900' },
      { index: 'B', content: '0.990' },
      { index: 'C', content: '0.999' },
      { index: 'D', content: '0.9999' }
    ]
  },
  {
    id: 'dist_07',
    type: '概念理解',
    topic: '分布式系统',
    question: '关于Raft一致性算法，以下说法正确的是？',
    answer: 'A',
    reason: 'Raft算法中，日志复制由Leader发起，Follower接受Leader的日志条目。B错误：Raft中只有Leader处理写请求，Follower转发给Leader；C错误：Raft通过Leader选举和日志一致性检查保证强一致性，非最终一致性；D错误：Raft的Leader是选举产生的，非预定义的。Raft相比Paxos更易理解。',
    options: [
      { index: 'A', content: 'Raft中日志复制只能从Leader到Follower' },
      { index: 'B', content: 'Raft中任何节点都可以处理写请求' },
      { index: 'C', content: 'Raft保证最终一致性，允许短暂的数据不一致' },
      { index: 'D', content: 'Raft的Leader节点是预定义的，不参与选举' }
    ]
  },
  {
    id: 'dist_08',
    type: '场景应用',
    topic: '分布式系统',
    question: '某电商平台的用户ID生成需要保证全局唯一且趋势递增，同时要考虑分库分表后的路由效率。最合适的分布式ID方案是？',
    answer: 'B',
    reason: '雪花算法（Snowflake）生成64位ID，包含时间戳+机器ID+序列号，保证全局唯一且趋势递增，ID本身可提取分片键信息便于路由。A UUID无序且太长，索引效率低；C数据库自增依赖单点，性能瓶颈且不适合分库场景；D Redis自增依赖单点Redis且需持久化保证。',
    options: [
      { index: 'A', content: 'UUID生成方案' },
      { index: 'B', content: '雪花算法（Snowflake）' },
      { index: 'C', content: '数据库自增ID' },
      { index: 'D', content: 'Redis INCR自增' }
    ]
  },
  {
    id: 'dist_09',
    type: '场景应用',
    topic: '分布式系统',
    question: '某内容平台使用一致性哈希进行缓存分片。当新增一台缓存节点后，以下描述正确的是？',
    answer: 'D',
    reason: '一致性哈希的核心优势：新增节点时只影响相邻节点间的数据迁移，而不是全局重新分配。A错误：一致性哈希的目的就是减少迁移量；B错误：虚拟节点是为了解决数据倾斜问题；C错误：新增节点不会导致原有节点数据清空；D正确：新增节点只影响其逆时针方向相邻节点的部分数据。',
    options: [
      { index: 'A', content: '所有缓存节点的数据都需要重新分配' },
      { index: 'B', content: '新增节点不需要引入虚拟节点' },
      { index: 'C', content: '原有节点的数据全部清空并重新加载' },
      { index: 'D', content: '仅新增节点和其相邻节点之间的数据需要迁移' }
    ]
  },
  {
    id: 'dist_10',
    type: '场景应用',
    topic: '分布式系统',
    question: '某系统使用Redis缓存用户session数据。某次安全审计发现，黑客通过构造特殊的请求参数，使Redis执行了 FLUSHALL 命令导致所有session数据丢失。该安全漏洞的根因是？',
    answer: 'A',
    reason: 'Redis未授权访问+命令注入：Redis默认无密码且未做网络隔离，攻击者可以直接连接Redis并执行任意命令。B输入校验是在应用层做的，与Redis命令执行无关；CSSL加密防止的是传输窃听而非命令注入；D过期策略与数据丢失无关。根因是Redis未做安全配置（无密码+未限制访问源）。',
    options: [
      { index: 'A', content: 'Redis未设置密码且未限制访问来源，导致未授权访问' },
      { index: 'B', content: 'Web应用未对用户输入进行校验' },
      { index: 'C', content: 'Redis未启用SSL加密传输' },
      { index: 'D', content: 'session数据设置了错误的过期策略' }
    ]
  },
  {
    id: 'dist_11',
    type: '场景应用',
    topic: '分布式系统',
    question: '某外卖平台的高峰期订单处理流程：用户下单→扣减库存→创建订单→通知商家→更新用户积分。其中扣减库存和创建订单必须强一致，其他步骤允许最终一致。最合适的事务方案是？',
    answer: 'C',
    reason: '混合方案：核心步骤（扣库存+创建订单）使用强一致事务保证，非核心步骤（通知商家+更新积分）使用异步消息保证最终一致性。这种"核心同步+边缘异步"是实际系统中常用的混合事务方案。A全部2PC性能太差；B全部最终一致不满足核心步骤的强一致要求；D全部SAGA也无法满足核心步骤的强一致要求。',
    options: [
      { index: 'A', content: '全部使用2PC保证强一致性' },
      { index: 'B', content: '全部使用消息队列保证最终一致性' },
      { index: 'C', content: '核心步骤使用本地事务+消息队列，非核心步骤使用异步消息' },
      { index: 'D', content: '全部使用SAGA编排保证最终一致性' }
    ]
  },
  {
    id: 'dist_12',
    type: '场景应用',
    topic: '分布式系统',
    question: '某系统中，服务A调用服务B的接口平均响应时间为200ms。为提高系统整体吞吐量，架构师将同步调用改为异步消息队列方式。改造后服务A的响应时间最可能变为？',
    answer: 'A',
    reason: '异步化后，服务A只需将消息发送到消息队列（通常5-20ms）即可返回，不需要等待服务B处理完成，因此响应时间从200ms大幅下降到接近消息发送时间。B几乎不变说明异步没起作用；C响应时间增加不合理；D说明还包含了业务处理时间，异步化应已解耦。',
    options: [
      { index: 'A', content: '约10-20ms（消息发送时间）' },
      { index: 'B', content: '约200ms（不变）' },
      { index: 'C', content: '约400ms（翻倍）' },
      { index: 'D', content: '约150ms（略减少）' }
    ]
  },
  {
    id: 'dist_13',
    type: '场景应用',
    topic: '分布式系统',
    question: '某系统需要对海量图片进行存储和访问，图片总量约10亿张，每张平均500KB。架构师采用多级缓存+CDN+对象存储的架构。其中，对于热点图片的缓存策略，应采用？',
    answer: 'C',
    reason: '热点图片访问频繁且内容不变，适合较长的缓存过期时间以降低回源率，同时设置合理的缓存预热策略。A过期时间太短导致频繁回源；B不缓存与架构设计矛盾；D随机过期时间适用于防雪崩场景而非热点数据。热点数据应用长过期时间+主动更新策略。',
    options: [
      { index: 'A', content: '设置较短的过期时间（5分钟），确保数据新鲜' },
      { index: 'B', content: '不设置缓存，每次都从对象存储获取' },
      { index: 'C', content: '设置较长的过期时间（24小时），配合主动更新机制' },
      { index: 'D', content: '设置随机过期时间，防止缓存雪崩' }
    ]
  },
  {
    id: 'dist_14',
    type: '对比分析',
    topic: '分布式系统',
    question: '关于Paxos和Raft两种一致性算法的比较，以下说法错误的是？',
    answer: 'B',
    reason: 'A正确：Raft是Paxos的简化版，通过强Leader模型降低了理解难度；B错误：Paxos不要求所有日志条目都有唯一Leader，Multi-Paxos允许并发提案；C正确：Raft的Leader选举过程相比Paxos更明确和简单；D正确：Raft将共识问题分解为Leader选举、日志复制、安全性三个子问题。B中"唯一Leader"是Raft的特点而非Paxos的。',
    options: [
      { index: 'A', content: 'Raft比Paxos更易于理解和实现' },
      { index: 'B', content: 'Paxos要求所有日志条目都必须有唯一Leader来处理' },
      { index: 'C', content: 'Raft的Leader选举机制比Paxos更明确' },
      { index: 'D', content: 'Raft将共识问题分解为三个相对独立的子问题' }
    ]
  },
  {
    id: 'dist_15',
    type: '对比分析',
    topic: '分布式系统',
    question: '以下关于分布式缓存Memcached和Redis的对比，错误的是？',
    answer: 'A',
    reason: 'A错误：Memcached只支持简单的键值存储（String类型），Redis支持String、List、Set、Hash、ZSet等多种数据类型；B正确：Memcached是多线程的，Redis单线程（6.0后网络IO多线程）；C正确：Redis支持RDB和AOF持久化，Memcached纯内存；D正确：Redis支持Pub/Sub、Lua脚本等，Memcached功能单一。',
    options: [
      { index: 'A', content: 'Memcached和Redis都支持丰富的数据类型' },
      { index: 'B', content: 'Memcached是多线程模型，Redis核心命令执行是单线程' },
      { index: 'C', content: 'Redis支持持久化，Memcached不支持持久化' },
      { index: 'D', content: 'Redis支持发布订阅和Lua脚本，Memcached功能相对单一' }
    ]
  },
  {
    id: 'dist_16',
    type: '计算',
    topic: '分布式系统',
    question: '某系统由A、B两个子系统并联组成，再与子系统C串联。已知A可靠性0.9，B可靠性0.8，C可靠性0.95。系统的整体可靠性约为？',
    answer: 'B',
    reason: '并联部分R_AB = 1-(1-0.9)×(1-0.8) = 1-0.1×0.2 = 1-0.02 = 0.98。整体串联R = R_AB × R_C = 0.98 × 0.95 = 0.931。A是只算A×C的错误结果；C是只算并联不计C的错误结果；D数值过大。',
    options: [
      { index: 'A', content: '0.855' },
      { index: 'B', content: '0.931' },
      { index: 'C', content: '0.980' },
      { index: 'D', content: '0.970' }
    ]
  },
  {
    id: 'cloud_05',
    type: '概念理解',
    topic: '云原生与微服务',
    question: '关于Docker容器与传统虚拟机的区别，以下说法正确的是？',
    answer: 'C',
    reason: 'A错误：容器共享宿主机内核，不需要运行完整的Guest OS；B错误：容器的隔离性弱于虚拟机，共享内核意味着安全边界更弱；C正确：容器直接运行在宿主内核上，无Guest OS开销，启动速度快、资源开销小；D错误：容器并非只能运行Linux应用，Windows容器也存在。',
    options: [
      { index: 'A', content: '容器需要运行完整的Guest操作系统' },
      { index: 'B', content: '容器的隔离性强于传统虚拟机' },
      { index: 'C', content: '容器共享宿主机内核，启动速度比虚拟机快' },
      { index: 'D', content: '容器只能运行Linux操作系统的应用' }
    ]
  },
  {
    id: 'cloud_06',
    type: '场景应用',
    topic: '云原生与微服务',
    question: '某团队在K8s上部署微服务时，发现每次Pod重启后环境变量配置丢失，导致服务启动失败。架构师应使用K8s的哪种资源对象来解决？',
    answer: 'B',
    reason: 'ConfigMap用于存储非敏感的配置数据，可以将配置以环境变量或文件形式挂载到Pod中，Pod重启后配置仍然存在。A Secret用于敏感数据；C PV用于持久化存储卷；D CRD用于自定义资源定义。ConfigMap将配置与镜像解耦，是K8s配置管理的标准方案。',
    options: [
      { index: 'A', content: 'Secret' },
      { index: 'B', content: 'ConfigMap' },
      { index: 'C', content: 'PersistentVolume' },
      { index: 'D', content: 'CustomResourceDefinition' }
    ]
  },
  {
    id: 'cloud_07',
    type: '场景应用',
    topic: '云原生与微服务',
    question: '某企业采用Service Mesh架构后，微服务之间的通信由Sidecar代理负责。以下关于Service Mesh的描述，错误的是？',
    answer: 'D',
    reason: 'A正确：Sidecar以独立容器形式运行，与应用容器在同一个Pod中；B正确：Service Mesh将服务治理逻辑从业务代码中剥离出；C正确：Istio是目前最流行的Service Mesh实现；D错误：Service Mesh引入Sidecar增加了网络跳数，会有一定的性能损耗，并非零性能开销。',
    options: [
      { index: 'A', content: 'Sidecar代理以独立容器形式与应用容器同Pod部署' },
      { index: 'B', content: 'Service Mesh实现了服务治理逻辑与业务逻辑的解耦' },
      { index: 'C', content: 'Istio是当前主流的Service Mesh实现之一' },
      { index: 'D', content: 'Service Mesh的Sidecar代理实现了零性能开销' }
    ]
  },
  {
    id: 'cloud_08',
    type: '场景应用',
    topic: '云原生与微服务',
    question: '某团队实施DevOps，需要实现代码提交后自动触发构建、测试、部署的全流程自动化。以下哪项是该流程的核心实践？',
    answer: 'A',
    reason: 'CI/CD（持续集成/持续交付）是DevOps的核心实践，实现代码提交后自动构建、测试和部署。B基础设施即代码是运维自动化实践；C蓝绿部署是发布策略；D混沌工程是可靠性测试方法。CI/CD流水线是连接开发与运维的桥梁。',
    options: [
      { index: 'A', content: 'CI/CD流水线自动化' },
      { index: 'B', content: '基础设施即代码（IaC）' },
      { index: 'C', content: '蓝绿部署' },
      { index: 'D', content: '混沌工程' }
    ]
  },
  {
    id: 'cloud_09',
    type: '计算',
    topic: '云原生与微服务',
    question: '某微服务部署在K8s上，配置了HPA自动扩容：最小副本数2，最大副本数10，目标CPU利用率50%。当前3个副本，CPU利用率75%。HPA应将副本数扩容到多少？',
    answer: 'B',
    reason: 'HPA扩容公式：期望副本数 = ceil(当前副本数 × 当前指标值 / 目标指标值) = ceil(3 × 75 / 50) = ceil(4.5) = 5。A维持3不变未触发扩容；C扩到8过多；D扩到10是最大值但不符合实际计算结果。HPA按比例扩容保证每个Pod的CPU使用率降至目标值附近。',
    options: [
      { index: 'A', content: '3' },
      { index: 'B', content: '5' },
      { index: 'C', content: '8' },
      { index: 'D', content: '10' }
    ]
  },
  {
    id: 'cloud_10',
    type: '对比分析',
    topic: '云原生与微服务',
    question: '以下关于Kubernetes和Docker Swarm的对比，正确的是？',
    answer: 'C',
    reason: 'A错误：Docker Swarm更轻量，K8s功能更丰富但更复杂；B错误：K8s的自动扩缩容能力远强于Docker Swarm；C正确：K8s功能全面（自动扩缩、滚动更新、服务发现等），适合大规模集群，Docker Swarm简单轻量适合小规模场景；D错误：Docker Swarm原生集成Docker，学习门槛低于K8s。',
    options: [
      { index: 'A', content: 'Docker Swarm的功能比Kubernetes更丰富' },
      { index: 'B', content: 'Docker Swarm的自动扩缩容能力优于Kubernetes' },
      { index: 'C', content: 'Kubernetes适合大规模复杂场景，Docker Swarm适合小规模简单场景' },
      { index: 'D', content: 'Docker Swarm的学习曲线比Kubernetes更陡峭' }
    ]
  },
  {
    id: 'db_05',
    type: '概念理解',
    topic: '数据库系统',
    question: '关于数据库第三范式（3NF），以下说法正确的是？',
    answer: 'D',
    reason: '3NF的定义：在2NF基础上，消除非主属性对候选键的传递依赖。A描述的是1NF（原子性）；B描述的是2NF（消除部分依赖）；C错误：3NF允许主属性间的传递依赖；D正确描述了3NF的核心——消除传递依赖。实际考试中常用"不能有传递依赖"来判断3NF。',
    options: [
      { index: 'A', content: '每个字段都是不可再分的原子值' },
      { index: 'B', content: '非主属性完全依赖于候选键' },
      { index: 'C', content: '任何属性之间都不存在传递依赖' },
      { index: 'D', content: '非主属性既不部分依赖也不传递依赖于候选键' }
    ]
  },
  {
    id: 'db_06',
    type: '场景应用',
    topic: '数据库系统',
    question: '某系统数据库中有一张订单表约1亿条记录，查询条件经常按user_id和order_time组合过滤。已有user_id的单列索引，但查询仍然很慢。最有效的优化方案是？',
    answer: 'A',
    reason: '联合索引(user_id, order_time)可以同时覆盖两个查询条件，遵循最左前缀原则。B查询缓存MySQL 8.0已移除；C分区表适用于按时间范围查询但不如联合索引直接；D读写分离解决的是并发读问题而非单查询性能。联合索引使得查询可以直接在索引上定位，无需回表或大幅减少回表次数。',
    options: [
      { index: 'A', content: '创建(user_id, order_time)联合索引' },
      { index: 'B', content: '启用MySQL查询缓存' },
      { index: 'C', content: '按order_time对表进行分区' },
      { index: 'D', content: '配置主从读写分离' }
    ]
  },
  {
    id: 'db_07',
    type: '场景应用',
    topic: '数据库系统',
    question: '某日志系统每天写入大量数据，数据按时间顺序追加写入，几乎不修改和删除历史数据。该场景最适合使用哪种NoSQL数据库？',
    answer: 'C',
    reason: 'Elasticsearch（ES）专用于日志和全文检索场景，支持海量时序数据的写入和搜索。A Redis适合缓存和高速读写，不适合海量持久化存储；B MongoDB适合文档存储但日志检索能力不如ES；D Neo4j是图数据库，不适合日志场景。ELK（Elasticsearch+Logstash+Kibana）是日志系统的标准架构。',
    options: [
      { index: 'A', content: 'Redis' },
      { index: 'B', content: 'MongoDB' },
      { index: 'C', content: 'Elasticsearch' },
      { index: 'D', content: 'Neo4j' }
    ]
  },
  {
    id: 'db_08',
    type: '对比分析',
    topic: '数据库系统',
    question: '以下关于关系型数据库和NoSQL数据库的对比，正确的是？',
    answer: 'B',
    reason: 'A错误：NoSQL数据库不支持标准的SQL查询语言，这正是"NoSQL"名称的由来之一；B正确：关系型数据库通过ACID保证强一致性，多数NoSQL采用最终一致性模型；C错误：关系型数据库也可以水平扩展（如分库分表），只是比NoSQL更复杂；D错误：NoSQL并非适用于所有场景，事务性强的场景仍需要关系型数据库。',
    options: [
      { index: 'A', content: 'NoSQL数据库支持标准的SQL查询语言' },
      { index: 'B', content: '关系型数据库强一致，多数NoSQL采用最终一致性' },
      { index: 'C', content: '关系型数据库不能进行水平扩展' },
      { index: 'D', content: 'NoSQL数据库在所有场景下都优于关系型数据库' }
    ]
  },
  {
    id: 'sec_04',
    type: '场景应用',
    topic: '系统安全',
    question: '某Web应用中，用户可以输入用户名进行登录。攻击者在用户名输入框中输入：admin\' OR \'1\'=\'1，成功绕过了身份验证。该攻击属于？',
    answer: 'A',
    reason: 'SQL注入攻击：通过在输入中嵌入SQL片段，改变原有SQL语句的逻辑。\' OR \'1\'=\'1 使WHERE条件永远为真，绕过验证。B XSS是在页面中注入脚本；C CSRF是伪造用户请求；D文件上传是上传恶意文件。SQL注入的典型特征是输入中包含SQL关键字和语法。',
    options: [
      { index: 'A', content: 'SQL注入攻击' },
      { index: 'B', content: 'XSS攻击' },
      { index: 'C', content: 'CSRF攻击' },
      { index: 'D', content: '文件上传漏洞' }
    ]
  },
  {
    id: 'sec_05',
    type: '场景应用',
    topic: '系统安全',
    question: '某企业需要实现：员工使用企业账号一次登录后，即可访问所有授权的内部系统（OA、CRM、ERP），无需逐个系统再次输入密码。应采用哪种身份认证方案？',
    answer: 'C',
    reason: 'SSO（单点登录）的核心目标就是一次认证、多系统通行，用户登录一次即可访问所有互信系统。A OAuth2主要用于第三方应用授权访问；B JWT是令牌格式，本身不解决多系统单点登录；D LDAP是目录服务协议，存储用户信息但不直接提供SSO。SSO通常基于CAS或SAML协议实现。',
    options: [
      { index: 'A', content: 'OAuth2.0授权框架' },
      { index: 'B', content: 'JWT（JSON Web Token）' },
      { index: 'C', content: 'SSO（单点登录）' },
      { index: 'D', content: 'LDAP目录服务' }
    ]
  },
  {
    id: 'sec_06',
    type: '对比分析',
    topic: '系统安全',
    question: '关于对称加密和非对称加密的对比，以下说法错误的是？',
    answer: 'C',
    reason: 'A正确：对称加密使用同一密钥加解密，非对称使用公钥/私钥对；B正确：对称加密速度快，适合大量数据，非对称速度慢，适合密钥交换和签名；C错误：非对称加密不能完全替代对称加密，实际系统中两者配合使用（非对称交换密钥，对称加密数据）；D正确：数字签名是非对称加密的典型应用。',
    options: [
      { index: 'A', content: '对称加密使用同一密钥加解密，非对称加密使用公钥和私钥' },
      { index: 'B', content: '对称加密速度快适合大数据量，非对称加密速度慢适合密钥交换' },
      { index: 'C', content: '非对称加密可以完全替代对称加密' },
      { index: 'D', content: '数字签名通常使用非对称加密中的私钥签名、公钥验证' }
    ]
  },
  {
    id: 'sec_07',
    type: '对比分析',
    topic: '系统安全',
    question: '以下关于XSS攻击和CSRF攻击的对比，正确的是？',
    answer: 'D',
    reason: 'A错误：XSS是注入恶意脚本到页面，CSRF是借用户身份发起请求；B错误：XSS窃取的是用户数据（Cookie等），CSRF不以获取数据为目的而是以用户身份执行操作；C错误：CSRF不需要注入脚本；D正确：XSS的核心是"注入执行脚本"，CSRF的核心是"伪造用户请求"，两者原理和防御方式完全不同。',
    options: [
      { index: 'A', content: 'XSS和CSRF的攻击原理相同，都是注入恶意脚本' },
      { index: 'B', content: 'XSS窃取服务端数据，CSRF窃取用户Cookie' },
      { index: 'C', content: 'CSRF攻击需要在页面中注入JavaScript脚本' },
      { index: 'D', content: 'XSS是注入并执行恶意脚本，CSRF是借用用户身份发起请求' }
    ]
  },
  {
    id: 'se_04',
    type: '概念理解',
    topic: '软件工程',
    question: '关于CMMI（能力成熟度模型集成），以下说法正确的是？',
    answer: 'B',
    reason: 'A错误：CMMI 2级是已管理级，3级才是已定义级；B正确：CMMI共5个等级，1级（初始级）到5级（优化级），3级已定义级要求过程已文档化和标准化；C错误：CMMI 5级是优化级而非量化管理级，4级才是量化管理级；D错误：CMMI可应用于开发、服务、采购等多个领域。',
    options: [
      { index: 'A', content: 'CMMI 2级是已定义级，过程已文档化' },
      { index: 'B', content: 'CMMI共5个等级，3级已定义级要求过程标准化和组织级过程定义' },
      { index: 'C', content: 'CMMI 5级是量化管理级，使用统计方法控制过程' },
      { index: 'D', content: 'CMMI只适用于软件开发，不能用于其他领域' }
    ]
  },
  {
    id: 'se_05',
    type: '场景应用',
    topic: '软件工程',
    question: '某团队在需求分析阶段需要描述"用户注册"流程中，系统与用户之间的交互顺序。应选用哪种UML图？',
    answer: 'C',
    reason: '序列图（Sequence Diagram）用于描述对象之间的交互顺序，强调消息的时间顺序，特别适合描述用例中的交互流程。A类图描述类的结构关系；B活动图描述动作流程但不强调交互对象；D状态图描述对象的状态变迁。序列图最适合展示"谁在什么时候发给谁什么消息"。',
    options: [
      { index: 'A', content: '类图（Class Diagram）' },
      { index: 'B', content: '活动图（Activity Diagram）' },
      { index: 'C', content: '序列图（Sequence Diagram）' },
      { index: 'D', content: '状态图（State Diagram）' }
    ]
  },
  {
    id: 'se_06',
    type: '对比分析',
    topic: '软件工程',
    question: '关于瀑布模型和敏捷开发的对比，以下说法错误的是？',
    answer: 'C',
    reason: 'A正确：瀑布模型需求在前期冻结，变更代价大；敏捷拥抱变化，通过迭代逐步调整；B正确：瀑布严格按阶段顺序执行，敏捷短周期迭代交付；C错误：敏捷也需要文档，只是文档够用即可、持续更新，而非"不需要任何文档"；D正确：瀑布适合需求稳定、关键安全系统；敏捷适合需求不确定、快速变化的项目。',
    options: [
      { index: 'A', content: '瀑布模型需求变更代价大，敏捷开发拥抱变化' },
      { index: 'B', content: '瀑布模型按阶段线性推进，敏捷开发采用短周期迭代' },
      { index: 'C', content: '敏捷开发不需要任何文档，瀑布模型需要完整文档' },
      { index: 'D', content: '瀑布模型适合需求明确的系统，敏捷适合需求不确定的项目' }
    ]
  },
  {
    id: 'eval_03',
    type: '场景应用',
    topic: '架构评估',
    question: '在ATAM评估中，架构师发现某系统为了提高性能而取消了数据校验环节，这虽然提升了响应速度但降低了数据安全性。在ATAM中，这种情况被称为什么？',
    answer: 'A',
    reason: 'ATAM中，权衡点（Tradeoff Point）是指影响多个质量属性的架构决策，提升一个属性会降低另一个。本例中取消校验提升性能但降低安全性，是典型的权衡点。B敏感点是影响单一质量属性的架构决策；C风险点是可能带来问题的架构决策；D非风险点是不存在问题的架构决策。权衡点的关键特征是"一升一降"。',
    options: [
      { index: 'A', content: '权衡点（Tradeoff Point）' },
      { index: 'B', content: '敏感点（Sensitivity Point）' },
      { index: 'C', content: '风险点（Risk）' },
      { index: 'D', content: '非风险点（Non-Risk）' }
    ]
  },
  {
    id: 'tech_04',
    type: '场景应用',
    topic: '前沿技术',
    question: '某企业希望将大语言模型应用于内部知识库问答，但发现模型经常"编造"不存在的内部制度内容。架构师应采用什么技术来解决？',
    answer: 'A',
    reason: 'RAG（检索增强生成）通过先从知识库检索相关文档，再将检索结果作为上下文输入LLM，让模型基于真实文档生成回答，有效减少"幻觉"。B微调是用大量数据训练模型参数，成本高且不能保证不幻觉；C Prompt Engineering可以指导模型但不提供事实依据；D强化学习是训练方法而非解决幻觉的方案。',
    options: [
      { index: 'A', content: 'RAG（检索增强生成）' },
      { index: 'B', content: '模型微调（Fine-tuning）' },
      { index: 'C', content: 'Prompt Engineering' },
      { index: 'D', content: '强化学习（RLHF）' }
    ]
  },
  {
    id: 'cs_01',
    type: '场景应用',
    topic: '计算机基础',
    question: '某系统中，进程P1占用资源R1并请求资源R2，进程P2占用资源R2并请求资源R1，导致两个进程都无法继续执行。这种现象属于？',
    answer: 'A',
    reason: '死锁的四个必要条件：互斥、占有并等待、不可抢占、循环等待。P1占R1等R2、P2占R2等R1形成循环等待，是典型的死锁。B饥饿是进程长期得不到资源；C活锁是进程不断重试但无法推进；D竞态条件是并发执行结果依赖执行顺序。死锁的关键特征是"循环等待"。',
    options: [
      { index: 'A', content: '死锁（Deadlock）' },
      { index: 'B', content: '饥饿（Starvation）' },
      { index: 'C', content: '活锁（Livelock）' },
      { index: 'D', content: '竞态条件（Race Condition）' }
    ]
  },
  {
    id: 'cs_02',
    type: '场景应用',
    topic: '计算机基础',
    question: '某企业需要建设存储区域网络，用于数据库集群的高性能块存储访问。该企业应选择哪种存储架构？',
    answer: 'B',
    reason: 'SAN（Storage Area Network）提供块级别的存储访问，具有低延迟、高吞吐的特点，适合数据库等对性能要求高的场景。A NAS提供文件级访问，适合文件共享；C DAS是直连存储，不支持多服务器共享；D对象存储适合海量非结构化数据而非数据库场景。SAN的核心优势是块存储+网络共享。',
    options: [
      { index: 'A', content: 'NAS（网络附加存储）' },
      { index: 'B', content: 'SAN（存储区域网络）' },
      { index: 'C', content: 'DAS（直连式存储）' },
      { index: 'D', content: '对象存储（Object Storage）' }
    ]
  },
  {
    id: 'cs_03',
    type: '场景应用',
    topic: '计算机基础',
    question: '某系统使用HTTP协议通信，架构师需要确保传输过程中的数据不被窃取和篡改。最合适的方案是？',
    answer: 'C',
    reason: 'HTTPS = HTTP + TLS/SSL，通过对通信链路加密保证数据传输的机密性和完整性。A HTTP本身不加密；B IPsec工作在网络层，适合VPN而非Web应用；D SSH用于远程登录而非Web通信。HTTPS是Web应用安全传输的标准方案，提供加密、认证和完整性保护。',
    options: [
      { index: 'A', content: '使用HTTP协议并在应用层加密敏感字段' },
      { index: 'B', content: '使用IPsec建立VPN隧道' },
      { index: 'C', content: '使用HTTPS（HTTP+TLS）协议' },
      { index: 'D', content: '使用SSH隧道转发HTTP流量' }
    ]
  },
  {
    id: 'law_01',
    type: '概念理解',
    topic: '法律法规',
    question: '根据中国著作权法，某软件工程师在职期间为完成工作任务所开发的软件，其著作权属于？',
    answer: 'B',
    reason: '职务作品中，法人或其他组织享有著作权。工程师在职期间为完成工作任务开发的软件属于职务作品，著作权由法人（公司）享有。A开发者仅享有署名权；C共有需双方约定；D公有领域指不受保护的作品。这是软考中常见的法律知识点。',
    options: [
      { index: 'A', content: '该软件工程师个人' },
      { index: 'B', content: '所在单位（法人）' },
      { index: 'C', content: '工程师和单位共同享有' },
      { index: 'D', content: '进入公有领域' }
    ]
  },
  {
    id: 'law_02',
    type: '场景应用',
    topic: '法律法规',
    question: '某公司开发了一款具有创新算法的软件产品，希望获得最强力的知识产权保护，防止竞争对手复制。应申请哪种知识产权？',
    answer: 'A',
    reason: '专利权保护力度最强，一旦授予可禁止他人未经许可使用该技术方案。B著作权只保护表达形式不保护思想/算法；C商业秘密无排他性，他人独立研发不侵权；D商标保护的是品牌标识而非技术方案。专利保护的排他性最强，但需公开技术方案且审批周期长。',
    options: [
      { index: 'A', content: '发明专利' },
      { index: 'B', content: '软件著作权' },
      { index: 'C', content: '商业秘密' },
      { index: 'D', content: '商标权' }
    ]
  },
  {
    id: 'eng_03',
    type: '专业英语',
    topic: '专业英语',
    question: 'In a distributed system, the ______ protocol is used to achieve consensus among multiple nodes, ensuring that all nodes agree on the same data value even in the presence of failures.',
    answer: 'B',
    reason: '共识协议（Consensus protocol）用于在分布式系统的多个节点之间达成一致，即使存在故障也能保证所有节点对同一数据值达成共识。A两阶段提交（2PC）是分布式事务协议，不是共识协议；C负载均衡（Load balancing）解决请求分配问题；D心跳（Heartbeat）是故障检测机制。关键词"consensus"提示是共识协议。',
    options: [
      { index: 'A', content: 'Two-Phase Commit' },
      { index: 'B', content: 'Consensus' },
      { index: 'C', content: 'Load Balancing' },
      { index: 'D', content: 'Heartbeat' }
    ]
  },
  {
    id: 'eng_04',
    type: '专业英语',
    topic: '专业英语',
    question: 'In microservices architecture, the ______ pattern involves deploying a sidecar proxy alongside each service instance to handle cross-cutting concerns such as service discovery, load balancing, and encryption without modifying the service code.',
    answer: 'D',
    reason: 'Ambassador模式（也称为Sidecar模式）在每个服务实例旁边部署代理，处理服务发现、负载均衡、加密等横切关注点，无需修改服务代码。A断路器（Circuit Breaker）处理故障保护；B门面（Facade）提供简化接口；C策略（Strategy）是算法封装模式。题目中"sidecar proxy"直接提示了Ambassador/Sidecar模式。',
    options: [
      { index: 'A', content: 'Circuit Breaker' },
      { index: 'B', content: 'Facade' },
      { index: 'C', content: 'Strategy' },
      { index: 'D', content: 'Ambassador' }
    ]
  },
  {
    id: 'eng_05',
    type: '专业英语',
    topic: '专业英语',
    question: '______ is a quality attribute that measures the ease with which a system can be modified to accommodate changes in requirements, technology, or environment. It is often achieved through modularity, low coupling, and high cohesion.',
    answer: 'A',
    reason: '可修改性（Modifiability）衡量系统适应需求、技术或环境变化的容易程度，通常通过模块化、低耦合、高内聚来实现。B可用性（Availability）衡量系统正常运行时间比例；C安全性（Security）衡量系统抵御攻击的能力；D性能（Performance）衡量响应速度。关键词"modified""changes"直接提示Modifiability。',
    options: [
      { index: 'A', content: 'Modifiability' },
      { index: 'B', content: 'Availability' },
      { index: 'C', content: 'Security' },
      { index: 'D', content: 'Performance' }
    ]
  }
]
