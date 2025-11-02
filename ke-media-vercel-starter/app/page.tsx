
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Camera, Film, Rocket, Timer, Sparkles, Star, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

// Brand assets: update these paths to your deployed public/CDN locations.
// For Next.js, put files in /public and keep the same names.
const LOGO_LIGHT = "/logo-ke-black.png"; // e.g. exported from PNG VER BLACK.png
const LOGO_DARK = "/logo-ke-white.png";  // e.g. exported from PNG VER WHITE.png


const features = [
  { icon: Timer, title: "3 ngày giao hàng", desc: "Pipeline rút gọn – một vòng feedback, gỡ watermark sau thanh toán." },
  { icon: Rocket, title: "Tốc độ thanh khoản", desc: "Hợp đồng & đặt cọc online, link thanh toán nhanh, gửi file qua CDN." },
  { icon: Sparkles, title: "Preset & Template", desc: "Màu, motion, caption tối ưu Ads. Giảm 40% thời gian hậu kỳ." },
];

const packages = [
  {
    name: "Quick Media – 3 Day Sprint",
    price: "2.990.000₫",
    highlight: true,
    points: [
      "01 video 15–45s tối ưu Ads",
      "Hook/CTA sẵn – 1 vòng feedback",
      "Xuất 9:16 + 1:1",
      "Kho nhạc & caption template",
    ],
    cta: "Đặt lịch nhanh",
  },
  {
    name: "Product Photo – KV",
    price: "1.690.000₫",
    points: [
      "05 ảnh key visual studio",
      "Retouch màu & bụi bẩn",
      "1 concept (Minimal/Luxury)",
    ],
    cta: "Nhận báo giá",
  },
  {
    name: "Performance Ad Video",
    price: "3.490.000₫",
    points: [
      "01 video bán hàng 20–30s",
      "Motion headline & price tag",
      "A/B 2 biến thể opening",
    ],
    cta: "Đặt làm ngay",
  },
  {
    name: "Combo Video + Photo",
    price: "4.990.000₫",
    points: [
      "01 video + 05 ảnh KV",
      "Ưu tiên lịch quay trong 24h",
      "Tặng 03 thumbnail tĩnh",
    ],
    cta: "Chốt lịch",
  },
];

const concepts = [
  "UGC kể chuyện", "Studio Minimal", "Lifestyle Natural", "Performance Ads", "Luxury Detail", "Educational/Insight"
];

const portfolio = [
  {title: "Nước hoa – Luxury Detail", tag: "Luxury", thumb: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1200&auto=format&fit=crop"},
  {title: "Skincare – UGC Review", tag: "UGC", thumb: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa0?q=80&w=1200&auto=format&fit=crop"},
  {title: "Đồ uống – Lifestyle", tag: "Lifestyle", thumb: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop"},
  {title: "Phụ kiện – Minimal Studio", tag: "Studio", thumb: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop"},
  {title: "FMCG – Performance Ads", tag: "Ads", thumb: "https://images.unsplash.com/photo-1585386959984-a41552231658?q=80&w=1200&auto=format&fit=crop"},
  {title: "Trang sức – Macro", tag: "Luxury", thumb: "https://images.unsplash.com/photo-1612815154908-4b9a2a3c4e7c?q=80&w=1200&auto=format&fit=crop"},
];

function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`container mx-auto px-4 md:px-6 ${className}`}>{children}</section>
  );
}

function Feature({ Icon, title, desc }) {
  return (
    <div className="rounded-2xl border shadow-sm">
      <div className="space-y-2 p-4">
        <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
        <div className="text-base font-semibold">{title}</div>
        <div className="text-slate-500 dark:text-slate-400 text-sm">{desc}</div>
      </div>
    </div>
  );
}

function PackageCard({ p }: any) {
  return (
    <div className={`relative rounded-2xl border shadow-sm ${p.highlight ? "border-black" : ""}`}>
      {p.highlight && (
        <span className="absolute -top-3 left-4 inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-black text-white">Best Seller</span>
      )}
      <div className="p-4">
        <div className="text-lg font-semibold">{p.name}</div>
        <div className="text-slate-500 dark:text-slate-400 text-sm">Áp dụng cho 1 sản phẩm/1 lần sản xuất</div>
      </div>
      <div className="p-4 pt-0 space-y-3">
        <div className="text-3xl font-semibold">{p.price}</div>
        <ul className="space-y-2">
          {p.points.map((pt: string, i: number) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1">✓</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 pt-0">
        <a className="block text-center rounded-xl px-4 py-2 bg-black text-white hover:opacity-90">{p.cta}</a>
      </div>
    </div>
  );
}

function ContactCard() {
  return (
    <div className="rounded-2xl border shadow-sm">
      <div className="p-4">
        <div className="text-lg font-semibold">Liên hệ nhanh</div>
        <div className="text-slate-500 dark:text-slate-400 text-sm">Nhận báo giá trong 15 phút làm việc</div>
      </div>
      <div className="p-4 grid gap-3 pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <a href="mailto:hello@kemedia.vn" className="inline-flex items-center gap-2 rounded-xl border p-3 hover:bg-slate-50 dark:hover:bg-slate-800">
            <span>✉️</span> <span>Email</span>
          </a>
          <a href="tel:+84900000000" className="inline-flex items-center gap-2 rounded-xl border p-3 hover:bg-slate-50 dark:hover:bg-slate-800">
            <span>📞</span> <span>Hotline</span>
          </a>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <span>⭐</span> <span>Ưu tiên lịch quay trong 24h với gói Combo</span>
        </div>
      </div>
    </div>
  );
}

export default function KEMediaPortfolio() {
  const [activeTag, setActiveTag] = useState("All");
  const tags = ["All", ...new Set(portfolio.map(p => p.tag))];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b bg-white/80 dark:bg-slate-950/80 backdrop-blur">
        <div className="container mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2" aria-label="KẾ Media">
            {/* Light mode logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_LIGHT} alt="KẾ Media" className="h-7 w-auto dark:hidden"/>
            {/* Dark mode logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_DARK} alt="KẾ Media" className="h-7 w-auto hidden dark:block"/>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:opacity-80">Dịch vụ</a>
            <a href="#portfolio" className="hover:opacity-80">Portfolio</a>
            <a href="#process" className="hover:opacity-80">Quy trình 3 ngày</a>
            <a href="#contact" className="hover:opacity-80">Liên hệ</a>
          </nav>
          <a className="px-3 py-1.5 text-sm rounded-xl bg-black text-white" href="#contact">Nhận báo giá</a>
        </div>
      </header>

      {/* Hero */}
      <Section id="home" className="py-14 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{opacity:0, y: 12}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Sản xuất media <span className="text-blue-600">Nhanh – Gọn – Bán được hàng</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg">
              Gói <strong>Quick Media – 3 Day Sprint</strong>: nhận brief, quay/chụp, hậu kỳ và giao file trong 72 giờ. Tối ưu cho TikTok/Meta Ads, Shop Ads và kênh social.
            </p>
            <div className="flex flex-wrap gap-2">
              {concepts.map((c) => (
                <span key={c} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-100">{c}</span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href="#services" className="px-5 py-2.5 rounded-xl bg-black text-white inline-flex items-center gap-2"><span>🎬</span>Xem gói dịch vụ</a>
              <a href="#portfolio" className="px-5 py-2.5 rounded-xl border inline-flex items-center gap-2"><span>📷</span>Xem portfolio</a>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, y: 12}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}} className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_LIGHT} alt="KẾ Media" className="h-20 w-auto opacity-80 dark:hidden"/>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_DARK} alt="KẾ Media" className="h-20 w-auto opacity-80 hidden dark:block"/>
          </motion.div>
        </div>
      </Section>

      {/* Features */}
      <Section className="py-10">
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <Feature key={i} Icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </Section>

      {/* Services / Packages */}
      <Section id="services" className="py-16">
        <div className="max-w-2xl mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">Gói dịch vụ</h2>
          <p className="text-slate-600 dark:text-slate-300 mt-2">Chọn nhanh – báo giá rõ ràng – không phát sinh ngoài phạm vi.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {packages.map((p, idx) => (
            <PackageCard key={idx} p={p} />
          ))}
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">* Giá tham khảo cho 1 sản phẩm. Vui lòng liên hệ để nhận đề xuất tối ưu ngân sách.</p>
      </Section>

      {/* Portfolio */}
      <Section id="portfolio" className="py-16">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">Portfolio chọn lọc</h2>
            <p className="text-slate-600 dark:text-slate-300 mt-2">Một số dự án tiêu biểu gần đây. Có thể cung cấp thêm case-study theo yêu cầu.</p>
          </div>
          <div className="hidden md:flex gap-2">
            {tags.map((t) => (
              <button key={t} className={`px-3 py-1.5 rounded-xl border text-sm ${activeTag===t?'bg-black text-white':'hover:bg-slate-100 dark:hover:bg-slate-800'}`} onClick={()=>setActiveTag(t)}>{t}</button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.filter(p=>activeTag==="All"||p.tag===activeTag).map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border bg-slate-100 dark:bg-slate-800">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.thumb} alt={item.title} className="h-56 w-full object-cover transition-transform group-hover:scale-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
              <div className="absolute bottom-3 left-3 text-white">
                <div className="text-sm opacity-80">{item.tag}</div>
                <div className="font-medium">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex md:hidden gap-2 overflow-x-auto">
          {tags.map((t) => (
            <button key={t} className={`px-3 py-1.5 rounded-xl border text-sm ${activeTag===t?'bg-black text-white':'hover:bg-slate-100 dark:hover:bg-slate-800'}`} onClick={()=>setActiveTag(t)}>{t}</button>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process" className="py-16">
        <div className="max-w-2xl mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">Quy trình 3 ngày</h2>
          <p className="text-slate-600 dark:text-slate-300 mt-2">Chuẩn hoá để tăng tốc – giảm vòng lặp – đảm bảo chất lượng.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border p-4">
            <div className="text-lg font-semibold">Ngày 1 – Brief & Concept</div>
            <div className="text-slate-500 dark:text-slate-400 text-sm">Chốt concept, shotlist; đặt cọc 50–70%.</div>
          </div>
          <div className="rounded-2xl border p-4">
            <div className="text-lg font-semibold">Ngày 2 – Quay/Chụp</div>
            <div className="text-slate-500 dark:text-slate-400 text-sm">Chọn raw, dựng nháp layout.</div>
          </div>
          <div className="rounded-2xl border p-4">
            <div className="text-lg font-semibold">Ngày 3 – Hậu kỳ & Giao</div>
            <div className="text-slate-500 dark:text-slate-400 text-sm">Xuất file; gửi link tải + hoá đơn.</div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-16">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold">Bắt đầu ngay hôm nay</h2>
            <p className="text-slate-600 dark:text-slate-300">Gửi anh/chị 3 đề xuất concept phù hợp trong 12 giờ làm việc. Ưu tiên lịch quay trong 24 giờ cho gói Combo.</p>
            <ContactCard />
          </div>
          <div className="rounded-2xl border shadow-sm">
            <div className="p-4">
              <div className="text-lg font-semibold">Yêu cầu báo giá</div>
              <div className="text-slate-500 dark:text-slate-400 text-sm">Điền nhanh để team phản hồi ngay.</div>
            </div>
            <div className="grid gap-3 p-4 pt-0">
              <input placeholder="Tên doanh nghiệp / cá nhân" className="w-full rounded-xl border px-3 py-2 bg-transparent"/>
              <input type="email" placeholder="Email" className="w-full rounded-xl border px-3 py-2 bg-transparent"/>
              <input type="tel" placeholder="Số điện thoại" className="w-full rounded-xl border px-3 py-2 bg-transparent"/>
              <div className="grid grid-cols-3 rounded-xl border">
                <button className="px-3 py-2 text-sm">Video</button>
                <button className="px-3 py-2 text-sm">Ảnh</button>
                <button className="px-3 py-2 text-sm">Combo</button>
              </div>
              <textarea placeholder="Mô tả nhanh về sản phẩm / mục tiêu" className="w-full rounded-xl border px-3 py-2 bg-transparent"></textarea>
              <a className="block text-center rounded-xl px-4 py-2 bg-black text-white hover:opacity-90">Gửi yêu cầu</a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t py-8">
        <Section className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} KẾ Media. All rights reserved.</p>
          <div className="flex gap-3 text-sm">
            <a className="hover:opacity-80" href="#services">Dịch vụ</a>
            <a className="hover:opacity-80" href="#portfolio">Portfolio</a>
            <a className="hover:opacity-80" href="#contact">Liên hệ</a>
          </div>
        </Section>
      </footer>
    </div>
  );
}
