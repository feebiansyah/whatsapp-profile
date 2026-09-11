import { useParams } from 'react-router-dom'

const profiles = import.meta.glob('../profiles/*/*/config.js', { eager: true, import: 'default' })
const slug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const defaultDownload = 'https://www.whatsapp.com/download'

export default function WhatsAppProfile() {
  const { group, character } = useParams()
  const profile = slug.test(group ?? '') && slug.test(character ?? '')
    ? profiles[`../profiles/${group}/${character}/config.js`]
    : undefined

  return <>
    <title>{profile ? `${profile.name} | WhatsApp` : 'Profil tidak ditemukan | WhatsApp'}</title>
    <header className="whatsapp-header">
      <a href="https://www.whatsapp.com/" aria-label="Kembali ke WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="m12 4-8 8 8 8M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>WhatsApp</span>
      </a>
    </header>
    {profile ? <main className="profile">
      <img className="profile-image" src={profile.image} alt={`Foto profil ${profile.name}`} width="180" height="180" />
      <h1>{profile.name}</h1>
      <p className="profile-description">{profile.description}</p>
      <nav className="profile-actions" aria-label={`Hubungi ${profile.name}`}>
        <a className="action-link" href={profile.messageLink}>KIRIM PESAN</a>
        <a className="action-link" href={profile.videoCallLink}>VIDEO CALL</a>
        <a className="action-link" href={profile.callLink}>PANGGILAN</a>
      </nav>
      <p className="download">Belum punya WhatsApp?<br />
        <a href={profile.downloadLink || defaultDownload}>Unduh Sekarang</a>
      </p>
    </main> : <main className="profile not-found">
      <h1>Profil tidak ditemukan.</h1>
      <p className="profile-description">Periksa kembali alamat kelompok dan karakter yang Anda buka.</p>
    </main>}
  </>
}
