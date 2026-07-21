"use client";

import Image from "next/image";
const DATASET_ID = "1537899447469477";

function TelegramAvatar() {
  return (
    <div className="relative w-28 h-28 shrink-0">
      <div className="w-full h-full rounded-full overflow-hidden border-[3px] border-[var(--tg-blue)] shadow-lg shadow-[var(--tg-blue)]/20">
        <Image
          src="/Logo.jpeg"
          alt="Price Action Trader"
          width={112}
          height={112}
          className="w-full h-full object-cover"
          preload
        />
      </div>
      <div className="absolute -bottom-1 -right-1 bg-[var(--tg-green)] w-6 h-6 rounded-full border-[3px] border-[var(--tg-darker)] flex items-center justify-center">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
        </svg>
      </div>
    </div>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.425-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function JoinTelegramButton() {
  return (
    <a
      href="https://t.me/+ySgPIgsAlEY2MWE0"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.98]"
      style={{
        background: "linear-gradient(135deg, var(--tg-blue), #00a3e0)",
        color: "white",
        boxShadow: "0 4px 20px rgba(0,136,204,0.3)",
      }}
    >
      <TelegramIcon />
      Join via Telegram
    </a>
  );
}

function BottomNav() {
  const tabs = [
    { label: "Profile", icon: "👤", active: true },
    { label: "Signals", icon: "📈", active: false },
    { label: "Account", icon: "💰", active: false },
    { label: "Settings", icon: "⚙️", active: false },
  ];
  return (
    <div className="flex items-center justify-around py-2 px-2 bg-[var(--tg-dark)]/80 backdrop-blur-md border-t border-white/5">
      {tabs.map((t) => (
        <button
          key={t.label}
          className={`flex flex-col items-center gap-0.5 py-1.5 px-4 rounded-lg transition-colors ${
            t.active
              ? "text-[var(--tg-accent)]"
              : "text-[var(--tg-secondary)] hover:text-white"
          }`}
        >
          <span className="text-lg">{t.icon}</span>
          <span className="text-[10px] font-medium">{t.label}</span>
        </button>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-[var(--tg-darker)] font-sans max-w-md mx-auto w-full relative min-h-dvh">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, var(--tg-blue) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 flex flex-col flex-1 overflow-y-auto">
        <div className="px-5 pt-8 pb-4 bg-gradient-to-b from-[var(--tg-dark)] to-[var(--tg-darker)]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-[var(--tg-accent)]">
              <TelegramIcon />
              <span className="text-xs font-semibold tracking-wide uppercase">Telegram</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-[var(--tg-secondary)] bg-[var(--tg-dark)] px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--tg-green)] inline-block" />
              Dataset #{DATASET_ID}
            </div>
          </div>

          <div className="flex items-center gap-5">
            <TelegramAvatar />
            <div className="flex flex-col gap-1 min-w-0">
              <h1 className="text-xl font-bold truncate">Price Action Trader</h1>
              <span className="text-sm text-[var(--tg-secondary)]">
                @priceactiontrader
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[11px] bg-[var(--tg-highlight)] text-[var(--tg-accent)] px-2 py-0.5 rounded-full font-medium">
                  Forex Signals
                </span>
                <span className="text-[11px] bg-[var(--tg-highlight)] text-[var(--tg-accent)] px-2 py-0.5 rounded-full font-medium">
                  Premium
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 py-4 space-y-5">
          <JoinTelegramButton />

          <div className="bg-[var(--tg-dark)] rounded-2xl p-4 space-y-3">
            <span className="text-[var(--tg-accent)] font-semibold text-sm">
              Recent Performance
            </span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-sm">
                <span className="text-[var(--tg-green)] text-lg">▲</span>
                <span className="font-bold text-white">+2,340 pips</span>
                <span className="text-[10px] text-[var(--tg-secondary)]">this year</span>
              </div>
            </div>
            <div className="flex gap-1.5">
              {[
                { label: "Mon", win: true },
                { label: "Tue", win: true },
                { label: "Wed", win: false },
                { label: "Thu", win: true },
                { label: "Fri", win: true },
                { label: "Sat", win: true },
                { label: "Sun", win: false },
              ].map((d) => (
                <div
                  key={d.label}
                  className="flex flex-col items-center gap-1 flex-1"
                >
                  <span className="text-[10px] text-[var(--tg-secondary)]">
                    {d.label}
                  </span>
                  <div
                    className={`w-full h-1 rounded-full ${
                      d.win ? "bg-[var(--tg-green)]" : "bg-[var(--tg-red)]/50"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[var(--tg-dark)] rounded-2xl p-4 space-y-3">
            <span className="text-[var(--tg-accent)] font-semibold text-sm">
              Account Management
            </span>
            <div className="flex items-center gap-4 text-sm text-[var(--tg-secondary)]">
              <div className="flex items-center gap-2">
                <span className="text-lg">🔒</span>
                <span>Safe & secure</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">📋</span>
                <span>Daily reports</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">⚡</span>
                <span>Low drawdown</span>
              </div>
            </div>
          </div>

          <div className="text-center pb-6">
            <p className="text-[10px] text-[var(--tg-secondary)]/60 leading-relaxed">
              Powered by Price Action Trader &middot; Dataset ID: {DATASET_ID}
            </p>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
