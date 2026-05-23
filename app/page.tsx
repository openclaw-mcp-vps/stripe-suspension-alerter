export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Fintech Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Payment Processor Suspensions{' '}
          <span className="text-[#58a6ff]">Before They Happen</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Real-time risk scoring and early warning alerts for Stripe, PayPal, and Square accounts.
          Know your risk level before your processor does.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🔍', title: 'Risk Scoring', desc: 'Continuous health score across dispute rate, chargeback ratio, and compliance flags.' },
            { icon: '🚨', title: 'Instant Alerts', desc: 'Email and Slack notifications the moment your risk score crosses a threshold.' },
            { icon: '📊', title: 'Multi-Processor', desc: 'Monitor Stripe, PayPal, and Square from a single unified dashboard.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#8b949e] text-sm mb-6">/month per workspace</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 text-left mb-8">
            {[
              'Up to 5 payment processor accounts',
              'Real-time risk score dashboard',
              'Email + Slack alerts',
              'Webhook & scheduled monitoring',
              'Transaction pattern analysis',
              'Compliance flag detection',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which payment processors do you support?',
              a: 'We currently support Stripe, PayPal, and Square. Connect via API keys and we handle the rest.',
            },
            {
              q: 'How early can you detect suspension risk?',
              a: 'Our risk engine flags elevated dispute rates, unusual transaction patterns, and compliance issues days or weeks before processors typically act.',
            },
            {
              q: 'Is my payment processor data secure?',
              a: 'Yes. We use read-only API scopes, encrypt all credentials at rest, and never store raw transaction data.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Stripe Suspension Alerter. All rights reserved.
      </footer>
    </main>
  )
}
