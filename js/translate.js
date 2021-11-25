
      const { createApp } = Vue;
      const { createI18n } = VueI18n;

      const i18n = createI18n({
        locale: "ja",
        messages: {
          en: {
            about: {
              title: 'About Us',
              concept: 'CONCEPT',
              conceptBody: 'We aim to create a new business model,' + '\n' + 'Making Japanese Beauty Industry a GLOBAL STANDARD.' + '\n' + 'We create services in utilizing our experiences in the beauty and salon industry in Japan both as a manufacturer and a dealer, and creating new web services, with information technology and recent trends.',
              messageTitle: 'Message', 
              messageBody: 'Making our full use of the knowledge of the'
            },
            message: {
              // language: "Language",
              projects: "Projects"
            },
            kmb: {
              title: "KAMISMA BEAUTY",
              type: 'KAMISMA Reservation System',
              body: "KAMISMA BEAUTY is a reservation service between the customers and the salon/stylists that are praised as CHARISMA (charismatic). Just like France has Michelin Guide for food, Japan has KAMI CHARISMA for beauty salon.  In the newer edition, there are stylists that received the accolades, but hard to reserve, in which the reservation service is called KAMISMA BEAUTY. You can experience an exclusive menu as well.",
              link: "Go To the Site",
              details: "Read More",
              close: 'Close'
            },
            nileBeauty: {
              title: 'NILE BEAUTY',
              type: 'B2B Business Matching Service',
              body: 'B2B Business Matching Service connecting businesses globally.' + '\n' + 'Until recently, the way we would gather information, negotiate, and do businesses were in-person.   With the reliance on Social Media and the emergence of 5G, the spread of information is rapidly changing as we would need to adjust to the global landscape of both business and society.  NILE matches between companies, company and individuals.  We aim to support long-lasting business relationships because of stumbling onto the products and services because of the use of internet.',
              link: "Go To the Site",
              details: "READ More",
              close: 'Close'
            },
            kmx: {
              title: 'KAMISMAX',
              type: 'Streaming Educational Video Service',
              body: 'Making a new wave in the hair salon industry, set to be released in 2021、Will be releasing new videos which will create a new standard into the future.',
              link: "Go To the Site",
              details: "Read More",
              close: 'Close'
            },
            corporate: {
              comp: 'Company Name',
              name: 'INVADE Co., Ltd.',
              det: 'Business',
              details: 'Planning, designing, production, operation and sales of of digital contents utilizing the internet, mobile device, and other telecommunication tools.' + '\n' + 'Also in planning, designing, production, operation of web contents and creating new informational systems.' + '\n' + 'Planning and production of events.',
              cap: 'Capital',
              capital: '~27,000 dollars',
              achievements: 'Creations',
              a1Date: 'Jun. 2021',
              a1Title: 'KAMISMA BEAUTY',
              a1Details: '(KAMI CHARISMA Stylist Reservation System)',
              a2Date: 'Jul. 2021',
              a2Title: 'NILE BEAUTY',
              a2Details: '(International B2B Matching Service for Beauty Industry)',
              a3Date: 'Nov. 2021',
              a3Title: 'KAMISMAX',
              a3Details: '(Online Learning System for Salon Industry)',
            },
            mailWarning: {
              // sectTitle: 'CONTACT',
              title: 'Regarding Inquiries',
              line1: 'The personal information you provide will be used to answer inquiries and provide information.',
              line2: 'We may not be able to respond if you do not enter your personal information correctly or depending on the content of your inquiry.',
              line3: 'Depending on the content of your inquiry, it may take some time to respond.',
              line4: 'Since the reply will be sent to the individual customer, secondary use such as reprinting or transfer is strictly prohibited.',
              imp: "Required",
            },
            extra: {
              title: "NEWS",
            },
            footer: {
              service: "Service",
            }
          },
          ja: {
            about: {
              title: '会社概要',
              concept: 'CONCEPT',
              conceptBody: '新しいビジネスモデルの構築により、日本の美容を世界のスタンダードへ。',
            },
            message: {
              // language: "言語",
              projects: "実績"
            },
            kmb: {
              title: "KAMISMA BEAUTY",
              type: 'KAMISMA特別予約サービス',
              body: 'KAMISMA BEAUTY(カミスマ ビューティー)はCharismaと評される美容師＆美容室とお客様を繋げる予約サービスです。' + '\n' + 'フランスには「食」のミシュランがありますが、日本には「美容」のKAMI CHARISMA(カミカリスマ)があります。カミカリスマ・ガイドブック最新版には、栄えある星を獲得した予約困難なスター美容師たちが勢ぞろい。そんな彼らの予約が取れる特化型サービスがKAMISMA BEAUTYです。幻の一枠などここでしか味わえない限定メニューを体験して頂けます。',
              link: "ページへ",
              details: "詳細へ",
              close: '閉じる'
            },
            nileBeauty: {
              title: 'NILE BEAUTY',
              type: 'B2Bオンラインビジネスマッチングサービス',
              body: 'NILE BEAUTYは、美容業界に特化した「全世界対応」のB2Bマッチングサービスです。オンラインの利便性に加え、新しい仕組みを導入。ビジネスの在り方を大きく変える国際的サービスが誕生しました。',
              link: "ページへ",
              details: "詳細へ",
              close: '閉じる'
            },
            kmx: {
              title: 'KAMISMAX',
              type: '美容師向けオンライン教育動画配信サービス',
              body: 'KAMISMAXは、次代に向けた新しい教育環境を実現するオンラインプラットフォームとして、独自開発された新しい動画配信サービスです。',
              link: "ページへ",
              details: "詳細へ",
              close: '閉じる'
            },
            corporate: {
              comp: '会社名',
              name: 'インベード株式会社',
              det: '事業内容',
              details: 'インターネット、携帯電話網、その他通信システムを利用したデジタルコンテンツの企画、デザイン、制作、運営及び販売業務' + '\n' + 'ウェブコンテンツに関する企画、デザイン、制作、運営業務 情報システムの研究および開発 各種イベントの企画、制作等',
              cap: '資本金',
              capital: '300万円',
              achievements: '開発実績',
              a1Date: '2021年6月',
              a1Title: 'KAMISMA BEAUTY（カミスマビューティー）',
              a1Details: '（カミカリスマ美容師予約サービス）',
              a2Date: '2021年7月',
              a2Title: 'NILE BEAUTY（ナイル ビューティー）',
              a2Details: '（美容業界特化型、全世界対応B2Bマッチングサービス）',
              a3Date: '2021年11月',
              a3Title: 'KAMISMAX（カミスマックス）',
              a3Details: '（美容師向け教育動画配信サービス）',
            },
            mailWarning: {
              // sectTitle: 'お問合せ',
              title: 'お問い合わせに関する注意事項',
              line1: 'ご記入いただいた個人情報は、お問い合わせへの回答、情報提供のために使用させていただきます。',
              line2: '個人情報を正しくご記入いただけない場合やお問い合わせ内容によっては、回答できない場合がございます。',
              line3: 'お問い合わせ内容によっては、回答にお時間をいただく場合がございます。',
              line4: '回答はお客様個人宛に送るものですので、転載・転送等の二次利用は固くお断りいたします。',
              imp: 'は必須'
            },
            extra: {
              title: "インベード株式会社",
            },
            footer: {
              service: "サービス",
            }
          }
        },
      });

      const app = createApp({});
      app.use(i18n);
      app.mount("#app");
