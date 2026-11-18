# التدقيق النهائي للمسار: Linux الآن → SOC لاحقًا

> **قاعدة الدراسة:** تبويب Linux هو المنهج النشط الوحيد الآن. كل درس فيه مطلوب ويُحسب في الإنجاز. تبويب SOC مرجع مستقبلي لا تبدأه قبل إكمال Linux وSecurity+. لا توجد قائمة "توسع" أو "ارجع لها لاحقًا" داخل Linux.

## أرقام النسخة

- دروس Linux النشطة: **96** في **16 مراحل**.
- الدروس النشطة كلها مطلوبة: أساسي / استكمال مطلوب / تطبيق عملي.
- وقت الفيديوهات ذي المدة المنشورة: **36 ساعة و15 دقيقة و21 ثانية**، بالإضافة إلى 5 عناصر دون مدة منفصلة منشورة أو لابات تعتمد على سرعة التنفيذ.
- تبويب SOC: **10 مراحل** تحفظ الخطة بعد Linux وSecurity+.

## ماذا أُدرج في Linux؟

### التمهيد وتجهيز معمل Linux — 3 درسًا

فهم نظام التشغيل والـ Kernel والـ Virtualization قبل التثبيت.

**مخرج المرحلة:** جهاز افتراضي واحد جاهز، ولقطة Snapshot قبل بدء التعديلات.

- **001. Introduction to Operating Systems** — أحمد عيد، دورة تعلم Linux كاملة باللغة العربية للجميع في 6 ساعات ونصف، Chapter 00:00:11–00:52:17، 52:06، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/watch?v=8f2Zsb89uoM&t=11s)
  - لماذا هنا: فهم مكونات نظام التشغيل والعلاقة بين النظام والبرامج والعتاد قبل دخول Linux.
  - التطبيق: اكتب مقارنة مختصرة بين وظيفة النظام والنواة والخدمات.

- **002. Introduction to Virtualization and Virtual Machines** — أحمد عيد، دورة تعلم Linux كاملة باللغة العربية للجميع في 6 ساعات ونصف، Chapter 00:52:17–01:19:36، 27:19، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/watch?v=8f2Zsb89uoM&t=3137s)
  - لماذا هنا: فهم الـ Hypervisor والـ VM ولماذا سنستخدم أجهزة افتراضية لمعزل Linux lab.
  - التطبيق: ارسم Host → Hypervisor → Guest VM، وحدد موارد كل جهاز افتراضي.

- **003. Setting Up a Linux Virtual Machine** — أحمد عيد، دورة تعلم Linux كاملة باللغة العربية للجميع في 6 ساعات ونصف، Chapter 01:19:36–01:49:20، 29:44، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/watch?v=8f2Zsb89uoM&t=4776s)
  - لماذا هنا: تجهيز جهاز Linux افتراضي قبل تثبيت بيئة الإدارة.
  - التطبيق: أنشئ VM وخذ Snapshot قبل بدء التغييرات.

### التوزيعات والتثبيت وسطر الأوامر — 11 درسًا

تثبيت Rocky وDebian وبناء أساس التعامل اليومي مع Shell وملفات Linux.

**مخرج المرحلة:** Rocky Linux وDebian مثبتان، ومجلد تدريب يحتوي على ملفات ومجلدات تجريبية.

- **004. Intro and Linux History - Linux course 2024** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 01، 19:55، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=1)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **005. Linux Distributions, download Debian and Rocky** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 02، 20:44، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=2)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **006. Install Rocky Linux on VMWare Workstation and Virtual Box** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 03، 27:48، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=3)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **007. Install Debian on VMWare Workstation and Virtual Box** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 04، 16:29، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=4)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **008. Accessing Shell, Terminal and switch tty** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 05، 18:36، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=5)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **009. date, cal, whoami, su, pwd, clear - Linux Course** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 06، 15:14، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=6)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **010. Linux File System Hierarchy** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 07، 22:59، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=7)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **011. Navigation, absolute path and relative path** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 08، 18:17، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=8)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **012. Command options, arguments, touch, cat, nano, mkdir** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 09، 27:27، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=9)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **013. copy, move file and directory** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 10، 16:23، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=10)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **014. rename, remove, command shortcuts** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 11، 19:42، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=11)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

### المستخدمون والمجموعات والصلاحيات — 13 درسًا

إدارة الحسابات وملفات كلمات المرور والصلاحيات العادية والخاصة.

**مخرج المرحلة:** أنشئ مستخدمًا ومجموعة، وطبّق صلاحيات مختلفة، ثم اختبر الوصول بحساب غير إداري.

- **015. Describe Users and Groups Concepts** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 12، 23:22، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=12)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **016. Gain Superuser Access** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 13، 25:10، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=13)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **017. Create users from Command Line** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 14، 20:35، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=14)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **018. modify existing users, delete users, more, less, head, tail** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 15، 21:29، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=15)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **019. Manage local groups** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 16، 17:10، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=16)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **020. Shadow file format** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 17، 27:26، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=17)
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **021. Configure Password Aging** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 18، 31:46، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=18)
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **022. Linux File System Permissions** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 19، 11:58، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=19)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **023. Change Permissions with Symbolic Method** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 20، 14:58، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=20)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **024. Change Permission With Octal Method** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 21، 15:29، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=21)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **025. Change User or Group Ownership** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 22، 11:43، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=22)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **026. special permissions and umask part 1** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 23، 20:31، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=23)
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **027. special permission and umask part 2** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 24، 31:06، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=24)
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

### البحث والملفات والمخرجات — 7 درسًا

البحث عن الملفات والنصوص، والتحكم في الإدخال والإخراج والتحرير والأرشفة.

**مخرج المرحلة:** ملف أوامر شخصي يحتوي أمثلة موثقة لـ find وgrep وredirection وvim وtar/gzip.

- **028. help, man pages, info pages** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 25، 20:05، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=25)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **029. searching files and directories, locate, grep, whereis, whatis Linux - Course 2024** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 26، 16:27، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=26)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **030. Searching using find** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 27، 19:36، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=27)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **031. redirection, standard in, standard out, standard error** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 28، 21:02، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=28)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **032. edit text file using vim and vim advanced options** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 29، 29:22، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=29)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **033. Compressing and Archiving** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 30، 24:10، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=30)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **034. Inodes and Soft link and Hard link** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 31، 28:32، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=31)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

### العمليات والإقلاع والخدمات ومراقبة النظام — 4 درسًا

فهم العمليات والخدمات ومراقبة موارد Linux.

**مخرج المرحلة:** تقرير صغير عن العمليات والخدمات النشطة على جهازك الافتراضي.

- **035. Monitor and Manage Linux Processes part1** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 32، 29:57، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=32)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **036. Monitor and Manage Linux Processes part2** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 33، 27:40، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=33)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **037. Linux Boot Process, and Control Services and Daemons** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 34، 34:59، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=34)
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **038. أدوات مراقبة النظام** — عبدالله النعيمي، Linux Course in CyberSecurity [Arabic]، فيديو 21، غير محددة في الفهرس المرسل، التصنيف: استكمال مطلوب. [فتح المصدر](https://www.youtube.com/playlist?list=PLtlmgvQV7sDtKQUPF6i6rNA3mIiieeuWp&index=21)
  - لماذا هنا: استكمال عملي لمراقبة استهلاك الموارد وحالة النظام بعد تعلم إدارة العمليات والخدمات.
  - التطبيق: راقب CPU وRAM والعمليات النشطة، وسجّل ما يستهلك الموارد.

### الشبكات والاتصال وSSH وفحص الخدمات — 5 درسًا

إعداد الشبكة من Linux، واختبار الاتصال، وفهم المنافذ والخدمات والاتصال الآمن.

**مخرج المرحلة:** خريطة صغيرة لاتصالات جهاز Linux ومنافذه وخدمة SSH.

- **039. مفهوم عنوان الشبكة والمنافذ في Linux** — عبدالله النعيمي، Linux Course in CyberSecurity [Arabic]، فيديو 15، غير محددة في الفهرس المرسل، التصنيف: استكمال مطلوب. [فتح المصدر](https://www.youtube.com/playlist?list=PLtlmgvQV7sDtKQUPF6i6rNA3mIiieeuWp&index=15)
  - لماذا هنا: يربط إعداد Linux بعنوان IP والمنفذ والخدمة التي تستقبل الاتصال.
  - التطبيق: اعرض عنوان IP والواجهات والمنافذ المستمعة على جهاز المعمل.

- **040. اختبارات الاتصال** — عبدالله النعيمي، Linux Course in CyberSecurity [Arabic]، فيديو 16، 04:20، التصنيف: استكمال مطلوب. [فتح المصدر](https://www.youtube.com/playlist?list=PLtlmgvQV7sDtKQUPF6i6rNA3mIiieeuWp&index=16)
  - لماذا هنا: تطبيق اختبارات الاتصال وتفسير نجاح الاتصال أو فشله من داخل Linux.
  - التطبيق: نفّذ ping وtracepath أو traceroute إن توفر، وقارن النتائج.

- **041. Manage Network, Network Manager** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 35، 38:07، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=35)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **042. Diffie-Hellman, Configure and Secure SSH** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 36، 47:44، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=36)
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **043. فحص بورتات وخدمات الشبكة** — عبدالله النعيمي، Linux Course in CyberSecurity [Arabic]، فيديو 17، 07:57، التصنيف: استكمال مطلوب. [فتح المصدر](https://www.youtube.com/playlist?list=PLtlmgvQV7sDtKQUPF6i6rNA3mIiieeuWp&index=17)
  - لماذا هنا: تتعرف على المنافذ والخدمات المكشوفة من منظور إدارة النظام والتحقق.
  - التطبيق: افحص أجهزة المعمل المملوكة لك فقط، واربط المنفذ بالخدمة التي تستمع عليه.

### المصادقة والتحقق من الهوية — 1 درسًا

استكمال الجانب الأمني لتسجيل الدخول والمصادقة على Linux.

**مخرج المرحلة:** ملاحظة عملية تشرح مسار مصادقة SSH والملفات/السجلات ذات الصلة.

- **044. Understanding Linux Authentication** — Security Jordan، تعلم Kali Linux من الصفر | الجزء الثاني من دورة Linux الشاملة، 02:14:05، غير محددة في الفهرس، التصنيف: استكمال مطلوب. [فتح المصدر](https://www.youtube.com/watch?v=qjqiPF0QBJ0&t=8045s)
  - لماذا هنا: يضيف منظورًا أمنيًا لفهم المصادقة على Linux بعد فهم المستخدمين وSSH؛ ركّز على علاقة الحساب وسياسة الدخول والسجلات.
  - التطبيق: دوّن أين تبحث عن أثر محاولة مصادقة، وما الفرق بين الحساب والصلاحية وآلية الدخول.

### سجلات Linux وتحليلها — 3 درسًا

تخزين السجلات باستخدام rsyslog وjournald، ثم قراءة سجلات النظام عمليًا.

**مخرج المرحلة:** نفّذ تسجيل دخول ناجحًا وفاشلًا في معملك، ثم استخرج السجل المرتبط بهما.

- **045. سجلات النظام** — عبدالله النعيمي، Linux Course in CyberSecurity [Arabic]، فيديو 23، 11:58، التصنيف: استكمال مطلوب. [فتح المصدر](https://www.youtube.com/playlist?list=PLtlmgvQV7sDtKQUPF6i6rNA3mIiieeuWp&index=23)
  - لماذا هنا: تطبيق مختصر على قراءة سجلات النظام وربط الرسائل بالخدمة والوقت والمصدر بعد دراسة rsyslog وjournald.
  - التطبيق: استخرج رسائل خدمة محددة من السجل وقارن وقتها بحالة الخدمة.

- **046. Analyze and Store Logs - rsyslog** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 37، 35:09، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=37)
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **047. Analyze and Store Logs - Systemd journald** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 38، 42:13، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=38)
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

### إدارة الحزم ومصادر البرامج — 5 درسًا

فهم الحزم والسكريبتات ومديري الحزم في Debian وRed Hat والتحقق من مصادر التثبيت.

**مخرج المرحلة:** وثّق عملية تثبيت وتحديث حزمة على Debian وعلى Rocky، ودوّن مصدرها.

- **048. difference between Packages and scripts, dpkg for debian** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 39، 31:41، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=39)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **049. debian package manager - apt** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 40، 43:59، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=40)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **050. redhat package manager (RPM)** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 41، 24:18، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=41)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **051. redhat package manager (dnf - yum)** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 42، 34:56، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=42)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **052. تحميل البرامج من مصادر خارجية** — عبدالله النعيمي، Linux Course in CyberSecurity [Arabic]، فيديو 14، 02:16، التصنيف: استكمال مطلوب. [فتح المصدر](https://www.youtube.com/playlist?list=PLtlmgvQV7sDtKQUPF6i6rNA3mIiieeuWp&index=14)
  - لماذا هنا: افهم كيفية التعامل مع مصادر البرامج الخارجية، ولماذا يجب التحقق من المصدر والتوقيع قبل التثبيت.
  - التطبيق: اختبر إضافة/مصدر موثوق في VM فقط، ثم وثّق كيف تتحقق من مصدر الحزمة.

### أنظمة الملفات والتخزين وRAID وLVM — 11 درسًا

الوصول إلى أنظمة الملفات وإدارة الأقراص والـ partitions وSwap والتخزين المتقدم.

**مخرج المرحلة:** نفّذ تجربة mount وLVM على قرص افتراضي إضافي فقط، وليس على قرص جهازك الحقيقي.

- **053. Access Linux File Systems** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 43، 32:04، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=43)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **054. Manage Basic Storage using fdisk** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 44، 31:53، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=44)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **055. Manage Basic Storage part2 - fstab** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 45، 42:30، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=45)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **056. Manage Basic Storage part3 using gdisk** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 46، 27:10، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=46)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **057. Swap Management File and Partition** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 47، 24:53، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=47)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **058. Manage Advanced Storage - RAID theory** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 48، 17:54، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=48)
  - لماذا هنا: جزء من اكتمال إدارة Linux. افهم المفهوم ونفّذ على قرص افتراضي إضافي فقط؛ لا تغيّر أقراص جهازك الفعلية.
  - التطبيق: أنشئ قرصًا افتراضيًا إضافيًا للتجربة، ثم نفّذ خطوات إدارة التخزين بأمان على القرص الافتراضي.

- **059. Manage Advanced Storage - RAID Practical and configuration** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 49، 29:35، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=49)
  - لماذا هنا: جزء من اكتمال إدارة Linux. افهم المفهوم ونفّذ على قرص افتراضي إضافي فقط؛ لا تغيّر أقراص جهازك الفعلية.
  - التطبيق: أنشئ قرصًا افتراضيًا إضافيًا للتجربة، ثم نفّذ خطوات إدارة التخزين بأمان على القرص الافتراضي.

- **060. Manage Advanced Storage - LVM part 1** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 50، 34:16، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=50)
  - لماذا هنا: جزء من اكتمال إدارة Linux. افهم المفهوم ونفّذ على قرص افتراضي إضافي فقط؛ لا تغيّر أقراص جهازك الفعلية.
  - التطبيق: أنشئ قرصًا افتراضيًا إضافيًا للتجربة، ثم نفّذ خطوات إدارة التخزين بأمان على القرص الافتراضي.

- **061. Manage Advanced Storage - LVM part 2** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 51، 32:26، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=51)
  - لماذا هنا: جزء من اكتمال إدارة Linux. افهم المفهوم ونفّذ على قرص افتراضي إضافي فقط؛ لا تغيّر أقراص جهازك الفعلية.
  - التطبيق: أنشئ قرصًا افتراضيًا إضافيًا للتجربة، ثم نفّذ خطوات إدارة التخزين بأمان على القرص الافتراضي.

- **062. Manage Advanced Storage - LVM part 3** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 52، 31:53، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=52)
  - لماذا هنا: جزء من اكتمال إدارة Linux. افهم المفهوم ونفّذ على قرص افتراضي إضافي فقط؛ لا تغيّر أقراص جهازك الفعلية.
  - التطبيق: أنشئ قرصًا افتراضيًا إضافيًا للتجربة، ثم نفّذ خطوات إدارة التخزين بأمان على القرص الافتراضي.

- **063. Manage Advanced Storage - LVM part 4** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 53، 20:21، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=53)
  - لماذا هنا: جزء من اكتمال إدارة Linux. افهم المفهوم ونفّذ على قرص افتراضي إضافي فقط؛ لا تغيّر أقراص جهازك الفعلية.
  - التطبيق: أنشئ قرصًا افتراضيًا إضافيًا للتجربة، ثم نفّذ خطوات إدارة التخزين بأمان على القرص الافتراضي.

### أساسيات Bash وShell Scripting — 10 درسًا

من فهم الـ Shell إلى المتغيرات والحسابات والنصوص والشروط والحلقات وCase.

**مخرج المرحلة:** اكتب سكربتًا يقرأ قيمة من المستخدم ويتحقق منها ثم يعرض نتيجة واضحة.

- **064. Improving Command Line** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 54، 25:49، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=54)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **065. Shell Scripting Intro - Interpreter, Compiler, Program, Application, Script** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 55، 33:13، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=55)
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **066. Shell Scripting Variables, echo, tr** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 56، 26:38، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=56)
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **067. Shell Scripting Arithmetic Calculation** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 57، 24:13، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=57)
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **068. Remaining topics to complete the course** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 58، 07:04، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=58)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **069. Shell Scripting - String** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 59، 17:26، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=59)
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **070. Shell Scripting - if statement** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 60، 25:26، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=60)
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **071. Shell Scripting - While Loop** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 61، 14:30، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=61)
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **072. Shell Scripting - For loop** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 62، 15:25، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=62)
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **073. Shell Scripting - Case statement** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 63، 15:28، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=63)
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

### استكمال Bash بالمشاريع والدوال والمصفوفات — 10 درسًا

استكمال النواقص العملية التي لم تغطها دورة الإدارة وحدها.

**مخرج المرحلة:** أنجز مشروعي System Information وPing Checker بنفسك دون نسخ الكود.

- **074. كتابة أول Bash Script** — Security Jordan، تعلم Bash Scripting من الصفر إلى الاحتراف في أقل من 3 ساعات، مقطع 13:24–15:04، 01:40، التصنيف: استكمال مطلوب. [فتح المصدر](https://www.youtube.com/watch?v=M5-MCMrC0sI&t=804s)
  - لماذا هنا: بعد أساسيات الطناني، شاهد طريقة بناء أول سكربت عملي.
  - التطبيق: هذا مقطع محدد من الفيديو الكامل؛ لا تحتاج لمشاهدة المقاطع التمهيدية أو المتكررة التي أخذتها من الطناني. المدة محسوبة بين فصول الفيديو المنشورة.

- **075. ما هو Shebang؟** — Security Jordan، تعلم Bash Scripting من الصفر إلى الاحتراف في أقل من 3 ساعات، مقطع 15:04–18:28، 03:24، التصنيف: استكمال مطلوب. [فتح المصدر](https://www.youtube.com/watch?v=M5-MCMrC0sI&t=904s)
  - لماذا هنا: فهم السطر الذي يحدد مفسر السكربت.
  - التطبيق: هذا مقطع محدد من الفيديو الكامل؛ لا تحتاج لمشاهدة المقاطع التمهيدية أو المتكررة التي أخذتها من الطناني. المدة محسوبة بين فصول الفيديو المنشورة.

- **076. تشغيل Bash Script** — Security Jordan، تعلم Bash Scripting من الصفر إلى الاحتراف في أقل من 3 ساعات، مقطع 18:28–24:23، 05:55، التصنيف: استكمال مطلوب. [فتح المصدر](https://www.youtube.com/watch?v=M5-MCMrC0sI&t=1108s)
  - لماذا هنا: تشغيل السكربت وفهم طريقة تنفيذه.
  - التطبيق: هذا مقطع محدد من الفيديو الكامل؛ لا تحتاج لمشاهدة المقاطع التمهيدية أو المتكررة التي أخذتها من الطناني. المدة محسوبة بين فصول الفيديو المنشورة.

- **077. قراءة مدخلات المستخدم في Bash** — Security Jordan، تعلم Bash Scripting من الصفر إلى الاحتراف في أقل من 3 ساعات، مقطع 37:36–48:44، 11:08، التصنيف: استكمال مطلوب. [فتح المصدر](https://www.youtube.com/watch?v=M5-MCMrC0sI&t=2256s)
  - لماذا هنا: إضافة مدخلات إلى السكربت باستخدام read والتحقق منها.
  - التطبيق: هذا مقطع محدد من الفيديو الكامل؛ لا تحتاج لمشاهدة المقاطع التمهيدية أو المتكررة التي أخذتها من الطناني. المدة محسوبة بين فصول الفيديو المنشورة.

- **078. Operators في Bash** — Security Jordan، تعلم Bash Scripting من الصفر إلى الاحتراف في أقل من 3 ساعات، مقطع 48:44–01:07:52، 19:08، التصنيف: استكمال مطلوب. [فتح المصدر](https://www.youtube.com/watch?v=M5-MCMrC0sI&t=2924s)
  - لماذا هنا: استخدام المقارنات والعمليات داخل الشروط.
  - التطبيق: هذا مقطع محدد من الفيديو الكامل؛ لا تحتاج لمشاهدة المقاطع التمهيدية أو المتكررة التي أخذتها من الطناني. المدة محسوبة بين فصول الفيديو المنشورة.

- **079. مشروع 1: System Information** — Security Jordan، تعلم Bash Scripting من الصفر إلى الاحتراف في أقل من 3 ساعات، مقطع 01:30:10–01:38:08، 07:58، التصنيف: استكمال مطلوب. [فتح المصدر](https://www.youtube.com/watch?v=M5-MCMrC0sI&t=5410s)
  - لماذا هنا: إنشاء سكربت يعرض معلومات النظام؛ طبّقه بنفسك بعد مشاهدة الجزء.
  - التطبيق: هذا مقطع محدد من الفيديو الكامل؛ لا تحتاج لمشاهدة المقاطع التمهيدية أو المتكررة التي أخذتها من الطناني. المدة محسوبة بين فصول الفيديو المنشورة.

- **080. مشروع 2: Ping Checker** — Security Jordan، تعلم Bash Scripting من الصفر إلى الاحتراف في أقل من 3 ساعات، مقطع 01:38:08–01:45:16، 07:08، التصنيف: استكمال مطلوب. [فتح المصدر](https://www.youtube.com/watch?v=M5-MCMrC0sI&t=5888s)
  - لماذا هنا: إنشاء سكربت يتحقق من الوصول إلى عنوان IP عبر Ping.
  - التطبيق: هذا مقطع محدد من الفيديو الكامل؛ لا تحتاج لمشاهدة المقاطع التمهيدية أو المتكررة التي أخذتها من الطناني. المدة محسوبة بين فصول الفيديو المنشورة.

- **081. Loops وقراءة الملفات سطرًا بسطر** — Security Jordan، تعلم Bash Scripting من الصفر إلى الاحتراف في أقل من 3 ساعات، مقطع 01:45:16–02:19:10، 33:54، التصنيف: استكمال مطلوب. [فتح المصدر](https://www.youtube.com/watch?v=M5-MCMrC0sI&t=6316s)
  - لماذا هنا: استكمال عملي للحلقات، مع التركيز على قراءة ملفات السجل line by line.
  - التطبيق: هذا مقطع محدد من الفيديو الكامل؛ لا تحتاج لمشاهدة المقاطع التمهيدية أو المتكررة التي أخذتها من الطناني. المدة محسوبة بين فصول الفيديو المنشورة.

- **082. Arrays في Bash** — Security Jordan، تعلم Bash Scripting من الصفر إلى الاحتراف في أقل من 3 ساعات، مقطع 02:19:10–02:28:45، 09:35، التصنيف: استكمال مطلوب. [فتح المصدر](https://www.youtube.com/watch?v=M5-MCMrC0sI&t=8350s)
  - لماذا هنا: تجميع عدة قيم ومعالجتها داخل السكربت.
  - التطبيق: هذا مقطع محدد من الفيديو الكامل؛ لا تحتاج لمشاهدة المقاطع التمهيدية أو المتكررة التي أخذتها من الطناني. المدة محسوبة بين فصول الفيديو المنشورة.

- **083. Functions في Bash** — Security Jordan، تعلم Bash Scripting من الصفر إلى الاحتراف في أقل من 3 ساعات، مقطع 02:28:45–02:51:10، 22:25، التصنيف: استكمال مطلوب. [فتح المصدر](https://www.youtube.com/watch?v=M5-MCMrC0sI&t=8925s)
  - لماذا هنا: تقسيم السكربت إلى وظائف قابلة لإعادة الاستخدام.
  - التطبيق: هذا مقطع محدد من الفيديو الكامل؛ لا تحتاج لمشاهدة المقاطع التمهيدية أو المتكررة التي أخذتها من الطناني. المدة محسوبة بين فصول الفيديو المنشورة.

### معالجة النصوص واستخراج البيانات — 1 درسًا

AWK وSED وCUT وTR وPrintf لمعالجة ملفات النصوص والسجلات.

**مخرج المرحلة:** من ملف سجل تجريبي، استخرج عناوين IP وعدد مرات ظهور كل عنوان.

- **084. Printf وAWK وSED وCUT وTR لمعالجة النصوص** — Security Jordan، تعلم Kali Linux من الصفر | الجزء الثاني من دورة Linux الشاملة، 03:15:40، 1:22:30، التصنيف: استكمال مطلوب. [فتح المصدر](https://www.youtube.com/watch?v=qjqiPF0QBJ0&t=11740s)
  - لماذا هنا: هذه الأدوات هي الجسر بين التعامل مع الطرفية وتحليل ملفات السجلات: استخراج الحقول، التصفية، واستبدال النصوص.
  - التطبيق: أنشئ ملف سجل تجريبي، استخرج عمود IP باستخدام awk/cut، نظّف المخرجات بـ sed/tr، ثم احسب التكرارات.

### جدولة المهام — 2 درسًا

تنفيذ المهام مرة واحدة أو بصورة متكررة باستخدام at وcron.

**مخرج المرحلة:** أنشئ مهمة مجدولة آمنة في المعمل، ثم اعرضها واحذفها.

- **085. Task Scheduling - at** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 64، 15:34، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=64)
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **086. Task Scheduling - cron** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 65، 27:14، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=65)
  - لماذا هنا: موضوع جوهري لإدارة النظام أو المصادقة أو السجلات أو الأتمتة؛ لا تنتقل قبل تنفيذ المثال بنفسك.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

### خدمات الشبكة على Linux — 7 درسًا

مشاركة الملفات والخدمات الشبكية وخوادم الويب NFS وSamba وApache وNginx.

**مخرج المرحلة:** شغّل خدمة ويب تجريبية داخل المعمل، وتحقق من حالة الخدمة وسجلات الوصول والأخطاء.

- **087. Network Services - NFS** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 66، 37:45، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=66)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **088. Network Services - samba - cifs - part 1** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 67، 22:00، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=67)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **089. Network Services - samba-cifs - part 2** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 68، 49:41، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=68)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **090. Network Services - apache part 1** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 69، 30:10، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=69)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **091. Network Services - apache part 2** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 70، 23:28، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=70)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **092. Network Services - apache part 3** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 71، 19:07، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=71)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

- **093. Network Services - nginx** — محمد الطناني، Linux Administration Course 2024 – Rocky Linux & Debian، فيديو 72، 32:21، التصنيف: أساسي. [فتح المصدر](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc&index=72)
  - لماذا هنا: محاضرة من دورة Linux Administration الرئيسية. تأتي هنا لأنها تبني مباشرة على المهارة السابقة ولا نكررها من مصدر آخر.
  - التطبيق: طبّق الأمر أو الإعداد على Rocky Linux أو Debian داخل المعمل، ثم دوّن الأمر والنتيجة ومتى تستخدمه.

### الاختبار العملي النهائي واستكشاف الأعطال — 3 درسًا

تطبيق ما تعلمته على تحديات Linux، ثم تشخيص مشكلة نظام وتقييم المهارات.

**مخرج المرحلة:** أكمل Bandit Levels 0–34، ثم حل تحدي عبدالله النهائي واكتب ملخصًا بما تعلمته.

- **094. تطبيق عملي: Bandit Levels 0–34** — Security Jordan / OverTheWire، Bandit – Linux command-line practice، مقطع 08:11:49 + Levels 0–34، وقت اللاب حسب سرعة الحل، التصنيف: تطبيق عملي. [فتح المصدر](https://overthewire.org/wargames/bandit/)
  - لماذا هنا: تحديات عملية تثبّت SSH والملفات المخفية والبحث والصلاحيات والضغط والـ pipes. أكمل المستويات 0–34 كما في الشرح المرسل، بوصفها معملًا ختاميًا لتثبيت SSH والملفات والبحث والصلاحيات والضغط والـ pipes.
  - التطبيق: حل المستويات 0–34 بنفسك وفق تعليمات المنصة. لا تنسخ الحل؛ سجّل الأمر الذي استخدمته ولماذا نجح، وطبّق داخل بيئة التحديات فقط. فيديو Security Jordan يبدأ عند 08:11:49 للمساعدة عند التعثر.

- **095. إصلاح مشاكل النظام** — عبدالله النعيمي، Linux Course in CyberSecurity [Arabic]، فيديو 24، غير محددة في الفهرس المرسل، التصنيف: استكمال مطلوب. [فتح المصدر](https://www.youtube.com/playlist?list=PLtlmgvQV7sDtKQUPF6i6rNA3mIiieeuWp&index=24)
  - لماذا هنا: تطبيق troubleshooting بعد تغطية الخدمات والشبكة والحزم والسجلات.
  - التطبيق: شخّص مشكلة مقصودة في VM: ابدأ بالحالة، ثم السجل، ثم السبب، ثم الحل.

- **096. تحدي الكورس الأخير** — عبدالله النعيمي، Linux Course in CyberSecurity [Arabic]، فيديو 27، 01:15، التصنيف: استكمال مطلوب. [فتح المصدر](https://www.youtube.com/playlist?list=PLtlmgvQV7sDtKQUPF6i6rNA3mIiieeuWp&index=27)
  - لماذا هنا: تحدي ختامي يجمع موضوعات دورة Linux for CyberSecurity.
  - التطبيق: حل التحدي بنفسك قبل مشاهدة الحل أو مراجعة الشرح.


## سجل المصادر: ما دُمج وما استُبعد ولماذا

### Ahmed Eid – دورة تعلم Linux كاملة باللغة العربية للجميع في 6 ساعات ونصف
- المحاضر/المصدر: أحمد عيد – TechShots
- الحالة: **مدمج جزئيًا في Linux**
- المدمج: أول ثلاثة فصول فقط: Operating Systems، Virtualization، Setup Linux VM. أُدرجت بأوقاتها الفعلية من 00:00:11 إلى 01:49:20.
- غير المدمج: من 01:49:20 فصاعدًا: File System، CLI، Commands، Package Management، Vim، Users، Permissions، Pipes/Redirects. هذه الموضوعات مشروحة ضمن دورة الطناني، لذلك لم نكررها.
- سبب القرار: وجود أحمد عيد مهم لتأسيس فهم OS/Kernel/Virtualization. لم نحذف المحاضر؛ اخترنا القسم الذي يضيف أساسًا غير مكرر.
- الرابط: https://www.youtube.com/watch?v=8f2Zsb89uoM

### Linux Administration Course 2024 – 72 Videos
- المحاضر/المصدر: محمد الطناني – TananyAcademy
- الحالة: **مدمج بالكامل في Linux**
- المدمج: جميع الفيديوهات 01–72 بترتيبها الأصلي، مع العناوين والمدد وروابط index المباشرة.
- غير المدمج: لا يوجد فيديو مستبعد من الدورة الأساسية.
- سبب القرار: هو عمود Linux Administration في المنهج، ويغطي Debian وRocky Linux والإدارة والخدمات والتخزين وBash والمهام وخدمات الشبكة.
- الرابط: https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc

### Linux Course in CyberSecurity – 28 Videos
- المحاضر/المصدر: عبدالله النعيمي – Abdallah Al-Nuaimy
- الحالة: **مدمج انتقائيًا في Linux + مرجع SOC**
- المدمج: #14 External Package Sources؛ #15 IP/Ports؛ #16 Connectivity Tests؛ #17 Port/Service Scanning؛ #21 System Monitoring؛ #23 System Logs؛ #24 Troubleshooting؛ #27 Final Challenge.
- غير المدمج: #01–13 أساسيات وتثبيت وأوامر وصلاحيات مغطاة بأحمد/الطناني؛ #18 Shell Scripting مغطى بالطناني وBash الإضافي؛ #19 Scheduling مغطى بالطناني 64–65؛ #20 Process Management مغطى بالطناني 32–33؛ #22 Services مغطى بالطناني 34؛ #25 Linux in Penetration Testing محفوظ في SOC/المعرفة الهجومية؛ #26 Shell مكرر؛ #28 خاتمة لا تضيف مهارة.
- سبب القرار: اختيرت الفيديوهات التي تضيف Network Diagnostics وMonitoring وLogs وTroubleshooting، ووُضعت في مكانها التعليمي بين محاضرات الطناني.
- الرابط: https://www.youtube.com/playlist?list=PLtlmgvQV7sDtKQUPF6i6rNA3mIiieeuWp

### Security Jordan – Linux from Zero to Pro in 20 Hours (Part 1)
- المحاضر/المصدر: Security Jordan
- الحالة: **مستبعد من Linux النشط بسبب التكرار؛ محفوظ في سجل المصادر**
- المدمج: تمت مراجعة فهرس الفيديو المعلن: Kali/Virtualization، file types، filesystem، shell/TTY، commands، users/groups، shadow/password aging، permissions، searching، redirection، vim، compression، links، processes، scheduling.
- غير المدمج: لم نضف الفيديو كاملًا لأن هذه المحاور مغطاة في أحمد عيد والطناني وعبدالله بصورة كافية. لا تعِد 20 ساعة لتعلم نفس المهارات.
- سبب القرار: محتوى مفيد لكن تكراره مرتفع. لو احتجت Kali installation لاحقًا، استخدمه كمرجع مستقل وليس كمتطلب Linux.
- الرابط: https://www.youtube.com/watch?v=JBGnzEtimmg

### Security Jordan – تعلم Kali Linux من الصفر (Linux Part 2)
- المحاضر/المصدر: Security Jordan
- الحالة: **مدمج جزئيًا في Linux + مرجع SOC**
- المدمج: Linux Authentication 02:14:05؛ AWK/SED/CUT/TR 03:15:40؛ Bandit walkthrough يبدأ 08:11:49 (معمل 0–34 مدمج).
- غير المدمج: Boot Process وServices وNetwork Management وSSH وSystem Logs وPackage Management مغطاة بالطناني وعبدالله. فصل Bash عند 05:20:15 لم نستخدمه لأنه يعيد أساسيات Bash التي يغطيها الطناني؛ أخذنا بدلًا منه مقاطع المشاريع وShebang وInput وArrays وFunctions من كورس Security Jordan Bash المنفصل. System Logs تطبق من الطناني 37–38 وعبدالله #23.
- سبب القرار: أضفنا المصادقة الأمنية ومعالجة النصوص واللاب؛ لم نعد شرح إدارة الخدمات والسجلات مرة أخرى.
- الرابط: https://www.youtube.com/watch?v=qjqiPF0QBJ0

### Bash Scripting Course Tutorial Arabic (Level 0) – video shared at playlist index 29
- المحاضر/المصدر: اسم المحاضر لم يتم تثبيته من بيانات الرابط المرسلة
- الحالة: **الفيديو الذي أرسلته مستبعد كتكرار؛ بقية القائمة غير مكتملة البيانات**
- المدمج: الفيديو المحدد الذي وصلنا رابطه هو While Loop Part 1.
- غير المدمج: لم نفهرس باقي القائمة لأن الرابط الذي شاركته يحدد فيديو #29 فقط، ولم تتوفر عناوين/مدد بقية الفيديوهات في بيانات موثوقة. لا نخترع محتوى أو أرقامًا.
- سبب القرار: موضوع While Loop مغطى في الطناني #61–62 وفي مقطع Loops من Security Jordan Bash Full Course. تكرار الفيديو نفسه غير مطلوب.
- الرابط: https://www.youtube.com/watch?v=SWDrATjXYlo&list=PLBdyyeW_Z41DykncH9zzMk8T7Rm5UlZXd&index=29

### Security Jordan – Bash Scripting Full Course (under 3 hours)
- المحاضر/المصدر: Security Jordan
- الحالة: **مدمج انتقائيًا في Linux**
- المدمج: أول Script، Shebang، تشغيل السكربت، User Input، Operators، System Information Project، Ping Checker، Loops/file reading، Arrays، Functions.
- غير المدمج: Bash تعريف/Variables/If وبعض الحلقات المتكررة: يغطيها الطناني 55–63. لم نكررها.
- سبب القرار: هذه الإضافات تسد النواقص العملية في Bash وتقدم مشاريع لا توجد بالصيغة نفسها في دورة الطناني.
- الرابط: https://www.youtube.com/watch?v=M5-MCMrC0sI

### Security Jordan – Blue Team & SOC Foundations (3 videos)
- المحاضر/المصدر: Security Jordan
- الحالة: **مؤجل في تبويب SOC**
- المدمج: الفيديو 01 Roadmap؛ الفيديو 02 SOC Fundamentals/SIEM/Logs/Alerts؛ الفيديو 03 SOC Workflow/Triage/Investigation.
- غير المدمج: لا يدخل في Linux الحالي؛ سيبدأ بعد Linux وSecurity+.
- سبب القرار: محتوى SOC وليس Linux Administration. محفوظ كأول مرحلة مستقبلية.
- الرابط: https://www.youtube.com/@securityjordan6081/playlists

### Linux Practical Guide – 9 Videos
- المحاضر/المصدر: م. مصطفى عبدالسلام – Free4Arab / Information Technology
- الحالة: **غير مدمج بسبب التكرار؛ محفوظ في التدقيق**
- المدمج: لا توجد فيديوهات إلزامية مضافة منه؛ تم فحص القائمة ذات 9 فيديوهات.
- غير المدمج: Setting Up Lab، OS Overview، Linux Intro، Debian Install، VBox Tools، Filesystem، Directory Structure، Users/Groups/Permissions، Terminal.
- سبب القرار: محتواه تمهيدي، وأحمد عيد يغطي OS/Virtualization ثم الطناني يغطي تثبيت Debian/Rocky والملفات والمستخدمين والصلاحيات والطرفية بمستوى أوسع. لا نحتاج دورة تأسيسية أخرى كاملة.
- الرابط: https://www.youtube.com/watch?v=mfiqpP3cE9Y

### Ethical Hacking – 6 Hours (video supplied by user)
- المحاضر/المصدر: القناة الظاهرة في رابط الفيديو؛ اسم المدرّب غير مثبت هنا
- الحالة: **مؤجل في تبويب SOC**
- المدمج: في المرحلة القادمة نستخدم الأجزاء ذات الصلة بالدفاع: Nmap/Recon، MITM، ARP/DNS spoofing، Wireshark، وفهم آثار الاستغلال.
- غير المدمج: Kali/Linux basics، Payloads، Meterpreter، BeEF والتفاصيل الهجومية ليست من أهداف مرحلة Linux الحالية ولا من أولويات L1.
- سبب القرار: الفيديو دورة هجومية مستقلة، وليست Linux Administration. نستفيد من بعض الأجزاء لفهم ما يجب على Blue Team اكتشافه، لا لإعادة مسار Pentesting كامل.
- الرابط: https://www.youtube.com/watch?v=qaNZKH5NohQ


## تفاصيل إضافية للمراجعة

### أحمد عيد – Chapters

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


### مصطفى عبدالسلام – Linux Practical Guide (9 videos)

- #01 Setting Up a Lab — 10:19

- #02 Overview of Operating Systems — 24:04

- #03 Introduction to Linux — 45:04

- #04 Installing Debian Linux — 33:19

- #05 Installing VBox Tools — 20:12

- #06 Linux File System — 16:16

- #07 Linux Directory Structure — 29:40

- #08 Linux Users & Groups - Permissions — 30:29

- #09 Linux Terminal — 16:54


### Security Jordan – Linux Part 1: كل الفصول التي أمكن فهرستها

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


### Security Jordan – Linux Part 2: كل الفصول التي أمكن فهرستها

- 00:00 — Linux Boot Process — مستبعد كتكرار مع الطناني #34.

- 00:11:50 — Services and Daemons — مستبعد كتكرار مع الطناني #34.

- 00:43:36 — Manage Linux Network — مستبعد كتكرار وظيفي مع الطناني #35 وعبدالله #15–17.

- 01:10:00 — Cryptography Fundamentals — مغطى بالمبادئ في Security+؛ لا نعيده في Linux.

- 01:49:00 — Secure Shell (SSH) — مستبعد كتكرار مع الطناني #36.

- 02:14:05 — Understanding Linux Authentication — مدمج في Linux — تسلسل الدرس #44.

- 02:24:10 — System Logs: rsyslog وSystemd Journal — مستبعد كشرح مكرر؛ ندرس الطناني #37–38 ثم عبدالله #23 كتطبيق.

- 03:15:40 — Printf وAWK وSED وCUT وTR — مدمج في Linux — تسلسل الدرس #84.

- 04:38:10 — Linux Package Management — مستبعد كتكرار مع الطناني #39–42.

- 05:20:15 — Bash Scripting — مستبعد كشرح أساسي مكرر؛ نستخدم مقاطع Bash المنفصلة ذات المشاريع والتطبيقات التي تكمل الطناني.

- 08:11:49 — Bandit walkthrough Levels 0–34 — مدمج كمعمل Linux ختامي: المستويات 0–34.


### Security Jordan – Bash playlist: الفيديو المحدد فقط

- #29 While Loop Part 1 — مستبعد كتكرار: while loops مغطاة في الطناني #61، ومقاطع Loops في Security Jordan Bash Full Course. بيانات بقية فيديوهات القائمة لم يمكن تثبيتها من الرابط المرسل وحده. [الرابط](https://www.youtube.com/watch?v=SWDrATjXYlo&list=PLBdyyeW_Z41DykncH9zzMk8T7Rm5UlZXd&index=29)


### عبدالله النعيمي – القائمة الكاملة (28 فيديو)

- #01 مقدمة الكورس — غير مذكورة — مستبعد للتكرار/الخاتمة

- #02 تاريخ نظام Linux باختصار — غير مذكورة — مستبعد للتكرار/الخاتمة

- #03 ما هو نظام Linux ولماذا نستخدمه؟ — غير مذكورة — مستبعد للتكرار/الخاتمة

- #04 توزيعات نظام Linux باختصار — غير مذكورة — مستبعد للتكرار/الخاتمة

- #05 تحميل نظام Kali Linux على Windows — غير مذكورة — مستبعد للتكرار/الخاتمة

- #06 مفهوم Terminal وShell في Linux — غير مذكورة — مستبعد للتكرار/الخاتمة

- #07 مفهوم نظام ملفات Linux وطريقة التعامل معه — غير مذكورة — مستبعد للتكرار/الخاتمة

- #08 إنشاء وإدارة الملفات في Linux — غير مذكورة — مستبعد للتكرار/الخاتمة

- #09 أوامر نظام Linux — غير مذكورة — مستبعد للتكرار/الخاتمة

- #10 إدارة المستخدمين والجروبات — غير مذكورة — مستبعد للتكرار/الخاتمة

- #11 الصلاحيات والملكية — غير مذكورة — مستبعد للتكرار/الخاتمة

- #12 أداة sudo وشرح مفهوم root — غير مذكورة — مستبعد للتكرار/الخاتمة

- #13 استخدام APT Package Manager — غير مذكورة — مستبعد للتكرار/الخاتمة

- #14 التحميل من مصادر خارجية — 02:16 — مدمج في Linux

- #15 مفهوم عنوان الشبكة والمنافذ في Linux — غير مذكورة — مدمج في Linux

- #16 اختبارات الاتصال — 04:20 — مدمج في Linux

- #17 فحص بورتات وخدمات الشبكة — 07:57 — مدمج في Linux

- #18 كتابة سكربتات Shell — غير مذكورة — مستبعد للتكرار/الخاتمة

- #19 المهام المجدولة — غير مذكورة — مستبعد للتكرار/الخاتمة

- #20 إدارة العمليات — غير مذكورة — مستبعد للتكرار/الخاتمة

- #21 أدوات مراقبة النظام — غير مذكورة — مدمج في Linux

- #22 خدمات Linux — غير مذكورة — مستبعد للتكرار/الخاتمة

- #23 سجلات النظام — 11:58 — مدمج في Linux

- #24 إصلاح مشاكل النظام — غير مذكورة — مدمج في Linux

- #25 استخدام Linux في بيئة اختبار الاختراق — غير مذكورة — محفوظ في SOC لاحقًا

- #26 مفهوم Shell واستخدامه — غير مذكورة — مستبعد للتكرار/الخاتمة

- #27 تحدي الكورس الأخير — 01:15 — مدمج في Linux

- #28 خاتمة الكورس والخطوات القادمة — غير مذكورة — مستبعد للتكرار/الخاتمة


## تبويب SOC بعد Linux وSecurity+

المسار المستقبلي مبني حول أربعة محاور طلبتها: **Log Analysis، MITRE ATT&CK، EDR، Hands-On SOC Skills**. أضيفت SIEM وSOC Foundations وIncident Response وThreat Hunting وDetection Engineering لأنها أدوات وممارسات لازمة لربط المحاور الأربعة في عمل SOC حقيقي.

### بوابة الانتقال: إنهاء Linux وSecurity+
لا تبدأ دروس SOC العملية قبل إتمام مسار Linux الحالي وSecurity+؛ يمكنك قراءة الخطة الآن فقط.

- **إنهاء جميع دروس Linux النشطة** —  —  — 
  - كل دروس تبويب Linux يجب أن تكون مكتملة، مع تنفيذ اللابات النهائية.

- **إنهاء Security+** —  —  — 
  - أكمل منهج Security+ الذي تدرسه، واحتفظ بملاحظات Incident Response وThreats وSecurity Operations.

- **تجهيز Windows Server 2022 وWindows 11 وUbuntu VM** —  —  — 
  - أنت درست Windows Server؛ المطلوب لاحقًا إعادة استخدام بيئة معملية، لا إعادة دورة Windows.

### SOC Foundations وطريقة عمل المحلل
افهم وظيفة SOC ومصادر السجلات والفرق بين Event وLog وAlert وIncident، ثم منهجية L1 في التحقق والتصعيد.

- **Blue Team & SOC Foundations – خارطة المسار** — Security Jordan — حوالي 57 دقيقة؛ آخر فصل موثق 56:25 — https://www.youtube.com/watch?v=mfiqpP3cE9Y
  - خارطة العمل، دور SOC، الأدوات المتوقعة، بيئة التطبيق. القناة تذكر Wazuh وSplunk وElastic وSentinel وSecurity Onion.

- **SOC Fundamentals, SIEM, Logs & Alerts** — Security Jordan — 40:09 تقريبًا — https://www.youtube.com/watch?v=R_U2OGILxUA
  - Blue Team/SOC، Prevention-Detection-Response، Event/Log/Alert/Incident، Log Sources، Telemetry، SIEM، Detection Rules، IOC.

- **SOC Analyst Workflow, Alert Triage & Investigation** — Security Jordan — 47:50 — https://www.youtube.com/watch?v=8pWWwkhOkKM
  - Tier 1/2/3، SOPs، Alert Queue، Triage، Severity/Priority، True/False/Benign Positive، Evidence، Timeline، Case Management، Escalation، سيناريو Suspicious PowerShell.

- **أساسيات Ticketing وSOPs وPlaybooks** — تطبيق من محاضرة Security Jordan 03 — لاب عملي — https://www.youtube.com/watch?v=8pWWwkhOkKM&t=418s
  - اكتب بطاقة Incident فيها Summary وAsset وUser وEvidence وTimeline وDecision وEscalation.

### بناء SOC Home Lab وجمع Telemetry
أنشئ بيئة صغيرة تجمع أحداث Windows وLinux والشبكة في منصة مركزية.

- **تصميم المختبر: Wazuh Manager + Windows 11 + Windows Server 2022 + Ubuntu** — خطة تطبيقية مقترحة — 3–6 ساعات تقديريًا — https://documentation.wazuh.com/current/quickstart.html
  - Wazuh مجاني ومفتوح المصدر. متطلبات التثبيت تعتمد على عدد الـAgents والبيانات؛ دليل Quickstart يذكر 4 vCPU و8 GiB RAM و50GB تخزين كبداية لـ1–25 Agent. راجع المتطلبات قبل التثبيت.

- **تثبيت Wazuh وربط أول Agent** — Wazuh Documentation — 3–5 ساعات تقديريًا — https://documentation.wazuh.com/current/getting-started/
  - ابدأ بجهاز Ubuntu أو Linux agent ثم Windows agent، وتأكد من ظهور الأجهزة وHeartbeat قبل إنشاء أي قواعد.

- **تفعيل Sysmon على Windows وجمع الأحداث** — Microsoft Sysinternals / Wazuh — 2–3 ساعات تقديريًا — https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon
  - ركّز على Process Create وNetwork Connect وFile Create، ثم قارن الأحداث بما يظهر في SIEM.

- **تجميع Syslog من Linux وفهم مصادر الأحداث** — Wazuh Documentation — 2–3 ساعات تقديريًا — https://documentation.wazuh.com/current/user-manual/capabilities/log-data-collection/index.html
  - اربط سجلات auth وjournald أو syslog بحسب التوزيعة، ولا تفترض أن كل التوزيعات تستخدم المسار نفسه.

### Log Analysis وSIEM – العمود الأول للتحقيق
تتعلم قراءة السجلات وربطها زمنيًا قبل تصنيفها أو اتخاذ قرار استجابة.

- **Windows Event Logs: Security / System / Application** — مصدر تعلم عربي + Microsoft Learn — 4–6 ساعات مع التطبيق — https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/basic-audit-policy-recommendations
  - افهم Event Viewer، Event IDs الأساسية، Logon Success/Failure، Account Management، Process Creation، وسياسات Audit.

- **Sysmon وProcess Creation وNetwork Connections** — Microsoft Sysinternals — 4–6 ساعات مع التطبيق — https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon
  - تدرّب على Event ID 1 Process Create و3 Network Connect و11 File Create، مع فهم Parent/Child Process.

- **PowerShell Logging وScript Block Logging** — Microsoft Learn — 2–3 ساعات — https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_logging_windows
  - تعلم كيف يظهر تنفيذ PowerShell في السجلات، ثم ابحث عن أوامر مشبوهة داخل أحداث المعمل.

- **Active Directory Security Events** — Microsoft Learn — 3–5 ساعات — https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/security-best-practices/appendix-l--events-to-monitor
  - ركز على إنشاء الحسابات، تغييرات المجموعات، محاولات المصادقة، وإضافة المستخدمين لمجموعات حساسة.

- **Linux Authentication وSystem Logs** — Linux lab + Wazuh — 3–4 ساعات — https://documentation.wazuh.com/current/user-manual/capabilities/log-data-collection/index.html
  - اربط auth.log أو secure أو journalctl بأحداث SSH وsudo وتغييرات الخدمات. مسار السجل يعتمد على التوزيعة وإعدادها.

- **Network Logs: DNS / DHCP / Firewall / VPN / Proxy** — مصادر الشبكة التي درستها + Wireshark — 4–6 ساعات — https://www.wireshark.org/docs/
  - تعلم قراءة Source/Destination IP وPort وProtocol وDNS Query وFirewall action وVPN login، ثم اربطها بجهاز المستخدم.

- **Search وFiltering وCorrelation وTimeline** — Wazuh / SIEM — 4–6 ساعات — https://documentation.wazuh.com/current/user-manual/
  - لا تكتفِ بالبحث عن كلمة. اربط user + host + source IP + timestamp + process + destination ثم أنشئ Timeline.

- **SIEM Query Language: ابدأ ببحث Wazuh ثم تعلّم KQL أو SPL** — Wazuh / Microsoft Learn / Splunk — 6–10 ساعات — https://learn.microsoft.com/en-us/kusto/query/
  - اختيار مقترح: Wazuh أولًا للمعمل المحلي، ثم KQL إذا اتجهت إلى Microsoft Sentinel. لا تتعلم Splunk وSentinel وElastic بعمق في نفس الوقت.

### MITRE ATT&CK – العمود الثاني
تعلم تصنيف السلوك الهجومي بناءً على الدليل، وليس حفظ أسماء التقنيات.

- **فهم Tactics وTechniques وSub-techniques وProcedures** — MITRE ATT&CK — 2–3 ساعات — https://attack.mitre.org/
  - افهم الفرق بين هدف المهاجم والطريقة والتفصيل التطبيقي. ATT&CK قاعدة معرفة وليست منتجًا أو أداة SIEM.

- **Enterprise Matrix وATT&CK Navigator** — MITRE — 2–3 ساعات — https://attack.mitre.org/matrices/enterprise/
  - افتح الـMatrix، واختر تقنية، وحدد ما الدليل الذي قد يثبت حدوثها في بيئتك.

- **Mapping: PowerShell وBrute Force وValid Accounts وRemote Services** — MITRE ATT&CK — 4–5 ساعات — https://attack.mitre.org/techniques/T1059/001/
  - اربط أمثلة مثل T1059.001 PowerShell وT1110 Brute Force وT1078 Valid Accounts وT1021 Remote Services بأحداث وسجلات فعلية.

- **اكتب Detection Notes مع Technique وEvidence وCoverage Gap** — تطبيق على التنبيهات التي حللتها — لاب عملي — https://attack.mitre.org/
  - لا تصنف التنبيه على أساس اسم القاعدة وحده؛ اربط التقنية بالدليل، واذكر مستوى الثقة وما الذي لم تتمكن من إثباته.

### EDR – العمود الثالث
افهم Telemetry الخاصة بالأجهزة وكيف تحقق في التنبيهات وتنفذ الاستجابة المصرح بها.

- **EDR vs Antivirus / EPP / XDR** — Microsoft Learn + Security Jordan — 2–3 ساعات — https://learn.microsoft.com/en-us/defender-endpoint/
  - افهم الفرق بين الحماية الوقائية والمراقبة والتحقيق والاستجابة، ولا تخلط بين EDR وSIEM.

- **Endpoint Telemetry: Process / File / Registry / Network / User** — Microsoft Defender for Endpoint — 3–4 ساعات — https://learn.microsoft.com/en-us/defender-endpoint/investigate-machines
  - تعلم مصادر البيانات التي يراها EDR وكيف تساعد في إعادة بناء ما حدث على الجهاز.

- **Alert Story وProcess Tree وDevice Timeline** — Microsoft Defender for Endpoint — 4–5 ساعات — https://learn.microsoft.com/en-us/defender-endpoint/investigate-alerts
  - ابدأ من Alert ثم تتبع العملية الأم والفرعية والملف والمستخدم والاتصال، وابن Timeline زمنيًا.

- **Device Isolation وInvestigation Package وLive Response** — Microsoft Defender for Endpoint — 3–4 ساعات — https://learn.microsoft.com/en-us/defender-endpoint/live-response
  - جرّب الإجراءات في بيئة اختبار فقط وبالصلاحيات المناسبة؛ العزل إجراء تأثيره تشغيلي ويجب أن يتبع سياسة المؤسسة.

- **اربط EDR Alert بتقنيات MITRE وبسجلات SIEM** — تطبيق تكاملي — لاب عملي — https://learn.microsoft.com/en-us/defender-endpoint/investigate-machines
  - قارن توقيت الـAlert مع SIEM، واجمع الأدلة، وحدد إن كانت تقنية ATT&CK مثبتة أو مجرد احتمال.

### Hands-On SOC L1 – العمود الرابع
تطبيق دورة التحقيق كاملة على سيناريوهات منفصلة وكتابة تقارير واضحة.

- **Alert Triage: Queue → Context → Severity/Priority** — Security Jordan / LetsDefend — لاب عملي — https://app.letsdefend.io/path/soc-analyst-learning-path
  - لكل Alert اجمع المستخدم والجهاز والوقت والمصدر والقاعدة والأصل المتأثر قبل إصدار الحكم.

- **Lab: SSH / Windows Brute Force** — Wazuh + Linux/Windows logs — 2–3 ساعات — https://documentation.wazuh.com/current/
  - ولّد محاولات فاشلة داخل المعمل، ابحث عن المصدر والحساب، اربط النجاح بالفشل، وصنف الحدث.

- **Lab: Suspicious PowerShell Execution** — Windows + Sysmon + EDR — 2–4 ساعات — https://learn.microsoft.com/en-us/defender-endpoint/investigate-alerts
  - تحقق من Parent Process وCommand Line وUser وNetwork Connections، ثم اربط الأدلة بـT1059.001 عند انطباقها.

- **Lab: New Local/Domain Admin or Privilege Change** — Windows Security Logs / AD — 2–3 ساعات — https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/security-best-practices/appendix-l--events-to-monitor
  - تحقق من من أنشأ الحساب أو أضاف العضوية، ومتى، ومن أي جهاز، وهل كان التغيير مصرحًا.

- **Lab: Suspicious DNS / Network Connection** — Wireshark + DNS/Firewall logs — 2–3 ساعات — https://www.wireshark.org/docs/
  - افحص DNS query وDestination IP وPort وFrequency، واربطها بسجل الجهاز وبالمستخدم.

- **Lab: Phishing Email / Malicious Attachment** — LetsDefend / Email headers — 3–4 ساعات — https://app.letsdefend.io/path/soc-analyst-learning-path
  - حلل المرسل والرؤوس والروابط والمرفقات والـHash، ثم افحص هل تم التنفيذ على Endpoint.

- **Case Management وIncident Report وEscalation** — Security Jordan SOC Workflow — 2–3 ساعات — https://www.youtube.com/watch?v=8pWWwkhOkKM
  - اكتب ملخصًا، نطاق التأثير، الأدلة، Timeline، MITRE mapping، الإجراءات، القرار، وما يحتاجه L2.

### SOC L2 – Incident Response وThreat Hunting
التعامل مع الحوادث متعددة الأجهزة، البحث الاستباقي، تحسين الكشف، وقيادة التحقيق المتقدم.

- **Incident Response Lifecycle: Preparation, Detection, Analysis, Containment, Eradication, Recovery, Lessons Learned** — NIST SP 800-61 Rev. 3 — 5–7 ساعات — https://csrc.nist.gov/pubs/sp/800/61/r3/final
  - افهم التسلسل، والأدوار، وحفظ الأدلة، وتوثيق القرارات. لا تتعامل مع كل حادث كأنه Malware فقط.

- **Scoping وRoot Cause وTimeline عبر أكثر من مصدر** — SIEM + EDR + AD + Firewall — 4–6 ساعات — https://learn.microsoft.com/en-us/defender-endpoint/investigate-incidents
  - حدد كل الأجهزة والحسابات المتأثرة، وبداية الحادث، ومسار الحركة، وما الذي تم الوصول إليه.

- **Threat Hunting Hypothesis وATT&CK-driven Hunting** — MITRE ATT&CK / SIEM — 6–8 ساعات — https://attack.mitre.org/
  - ابدأ بفرضية قابلة للاختبار، وحدد البيانات اللازمة، واكتب query، ثم سجل النتيجة والحدود.

- **Detection Engineering: قواعد Sigma / SIEM Analytics / Tuning** — SigmaHQ + Wazuh/Sentinel — 6–10 ساعات — https://github.com/SigmaHQ/sigma
  - اكتب قاعدة مبنية على دليل، اختبرها على أحداث سليمة وخبيثة، وقلل False Positives مع توثيق القيود.

- **KQL Advanced Hunting أو SPL – اختر لغة واحدة أولًا** — Microsoft Learn / Splunk — 8–12 ساعة — https://learn.microsoft.com/en-us/kusto/query/
  - بما أن بيئة Windows Server عندك مألوفة، KQL مع Sentinel/Defender اختيار منطقي. تعلم SPL إذا كانت بيئة العمل أو التدريب تستخدم Splunk.

- **SOAR Playbooks وAutomation** — Microsoft Sentinel / Wazuh Integrations — 4–6 ساعات — https://learn.microsoft.com/en-us/azure/sentinel/automation/automate-responses-with-playbooks
  - ابدأ بأتمتة enrichment أو إشعار أو ticketing. لا تؤتمت عزل جهاز أو تعطيل حساب دون موافقات وضوابط واضحة.

- **Threat Intelligence وIOC Enrichment** — MITRE / VirusTotal / trusted TI feeds — 4–6 ساعات — https://attack.mitre.org/
  - قيّم المصدر والحداثة والسياق؛ IP أو Hash منفرد ليس دليلًا كافيًا على الاختراق.

- **DFIR Fundamentals: Evidence Handling وMemory/File/Timeline Basics** — NIST + DFIR references — 6–10 ساعات — https://www.nist.gov/cybersecurity
  - افهم الحفاظ على الأدلة، التوقيت، الهاش، النسخ الجنائي، وسلسلة الحيازة قبل التعمق في الأدوات.

### المواد الهجومية المختارة لفهم ما ستكتشفه دفاعيًا
فهم بعض أساليب الهجوم حتى تتعرف على آثارها في الحزم والسجلات؛ لا تحول هذا إلى مسار Pentesting كامل.

- **Ethical Hacking – 6 Hours: Nmap وNetwork Reconnaissance** — الفيديو الذي أرسله المستخدم — الفصل حسب فهرس الفيديو؛ تحقق من توقيت YouTube عند المشاهدة — https://www.youtube.com/watch?v=qaNZKH5NohQ
  - تعلم كيف يبدو الاستطلاع واكتشاف الخدمات من منظور الدفاع. لا تفحص إلا أجهزة معملك أو أنظمة لديك تصريح بها.

- **MITM / ARP Poisoning / DNS Spoofing – الفهم والكشف** — Ethical Hacking – 6 Hours — بحسب فصول الفيديو — https://www.youtube.com/watch?v=qaNZKH5NohQ
  - ركز على الأثر الشبكي وطرق الاكتشاف والحماية، وليس تنفيذ الهجوم ضد شبكات حقيقية.

- **Wireshark Packet Analysis** — Ethical Hacking – 6 Hours + Wireshark Docs — بحسب فصول الفيديو — https://www.youtube.com/watch?v=qaNZKH5NohQ
  - حلل PCAP داخل المعمل، وافهم ARP وDNS وTCP وHTTP(S) والاتصالات غير المعتادة.

- **Linux as an Attacker Environment – عبدالله النعيمي #25** — Abdallah Al-Nuaimy – Linux Course in CyberSecurity — غير متاح في الفهرس المرسل — https://www.youtube.com/playlist?list=PLtlmgvQV7sDtKQUPF6i6rNA3mIiieeuWp&index=25
  - ليس متطلب Linux Administration؛ نحتفظ به لفهم استخدام Linux في اختبار الاختراق وسياق الهجمات عند الانتقال إلى Blue Team.

### مسارات تدريب إضافية وشهادات بعد بناء الأساس
اختيار منصة تدريب عملية واحدة، ثم التفكير في شهادة أو اختبار مهني بعد تنفيذ معامل كافية.

- **TryHackMe – SOC Level 1 Path** — TryHackMe — يتغير حسب الوحدات والتدريب — https://tryhackme.com/path/outline/soclevel1
  - يغطي SOC operations وSIEM وEDR وWindows/Linux monitoring وThreat Intel وSIEM triage وcapstone. خيار ممتاز لبناء تطبيق متدرج.

- **LetsDefend – SOC Analyst Learning Path** — LetsDefend — يتغير حسب إكمال الدروس والسيناريوهات — https://app.letsdefend.io/path/soc-analyst-learning-path
  - مسار فيه SOC Fundamentals وCyber Kill Chain وMITRE ATT&CK وPhishing وSIEM alert investigation وMalware scenarios.

- **Blue Team Level 1 (BTL1)** — Security Blue Team — حسب خطة التدريب والامتحان — https://www.securityblue.team/certifications/blue-team-level-1
  - تدريب عملي يغطي SIEM وIncident Response وThreat Intelligence وDigital Forensics. لا تحتاجه قبل أن تبني أساس Linux وSecurity+ وSOC Labs.

- **Microsoft SC-200 Study Guide** — Microsoft Learn — حسب مستواك والتطبيق — https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-200
  - مسار مناسب بعد تطبيق Sentinel وDefender وKQL وIncident Response وThreat Hunting؛ ليس شرطًا للبدء في SOC L1.


## قيود التحقق والشفافية

- قائمة Bash Level 0 التي وصلتنا كانت رابط الفيديو #29 (While Loop Part 1) داخل Playlist؛ لم تتوفر قائمة عناوين بقية فيديوهاتها بشكل موثوق، لذلك لم نخترع بقية المحتوى. الفيديو المعروف مستبعد لأنه مكرر.

- بعض فيديوهات عبدالله النعيمي لم تعرض المدة في النص الذي أرسلته؛ لذلك يظهر "غير محددة" بدل اختراع مدة.

- Ethical Hacking – 6 Hours موجود في تبويب SOC كمرجع انتقائي دفاعي. لم تُثبت فصوله الرسمية من صفحة مفهرسة موثوقة؛ لذلك لا نضع توقيتات داخلية غير مؤكدة.

- متطلبات Security Jordan للمسار قد تتضمن OSCP lessons 1–40؛ هذه متطلبات قناة لمسارها وليست شرط توظيف عام لـSOC L1. الخطة لا تفرض دراسة OSCP كاملًا.


## مصادر تحقق مرجعية

- [Ahmed Eid Linux chapter listing](https://zolotube.com/watch?v=8f2Zsb89uoM)

- [Tanany Linux Administration playlist](https://www.youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc)

- [Security Jordan Linux Part 1](https://www.youtube.com/watch?v=JBGnzEtimmg)

- [Security Jordan Linux Part 2](https://www.youtube.com/watch?v=qjqiPF0QBJ0)

- [Security Jordan Bash full course](https://www.youtube.com/watch?v=M5-MCMrC0sI)

- [Security Jordan SOC foundations video 1](https://www.youtube.com/watch?v=mfiqpP3cE9Y)

- [Security Jordan SOC fundamentals video 2](https://www.youtube.com/watch?v=R_U2OGILxUA)

- [Security Jordan SOC workflow video 3](https://www.youtube.com/watch?v=8pWWwkhOkKM)

- [MITRE ATT&CK](https://attack.mitre.org/)

- [Wazuh quickstart](https://documentation.wazuh.com/current/quickstart.html)

- [TryHackMe SOC Level 1](https://tryhackme.com/path/outline/soclevel1)

- [LetsDefend SOC Analyst Learning Path](https://app.letsdefend.io/path/soc-analyst-learning-path)

- [Microsoft SC-200 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-200)

- [Microsoft Defender for Endpoint device investigation](https://learn.microsoft.com/en-us/defender-endpoint/investigate-machines)
