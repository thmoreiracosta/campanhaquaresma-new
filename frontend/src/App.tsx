import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Meditacao from "./components/Meditacao";
import Oracoes from "./components/Oracoes";
import LentenSubsidies from "./components/LentenSubsidies";
import Sobre from "./components/Sobre";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import AudioButton from "./components/AudioButton";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentKey, setContentKey] = useState<string | null>(null);

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (hash) {
      setContentKey(hash); // agora existe!
      setIsModalOpen(true); // agora existe!
    }
  }, []);

  useEffect(() => {
    if (isModalOpen && contentKey) {
      // Atualiza o hash sem recarregar a página
      window.history.replaceState(null, "", `#${contentKey}`);
    }
  }, [isModalOpen, contentKey]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setContentKey(null);
    window.history.replaceState(null, "", window.location.pathname); // limpa hash
  };

  const openModal = (key: string): void => {
    setModalContent(key);
    setModalOpen(true);
  };

  const closeModal = (): void => {
    setModalOpen(false);
  };

  return (
    <div className="checkered-bg text-gray-900 font-crimson min-h-screen flex flex-col">
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
        openModal={openModal}
      />

      <main className="flex-1">
        <Hero scrollToSection={scrollToSection} openModal={openModal} />
        <Meditacao openModal={openModal} />
        <LentenSubsidies openModal={openModal} />
        <Oracoes openModal={openModal} />
        <Sobre scrollToSection={scrollToSection} openModal={openModal} />
        <Partners scrollToSection={scrollToSection} openModal={openModal} />
      </main>

      <Footer scrollToSection={scrollToSection} openModal={openModal} />
      <AudioButton />
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        contentKey={modalContent}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        contentKey={contentKey}
      />
    </div>
  );
}
