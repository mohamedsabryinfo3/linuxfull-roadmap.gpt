# تدقيق مصادر Linux – النسخة الموحدة

## قاعدة التصميم
لا توجد دروس اختيارية داخل المسار النشط. كل درس نشط مطلوب. التصنيفات هي: أساسي، استكمال مطلوب، تطبيق عملي. المحتوى الذي لم يدخل المسار إما مكرر بوضوح أو يخص مرحلة SOC اللاحقة.

## العدد
- دروس نشطة: **100**.
- كلها تدخل في حساب الإنجاز.
- مكونات المصادر: أحمد عيد (9 مقاطع تأسيسية)، الطناني (72 محاضرة كاملة)، عبدالله النعيمي (8 محاضرات مكمّلة)، Security Jordan Bash (10 مقاطع مكمّلة)، Security Jordan text processing (مقطع واحد).

## لماذا أحمد عيد موجود؟
أُدرجت الفصول 00:00–01:50:00 التي تقدم أنظمة التشغيل، المكونات، Linux Kernel، التفاعل مع Kernel، لماذا Linux، Virtualization، Host/Guest، وتجهيز VM. بقية الفصول من File System وTerminal إلى Bash مكررة مع الطناني، ولذلك لا نشاهدها مرتين.

## دورة الطناني
جميع المحاضرات الـ72 مدرجة في تسلسلها الأصلي مع العنوان والمدة والرابط إلى قائمة التشغيل عند رقم الدرس.

## عبدالله النعيمي
المدرج: #14 external package sources، #15 IP/Ports، #16 Connectivity Tests، #17 Port/Service Scanning، #21 System Monitoring، #23 System Logs، #24 Troubleshooting، #27 Final Challenge. هذه إضافات غير مكررة بما يكفي وتخدم Linux عمليًا.

المستبعد بسبب التكرار: #01–13، #18–20، #22، #26، #28. الدرس #25 خاص باستخدام Linux في اختبار الاختراق وليس شرطًا لإتمام Linux Administration الحالي، ونحتفظ به كموضوع هجومي منفصل إذا احتجته لاحقًا.

## Bash – ما الذي تمت إضافته فعلًا؟
من Security Jordan Full Bash (M5-MCMrC0sI) أُدرجت المقاطع: أول Script، Shebang، تشغيل Script، User Input، Operators، System Information project، Ping Checker، Loops وقراءة ملفات سطرًا بسطر، Arrays، Functions. تم استبعاد تعريفات Bash والمتغيرات وIf وبعض الحلقات المتكررة لأن الطناني #55–63 يغطيها.

## أدوات معالجة النصوص
أُدرج مقطع AWK / SED / CUT / TR من Linux for CyberSecurity Part 2 عند 03:15:40؛ مدة هذا الفصل لم تكن منشورة بشكل منفصل، لذلك تركت غير محددة بدل التخمين.

## قوائم أخرى من المستخدم
- مصطفى عبدالسلام – Linux Practical Guide: لم تُدرج فيديوهاته التسعة كدروس منفصلة لأن (Setting up a lab, OS overview, Linux intro, Debian install, filesystem, users/groups/permissions, terminal) مغطاة بالفعل في مقاطع أحمد عيد والطناني.
- أحمد عيد: بقية فصول الفيديو 01:50–06:28 لم تدرج لتجنب تكرار الملفّات والأوامر والصلاحيات والحزم والخدمات والـ pipes والـ grep والـ redirection التي يشرحها الطناني.
- Security Jordan Linux Part 1: لم نضف دورة كاملة ثانية لأنها تعيد أساسيات Linux Administration.
- Security Jordan Linux Part 2: أدرجنا AWK/SED/CUT/TR فقط؛ SSH وAuthentication وLogs وPackages وBash متغطية في الطناني والمقاطع المختارة.
- Bash Scripting Course Tutorial Arabic (Level 0): الرابط الذي أرسله المستخدم كان للفيديو While Loop Part 1. هذا مكرر من الطناني #61، كما أن مسار Bash المختار يغطي الحلقات وقراءة الملفات. لم أختلق فهرسًا لبقية القائمة لأن فهرسها لم يتوفر للفحص العام.

## أشياء لا تدخل في Linux الحالي – تبقى لمرحلة ما بعد Linux وSecurity+
- Security Jordan Blue Team & SOC Foundations (3 فيديوهات): SOC Fundamentals؛ SIEM, Logs & Alerts؛ SOC Analyst Workflow, Alert Triage & Investigation.
- دورة Ethical Hacking 6 ساعات: نحتفظ بأجزاء Nmap/Network Recon، MITM، ARP Poisoning، DNS Spoofing وWireshark للمرحلة الأمنية، ولا ندرسها داخل Linux Administration.

## مصادر الويب للتحقق
- Tanany 72-lesson listing: https://itoutbreak.com/explore/PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc
- Ahmed Eid public chapter list: https://zolotube.com/watch?v=8f2Zsb89uoM
- Security Jordan Bash full course: https://www.youtube.com/watch?v=M5-MCMrC0sI
