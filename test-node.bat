@echo off
chcp 65001 >nul
title تست نصب Node.js
color 0B

cls
echo.
echo  ╔══════════════════════════════════════════════╗
echo  ║                                              ║
echo  ║        🔍  تست نصب Node.js  🔍               ║
echo  ║                                              ║
echo  ╚══════════════════════════════════════════════╝
echo.
echo  در حال بررسی...
echo.

node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo  ╔══════════════════════════════════════════════╗
    echo  ║                                              ║
    echo  ║   ❌  Node.js نصب نیست!                      ║
    echo  ║                                              ║
    echo  ║   لطفاً از لینک زیر دانلود و نصب کنید:       ║
    echo  ║                                              ║
    echo  ║   https://nodejs.org                         ║
    echo  ║                                              ║
    echo  ║   (دکمه سبز بزرگ LTS را بزنید)              ║
    echo  ║                                              ║
    echo  ║   بعد از نصب، کامپیوتر را ریستارت کنید      ║
    echo  ║                                              ║
    echo  ╚══════════════════════════════════════════════╝
    echo.
    echo  آیا می‌خواهید سایت دانلود باز شود؟ (Y/N)
    set /p open="  پاسخ: "
    if /i "%open%"=="Y" start https://nodejs.org
    echo.
    pause
    exit
)

echo.
echo  ╔══════════════════════════════════════════════╗
echo  ║                                              ║
echo  ║   ✅  Node.js نصب است!                       ║
echo  ║                                              ║
for /f "tokens=*" %%i in ('node -v') do set NODE_VER=%%i
echo  ║   نسخه: %NODE_VER%                           ║
echo  ║                                              ║
echo  ╚══════════════════════════════════════════════╝
echo.

npm -v >nul 2>&1
if %errorlevel% neq 0 (
    echo  ❌  npm نصب نیست!
    pause
    exit
)

for /f "tokens=*" %%i in ('npm -v') do set NPM_VER=%%i
echo  ✅  npm هم نصب است! نسخه: %NPM_VER%
echo.
echo  ══════════════════════════════════════════════
echo.
echo  حالا می‌توانید فایل run.bat اصلی را اجرا کنید!
echo.
echo  ══════════════════════════════════════════════
echo.
pause
