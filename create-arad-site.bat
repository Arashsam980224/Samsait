@echo off
chcp 65001 >nul
title ساخت سایت دنیای آراد
color 0A

cls
echo.
echo  ╔══════════════════════════════════════════════════╗
echo  ║                                                  ║
echo  ║   🌟  ساخت سایت دنیای آراد  🌟                   ║
echo  ║                                                  ║
echo  ║   سایت را در Desktop می‌سازد و باز می‌کند       ║
echo  ║                                                  ║
echo  ╚══════════════════════════════════════════════════╝
echo.
echo  ⏳ در حال ساخت سایت...
echo.

REM Create HTML file using PowerShell
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
"$html = @'
<!DOCTYPE html>
<html lang=""fa"" dir=""rtl"">
<head>
<meta charset=""UTF-8"">
<meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
<title>دنیای آراد</title>
<link href=""https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700;900&display=swap"" rel=""stylesheet"">
<script src=""https://cdn.tailwindcss.com""></script>
<style>
*{font-family:'Vazirmatn',sans-serif}
html{scroll-behavior:smooth}
.card-hover{transition:all .3s}
.card-hover:hover{transform:translateY(-5px);box-shadow:0 20px 40px rgba(0,0,0,.1)}
</style>
</head>
<body class=""min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50"">
<nav class=""fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b-4 border-purple-500"">
<div class=""max-w-7xl mx-auto px-4 flex justify-between items-center h-16"">
<div class=""flex items-center gap-2"">
<span class=""text-3xl"">🌟</span>
<span class=""text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"">دنیای آراد</span>
</div>
<div class=""hidden md:flex gap-1"">
<a href=""#home"" class=""px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-purple-100"">🏠 خانه</a>
<a href=""#education"" class=""px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-purple-100"">📚 آموزش</a>
<a href=""#fun"" class=""px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-purple-100"">🎮 سرگرمی</a>
<a href=""#management"" class=""px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-purple-100"">📋 مدیریت</a>
<a href=""#shop"" class=""px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-purple-100"">🛍️ فروشگاه</a>
</div>
</div>
</nav>
<section id=""home"" class=""min-h-screen flex items-center justify-center pt-16"">
<div class=""text-center px-4 max-w-4xl mx-auto"">
<div class=""mb-8"">
<div class=""w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 p-1 mx-auto shadow-2xl"">
<div class=""w-full h-full rounded-full bg-white flex items-center justify-center text-7xl"">👦</div>
</div>
</div>
<h1 class=""text-4xl md:text-6xl font-black mb-4"">
<span class=""bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent"">سلام! من آراد هستم</span>
</h1>
<p class=""text-xl text-gray-600 mb-6"">دانش‌آموز کلاس دوم دبستان 📚</p>
<p class=""text-lg text-gray-500 mb-8"">به دنیای رنگارنگ من خوش آمدید! 🌈</p>
<div class=""grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"">
<div class=""bg-white/80 rounded-2xl p-4 shadow-lg card-hover"">
<div class=""text-3xl mb-2"">📖</div>
<div class=""text-2xl font-bold text-purple-600"">۱۲</div>
<div class=""text-sm text-gray-500"">کتاب</div>
</div>
<div class=""bg-white/80 rounded-2xl p-4 shadow-lg card-hover"">
<div class=""text-3xl mb-2"">🏆</div>
<div class=""text-2xl font-bold text-orange-500"">۸</div>
<div class=""text-sm text-gray-500"">جایزه</div>
</div>
<div class=""bg-white/80 rounded-2xl p-4 shadow-lg card-hover"">
<div class=""text-3xl mb-2"">🎨</div>
<div class=""text-2xl font-bold text-pink-500"">۲۵</div>
<div class=""text-sm text-gray-500"">نقاشی</div>
</div>
<div class=""bg-white/80 rounded-2xl p-4 shadow-lg card-hover"">
<div class=""text-3xl mb-2"">⭐</div>
<div class=""text-2xl font-bold text-yellow-500"">۱۵۰</div>
<div class=""text-sm text-gray-500"">ستاره</div>
</div>
</div>
</div>
</section>
<section id=""education"" class=""min-h-screen py-20 px-4"">
<div class=""max-w-6xl mx-auto"">
<div class=""text-center mb-12"">
<h2 class=""text-4xl md:text-5xl font-black mb-4"">
<span class=""bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"">📚 بخش آموزشی</span>
</h2>
<p class=""text-lg text-gray-600"">با بازی یاد بگیر!</p>
</div>
<div class=""grid md:grid-cols-3 gap-6"">
<div class=""bg-white rounded-3xl p-8 shadow-xl card-hover text-center"">
<div class=""w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center text-4xl mx-auto mb-4"">🔢</div>
<h3 class=""text-2xl font-bold mb-2"">ریاضی</h3>
<p class=""text-gray-500"">جمع و تفریق</p>
</div>
<div class=""bg-white rounded-3xl p-8 shadow-xl card-hover text-center"">
<div class=""w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center text-4xl mx-auto mb-4"">📝</div>
<h3 class=""text-2xl font-bold mb-2"">فارسی</h3>
<p class=""text-gray-500"">حروف و کلمات</p>
</div>
<div class=""bg-white rounded-3xl p-8 shadow-xl card-hover text-center"">
<div class=""w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-4xl mx-auto mb-4"">🔬</div>
<h3 class=""text-2xl font-bold mb-2"">علوم</h3>
<p class=""text-gray-500"">کشف دنیا</p>
</div>
</div>
</div>
</section>
<section id=""fun"" class=""min-h-screen py-20 px-4 bg-gradient-to-b from-green-50 to-blue-50"">
<div class=""max-w-6xl mx-auto"">
<div class=""text-center mb-12"">
<h2 class=""text-4xl md:text-5xl font-black mb-4"">
<span class=""bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent"">🎮 بخش سرگرمی</span>
</h2>
</div>
<div class=""grid md:grid-cols-3 gap-6"">
<div class=""bg-white rounded-3xl p-8 shadow-xl card-hover text-center"">
<div class=""w-20 h-20 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 flex items-center justify-center text-4xl mx-auto mb-4"">🧠</div>
<h3 class=""text-2xl font-bold mb-2"">بازی حافظه</h3>
</div>
<div class=""bg-white rounded-3xl p-8 shadow-xl card-hover text-center"">
<div class=""w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center text-4xl mx-auto mb-4"">🎨</div>
<h3 class=""text-2xl font-bold mb-2"">حدس رنگ</h3>
</div>
<div class=""bg-white rounded-3xl p-8 shadow-xl card-hover text-center"">
<div class=""w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-teal-400 flex items-center justify-center text-4xl mx-auto mb-4"">🔤</div>
<h3 class=""text-2xl font-bold mb-2"">حدس کلمه</h3>
</div>
</div>
</div>
</section>
<section id=""management"" class=""min-h-screen py-20 px-4 bg-gradient-to-b from-purple-50 to-indigo-50"">
<div class=""max-w-6xl mx-auto"">
<div class=""text-center mb-12"">
<h2 class=""text-4xl md:text-5xl font-black mb-4"">
<span class=""bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent"">📋 بخش مدیریت</span>
</h2>
</div>
<div class=""bg-white rounded-3xl p-6 shadow-xl max-w-2xl mx-auto"">
<h3 class=""text-2xl font-bold mb-6 text-center"">📅 برنامه امروز</h3>
<div class=""space-y-3"">
<div class=""flex items-center gap-4 p-4 rounded-2xl bg-green-50 border-2 border-green-200"">
<span class=""text-sm text-gray-500 w-12"">۷:۰۰</span>
<span class=""text-2xl"">🌅</span>
<span class=""flex-1 font-medium text-green-700 line-through"">بیدار شدن</span>
<span class=""text-green-500"">✓</span>
</div>
<div class=""flex items-center gap-4 p-4 rounded-2xl bg-green-50 border-2 border-green-200"">
<span class=""text-sm text-gray-500 w-12"">۸:۰۰</span>
<span class=""text-2xl"">🏫</span>
<span class=""flex-1 font-medium text-green-700 line-through"">مدرسه</span>
<span class=""text-green-500"">✓</span>
</div>
<div class=""flex items-center gap-4 p-4 rounded-2xl bg-gray-50"">
<span class=""text-sm text-gray-500 w-12"">۱۴:۰۰</span>
<span class=""text-2xl"">📝</span>
<span class=""flex-1 font-medium text-gray-700"">تکالیف</span>
</div>
<div class=""flex items-center gap-4 p-4 rounded-2xl bg-gray-50"">
<span class=""text-sm text-gray-500 w-12"">۱۵:۳۰</span>
<span class=""text-2xl"">⚽</span>
<span class=""flex-1 font-medium text-gray-700"">بازی و ورزش</span>
</div>
<div class=""flex items-center gap-4 p-4 rounded-2xl bg-gray-50"">
<span class=""text-sm text-gray-500 w-12"">۲۱:۰۰</span>
<span class=""text-2xl"">🌙</span>
<span class=""flex-1 font-medium text-gray-700"">خواب</span>
</div>
</div>
</div>
</div>
</section>
<section id=""shop"" class=""min-h-screen py-20 px-4 bg-gradient-to-b from-orange-50 to-pink-50"">
<div class=""max-w-6xl mx-auto"">
<div class=""text-center mb-12"">
<h2 class=""text-4xl md:text-5xl font-black mb-4"">
<span class=""bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"">🛍️ فروشگاه آراد</span>
</h2>
<div class=""mt-4 inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold"">💰 درآمد: ۴۵,۰۰۰ تومان</div>
</div>
<div class=""grid md:grid-cols-2 lg:grid-cols-3 gap-6"">
<div class=""bg-white rounded-3xl overflow-hidden shadow-xl card-hover"">
<div class=""h-40 bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center"">
<span class=""text-7xl"">🌸</span>
</div>
<div class=""p-5"">
<h3 class=""text-lg font-bold mb-2"">نقاشی گل‌ها</h3>
<p class=""text-sm text-gray-500 mb-4"">آبرنگ دست‌ساز</p>
<span class=""text-xl font-black text-green-600"">۱۵,۰۰۰ تومان</span>
</div>
</div>
<div class=""bg-white rounded-3xl overflow-hidden shadow-xl card-hover"">
<div class=""h-40 bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center"">
<span class=""text-7xl"">🦁</span>
</div>
<div class=""p-5"">
<h3 class=""text-lg font-bold mb-2"">کاردستی حیوانات</h3>
<p class=""text-sm text-gray-500 mb-4"">۵ حیوان بامزه</p>
<span class=""text-xl font-black text-green-600"">۲۵,۰۰۰ تومان</span>
</div>
</div>
<div class=""bg-white rounded-3xl overflow-hidden shadow-xl card-hover"">
<div class=""h-40 bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center"">
<span class=""text-7xl"">🎨</span>
</div>
<div class=""p-5"">
<h3 class=""text-lg font-bold mb-2"">آموزش نقاشی</h3>
<p class=""text-sm text-gray-500 mb-4"">ویدیوی آموزشی</p>
<span class=""text-xl font-black text-green-600"">۱۰,۰۰۰ تومان</span>
</div>
</div>
</div>
<div class=""mt-12 bg-white rounded-3xl p-8 shadow-xl"">
<h3 class=""text-2xl font-bold mb-6 text-center"">💰 گزارش درآمد</h3>
<div class=""grid md:grid-cols-3 gap-6"">
<div class=""bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-6 text-center text-white"">
<div class=""text-3xl mb-2"">💵</div>
<div class=""text-2xl font-bold"">۴۵,۰۰۰</div>
<div class=""text-sm opacity-80"">درآمد (تومان)</div>
</div>
<div class=""bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl p-6 text-center text-white"">
<div class=""text-3xl mb-2"">📦</div>
<div class=""text-2xl font-bold"">۱۲</div>
<div class=""text-sm opacity-80"">فروش</div>
</div>
<div class=""bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl p-6 text-center text-white"">
<div class=""text-3xl mb-2"">⭐</div>
<div class=""text-2xl font-bold"">۴.۸</div>
<div class=""text-sm opacity-80"">امتیاز</div>
</div>
</div>
</div>
</div>
</section>
<footer class=""bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white py-12 px-4"">
<div class=""max-w-6xl mx-auto text-center"">
<p class=""text-white/80"">🌈 ساخته شده با ❤️ توسط آراد | ۱۴۰۳</p>
</div>
</footer>
</body>
</html>
'@
Set-Content -Path ""$env:USERPROFILE\Desktop\arad-website.html"" -Value $html -Encoding UTF8
Start-Process ""$env:USERPROFILE\Desktop\arad-website.html"""

echo.
echo  ══════════════════════════════════════════════════
echo.
echo  ✅  سایت با موفقیت ساخته شد!
echo.
echo  📁 فایل در Desktop شما: arad-website.html
echo  🌐 مرورگر باز شد!
echo.
echo  ══════════════════════════════════════════════════
echo.
timeout /t 5 >nul
exit
