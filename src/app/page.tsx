import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen" style={{ backgroundColor: '#FFF9F2' }}>
      {/* Hero */}
      <section className="flex flex-col items-center justify-center flex-1 px-6 py-20 text-center">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 animate-pulse-glow"
          style={{ backgroundColor: '#F97316' }}
        >
          🗺️
        </div>
        <h1 className="text-5xl font-bold mb-3" style={{ color: '#1F2937' }}>
          Mad<span style={{ color: '#F97316' }}>Map</span>
        </h1>
        <p className="text-xl font-medium mb-2" style={{ color: '#6B7280' }}>
          Every Scan Puts MadMix on the Map.
        </p>
        <p className="max-w-xl text-base mt-4 leading-relaxed" style={{ color: '#6B7280' }}>
          Scan the QR code inside your MadMix packet to earn rewards — and help us bring MadMix to every corner of India.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link
            href="/scan/demo-qr-001"
            className="px-8 py-4 rounded-full font-semibold text-white text-lg transition-transform hover:scale-105 active:scale-95"
            style={{ backgroundColor: '#F97316' }}
          >
            📦 Scan QR Code
          </Link>
          <Link
            href="/sos"
            className="px-8 py-4 rounded-full font-semibold text-lg transition-transform hover:scale-105 active:scale-95 border-2"
            style={{ borderColor: '#EF4444', color: '#EF4444', backgroundColor: 'white' }}
          >
            🆘 Bring MadMix Here
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-center mb-10" style={{ color: '#1F2937' }}>
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: '📲',
              title: 'Scan to Earn',
              desc: 'Find the unique QR code inside your MadMix packet and scan it to instantly earn loyalty points.',
              color: '#F97316',
            },
            {
              icon: '🆘',
              title: 'Report Stockouts',
              desc: 'Can\'t find MadMix? Tap "Bring MadMix Here" to report it. Your report helps us fix availability.',
              color: '#EF4444',
            },
            {
              icon: '🎁',
              title: 'Redeem Rewards',
              desc: 'Trade your points for coupons, free products, and exclusive flavour drops.',
              color: '#22C55E',
            },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: f.color + '20' }}
              >
                {f.icon}
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#1F2937' }}>
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Value table */}
      <section className="px-6 py-12 max-w-3xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-center mb-8" style={{ color: '#1F2937' }}>
          Every Action Creates Value
        </h2>
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: '#F97316' }}>
                <th className="text-left px-6 py-3 text-white font-semibold">Your Action</th>
                <th className="text-left px-6 py-3 text-white font-semibold">Points</th>
                <th className="text-left px-6 py-3 text-white font-semibold">Value Created</th>
              </tr>
            </thead>
            <tbody>
              {[
                { action: 'Scan QR Code', pts: '50–100', value: 'Confirms purchase location' },
                { action: 'Leave Review', pts: '25', value: 'Product feedback' },
                { action: 'Press SOS', pts: '30', value: 'Lost-demand data' },
                { action: 'Refer a Friend', pts: '150', value: 'Customer acquisition' },
                { action: 'Download App', pts: '75', value: 'Deeper engagement' },
              ].map((row, i) => (
                <tr key={row.action} style={{ backgroundColor: i % 2 === 0 ? '#FFF9F2' : 'white' }}>
                  <td className="px-6 py-3 font-medium" style={{ color: '#1F2937' }}>{row.action}</td>
                  <td className="px-6 py-3 font-bold" style={{ color: '#F97316' }}>{row.pts}</td>
                  <td className="px-6 py-3" style={{ color: '#6B7280' }}>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Nav links */}
      <nav className="border-t border-gray-200 bg-white px-6 py-4 flex justify-center gap-6 text-sm font-medium">
        <Link href="/rewards" className="hover:text-orange-500 transition-colors" style={{ color: '#6B7280' }}>
          🏆 Rewards
        </Link>
        <Link href="/sos" className="hover:text-red-500 transition-colors" style={{ color: '#6B7280' }}>
          🆘 SOS
        </Link>
        <Link href="/dashboard" className="hover:text-orange-500 transition-colors" style={{ color: '#6B7280' }}>
          📊 Dashboard
        </Link>
      </nav>
    </main>
  )
}
