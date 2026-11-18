# التدقيق النهائي للمنهج — Linux الآن → SOC لاحقًا

> **قاعدة المنهج:** مسار واحد متسلسل. كل ما يظهر في Linux مطلوب مرة واحدة فقط؛ لا يوجد قسم توسع أو دروس مؤجلة داخل المسار النشط. المكرر مستبعد من عداد الإنجاز ويظهر في سجل المصادر لشرح سبب الاستبعاد.

## 1. الأرقام النهائية المعتمدة

- **93 وحدة دراسة** في **16 مرحلة**.
- **75 وحدة أساسية**.
- **16 إضافة مكملة** (موضوعات لا تعيد شرحًا سبق أخذه).
- **2 تطبيقان عمليان**: تحدي عبدالله النهائي + معمل Bandit.
- **92 مقطعًا/فصلًا مرئيًا**، مأخوذة من **82 فيديو YouTube مصدرًا فريدًا**؛ بعض الفيديوهات الطويلة استُخدمت منها فصول محددة فقط.
- **مدة المقاطع ذات المدة المعروفة: 36 ساعة و13 دقيقة و28 ثانية**، دون وقت المعامل. توجد 3 فيديوهات لم تذكر قائمتها المدة، ومعمل Bandit يتغير حسب سرعة الحل.
- الحساب النهائي: 75 أساسي + 16 إضافة مكملة + 2 تطبيق عملي = 93 وحدة. لا توجد بطاقات مكررة في هذا العدد.
- **تفصيل الـ75 أساسي:** 3 فصول مختارة من فيديو واحد لأحمد عيد + 72 فيديو كاملة من دورة محمد الطناني.
- **تفصيل الـ16 إضافة مكملة:** 6 فيديوهات منتقاة من عبدالله النعيمي (#14، #15، #16، #17، #21، #24) + فصلان من Security Jordan Linux Part 2 (Authentication وAWK/SED/CUT/TR) + 8 فصول تطبيقية منتقاة من فيديو Bash واحد لدى Security Jordan.
- **تفصيل التطبيقين:** فيديو تحدي عبدالله النعيمي #27 + معمل Bandit Levels 0–34 (ليس فيديو YouTube).
- إذن **92 مقطعًا/فصلًا مرئيًا** من **82 فيديو YouTube أصليًا مختلفًا** + معمل خارجي واحد. عدد المقاطع ليس عدد روابط YouTube؛ فبعض روابط الفيديو الطويل تحتوي أكثر من فصل مختار.

### لماذا لا يساوي عدد الوحدات عدد الفيديوهات؟

لأن أحمد عيد له 3 فصول مختارة من فيديو واحد، وفيديو Bash من Security Jordan له عدة فصول محددة، وفيديو Linux Part 2 له فصلان مختاران. لذلك نعدّ كل مقطع تعلم مستقلًا، لكن لا نعدّ رابط الفيديو الطويل عدة مرات.

## 2. المنهج النشط — الترتيب الكامل

### المرحلة 01: التمهيد وتجهيز معمل Linux — 3 وحدات

فهم نظام التشغيل والـ Kernel والـ Virtualization قبل التثبيت.

**الهدف:** تخرج من المرحلة وأنت تفهم أين يعمل Linux وكيف ستشغّله في جهاز افتراضي آمن.
**المخرج المطلوب:** جهاز افتراضي واحد جاهز، ولقطة Snapshot قبل بدء التعديلات.

- **001. Introduction to Operating Systems** — أحمد عيد | دورة تعلم Linux كاملة باللغة العربية للجميع في 6 ساعات ونصف | Chapter 00:00:11–00:52:17 | 52:06 | **أساسي**
  - لماذا هنا: فهم مكونات نظام التشغيل والعلاقة بين النظام والبرامج والعتاد قبل دخول Linux.
  - التطبيق: اكتب مقارنة مختصرة بين وظيفة النظام والنواة والخدمات.
  - الرابط: https://www.youtube.com/watch?v=8f2Zsb89uoM&t=11s
- **002. Introduction to Virtualization and Virtual Machines** — أحمد عيد | دورة تعلم Linux كاملة باللغة العربية للجميع في 6 ساعات ونصف | Chapter 00:52:17–01:19:36 | 27:19 | **أساسي**
  - لماذا هنا: فهم الـ Hypervisor والـ VM ولماذا سنستخدم أجهزة افتراضية لمعزل Linux lab.
  - التطبيق: ارسم Host → Hypervisor → Guest VM، وحدد موارد كل جهاز افتراضي.
  - الرابط: https://www.youtube.com/watch?v=8f2Zsb89uoM&t=3137s
- **003. Setting Up a Linux Virtual Machine** — أحمد عيد | دورة تعلم Linux كاملة باللغة العربية للجميع في 6 ساعات ونصف | Chapter 01:19:36–01:49:20 | 29:44 | **أساسي**
  - لماذا هنا: تجهيز جهاز Linux افتراضي قبل تثبيت بيئة الإدارة.
  - التطبيق: أنشئ VM وخذ Snapshot قبل بدء التغييرات.
  - الرابط: https://www.youtube.com/watch?v=8f2Zsb89uoM&t=4776s

### المرحلة 02: التوزيعات والتثبيت وسطر الأوامر — 11 وحدات

تثبيت Rocky وDebian وبناء أساس التعامل اليومي مع Shell وملفات Linux.

**الهدف:** تستطيع الدخول إلى النظام والتنقل وإنشاء الملفات وإدارتها من الطرفية.
**المخرج المطلوب:** Rocky Linux وDebian مثبتان، ومجلد تدريب يحتوي على ملفات ومجلدات تجريبية.

- **004. Intro and Linux History - Linux course 2024** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 01 | 19:55 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=1
- **005. Linux Distributions, download Debian and Rocky** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 02 | 20:44 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=2
- **006. Install Rocky Linux on VMWare Workstation and Virtual Box** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 03 | 27:48 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=3
- **007. Install Debian on VMWare Workstation and Virtual Box** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 04 | 16:29 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=4
- **008. Accessing Shell, Terminal and switch tty** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 05 | 18:36 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=5
- **009. date, cal, whoami, su, pwd, clear - Linux Course** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 06 | 15:14 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=6
- **010. Linux File System Hierarchy** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 07 | 22:59 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=7
- **011. Navigation, absolute path and relative path** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 08 | 18:17 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=8
- **012. Command options, arguments, touch, cat, nano, mkdir** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 09 | 27:27 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=9
- **013. copy, move file and directory** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 10 | 16:23 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=10
- **014. rename, remove, command shortcuts** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 11 | 19:42 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=11

### المرحلة 03: المستخدمون والمجموعات والصلاحيات — 13 وحدات

إدارة الحسابات وملفات كلمات المرور والصلاحيات العادية والخاصة.

**الهدف:** تستطيع إنشاء المستخدمين والمجموعات، وفهم الملكية وchmod وSUID/SGID وumask.
**المخرج المطلوب:** أنشئ مستخدمًا ومجموعة، وطبّق صلاحيات مختلفة، ثم اختبر الوصول بحساب غير إداري.

- **015. Describe Users and Groups Concepts** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 12 | 23:22 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=12
- **016. Gain Superuser Access** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 13 | 25:10 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=13
- **017. Create users from Command Line** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 14 | 20:35 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=14
- **018. modify existing users, delete users, more, less, head, tail** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 15 | 21:29 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=15
- **019. Manage local groups** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 16 | 17:10 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=16
- **020. Shadow file format** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 17 | 27:26 | **أساسي**
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=17
- **021. Configure Password Aging** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 18 | 31:46 | **أساسي**
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=18
- **022. Linux File System Permissions** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 19 | 11:58 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=19
- **023. Change Permissions with Symbolic Method** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 20 | 14:58 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=20
- **024. Change Permission With Octal Method** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 21 | 15:29 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=21
- **025. Change User or Group Ownership** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 22 | 11:43 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=22
- **026. special permissions and umask part 1** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 23 | 20:31 | **أساسي**
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=23
- **027. special permission and umask part 2** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 24 | 31:06 | **أساسي**
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=24

### المرحلة 04: البحث والملفات والمخرجات — 7 وحدات

البحث عن الملفات والنصوص، والتحكم في الإدخال والإخراج والتحرير والأرشفة.

**الهدف:** تستطيع العثور على ملف أو نص محدد واستخراج النتائج وتوجيه مخرجات الأوامر.
**المخرج المطلوب:** ملف أوامر شخصي يحتوي أمثلة موثقة لـ find وgrep وredirection وvim وtar/gzip.

- **028. help, man pages, info pages** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 25 | 20:05 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=25
- **029. searching files and directories, locate, grep, whereis, whatis Linux - Course 2024** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 26 | 16:27 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=26
- **030. Searching using find** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 27 | 19:36 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=27
- **031. redirection, standard in, standard out, standard error** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 28 | 21:02 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=28
- **032. edit text file using vim and vim advanced options** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 29 | 29:22 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=29
- **033. Compressing and Archiving** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 30 | 24:10 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=30
- **034. Inodes and Soft link and Hard link** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 31 | 28:32 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=31

### المرحلة 05: العمليات والإقلاع والخدمات ومراقبة النظام — 4 وحدات

فهم العمليات والخدمات ومراقبة موارد Linux.

**الهدف:** تستطيع معرفة العملية التي تعمل، وخدمتها، وحالتها، ومراقبة استهلاك الموارد.
**المخرج المطلوب:** تقرير صغير عن العمليات والخدمات النشطة على جهازك الافتراضي.

- **035. Monitor and Manage Linux Processes part1** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 32 | 29:57 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=32
- **036. Monitor and Manage Linux Processes part2** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 33 | 27:40 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=33
- **037. Linux Boot Process, and Control Services and Daemons** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 34 | 34:59 | **أساسي**
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=34
- **038. أدوات مراقبة النظام** — عبدالله النعيمي | Linux Course in CyberSecurity [Arabic] | فيديو 21 | غير محددة في الفهرس المرسل | **إضافة مكملة**
  - لماذا هنا: استكمال عملي لمراقبة استهلاك الموارد وحالة النظام بعد تعلم إدارة العمليات والخدمات.
  - التطبيق: راقب CPU وRAM والعمليات النشطة، وسجّل ما يستهلك الموارد.
  - الرابط: https://www.youtube.com/playlist?list=PLtlmgvQV7sDtKQUPF6i6rNA3mIiieeuWp&index=21

### المرحلة 06: الشبكات والاتصال وSSH وفحص الخدمات — 5 وحدات

إعداد الشبكة من Linux، واختبار الاتصال، وفهم المنافذ والخدمات والاتصال الآمن.

**الهدف:** تستطيع فحص عنوان IP والاتصال والمنافذ والخدمات، وإعداد SSH بصورة آمنة داخل معملك.
**المخرج المطلوب:** خريطة صغيرة لاتصالات جهاز Linux ومنافذه وخدمة SSH.

- **039. مفهوم عنوان الشبكة والمنافذ في Linux** — عبدالله النعيمي | Linux Course in CyberSecurity [Arabic] | فيديو 15 | غير محددة في الفهرس المرسل | **إضافة مكملة**
  - لماذا هنا: يربط إعداد Linux بعنوان IP والمنفذ والخدمة التي تستقبل الاتصال.
  - التطبيق: اعرض عنوان IP والواجهات والمنافذ المستمعة على جهاز المعمل.
  - الرابط: https://www.youtube.com/playlist?list=PLtlmgvQV7sDtKQUPF6i6rNA3mIiieeuWp&index=15
- **040. اختبارات الاتصال** — عبدالله النعيمي | Linux Course in CyberSecurity [Arabic] | فيديو 16 | 04:20 | **إضافة مكملة**
  - لماذا هنا: تطبيق اختبارات الاتصال وتفسير نجاح الاتصال أو فشله من داخل Linux.
  - التطبيق: نفّذ ping وtracepath أو traceroute إن توفر، وقارن النتائج.
  - الرابط: https://www.youtube.com/playlist?list=PLtlmgvQV7sDtKQUPF6i6rNA3mIiieeuWp&index=16
- **041. Manage Network, Network Manager** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 35 | 38:07 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=35
- **042. Diffie-Hellman, Configure and Secure SSH** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 36 | 47:44 | **أساسي**
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=36
- **043. فحص بورتات وخدمات الشبكة** — عبدالله النعيمي | Linux Course in CyberSecurity [Arabic] | فيديو 17 | 07:57 | **إضافة مكملة**
  - لماذا هنا: تتعرف على المنافذ والخدمات المكشوفة من منظور إدارة النظام والتحقق.
  - التطبيق: افحص أجهزة المعمل المملوكة لك فقط، واربط المنفذ بالخدمة التي تستمع عليه.
  - الرابط: https://www.youtube.com/playlist?list=PLtlmgvQV7sDtKQUPF6i6rNA3mIiieeuWp&index=17

### المرحلة 07: المصادقة والتحقق من الهوية — 1 وحدات

فهم آلية المصادقة في Linux بعد إدارة الحسابات وتهيئة SSH، دون إعادة دروس المستخدمين وملف Shadow.

**الهدف:** تفهم الفكرة العامة لمسار المصادقة وأين تبحث عن أثر محاولات الدخول.
**المخرج المطلوب:** اكتب مخططًا مختصرًا لمسار تسجيل الدخول، وحدد أين يمكن رصد النجاح أو الفشل في السجلات.

- **044. فهم مصادقة Linux (Linux Authentication)** — Security Jordan | تعلم Kali Linux من الصفر | الجزء الثاني من دورة Linux الشاملة | 02:14:05 | 10:05 | **إضافة مكملة**
  - لماذا هنا: درس مكمل يأتي بعد إدارة الحسابات وSSH وقبل تحليل السجلات. الهدف فهم مسار المصادقة في Linux؛ لا تُعد تفاصيل إنشاء المستخدمين أو قراءة Shadow أو Password Aging التي أخذتها بالفعل في دروس الطناني.
  - التطبيق: ارسم باختصار مسار محاولة تسجيل الدخول: المستخدم → آلية المصادقة → قبول/رفض الدخول → أثر الحدث في السجل. دوّن أسماء الملفات أو المكونات التي يذكرها المحاضر، مع تجنب إعادة تمارين إدارة الحسابات السابقة.
  - الرابط: https://www.youtube.com/watch?v=qjqiPF0QBJ0&t=8045s

### المرحلة 08: سجلات Linux وتحليلها — 2 وحدات

إدارة سجلات Linux باستخدام rsyslog وjournald، ثم تطبيق القراءة والاستخراج من السجلات دون إعادة محاضرات متشابهة.

**الهدف:** تستطيع الوصول إلى سجلات الخدمات والمصادقة، وتحديد الوقت والمصدر والرسالة المهمة.
**المخرج المطلوب:** نفّذ تسجيل دخول ناجحًا وفاشلًا في معملك، ثم استخرج السجل المرتبط بهما باستخدام journalctl أو ملف المصادقة المناسب لتوزيعتك.

- **045. Analyze and Store Logs - rsyslog** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 37 | 35:09 | **أساسي**
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=37
- **046. Analyze and Store Logs - Systemd journald** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 38 | 42:13 | **أساسي**
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=38

### المرحلة 09: إدارة الحزم ومصادر البرامج — 5 وحدات

فهم الحزم والسكريبتات ومديري الحزم في Debian وRed Hat والتحقق من مصادر التثبيت.

**الهدف:** تستطيع تثبيت وتحديث وإزالة البرامج، وفهم مصدر الحزمة قبل الوثوق بها.
**المخرج المطلوب:** وثّق عملية تثبيت وتحديث حزمة على Debian وعلى Rocky، ودوّن مصدرها.

- **047. difference between Packages and scripts, dpkg for debian** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 39 | 31:41 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=39
- **048. debian package manager - apt** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 40 | 43:59 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=40
- **049. redhat package manager (RPM)** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 41 | 24:18 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=41
- **050. redhat package manager (dnf - yum)** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 42 | 34:56 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=42
- **051. تحميل البرامج من مصادر خارجية** — عبدالله النعيمي | Linux Course in CyberSecurity [Arabic] | فيديو 14 | 02:16 | **إضافة مكملة**
  - لماذا هنا: افهم كيفية التعامل مع مصادر البرامج الخارجية، ولماذا يجب التحقق من المصدر والتوقيع قبل التثبيت.
  - التطبيق: اختبر إضافة/مصدر موثوق في VM فقط، ثم وثّق كيف تتحقق من مصدر الحزمة.
  - الرابط: https://www.youtube.com/playlist?list=PLtlmgvQV7sDtKQUPF6i6rNA3mIiieeuWp&index=14

### المرحلة 10: أنظمة الملفات والتخزين وRAID وLVM — 11 وحدات

الوصول إلى أنظمة الملفات وإدارة الأقراص والـ partitions وSwap والتخزين المتقدم.

**الهدف:** تفهم mount وfstab وfdisk وgdisk وRAID وLVM، وتعرف أثرها على تشغيل الخادم.
**المخرج المطلوب:** نفّذ تجربة mount وLVM على قرص افتراضي إضافي فقط، وليس على قرص جهازك الحقيقي.

- **052. Access Linux File Systems** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 43 | 32:04 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=43
- **053. Manage Basic Storage using fdisk** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 44 | 31:53 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=44
- **054. Manage Basic Storage part2 - fstab** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 45 | 42:30 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=45
- **055. Manage Basic Storage part3 using gdisk** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 46 | 27:10 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=46
- **056. Swap Management File and Partition** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 47 | 24:53 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=47
- **057. Manage Advanced Storage - RAID theory** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 48 | 17:54 | **أساسي**
  - لماذا هنا: جزء من اكتمال إدارة Linux. افهم المفهوم ونفّذ على قرص افتراضي إضافي فقط؛ لا تغيّر أقراص جهازك الفعلية.
  - التطبيق: أنشئ قرصًا افتراضيًا إضافيًا للتجربة، ثم نفّذ خطوات إدارة التخزين بأمان على القرص الافتراضي.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=48
- **058. Manage Advanced Storage - RAID Practical and configuration** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 49 | 29:35 | **أساسي**
  - لماذا هنا: جزء من اكتمال إدارة Linux. افهم المفهوم ونفّذ على قرص افتراضي إضافي فقط؛ لا تغيّر أقراص جهازك الفعلية.
  - التطبيق: أنشئ قرصًا افتراضيًا إضافيًا للتجربة، ثم نفّذ خطوات إدارة التخزين بأمان على القرص الافتراضي.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=49
- **059. Manage Advanced Storage - LVM part 1** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 50 | 34:16 | **أساسي**
  - لماذا هنا: جزء من اكتمال إدارة Linux. افهم المفهوم ونفّذ على قرص افتراضي إضافي فقط؛ لا تغيّر أقراص جهازك الفعلية.
  - التطبيق: أنشئ قرصًا افتراضيًا إضافيًا للتجربة، ثم نفّذ خطوات إدارة التخزين بأمان على القرص الافتراضي.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=50
- **060. Manage Advanced Storage - LVM part 2** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 51 | 32:26 | **أساسي**
  - لماذا هنا: جزء من اكتمال إدارة Linux. افهم المفهوم ونفّذ على قرص افتراضي إضافي فقط؛ لا تغيّر أقراص جهازك الفعلية.
  - التطبيق: أنشئ قرصًا افتراضيًا إضافيًا للتجربة، ثم نفّذ خطوات إدارة التخزين بأمان على القرص الافتراضي.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=51
- **061. Manage Advanced Storage - LVM part 3** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 52 | 31:53 | **أساسي**
  - لماذا هنا: جزء من اكتمال إدارة Linux. افهم المفهوم ونفّذ على قرص افتراضي إضافي فقط؛ لا تغيّر أقراص جهازك الفعلية.
  - التطبيق: أنشئ قرصًا افتراضيًا إضافيًا للتجربة، ثم نفّذ خطوات إدارة التخزين بأمان على القرص الافتراضي.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=52
- **062. Manage Advanced Storage - LVM part 4** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 53 | 20:21 | **أساسي**
  - لماذا هنا: جزء من اكتمال إدارة Linux. افهم المفهوم ونفّذ على قرص افتراضي إضافي فقط؛ لا تغيّر أقراص جهازك الفعلية.
  - التطبيق: أنشئ قرصًا افتراضيًا إضافيًا للتجربة، ثم نفّذ خطوات إدارة التخزين بأمان على القرص الافتراضي.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=53

### المرحلة 11: أساسيات Bash وShell Scripting — 10 وحدات

من فهم الـ Shell إلى المتغيرات والحسابات والنصوص والشروط والحلقات وCase.

**الهدف:** تستطيع كتابة سكربت Bash بسيط يستخدم المتغيرات والشروط والحلقات.
**المخرج المطلوب:** اكتب سكربتًا يقرأ قيمة من المستخدم ويتحقق منها ثم يعرض نتيجة واضحة.

- **063. Improving Command Line** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 54 | 25:49 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=54
- **064. Shell Scripting Intro - Interpreter, Compiler, Program, Application, Script** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 55 | 33:13 | **أساسي**
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=55
- **065. Shell Scripting Variables, echo, tr** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 56 | 26:38 | **أساسي**
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=56
- **066. Shell Scripting Arithmetic Calculation** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 57 | 24:13 | **أساسي**
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=57
- **067. Remaining topics to complete the course** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 58 | 07:04 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=58
- **068. Shell Scripting - String** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 59 | 17:26 | **أساسي**
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=59
- **069. Shell Scripting - if statement** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 60 | 25:26 | **أساسي**
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=60
- **070. Shell Scripting - While Loop** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 61 | 14:30 | **أساسي**
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=61
- **071. Shell Scripting - For loop** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 62 | 15:25 | **أساسي**
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=62
- **072. Shell Scripting - Case statement** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 63 | 15:28 | **أساسي**
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=63

### المرحلة 12: استكمال Bash بالمشاريع والدوال والمصفوفات — 8 وحدات

ابدأ بأساس Shell Scripting في الطناني، ثم خذ الإضافات العملية الجديدة من Security Jordan: إنشاء السكربت، الإدخال، العمليات، المشاريع، قراءة الملفات، Arrays وFunctions.

**الهدف:** تستطيع كتابة سكربت Bash قابل للتنفيذ، يستقبل مدخلات، يستخدم الشروط والحلقات والدوال والمصفوفات، وينفذ مهمة مفيدة.
**المخرج المطلوب:** أنشئ سكربتًا واحدًا يجمع System Information وPing Checker وقراءة ملف نصي، مع دوال وتعامل صحيح مع المدخلات.

- **073. إنشاء أول Bash Script: Shebang وتشغيله** — Security Jordan | تعلم Bash Scripting من الصفر إلى الاحتراف في أقل من 3 ساعات | مقطع 13:24–24:23 | 10:59 | **إضافة مكملة**
  - لماذا هنا: استكمال عملي واحد يجمع إنشاء ملف السكربت، تحديد المفسّر بسطر Shebang، ثم تشغيله. دورة الطناني تقدم مقدمة Shell Scripting؛ هذا المقطع يثبت طريقة بناء ملف قابل للتنفيذ عمليًا دون إعادة شرح المتغيرات والشروط والحلقات.
  - التطبيق: أنشئ ملفًا باسم hello.sh، اكتب سطر Shebang المناسب، أضف أمرًا بسيطًا، امنحه صلاحية التنفيذ، ثم شغّله بالطريقة التي شرحها المحاضر. دوّن الفرق بين bash file.sh والتنفيذ المباشر بعد chmod +x.
  - الرابط: https://www.youtube.com/watch?v=M5-MCMrC0sI&t=804s
- **074. قراءة مدخلات المستخدم في Bash** — Security Jordan | تعلم Bash Scripting من الصفر إلى الاحتراف في أقل من 3 ساعات | مقطع 37:36–48:44 | 11:08 | **إضافة مكملة**
  - لماذا هنا: إضافة مدخلات إلى السكربت باستخدام read والتحقق منها.
  - التطبيق: هذا مقطع محدد من الفيديو الكامل؛ لا تحتاج لمشاهدة المقاطع التمهيدية أو المتكررة التي أخذتها من الطناني. المدة محسوبة بين فصول الفيديو المنشورة.
  - الرابط: https://www.youtube.com/watch?v=M5-MCMrC0sI&t=2256s
- **075. Operators في Bash** — Security Jordan | تعلم Bash Scripting من الصفر إلى الاحتراف في أقل من 3 ساعات | مقطع 48:44–01:07:52 | 19:08 | **إضافة مكملة**
  - لماذا هنا: استخدام المقارنات والعمليات داخل الشروط.
  - التطبيق: هذا مقطع محدد من الفيديو الكامل؛ لا تحتاج لمشاهدة المقاطع التمهيدية أو المتكررة التي أخذتها من الطناني. المدة محسوبة بين فصول الفيديو المنشورة.
  - الرابط: https://www.youtube.com/watch?v=M5-MCMrC0sI&t=2924s
- **076. مشروع 1: System Information** — Security Jordan | تعلم Bash Scripting من الصفر إلى الاحتراف في أقل من 3 ساعات | مقطع 01:30:10–01:38:08 | 07:58 | **إضافة مكملة**
  - لماذا هنا: إنشاء سكربت يعرض معلومات النظام؛ طبّقه بنفسك بعد مشاهدة الجزء.
  - التطبيق: هذا مقطع محدد من الفيديو الكامل؛ لا تحتاج لمشاهدة المقاطع التمهيدية أو المتكررة التي أخذتها من الطناني. المدة محسوبة بين فصول الفيديو المنشورة.
  - الرابط: https://www.youtube.com/watch?v=M5-MCMrC0sI&t=5410s
- **077. مشروع 2: Ping Checker** — Security Jordan | تعلم Bash Scripting من الصفر إلى الاحتراف في أقل من 3 ساعات | مقطع 01:38:08–01:45:16 | 07:08 | **إضافة مكملة**
  - لماذا هنا: إنشاء سكربت يتحقق من الوصول إلى عنوان IP عبر Ping.
  - التطبيق: هذا مقطع محدد من الفيديو الكامل؛ لا تحتاج لمشاهدة المقاطع التمهيدية أو المتكررة التي أخذتها من الطناني. المدة محسوبة بين فصول الفيديو المنشورة.
  - الرابط: https://www.youtube.com/watch?v=M5-MCMrC0sI&t=5888s
- **078. Loops وقراءة الملفات سطرًا بسطر** — Security Jordan | تعلم Bash Scripting من الصفر إلى الاحتراف في أقل من 3 ساعات | مقطع 01:45:16–02:19:10 | 33:54 | **إضافة مكملة**
  - لماذا هنا: هذا الفصل يضيف تطبيق قراءة الملفات سطرًا بسطر. أساسيات for/while سبق شرحها في الطناني؛ لا تعِد حفظ تركيب الحلقة، وركّز هنا على while read ومعالجة كل سطر من ملف نصي.
  - التطبيق: اكتب سكربتًا يستخدم while IFS= read -r line لقراءة ملف تجريبي سطرًا بسطر، ثم يبحث عن كلمة محددة ويطبع الأسطر المطابقة.
  - الرابط: https://www.youtube.com/watch?v=M5-MCMrC0sI&t=6316s
- **079. Arrays في Bash** — Security Jordan | تعلم Bash Scripting من الصفر إلى الاحتراف في أقل من 3 ساعات | مقطع 02:19:10–02:28:45 | 09:35 | **إضافة مكملة**
  - لماذا هنا: تجميع عدة قيم ومعالجتها داخل السكربت.
  - التطبيق: هذا مقطع محدد من الفيديو الكامل؛ لا تحتاج لمشاهدة المقاطع التمهيدية أو المتكررة التي أخذتها من الطناني. المدة محسوبة بين فصول الفيديو المنشورة.
  - الرابط: https://www.youtube.com/watch?v=M5-MCMrC0sI&t=8350s
- **080. Functions في Bash** — Security Jordan | تعلم Bash Scripting من الصفر إلى الاحتراف في أقل من 3 ساعات | مقطع 02:28:45–02:51:10 | 22:25 | **إضافة مكملة**
  - لماذا هنا: تقسيم السكربت إلى وظائف قابلة لإعادة الاستخدام.
  - التطبيق: هذا مقطع محدد من الفيديو الكامل؛ لا تحتاج لمشاهدة المقاطع التمهيدية أو المتكررة التي أخذتها من الطناني. المدة محسوبة بين فصول الفيديو المنشورة.
  - الرابط: https://www.youtube.com/watch?v=M5-MCMrC0sI&t=8925s

### المرحلة 13: معالجة النصوص واستخراج البيانات — 1 وحدات

AWK وSED وCUT وTR وPrintf لمعالجة ملفات النصوص والسجلات.

**الهدف:** تستطيع استخراج الحقول وتنظيف المخرجات وتجميع بيانات من ملف سجل كبير.
**المخرج المطلوب:** من ملف سجل تجريبي، استخرج عناوين IP وعدد مرات ظهور كل عنوان.

- **081. Printf وAWK وSED وCUT وTR لمعالجة النصوص** — Security Jordan | تعلم Kali Linux من الصفر | الجزء الثاني من دورة Linux الشاملة | 03:15:40 | 1:22:30 | **إضافة مكملة**
  - لماذا هنا: هذه الأدوات هي الجسر بين التعامل مع الطرفية وتحليل ملفات السجلات: استخراج الحقول، التصفية، واستبدال النصوص.
  - التطبيق: أنشئ ملف سجل تجريبي، استخرج عمود IP باستخدام awk/cut، نظّف المخرجات بـ sed/tr، ثم احسب التكرارات.
  - الرابط: https://www.youtube.com/watch?v=qjqiPF0QBJ0&t=11740s

### المرحلة 14: جدولة المهام — 2 وحدات

تنفيذ المهام مرة واحدة أو بصورة متكررة باستخدام at وcron.

**الهدف:** تفهم كيف تعمل المهام المجدولة وأين تفحصها عند التحقيق في مهمة غير متوقعة.
**المخرج المطلوب:** أنشئ مهمة مجدولة آمنة في المعمل، ثم اعرضها واحذفها.

- **082. Task Scheduling - at** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 64 | 15:34 | **أساسي**
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=64
- **083. Task Scheduling - cron** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 65 | 27:14 | **أساسي**
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=65

### المرحلة 15: خدمات الشبكة على Linux — 7 وحدات

مشاركة الملفات والخدمات الشبكية وخوادم الويب NFS وSamba وApache وNginx.

**الهدف:** تفهم وظيفة كل خدمة ومبدأ تشغيلها ومكان سجلاتها الأساسية.
**المخرج المطلوب:** شغّل خدمة ويب تجريبية داخل المعمل، وتحقق من حالة الخدمة وسجلات الوصول والأخطاء.

- **084. Network Services - NFS** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 66 | 37:45 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=66
- **085. Network Services - samba - cifs - part 1** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 67 | 22:00 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=67
- **086. Network Services - samba-cifs - part 2** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 68 | 49:41 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=68
- **087. Network Services - apache part 1** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 69 | 30:10 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=69
- **088. Network Services - apache part 2** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 70 | 23:28 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=70
- **089. Network Services - apache part 3** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 71 | 19:07 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=71
- **090. Network Services - nginx** — محمد الطناني | Linux Administration Course 2024 – Rocky Linux & Debian | فيديو 72 | 32:21 | **أساسي**
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.
  - الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=72

### المرحلة 16: الاختبار العملي النهائي واستكشاف الأعطال — 3 وحدات

شخّص عطلًا، نفّذ تحدي عبدالله، ثم اختبر مهارات Linux في Bandit 0–34.

**الهدف:** تنجز مهام Linux الأساسية دون متابعة الشرح خطوة بخطوة، وتعرف كيف تبحث عن سبب العطل وتوثق الحل.
**المخرج المطلوب:** أكمل Troubleshooting Challenge وعبدالله Final Challenge، ثم Bandit Levels 0–34 وسجل ما تعلمته.

- **091. إصلاح مشاكل النظام** — عبدالله النعيمي | Linux Course in CyberSecurity [Arabic] | فيديو 24 | غير محددة في الفهرس المرسل | **إضافة مكملة**
  - لماذا هنا: درس تشخيص أعطال مستقل؛ يطبق المعرفة المكتسبة في الخدمات والشبكة والحزم والسجلات على حالات خلل في Linux.
  - التطبيق: شخّص مشكلة مقصودة في VM: ابدأ بفحص الحالة، ثم السجلات، ثم حدد السبب، واختبر الحل، ثم وثّق ما تغيّر.
  - الرابط: https://www.youtube.com/playlist?list=PLtlmgvQV7sDtKQUPF6i6rNA3mIiieeuWp&index=24
- **092. تحدي الكورس الأخير** — عبدالله النعيمي | Linux Course in CyberSecurity [Arabic] | فيديو 27 | 01:15 | **تطبيق عملي**
  - لماذا هنا: تحدٍ ختامي من دورة عبدالله يجمع موضوعات Linux التي درستها. يأتي بعد درس Troubleshooting وقبل معمل Bandit النهائي.
  - التطبيق: حل التحدي بنفسك أولًا، ثم شاهد المحاضرة للتحقق من الحل. سجّل الأوامر والمهارات التي احتجت إلى استخدامها.
  - الرابط: https://www.youtube.com/playlist?list=PLtlmgvQV7sDtKQUPF6i6rNA3mIiieeuWp&index=27
- **093. تطبيق عملي: Bandit Levels 0–34** — Security Jordan / OverTheWire | Bandit – Linux command-line practice | مقطع 08:11:49 + Levels 0–34 | وقت اللاب حسب سرعة الحل | **تطبيق عملي**
  - لماذا هنا: معمل ختامي عملي على OverTheWire Bandit من المستوى 0 إلى 34. ثبّت فيه SSH والملفات المخفية والبحث والصلاحيات والضغط والـ pipes. رابط الفيديو المساعد اختياري عند التعثر؛ المطلوب حل المستويات بنفسك.
  - التطبيق: افتح منصة OverTheWire أولًا وحاول حل كل مستوى بنفسك. استخدم فيديو Security Jordan عند التعثر فقط، وسجّل الأمر أو الفكرة التي تعلمتها. لا تنسخ الحلول مباشرة.
  - الرابط: https://overthewire.org/wargames/bandit/
  - فيديو مساعدة اختياري للمعمل: https://www.youtube.com/watch?v=qjqiPF0QBJ0&t=29509s

## 3. تفسير التصنيفات

- **أساسي:** منظم في قلب المنهج، لا غنى عنه للوصول إلى مستوى إدارة Linux المطلوب.
- **إضافة مكملة:** محتوى جديد محدد يسد فجوة حقيقية؛ ليس إعادة لموضوع سابق. يدرس في موضعه الحالي ولا يؤجل.
- **تطبيق عملي:** تحدٍ أو معمل تنفذه بعد التعلم. يدخل في الإنجاز النهائي.
- **مستبعد للتكرار:** لا يظهر في قائمة الدروس النشطة، ولا يدخل في نسبة الإنجاز. سبب الاستبعاد موضح في سجل كل مصدر.

## 4. تدقيق المصادر الأصلية

### Ahmed Eid – دورة تعلم Linux كاملة باللغة العربية للجميع في 6 ساعات ونصف
- المحاضر: أحمد عيد – TechShots
- الحالة: **مدمج جزئيًا – 3 فصول تأسيسية**
- المستخدم: 3 فصول من الفيديو نفسه: Operating Systems، Virtualization، Setup Linux VM. تظهر كـ3 وحدات متتابعة، لا كـ3 فيديوهات مستقلة.
- المستبعد: بقية الفصول من Linux File System وCLI وCommands وPackage Management وVim وUsers وPermissions وPipes/Redirection؛ لأنها مغطاة في الطناني، ولن نكررها.
- سبب القرار: أحمد عيد مهم لتأسيس فهم أنظمة التشغيل والـKernel والـVirtualization قبل إدارة Linux. أُدرج الجزء الذي يضيف أساسًا جديدًا فقط.
- المصدر: https://www.youtube.com/watch?v=8f2Zsb89uoM

### Linux Administration Course 2024 – 72 Videos
- المحاضر: محمد الطناني – TananyAcademy
- الحالة: **مدمج بالكامل – 72/72 فيديو**
- المستخدم: جميع فيديوهات قائمة Linux Administration وعددها 72، بترتيب القائمة الأصلي.
- المستبعد: لا يوجد فيديو مستبعد من دورة الطناني.
- سبب القرار: هو العمود الرئيسي لإدارة Linux على Debian وRocky: المستخدمون والصلاحيات والعمليات والخدمات والشبكات والسجلات والتخزين وBash والمهام وخدمات الشبكة.
- المصدر: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc

### Linux Course in CyberSecurity – 28 Videos
- المحاضر: عبدالله النعيمي – Abdallah Al-Nuaimy
- الحالة: **مدمج انتقائيًا – 7/28 فيديوهات**
- المستخدم: #14 مصادر البرامج الخارجية؛ #15 عنوان الشبكة والمنافذ؛ #16 اختبارات الاتصال؛ #17 فحص المنافذ والخدمات؛ #21 أدوات مراقبة النظام؛ #24 إصلاح مشاكل النظام؛ #27 التحدي النهائي (مُصنف تطبيقًا عمليًا).
- المستبعد: #01–13 أساسيات وتثبيت وأوامر ومستخدمون وصلاحيات مغطاة بأحمد/الطناني؛ #18 Shell Scripting و#19 Scheduling مغطاة بالطناني وBash المكمل؛ #20 العمليات و#22 الخدمات مغطاة بالطناني؛ #23 System Logs مستبعد لأنه يكرر rsyslog/journald في الطناني #37–38؛ #25 Linux in Penetration Testing محفوظ كمعرفة هجومية في مرجع SOC؛ #26 Shell مكرر؛ #28 خاتمة.
- سبب القرار: احتفظنا فقط بالدروس السبعة التي تضيف Network Diagnostics وMonitoring وTroubleshooting وتحديًا ختاميًا. استبعدنا فيديو System Logs #23 صراحةً لتجنب التكرار.
- المصدر: https://www.youtube.com/playlist?list=PLtlmgvQV7sDtKQUPF6i6rNA3mIiieeuWp

### Security Jordan – Linux Course in CyberSecurity [Arabic] (Part 1)
- المحاضر: Security Jordan
- الحالة: **مستبعد من Linux النشط بسبب التكرار؛ محفوظ في سجل المصادر**
- المستخدم: تمت مراجعة فهرس الفيديو المعلن: Kali/Virtualization، file types، filesystem، shell/TTY، commands، users/groups، shadow/password aging، permissions، searching، redirection، vim، compression، links، processes، scheduling.
- المستبعد: لم نضف الفيديو كاملًا لأن هذه المحاور مغطاة في أحمد عيد والطناني وعبدالله بصورة كافية. لا تعِد 20 ساعة لتعلم نفس المهارات.
- سبب القرار: محتوى مفيد لكن تكراره مرتفع. لو احتجت Kali installation لاحقًا، استخدمه كمرجع مستقل وليس كمتطلب Linux.
- المصدر: https://www.youtube.com/watch?v=JBGnzEtimmg

### Security Jordan – Linux Course in CyberSecurity [Arabic] (Part 2)
- المحاضر: Security Jordan
- الحالة: **مدمج جزئيًا – فصلان + مرجع معمل**
- المستخدم: Linux Authentication 02:14:05–02:24:10 (10:05)؛ AWK/SED/CUT/TR 03:15:40–04:38:10 (1:22:30)؛ Bandit walkthrough عند 08:11:49 كمرجع مساعدة لمعمل 0–34.
- المستبعد: Boot Process وServices وNetwork وSSH وSystem Logs وPackage Management لأنها مغطاة في الطناني وعبدالله. System Logs في هذا الفيديو مستبعد أيضًا لتجنب تكرار الطناني #37–38 وعبدالله #23 المستبعد. فصل Bash العام مكرر؛ أخذنا الإضافات العملية من فيديو Bash المنفصل.
- سبب القرار: اخترنا فصل المصادقة كاستكمال محدد، ومعالجة النصوص كمهارة أساسية لاستخراج بيانات السجلات، وBandit كتطبيق ختامي. لا نعيد بقية شرح إدارة Linux.
- المصدر: https://www.youtube.com/watch?v=qjqiPF0QBJ0

### Bash Scripting Course Tutorial Arabic (Level 0) – video shared at playlist index 29
- المحاضر: اسم المحاضر لم يتم تثبيته من بيانات الرابط المرسلة
- الحالة: **الفيديو الذي أرسلته مستبعد كتكرار؛ بقية القائمة غير مكتملة البيانات**
- المستخدم: الفيديو المحدد الذي وصلنا رابطه هو While Loop Part 1.
- المستبعد: لم نفهرس باقي القائمة لأن الرابط الذي شاركته يحدد فيديو #29 فقط، ولم تتوفر عناوين/مدد بقية الفيديوهات في بيانات موثوقة. لا نخترع محتوى أو أرقامًا.
- سبب القرار: موضوع While Loop مغطى في الطناني #61–62 وفي مقطع Loops من Security Jordan Bash Full Course. تكرار الفيديو نفسه غير مطلوب.
- المصدر: https://www.youtube.com/watch?v=SWDrATjXYlo&list=PLBdyyeW_Z41DykncH9zzMk8T7Rm5UlZXd&index=29

### Security Jordan – Bash Scripting Full Course (under 3 hours)
- المحاضر: Security Jordan
- الحالة: **مدمج انتقائيًا – 8 مقاطع من فيديو واحد**
- المستخدم: مقطع واحد مدمج لإنشاء أول Script + Shebang + التشغيل؛ ثم User Input؛ Operators؛ System Information Project؛ Ping Checker Project؛ قراءة الملفات سطرًا بسطر؛ Arrays؛ Functions.
- المستبعد: التعريفات التمهيدية وBash/Terminal basics والمتغيرات وIf Statements وأساسيات الحلقات التي يغطيها الطناني #55–63. لا نعيد فصولها.
- سبب القرار: أُخذت الإضافات العملية غير المغطاة بالكامل في دورة الإدارة، مع دمج ثلاثة فصول متصلة في درس واحد لتجنب تضخيم العدد.
- المصدر: https://www.youtube.com/watch?v=M5-MCMrC0sI

### Security Jordan – Blue Team & SOC Foundations (3 videos)
- المحاضر: Security Jordan
- الحالة: **مؤجل في تبويب SOC**
- المستخدم: الفيديو 01 Roadmap؛ الفيديو 02 SOC Fundamentals/SIEM/Logs/Alerts؛ الفيديو 03 SOC Workflow/Triage/Investigation.
- المستبعد: لا يدخل في Linux الحالي؛ سيبدأ بعد Linux وSecurity+.
- سبب القرار: محتوى SOC وليس Linux Administration. محفوظ كأول مرحلة مستقبلية.
- المصدر: https://www.youtube.com/@securityjordan6081/playlists

### Linux Practical Guide – 9 Videos
- المحاضر: م. مصطفى عبدالسلام – Free4Arab / Information Technology
- الحالة: **غير مدمج بسبب التكرار؛ محفوظ في التدقيق**
- المستخدم: لا توجد فيديوهات إلزامية مضافة منه؛ تم فحص القائمة ذات 9 فيديوهات.
- المستبعد: Setting Up Lab، OS Overview، Linux Intro، Debian Install، VBox Tools، Filesystem، Directory Structure، Users/Groups/Permissions، Terminal.
- سبب القرار: محتواه تمهيدي، وأحمد عيد يغطي OS/Virtualization ثم الطناني يغطي تثبيت Debian/Rocky والملفات والمستخدمين والصلاحيات والطرفية بمستوى أوسع. لا نحتاج دورة تأسيسية أخرى كاملة.
- المصدر: https://www.youtube.com/watch?v=rfonmgAfV98&list=PLLlr6jKKdyK2XmYvNZhqwUDEnZOlQAWS-

### Ethical Hacking – 6 Hours (video supplied by user)
- المحاضر: القناة الظاهرة في رابط الفيديو؛ اسم المدرّب غير مثبت هنا
- الحالة: **مؤجل في تبويب SOC**
- المستخدم: في المرحلة القادمة نستخدم الأجزاء ذات الصلة بالدفاع: Nmap/Recon، MITM، ARP/DNS spoofing، Wireshark، وفهم آثار الاستغلال.
- المستبعد: Kali/Linux basics، Payloads، Meterpreter، BeEF والتفاصيل الهجومية ليست من أهداف مرحلة Linux الحالية ولا من أولويات L1.
- سبب القرار: الفيديو دورة هجومية مستقلة، وليست Linux Administration. نستفيد من بعض الأجزاء لفهم ما يجب على Blue Team اكتشافه، لا لإعادة مسار Pentesting كامل.
- المصدر: https://www.youtube.com/watch?v=qaNZKH5NohQ

## 5. فهارس المحاضرات التي تمت مراجعتها

### أحمد عيد — الفصول الـ12
- 00:00:11 — Introduction to Operating Systems — مدمج – بداية Linux track
- 00:52:17 — Introduction to Virtualization and Virtual Machines — مدمج – بداية Linux track
- 01:19:36 — Setup Linux Virtual Machine — مدمج – بداية Linux track
- 01:49:20 — Linux File System — مستبعد كتكرار مع الطناني #07–11
- 02:48:01 — GUI vs Command Line Interface — مستبعد كتكرار مع الطناني #05 وما بعده
- 02:58:27 — Basic Linux Commands — مستبعد كتكرار مع الطناني #05–11
- 03:45:50 — Package Management — مستبعد كتكرار مع الطناني #39–42
- 04:28:38 — Vi and Vim — مستبعد كتكرار مع الطناني #29
- 04:54:44 — Linux User Accounts — مستبعد كتكرار مع الطناني #12–18
- 05:26:36 — File Ownership and Permissions — مستبعد كتكرار مع الطناني #19–24
- 06:05:27 — Pipes and Redirects — مستبعد كتكرار مع الطناني #28
- 06:30:46 — What's next? Shell Scripting and Ansible? — خاتمة – لا درس Linux مستقل

### مصطفى عبدالسلام — القائمة ذات 9 فيديوهات
- #01 — Setting Up a Lab — 10:19
- #02 — Overview of Operating Systems — 24:04
- #03 — Introduction to Linux — 45:04
- #04 — Installing Debian Linux — 33:19
- #05 — Installing VBox Tools — 20:12
- #06 — Linux File System — 16:16
- #07 — Linux Directory Structure — 29:40
- #08 — Linux Users & Groups - Permissions — 30:29
- #09 — Linux Terminal — 16:54

### عبدالله النعيمي — القائمة ذات 28 فيديو
- #01 — مقدمة الكورس — غير مذكورة
- #02 — تاريخ نظام Linux باختصار — غير مذكورة
- #03 — ما هو نظام Linux ولماذا نستخدمه؟ — غير مذكورة
- #04 — توزيعات نظام Linux باختصار — غير مذكورة
- #05 — تحميل نظام Kali Linux على Windows — غير مذكورة
- #06 — مفهوم Terminal وShell في Linux — غير مذكورة
- #07 — مفهوم نظام ملفات Linux وطريقة التعامل معه — غير مذكورة
- #08 — إنشاء وإدارة الملفات في Linux — غير مذكورة
- #09 — أوامر نظام Linux — غير مذكورة
- #10 — إدارة المستخدمين والجروبات — غير مذكورة
- #11 — الصلاحيات والملكية — غير مذكورة
- #12 — أداة sudo وشرح مفهوم root — غير مذكورة
- #13 — استخدام APT Package Manager — غير مذكورة
- #14 — التحميل من مصادر خارجية — 02:16
- #15 — مفهوم عنوان الشبكة والمنافذ في Linux — غير مذكورة
- #16 — اختبارات الاتصال — 04:20
- #17 — فحص بورتات وخدمات الشبكة — 07:57
- #18 — كتابة سكربتات Shell — غير مذكورة
- #19 — المهام المجدولة — غير مذكورة
- #20 — إدارة العمليات — غير مذكورة
- #21 — أدوات مراقبة النظام — غير مذكورة
- #22 — خدمات Linux — غير مذكورة
- #23 — سجلات النظام — 11:58 — مستبعد كتكرار مع الطناني #37–38؛ لا تشاهده ضمن المنهج.
- #24 — إصلاح مشاكل النظام — غير مذكورة
- #25 — استخدام Linux في بيئة اختبار الاختراق — غير مذكورة
- #26 — مفهوم Shell واستخدامه — غير مذكورة
- #27 — تحدي الكورس الأخير — 01:15 — مدمج كتطبيق عملي ختامي بعد Troubleshooting.
- #28 — خاتمة الكورس والخطوات القادمة — غير مذكورة

### Security Jordan — Linux Part 1: الفصول الـ27
- 00:00 — مقدمة إلى Kali Linux — مستبعد: تثبيت/بيئة Kali ليست مطلوبة لمسار إدارة Linux، والـ VM والتوزيعات مغطاة بأحمد عيد والطناني.
- 03:42 — Virtualization — مستبعد: مغطى بأحمد عيد في بداية المسار.
- 06:13 — OVA وملفات الأجهزة الافتراضية — مستبعد: مغطى في تجهيز المعمل.
- 07:30 — تحميل Kali وVirtualBox — مستبعد: نستخدم Rocky وDebian في مسار الإدارة، وKali ليس نظام السيرفر الأساسي هنا.
- 08:59 — تثبيت Kali Linux — مستبعد: التثبيت الأساسي مغطى بالطناني؛ Kali ليس مطلوبًا لـSOC Linux administration.
- 18:08 — Kali Documentation — مرجع فقط: يمكن استخدام توثيق Kali عند دراسة أدواته لاحقًا.
- 18:53 — Kali Undercover Mode — مستبعد: ميزة شكلية خاصة بـKali وليست مهارة إدارة أو SOC.
- 21:08 — Kali Documentation – متابعة — مرجع فقط.
- 22:04 — Linux File Types — مستبعد كتكرار مع File System في الطناني.
- 31:00 — Linux File System — مستبعد كتكرار مع الطناني #07–11.
- 46:42 — Shell Prompt — مستبعد كتكرار مع الطناني #05–06.
- 52:14 — TTY — مستبعد كتكرار مع الطناني #05.
- 57:00 — Shell Types — مستبعد كتكرار وظيفي مع أساسيات Shell لدى الطناني.
- 57:41 — Linux Commands — مستبعد كتكرار مع الطناني #06–11.
- 01:35:22 — Help / man / info — مستبعد كتكرار مع الطناني #25.
- 01:45:55 — Users and Groups — مستبعد كتكرار مع الطناني #12–18.
- 02:41:58 — User Management — مستبعد كتكرار مع الطناني #12–18.
- 03:33:28 — Shadow File وPassword Aging — مستبعد كتكرار مع الطناني #17–18.
- 04:32:25 — File Permissions — مستبعد كتكرار مع الطناني #19–22.
- 05:33:33 — Special Permissions — مستبعد كتكرار مع الطناني #23–24.
- 06:18:55 — Searching — مستبعد كتكرار مع الطناني #26–27.
- 06:49:30 — Redirection — مستبعد كتكرار مع الطناني #28.
- 07:12:35 — Vim — مستبعد كتكرار مع الطناني #29.
- 07:40:55 — Compression — مستبعد كتكرار مع الطناني #30.
- 08:18:15 — Inodes and Links — مستبعد كتكرار مع الطناني #31.
- 08:38:40 — Processes — مستبعد كتكرار مع الطناني #32–33.
- 09:28:45 — Task Scheduling — مستبعد كتكرار مع الطناني #64–65.

### Security Jordan — Linux Part 2: الفصول الـ11
- 00:00 — Linux Boot Process — مستبعد كتكرار مع الطناني #34.
- 00:11:50 — Services and Daemons — مستبعد كتكرار مع الطناني #34.
- 00:43:36 — Manage Linux Network — مستبعد كتكرار وظيفي مع الطناني #35 وعبدالله #15–17.
- 01:10:00 — Cryptography Fundamentals — مغطى بالمبادئ في Security+؛ لا نعيده في Linux.
- 01:49:00 — Secure Shell (SSH) — مستبعد كتكرار مع الطناني #36.
- 02:14:05 — Understanding Linux Authentication — مدمج في Linux كإضافة مكملة مدتها 10:05؛ الفصل 02:14:05–02:24:10. ركّز على آلية المصادقة وتجاوز ما يكرر إدارة المستخدمين وShadow.
- 02:24:10 — System Logs: rsyslog وSystemd Journal — مستبعد كتكرار: ندرس الطناني #37–38 فقط. كما استُبعد فيديو عبدالله #23 لأنه يعالج الموضوع نفسه؛ لا تفتح أيًا منهما مرة ثانية.
- 03:15:40 — Printf وAWK وSED وCUT وTR — مدمج في Linux — تسلسل الدرس #84.
- 04:38:10 — Linux Package Management — مستبعد كتكرار مع الطناني #39–42.
- 05:20:15 — Bash Scripting — مستبعد كشرح أساسي مكرر؛ نستخدم مقاطع Bash المنفصلة ذات المشاريع والتطبيقات التي تكمل الطناني.
- 08:11:49 — Bandit walkthrough Levels 0–34 — مدمج كمعمل Linux ختامي: المستويات 0–34.

### Security Jordan — Bash Full Course
- 00:00:00 — Introduction — مقدمة عامة؛ لا تُحتسب كوحدة مستقلة.
- 00:02:35 — What is Bash? — مستبعد: تعريفات أساسية ضمن الطناني #05 و#55.
- 00:03:49 — What is Bash Scripting? — مستبعد: الفكرة العامة مغطاة في الطناني #55.
- 00:04:34 — Why should I learn Bash scripting? — مقدمة تحفيزية وليست مهارة تنفيذية مستقلة.
- 00:06:04 — Is Bash a programming language? — معلومة تعريفية؛ لا تحتاج درسًا منفصلًا.
- 00:06:43 — Terminal / Shell / Bash — مستبعد: مغطى بالطناني #05.
- 00:13:24 — First Script + Shebang + Running — مدمج في وحدة واحدة مدتها 10:59.
- 00:24:23 — Variables — مستبعد: مغطى بالطناني #56.
- 00:37:36 — Reading User Input — مدمج – إضافة مكملة.
- 00:48:44 — Operators — مدمج – إضافة مكملة لتوسيع استخدام المقارنات والعمليات داخل السكربت.
- 01:07:52 — If Statements — مستبعد: مغطى بالطناني #60.
- 01:30:10 — Project 1 – System Information — مدمج – تطبيق عملي.
- 01:38:08 — Project 2 – Ping Checker — مدمج – تطبيق عملي.
- 01:45:16 — Loops / Reading Files Line by Line — مدمج – التركيز على قراءة الملف سطرًا بسطر؛ أساسيات الحلقات مغطاة بالطناني #61–62.
- 02:19:10 — Arrays — مدمج – إضافة مكملة غير موجودة في فهرس الطناني.
- 02:28:45 — Functions — مدمج – إضافة مكملة غير موجودة في فهرس الطناني.
- 02:51:10 — End — خاتمة.

### قائمة Bash المنفصلة التي أرسلها المستخدم
- #29 — While Loop Part 1 — مستبعد كتكرار: While Loop مغطاة في الطناني #61، والجزء العملي لقراءة الملفات سطرًا بسطر مأخوذ من فيديو Bash Full Course. لا تضف هذا الفيديو مرة ثانية. — https://www.youtube.com/watch?v=SWDrATjXYlo&list=PLBdyyeW_Z41DykncH9zzMk8T7Rm5UlZXd&index=29

## 6. ما الذي حُذف من العدد السابق؟

- حذفنا عبدالله النعيمي #23 (System Logs) من المنهج النشط؛ لأنه يعيد موضوع rsyslog/journald الذي يدرسه الطناني في #37–38. لا تشاهده مرة ثانية ضمن هذا المسار.
- دمجنا مقاطع Security Jordan المتتابعة (First Script + Shebang + Running) في **وحدة واحدة** مدتها 10:59؛ لأنها أجزاء متصلة من فيديو واحد.
- حسبنا فصل Linux Authentication من Security Jordan Part 2 لمدة **10:05** من 02:14:05 حتى بداية الفصل التالي 02:24:10.
- نقلنا عبدالله #27 (Final Challenge) إلى تصنيف تطبيق عملي، لأنه تحدٍ تطبيقي لا محاضرة نظرية.
- أصبحت النتيجة 93 وحدة بدل 96 وحدة سابقة. ولم نعد نستخدم تسمية «استكمال مطلوب»؛ استُبدلت بـ«إضافة مكملة» لتوضيح معناها.

## 7. التقدم والحفظ

- تقدم Linux مستقل عن SOC.
- تبويب SOC لا يدخل في نسبة Linux، ويبدأ بعد تعليم المتطلبين: إنهاء Linux وإنهاء CompTIA Security+.
- يحفظ المتصفح التقدم والملاحظات محليًا، مع تصدير/استيراد JSON.
- عند الترقية من نسخة سابقة: يتم حذف درس السجلات المكرر، ولا تُعتبر مقاطع Bash الثلاثة القديمة منجزة كوحدة واحدة إلا إذا كانت المقاطع الثلاثة القديمة كلها معلّمة كمكتملة.

## 8. مرجع SOC المستقبلي

- 10 مراحل مرجعية، وبها 51 خطوة محفوظة.
- المحاور الأربعة: Log Analysis، MITRE ATT&CK، EDR، Hands-On SOC Skills.
- وتُضاف الأدوات والموضوعات الرابطة: SOC Fundamentals، SIEM، Incident Response، Threat Hunting، Detection Engineering، Home Lab، Network Investigation.
- هذا القسم مرجع للمستقبل فقط؛ لا يخلط مع منهج Linux الحالي.
