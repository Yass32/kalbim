// Centralized, typed content for the KALBİM landing page.

export const nav = [
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Programlar', href: '/programlar' },
  { label: 'Topluluk', href: '/topluluk' },
  { label: 'Blog', href: '/blog' },
  { label: 'İletişim', href: '/iletisim' },
] as const;

export const heroStats = [
  { value: '500+', label: 'Aktif üye' },
  { value: '12', label: 'Şehirde topluluk' },
  { value: '4.9★', label: 'Üye memnuniyeti' },
] as const;

export const impactStats = [
  { value: '500+', label: 'Aktif üye', note: 'Tüm Türkiye genelinde' },
  { value: '12', label: 'Şehir', note: 'Yerel çevreler ile' },
  { value: '48', label: 'Program', note: 'Eğitim, atölye, etkinlik' },
  { value: '3 yıl', label: 'Hareket', note: "2022'den bu yana büyüyor" },
] as const;

export type ProgramTheme = 'crimson' | 'forest' | 'gold';

export interface Program {
  badge: string;
  title: string;
  description: string;
  meta: string[];
  theme: ProgramTheme;
}

export const programs: Program[] = [
  {
    badge: '6 AY · HİBRİT',
    title: 'Liderlik Eğitimi',
    description:
      'Stratejik düşünme, ekip yönetimi ve etkin iletişim üzerine üç modüllü kapsamlı program. Sertifikalı.',
    meta: ['Sınırlı kontenjan', 'Eylül 2025'],
    theme: 'crimson',
  },
  {
    badge: '12 HAFTA · 1-1',
    title: 'Mentorluk Programı',
    description:
      'Kariyerinde 10+ yıl deneyimli liderlerle birebir eşleşme. Hedef bazlı, esnek görüşme planı.',
    meta: ['Aylık 2 görüşme', 'Başvurular açık'],
    theme: 'forest',
  },
  {
    badge: 'SÜREKLİ',
    title: 'Atölyeler & Etkinlikler',
    description:
      'Müzakere becerileri, kişisel marka, finansal okuryazarlık ve daha fazlasına yönelik kısa atölyeler.',
    meta: ['Çevrimiçi & yüz yüze', 'Üyelere ücretsiz'],
    theme: 'gold',
  },
];

export type CircleTheme = 'crimson' | 'forest' | 'gold' | 'lilac';

export interface Circle {
  title: string;
  description: string;
  groups: string;
  theme: CircleTheme;
}

export const circles: Circle[] = [
  {
    title: 'Kariyer Çevresi',
    description: 'Kurumsal yolda büyüyenler',
    groups: '18 aktif grup',
    theme: 'crimson',
  },
  {
    title: 'Girişimci Çevresi',
    description: 'Kendi işini kuran kadınlar',
    groups: '9 aktif grup',
    theme: 'forest',
  },
  {
    title: 'Genç Liderler',
    description: '21–28 yaş, ilk 5 yıl',
    groups: '14 aktif grup',
    theme: 'gold',
  },
  {
    title: 'Anne & Kariyer',
    description: 'İş–yaşam dengesi odaklı',
    groups: '6 aktif grup',
    theme: 'lilac',
  },
];

export type AvatarTheme = 'crimson' | 'forest' | 'gold';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  theme: AvatarTheme;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "KALBİM'de geçirdiğim 6 ay hem kariyerime hem de özgüvenime büyük katkı sağladı. Çevremdeki kadınlardan öğrendiklerim, hiçbir eğitimde alamayacağım türdendi.",
    name: 'Ela K.',
    role: 'Ürün Müdürü, İstanbul',
    initials: 'EK',
    theme: 'crimson',
  },
  {
    quote:
      'İlk şirketimi kurarken mentorluk programı yolumu açtı. Şu an aynı topluluğa mentor olarak geri vermek bana ayrıca güç veriyor.',
    name: 'Zeynep A.',
    role: 'Girişimci, İzmir',
    initials: 'ZA',
    theme: 'forest',
  },
  {
    quote:
      'Yerel çevremiz iki haftada bir buluşuyor. Bazen tek bir konuşma, haftalardır kafamı kurcalayan bir konuyu netleştiriyor.',
    name: 'Merve D.',
    role: 'Hukuk Danışmanı, Ankara',
    initials: 'MD',
    theme: 'gold',
  },
];

export interface Article {
  tag: string;
  title: string;
  date: string;
  readTime: string;
  variant: 'circles' | 'squares';
}

export const articles: Article[] = [
  {
    tag: 'LİDERLİK',
    title: 'Ekibinde ilk kez yönetici olan kadınlara 7 not',
    date: '14 Eki 2025',
    readTime: '6 dk okuma',
    variant: 'circles',
  },
  {
    tag: 'MENTORLUK',
    title: 'İyi bir mentor–menti ilişkisini sürdürmenin üç anahtarı',
    date: '02 Eki 2025',
    readTime: '4 dk okuma',
    variant: 'squares',
  },
];

export const footerColumns = [
  {
    title: 'KURUMSAL',
    links: [
      { label: 'Hakkımızda', href: '/hakkimizda' },
      { label: 'Ekip', href: '/hakkimizda#ekip' },
      { label: 'Kariyer', href: '/iletisim' },
      { label: 'Basında', href: '/blog' },
    ],
  },
  {
    title: 'PROGRAMLAR',
    links: [
      { label: 'Liderlik Eğitimi', href: '/programlar' },
      { label: 'Mentorluk', href: '/programlar' },
      { label: 'Atölyeler', href: '/programlar' },
      { label: 'Etkinlikler', href: '/topluluk#etkinlikler' },
    ],
  },
  {
    title: 'TOPLULUK',
    links: [
      { label: 'Çevreler', href: '/topluluk' },
      { label: 'Yerel buluşmalar', href: '/topluluk#etkinlikler' },
      { label: 'Forum', href: '/topluluk' },
      { label: 'Ödüller', href: '/hakkimizda' },
    ],
  },
  {
    title: 'DESTEK',
    links: [
      { label: 'Bağış yap', href: '/iletisim' },
      { label: 'Gönüllü ol', href: '/iletisim' },
      { label: 'Kurumsal işbirlikleri', href: '/iletisim' },
      { label: 'SSS', href: '/iletisim#sss' },
    ],
  },
] as const;

export const footerLegal = ['Gizlilik Politikası', 'KVKK', 'Çerez Tercihleri'] as const;

// ───────────────────────────────────────────────────────────
// Inner page content
// ───────────────────────────────────────────────────────────

export const values = [
  {
    title: 'Yargısız destek',
    body: 'Her kadının hikayesi farklı. Kıyaslamadan, etiketlemeden; olduğun yerden başlayarak ilerlemeni destekliyoruz.',
  },
  {
    title: 'Birlikte büyüme',
    body: 'Bilgi paylaştıkça çoğalır. Üyeler hem öğrenen hem öğreten; bugünün mentisi yarının mentoru oluyor.',
  },
  {
    title: 'Somut etki',
    body: 'İlham güzel, eylem daha güzel. Programlarımız ölçülebilir hedefler ve uygulanabilir araçlar üzerine kurulu.',
  },
  {
    title: 'Bağımsızlık',
    body: 'Hiçbir kurumdan bağımsız, üyelerinin önceliklerini gözeten şeffaf bir topluluk olarak çalışıyoruz.',
  },
];

export const timeline = [
  { year: '2022', title: 'İlk kıvılcım', body: 'İstanbul’da 14 kadının kurduğu küçük bir okuma ve mentorluk grubu olarak başladık.' },
  { year: '2023', title: 'İlk programlar', body: 'Liderlik eğitimi ve birebir mentorluk programları hayata geçti; üç şehre yayıldık.' },
  { year: '2024', title: 'Çevreler doğdu', body: 'Akran gruplarından oluşan “çevreler” modeliyle topluluk 8 şehirde örgütlendi.' },
  { year: '2025', title: 'Ülke geneli ağ', body: '12 şehir, 500+ aktif üye ve 48 programla Türkiye geneline ulaşan bir harekete dönüştük.' },
];

export const team = [
  { name: 'Selin Aydın', role: 'Kurucu & Direktör', initials: 'SA', theme: 'crimson' as const },
  { name: 'Derya Koç', role: 'Programlar Lideri', initials: 'DK', theme: 'forest' as const },
  { name: 'Naz Yıldırım', role: 'Topluluk Koordinatörü', initials: 'NY', theme: 'gold' as const },
  { name: 'Pelin Demir', role: 'Mentorluk Sorumlusu', initials: 'PD', theme: 'crimson' as const },
  { name: 'Ece Arslan', role: 'İçerik & Yayın', initials: 'EA', theme: 'forest' as const },
  { name: 'Burcu Şahin', role: 'Etkinlik & Operasyon', initials: 'BŞ', theme: 'gold' as const },
];

export const faq = [
  {
    q: 'KALBİM’e kimler katılabilir?',
    a: 'Kariyerinin herhangi bir aşamasındaki tüm kadınlar katılabilir. Öğrenciler, yeni mezunlar, yöneticiler ve girişimciler topluluğumuzda yer alıyor.',
  },
  {
    q: 'Üyelik ücretli mi?',
    a: 'Temel üyelik ücretsizdir ve topluluk etkinliklerine, çevrelere ve kaynaklara erişim sağlar. Bazı sertifikalı programlar sembolik bir katkı payı içerebilir.',
  },
  {
    q: 'Mentorluk programına nasıl başvururum?',
    a: 'İletişim sayfasındaki formu doldurarak başvurabilirsiniz. Hedeflerinize uygun bir mentorla eşleştirme süreci ortalama iki hafta sürer.',
  },
  {
    q: 'Şehrimde çevre yoksa ne yapabilirim?',
    a: 'KALBİM kolaylaştırıcılarının desteğiyle kendi çevrenizi kurabilirsiniz. Size rehberlik edecek bir başlangıç kiti ve eğitim sağlıyoruz.',
  },
  {
    q: 'Etkinlikler çevrimiçi mi yüz yüze mi?',
    a: 'İkisi de. Atölyelerin çoğu hibrit; yerel buluşmalar yüz yüze, konuk konuşmaları ise genellikle çevrimiçi gerçekleşir.',
  },
];

export const programDetails = [
  {
    badge: '6 AY · HİBRİT',
    title: 'Liderlik Eğitimi',
    theme: 'crimson' as const,
    body: 'Stratejik düşünme, ekip yönetimi ve etkin iletişim üzerine üç modüllü, sertifikalı kapsamlı bir program.',
    points: [
      'Üç modül: Strateji, İnsan, İletişim',
      'Gerçek vaka çalışmaları ve atölyeler',
      'Akran geri bildirimi ve bitirme projesi',
      'Tamamlayanlara dijital sertifika',
    ],
    meta: ['Sınırlı kontenjan', 'Sonraki dönem: Eylül 2025'],
  },
  {
    badge: '12 HAFTA · 1-1',
    title: 'Mentorluk Programı',
    theme: 'forest' as const,
    body: 'Kariyerinde 10+ yıl deneyimli liderlerle birebir eşleşme. Hedef bazlı, esnek bir görüşme planıyla ilerler.',
    points: [
      'Hedeflerine göre mentor eşleştirme',
      'Ayda iki birebir görüşme',
      'Yapılandırılmış ilerleme takibi',
      'Mezunlara mentor olma fırsatı',
    ],
    meta: ['Aylık 2 görüşme', 'Başvurular açık'],
  },
  {
    badge: 'SÜREKLİ',
    title: 'Atölyeler & Etkinlikler',
    theme: 'gold' as const,
    body: 'Müzakere becerileri, kişisel marka, finansal okuryazarlık ve daha fazlasına yönelik kısa, uygulamalı atölyeler.',
    points: [
      'Haftalık çevrimiçi & yüz yüze atölyeler',
      'Alanında uzman konuk konuşmacılar',
      'Uygulamalı şablonlar ve kaynaklar',
      'Üyelere ücretsiz katılım',
    ],
    meta: ['Çevrimiçi & yüz yüze', 'Üyelere ücretsiz'],
  },
];

export const events = [
  { date: '18 Haz', title: 'Müzakere Atölyesi: Maaş görüşmesi', city: 'İstanbul', mode: 'Yüz yüze' },
  { date: '25 Haz', title: 'Kişisel Marka 101', city: 'Çevrimiçi', mode: 'Webinar' },
  { date: '02 Tem', title: 'Girişimci Çevresi Buluşması', city: 'İzmir', mode: 'Yüz yüze' },
  { date: '09 Tem', title: 'Finansal Okuryazarlık Sohbeti', city: 'Çevrimiçi', mode: 'Webinar' },
  { date: '16 Tem', title: 'Genç Liderler Networking', city: 'Ankara', mode: 'Yüz yüze' },
];

export const blogPosts = [
  { tag: 'LİDERLİK', title: 'Ekibinde ilk kez yönetici olan kadınlara 7 not', date: '14 Eki 2025', readTime: '6 dk okuma', variant: 'circles' as const },
  { tag: 'MENTORLUK', title: 'İyi bir mentor–menti ilişkisini sürdürmenin üç anahtarı', date: '02 Eki 2025', readTime: '4 dk okuma', variant: 'squares' as const },
  { tag: 'KARİYER', title: 'Geri dönüş: Aradan sonra iş hayatına dönmenin yolları', date: '21 Eyl 2025', readTime: '7 dk okuma', variant: 'squares' as const },
  { tag: 'GİRİŞİMCİLİK', title: 'İlk yatırımını ararken bilmen gereken 5 şey', date: '08 Eyl 2025', readTime: '9 dk okuma', variant: 'circles' as const },
  { tag: 'FİNANS', title: 'Kadınlar için finansal bağımsızlık rehberi', date: '30 Ağu 2025', readTime: '5 dk okuma', variant: 'squares' as const },
  { tag: 'İLETİŞİM', title: 'Toplantılarda sesini duyurmanın pratik yolları', date: '17 Ağu 2025', readTime: '4 dk okuma', variant: 'circles' as const },
];

export const blogCategories = ['Tümü', 'Liderlik', 'Mentorluk', 'Kariyer', 'Girişimcilik', 'Finans'] as const;

export const contactChannels = [
  { label: 'E-posta', value: 'merhaba@kalbim.org', href: 'mailto:merhaba@kalbim.org' },
  { label: 'Telefon', value: '+90 212 000 00 00', href: 'tel:+902120000000' },
  { label: 'Adres', value: 'Maslak Mah. No:1, Sarıyer / İstanbul', href: '#' },
];
