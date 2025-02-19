import { createI18n } from "vue3-i18n";

const messages = {
  en: {
    lang: "English",
    menu: ["Home", "Products", "About Us", "Contact"],
    contactButton: "Contact Now",
    address: "Puliyanmala - Thookupalam Rd, Thookkupalam, Kerala 685552",
    city: "idukki, Kerala",
    productsNav: "Explore Products",
    heroSection: {
      title: "Roll with us for the best ride on the road",
      subtitle:
        "We offer a wide selection of tyres from leading brands, as well as expert advice and installation services. Our experienced staff are on hand to help you find the perfect tyre for your vehicle, ensuring you get the best performance and value for money. Whether you're looking for new tyres, replacements or repairs, we have the right solution for you.",
      getStartedButton: "Get Started",
      ExploreButton: "Explore",
    },
    chooseSection: {
      title: "Why Choose Us?",
      interestedSection: "Are you interested in working together?",
      cardOne: {
        title: "Legal",
        subtitle:
          "We are legal and certified from our government for business activity and export industries",
      },
      cardTwo: {
        title: "Best Price",
        subtitle:
          "We are legal and certified from our government for business activity and export industries",
      },
      cardThree: {
        title: "Trusted",
        subtitle:
          "We are legal and certified from our government for business activity and export industries",
      },
    },
    productSection: {
      smallTitle: "Let's check",
      bigTitle: "Our Product",
      productSmallTitle: "Our main product are",
      productTitle: "Areca",
      description:
        "This tree is one of the plants with high economic value and potential. Areca nut is mainly grown for its seeds. Areca nut has many benefits, so that currently areca nut has become a trading commodity.",
      variantTitle: "We export one of kind",
      variant: "Areca Nuts",
      variantDescription:
        "Various types of varieties that exist, namely, areca betara, areca red, areca bulawan, areca palm and areca nut irian.",
      getProductTitle: "Get our areca nuts now",
    },
    getTouchSection: {
      mainTitle: "Get in Touch",
      title: "Have an inquiry?",
      subtitle:
        "Get in touch and ask something. Or visit or social media below",
      name: "Name",
      mail: "Email",
      message: "Message",
      submit: "Send",
    },
    contactPage: {
      mainTitleSub: "Contact us if your have any inquiry or anything about business",
      contactInformation: "Contact Information",
      regency: "Riau Province, Indonesia",
      phone: "+628 0000 0000",
      mail: "alamat@email.com",
    },
    aboutPage: {
      title: "Know",
      description: "MR Tyres Puliyanmala are exporters of leading commodities in one of the regencies in Riau, namely the Meranti Islands. built by people who share the same vision, and manage to serve clients professionally.",
      thankGreeting: "We are very grateful for all our partners and clients, Following the moment and will always serve the best for all.",
      visi: {
        title: "Vision",
        desc: "Become an exporter with world quality customer service and advance the economy together",
      },
      misi: {
        title: "Mision",
        misi1: "Build good relationships with clients and partners",
        misi2: "Always provide requests with good quality and guaranteed",
        misi3: "Build and have a professional team"
      }
    }
  },
  id: {
    lang: "Indonesia",
    menu: ["Beranda", "Produk", "Tentang Kami", "Kontak"],
    contactButton: "Hubungi Sekarang",
    address: "Puliyanmala - Thookupalam Rd, Thookkupalam, Kerala 685552",
    city: "Puliyanmala - Thookupalam Rd, Thookkupalam, Kerala 685552",
    productsNav: "Jelajahi Produk",
    heroSection: {
      title: "Eksportir Pinang Kualitas Terpercaya",
      subtitle:
        "Kami adalah eksportir produk di Kepulauan Meranti. Salah satunya adalah pinang kualitas tinggi khas lahan gambut Kepulauan Meranti",
      getStartedButton: "Ayo Mulai",
      ExploreButton: "Eksplor",
    },
    chooseSection: {
      title: "Kenapa Memilih Kami?",
      interestedSection: "Apakah tertarik untuk bekerja sama?",
      cardOne: {
        title: "Resmi dan Bersertifikat",
        subtitle:
          "Kami legal dan bersertifikat dari pemerintah kami untuk kegiatan bisnis dan industri ekspor",
      },
      cardTwo: {
        title: "Harga Terbaik",
        subtitle:
          "Kami menawarkan harga yang kompetitif dan nilai terbaik untuk bisnis Anda. Hubungi untuk informasi lebih lanjut",
      },
      cardThree: {
        title: "Terpercaya",
        subtitle:
          "Anda akan mendapatkan produk terbaik dengan kualitas terbaik yang pernah kami miliki, dan nilai terbaik untuk harga berapa pun",
      },
    },
    productSection: {
      smallTitle: "Ayo periksa",
      bigTitle: "Produk Kami",
      productSmallTitle: "Produk utama kami adalah",
      productTitle: "Biji Buah Pinang",
      description:
        "Buah pinang adalah tumbuhan yang tergolong palem-paleman. Pohon ini merupakan salah satu tanaman dengan nilai ekonomi dan potensi yang cukup tinggi. Pinang terutama ditanam untuk dimanfaatkan bijinya. Pinang sangat banyak manfaatnya, sehingga saat ini biji buah pinang sudah menjadi komoditas perdagangan.",
			variantTitle: "Kami mengekspor berbagai jenis",
      variant: "Biji buah pinang",
      variantDescription:
        "Berbagai jenis varietas yang ada yaitu, pinang betara, pinang merah, pinang bulawan, pinang kelapa dan pinang irian",
      getProductTitle: "Dapatkan biji kopi liberika kami sekarang",
    },
    getTouchSection: {
      mainTitle: "Hubungi Kami",
      title: "Mempunyai pertanyaan?",
      subtitle:
        "Hubungi kami dan tanyakan sesuatu. Atau hubungi kami di link sosial media dibawah",
      name: "Nama",
      mail: "Alamat Email",
      message: "Pesan",
      submit: "Kirim",
    },
    contactPage: {
      mainTitleSub: "Hubungi kami jika Anda memiliki pertanyaan atau apa pun tentang bisnis",
      contactInformation: "Informasi Kontak",
      regency: "Provinsi Riau, Indonesia",
      phone: "+628 0000 0000",
      mail: "alamat@email.com",
    },
    aboutPage: {
      title: "Ketahui",
      description: "MR Tyres Puliyanmala adalah pengekspor komoditas unggulan di salah satu kabupaten di Provinsi Riau, yaitu Kepulauan Meranti. dibangun oleh orang-orang yang memiliki visi yang sama, dan mengelola untuk melayani klien dengan profesional.",
      thankGreeting: "Thank you for sending us a message, we will respond in the near future.",
      visi: {
        title: "Visi",
        desc: "Menjadi pengekspor dengan layanan pelanggan kualitas dunia dan memajukan ekonomi bersama",
      },
      misi: {
        title: "Misi",
        misi1: "Membangun hubungan baik bersama client dan partner",
        misi2: "Selalu menyediakan permintaan dengan kualitas baik dan terjamin",
        misi3: "Membangun dan memiliki tim yang profesional"
      }
    }
  },
};

const i18n = createI18n({
  locale: "en",
  messages: messages,
});

export default i18n;
