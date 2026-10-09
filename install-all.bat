@echo off
chcp 65001 >nul
title نصب کامل سایت دنیای آراد
color 0A

cls
echo.
echo  ╔══════════════════════════════════════════════════╗
echo  ║                                                  ║
echo  ║   🌟  نصب کامل سایت دنیای آراد  🌟               ║
echo  ║                                                  ║
echo  ║   این ابزار همه فایل‌ها را خودکار می‌سازد        ║
echo  ║                                                  ║
echo  ╚══════════════════════════════════════════════════╝
echo.

REM Check if in correct folder
if not exist "package.json" (
    echo  ❌  شما در پوشه پروژه نیستید!
    echo.
    echo  لطفاً اول به پوشه پروژه بروید:
    echo  cd Desktop\arad-website
    echo.
    pause
    exit /b
)

REM Install Tailwind
echo  📦  نصب Tailwind CSS...
call npm install tailwindcss @tailwindcss/vite
echo.

REM Create folders
if not exist "src\components" mkdir "src\components"

echo  📝  ساخت فایل‌های پروژه...
echo.

REM ===== vite.config.ts =====
(
echo import { defineConfig } from 'vite'
echo import react from '@vitejs/plugin-react'
echo import tailwindcss from '@tailwindcss/vite'
echo.
echo export default defineConfig({
echo   plugins: [react(), tailwindcss()],
echo })
) > vite.config.ts
echo  ✅  vite.config.ts

REM ===== src/index.css =====
(
echo @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap'^);
echo @import "tailwindcss";
echo.
echo * {
echo   font-family: 'Vazirmatn', sans-serif;
echo }
echo.
echo html {
echo   scroll-behavior: smooth;
echo }
echo.
echo @keyframes float {
echo   0%%, 100%% { transform: translateY(0px); }
echo   50%% { transform: translateY(-10px); }
echo }
echo.
echo @keyframes bounce-slow {
echo   0%%, 100%% { transform: translateY(0); }
echo   50%% { transform: translateY(-5px); }
echo }
echo.
echo @keyframes sparkle {
echo   0%%, 100%% { opacity: 1; transform: scale(1); }
echo   50%% { opacity: 0.5; transform: scale(1.2); }
echo }
echo.
echo @keyframes slideIn {
echo   from { opacity: 0; transform: translateY(20px); }
echo   to { opacity: 1; transform: translateY(0); }
echo }
echo.
echo .animate-float { animation: float 3s ease-in-out infinite; }
echo .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
echo .animate-sparkle { animation: sparkle 2s ease-in-out infinite; }
echo .animate-slide-in { animation: slideIn 0.5s ease-out forwards; }
echo .card-hover { transition: all 0.3s ease; }
echo .card-hover:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
) > src\index.css
echo  ✅  src/index.css

echo.
echo  ✅  همه فایل‌ها ساخته شدند!
echo.
echo  ══════════════════════════════════════════════════
echo.
echo  حالا باید فایل‌های کامپوننت‌ها را دستی کپی کنید.
echo  پوشه پروژه باز می‌شود...
echo.

start .

echo  لطفاً به آدرس زیر بروید و کدها را کپی کنید:
echo.
echo  فایل‌ها در این مسیرها قرار می‌گیرند:
echo    src\App.tsx
echo    src\components\Navbar.tsx
echo    src\components\Hero.tsx
echo    src\components\Education.tsx
echo    src\components\Fun.tsx
echo    src\components\Management.tsx
echo    src\components\Shop.tsx
echo    src\components\Footer.tsx
echo.
echo  ══════════════════════════════════════════════════
echo.
pause
