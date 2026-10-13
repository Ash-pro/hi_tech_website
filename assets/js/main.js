// Hi Tech Core Logic: i18n Language Switcher, Dark/Light Mode, Interactive WhatsApp & UI

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. THEME MANAGER (Dark / Light Mode)
  // ==========================================
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  
  // Initialize theme from storage or system preference (defaults to dark for tech brand)
  const savedTheme = localStorage.getItem('hitech_theme') || localStorage.getItem('hazem_theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
  updateThemeIcons();

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('hitech_theme', isDark ? 'dark' : 'light');
      updateThemeIcons();
    });
  });

  function updateThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    themeToggleBtns.forEach(btn => {
      const icon = btn.querySelector('i');
      if (icon) {
        if (isDark) {
          icon.className = 'fa-solid fa-sun text-amber-400';
        } else {
          icon.className = 'fa-solid fa-moon text-indigo-600';
        }
      }
    });
  }

  // ==========================================
  // 2. BILINGUAL LANGUAGE MANAGER (Arabic / English)
  // ==========================================
  const langToggleBtns = document.querySelectorAll('.lang-toggle-btn');
  let currentLang = localStorage.getItem('hitech_lang') || localStorage.getItem('hazem_lang') || 'ar';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('hitech_lang', lang);

    // Set HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update page title
    if (lang === 'en') {
      document.title = "Hi Tech - University Services, Graduation Projects & Tutoring";
    } else {
      document.title = "هاي تك | Hi Tech - للخدمات الجامعية ومشاريع التخرج والتدريس";
    }

    const dict = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang] : null;
    if (!dict) return;

    // 1. Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // 2. Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.placeholder = dict[key];
      }
    });

    // 3. Update titles & tooltips
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key]) {
        el.title = dict[key];
      }
    });

    // 4. Update language toggle button labels
    langToggleBtns.forEach(btn => {
      const label = btn.querySelector('.lang-label');
      if (label) {
        label.textContent = lang === 'ar' ? 'English' : 'العربية';
      }
    });

    // 5. Update options in select if necessary
    const serviceSelect = document.getElementById('serviceType');
    if (serviceSelect) {
      Array.from(serviceSelect.options).forEach(opt => {
        const key = opt.getAttribute('data-i18n-opt');
        if (key && dict[key]) {
          opt.textContent = dict[key];
        }
      });
    }
  }

  // Bind language toggle buttons
  langToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = currentLang === 'ar' ? 'en' : 'ar';
      applyLanguage(targetLang);
    });
  });

  // Initial language application
  applyLanguage(currentLang);

  // ==========================================
  // 3. MOBILE MENU TOGGLE
  // ==========================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // ==========================================
  // 4. INTERACTIVE LOGO CONCEPT SWITCHER
  // ==========================================
  const toggleLogoBtn = document.getElementById('toggleLogoBtn');
  const heroLogoImage = document.getElementById('heroLogoImage');
  const logos = ['assets/images/logo_v1.jpg', 'assets/images/logo_v2.jpg'];
  let currentLogoIndex = 0;

  if (toggleLogoBtn && heroLogoImage) {
    toggleLogoBtn.addEventListener('click', () => {
      heroLogoImage.classList.add('fade-out');
      setTimeout(() => {
        currentLogoIndex = (currentLogoIndex + 1) % logos.length;
        heroLogoImage.src = logos[currentLogoIndex];
        heroLogoImage.classList.remove('fade-out');
      }, 250);
    });
  }

  // ==========================================
  // 5. INTERACTIVE WHATSAPP ORDER GENERATOR
  // ==========================================
  const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('studentName')?.value.trim() || '';
      const university = document.getElementById('universityName')?.value.trim() || '';
      const service = document.getElementById('serviceType')?.value || '';
      const deadline = document.getElementById('deadline')?.value.trim() || '';
      const details = document.getElementById('orderDetails')?.value.trim() || '';

      const phoneNumber = '972598383944'; // +972 59-838-3944
      let message = '';

      if (currentLang === 'en') {
        message = `Hello Hi Tech Center 🎓\nI would like to inquire & order a service:\n\n` +
          `👤 *Name:* ${name || 'Student'}\n` +
          `🏛️ *University/Faculty:* ${university || 'Not specified'}\n` +
          `📌 *Service Type:* ${service}\n` +
          `⏳ *Deadline:* ${deadline || 'As soon as possible'}\n` +
          `📝 *Details & Notes:*\n${details}\n\n` +
          `Please provide me with the details and quote. Thank you!`;
      } else {
        message = `السلام عليكم ورحمة الله وبركاته 🎓\nأرغب في الاستفسار والطلب من *مكتبة ومركز هاي تك*:\n\n` +
          `👤 *الاسم:* ${name || 'طالب'}\n` +
          `🏛️ *الجامعة / الكلية:* ${university || 'غير محدد'}\n` +
          `📌 *نوع الخدمة:* ${service}\n` +
          `⏳ *الموعد النهائي:* ${deadline || 'في أقرب وقت'}\n` +
          `📝 *تفاصيل الطلب:*\n${details}\n\n` +
          `يرجى التكرم بالرد وموافاتي بالتفاصيل والسعر. شكراً لكم!`;
      }

      const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
    });
  }
});
