import React, { useState, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PromoPopup from '@/components/PromoPopup';
import SocialProofPopup from '@/components/SocialProofPopup'; // Import the new component

// --- NEW DATA FOR SOCIAL PROOF ---
const sampleNames = ["Alex", "Maria", "David", "Fatima", "Chen", "Yuki", "Jose", "Isabella", "Mohammed", "Olga","Tony","Roger","Boudi","edguard","Karim","Andre","Toufik","Sofia"];
const sampleLocations = ["New York, USA", "London, UK", "Dubai, UAE", "Tokyo, Japan", "Berlin, Germany", "Sydney, Australia", "Cairo, Egypt", "São Paulo, Brazil","Beirut, Lebanon","Doha,Qatar"];

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // --- NEW STATE FOR SOCIAL PROOF ---
  const [notification, setNotification] = useState(null);

  const [showPopup, setShowPopup] = useState(false);
  const [musicPacks, setMusicPacks] = useState([
    // ... all your music pack data is preserved here ...
      { id: 1, title: 'Arabic-Afro Vol. 1', artist: 'Various Artists', description: '65+ TOP SELECTED TRACKS!Step into a fusion of cultures...', cover: 'https://i.imgur.com/ogJpPXF.png', gumroadLink: 'https://topdjcrates.gumroad.com/l/luilk', demoLink: 'https://topdjcrates.gumroad.com/l/ialts', originalPrice: 25, discountedPrice: 20, tracks: [ { id: '1a', title: 'Baba (Rakkas remix) - Amr Diab', audioPreview: 'https://audio-hosting.netlify.app/baba (rakkas remix) - amr diab.mp3' }, { id: '1b', title: 'Wayah (mike dokos edit)', audioPreview: 'https://audio-hosting.netlify.app/af 1 - amr diab - wayah (mike dokos edit) - preview.mp3' }, { id: '1c', title: 'Zurna (original mix)', audioPreview: 'https://audio-hosting.netlify.app/af 1 - badbox - zurna (original mix) - preview.mp3' }, { id: '1d', title: 'Ayababa (tunisian mix)', audioPreview: 'https://audio-hosting.netlify.app/yababa (tunisian mix) - pablo fierro.mp3' }, { id: '1e', title: 'dj phellix - ayooni', audioPreview: 'https://audio-hosting.netlify.app/dj phellix - ayooni.mp3' }, ] },
      { id: 2, title: 'Afro-House Vol:1', artist: 'Various Artists', description: '150+ Afro-House bangers Crafted by DJs, for DJs...', cover: 'https://i.imgur.com/gtXSZyl.png', gumroadLink: 'https://topdjcrates.gumroad.com/l/cgfbzd', demoLink: 'https://topdjcrates.gumroad.com/l/kdkpn', originalPrice: 25, discountedPrice: 20, tracks: [ { id: '2a', title: 'Pasilda (sunnery james & ryan)', audioPreview: 'https://audio-hosting.netlify.app/ah 1 - afro medusa - pasilda (sunnery james & ryan) preview.mp3' }, { id: '2b', title: 'Bandido (original mix)', audioPreview: 'https://audio-hosting.netlify.app/ah 1 - alex twin, rbør - bandido (original mix) - preview.mp3' }, { id: '2c', title: 'No sabia (extended mix)', audioPreview: 'https://audio-hosting.netlify.app/no sabia.mp3' }, { id: '2d', title: 'Gabss - batucada', audioPreview: 'https://audio-hosting.netlify.app/batucada.mp3' }, { id: '2e', title: 'Afro chooz (dj chus remix)', audioPreview: 'https://audio-hosting.netlify.app/afrochooz.mp3' }, ] },
      { id: 3, title: 'Afro-House Vol:2', artist: 'Various Artists', description: '150+ Afro-House bangers Crafted by DJs, for DJs...', cover: 'https://i.imgur.com/Ipgh8jP.png', gumroadLink: 'https://topdjcrates.gumroad.com/l/pcvdr', originalPrice: 25, discountedPrice: 20, tracks: [ { id: '3a', title: 'nalingiyo (dr feel remix)', audioPreview: 'https://audio-hosting.netlify.app/eman s, ndlondlo - nalingiyo (dr feel remix)preview.mp3' }, { id: '3b', title: 'hey mama', audioPreview: 'https://audio-hosting.netlify.app/emmanuel jal & check b - hey mamapreview.mp3' }, { id: '3c', title: 'pjanoo (marasi remix)', audioPreview: 'https://audio-hosting.netlify.app/erci prydz - pjanoo (marasi remix)preview.mp3' }, { id: '3d', title: 'cosmos balata nozao remix', audioPreview: 'https://audio-hosting.netlify.app/fab from toulouse - cosmos balata nozao remix preview.mp3' }, { id: '3e', title: 'tocas miracle vidojean x oliver l', audioPreview: 'https://audio-hosting.netlify.app/fragma - tocas miracle vidojean x oliver l preview.mp3' }, ] },
      { id: 4, title: 'Top Funky House 2025', artist: 'Various Artists', description: '130+ handpicked fresh, high-energy selection...', cover: 'https://i.imgur.com/xI7oBHM.png', gumroadLink: 'https://topdjcrates.gumroad.com/l/mjnzci', originalPrice: 25, discountedPrice: 20, tracks: [ { id: '4a', title: 'A deeper love', audioPreview: 'https://audio-hosting.netlify.app/fh 1 - paul adam, mia millet - a deeper love (extended mix) [there was jack] preview.mp3' }, { id: '4b', title: 'You got the love (santify mix)', audioPreview: 'https://audio-hosting.netlify.app/fh 1 - steve tosi - you got the love (santify mix)preview.mp3' }, { id: '4c', title: 'Oceancake', audioPreview: 'https://audio-hosting.netlify.app/fh 1 - the beatbangers - oceancake (extended mix)preview.mp3' }, { id: '4d', title: 'Let there be house', audioPreview: 'https://audio-hosting.netlify.app/fh 1 -jackers revenge - let there be house (original mix) [save the nightlife]preview.mp3' }, { id: '4e', title: 'I need u tonight', audioPreview: 'https://audio-hosting.netlify.app/fh 1 -footloserz - i need u tonight (extended mix) [radical funk]preview.mp3' }, ] },
      { id: 5, title: 'Top Organic/Downtempo 2025', artist: 'Various Artists', description: '70+ handpicked smooth blend of earthy textures...', cover: 'https://i.imgur.com/EbTJzgy.png', gumroadLink: 'https://topdjcrates.gumroad.com/l/cezue', originalPrice: 25, discountedPrice: 20, tracks: [ { id: '5a', title: 'Ma tnssani - Aya Vanco', audioPreview: 'https://audio-hosting.netlify.app/or - ma tnssani - aya vanco.mp3' }, { id: '5b', title: 'Namaste', audioPreview: 'https://audio-hosting.netlify.app/od1 - heaven inc. - namaste (extended mix) [songuara tales]preview.mp3' }, { id: '5c', title: 'Follower', audioPreview: 'https://audio-hosting.netlify.app/od1 - cereus - follower (original mix) [monada]preview.mp3' }, { id: '5d', title: 'Ancient era', audioPreview: 'https://audio-hosting.netlify.app/od1 - agassi - ancient era (original mix) [lump records]preview.mp3' }, { id: '5e', 'Pana cand nu te iubeam': 'https://audio-hosting.netlify.app/od1 - adrian saguna - pana cand nu te iubeam (original mix) [go deeva records]preview.mp3' }, ] },
      { id: 6, title: 'Top Amapiano/Afro', artist: 'Various Artists', description: '160+ exclusive Amapiano and Exclusive Afro Edits...', cover: 'https://i.imgur.com/RJe1bFI.png', gumroadLink: 'https://topdjcrates.gumroad.com/l/vxrpz', demoLink: 'https://topdjcrates.gumroad.com/l/rtxwbh', originalPrice: 25, discountedPrice: 20, tracks: [ { id: '6a', title: 'break my soul', audioPreview: 'https://audio-hosting.netlify.app/amapiano-break my soul.mp3' }, { id: '6b', title: 'Breath', audioPreview: 'https://audio-hosting.netlify.app/amapiano-breath.mp3' }, { id: '6c', title: 'My Love', audioPreview: 'https://audio-hosting.netlify.app/amapiano-my love.mp3' }, { id: '6d', 'Rude Boy': 'https://audio-hosting.netlify.app/amapiano-rudeboy.mp3' }, { id: '6e', title: 'Slim Shady', audioPreview: 'https://audio-hosting.netlify.app/amapiano-slim shady.mp3' }, ] },
      { id: 7, title: 'Top R&B /Hip Hop', artist: 'Various Artists', description: 'Over 100+ professionally curated hits...', cover: 'https://i.imgur.com/bby1I0r.png', gumroadLink: 'https://topdjcrates.gumroad.com/l/dfdrca', originalPrice: 25, discountedPrice: 20, tracks: [ { id: '7a', title: 'Run this town', audioPreview: 'https://audio-hosting.netlify.app/rnb- pack 1 - run this town.mp3' }, { id: '7b', title: 'Samboosa (remix)', audioPreview: 'https://audio-hosting.netlify.app/rnb- pack 1 - samboosa (remix).mp3' }, { id: '7c', title: 'Shake your ass', audioPreview: 'https://audio-hosting.netlify.app/rnb- pack 1 - shake your ass.mp3' }, { id: '7d', title: 'The next episode (remix)', audioPreview: 'https://audio-hosting.netlify.app/rnb- pack 1 - the next episode (remix).mp3' }, { id: '7e', title: 'This is how we do it', audioPreview: 'https://audio-hosting.netlify.app/rnb- pack 1 - this is how we do it.mp3' }, ] },
      { id: 8, title: 'Top R&B /Hip Hop # 2', artist: 'Various Artists', description: 'Over 100+ professionally curated hits...', cover: 'https://i.imgur.com/C218Zts.png', gumroadLink: 'https://topdjcrates.gumroad.com/l/prppd', originalPrice: 25, discountedPrice: 20, tracks: [ { id: '8a', title: 'Friday', audioPreview: 'https://audio-hosting.netlify.app/rnb- pack 2 - friday.mp3' }, { id: '8b', title: 'Get it on tonight', audioPreview: 'https://audio-hosting.netlify.app/rnb- pack 2 - get it on tonight.mp3' }, { id: '8c', title: 'Groove thang', audioPreview: 'https://audio-hosting.netlify.app/rnb- pack 2 - groove thang.mp3' }, { id: '8d', title: 'Hit em up', audioPreview: 'https://audio-hosting.netlify.app/rnb- pack 2 - hit em up.mp3' }, { id: '8e', title: 'No money no problems', audioPreview: 'https://audio-hosting.netlify.app/rnb- pack 2 - no money no problems.mp3' }, ] },
      { id: 9, title: 'Best of Disco House ', artist: 'Various Artists', description: '150+ Timeless Disco House edits...', cover: 'https://i.imgur.com/xVxz9Qg.png', gumroadLink: 'https://topdjcrates.gumroad.com/l/cvtrk', originalPrice: 25, discountedPrice: 20, tracks: [ { id: '9a', title: 'Mas que nada', audioPreview: 'https://audio-hosting.netlify.app/disco-house - mas que nada.mp3' }, { id: '9b', title: 'Madan', audioPreview: 'https://audio-hosting.netlify.app/disco-house - madan.mp3' }, { id: '9c', title: 'Le Freak', audioPreview: 'https://audio-hosting.netlify.app/disco-house - le freak.mp3' }, { id: '9d', title: 'Dance the night', audioPreview: 'https://audio-hosting.netlify.app/disco-house - dance the night.mp3' }, { id: '9e', title: 'Dance Lady', audioPreview: 'https://audio-hosting.netlify.app/disco-house - dance lady.mp3' }, ] },
      { id: 10, title: 'Afro-House Vol:3', artist: 'Various Artists', description: '90+ handpicked Afro-House tracks...', cover: 'https://i.imgur.com/VRYh4xL.png', gumroadLink: 'https://topdjcrates.gumroad.com/l/kkmby', originalPrice: 25, discountedPrice: 20, tracks: [ { id: '10a', title: 'Ta Ta Ta', audioPreview: 'https://audio-hosting.netlify.app/afro-house 3 - ta ta ta.mp3' }, { id: '10b', title: 'Secret id (this is america)', audioPreview: 'https://audio-hosting.netlify.app/afro-house 3 - secret id (this is amerca).mp3' }, { id: '10c', title: 'Goosebumps', audioPreview: 'https://audio-hosting.netlify.app/afro-house 3 - goosebumps.mp3' }, { id: '10d', title: 'Dame un grrrr', audioPreview: 'https://audio-hosting.netlify.app/afro-house 3 - dame un grrrr.mp3' }, { id: '10e', title: 'Beggin', audioPreview: 'https://audio-hosting.netlify.app/afro-house 3 - beggin.mp3' }, ] },
      { id: 11, title: 'Top Latin-House', artist: 'Various Artists', description: '140+ The only crate you need...', cover: 'https://i.imgur.com/52TVI3A.png', gumroadLink: 'https://topdjcrates.gumroad.com/l/eamxdq', originalPrice: 25, discountedPrice: 20, tracks: [ { id: '11a', title: 'Work', audioPreview: 'https://audio-hosting.netlify.app/latino-house - work.mp3' }, { id: '11b', title: 'Stayin alive', audioPreview: 'https://audio-hosting.netlify.app/latino-house - stayin alive.mp3' }, { id: '11c', title: 'Shake Body', audioPreview: 'https://audio-hosting.netlify.app/latino-house - shake body.mp3' }, { id: '11d', title: 'Rehab', audioPreview: 'https://audio-hosting.netlify.app/latino-house - rehab.mp3' }, { id: '11e', title: 'El Mariachi', audioPreview: 'https://audio-hosting.netlify.app/latino-house - el mariachi.mp3' } ] },
      { id: 12, title: 'Arabic Mashups & Remixes', artist: 'Various Artists', description: "130+ of the top Arabic hits remixes...", cover: 'https://i.imgur.com/mAFrPXj.png', gumroadLink: 'https://topdjcrates.gumroad.com/l/ywmhnx', originalPrice: 25, discountedPrice: 20, tracks: [ { id: '12a', title: 'Satalana vs Joana', audioPreview: 'https://audio-hosting.netlify.app/arabic-remix - satalana vs joana.mp3' }, { id: '12b', title: 'Sabri alil', audioPreview: 'https://audio-hosting.netlify.app/arabic-remix - sabri alil.mp3' }, { id: '12c', title: 'kalamantina', audioPreview: 'https://audio-hosting.netlify.app/arabic-remix - kalamantina.mp3' }, { id: '12d', title: 'Haoulou', audioPreview: 'https://audio-hosting.netlify.app/arabic-remix - haoulou remix.mp3' }, { id: '12e', title: 'Ekhtiyarati vs Culo', audioPreview: 'https://audio-hosting.netlify.app/arabic-remix - ekhtiyarati vs culo.mp3' } ] },
      { id: 13, title: 'Arabic Mashups & Remixes vol 2', artist: 'Various Artists', description: '90+ exclusive Arabic mashups & remixes', cover: 'https://i.imgur.com/ySLfrg6.png', gumroadLink: 'https://topdjcrates.gumroad.com/l/otval', originalPrice: 25, discountedPrice: 20, tracks: [ { id: '13a', title: 'Badna nwali3 el jaw x pitbull', audioPreview: 'https://audio-hosting.netlify.app/arabic pack 2 - badna nwali3 el jaw x pitbull.mp3' }, { id: '13b', title: 'Bhebak ya lebnan (remix)', audioPreview: 'https://audio-hosting.netlify.app/arabic pack 2 - bhebak ya lebnan (remix).mp3' }, { id: '13c', title: 'Bushret kheyr (edm remix)', audioPreview: 'https://audio-hosting.netlify.app/arabic pack 2 - bushret kheyr (edm remix).mp3' }, { id: '13d', title: 'El ghazal rey2a (remix)', audioPreview: 'https://audio-hosting.netlify.app/arabic pack 2 - el ghazal rey2a (remix).mp3' }, { id: '13e', title: 'El salamou aaleykom (remix)', audioPreview: 'https://audio-hosting.netlify.app/arabic pack 2 - el salamou aaleykom (remix).mp3' }, ] },
      { id: 14, title: 'Arabic Mashups & Remixes vol 3', artist: 'Various Artists', description: '100+ tracks Our latest 2025 collection', cover: 'https://i.imgur.com/ADc4WiJ.png', gumroadLink: 'https://topdjcrates.gumroad.com/l/ujjrg', originalPrice: 25, discountedPrice: 20, tracks: [ { id: '14a', title: 'al bostah - fairuz (giovanni deltz remix)', audioPreview: 'https://audio-hosting.netlify.app/al bostah - fairuz (giovanni deltz remix).mp3' }, { id: '14b', title: 'baladi - kotomoto', audioPreview: 'https://audio-hosting.netlify.app/baladi - kotomoto.mp3' }, { id: '14c', title: 'al tannoura', audioPreview: 'https://audio-hosting.netlify.app/arabic mashup 3 - al tannoura.mp3' }, { id: '14d', title: 'brighter days walhala edit', audioPreview: 'https://audio-hosting.netlify.app/arabic mashup 3 - brighter days walhala edit.mp3' }, { id: '14e', title: 'chebba calamar edit', audioPreview: 'https://audio-hosting.netlify.app/arabic mashup 3 - chebba calamar edit.mp3' }, ] },
      { id: 15, title: 'Top Arabic Wedding Playlist', artist: 'Various Artists', description: '34+ tracks for weddings & celebrations', cover: 'https://i.imgur.com/CjtG3jI.png', gumroadLink: 'https://topdjcrates.gumroad.com/l/wmgit', originalPrice: 25, discountedPrice: 20, tracks: [ { id: '15a', title: '3eress el ghawali', audioPreview: 'https://audio-hosting.netlify.app/tw-3eress el ghawali.mp3' }, { id: '15b', title: 'aarouss', audioPreview: 'https://audio-hosting.netlify.app/tw-aarouss.mp3' }, { id: '15c', title: 'Batalit soum w salleh', audioPreview: 'https://audio-hosting.netlify.app/tw-batalit soum w salleh.mp3' }, { id: '15d', title: 'Jannou behalaki', audioPreview: 'https://audio-hosting.netlify.app/tw-jannou behalaki.mp3' }, { id: '15e', title: 'Ya kel el deni', audioPreview: 'https://audio-hosting.netlify.app/tw-ya kel el deni.mp3' }, ] },
      { id: 16, title: 'I WANT THEM ALL !', artist: 'Various Artists', description: 'The Ultimate DJ Bundle', cover: 'https://i.imgur.com/b28OpXj.png', gumroadLink: 'https://topdjcrates.gumroad.com/l/guvsms', demoLink: null, originalPrice: 300, discountedPrice: 150, tracks: [] },
  ]);
  const [currentlyPlayingAudioUrl, setCurrentlyPlayingAudioUrl] = useState(null);
  const audioPlayerRef = useRef(null);
  const [currentTrackProgress, setCurrentTrackProgress] = useState(0);
  const [currentTrackDuration, setCurrentTrackDuration] = useState(0);

  // LOGIC FOR PROMO POP-UP
  useEffect(() => {
    if (router.pathname === '/' || router.pathname === '/music') {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 6000); 
      return () => clearTimeout(timer);
    } else {
      setShowPopup(false);
    }
  }, [router.pathname]);

  // --- NEW LOGIC FOR SOCIAL PROOF ---
  useEffect(() => {
    const showRandomNotification = () => {
      const randomName = sampleNames[Math.floor(Math.random() * sampleNames.length)];
      const randomLocation = sampleLocations[Math.floor(Math.random() * sampleLocations.length)];
      const randomCrate = musicPacks[Math.floor(Math.random() * musicPacks.length)];

      setNotification({ name: randomName, location: randomLocation, crate: randomCrate });

      // Hide the notification after 5 seconds
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    };

    // Start the first notification after an initial delay
    const initialTimeout = setTimeout(showRandomNotification, 10000); // First one after 10s

    // Set an interval to show notifications periodically
    const interval = setInterval(showRandomNotification, 30000); // Then every 20s

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [musicPacks]);

  // Cleanup when unmounting
  useEffect(() => {
    return () => { 
      if (audioPlayerRef.current) { 
        audioPlayerRef.current.pause(); 
        audioPlayerRef.current.src = ""; 
      } 
    };
  }, []);


  // ✅ Fixed play/pause logic
  const handlePreview = useCallback((audioUrl) => {
    if (!audioPlayerRef.current) return;

    if (currentlyPlayingAudioUrl === audioUrl) {
      if (audioPlayerRef.current.paused) {
        audioPlayerRef.current.play();
      } else {
        audioPlayerRef.current.pause();
      }
    } else {
      audioPlayerRef.current.src = audioUrl;
      audioPlayerRef.current.play();
      setCurrentlyPlayingAudioUrl(audioUrl);

      audioPlayerRef.current.ontimeupdate = () => {
        setCurrentTrackProgress(
          (audioPlayerRef.current.currentTime / audioPlayerRef.current.duration) * 100
        );
        setCurrentTrackDuration(audioPlayerRef.current.duration);
      };

      audioPlayerRef.current.onended = () => {
        setCurrentlyPlayingAudioUrl(null);
        setCurrentTrackProgress(0);
      };
    }
  }, [currentlyPlayingAudioUrl]);

  // ✅ Progress bar seeking
  const handleSeek = useCallback((percentage) => {
    if (audioPlayerRef.current && currentTrackDuration > 0) {
      audioPlayerRef.current.currentTime = (percentage / 100) * currentTrackDuration;
    }
  }, [currentTrackDuration]);

  const sharedProps = {
    musicPacks,
    currentlyPlayingAudioUrl,
    currentTrackProgress,
    currentTrackDuration,
    handlePreview,
    handleSeek,
  };

  return (
    <>
      <Head>
        {/* ... your head content ... */}
      </Head>
       {/* ✅ Google Analytics 4 tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-S4DNDVZD5L"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-S4DNDVZD5L');
        `}
      </Script>
      <div className="min-h-screen bg-background text-text font-sans antialiased">
        <Header />
        <main className="container mx-auto bg-vinyl-grooves">
          <AnimatePresence mode="wait">
            <motion.div
              key={router.route}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Component {...pageProps} {...sharedProps} />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />

        {showPopup && (
          <PromoPopup 
            onClose={() => setShowPopup(false)} 
            purchaseLink="https://topdjcrates.gumroad.com/l/guvsms" 
          />
        )}
        
        <SocialProofPopup 
          notification={notification} 
          onClose={() => setNotification(null)} 
        />

        {/* ✅ Hidden audio element for reliable playback */}
        <audio ref={audioPlayerRef} style={{ display: "none" }} controls />
      </div>
    </>
  );
}

export default MyApp;