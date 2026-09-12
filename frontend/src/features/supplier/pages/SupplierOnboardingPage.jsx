import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Leaf, 
  Building2, 
  FileText, 
  Factory, 
  User, 
  Mail, 
  Phone, 
  Link2, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  BarChart3, 
  Globe, 
  CheckCircle2, 
  TrendingUp, 
  ChevronDown, 
  Sprout, 
  Quote 
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { USER_ROLES } from '@/constants/roles';

// Photographic background matching the reference photo
import supplierBg from '@/assets/supplier-clean-bg.jpg';

export const SupplierOnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      companyName: '',
      registrationNumber: '',
      industryType: '',
      contactPerson: '',
      email: '',
      phone: '+91 ',
      website: '',
      facilityLocation: '',
      captureVolume: '',
      purityGrade: '99.5% (Food & Beverage Grade)',
      technologyType: 'Amine Chemical Absorption'
    }
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleNext = (data) => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Complete onboarding and enter supplier command center
      login(
        { 
          email: data.email || 'supplier@carbonsphere.io', 
          name: data.companyName || 'Apex Carbon Capture Ltd' 
        },
        'mock_jwt_token_supplier',
        USER_ROLES.SUPPLIER
      );
      navigate('/supplier/dashboard');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    } else {
      navigate('/role-selection');
    }
  };

  return (
    <div 
      className="h-screen max-h-screen w-full relative bg-cover bg-center font-sans text-slate-900 selection:bg-[#0e9f6e] selection:text-white flex flex-col justify-between overflow-hidden"
      style={{ backgroundImage: `url(${supplierBg})` }}
    >
      {/* ========================================================================= */}
      {/* ORGANIC CURVED DARK GREEN SVG OVERLAY FOR THE LEFT PANEL                  */}
      {/* ========================================================================= */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden lg:block filter drop-shadow-[8px_0_24px_rgba(0,0,0,0.35)]" 
        preserveAspectRatio="none" 
        viewBox="0 0 100 100"
      >
        <path 
          d="M 0 0 L 36 0 C 30 25, 24 45, 26 70 C 28 85, 36 95, 43 100 L 0 100 Z" 
          fill="#081e15" 
          fillOpacity="0.96" 
        />
      </svg>
      {/* Mobile/Tablet Fallback Dark Overlay */}
      <div className="absolute inset-0 bg-[#081e15]/95 pointer-events-none z-10 lg:hidden" />

      {/* Floating Callout: Industries Today A Cleaner Tomorrow */}
      <div className="absolute left-[36%] top-[10%] hidden xl:block z-15 pointer-events-none">
        <span className="font-serif italic text-slate-800 text-xs font-bold block leading-tight drop-shadow-sm">
          Industries<br />Today<br />A Cleaner<br />Tomorrow
        </span>
        <div className="w-12 h-0.5 bg-[#0e9f6e] rounded-full mt-1" />
      </div>

      {/* Floating Tank Badge: Capture Convert Contribute */}
      <div className="absolute left-[54%] top-[45%] hidden 2xl:block z-15 pointer-events-none">
        <div className="bg-white/85 backdrop-blur-md border border-white/70 rounded-xl p-2 shadow-sm text-center">
          <div className="w-5 h-5 rounded-full bg-[#e8f5ed] text-[#0e6245] flex items-center justify-center mx-auto mb-1">
            <Leaf className="w-3 h-3 fill-current" />
          </div>
          <p className="text-[8px] font-black uppercase tracking-wider text-slate-800 leading-tight">
            CAPTURE<br />CONVERT<br />CONTRIBUTE<br />
            <span className="text-[#0e6245] font-bold">FOR A GREENER PLANET</span>
          </p>
        </div>
      </div>

      {/* Floating Foreground Block: CO2 Captured A Cleaner Future Ahead */}
      <div className="absolute left-[39%] bottom-6 hidden xl:block z-15 pointer-events-none">
        <div className="bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3 shadow-lg text-center max-w-[130px]">
          <div className="text-base font-black text-slate-900 leading-none">
            CO<sub className="text-xs">2</sub>
          </div>
          <div className="text-[9px] font-bold text-slate-700 uppercase tracking-wider mt-1">
            CAPTURED
          </div>
          <div className="text-[7.5px] font-medium text-slate-500 uppercase mt-0.5">
            A CLEANER FUTURE AHEAD
          </div>
          <div className="w-6 h-6 rounded-full bg-[#e8f5ed] text-[#0e6245] flex items-center justify-center mx-auto mt-1.5 shadow-xs">
            <Leaf className="w-3.5 h-3.5 fill-current" />
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MAIN VIEWPORT LAYOUT (NON-SCROLLABLE FIT)                                  */}
      {/* ========================================================================= */}
      <div className="relative z-20 w-full h-full max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-12 py-3 flex flex-col justify-between">
        
        {/* ======================================================================= */}
        {/* TOP BAR: BRAND LOGO (LEFT) & STEPPER PROGRESS (RIGHT)                   */}
        {/* ======================================================================= */}
        <div className="flex items-center justify-between w-full shrink-0">
          
          {/* Left Brand Identity */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0e6245] to-[#10a37f] flex items-center justify-center text-white shadow-sm">
              <Leaf className="w-4 h-4 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Carbon<span className="text-[#10b981]">Sphere</span>
              </span>
              <span className="text-[9px] font-medium tracking-wide text-emerald-200/80 -mt-1 hidden sm:block">
                Connect. Trade. Reuse. For a Cleaner Tomorrow.
              </span>
            </div>
          </Link>

          {/* Right Navigation Controls: Back & Step Indicator */}
          <div className="flex items-center gap-4">
            <button 
              type="button"
              onClick={handleBack}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white/85 hover:bg-white backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/60 shadow-xs transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
            <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/50 shadow-xs">
              Step {currentStep} of 3
            </span>
          </div>

        </div>


        {/* ======================================================================= */}
        {/* MAIN BODY: SPLIT HERO (LEFT) & ONBOARDING CARD (RIGHT)                  */}
        {/* ======================================================================= */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-0 py-1 sm:py-2">
          
          {/* ===================================================================== */}
          {/* LEFT COLUMN: HERO CONTENT OVER THE DARK OVERLAY                       */}
          {/* ===================================================================== */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center space-y-3.5 text-white pr-0 lg:pr-4">
            
            {/* Tagline & Main Headline */}
            <div className="space-y-1.5 max-w-md">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-emerald-400">
                <span className="w-5 h-[2px] bg-[#10b981]"></span>
                <span>SUPPLIER ONBOARDING</span>
              </div>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-white tracking-tight leading-[1.06]">
                Turn<br />
                Your Carbon<br />
                Capture into<br />
                <span className="text-[#10b981]">Opportunity.</span>
              </h1>

              <p className="text-xs text-emerald-100/80 leading-relaxed max-w-sm pt-0.5">
                List your captured CO₂, reach verified buyers, and be a key player in a cleaner, greener economy.
              </p>
            </div>

            {/* 4 Feature Bullet Points */}
            <div className="space-y-2 max-w-md">
              
              {/* Bullet 1 */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-900/90 border border-[#10b981]/50 text-[#10b981] flex items-center justify-center shrink-0 shadow-xs">
                  <Leaf className="w-3.5 h-3.5 fill-current" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">List & Sell CO₂</h4>
                  <p className="text-[10px] text-emerald-200/70">Showcase your captured carbon</p>
                </div>
              </div>

              {/* Bullet 2 */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-900/90 border border-[#10b981]/50 text-[#10b981] flex items-center justify-center shrink-0 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">Get Verified</h4>
                  <p className="text-[10px] text-emerald-200/70">Build trust with global buyers</p>
                </div>
              </div>

              {/* Bullet 3 */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-900/90 border border-[#10b981]/50 text-[#10b981] flex items-center justify-center shrink-0 shadow-xs">
                  <FileText className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">Track Transactions</h4>
                  <p className="text-[10px] text-emerald-200/70">Transparent and secure</p>
                </div>
              </div>

              {/* Bullet 4 */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-900/90 border border-[#10b981]/50 text-[#10b981] flex items-center justify-center shrink-0 shadow-xs">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">Make a Real Impact</h4>
                  <p className="text-[10px] text-emerald-200/70">Turn emissions into value</p>
                </div>
              </div>

            </div>

            {/* Quote Card */}
            <div className="max-w-xs bg-emerald-950/70 backdrop-blur-md border border-white/10 rounded-xl p-2.5 shadow-md">
              <div className="flex items-start gap-2.5">
                <Quote className="w-4 h-4 text-emerald-300 fill-emerald-300 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="text-[11px] font-semibold text-white leading-snug">
                    Cleaner Industries.<br />
                    Brighter Tomorrows.
                  </p>
                  <div className="w-8 h-0.5 bg-[#10b981] rounded-full" />
                </div>
              </div>
            </div>

            {/* Bottom Metrics Pill (4 Items) */}
            <div className="max-w-md bg-slate-900/80 backdrop-blur-md border border-white/15 text-white rounded-xl p-2.5 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-1.5 px-1.5 first:pl-0">
                <Leaf className="w-3 h-3 text-[#34d399] shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm font-black leading-tight">2.5M+</div>
                  <p className="text-[8px] text-slate-300">Tons CO₂ Reused</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-1.5 border-l border-white/15">
                <BarChart3 className="w-3 h-3 text-[#34d399] shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm font-black leading-tight">500+</div>
                  <p className="text-[8px] text-slate-300">Verified Buyers</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-1.5 border-l border-white/15">
                <Globe className="w-3 h-3 text-[#34d399] shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm font-black leading-tight">50+</div>
                  <p className="text-[8px] text-slate-300">Countries</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-1.5 border-l border-white/15 last:pr-0">
                <Sprout className="w-3 h-3 text-[#34d399] shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm font-black leading-tight">Real</div>
                  <p className="text-[8px] text-slate-300">Climate Impact</p>
                </div>
              </div>
            </div>

          </div>


          {/* ===================================================================== */}
          {/* RIGHT COLUMN: ONBOARDING FORM CARD & STEPPER                         */}
          {/* ===================================================================== */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-center lg:items-end justify-center relative">
            
            {/* Stepper Progress Bar Header */}
            <div className="w-full max-w-lg mb-2 px-4">
              <div className="flex items-center justify-between relative">
                
                {/* Connector line */}
                <div className="absolute left-6 right-6 top-3 h-[1.5px] bg-slate-200/80 -z-0">
                  <div 
                    className="h-full bg-[#0e6245] transition-all duration-300"
                    style={{ width: currentStep === 1 ? '0%' : currentStep === 2 ? '50%' : '100%' }}
                  />
                </div>

                {/* Step 1 */}
                <div className="flex flex-col items-center relative z-10 cursor-pointer" onClick={() => setCurrentStep(1)}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                    currentStep >= 1 ? 'bg-[#0e6245] text-white shadow-xs ring-4 ring-emerald-100' : 'bg-white text-slate-400 border border-slate-300'
                  }`}>
                    1
                  </div>
                  <span className={`text-[10px] font-bold mt-1 ${currentStep === 1 ? 'text-[#0e6245]' : 'text-slate-600'}`}>
                    Business Details
                  </span>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center relative z-10 cursor-pointer" onClick={() => setCurrentStep(2)}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                    currentStep >= 2 ? 'bg-[#0e6245] text-white shadow-xs ring-4 ring-emerald-100' : 'bg-white text-slate-400 border border-slate-300'
                  }`}>
                    2
                  </div>
                  <span className={`text-[10px] font-medium mt-1 ${currentStep === 2 ? 'text-[#0e6245] font-bold' : 'text-slate-500'}`}>
                    Facility & Capacity
                  </span>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center relative z-10 cursor-pointer" onClick={() => setCurrentStep(3)}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                    currentStep >= 3 ? 'bg-[#0e6245] text-white shadow-xs ring-4 ring-emerald-100' : 'bg-white text-slate-400 border border-slate-300'
                  }`}>
                    3
                  </div>
                  <span className={`text-[10px] font-medium mt-1 ${currentStep === 3 ? 'text-[#0e6245] font-bold' : 'text-slate-500'}`}>
                    Complete
                  </span>
                </div>

              </div>
            </div>

            {/* White Floating Onboarding Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_16px_50px_rgba(0,0,0,0.10)] p-5 sm:p-6 max-w-lg w-full space-y-3 relative z-10">
              
              {/* Card Header */}
              <div className="flex items-start justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#e8f5ed] text-[#0e6245] flex items-center justify-center">
                      <Leaf className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <span className="text-lg font-black text-slate-900 tracking-tight">CarbonSphere</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight pt-0.5">
                    <span className="text-[#0e9f6e]">Supplier</span> Onboarding
                  </h2>
                  <p className="text-[11px] text-slate-500">
                    {currentStep === 1 && "Tell us about your organization to get started."}
                    {currentStep === 2 && "Specify your carbon capture parameters and facilities."}
                    {currentStep === 3 && "Review and activate your supplier account."}
                  </p>
                </div>

                {/* Cursive text in top right of card: Same Planet More Possibilities */}
                <div className="text-right hidden sm:block">
                  <span className="font-serif italic text-slate-700 text-[11px] font-semibold block leading-tight">
                    Same<br />Planet<br />
                    <span className="text-[#0e6245]">More</span><br />
                    Possibilities
                  </span>
                  <div className="w-10 h-0.5 bg-[#0e6245] rounded-full ml-auto mt-0.5" />
                </div>
              </div>

              {/* =============================================================== */}
              {/* STEP 1 FORM: BUSINESS DETAILS                                    */}
              {/* =============================================================== */}
              {currentStep === 1 && (
                <form onSubmit={handleSubmit(handleNext)} className="space-y-2.5 pt-0.5">
                  
                  {/* 1. Organization / Company Name */}
                  <div className="space-y-0.5">
                    <label className="block text-[11px] font-semibold text-slate-700">
                      Organization / Company Name
                    </label>
                    <div className="border border-slate-200 rounded-xl px-3 py-1.5 flex items-center gap-2 bg-white focus-within:ring-2 focus-within:ring-[#0e9f6e] focus-within:border-transparent transition-all">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <input
                        type="text"
                        placeholder="Enter your company name"
                        className="w-full bg-transparent text-xs text-slate-900 placeholder:text-slate-400 outline-none"
                        {...register('companyName', { required: 'Company name is required' })}
                      />
                    </div>
                  </div>

                  {/* 2. Business Registration Number (Optional) */}
                  <div className="space-y-0.5">
                    <label className="block text-[11px] font-semibold text-slate-700">
                      Business Registration Number <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <div className="border border-slate-200 rounded-xl px-3 py-1.5 flex items-center gap-2 bg-white focus-within:ring-2 focus-within:ring-[#0e9f6e] focus-within:border-transparent transition-all">
                      <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <input
                        type="text"
                        placeholder="Enter registration number"
                        className="w-full bg-transparent text-xs text-slate-900 placeholder:text-slate-400 outline-none"
                        {...register('registrationNumber')}
                      />
                    </div>
                  </div>

                  {/* 3. Industry Type */}
                  <div className="space-y-0.5">
                    <label className="block text-[11px] font-semibold text-slate-700">
                      Industry Type
                    </label>
                    <div className="border border-slate-200 rounded-xl px-3 py-1.5 flex items-center gap-2 bg-white focus-within:ring-2 focus-within:ring-[#0e9f6e] focus-within:border-transparent transition-all relative">
                      <Factory className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <select
                        className="w-full bg-transparent text-xs text-slate-900 outline-none cursor-pointer appearance-none pr-6"
                        {...register('industryType', { required: 'Industry type is required' })}
                      >
                        <option value="">Select your industry</option>
                        <option value="Cement & Concrete">Cement & Concrete Manufacturing</option>
                        <option value="Steel & Metallurgy">Steel & Metallurgy Smelting</option>
                        <option value="Chemical & Petrochemical">Chemical & Petrochemical</option>
                        <option value="Direct Air Capture (DAC)">Direct Air Capture (DAC)</option>
                        <option value="Bioenergy & Pyrolysis">Bioenergy & Biochar Pyrolysis</option>
                        <option value="Fermentation & Brewing">Fermentation & Distillation</option>
                        <option value="Waste-to-Energy">Waste-to-Energy & Incineration</option>
                        <option value="Oil & Gas Refining">Oil & Gas Refining</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 pointer-events-none" />
                    </div>
                  </div>

                  {/* 4. Two Column: Contact Person Name & Contact Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    
                    <div className="space-y-0.5">
                      <label className="block text-[11px] font-semibold text-slate-700">Contact Person Name</label>
                      <div className="border border-slate-200 rounded-xl px-3 py-1.5 flex items-center gap-2 bg-white focus-within:ring-2 focus-within:ring-[#0e9f6e] focus-within:border-transparent transition-all">
                        <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <input
                          type="text"
                          placeholder="Enter contact person name"
                          className="w-full bg-transparent text-xs text-slate-900 placeholder:text-slate-400 outline-none"
                          {...register('contactPerson', { required: 'Contact person is required' })}
                        />
                      </div>
                    </div>

                    <div className="space-y-0.5">
                      <label className="block text-[11px] font-semibold text-slate-700">Contact Email</label>
                      <div className="border border-slate-200 rounded-xl px-3 py-1.5 flex items-center gap-2 bg-white focus-within:ring-2 focus-within:ring-[#0e9f6e] focus-within:border-transparent transition-all">
                        <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <input
                          type="email"
                          placeholder="Enter email address"
                          className="w-full bg-transparent text-xs text-slate-900 placeholder:text-slate-400 outline-none"
                          {...register('email', { required: 'Email is required' })}
                        />
                      </div>
                    </div>

                  </div>

                  {/* 5. Two Column: Contact Phone Number & Company Website */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    
                    <div className="space-y-0.5">
                      <label className="block text-[11px] font-semibold text-slate-700">Contact Phone Number</label>
                      <div className="border border-slate-200 rounded-xl px-3 py-1.5 flex items-center gap-2 bg-white focus-within:ring-2 focus-within:ring-[#0e9f6e] focus-within:border-transparent transition-all">
                        <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="w-full bg-transparent text-xs text-slate-900 placeholder:text-slate-400 outline-none"
                          {...register('phone')}
                        />
                      </div>
                    </div>

                    <div className="space-y-0.5">
                      <label className="block text-[11px] font-semibold text-slate-700">
                        Company Website <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <div className="border border-slate-200 rounded-xl px-3 py-1.5 flex items-center gap-2 bg-white focus-within:ring-2 focus-within:ring-[#0e9f6e] focus-within:border-transparent transition-all">
                        <Link2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <input
                          type="url"
                          placeholder="https://www.yourcompany.com"
                          className="w-full bg-transparent text-xs text-slate-900 placeholder:text-slate-400 outline-none"
                          {...register('website')}
                        />
                      </div>
                    </div>

                  </div>

                  {/* Submit CTA Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0e6245] hover:bg-[#0b5038] text-white font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all text-xs sm:text-sm group mt-1"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Bottom helper text */}
                  <p className="text-center text-[10px] text-slate-500 pt-0.5">
                    You can complete the remaining details in the next step.
                  </p>

                </form>
              )}

              {/* =============================================================== */}
              {/* STEP 2 FORM: FACILITY & CAPACITY                                */}
              {/* =============================================================== */}
              {currentStep === 2 && (
                <form onSubmit={handleSubmit(handleNext)} className="space-y-2.5 pt-0.5">
                  <div className="space-y-0.5">
                    <label className="block text-[11px] font-semibold text-slate-700">
                      Plant Facility Location
                    </label>
                    <div className="border border-slate-200 rounded-xl px-3 py-1.5 flex items-center gap-2 bg-white">
                      <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <input
                        type="text"
                        placeholder="e.g. Jamshedpur Industrial Zone, Jharkhand"
                        className="w-full bg-transparent text-xs text-slate-900 placeholder:text-slate-400 outline-none"
                        {...register('facilityLocation')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="space-y-0.5">
                      <label className="block text-[11px] font-semibold text-slate-700">Annual Capture Capacity (Tons/yr)</label>
                      <div className="border border-slate-200 rounded-xl px-3 py-1.5 flex items-center gap-2 bg-white">
                        <BarChart3 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <input
                          type="number"
                          placeholder="e.g. 50,000"
                          className="w-full bg-transparent text-xs text-slate-900 placeholder:text-slate-400 outline-none"
                          {...register('captureVolume')}
                        />
                      </div>
                    </div>

                    <div className="space-y-0.5">
                      <label className="block text-[11px] font-semibold text-slate-700">Capture Technology</label>
                      <div className="border border-slate-200 rounded-xl px-3 py-1.5 flex items-center gap-2 bg-white">
                        <Factory className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <select
                          className="w-full bg-transparent text-xs text-slate-900 outline-none cursor-pointer"
                          {...register('technologyType')}
                        >
                          <option value="Amine Chemical Absorption">Amine Absorption</option>
                          <option value="Cryogenic Separation">Cryogenic Separation</option>
                          <option value="Direct Air Capture (Solid Sorbent)">DAC Solid Sorbent</option>
                          <option value="Membrane Separation">Membrane Separation</option>
                          <option value="Biochar Pyrolysis">Biochar Pyrolysis</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <label className="block text-[11px] font-semibold text-slate-700">CO₂ Purity Grade</label>
                    <div className="border border-slate-200 rounded-xl px-3 py-1.5 flex items-center gap-2 bg-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <select
                        className="w-full bg-transparent text-xs text-slate-900 outline-none cursor-pointer"
                        {...register('purityGrade')}
                      >
                        <option value="99.9% (Food & Beverage Grade)">Food & Beverage Grade (99.9%)</option>
                        <option value="95% - 98% (Industrial Aggregate Grade)">Industrial Grade (95% - 98%)</option>
                        <option value="99.5% (Chemical Synthesis Grade)">Chemical Synthesis Grade (99.5%)</option>
                        <option value="90% (Enhanced Agriculture Grade)">Agricultural Grade (90%)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="w-1/3 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-2 px-3 rounded-xl text-xs transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 bg-[#0e6245] hover:bg-[#0b5038] text-white font-semibold py-2 px-3 rounded-xl flex items-center justify-center gap-2 text-xs transition-all"
                    >
                      <span>Proceed to Verification</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}

              {/* =============================================================== */}
              {/* STEP 3 FORM: REVIEW & ACTIVATE                                  */}
              {/* =============================================================== */}
              {currentStep === 3 && (
                <div className="space-y-3 pt-1 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-[#0e6245] flex items-center justify-center mx-auto shadow-xs">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Ready for Verification</h3>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto mt-0.5">
                      Your business and capture telemetry parameters are configured. Launch your dashboard to list carbon lots.
                    </p>
                  </div>

                  <div className="bg-[#eef8f2] border border-[#d3ebd9] rounded-xl p-3 text-left space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">dMRV Stream:</span>
                      <span className="font-semibold text-emerald-800">Automated IoT Telemetry Ready</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Listing Status:</span>
                      <span className="font-semibold text-emerald-800">Pre-Approved for Marketplace</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit(handleNext)}
                    className="w-full bg-[#0e6245] hover:bg-[#0b5038] text-white font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm text-xs sm:text-sm"
                  >
                    <span>Launch Supplier Dashboard</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

            </div>

            {/* Decorative script elements matching the photo right margin */}
            <div className="hidden 2xl:block absolute -right-20 top-[28%] text-slate-800 pointer-events-none transform rotate-3">
              <span className="font-serif italic text-xs sm:text-sm font-bold block leading-tight text-[#0e6245]">
                From<br />
                Emissions<br />
                to<br />
                Opportunities
              </span>
              <div className="w-12 h-0.5 bg-[#0e6245] rounded-full mt-1" />
            </div>

            <div className="hidden 2xl:block absolute -right-16 bottom-6 text-slate-700 pointer-events-none">
              <span className="font-serif italic text-[11px] font-semibold block leading-tight text-slate-600">
                Build<br />
                Trade<br />
                Grow<br />
                Sustain
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SupplierOnboardingPage;
