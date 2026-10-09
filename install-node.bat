@echo off
chcp 65001 >nul
title نصب خودکار Node.js
color 0E

cls
echo.
echo  ╔══════════════════════════════════════════════╗
echo  ║                                              ║
echo  ║     📥  نصب خودکار Node.js  📥               ║
echo  ║                                              ║
echo  ╚══════════════════════════════════════════════╝
echo.
echo  این ابزار Node.js را دانلود و نصب می‌کند.
echo.
echo  ⚠️  لطفاً قبل از ادامه:
echo     - مرورگر اینترنت باز است
echo     - اتصال اینترنت دارید
echo.
echo  ══════════════════════════════════════════════
echo.

REM Check if Node.js is already installed
node -v >nul 2>&1
if %errorlevel% equ 0 (
    echo  ✅  Node.js قبلاً نصب شده است!
    echo.
    for /f "tokens=*" %%i in ('node -v') do set NODE_VER=%%i
    echo  نسخه فعلی: %NODE_VER%
    echo.
    echo  نیازی به نصب مجدد نیست.
    echo.
    pause
    exit
)

echo  🌐 در حال باز کردن سایت دانلود Node.js...
echo.
echo  بعد از باز شدن سایت:
echo  1. روی دکمه سبز بزرگ (LTS) کلیک کنید
echo  2. فایل دانلود شده را اجرا کنید
echo  3. همه Next ها را بزنید تا نصب شود
echo  4. بعد از نصب، این پنجره را ببندید
echo  5. کامپیوتر را ریستارت کنید
echo.
echo  ══════════════════════════════════════════════
echo.

start https://nodejs.org/en/download

echo  سایت دانلود باز شد!
echo.
echo  بعد از دانلود و نصب Node.js:
echo.
echo  1. کامپیوتر را ریستارت کنید
echo  2. فایل test-node.bat را اجرا کنید
echo  3. اگر همه چیز درست بود، run.bat را اجرا کنید
echo.
echo  ══════════════════════════════════════════════
echo.
pause
