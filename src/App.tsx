/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lock, 
  Mail, 
  Key, 
  EyeOff, 
  LogIn, 
  LayoutDashboard, 
  Users, 
  ClipboardList, 
  Settings as SettingsIcon,
  Menu,
  ArrowUp,
  UserPlus,
  FileText,
  AlertTriangle,
  ArrowLeft,
  Camera,
  Edit,
  Phone,
  Bell,
  LogOut,
  ChevronRight
} from 'lucide-react';

type View = 'login' | 'dashboard' | 'profile' | 'settings';

export default function App() {
  const [view, setView] = useState<View>('login');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setView('dashboard');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden font-sans">
      <AnimatePresence mode="wait">
        {view === 'login' ? (
          <motion.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
          >
            {/* Decorative Background Elements */}
            <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-primary-container/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-secondary-container/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 pointer-events-none"></div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-surface-container-lowest rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] w-full max-w-[420px] p-8 relative z-10 border-t-4 border-t-primary"
            >
              {/* Header */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <Lock size={30} />
                </div>
                <h1 className="text-3xl font-bold text-on-surface mb-1">เข้าสู่ระบบ</h1>
                <p className="text-on-surface-variant text-center">
                  กรุณากรอกข้อมูลประจำตัวเพื่อเข้าใช้งานระบบ
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                {/* Email Input */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-on-surface" htmlFor="email">อีเมล</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant" size={20} />
                    <input 
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors placeholder:text-outline-variant" 
                      id="email" 
                      name="email" 
                      placeholder="name@example.com" 
                      required 
                      type="email" 
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-on-surface" htmlFor="password">รหัสผ่าน</label>
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant" size={20} />
                    <input 
                      className="w-full pl-10 pr-10 py-3 rounded-lg border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors placeholder:text-outline-variant" 
                      id="password" 
                      name="password" 
                      placeholder="••••••••" 
                      required 
                      type="password" 
                    />
                    <button 
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant hover:text-primary transition-colors focus:outline-none"
                    >
                      <EyeOff size={18} />
                    </button>
                  </div>
                </div>

                {/* Options Row */}
                <div className="flex items-center justify-between mt-1 mb-2">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer" 
                      name="remember" 
                      type="checkbox" 
                    />
                    <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">จดจำฉัน</span>
                  </label>
                  <a className="text-sm text-primary hover:text-primary-container transition-colors" href="#">ลืมรหัสผ่าน?</a>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full bg-primary text-on-primary py-3 rounded-lg font-medium flex justify-center items-center gap-2 hover:bg-opacity-90 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none"
                >
                  <span>เข้าสู่ระบบ</span>
                  <LogIn size={20} />
                </button>
              </form>

              {/* Footer */}
              <div className="mt-8 text-center text-on-surface-variant">
                ยังไม่มีบัญชี? 
                <a className="text-primary hover:underline ml-1 font-medium" href="#">สมัครสมาชิกใหม่</a>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <div className="flex flex-col md:flex-row min-h-screen">
            {/* Sidebar Desktop */}
            <aside className="hidden md:flex w-[260px] h-screen flex-col bg-surface-container-lowest border-r border-outline-variant sticky top-0">
              <div className="p-6">
                <h1 className="text-2xl font-extrabold text-primary">Membership App</h1>
              </div>
              <nav className="flex-1 px-4 py-2 flex flex-col gap-1">
                <SidebarItem 
                  isActive={view === 'dashboard'} 
                  onClick={() => setView('dashboard')} 
                  icon={<LayoutDashboard size={20} />} 
                  label="หน้าหลัก" 
                />
                <SidebarItem 
                  isActive={view === 'profile'} 
                  onClick={() => setView('profile')} 
                  icon={<Users size={20} />} 
                  label="โปรไฟล์" 
                />
                <SidebarItem 
                  isActive={view === 'settings'} 
                  onClick={() => setView('settings')} 
                  icon={<SettingsIcon size={20} />} 
                  label="ตั้งค่า" 
                />
              </nav>
              <div className="p-4 mt-auto border-t border-outline-variant">
                <button 
                  onClick={() => setView('login')}
                  className="flex w-full items-center gap-3 px-4 py-3 rounded-lg text-on-error hover:bg-red-50 text-red-600 transition-colors"
                >
                  <LogOut size={20} />
                  <span className="font-medium">ออกจากระบบ</span>
                </button>
              </div>
            </aside>

            {/* Mobile Header */}
            <div className="flex md:hidden items-center bg-surface-container-lowest p-4 justify-between shadow-sm z-20">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-surface-container rounded-full"
              >
                <Menu size={24} />
              </button>
              <h2 className="text-on-surface font-bold text-lg">
                {view === 'dashboard' ? 'แดชบอร์ด' : view === 'profile' ? 'ระบบสมาชิก' : 'การตั้งค่า'}
              </h2>
              <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5avAz65vPPXlRJX-nZFDAGnDr3cnC6N7W4r4_EqAq_e-91ulfkkoUjFRrOkePTS8_Nljn065Yt9DYaHqr2gPTxbcnXtcgwqeSbDRr6io4-KxzEHuW2QGKX-_uhnIaefDrRg803H4o4Bswyl9pwh4Lqv-gH1s12PQIqwekfach1ieWlK8RlcZQuL_TTBDo5XHgH16QQYsH0m_ALIA99TyR_fJPc39CFjrZVwOGHDSaTecIJeANydWajRVKu1Wv4PRQOyrrx1OgKw" 
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
              {isMenuOpen && (
                <>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                  />
                  <motion.div 
                    initial={{ x: -280 }}
                    animate={{ x: 0 }}
                    exit={{ x: -280 }}
                    className="fixed left-0 top-0 bottom-0 w-[280px] bg-surface-container-lowest z-40 md:hidden flex flex-col"
                  >
                    <div className="p-6 flex items-center justify-between border-b border-outline-variant">
                      <h1 className="text-xl font-extrabold text-primary">Membership App</h1>
                      <button onClick={() => setIsMenuOpen(false)} className="md:hidden">
                        <ArrowLeft size={24} />
                      </button>
                    </div>
                    <nav className="flex-1 px-4 py-4 flex flex-col gap-2">
                       <SidebarItem 
                        isActive={view === 'dashboard'} 
                        onClick={() => { setView('dashboard'); setIsMenuOpen(false); }} 
                        icon={<LayoutDashboard size={20} />} 
                        label="หน้าหลัก" 
                      />
                      <SidebarItem 
                        isActive={view === 'profile'} 
                        onClick={() => { setView('profile'); setIsMenuOpen(false); }} 
                        icon={<Users size={20} />} 
                        label="โปรไฟล์" 
                      />
                      <SidebarItem 
                        isActive={view === 'settings'} 
                        onClick={() => { setView('settings'); setIsMenuOpen(false); }} 
                        icon={<SettingsIcon size={20} />} 
                        label="ตั้งค่า" 
                      />
                    </nav>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* Content Area */}
            <main className="flex-1 p-6 md:p-8 bg-surface-container-low overflow-y-auto">
              <AnimatePresence mode="wait">
                {view === 'dashboard' && <DashboardView />}
                {view === 'profile' && <ProfileView />}
                {view === 'settings' && <SettingsView />}
              </AnimatePresence>
            </main>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SidebarItem({ isActive, onClick, icon, label }: { isActive: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg font-medium transition-all relative ${
        isActive 
          ? 'bg-primary-container/10 text-primary' 
          : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
      }`}
    >
      {isActive && <motion.div layoutId="sidebar-active" className="absolute left-0 top-2 bottom-2 w-1 bg-primary rounded-r-full" />}
      {icon}
      <span>{label}</span>
      {isActive && <ChevronRight size={16} className="ml-auto" />}
    </button>
  );
}

function DashboardView() {
  return (
    <motion.div
      key="dashboard"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-6xl mx-auto space-y-8"
    >
      <header>
        <h1 className="text-3xl font-bold text-on-surface">สวัสดีคุณ สมชาย</h1>
        <p className="text-on-surface-variant mt-1">ภาพรวมระบบประจำวันนี้</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard 
          title="ผู้ใช้งานทั้งหมด" 
          value="1,234" 
          icon={<Users className="text-primary" />} 
          trend="+12% จากเดือนที่แล้ว" 
        />
        <SummaryCard 
          title="กิจกรรมล่าสุด" 
          value="56" 
          icon={<Bell className="text-secondary" />} 
          trend="+5% จากสัปดาห์ที่แล้ว" 
        />
        <SummaryCard 
          title="สถานะระบบ" 
          value="ปกติ" 
          icon={<LayoutDashboard className="text-primary" />} 
          trend="อัปเดตล่าสุด: 10:30 น." 
          isTrendPositive={null}
        />
      </div>

      <section className="space-y-4">
        <h3 className="text-xl font-bold text-on-surface">กิจกรรมล่าสุด</h3>
        <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden">
          <ActivityItem 
            icon={<UserPlus className="text-on-secondary-container" />} 
            iconBg="bg-secondary-container"
            title="สมหญิง สมใจ สมัครสมาชิกใหม่" 
            subtitle="ระบบสมาชิก" 
            time="10 นาทีที่แล้ว" 
          />
          <ActivityItem 
            icon={<FileText className="text-on-primary-fixed text-primary" />} 
            iconBg="bg-primary/10"
            title="คุณวิชัย อัปเดตข้อมูลโปรไฟล์" 
            subtitle="จัดการผู้ใช้" 
            time="1 ชั่วโมงที่แล้ว" 
          />
          <ActivityItem 
            icon={<AlertTriangle className="text-tertiary" />} 
            iconBg="bg-tertiary/10"
            title="พบการพยายามเข้าสู่ระบบผิดพลาด 3 ครั้ง" 
            subtitle="ความปลอดภัย" 
            time="2 ชั่วโมงที่แล้ว" 
          />
          <div className="p-4 flex justify-center bg-surface-container-low border-t border-outline-variant">
            <button className="text-primary font-bold hover:underline transition-colors uppercase text-sm tracking-wide">ดูกิจกรรมทั้งหมด</button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function SummaryCard({ title, value, icon, trend, isTrendPositive = true }: { title: string; value: string; icon: React.ReactNode; trend: string; isTrendPositive?: boolean | null }) {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <p className="text-on-surface-variant font-medium">{title}</p>
        <div className="p-2 bg-surface-container rounded-lg">
          {icon}
        </div>
      </div>
      <p className="text-4xl font-bold text-on-surface">{value}</p>
      <div className="flex items-center gap-1 mt-2">
        {isTrendPositive !== null && (
          <ArrowUp size={14} className={isTrendPositive ? 'text-primary' : 'text-red-500'} />
        )}
        <p className={`text-xs font-medium ${isTrendPositive === null ? 'text-on-surface-variant' : isTrendPositive ? 'text-primary' : 'text-red-500'}`}>
          {trend}
        </p>
      </div>
    </div>
  );
}

function ActivityItem({ icon, iconBg, title, subtitle, time }: { icon: React.ReactNode; iconBg: string; title: string; subtitle: string; time: string }) {
  return (
    <div className="flex items-center gap-4 p-4 border-b border-outline-variant last:border-0 hover:bg-surface-container transition-colors">
      <div className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center shrink-0`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-on-surface font-bold truncate tracking-tight">{title}</p>
        <p className="text-on-surface-variant text-xs">{subtitle}</p>
      </div>
      <p className="text-outline text-xs whitespace-nowrap">{time}</p>
    </div>
  );
}

function ProfileView() {
  return (
    <motion.div
      key="profile"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-4xl mx-auto space-y-6"
    >
      {/* Profile Header Card */}
      <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-primary-container/10"></div>
        <div className="relative mt-8 md:mt-4">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-surface-container-lowest shadow-sm mx-auto overflow-hidden bg-surface-container">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc35uvwzBibewkWbsjm6mMvii9xRXt-J_7RfEGCfjD_UbXJOc-k2Ub96DTPcFqq--DHwlYE9ktWuX2hMUvGs4MaJkJdhLGs5s-fMpZbY188o8pOhbcw-Ab-LuNp3Vptkz0US-ZsqvAwTIQhLw7hPPLZPi6QmAHlOMiKzBCCVwKrZzC65gvpDeNY00rqr631YNHZVH6BAlj5KOv7NlUCAHEx2xgr7FI3qtgQ2U-JnDLL0wFwKqfFMHNyiqPqIG_3DZDgTMnuv8fEA" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <button className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-surface-container-lowest text-primary rounded-full p-2 shadow-sm border border-outline-variant hover:bg-surface-container-low transition-colors">
            <Camera size={20} />
          </button>
        </div>
        <div className="flex-1 mt-0 md:mt-12 space-y-4">
          <h2 className="text-3xl font-bold text-on-surface">สมชาย ใจดี</h2>
          <div className="space-y-2">
            <p className="text-on-surface-variant flex items-center justify-center md:justify-start gap-2">
              <Mail size={18} />
              somchai.j@example.com
            </p>
            <p className="text-on-surface-variant flex items-center justify-center md:justify-start gap-2">
              <Phone size={18} />
              +66 81 234 5678
            </p>
          </div>
          <div className="pt-2 flex flex-wrap gap-2 justify-center md:justify-start">
            <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold">สมาชิกพรีเมียม</span>
            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">ยืนยันตัวตนแล้ว</span>
          </div>
        </div>
      </div>

      {/* Personal Information Form Card */}
      <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant p-6 md:p-8 space-y-6">
        <div className="flex justify-between items-center border-b border-surface-container-low pb-4">
          <h2 className="text-2xl font-bold text-on-surface">ข้อมูลส่วนตัว</h2>
          <button className="bg-primary text-on-primary rounded-lg px-4 py-2 font-bold hover:opacity-90 transition-opacity flex items-center gap-2">
            <Edit size={18} />
            <span>แก้ไขโปรไฟล์</span>
          </button>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-sm font-bold text-on-surface" htmlFor="firstName">ชื่อจริง</label>
            <input 
              className="w-full rounded-lg border border-outline-variant px-4 py-2 text-on-surface bg-surface-container-low focus:ring-1 focus:ring-primary outline-none disabled:opacity-70" 
              disabled 
              id="firstName" 
              type="text" 
              value="สมชาย" 
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-bold text-on-surface" htmlFor="lastName">นามสกุล</label>
            <input 
              className="w-full rounded-lg border border-outline-variant px-4 py-2 text-on-surface bg-surface-container-low focus:ring-1 focus:ring-primary outline-none disabled:opacity-70" 
              disabled 
              id="lastName" 
              type="text" 
              value="ใจดี" 
            />
          </div>
          <div className="space-y-1 md:col-span-2">
            <label className="text-sm font-bold text-on-surface" htmlFor="p-email">อีเมล</label>
            <input 
              className="w-full rounded-lg border border-outline-variant px-4 py-2 text-on-surface bg-surface-container-low focus:ring-1 focus:ring-primary outline-none disabled:opacity-70" 
              disabled 
              id="p-email" 
              type="email" 
              value="somchai.j@example.com" 
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-bold text-on-surface" htmlFor="phone">เบอร์โทรศัพท์</label>
            <input 
              className="w-full rounded-lg border border-outline-variant px-4 py-2 text-on-surface bg-surface-container-low focus:ring-1 focus:ring-primary outline-none disabled:opacity-70" 
              disabled 
              id="phone" 
              type="tel" 
              value="+66 81 234 5678" 
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-bold text-on-surface" htmlFor="dob">วันเกิด</label>
            <input 
              className="w-full rounded-lg border border-outline-variant px-4 py-2 text-on-surface bg-surface-container-low focus:ring-1 focus:ring-primary outline-none disabled:opacity-70" 
              disabled 
              id="dob" 
              type="date" 
              value="1990-01-15" 
            />
          </div>
        </form>
      </div>
    </motion.div>
  );
}

function SettingsView() {
  return (
    <motion.div
      key="settings"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-4xl mx-auto space-y-6"
    >
      <header className="flex items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-on-surface">การตั้งค่า</h1>
      </header>

      {/* Basic Account Settings */}
      <section className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden">
        <div className="p-6 border-b border-outline-variant flex items-center gap-3">
          <Users className="text-primary" size={24} />
          <h2 className="text-xl font-bold text-on-surface m-0">ข้อมูลบัญชีเบื้องต้น</h2>
        </div>
        <div className="p-6 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-on-surface-variant">ชื่อ - นามสกุล</label>
              <input 
                className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2.5 text-on-surface focus:outline-none focus:ring-1 focus:ring-primary" 
                readOnly 
                type="text" 
                value="สมชาย ใจดี" 
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-on-surface-variant">อีเมล</label>
              <input 
                className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2.5 text-on-surface focus:outline-none focus:ring-1 focus:ring-primary" 
                readOnly 
                type="email" 
                value="somchai.j@example.com" 
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-surface-container text-on-surface font-bold rounded-lg px-6 py-2.5 hover:bg-surface-container-high transition-colors text-sm">
              แก้ไขข้อมูล
            </button>
          </div>
        </div>
      </section>

      {/* Change Password */}
      <section className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden">
        <div className="p-6 border-b border-outline-variant flex items-center gap-3">
          <Lock className="text-primary" size={24} />
          <h2 className="text-xl font-bold text-on-surface m-0">เปลี่ยนรหัสผ่าน</h2>
        </div>
        <div className="p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-1 max-w-md">
            <label className="text-sm font-medium text-on-surface-variant">รหัสผ่านปัจจุบัน</label>
            <input 
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-on-surface focus:outline-none focus:ring-1 focus:ring-primary transition-all" 
              placeholder="••••••••" 
              type="password" 
            />
          </div>
          <div className="w-full h-px bg-outline-variant opacity-30"></div>
          <div className="flex flex-col gap-4 max-w-md">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-on-surface-variant">รหัสผ่านใหม่</label>
              <input 
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-on-surface focus:outline-none focus:ring-1 focus:ring-primary transition-all" 
                placeholder="รหัสผ่านใหม่อย่างน้อย 8 ตัวอักษร" 
                type="password" 
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-on-surface-variant">ยืนยันรหัสผ่านใหม่</label>
              <input 
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-on-surface focus:outline-none focus:ring-1 focus:ring-primary transition-all" 
                placeholder="พิมพ์รหัสผ่านใหม่อีกครั้ง" 
                type="password" 
              />
            </div>
          </div>
          <div className="flex justify-start">
            <button className="bg-primary text-on-primary font-bold rounded-lg px-6 py-2.5 hover:opacity-90 transition-opacity text-sm shadow-sm">
              บันทึกรหัสผ่าน
            </button>
          </div>
        </div>
      </section>

      {/* Notifications */}
      <section className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden">
        <div className="p-6 border-b border-outline-variant flex items-center gap-3">
          <Bell className="text-primary" size={24} />
          <h2 className="text-xl font-bold text-on-surface m-0">การแจ้งเตือน</h2>
        </div>
        <div className="flex flex-col">
          <ToggleItem 
            title="อีเมลแจ้งเตือนระบบ" 
            subtitle="รับอีเมลเมื่อมีการอัปเดตระบบหรือความปลอดภัย" 
            defaultChecked 
          />
          <ToggleItem 
            title="การแจ้งเตือนกิจกรรม" 
            subtitle="แจ้งเตือนเมื่อมีการเคลื่อนไหวในโปรเจกต์ของคุณ" 
            defaultChecked 
          />
          <ToggleItem 
            title="ข้อเสนอและโปรโมชั่น" 
            subtitle="รับข้อมูลข่าวสารและสิทธิพิเศษจากเรา" 
          />
        </div>
      </section>
    </motion.div>
  );
}

function ToggleItem({ title, subtitle, defaultChecked = false }: { title: string; subtitle: string; defaultChecked?: boolean }) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div className="p-6 flex items-center justify-between border-b border-outline-variant last:border-0 hover:bg-surface-container-low transition-colors">
      <div className="flex flex-col pr-6">
        <span className="font-bold text-on-surface">{title}</span>
        <span className="text-on-surface-variant text-sm">{subtitle}</span>
      </div>
      <label className="relative inline-flex items-center cursor-pointer shrink-0">
        <input 
          checked={checked} 
          onChange={() => setChecked(!checked)}
          className="sr-only peer" 
          type="checkbox" 
        />
        <div className="w-11 h-6 bg-outline-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary shadow-inner transition-colors duration-200"></div>
      </label>
    </div>
  );
}
