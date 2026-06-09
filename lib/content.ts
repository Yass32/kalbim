// Centralized, typed content for the KALBİM landing page.

export const nav = [
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Programlar', href: '#programlar' },
  { label: 'Topluluk', href: '#topluluk' },
  { label: 'Blog', href: '#blog' },
  { label: 'İletişim', href: '#iletisim' },
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
  {
    quote:
      "Kariyer değişikliği sürecimde bu topluluğun desteğini hissetmek harikaydı. Liderlik atölyeleri sayesinde yeni rolüme çok daha hızlı ve özgüvenli adapte oldum.",
    name: 'Ayşe T.',
    role: 'Yazılım Geliştirici, Bursa',
    initials: 'AT',
    theme: 'crimson',
  },
  {
    quote:
      "Sadece profesyonel bir ağ değil, aynı zamanda güçlü bir dayanışma ortamı buldum. Kendi sektörümdeki diğer kadınların tecrübelerini dinlemek vizyonumu tamamen değiştirdi.",
    name: 'Ceren B.',
    role: 'İletişim Direktörü, Eskişehir',
    initials: 'CB',
    theme: 'forest',
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
    links: ['Hakkımızda', 'Ekip', 'Kariyer', 'Basında'],
  },
  {
    title: 'PROGRAMLAR',
    links: ['Liderlik Eğitimi', 'Mentorluk', 'Atölyeler', 'Etkinlikler'],
  },
  {
    title: 'TOPLULUK',
    links: ['Çevreler', 'Yerel buluşmalar', 'Forum', 'Ödüller'],
  },
  {
    title: 'DESTEK',
    links: ['Bağış yap', 'Gönüllü ol', 'Kurumsal işbirlikleri', 'SSS'],
  },
] as const;

export const footerLegal = ['Gizlilik Politikası', 'KVKK', 'Çerez Tercihleri'] as const;
