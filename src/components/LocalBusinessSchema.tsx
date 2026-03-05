export default function LocalBusinessSchema() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Physician", // or MedicalClinic, HealthAndBeautyBusiness
    "name": "Premium Physio",
    "image": "https://example.com/logo.png",
    "@id": "",
    "url": "https://premiumphysio.com",
    "telephone": "+1234567890",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Wellness Avenue, Suite 400",
      "addressLocality": "Metropolis",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "priceRange": "$$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
    />
  );
}
