@echo off
chcp 65001 >nul
title نصب سایت دنیای آراد
color 0A

cls
echo.
echo  ╔══════════════════════════════════════════════╗
echo  ║                                              ║
echo  ║   🌟  نصب سایت دنیای آراد  🌟                ║
echo  ║                                              ║
echo  ╚══════════════════════════════════════════════╝
echo.
echo  این ابزار فایل‌های سایت را در پروژه شما نصب می‌کند.
echo.
echo  ⚠️  مطمئن شوید که:
echo     1. در پوشه پروژه arad-website هستید
echo     2. npm install قبلاً اجرا شده
echo.
echo  ══════════════════════════════════════════════
echo.

REM Install Tailwind
echo  📦  نصب Tailwind CSS...
call npm install tailwindcss @tailwindcss/vite
echo.
echo  ✅  Tailwind نصب شد!
echo.

REM Create src folder if not exists
if not exist "src\components" mkdir "src\components"

echo  📝  فایل‌ها باید دستی کپی شوند.
echo.
echo  ══════════════════════════════════════════════
echo.
echo  لطفاً مراحل زیر را انجام دهید:
echo.
echo  1. پوشه پروژه را باز کنید:
echo     %cd%
echo.
echo  2. فایل‌های زیر را از سایت دریافت کنید:
echo     - src\App.tsx
echo     - src\index.css
echo     - src\components\Navbar.tsx
echo     - src\components\Hero.tsx
echo     - src\components\Education.tsx
echo     - src\components\Fun.tsx
echo     - src\components\Management.tsx
echo     - src\components\Shop.tsx
echo     - src\components\Footer.tsx
echo.
echo  3. محتوای هر فایل را کپی و جایگزین کنید
echo.
echo  ══════════════════════════════════════════════
echo.

REM Open folder
start .

echo  پوشه پروژه باز شد!
echo.
echo  حالا می‌توانید فایل‌ها را کپی کنید.
echo.
pause
