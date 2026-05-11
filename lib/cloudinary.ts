/**
 * Uploads a file to Cloudinary using an unsigned upload preset.
 * Returns the secure_url of the uploaded image.
 */
export async function uploadToCloudinary(file: File): Promise<string> {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    throw new Error("Cloudinary environment variables are not configured.");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    { method: "POST", body: formData }
  );

  if (!res.ok) {
    throw new Error(`Cloudinary upload failed (${res.status}): ${res.statusText}`);
  }

  const data = await res.json();

  if (!data.secure_url) {
    throw new Error("Cloudinary response is missing secure_url.");
  }

  return data.secure_url as string;
}
