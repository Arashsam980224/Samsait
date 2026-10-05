import { useState } from 'react'

interface Product {
  id: number
  title: string
  description: string
  price: number
  emoji: string
  category: string
  badge?: string
}

const products: Product[] = [
  {
    id: 1,
    title: 'نقاشی گل‌های بهاری',
    description: 'نقاشی آبرنگ دست‌ساز با موضوع طبیعت',
    price: 15000,
    emoji: '🌸',
    category: 'نقاشی',
    badge: 'جدید'
  },
  {
    id: 2,
    title: 'کاردستی حیوانات',
    description: 'مجموعه ۵ حیوان بامزه با مقوا و کاغذ رنگی',
    price: 25000,
    emoji: '🦁',
    category: 'کاردستی',
  },
  {
    id: 3,
    title: 'آموزش نقاشی ساده',
    description: 'ویدیوی آموزش کشیدن حیوانات برای بچه‌ها',
    price: 10000,
    emoji: '🎨',
    category: 'آموزش',
    badge: 'پرفروش'
  },
  {
    id: 4,
    title: 'داستان مصور من',
    description: 'یک داستان کوتاه ۵ صفحه‌ای با نقاشی',
    price: 8000,
    emoji: '📖',
    category: 'نقاشی',
  },
  {
    id: 5,
    title: 'آموزش اعداد با بازی',
    description: 'بازی آموزشی جمع و تفریق برای کلاس اول و دوم',
    price: 12000,
    emoji: '🔢',
    category: 'آموزش',
  },
  {
    id: 6,
    title: 'کارت تبریک دست‌ساز',
    description: 'کارت‌های تبریک تولد و عید با طراحی کودکانه',
    price: 5000,
    emoji: '🎉',
    category: 'کاردستی',
    badge: 'محبوب'
  },
]

const categories = ['همه', 'نقاشی', 'کاردستی', 'آموزش']

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('همه')
  const [cart, setCart] = useState<number[]>([])
  const [showCart, setShowCart] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const filteredProducts = selectedCategory === 'همه'
    ? products
    : products.filter(p => p.category === selectedCategory)

  const addToCart = (id: number) => {
    setCart([...cart, id])
  }

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  const totalAmount = cart.reduce((sum, id) => {
    const product = products.find(p => p.id === id)
    return sum + (product?.price || 0)
  }, 0)

  const handlePurchase = () => {
    setShowSuccess(true)
    setCart([])
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-orange-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
              🛍️ فروشگاه آراد
            </span>
          </h2>
          <p className="text-lg text-gray-600">آثار هنری و آموزشی دست‌ساز من!</p>
          <div className="mt-4 inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold">
            💰 درآمد این ماه: ۴۵,۰۰۰ تومان
          </div>
        </div>

        {/* Categories */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-orange-100 shadow'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cart Button */}
        <div className="fixed bottom-6 left-6 z-40">
          <button
            onClick={() => setShowCart(!showCart)}
            className="relative px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold shadow-2xl hover:scale-110 transition-all"
          >
            🛒 سبد خرید
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 rounded-full text-sm flex items-center justify-center animate-bounce">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        {/* Cart Modal */}
        {showCart && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowCart(false)}>
            <div className="bg-white rounded-3xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">🛒 سبد خرید</h3>
                <button onClick={() => setShowCart(false)} className="text-gray-400 hover:text-gray-600 text-2xl">✕</button>
              </div>

              {cart.length === 0 ? (
                <p className="text-center text-gray-500 py-8">سبد خرید خالی است!</p>
              ) : (
                <>
                  <div className="space-y-3 mb-4">
                    {cart.map((id, index) => {
                      const product = products.find(p => p.id === id)
                      return product ? (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{product.emoji}</span>
                            <span className="font-medium">{product.title}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-purple-600">{product.price.toLocaleString('fa-IR')} ت</span>
                            <button onClick={() => removeFromCart(index)} className="text-red-400 hover:text-red-600">✕</button>
                          </div>
                        </div>
                      ) : null
                    })}
                  </div>

                  <div className="border-t pt-4 mb-4">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>جمع کل:</span>
                      <span className="text-green-600">{totalAmount.toLocaleString('fa-IR')} تومان</span>
                    </div>
                  </div>

                  <button
                    onClick={handlePurchase}
                    className="w-full py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all"
                  >
                    💳 پرداخت و خرید
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-8 text-center animate-slide-in">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">خرید با موفقیت انجام شد!</h3>
              <p className="text-gray-500">ممنون از خریدت! 🙏</p>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl card-hover transition-all duration-300"
            >
              {/* Product Image Area */}
              <div className="h-40 bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center relative">
                <span className="text-7xl">{product.emoji}</span>
                {product.badge && (
                  <span className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{product.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-green-600">
                    {product.price.toLocaleString('fa-IR')} تومان
                  </span>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-sm hover:scale-105 transition-all"
                  >
                    🛒 افزودن
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Income Section */}
        <div className="mt-12 bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">💰 گزارش درآمد</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-6 text-center text-white">
              <div className="text-3xl mb-2">💵</div>
              <div className="text-2xl font-bold">۴۵,۰۰۰</div>
              <div className="text-sm opacity-80">درآمد این ماه (تومان)</div>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl p-6 text-center text-white">
              <div className="text-3xl mb-2">📦</div>
              <div className="text-2xl font-bold">۱۲</div>
              <div className="text-sm opacity-80">تعداد فروش</div>
            </div>
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl p-6 text-center text-white">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-2xl font-bold">۴.۸</div>
              <div className="text-sm opacity-80">امتیاز مشتریان</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-2xl text-center">
            <p className="text-yellow-700 font-medium">
              🌟 آفرین! تو داری یاد می‌گیری چطور از هنرت درآمد کسب کنی!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
