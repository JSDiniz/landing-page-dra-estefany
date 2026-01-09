import { ClinicAddress } from "../mocks/clinicAddresses";

export function getGoogleMapsLink(address: ClinicAddress) {
  // 1️⃣ se já tiver URL pronta, usa
  if (address.googleMapsUrl && address.googleMapsUrl.trim() !== "") {
    return address.googleMapsUrl;
  }

  // 2️⃣ senão, gera dinamicamente
  const query = `${address.street}, ${address.number} - ${address.neighborhood}, ${address.city} - ${address.state}, ${address.zip}`;

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query
  )}`;
}
