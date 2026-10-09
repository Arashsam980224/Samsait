@echo off
chcp 65001 >nul
title دنیای آراد - مدیریت پروژه
color 0A

:MENU
cls
echo.
echo  ╔══════════════════════════════════════════════╗
echo  ║                                              ║
echo  ║       🌟  دنیای آراد - مدیریت پروژه  🌟      ║
echo  ║                                              ║
echo  ╠══════════════════════════════════════════════╣
echo  ║                                              ║
echo  ║   [1] نصب وابستگی‌ها (npm install)            ║
echo  ║                                              ║
echo  ║   [2] اجرای پروژه (npm run dev)               ║
echo  ║                                              ║
echo  ║   [3] ساخت پروژه (npm run build)              ║
echo  ║                                              ║
echo  ║   [4] باز کردن پوشه پروژه                     ║
echo  ║                                              ║
echo  ║   [5] پاک کردن فایل‌های ساخت (dist)           ║
echo  ║                                              ║
echo  ║   [6] خروج                                    ║
echo  ║                                              ║
echo  ╚══════════════════════════════════════════════╝
echo.
set /p choice="لطفاً عدد گزینه مورد نظر را وارد کنید: "

if "%choice%"=="1" goto INSTALL
if "%choice%"=="2" goto RUN
if "%choice%"=="3" goto BUILD
if "%choice%"=="4" goto OPEN
if "%choice%"=="5" goto CLEAN
if "%choice%"=="6" goto EXIT

echo.
echo ❌ گزینه نامعتبر! لطفاً دوباره تلاش کنید.
timeout /t 2 >nul
goto MENU

:INSTALL
cls
echo.
echo ══════════════════════════════════════════════
echo   📦 در حال نصب وابستگی‌ها...
echo ══════════════════════════════════════════════
echo.
call npm install
echo.
echo ✅ نصب با موفقیت انجام شد!
echo.
pause
goto MENU

:RUN
cls
echo.
echo ══════════════════════════════════════════════
echo   🚀 در حال اجرای پروژه...
echo   🌐 مرورگر را باز کنید: http://localhost:5173
echo   ⛔ برای توقف: Ctrl+C
echo ══════════════════════════════════════════════
echo.
call npm run dev
goto MENU

:BUILD
cls
echo.
echo ══════════════════════════════════════════════
echo   🔨 در حال ساخت پروژه...
echo ══════════════════════════════════════════════
echo.
call npm run build
echo.
echo ✅ ساخت پروژه با موفقیت انجام شد!
echo 📁 فایل‌های خروجی در پوشه dist قرار دارند.
echo.
pause
goto MENU

:OPEN
cls
echo.
echo 📂 در حال باز کردن پوشه پروژه...
start .
timeout /t 1 >nul
goto MENU

:CLEAN
cls
echo.
echo ══════════════════════════════════════════════
echo   🧹 در حال پاک کردن فایل‌های ساخت...
echo ══════════════════════════════════════════════
echo.
if exist dist (
    rmdir /s /q dist
    echo ✅ پوشه dist با موفقیت حذف شد.
) else (
    echo ℹ️  پوشه dist وجود ندارد.
)
echo.
pause
goto MENU

:EXIT
cls
echo.
echo 👋 خداحافظ! روز خوبی داشته باشی!
echo.
timeout /t 2 >nul
exit
