const WhatsAppButton = () => {
  const phoneNumber = "5547996964939"; // Número no formato internacional
  const message = "Olá, quero mais informações!";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
      WhatsApp
    </a>
  );
};

export default WhatsAppButton;
