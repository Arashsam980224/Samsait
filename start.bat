@echo off
chcp 65001 >nul
title دنیای آراد - شروع سریع
color 0A

cls
echo.
echo  ╔══════════════════════════════════════════════╗
echo  ║                                              ║
echo  ║   🌟  دنیای آراد - شروع سریع  🌟             ║
echo  ║                                              ║
echo  ╚══════════════════════════════════════════════╝
echo.

REM Check Node.js
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo  ❌  Node.js نصب نیست!
    echo.
    echo  در حال باز کردن سایت دانلود...
    echo.
    start https://nodejs.org
    echo.
    echo  ══════════════════════════════════════════════
    echo.
    echo  لطفاً این مراحل را انجام دهید:
    echo.
    echo  1. در سایت باز شده، دکمه سبز بزرگ (LTS) را بزنید
    echo  2. فایل دانلود شده را اجرا کنید
    echo  3. همه Next ها را بزنید تا نصب شود
    echo  4. کامپیوتر را ریستارت کنید
    echo  5. دوباره این فایل را اجرا کنید
    echo.
    echo  ══════════════════════════════════════════════
    echo.
    pause
    exit
)

echo  ✅  Node.js نصب است!
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo  📦  در حال نصب وابستگی‌ها...
    echo  (این کار ممکن است 2-3 دقیقه طول بکشد)
    echo.
    call npm install
    echo.
    echo  ✅  نصب وابستگی‌ها تمام شد!
    echo.
)

echo  🚀  در حال اجرای پروژه...
echo.
echo  ══════════════════════════════════════════════
echo.
echo  🌐  مرورگر را باز کنید: http://localhost:5173
echo.
echo  ⛔  برای توقف: Ctrl+C را بزنید
echo.
echo  ══════════════════════════════════════════════
echo.

call npm run dev
