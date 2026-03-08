export function shareOn(platform: "whatsapp" | "facebook"): void {
  const text =
    "Participe da Campanha da Quaresma 2026: 'Mestre, onde moras?' — 'Vinde e vede.' (Jo 1,38-39) ✝️🙏\n\n";

  const url = window.location.href;
  const message = encodeURIComponent(text + url);

  if (platform === "whatsapp") {
    window.open(`https://wa.me/?text=${message}`, "_blank");
  }

  if (platform === "facebook") {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  }
}