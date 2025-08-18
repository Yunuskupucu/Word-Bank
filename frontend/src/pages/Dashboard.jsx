import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../style/Dashboard.module.scss';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: '🧠',
      title: 'Akıllı Öğrenme',
      desc: 'CEFR seviyelerine göre organize edilmiş kelime kartları',
    },
    {
      icon: '📚',
      title: 'Kelime Kutusu',
      desc: 'Öğrendiğin kelimeleri kaydet ve tekrar et',
    },
    {
      icon: '🎯',
      title: 'Etkileşimli Kartlar',
      desc: 'Dokunarak anlamları keşfet, örneklerle pekiştir',
    },
  ];

  const handleContinue = () => {
    navigate('/login');
  };

  return (
    <div className={styles.dashboard}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.floatingEmoji}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            {['📖', '💡', '🎓', '✨', '🌟'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className={styles.gradientOverlay}></div>

      {/* Main Content */}
      <div
        className={`${styles.mainContent} ${isVisible ? styles.visible : ''}`}
      >
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.titleContainer}>
            <h1 className={styles.mainTitle}>WORD BANK</h1>
            <div className={styles.titleEmoji}>🧠📚</div>
          </div>

          <p className={styles.subtitle}>
            İngilizce öğrenmeyi{' '}
            <span className={styles.highlight1}>eğlenceli</span> ve
            <span className={styles.highlight2}> etkili</span> hale getiren
            <br />
            yeni nesil kelime kartı deneyimi
          </p>
        </div>

        {/* Feature Cards */}
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${styles.featureCard} ${
                currentFeature === index ? styles.active : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.cardContent}>
                <div
                  className={`${styles.cardIcon} ${
                    currentFeature === index ? styles.activeIcon : ''
                  }`}
                >
                  {feature.icon}
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.desc}</p>
              </div>

              {/* Glow effect */}
              <div
                className={`${styles.cardGlow} ${
                  currentFeature === index ? styles.glowActive : ''
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button onClick={handleContinue} className={styles.ctaButton}>
          <span className={styles.buttonText}>🚀 Öğrenmeye Başla</span>

          {/* Button glow effect */}
          <div className={styles.buttonGlow}></div>

          {/* Shine effect */}
          <div className={styles.buttonShine}></div>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
