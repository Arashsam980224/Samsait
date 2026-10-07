export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">🌟 دنیای آراد</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              یک سایت شخصی آموزشی-تفریحی برای یادگیری بهتر و سرگرمی بیشتر.
              اینجا همه چیز رنگارنگ و شاده! 🎉
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">🔗 لینک‌های سریع</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-white transition-all">🏠 خانه</a></li>
              <li><a href="#education" className="text-white/80 hover:text-white transition-all">📚 آموزش</a></li>
              <li><a href="#fun" className="text-white/80 hover:text-white transition-all">🎮 سرگرمی</a></li>
              <li><a href="#management" className="text-white/80 hover:text-white transition-all">📋 مدیریت</a></li>
              <li><a href="#shop" className="text-white/80 hover:text-white transition-all">🛍️ فروشگاه</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">📬 ارتباط با ما</h3>
            <div className="space-y-2 text-white/80 text-sm">
              <p>📧 ایمیل: arad@example.com</p>
              <p>📱 تلفن: ۰۹۱۲-XXX-XXXX</p>
              <p>📍 شهر: تهران</p>
            </div>
            <div className="flex gap-3 mt-4">
              <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 cursor-pointer transition-all">📸</span>
              <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 cursor-pointer transition-all">🎬</span>
              <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 cursor-pointer transition-all">💬</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/60 text-sm">
            🌈 ساخته شده با ❤️ توسط آراد و خانواده‌اش | ۱۴۰۳
          </p>
          <p className="text-white/40 text-xs mt-2">
            تمامی حقوق محفوظ است ©
          </p>
        </div>
      </div>
    </footer>
  )
}
